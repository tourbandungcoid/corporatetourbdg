import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { PriorityBadge, StatusBadge } from "@/components/admin/LeadBadges";

export const dynamic = "force-dynamic";
export const metadata = { title: "Leads" };

type SearchParams = {
  priority?: string;
  status?: string;
  q?: string;
};

const PRIORITY_FILTERS = ["all", "hot", "warm", "medium", "cool", "cold"] as const;
const STATUS_FILTERS = [
  "all",
  "submitted",
  "under_review",
  "drafting",
  "sent",
  "won",
  "lost",
  "archived",
] as const;

async function getLeads(params: SearchParams) {
  const sb = createAdminClient();
  let query = sb
    .from("leads")
    .select(
      "id, ref_code, full_name, work_email, company_name, status, priority, lead_score, source, created_at"
    )
    .is("deleted_at", null)
    .order("created_at", { ascending: false })
    .limit(100);

  if (params.priority && params.priority !== "all") {
    query = query.eq("priority", params.priority);
  }
  if (params.status && params.status !== "all") {
    query = query.eq("status", params.status);
  }
  if (params.q && params.q.trim().length > 0) {
    const term = `%${params.q.trim()}%`;
    query = query.or(
      `full_name.ilike.${term},work_email.ilike.${term},company_name.ilike.${term},ref_code.ilike.${term}`
    );
  }

  const { data, error } = await query;
  return { data: data ?? [], error };
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const { data: leads, error } = await getLeads(params);

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-7xl">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow-brand">Pipeline</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              Leads ({leads.length})
            </h1>
          </div>
        </div>

        {/* Filters */}
        <form className="mb-6 grid gap-3 md:grid-cols-3" method="get">
          <input
            type="search"
            name="q"
            defaultValue={params.q ?? ""}
            placeholder="Search nama, company, email, atau ref…"
            className="input"
          />
          <select name="priority" defaultValue={params.priority ?? "all"} className="select">
            {PRIORITY_FILTERS.map((p) => (
              <option key={p} value={p}>
                Priority: {p}
              </option>
            ))}
          </select>
          <select name="status" defaultValue={params.status ?? "all"} className="select">
            {STATUS_FILTERS.map((s) => (
              <option key={s} value={s}>
                Status: {s.replace("_", " ")}
              </option>
            ))}
          </select>
        </form>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            Query error: <code className="text-xs">{error.message}</code>
          </div>
        )}

        {leads.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            {params.q || params.priority || params.status
              ? "Tidak ada lead yang match filter ini."
              : "Belum ada lead masuk."}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-paper overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b border-divider bg-bone/50">
                    <th className="px-6 py-3 font-medium">Ref</th>
                    <th className="px-4 py-3 font-medium">Contact</th>
                    <th className="px-4 py-3 font-medium">Company</th>
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
                  {leads.map((lead) => (
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
                          <p className="text-xs text-slate">{lead.work_email}</p>
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-slate">{lead.company_name}</td>
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
                          year: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
