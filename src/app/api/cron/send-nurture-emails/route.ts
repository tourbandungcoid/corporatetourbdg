import { createAdminClient } from "@/lib/supabase/admin";
import { sendNurtureEmail } from "@/lib/email/send";

const CRON_SECRET = process.env.CRON_SECRET;

export async function POST(req: Request) {
  // Verify cron secret
  const secret = req.headers.get("x-cron-secret");
  if (!CRON_SECRET || secret !== CRON_SECRET) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const sb = createAdminClient();

    // Find all nurture emails scheduled for now (within 5 min window)
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    const { data: scheduled, error: fetchError } = await sb
      .from("email_nurture_sends")
      .select(
        `
        id,
        lead_id,
        template_id,
        days_since_capture,
        leads:lead_id (
          id,
          full_name,
          work_email,
          company_size,
          industry
        )
      `
      )
      .is("sent_at", null)
      .is("failed_at", null)
      .lte("scheduled_for", now.toISOString())
      .gte("scheduled_for", fiveMinutesAgo.toISOString())
      .limit(50);

    if (fetchError) {
      console.error("[nurture] fetch scheduled emails failed:", fetchError);
      return Response.json(
        { error: "Failed to fetch scheduled emails" },
        { status: 500 }
      );
    }

    if (!scheduled || scheduled.length === 0) {
      return Response.json({
        ok: true,
        processed: 0,
        message: "No emails to send"
      });
    }

    let sent = 0;
    let failed = 0;

    for (const record of scheduled) {
      try {
        const lead = Array.isArray(record.leads)
          ? record.leads[0]
          : record.leads;

        if (!lead?.work_email) {
          await sb
            .from("email_nurture_sends")
            .update({ failed_at: new Date().toISOString(), error_message: "No email address" })
            .eq("id", record.id);
          failed++;
          continue;
        }

        const result = await sendNurtureEmail({
          to: lead.work_email,
          fullName: lead.full_name,
          daysSinceCapture: record.days_since_capture,
          companySize: lead.company_size,
          industry: lead.industry,
        });

        if (result.ok) {
          await sb
            .from("email_nurture_sends")
            .update({ sent_at: new Date().toISOString() })
            .eq("id", record.id);
          sent++;
        } else {
          await sb
            .from("email_nurture_sends")
            .update({
              failed_at: new Date().toISOString(),
              error_message: result.reason
            })
            .eq("id", record.id);
          failed++;
        }
      } catch (e) {
        console.error("[nurture] send failed for record:", record.id, e);
        await sb
          .from("email_nurture_sends")
          .update({
            failed_at: new Date().toISOString(),
            error_message: e instanceof Error ? e.message : "Unknown error"
          })
          .eq("id", record.id);
        failed++;
      }
    }

    return Response.json({
      ok: true,
      processed: sent + failed,
      sent,
      failed,
    });
  } catch (e) {
    console.error("[nurture] cron failed:", e);
    return Response.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
