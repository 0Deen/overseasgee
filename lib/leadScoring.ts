import { ChatMessage, LeadIntent } from "./types";

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const PHONE_RE = /(\+?254|0)?7\d{8}|\+?\d{9,13}/;

export interface ExtractedLeadFields {
  email?: string;
  phone?: string;
  wantsHuman: boolean;
  isEmployer: boolean;
  isExistingApplicant: boolean;
  mentionsPassport: boolean;
}

/** Very lightweight, deterministic pre-scan of the transcript for triggers.
 *  This runs in addition to (not instead of) the AI's own understanding —
 *  it's a safety net so we never miss an obvious high-intent signal. */
export function extractLeadSignals(messages: ChatMessage[]): ExtractedLeadFields {
  const text = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content.toLowerCase())
    .join(" \n ");

  const email = text.match(EMAIL_RE)?.[0];
  const phone = text.match(PHONE_RE)?.[0];

  const wantsHuman = /\b(talk to (someone|a human|recruitment)|call me|speak to (someone|recruitment)|human agent)\b/.test(
    text
  );

  const isEmployer = /\b(we need workers|i'?m an employer|our company needs|hire (kenyan|workers)|looking to recruit)\b/.test(
    text
  );

  const isExistingApplicant = /\b(i already applied|check my application|application number|my application status)\b/.test(
    text
  );

  const mentionsPassport = /\bpassport\b/.test(text);

  return { email, phone, wantsHuman, isEmployer, isExistingApplicant, mentionsPassport };
}

export function computeLeadScore(fields: ExtractedLeadFields, messageCount: number): number {
  let score = 5;
  if (fields.email) score += 20;
  if (fields.phone) score += 25;
  if (fields.wantsHuman) score += 20;
  if (fields.isEmployer) score += 15;
  if (fields.isExistingApplicant) score += 10;
  if (messageCount > 6) score += 10;
  return Math.min(100, score);
}

export function classifyIntent(fields: ExtractedLeadFields, score: number): LeadIntent {
  if (fields.isEmployer) return "EMPLOYER";
  if (fields.isExistingApplicant) return "SUPPORT";
  if (score >= 50) return "HIGH";
  if (score >= 20) return "MEDIUM";
  return "LOW";
}

/** Decide whether this conversation is worth emailing the team about right now. */
export function shouldNotify(fields: ExtractedLeadFields, score: number): boolean {
  return (
    fields.wantsHuman ||
    Boolean(fields.email && fields.phone) ||
    fields.isEmployer ||
    fields.isExistingApplicant ||
    score >= 50
  );
}
