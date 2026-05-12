import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ArrowRight } from "@/components/Icon";
import type { Lead, LeadActivity, LeadStatus } from "@/types/database";
import { LeadStatusUpdater } from "./LeadStatusUpdater";

export const metadata = { title: "Lead Detail — 7Summits OS" };

const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "Baru",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal_sent: "Proposal Sent",
  negotiating: "Negotiating",
  won: "Won",
  lost: "Lost",
};

const SOURCE_LABEL: Record<string, string> = {
  rfp_form: "RFP Form (multi-step)",
  quick_quote: "Quick Quote (4 fields)",
  sample_request: "Sample Proposal Download",
  lead_magnet: "Lead Magnet (Budget Calculator)",
  consultation: "Discovery Call",
  whatsapp: "WhatsApp",
  manual: "Manual entry",
};

function ScoreBadge({ score }: { score: number }) {
  const label =
    score >= 80 ? "Hot" : score >= 50 ? "Warm" : score >= 20 ? "Cold" : "Cold";
  const tone =
    score >= 80
      ? "bg-[var(--color-brand)] text-white"
      : score >= 50
      ? "bg-amber-500 text-white"
      : "bg-[var(--color-slate-mute)]/30 text-[var(--color-slate)]";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium ${tone}`}
    >
      <span className="tabular">{score}</span>
      <span className="opacity-80">·</span>
      <span className="uppercase tracking-wider">{label}</span>
    </span>
  );
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: lead, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !lead) notFound();

  const { data: activities } = await supabase
    .from("lead_activities")
    .select("*")
    .eq("lead_id", id)
    .order("created_at", { ascending: false });

  const l = lead as Lead;

  return (
    <div className="max-w-[1100px]">
      <Link
        href="/admin/leads"
        className="text-[13px] text-[var(--color-slate)] hover:text-[var(--color-ink)] inline-flex items-center gap-1 mb-6"
      >
        ← Back to leads
      </Link>

      <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="eyebrow-brand mb-2">Lead {l.lead_number}</p>
          <h1 className="font-display text-[32px] lg:text-[40px] leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
            {l.contact_name}
          </h1>
          <p className="mt-2 text-[15px] text-[var(--color-slate)]">
            {l.company_name || "—"}
            {l.industry && (
              <>
                <span className="mx-2 text-[var(--color-slate-mute)]">·</span>
                {l.industry}
              </>
            )}
          </p>
        </div>
        <ScoreBadge score={l.lead_score} />
      </header>

      {/* Status updater */}
      <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-5 mb-6">
        <LeadStatusUpdater leadId={l.id} currentStatus={l.status} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Contact */}
        <section className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-6">
          <h2 className="eyebrow text-[var(--color-slate)] mb-4">Contact</h2>
          <dl className="space-y-3 text-[13px]">
            <DL label="Position" value={l.contact_position} />
            <DL
              label="Email"
              value={
                l.email ? (
                  <a
                    href={`mailto:${l.email}`}
                    className="text-[var(--color-brand-deep)] hover:underline"
                  >
                    {l.email}
                  </a>
                ) : null
              }
            />
            <DL
              label="Phone / WA"
              value={
                l.phone ? (
                  <a
                    href={`https://wa.me/${l.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-brand-deep)] hover:underline"
                  >
                    {l.phone}
                  </a>
                ) : null
              }
            />
          </dl>
        </section>

        {/* Event */}
        <section className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-6">
          <h2 className="eyebrow text-[var(--color-slate)] mb-4">Event Request</h2>
          <dl className="space-y-3 text-[13px]">
            <DL label="Type" value={l.event_type} />
            <DL label="Pax" value={l.pax_count?.toString()} />
            <DL label="Duration" value={l.duration} />
            <DL label="Destination" value={l.destination} />
            <DL label="Dates" value={l.preferred_dates} />
          </dl>
        </section>

        {/* Budget & timeline */}
        <section className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-6">
          <h2 className="eyebrow text-[var(--color-slate)] mb-4">Budget & Timeline</h2>
          <dl className="space-y-3 text-[13px]">
            <DL label="Budget" value={l.budget_range} />
            <DL label="Company size" value={l.company_size} />
            <DL label="Decision timeline" value={l.decision_timeline} />
            <DL label="Source" value={SOURCE_LABEL[l.source] || l.source} />
          </dl>
        </section>
      </div>

      {/* Objective + Custom needs */}
      {(l.objective || l.custom_needs) && (
        <section className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-6 mb-8">
          <h2 className="eyebrow text-[var(--color-slate)] mb-4">Brief</h2>
          {l.objective && (
            <div className="mb-4">
              <p className="text-[11px] uppercase tracking-wider text-[var(--color-slate-mute)] mb-1">
                Objective
              </p>
              <p className="text-[14px] text-[var(--color-ink)] leading-relaxed">
                {l.objective}
              </p>
            </div>
          )}
          {l.custom_needs && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[var(--color-slate-mute)] mb-1">
                Special requirements
              </p>
              <p className="text-[14px] text-[var(--color-ink)] leading-relaxed">
                {l.custom_needs}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Activity timeline */}
      <section>
        <h2 className="font-display text-[20px] text-[var(--color-ink)] mb-4">
          Activity Timeline
        </h2>
        {activities && activities.length > 0 ? (
          <ol className="space-y-3">
            {(activities as LeadActivity[]).map((a) => (
              <li
                key={a.id}
                className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-4"
              >
                <div className="flex items-center justify-between text-[12px] text-[var(--color-slate)] mb-1">
                  <span className="font-medium uppercase tracking-wider">
                    {a.type.replace(/_/g, " ")}
                  </span>
                  <span>
                    {new Date(a.created_at).toLocaleString("id-ID", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
                {a.subject && (
                  <p className="text-[14px] font-medium text-[var(--color-ink)] mt-1">
                    {a.subject}
                  </p>
                )}
                {a.content && (
                  <p className="text-[13px] text-[var(--color-slate)] mt-1 leading-relaxed">
                    {a.content}
                  </p>
                )}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-[13px] text-[var(--color-slate)] italic">
            Belum ada activity. Update status atau add note untuk start timeline.
          </p>
        )}
      </section>

      {/* Quick actions */}
      <div className="mt-10 flex flex-wrap gap-3">
        {l.email && (
          <a
            href={`mailto:${l.email}?subject=Re: ${l.event_type || "Inquiry"} — ${l.lead_number}`}
            className="btn btn-secondary"
          >
            Email reply
            <ArrowRight size={14} className="arrow" />
          </a>
        )}
        {l.phone && (
          <a
            href={`https://wa.me/${l.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

function DL({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-[var(--color-slate-mute)]">
        {label}
      </dt>
      <dd className="text-[13px] text-[var(--color-ink)] mt-0.5">
        {value || <span className="text-[var(--color-slate-mute)]">—</span>}
      </dd>
    </div>
  );
}
