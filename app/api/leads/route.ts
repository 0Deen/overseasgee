import { NextRequest, NextResponse } from "next/server";
import { LeadData } from "@/lib/types";
import { notifyAjiraMajuuLead } from "@/lib/resend";
import { notifyAjiraMajuuWhatsApp, formatLeadWhatsAppMessage } from "@/lib/whatsapp";
import { isRateLimited } from "@/lib/rateLimit";
import { v4 as uuidv4 } from "uuid";

export const runtime = "nodejs";

interface LeadFormInput {
  name?: string;
  phone?: string;
  email?: string;
  preferredCountry?: string;
  preferredJob?: string;
  message?: string;
}

function isValidPhone(v?: string) {
  return Boolean(v && /^\+?\d{9,13}$/.test(v.replace(/\s/g, "")));
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "Too many requests." }, { status: 429 });
    }

    const input = (await req.json()) as LeadFormInput;

    if (!input.name || (!input.phone && !input.email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and a phone number or email." },
        { status: 400 }
      );
    }

    if (input.phone && !isValidPhone(input.phone)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const lead: LeadData = {
      sessionId: uuidv4(),
      name: input.name.slice(0, 120),
      phone: input.phone?.slice(0, 20),
      email: input.email?.slice(0, 120),
      preferredCountry: input.preferredCountry?.slice(0, 60),
      preferredJob: input.preferredJob?.slice(0, 60),
      intent: "HIGH",
      leadScore: 80,
      summary: input.message?.slice(0, 500) || "Visitor submitted the contact form directly.",
      transcript: [],
      timestamp: new Date().toISOString(),
    };

    // Email and WhatsApp are both best-effort and independent of each
    // other — if one fails (e.g. WhatsApp not configured yet), the other
    // still goes through, and neither blocks the visitor's success message.
    const [emailSent, whatsappSent] = await Promise.all([
      notifyAjiraMajuuLead(lead),
      notifyAjiraMajuuWhatsApp(
        formatLeadWhatsAppMessage({
          name: lead.name,
          phone: lead.phone,
          email: lead.email,
          preferredCountry: lead.preferredCountry,
          preferredJob: lead.preferredJob,
          summary: lead.summary,
        })
      ),
    ]);

    return NextResponse.json({
      ok: true,
      message:
        "Thank you — the Ajira Majuu team has received your details and will follow up with you soon.",
      emailSent,
      whatsappSent,
    });
  } catch (err) {
    console.error("[api/leads] Error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
