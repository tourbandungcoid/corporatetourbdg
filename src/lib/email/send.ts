/**
 * Email transactional layer via Resend.
 *
 * Gracefully no-ops when RESEND_API_KEY is not set, so the rest of the
 * lead-capture flow keeps working in dev / preview environments.
 *
 * Required env vars (production):
 *   - RESEND_API_KEY: API key from resend.com dashboard
 *   - RESEND_FROM_EMAIL: verified sender (e.g. "noreply@corporate.tourbandung.co.id")
 *   - RESEND_SALES_NOTIFY_TO: comma-separated emails to receive lead alerts
 */

import { Resend } from "resend";
import { CONTACT, SITE } from "@/lib/site";

const RESEND_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM_EMAIL ?? `noreply@${new URL(SITE.url).hostname}`;
const SALES_NOTIFY = (process.env.RESEND_SALES_NOTIFY_TO ?? CONTACT.email)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

let client: Resend | null = null;
function getClient(): Resend | null {
  if (!RESEND_KEY) return null;
  if (!client) client = new Resend(RESEND_KEY);
  return client;
}

export type SendResult = {
  ok: boolean;
  skipped?: boolean;
  reason?: string;
};

async function send({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}): Promise<SendResult> {
  const c = getClient();
  if (!c) {
    // Graceful no-op in dev / when key missing
    console.log("[email] SKIPPED (no RESEND_API_KEY):", { to, subject });
    return { ok: false, skipped: true, reason: "RESEND_API_KEY not set" };
  }

  try {
    const { error } = await c.emails.send({
      from: FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
      replyTo,
    });

    if (error) {
      console.error("[email] send failed:", error);
      return { ok: false, reason: error.message };
    }
    return { ok: true };
  } catch (e) {
    console.error("[email] send threw:", e);
    return { ok: false, reason: e instanceof Error ? e.message : "unknown" };
  }
}

// ---------------------------------------------------------------------
// Lead confirmation email (to client)
// ---------------------------------------------------------------------
export async function sendLeadConfirmation({
  to,
  fullName,
  refCode,
  source,
}: {
  to: string;
  fullName: string;
  refCode: string;
  source: string;
}): Promise<SendResult> {
  const trackUrl = `${SITE.url}/proposal/thank-you/${refCode}`;
  const sourceLabel: Record<string, string> = {
    request_proposal: "Request Proposal",
    quick_quote: "Quick Quote",
    book_consultation: "Book Consultation",
    lead_magnet: "Sample Proposal Download",
    whatsapp_inbound: "WhatsApp",
    newsletter: "Newsletter Signup",
    manual: "Direct Contact",
  };

  const subject = `${SITE.name} — ${sourceLabel[source] ?? "Request"} received (${refCode})`;

  const html = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:'Inter','Segoe UI',sans-serif;color:#0F1F1A;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(15,31,26,0.05);">
          <tr>
            <td style="padding:32px 32px 16px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#6BA239;font-weight:600;">
                ${SITE.name}
              </p>
              <h1 style="margin:12px 0 0;font-size:28px;font-weight:700;letter-spacing:-0.02em;line-height:1.2;">
                Got it, ${fullName} 🎉
              </h1>
              <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#4F5E58;">
                Senior planner kami sudah notified. Proposal lengkap akan sampai email lo dalam ≤24 jam (avg 6 jam saat working hours).
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#FAFAF7;border-radius:12px;padding:20px;">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8B9690;">Your reference</p>
                    <p style="margin:6px 0 0;font-size:28px;font-weight:700;letter-spacing:0.02em;font-family:'Inter','Segoe UI',sans-serif;">${refCode}</p>
                    <p style="margin:8px 0 0;font-size:12px;color:#4F5E58;">Simpan kode ini untuk track status nanti.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 32px;">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8B9690;">What happens next</p>
              <ol style="margin:0;padding-left:18px;color:#4F5E58;font-size:14px;line-height:1.8;">
                <li>Senior planner review brief Anda (dalam 2 jam)</li>
                <li>Custom proposal di-draft (dalam 18 jam)</li>
                <li>Proposal lengkap sampai email Anda (≤24 jam)</li>
                <li>Optional: briefing call follow-up jika perlu</li>
              </ol>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 16px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background:#0F1F1A;border-radius:999px;">
                    <a href="${trackUrl}" style="display:inline-block;padding:14px 28px;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:500;">
                      Track proposal status →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;font-size:13px;color:#4F5E58;">
                Pertanyaan urgent? WhatsApp <a href="https://wa.me/${CONTACT.whatsapp}" style="color:#4E7E2A;font-weight:500;text-decoration:none;">${CONTACT.phoneDisplay}</a> dengan ref <strong>${refCode}</strong>.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 32px;border-top:1px solid #EFF0E8;">
              <p style="margin:0;font-size:12px;color:#8B9690;line-height:1.6;">
                ${SITE.name} — Specialist B2B corporate outing di Bandung &amp; Jawa Barat sejak 2018.<br />
                400+ events delivered · 92% repeat booking · ${CONTACT.address.full}
              </p>
            </td>
          </tr>
        </table>

        <p style="margin:16px 0 0;font-size:11px;color:#8B9690;">
          You received this email because you submitted a request at <a href="${SITE.url}" style="color:#8B9690;">${SITE.url}</a>.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `Got it, ${fullName}!

${SITE.name} — your ${sourceLabel[source] ?? "request"} has been received.

Reference: ${refCode}
Track status: ${trackUrl}

Proposal lengkap akan sampai email Anda dalam ≤24 jam.

Pertanyaan urgent? WhatsApp ${CONTACT.phoneDisplay} dengan ref ${refCode}.

${SITE.name}
${CONTACT.address.full}
`;

  return send({
    to,
    subject,
    html,
    text,
    replyTo: CONTACT.email,
  });
}

// ---------------------------------------------------------------------
// Sales notification email (to internal team)
// ---------------------------------------------------------------------
export async function sendSalesNotification({
  refCode,
  leadId,
  fullName,
  workEmail,
  whatsapp,
  companyName,
  source,
  score,
  priority,
}: {
  refCode: string;
  leadId?: string;
  fullName: string;
  workEmail: string;
  whatsapp?: string | null;
  companyName: string;
  source: string;
  score: number;
  priority?: string | null;
}): Promise<SendResult> {
  const priorityEmoji: Record<string, string> = {
    hot: "🔥",
    warm: "🟠",
    medium: "🟡",
    cool: "🟢",
    cold: "⚪",
  };
  const emoji = priority ? priorityEmoji[priority] ?? "" : "";

  const subject = `${emoji} New ${priority?.toUpperCase() ?? "LEAD"} (${score}) — ${companyName} via ${source}`;
  const adminUrl = leadId
    ? `${SITE.url}/admin/leads/${leadId}`
    : `${SITE.url}/admin/leads`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:'Inter','Segoe UI',sans-serif;color:#0F1F1A;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="padding:24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="560" style="max-width:560px;background:#FFFFFF;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:24px 28px;background:#0F1F1A;color:#FAFAF7;">
              <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.6;">New lead</p>
              <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;line-height:1.3;">
                ${emoji} ${fullName} — ${companyName}
              </h1>
              <p style="margin:8px 0 0;font-size:13px;opacity:0.75;">
                Source: <strong>${source}</strong> · Score: <strong>${score}</strong> · Priority: <strong>${(priority ?? "—").toUpperCase()}</strong>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px;">
              <table role="presentation" cellspacing="0" cellpadding="6" border="0" width="100%" style="font-size:14px;color:#0F1F1A;">
                <tr><td style="color:#8B9690;width:120px;">Reference</td><td><strong style="font-family:monospace;">${refCode}</strong></td></tr>
                <tr><td style="color:#8B9690;">Email</td><td><a href="mailto:${workEmail}" style="color:#4E7E2A;">${workEmail}</a></td></tr>
                ${whatsapp ? `<tr><td style="color:#8B9690;">WhatsApp</td><td><a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}" style="color:#4E7E2A;">${whatsapp}</a></td></tr>` : ""}
                <tr><td style="color:#8B9690;">Company</td><td>${companyName}</td></tr>
                <tr><td style="color:#8B9690;">Submitted</td><td>${new Date().toLocaleString("id-ID")}</td></tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background:#0F1F1A;border-radius:999px;">
                    <a href="${adminUrl}" style="display:inline-block;padding:12px 24px;color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:500;">
                      Open in Admin →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <p style="margin:16px 0 0;font-size:11px;color:#8B9690;">
          Internal notification from ${SITE.name}. Respond SLA: HOT &lt;1h, WARM &lt;6h, MEDIUM &lt;24h.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `New lead: ${fullName} (${companyName})
Source: ${source} | Score: ${score} | Priority: ${priority ?? "—"}

Reference: ${refCode}
Email: ${workEmail}
${whatsapp ? `WhatsApp: ${whatsapp}\n` : ""}
Submitted: ${new Date().toLocaleString("id-ID")}

Open in admin: ${adminUrl}`;

  return send({
    to: SALES_NOTIFY,
    subject,
    html,
    text,
  });
}

/**
 * Convenience: fire both confirmation + sales notification in parallel.
 * Errors in one don't block the other (Promise.allSettled).
 */
export async function notifyNewLead({
  refCode,
  leadId,
  fullName,
  workEmail,
  whatsapp,
  companyName,
  source,
  score,
  priority,
}: {
  refCode: string;
  leadId?: string;
  fullName: string;
  workEmail: string;
  whatsapp?: string | null;
  companyName: string;
  source: string;
  score: number;
  priority?: string | null;
}): Promise<void> {
  await Promise.allSettled([
    sendLeadConfirmation({ to: workEmail, fullName, refCode, source }),
    sendSalesNotification({
      refCode,
      leadId,
      fullName,
      workEmail,
      whatsapp,
      companyName,
      source,
      score,
      priority,
    }),
  ]);
}

// ---------------------------------------------------------------------
// Proposal sent email (to client) — to be triggered manually from admin
// ---------------------------------------------------------------------
export async function sendProposalReadyEmail({
  to,
  fullName,
  refCode,
  senderName,
}: {
  to: string;
  fullName: string;
  refCode: string;
  senderName: string;
}): Promise<SendResult> {
  const trackUrl = `${SITE.url}/proposal/track/${refCode}`;
  const subject = `Proposal Anda siap — ${SITE.name} (${refCode})`;

  const html = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:'Inter','Segoe UI',sans-serif;color:#0F1F1A;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(15,31,26,0.05);">
          <tr>
            <td style="padding:32px 32px 16px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#6BA239;font-weight:600;">
                Proposal ready
              </p>
              <h1 style="margin:12px 0 0;font-size:28px;font-weight:700;letter-spacing:-0.02em;line-height:1.2;">
                Halo ${fullName}, proposal Anda siap.
              </h1>
              <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#4F5E58;">
                Tim kami sudah selesai draft proposal lengkap untuk request <strong style="font-family:monospace;">${refCode}</strong>. Dokumen mencakup breakdown line-item, 2 alternative venue, timeline event, dan risk register.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 32px 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background:#0F1F1A;border-radius:999px;">
                    <a href="${trackUrl}" style="display:inline-block;padding:14px 28px;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:500;">
                      Open proposal →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;font-size:13px;color:#4F5E58;">
                Ada pertanyaan? Reply email ini atau WhatsApp <a href="https://wa.me/${CONTACT.whatsapp}" style="color:#4E7E2A;font-weight:500;text-decoration:none;">${CONTACT.phoneDisplay}</a> dengan ref <strong>${refCode}</strong>.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 24px;">
              <p style="margin:0;font-size:13px;color:#4F5E58;line-height:1.7;">
                — ${senderName}<br />
                <span style="color:#8B9690;">${SITE.name}</span>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px 32px;border-top:1px solid #EFF0E8;">
              <p style="margin:0;font-size:12px;color:#8B9690;line-height:1.6;">
                ${SITE.name} — Specialist B2B corporate outing di Bandung &amp; Jawa Barat sejak 2018.<br />
                400+ events delivered · 92% repeat booking · ${CONTACT.address.full}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `Halo ${fullName},

Proposal lengkap untuk request ${refCode} sudah siap.

Open proposal: ${trackUrl}

Reply email ini atau WhatsApp ${CONTACT.phoneDisplay} dengan ref ${refCode} kalau ada pertanyaan.

— ${senderName}
${SITE.name}
${CONTACT.address.full}
`;

  return send({
    to,
    subject,
    html,
    text,
    replyTo: CONTACT.email,
  });
}
