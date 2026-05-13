import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { PriorityBadge, StatusBadge } from "@/components/admin/LeadBadges";
import { ArrowRight } from "@/components/icons/Icons";

export const dynamic = "force-dynamic";
export const metadata = { title: "Dashboard" };

const FUNNEL_STAGES: { key: string; label: string; statuses: string[] }[] = [
  { key: "intake", label: "Intake", statuses: ["submitted", "under_review"] },
  { key: "build", label: "Drafting", statuses: ["drafting", "internal_qa"] },
  { key: "sent", label: "Sent", statuses: ["sent", "feedback_requested", "revising"] },
  { key: "won", label: "Won", statuses: ["won", "approved"] },
  { key: "lost", label: "Lost / Cold", statuses: ["lost", "declined", "no_response", "cooled"] },
];

const ACTIVITY_LABEL: Record<string, string> = {
  lead_created: "Lead created",
  status_changed: "Status changed",
  note_added: "Note added",
  assigned: "Assigned",
  email_sent: "Email sent",
  proposal_sent: "Proposal sent",
  proposal_viewed: "Proposal viewed",
};

function isoNDaysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

// SLA: response time targets per priority (hours from created_at to first status change away from submitted/under_review)
const SLA_HOURS: Record<string, number> = {
  hot: 2,
  warm: 8,
  medium: 24,
  cool: 48,
  cold: 168, // 1 week
};

async function getDashboard() {
  const sb = createAdminClient();

  const sevenDaysAgo = isoNDaysAgo(7);
  const fourteenDaysAgo = isoNDaysAgo(14);
  const thirtyDaysAgo = isoNDaysAgo(30);

  const baseFilter = sb.from("leads").select("id", { count: "exact", head: true }).is(
    "deleted_at",
    null
  );

  const [
    totalRes,
    hotRes,
    warmRes,
    openPipelineRes,
    wonRes,
    last7Res,
    prev7Res,
    last30Res,
    recentLeadsRes,
    funnelRes,
    sourcesRes,
    activitiesRes,
    slaPendingRes,
  ] = await Promise.all([
    baseFilter,
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("priority", "hot")
      .is("deleted_at", null),
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("priority", "warm")
      .is("deleted_at", null),
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .in("status", [
        "submitted",
        "under_review",
        "drafting",
        "internal_qa",
        "sent",
        "feedback_requested",
        "revising",
      ])
      .is("deleted_at", null),
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("status", "won")
      .is("deleted_at", null),
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .gte("created_at", sevenDaysAgo)
      .is("deleted_at", null),
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .gte("created_at", fourteenDaysAgo)
      .lt("created_at", sevenDaysAgo)
      .is("deleted_at", null),
    sb
      .from("leads")
      .select("id", { count: "exact", head: true })
      .gte("created_at", thirtyDaysAgo)
      .is("deleted_at", null),
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, status, priority, lead_score, source, created_at"
      )
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(8),
    sb.from("leads").select("status").is("deleted_at", null).limit(2000),
    sb.from("leads").select("source").is("deleted_at", null).limit(2000),
    sb
      .from("lead_activities")
      .select("id, activity_type, created_at, details, lead_id")
      .order("created_at", { ascending: false })
      .limit(10),
    sb
      .from("leads")
      .select("id, ref_code, full_name, company_name, priority, status, created_at")
      .in("status", ["submitted", "under_review"])
      .is("deleted_at", null)
      .order("created_at", { ascending: true })
      .limit(50),
  ]);

  // Funnel aggregation
  const statusCounts = new Map<string, number>();
  (funnelRes.data ?? []).forEach((r) => {
    statusCounts.set(r.status, (statusCounts.get(r.status) ?? 0) + 1);
  });
  const funnel = FUNNEL_STAGES.map((stage) => ({
    ...stage,
    count: stage.statuses.reduce((sum, s) => sum + (statusCounts.get(s) ?? 0), 0),
  }));

  // Source breakdown
  const sourceCounts = new Map<string, number>();
  (sourcesRes.data ?? []).forEach((r) => {
    const src = r.source ?? "unknown";
    sourceCounts.set(src, (sourceCounts.get(src) ?? 0) + 1);
  });
  const sources = Array.from(sourceCounts.entries())
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  const total = totalRes.count ?? 0;
  const won = wonRes.count ?? 0;
  const last7 = last7Res.count ?? 0;
  const prev7 = prev7Res.count ?? 0;
  const trend = prev7 === 0 ? null : ((last7 - prev7) / prev7) * 100;
  const conversionPct = total === 0 ? 0 : (won / total) * 100;

  // SLA breaches: leads still in submitted/under_review past their priority's SLA window
  const now = Date.now();
  const slaBreaches = (slaPendingRes.data ?? [])
    .map((lead) => {
      const ageHours = (now - new Date(lead.created_at).getTime()) / 36e5;
      const sla = SLA_HOURS[lead.priority ?? "medium"] ?? 24;
      return { lead, ageHours, sla, overdueBy: ageHours - sla };
    })
    .filter((x) => x.overdueBy > 0)
    .sort((a, b) => b.overdueBy - a.overdueBy)
    .slice(0, 8);

  return {
    total,
    hot: hotRes.count ?? 0,
    warm: warmRes.count ?? 0,
    openPipeline: openPipelineRes.count ?? 0,
    won,
    last7,
    prev7,
    last30: last30Res.count ?? 0,
    trend,
    conversionPct,
    recent: recentLeadsRes.data ?? [],
    funnel,
    sources,
    activities: activitiesRes.data ?? [],
    slaBreaches,
    queryError: recentLeadsRes.error?.message,
  };
}

export default async function DashboardPage() {
  const stats = await getDashboard();
  const funnelMax = Math.max(1, ...stats.funnel.map((f) => f.count));

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-7xl">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow-brand">Overview</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              Dashboard
            </h1>
          </div>
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-deep"
          >
            View all leads
            <ArrowRight size={14} />
          </Link>
        </div>

        {stats.queryError && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            <p className="font-medium mb-1">Database not ready</p>
            <p>
              Query error: <code className="text-xs">{stats.queryError}</code>
            </p>
          </div>
        )}

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <StatCard
            label="Total leads"
            value={stats.total}
            sub={`${stats.last30} in last 30d`}
          />
          <StatCard
            label="Last 7 days"
            value={stats.last7}
            sub={
              stats.trend === null
                ? "no prior week data"
                : `${stats.trend >= 0 ? "+" : ""}${stats.trend.toFixed(0)}% vs prior 7d`
            }
            accent={stats.trend !== null && stats.trend >= 0 ? "success" : "default"}
          />
          <StatCard
            label="Open pipeline"
            value={stats.openPipeline}
            sub={`${stats.hot} hot · ${stats.warm} warm`}
          />
          <StatCard
            label="Conversion"
            value={`${stats.conversionPct.toFixed(1)}%`}
            sub={`${stats.won} won / ${stats.total} total`}
            accent="success"
          />
        </div>

        {/* SLA breaches — only show if any */}
        {stats.slaBreaches.length > 0 && (
          <section className="mb-10 rounded-2xl border border-error/30 bg-error/5 overflow-hidden">
            <div className="px-6 py-5 border-b border-error/20 flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-error font-medium">
                  Response SLA breach
                </p>
                <h2 className="font-display text-xl text-ink mt-1">
                  {stats.slaBreaches.length} lead{stats.slaBreaches.length > 1 ? "s" : ""} need immediate attention
                </h2>
              </div>
            </div>
            <ul className="divide-y divide-error/10">
              {stats.slaBreaches.map((b) => (
                <li
                  key={b.lead.id}
                  className="px-6 py-3 flex items-center justify-between gap-4 hover:bg-error/5 transition"
                >
                  <Link
                    href={`/admin/leads/${b.lead.id}`}
                    className="flex-1 min-w-0 flex items-center gap-3"
                  >
                    <span className="font-mono text-xs text-slate-mute tabular w-20 flex-shrink-0">
                      {b.lead.ref_code}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-ink truncate">
                        {b.lead.full_name}
                      </p>
                      <p className="text-xs text-slate truncate">
                        {b.lead.company_name}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        b.lead.priority === "hot"
                          ? "bg-error/20 text-error"
                          : "bg-warm/20 text-warm"
                      }`}
                    >
                      {b.lead.priority?.toUpperCase() ?? "—"}
                    </span>
                  </Link>
                  <div className="text-right tabular flex-shrink-0">
                    <p className="text-sm font-medium text-error">
                      +{b.overdueBy.toFixed(b.overdueBy < 1 ? 1 : 0)}h overdue
                    </p>
                    <p className="text-[11px] text-slate-mute">
                      SLA {b.sla}h · age {b.ageHours.toFixed(b.ageHours < 1 ? 1 : 0)}h
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Funnel + Sources */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          <section className="lg:col-span-2 rounded-2xl border border-border bg-paper p-6">
            <h2 className="font-display text-xl text-ink mb-5">Pipeline funnel</h2>
            <ul className="space-y-3">
              {stats.funnel.map((stage) => {
                const pct = (stage.count / funnelMax) * 100;
                return (
                  <li key={stage.key} className="grid grid-cols-[110px_1fr_50px] items-center gap-3">
                    <span className="text-sm text-slate">{stage.label}</span>
                    <div className="h-7 rounded-full bg-cream/60 overflow-hidden">
                      <div
                        className="h-full bg-brand/80 transition-all"
                        style={{ width: `${Math.max(pct, stage.count > 0 ? 6 : 0)}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-ink tabular text-right">
                      {stage.count}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="rounded-2xl border border-border bg-paper p-6">
            <h2 className="font-display text-xl text-ink mb-5">Sources</h2>
            {stats.sources.length === 0 ? (
              <p className="text-sm text-slate">No data yet.</p>
            ) : (
              <ul className="space-y-2.5 text-sm">
                {stats.sources.map((s) => (
                  <li key={s.source} className="flex items-center justify-between gap-3">
                    <span className="text-slate">{s.source}</span>
                    <span className="font-medium text-ink tabular">{s.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {/* Recent leads + Activity feed */}
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-2xl border border-border bg-paper overflow-hidden">
            <div className="px-6 py-5 border-b border-divider flex items-center justify-between">
              <h2 className="font-display text-xl text-ink">Recent leads</h2>
              <Link href="/admin/leads" className="text-xs text-slate hover:text-ink">
                See all →
              </Link>
            </div>
            {stats.recent.length === 0 ? (
              <div className="p-10 text-center text-sm text-slate">
                Belum ada lead masuk.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                      <th className="px-6 py-3 font-medium">Ref</th>
                      <th className="px-4 py-3 font-medium">Name · Company</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Priority</th>
                      <th className="px-4 py-3 font-medium tabular text-right">Score</th>
                      <th className="px-4 py-3 font-medium text-right">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recent.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b border-divider/60 hover:bg-cream/40 transition"
                      >
                        <td className="px-6 py-4 tabular text-xs">
                          <Link
                            href={`/admin/leads/${lead.id}`}
                            className="font-medium text-ink hover:text-brand-deep"
                          >
                            {lead.ref_code}
                          </Link>
                        </td>
                        <td className="px-4 py-4">
                          <Link href={`/admin/leads/${lead.id}`} className="block">
                            <p className="font-medium text-ink">{lead.full_name}</p>
                            <p className="text-xs text-slate">{lead.company_name}</p>
                          </Link>
                        </td>
                        <td className="px-4 py-4">
                          <StatusBadge status={lead.status} />
                        </td>
                        <td className="px-4 py-4">
                          <PriorityBadge priority={lead.priority} />
                        </td>
                        <td className="px-4 py-4 tabular text-right font-medium">
                          {lead.lead_score}
                        </td>
                        <td className="px-4 py-4 text-xs text-slate text-right tabular">
                          {new Date(lead.created_at).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-border bg-paper overflow-hidden">
            <div className="px-6 py-5 border-b border-divider">
              <h2 className="font-display text-xl text-ink">Latest activity</h2>
            </div>
            <div className="p-6">
              {stats.activities.length === 0 ? (
                <p className="text-sm text-slate">No activity yet.</p>
              ) : (
                <ol className="space-y-4 text-sm">
                  {stats.activities.map((a) => {
                    const d = (a.details ?? {}) as Record<string, unknown>;
                    const label = ACTIVITY_LABEL[a.activity_type] ?? a.activity_type.replace(/_/g, " ");
                    return (
                      <li key={a.id} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-brand flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/admin/leads/${a.lead_id}`}
                            className="text-ink font-medium hover:text-brand-deep"
                          >
                            {label}
                          </Link>
                          {a.activity_type === "note_added" && typeof d.note === "string" && (
                            <p className="mt-0.5 text-xs text-slate line-clamp-2">
                              {d.note}
                            </p>
                          )}
                          {a.activity_type === "status_changed" && (
                            <p className="mt-0.5 text-xs text-slate">
                              {String(d.from ?? "—")} → {String(d.to ?? "—")}
                            </p>
                          )}
                          <p className="text-xs text-slate-mute mt-0.5 tabular">
                            {new Date(a.created_at).toLocaleString("id-ID", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  sub,
  accent = "default",
}: {
  label: string;
  value: number | string;
  sub?: string;
  accent?: "default" | "error" | "warm" | "success";
}) {
  const accents: Record<string, string> = {
    default: "border-border",
    error: "border-error/30",
    warm: "border-warm/30",
    success: "border-success/30",
  };
  return (
    <div className={`rounded-2xl border bg-paper p-5 ${accents[accent]}`}>
      <p className="text-xs uppercase tracking-wider text-slate-mute">{label}</p>
      <p className="font-display mt-2 text-3xl text-ink tabular leading-none">
        {value}
      </p>
      {sub && <p className="mt-2 text-xs text-slate-mute">{sub}</p>}
    </div>
  );
}
