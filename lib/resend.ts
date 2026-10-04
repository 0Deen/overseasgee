import { Resend } from "resend";
import { LeadData } from "./types";
import { buildLeadEmailHtml } from "./emailTemplate";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured on the server.");
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

/**
 * Sends a lead notification email to the Ajira Majuu recruitment team.
 * Failures are caught and logged server-side; they never bubble up to the chat UI.
 */
export async function notifyAjiraMajuuLead(lead: LeadData): Promise<boolean> {
  try {
    const toRaw = process.env.AJIRA_MAJUU_NOTIFICATION_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!toRaw || !from) {
      console.error("[resend] Missing AJIRA_MAJUU_NOTIFICATION_EMAIL or RESEND_FROM_EMAIL env vars.");
      return false;
    }
    // Supports a comma-separated list so you can notify multiple inboxes
    // (e.g. "deen@ajiramajuu.com,ajiramajuuh@gmail.com") from one env var.
    const to = toRaw.split(",").map((addr) => addr.trim()).filter(Boolean);

    const client = getResendClient();
    const subjectPriority = lead.intent === "HIGH" ? "🔴 HIGH" : lead.intent;

    const { data, error } = await client.emails.send({
      from,
      to,
      subject: `New Ajira Majuu Lead (${subjectPriority}) — ${lead.name ?? "Unnamed visitor"}`,
      html: buildLeadEmailHtml(lead),
    });

    if (error) {
      // Resend's SDK returns errors in this `error` object rather than
      // throwing — logging the full thing (not just a generic message) is
      // what actually tells you *why* a send failed: an unverified `from`
      // domain, an invalid recipient, a suspended API key, etc.
      console.error("[resend] Send rejected by Resend:", JSON.stringify(error));
      return false;
    }

    console.log(`[resend] Lead email sent (id: ${data?.id}) to ${to.join(", ")}`);
    return true;
  } catch (err) {
    console.error("[resend] Failed to send lead notification:", err);
    return false;
  }
}
