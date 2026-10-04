import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { buildSystemPrompt } from "@/lib/systemPrompt";
import { ChatRequestBody, ChatMessage, LeadData } from "@/lib/types";
import {
  classifyIntent,
  computeLeadScore,
  extractLeadSignals,
  shouldNotify,
} from "@/lib/leadScoring";
import { notifyAjiraMajuuLead } from "@/lib/resend";
import {
  notifyAjiraMajuuWhatsApp,
  formatLeadWhatsAppMessage,
  formatChatStartedWhatsAppMessage,
} from "@/lib/whatsapp";
import {
  isRateLimited,
  hasAlreadyNotified,
  markNotified,
  hasAlreadyPinged,
  markPinged,
} from "@/lib/rateLimit";

export const runtime = "nodejs";

function sanitizeMessages(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter(
      (m): m is ChatMessage =>
        m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-30); // keep the last 30 turns max
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { reply: "You're sending messages a little fast — please wait a moment and try again." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ChatRequestBody;
    const sessionId = typeof body.sessionId === "string" ? body.sessionId : "unknown-session";
    const messages = sanitizeMessages(body.messages);

    if (messages.length === 0) {
      return NextResponse.json({ reply: "Karibu! How can I help you today?" });
    }

    // Ping WhatsApp the moment someone starts chatting — once per session,
    // regardless of whether they go on to share contact details. This is
    // separate from the full lead notification below, which fires only
    // once we actually have something (email/phone/summary) worth acting on.
    if (messages.length === 1 && !hasAlreadyPinged(sessionId)) {
      markPinged(sessionId);
      notifyAjiraMajuuWhatsApp(
        formatChatStartedWhatsAppMessage(messages[0].content)
      ).catch((err) => console.error("[api/chat] Chat-started ping failed:", err));
    }

    let reply =
      "I'm having trouble responding right now. Please try again in a moment, or I can help you get in touch with the Ajira Majuu team.";

    try {
      const client = getOpenAIClient();
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.6,
        max_tokens: 400,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      });
      reply = completion.choices[0]?.message?.content?.trim() || reply;
    } catch (aiErr) {
      console.error("[api/chat] OpenAI error:", aiErr);
      // fall through with the friendly fallback `reply` already set
    }

    // --- Lead detection & notification (best-effort, never blocks the reply) ---
    try {
      const fullTranscript: ChatMessage[] = [...messages, { role: "assistant", content: reply }];
      const fields = extractLeadSignals(fullTranscript);
      const score = computeLeadScore(fields, fullTranscript.length);
      const intent = classifyIntent(fields, score);

      if (shouldNotify(fields, score) && !hasAlreadyNotified(sessionId)) {
        const lastUserLanguageHint = /[ĩũŵ]|habari|nataka|karibu|kazi/i.test(
          messages.map((m) => m.content).join(" ")
        )
          ? "Swahili/Sheng"
          : "English";

        const lead: LeadData = {
          sessionId,
          email: fields.email,
          phone: fields.phone,
          intent,
          leadScore: score,
          language: lastUserLanguageHint,
          summary: buildQuickSummary(fullTranscript),
          transcript: fullTranscript,
          timestamp: new Date().toISOString(),
        };

        const [emailSent] = await Promise.all([
          notifyAjiraMajuuLead(lead),
          notifyAjiraMajuuWhatsApp(
            formatLeadWhatsAppMessage({
              phone: fields.phone,
              email: fields.email,
              summary: lead.summary,
            })
          ),
        ]);
        if (emailSent) markNotified(sessionId);
      }
    } catch (leadErr) {
      console.error("[api/chat] Lead detection error:", leadErr);
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[api/chat] Fatal error:", err);
    return NextResponse.json(
      {
        reply:
          "I'm having trouble responding right now. Please try again shortly, or I can help you get in touch with the Ajira Majuu team.",
      },
      { status: 500 }
    );
  }
}

/** Cheap extractive summary fallback — good enough for the email until/unless
 *  you wire a dedicated summarization call. */
function buildQuickSummary(transcript: ChatMessage[]): string {
  const userLines = transcript.filter((m) => m.role === "user").map((m) => m.content);
  const joined = userLines.join(" ").slice(0, 400);
  return joined.length > 0
    ? `Visitor said: "${joined}"${joined.length >= 400 ? "…" : ""}`
    : "No visitor messages captured yet.";
}
