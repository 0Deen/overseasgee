import { LeadData } from "./types";

function esc(v?: string) {
  if (!v) return "—";
  return v.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const priorityColors: Record<string, string> = {
  HIGH: "#DC2626",
  MEDIUM: "#F5A623",
  LOW: "#6B7280",
  SUPPORT: "#2563EB",
  EMPLOYER: "#059669",
  GENERAL: "#6B7280",
};

export function buildLeadEmailHtml(lead: LeadData): string {
  const color = priorityColors[lead.intent] ?? "#6B7280";
  const transcriptRows = lead.transcript
    .map(
      (m) => `
      <tr>
        <td style="padding:6px 10px;font-size:12px;color:${
          m.role === "user" ? "#4B1E8C" : "#374151"
        };font-weight:${m.role === "user" ? "700" : "400"};vertical-align:top;width:70px;">
          ${m.role === "user" ? "Visitor" : "Assistant"}
        </td>
        <td style="padding:6px 10px;font-size:13px;color:#111827;">${esc(m.content)}</td>
      </tr>`
    )
    .join("");

  return `
  <div style="font-family: -apple-system, Inter, Arial, sans-serif; background:#F3F0FA; padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E9E3F7;">
      <div style="background:linear-gradient(135deg,#4B1E8C,#3A1568);padding:24px 28px;">
        <div style="color:#F5A623;font-size:12px;letter-spacing:2px;font-weight:700;">AJIRA MAJUU</div>
        <div style="color:#ffffff;font-size:20px;font-weight:700;margin-top:4px;">New Applicant Lead</div>
        <div style="margin-top:12px;">
          <span style="display:inline-block;background:${color};color:#fff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:999px;">
            ${lead.intent} PRIORITY · SCORE ${lead.leadScore}
          </span>
        </div>
      </div>

      <div style="padding:24px 28px;">
        <h3 style="margin:0 0 10px 0;color:#4B1E8C;font-size:15px;">Applicant Information</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;width:140px;">Name</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.name)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Phone</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.phone)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Email</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.email)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Preferred Country</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.preferredCountry)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Preferred Job</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.preferredJob)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Experience</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.experience)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Passport</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.passportStatus)}</td></tr>
          <tr><td style="padding:4px 0;color:#6B7280;font-size:13px;">Language</td><td style="padding:4px 0;font-size:13px;font-weight:600;">${esc(lead.language)}</td></tr>
        </table>

        <h3 style="margin:0 0 8px 0;color:#4B1E8C;font-size:15px;">Conversation Summary</h3>
        <p style="font-size:13px;color:#111827;line-height:1.5;background:#F9F7FE;padding:12px 14px;border-radius:10px;border:1px solid #E9E3F7;">
          ${esc(lead.summary)}
        </p>

        <h3 style="margin:20px 0 8px 0;color:#4B1E8C;font-size:15px;">Conversation Transcript</h3>
        <table style="width:100%;border-collapse:collapse;background:#FAFAFA;border-radius:10px;overflow:hidden;">
          ${transcriptRows}
        </table>

        <div style="margin-top:24px;text-align:center;">
          <a href="tel:${esc(lead.phone)}" style="display:inline-block;background:#4B1E8C;color:#fff;padding:10px 20px;border-radius:999px;text-decoration:none;font-size:13px;font-weight:700;">
            Call Applicant
          </a>
        </div>

        <div style="margin-top:16px;color:#9CA3AF;font-size:11px;text-align:center;">
          Session ${esc(lead.sessionId)} · ${esc(lead.timestamp)}
        </div>
      </div>
    </div>
  </div>`;
}
