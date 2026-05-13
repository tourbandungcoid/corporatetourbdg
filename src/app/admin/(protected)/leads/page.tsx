import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAdminUsers } from "@/lib/actions/lead-actions";
import { LeadsTable, type LeadRow } from "@/components/admin/LeadsTable";
import { QuickAddLead } from "@/components/admin/QuickAddLead";

export const dynamic = "force-dynamic";
export const metadata = { title: "Leads" };

type SearchParams = {
  priority?: string;
  status?: string;
  q?: string;
  assigned?: string;
  range?: string;
  page?: string;
};

const PRIORITY_FILTERS = ["all", "hot", "warm", "medium", "cool", "cold"] as const;
const STATUS_FILTERS = [
  "all",
  "submitted",
  "under_review",
  "drafting",
  "internal_qa",
  "sent",
  "feedback_requested",
  "revising",
  "approved",
  "won",
  "lost",
  "declined",
  "archived",
  "no_response",
  "cooled",
] as const;
const RANGE_FILTERS = [
  { value: "all", label: "All time" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
] as const;

const PAGE_SIZE = 50;

function rangeToDate(range: string | undefined): string | null {
  if (!range || range === "all") return null;
  const days = range === "7d" ? 7 : range === "30d" ? 30 : range === "90d" ? 90 : 0;
  if (!days) return null;
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

async function getLeads(params: SearchParams) {
  const sb = createAdminClient();
  const page = Math.max(1, Number(params.page ?? 1) || 1);
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = sb
    .from("leads")
    .select(
      "id, ref_code, full_name, work_email, company_name, status, priority, lead_score, source, assigned_to, created_at",
      { count: "exact" }
    )
    .is("deleted_at", null)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (params.priority && params.priority !== "all") {
    query = query.eq("priority", params.priority);
  }
  if (params.status && params.status !== "all") {
    query = query.eq("status", params.status);
  }
  if (params.assigned && params.assigned !== "all") {
    if (params.assigned === "unassigned") {
      query = query.is("assigned_to", null);
    } else {
      query = query.eq("assigned_to", params.assigned);
    }
  }
  const sinceIso = rangeToDate(params.range);
  if (sinceIso) {
    query = query.gte("created_at", sinceIso);
  }
  if (params.q && params.q.trim().length > 0) {
    const term = `%${params.q.trim()}%`;
    query = query.or(
      `full_name.ilike.${term},work_email.ilike.${term},company_name.ilike.${term},ref_code.ilike.${term}`
    );
  }

  const { data, error, count } = await query;
  return { data: data ?? [], error, count: count ?? 0, page };
}

function buildExportHref(params: SearchParams) {
  const sp = new URLSearchParams();
  if (params.q) sp.set("q", params.q);
  if (params.priority && params.priority !== "all") sp.set("priority", params.priority);
  if (params.status && params.status !== "all") sp.set("status", params.status);
  if (params.assigned && params.assigned !== "all") sp.set("assigned", params.assigned);
  if (params.range && params.range !== "all") sp.set("range", params.range);
  const qs = sp.toString();
  return `/api/admin/leads/export${qs ? "?" + qs : ""}`;
}

function buildPageHref(params: SearchParams, page: number) {
  const sp = new URLSearchParams();
  if (params.q) sp.set("q", params.q);
  if (params.priority && params.priority !== "all") sp.set("priority", params.priority);
  if (params.status && params.status !== "all") sp.set("status", params.status);
  if (params.assigned && params.assigned !== "all") sp.set("assigned", params.assigned);
  if (params.range && params.range !== "all") sp.set("range", params.range);
  sp.set("page", String(page));
  return `/admin/leads?${sp.toString()}`;
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const [{ data: leads, error, count, page }, adminUsers] = await Promise.all([
    getLeads(params),
    getAdminUsers(),
  ]);

  const userMap = Object.fromEntries(
    adminUsers.map((u) => [u.id, u.fullName ?? u.email])
  );
  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  const showingFrom = count === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, count);

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow-brand">Pipeline</p>
            <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
              Leads <span className="text-slate-mute tabular">({count})</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <QuickAddLead />
            <a
              href={buildExportHref(params)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-4 h-10 text-sm text-ink hover:bg-cream transition"
            >
              Export CSV
            </a>
          </div>
        </div>

        {/* Filters */}
        <form className="mb-6 grid gap-3 md:grid-cols-6" method="get">
          <input
            type="search"
            name="q"
            defaultValue={params.q ?? ""}
            placeholder="Search nama, company, email, ref…"
            className="input md:col-span-2"
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
                Status: {s.replace(/_/g, " ")}
              </option>
            ))}
          </select>
          <select name="assigned" defaultValue={params.assigned ?? "all"} className="select">
            <option value="all">Assigned: all</option>
            <option value="unassigned">Unassigned</option>
            {adminUsers.map((u) => (
              <option key={u.id} value={u.id}>
                {u.fullName ?? u.email}
              </option>
            ))}
          </select>
          <select name="range" defaultValue={params.range ?? "all"} className="select">
            {RANGE_FILTERS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
          <div className="md:col-span-6 flex gap-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
            >
              Apply filters
            </button>
            <Link
              href="/admin/leads"
              className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm text-slate hover:bg-cream transition"
            >
              Reset
            </Link>
          </div>
        </form>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
            Query error: <code className="text-xs">{error.message}</code>
          </div>
        )}

        {leads.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            {params.q || params.priority || params.status || params.assigned || params.range
              ? "Tidak ada lead yang match filter ini."
              : "Belum ada lead masuk."}
          </div>
        ) : (
          <>
            <LeadsTable
              leads={leads as LeadRow[]}
              userMap={userMap}
              adminUsers={adminUsers}
            />

            {/* Pagination */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate">
              <p className="tabular">
                Showing {showingFrom}–{showingTo} of {count}
              </p>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  {page > 1 && (
                    <Link
                      href={buildPageHref(params, page - 1)}
                      className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-4 h-9 text-xs text-ink hover:bg-cream transition"
                    >
                      ← Prev
                    </Link>
                  )}
                  <span className="px-3 text-xs text-slate-mute tabular">
                    Page {page} / {totalPages}
                  </span>
                  {page < totalPages && (
                    <Link
                      href={buildPageHref(params, page + 1)}
                      className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-4 h-9 text-xs text-ink hover:bg-cream transition"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
