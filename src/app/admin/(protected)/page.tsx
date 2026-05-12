import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { PriorityBadge, StatusBadge } from "@/components/admin/LeadBadges";
import { ArrowRight } from "@/components/icons/Icons";

export const dynamic = "force-dynamic";
export const metadata = { title: "Dashboard" };

async function getStats() {
  const sb = createAdminClient();

  const [all, hot, warm, openPipeline, won, recent] = await Promise.all([
    sb.from("leads").select("id", { count: "exact", head: true }).is("deleted_at", null),
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
    sb.from("leads").select("id", { count: "exact", head: true }).eq("status", "won"),
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, status, priority, lead_score, source, created_at"
      )
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(8),
  ]);

  return {
    total: all.count ?? 0,
    hot: hot.count ?? 0,
    warm: warm.count ?? 0,
    openPipeline: openPipeline.count ?? 0,
    won: won.count ?? 0,
    recent: recent.data ?? [],
    queryError: recent.error?.message,
  };
}

export default async function DashboardPage() {
  const stats = await getStats();

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
            <p className="mt-2 text-xs">
              Apply the leads migration first via{" "}
              <code className="text-xs">/api/admin/migrate</code> or Supabase
              SQL Editor.
            </p>
          </div>
        )}

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-10">
          <StatCard label="Total leads" value={stats.total} />
          <StatCard label="🔥 Hot" value={stats.hot} accent="error" />
          <StatCard label="🟠 Warm" value={stats.warm} accent="warm" />
          <StatCard label="Open pipeline" value={stats.openPipeline} />
          <StatCard label="Won" value={stats.won} accent="success" />
        </div>

        {/* Recent leads table */}
        <section className="rounded-2xl border border-border bg-paper overflow-hidden">
          <div className="px-6 py-5 border-b border-divider flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">Recent leads</h2>
            <Link
              href="/admin/leads"
              className="text-xs text-slate hover:text-ink"
            >
              See all →
            </Link>
          </div>

          {stats.recent.length === 0 ? (
            <div className="p-10 text-center text-sm text-slate">
              Belum ada lead masuk. Pas form{" "}
              <Link
                href="/proposal/request"
                className="text-brand-deep underline"
              >
                /proposal/request
              </Link>{" "}
              di-submit, datanya muncul di sini.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                    <th className="px-6 py-3 font-medium">Ref</th>
                    <th className="px-4 py-3 font-medium">Name · Company</th>
                    <th className="px-4 py-3 font-medium">Source</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Priority</th>
                    <th className="px-4 py-3 font-medium tabular text-right">
                      Score
                    </th>
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
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="block"
                        >
                          <p className="font-medium text-ink">{lead.full_name}</p>
                          <p className="text-xs text-slate">{lead.company_name}</p>
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-xs text-slate">
                        {lead.source}
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
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  accent = "default",
}: {
  label: string;
  value: number;
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
    </div>
  );
}
