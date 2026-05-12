import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowUpRight } from "@/components/Icon";
import type { Lead, LeadStatus, LeadPriority } from "@/types/database";

export const metadata = { title: "Leads — 7Summits OS" };

const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "Baru",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal_sent: "Proposal Sent",
  negotiating: "Negotiating",
  won: "Won",
  lost: "Lost",
};

const STATUS_COLOR: Record<LeadStatus, string> = {
  new: "bg-[var(--color-brand)]/15 text-[var(--color-brand-deep)] border-[var(--color-brand)]/30",
  contacted: "bg-blue-100 text-blue-800 border-blue-200",
  qualified: "bg-amber-100 text-amber-800 border-amber-200",
  proposal_sent: "bg-purple-100 text-purple-800 border-purple-200",
  negotiating: "bg-orange-100 text-orange-800 border-orange-200",
  won: "bg-emerald-100 text-emerald-800 border-emerald-200",
  lost: "bg-gray-100 text-gray-600 border-gray-200",
};

const SOURCE_LABEL: Record<string, string> = {
  rfp_form: "RFP",
  quick_quote: "Quick Quote",
  sample_request: "Sample DL",
  lead_magnet: "Lead Magnet",
  consultation: "Consultation",
  whatsapp: "WhatsApp",
  manual: "Manual",
};

function ScoreBadge({ score }: { score: number }) {
  const tone =
    score >= 80
      ? "bg-[var(--color-brand)] text-white"
      : score >= 50
      ? "bg-amber-500 text-white"
      : "bg-[var(--color-slate-mute)]/30 text-[var(--color-slate)]";

  return (
    <span
      className={`inline-flex items-center justify-center min-w-[34px] h-6 px-2 rounded-full text-[11px] font-medium tabular ${tone}`}
    >
      {score}
    </span>
  );
}

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "baru saja";
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}j`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}h`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}mg`;
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
  });
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; source?: string }>;
}) {
  const params = await searchParams;
  const statusFilter = params.status as LeadStatus | undefined;
  const sourceFilter = params.source;

  const supabase = await createClient();
  let query = supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (statusFilter) query = query.eq("status", statusFilter);
  if (sourceFilter) query = query.eq("source", sourceFilter);

  const { data: leads, error } = await query;

  // Counts per status
  const { data: allLeads } = await supabase
    .from("leads")
    .select("status", { count: "exact" });

  const statusCounts: Partial<Record<LeadStatus, number>> = {};
  allLeads?.forEach((l) => {
    const s = l.status as LeadStatus;
    statusCounts[s] = (statusCounts[s] ?? 0) + 1;
  });

  return (
    <div className="max-w-[1400px]">
      <header className="mb-8 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="eyebrow-brand mb-3">Sales</p>
          <h1 className="font-display text-[36px] lg:text-[44px] leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
            Leads
          </h1>
          <p className="mt-2 text-[14px] text-[var(--color-slate)]">
            Inquiry masuk dari semua form & touchpoint. Auto-scored 0–100.
          </p>
        </div>
      </header>

      {/* Status filter tabs */}
      <div className="flex flex-wrap gap-1 border-b border-[var(--color-border)] mb-6">
        <FilterTab
          label="Semua"
          count={allLeads?.length ?? 0}
          active={!statusFilter}
          href="/admin/leads"
        />
        {(
          [
            "new",
            "contacted",
            "qualified",
            "proposal_sent",
            "negotiating",
            "won",
            "lost",
          ] as LeadStatus[]
        ).map((s) => (
          <FilterTab
            key={s}
            label={STATUS_LABEL[s]}
            count={statusCounts[s] ?? 0}
            active={statusFilter === s}
            href={`/admin/leads?status=${s}`}
          />
        ))}
      </div>

      {error && (
        <div className="rounded-md bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 px-4 py-3 text-[13px] text-[var(--color-error)] mb-4">
          ⚠ Gagal load leads: {error.message}
        </div>
      )}

      {!leads || leads.length === 0 ? (
        <EmptyState statusFilter={statusFilter} />
      ) : (
        <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md overflow-hidden">
          <table className="w-full text-[13px]">
            <thead className="bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <tr>
                <Th>Lead</Th>
                <Th>Contact</Th>
                <Th>Company</Th>
                <Th>Event</Th>
                <Th>Source</Th>
                <Th className="text-center">Score</Th>
                <Th>Status</Th>
                <Th className="text-right">When</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {(leads as Lead[]).map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-[var(--color-divider)] last:border-0 hover:bg-[var(--color-cream)]/40 transition-colors"
                >
                  <Td>
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="font-mono text-[12px] text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                    >
                      {lead.lead_number}
                    </Link>
                  </Td>
                  <Td>
                    <div className="font-medium text-[var(--color-ink)]">
                      {lead.contact_name}
                    </div>
                    <div className="text-[12px] text-[var(--color-slate)]">
                      {lead.email || lead.phone || "—"}
                    </div>
                  </Td>
                  <Td>
                    <div className="text-[var(--color-ink)]">
                      {lead.company_name || "—"}
                    </div>
                    <div className="text-[12px] text-[var(--color-slate)]">
                      {lead.industry || ""}
                    </div>
                  </Td>
                  <Td>
                    <div className="text-[var(--color-ink)]">
                      {lead.event_type || "—"}
                    </div>
                    <div className="text-[12px] text-[var(--color-slate)]">
                      {lead.pax_count ? `${lead.pax_count} pax` : ""}
                      {lead.pax_count && lead.duration ? " · " : ""}
                      {lead.duration ?? ""}
                    </div>
                  </Td>
                  <Td>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] bg-[var(--color-cream)] text-[var(--color-slate)] uppercase tracking-wider">
                      {SOURCE_LABEL[lead.source] || lead.source}
                    </span>
                  </Td>
                  <Td className="text-center">
                    <ScoreBadge score={lead.lead_score} />
                  </Td>
                  <Td>
                    <StatusBadge status={lead.status} />
                  </Td>
                  <Td className="text-right text-[12px] text-[var(--color-slate)]">
                    {relativeTime(lead.created_at)}
                  </Td>
                  <Td className="text-right">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="text-[var(--color-slate-mute)] hover:text-[var(--color-brand)]"
                      aria-label="View detail"
                    >
                      <ArrowUpRight size={14} />
                    </Link>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Th({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-[var(--color-slate)] ${className}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-4 py-4 align-top ${className}`}>{children}</td>;
}

function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-[11px] border ${STATUS_COLOR[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function FilterTab({
  label,
  count,
  active,
  href,
}: {
  label: string;
  count: number;
  active: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-3 text-[13px] font-medium relative inline-flex items-center gap-2 ${
        active
          ? "text-[var(--color-ink)]"
          : "text-[var(--color-slate)] hover:text-[var(--color-ink)]"
      }`}
    >
      {label}
      <span
        className={`text-[11px] tabular px-1.5 rounded ${
          active
            ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
            : "bg-[var(--color-cream)] text-[var(--color-slate)]"
        }`}
      >
        {count}
      </span>
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand)]" />
      )}
    </Link>
  );
}

function EmptyState({ statusFilter }: { statusFilter?: string }) {
  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-md p-12 text-center">
      <div className="w-14 h-14 rounded-full bg-[var(--color-cream)] flex items-center justify-center mx-auto mb-4">
        <span className="text-[28px] opacity-40">📭</span>
      </div>
      <h3 className="font-display text-[20px] text-[var(--color-ink)] mb-2">
        {statusFilter ? `Belum ada lead dengan status ini` : "Belum ada lead"}
      </h3>
      <p className="text-[14px] text-[var(--color-slate)] max-w-[400px] mx-auto">
        Saat HR submit form di public site, leads-nya akan auto-muncul di sini
        dengan score 0–100.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/proposal/request" target="_blank" className="btn btn-secondary btn-sm">
          Test RFP Form →
        </Link>
        <Link href="/proposal/quick-quote" target="_blank" className="btn btn-secondary btn-sm">
          Test Quick Quote →
        </Link>
      </div>
    </div>
  );
}
