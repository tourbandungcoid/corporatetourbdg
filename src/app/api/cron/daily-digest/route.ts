/**
 * Daily digest cron — emails sales team a summary of:
 *  - New leads in last 24h
 *  - SLA breaches (still in submitted/under_review past their SLA window)
 *  - Follow-ups due today
 *  - Stale proposals (sent / revising / feedback_requested >7d no update)
 *
 * Run schedule via vercel.json crons (default: 08:00 WIB daily = 01:00 UTC).
 *
 * Auth options:
 *   - Vercel cron → automatic Authorization: Bearer ${CRON_SECRET}
 *   - Manual trigger → ?secret=${CRON_SECRET}
 *
 * Env required:
 *   - CRON_SECRET                    (random token, required to authorize)
 *   - RESEND_API_KEY + RESEND_FROM_EMAIL + RESEND_SALES_NOTIFY_TO
 *
 * Returns:
 *   { ok: true, sent: true, ... }   email sent
 *   { ok: true, sent: false, ... }  no recipients or no items to report
 */
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";
import { CONTACT, SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

const SLA_HOURS: Record<string, number> = {
  hot: 2,
  warm: 8,
  medium: 24,
  cool: 48,
  cold: 168,
};

function isAuthorized(req: Request): boolean {
  const expected = process.env.CRON_SECRET;
  if (!expected) return false;
  const auth = req.headers.get("authorization");
  if (auth === `Bearer ${expected}`) return true;
  const url = new URL(req.url);
  if (url.searchParams.get("secret") === expected) return true;
  return false;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const sb = createAdminClient();
  const nowIso = new Date().toISOString();
  const dayAgoIso = new Date(Date.now() - 24 * 36e5).toISOString();
  const weekAgoIso = new Date(Date.now() - 7 * 24 * 36e5).toISOString();

  const [newLeadsRes, slaPendingRes, followUpsRes, staleSentRes] = await Promise.all([
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, source, priority, lead_score, created_at"
      )
      .gte("created_at", dayAgoIso)
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(50),
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, priority, status, created_at"
      )
      .in("status", ["submitted", "under_review"])
      .is("deleted_at", null)
      .order("created_at", { ascending: true })
      .limit(50),
    sb
      .from("leads")
      .select("id, ref_code, full_name, company_name, follow_up_at")
      .lte("follow_up_at", nowIso)
      .not("follow_up_at", "is", null)
      .is("deleted_at", null)
      .order("follow_up_at", { ascending: true })
      .limit(30),
    sb
      .from("leads")
      .select("id, ref_code, full_name, company_name, status, updated_at")
      .in("status", ["sent", "feedback_requested", "revising"])
      .lte("updated_at", weekAgoIso)
      .is("deleted_at", null)
      .order("updated_at", { ascending: true })
      .limit(20),
  ]);

  const newLeads = newLeadsRes.data ?? [];
  const slaBreaches = (slaPendingRes.data ?? [])
    .map((l) => {
      const ageHours = (Date.now() - new Date(l.created_at).getTime()) / 36e5;
      const sla = SLA_HOURS[l.priority ?? "medium"] ?? 24;
      return { ...l, ageHours, sla, overdueBy: ageHours - sla };
    })
    .filter((x) => x.overdueBy > 0);
  const followUps = followUpsRes.data ?? [];
  const staleSent = staleSentRes.data ?? [];

  const totals = {
    newLeads: newLeads.length,
    slaBreaches: slaBreaches.length,
    followUps: followUps.length,
    staleSent: staleSent.length,
  };

  if (
    totals.newLeads === 0 &&
    totals.slaBreaches === 0 &&
    totals.followUps === 0 &&
    totals.staleSent === 0
  ) {
    return NextResponse.json({
      ok: true,
      sent: false,
      reason: "nothing to report",
      totals,
    });
  }

  const recipients = (process.env.RESEND_SALES_NOTIFY_TO ?? CONTACT.email)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    return NextResponse.json({
      ok: false,
      error: "No recipients configured",
      totals,
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      sent: false,
      reason: "RESEND_API_KEY not set",
      totals,
    });
  }

  const dateLabel = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const subject = `Daily digest · ${dateLabel} · ${totals.newLeads} new · ${totals.slaBreaches} SLA · ${totals.followUps} follow-ups`;
  const adminBase = `${SITE.url}/admin/leads`;

  const renderLeadList = (
    items: { id: string; ref_code: string; full_name: string; company_name: string }[],
    rightExtra?: (l: {
      id: string;
      ref_code: string;
      full_name: string;
      company_name: string;
    }) => string
  ) =>
    items
      .map(
        (l) =>
          `<li style="padding:8px 0;border-bottom:1px solid #EFF0E8;font-size:14px;">
            <a href="${adminBase}/${l.id}" style="color:#0F1F1A;text-decoration:none;font-weight:500;font-family:monospace;">${l.ref_code}</a>
            <span style="color:#4F5E58"> · ${l.full_name} (${l.company_name})</span>
            ${rightExtra ? `<span style="color:#8B9690;font-size:12px;float:right;">${rightExtra(l)}</span>` : ""}
          </li>`
      )
      .join("");

  const sections: string[] = [];

  if (totals.slaBreaches > 0) {
    sections.push(`
      <h2 style="font-size:18px;color:#B91C1C;margin:24px 0 8px;">⚠ SLA breaches (${totals.slaBreaches})</h2>
      <ul style="list-style:none;padding:0;margin:0;">
        ${renderLeadList(
          slaBreaches,
          (l) => {
            const item = slaBreaches.find((x) => x.id === l.id);
            return item ? `+${item.overdueBy.toFixed(0)}h overdue` : "";
          }
        )}
      </ul>
    `);
  }

  if (totals.followUps > 0) {
    sections.push(`
      <h2 style="font-size:18px;color:#B8924C;margin:24px 0 8px;">⏰ Follow-ups due (${totals.followUps})</h2>
      <ul style="list-style:none;padding:0;margin:0;">
        ${renderLeadList(followUps, (l) => {
          const item = followUps.find((x) => x.id === l.id);
          return item && item.follow_up_at
            ? new Date(item.follow_up_at).toLocaleString("id-ID", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "";
        })}
      </ul>
    `);
  }

  if (totals.newLeads > 0) {
    sections.push(`
      <h2 style="font-size:18px;color:#0F1F1A;margin:24px 0 8px;">🆕 New leads (last 24h, ${totals.newLeads})</h2>
      <ul style="list-style:none;padding:0;margin:0;">
        ${renderLeadList(newLeads as never, (l) => {
          const item = newLeads.find((x) => x.id === l.id);
          return item
            ? `${item.priority?.toUpperCase() ?? "—"} · ${item.source}`
            : "";
        })}
      </ul>
    `);
  }

  if (totals.staleSent > 0) {
    sections.push(`
      <h2 style="font-size:18px;color:#4F5E58;margin:24px 0 8px;">🥶 Stale proposals (>7d no update, ${totals.staleSent})</h2>
      <ul style="list-style:none;padding:0;margin:0;">
        ${renderLeadList(staleSent, (l) => {
          const item = staleSent.find((x) => x.id === l.id);
          if (!item) return "";
          const days = Math.floor(
            (Date.now() - new Date(item.updated_at).getTime()) / (24 * 36e5)
          );
          return `${days}d cold · ${item.status}`;
        })}
      </ul>
    `);
  }

  const html = `
<!DOCTYPE html>
<html lang="id">
<head><meta charset="utf-8" /><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:'Inter','Segoe UI',sans-serif;color:#0F1F1A;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="padding:24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="max-width:640px;background:#FFFFFF;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;background:#0F1F1A;color:#FAFAF7;">
              <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.6;">Daily digest</p>
              <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;">${dateLabel}</h1>
              <p style="margin:8px 0 0;font-size:14px;opacity:0.75;">
                ${totals.newLeads} new · ${totals.slaBreaches} SLA · ${totals.followUps} follow-ups · ${totals.staleSent} stale
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 24px;">
              ${sections.join("")}
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background:#0F1F1A;border-radius:999px;">
                    <a href="${SITE.url}/admin/tasks" style="display:inline-block;padding:12px 24px;color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:500;">
                      Open Tasks dashboard →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  try {
    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ??
      `noreply@${new URL(SITE.url).hostname}`;
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      subject,
      html,
    });
    if (error) {
      return NextResponse.json({ ok: false, error: error.message, totals }, { status: 500 });
    }
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "send threw", totals },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, sent: true, totals, recipients });
}
