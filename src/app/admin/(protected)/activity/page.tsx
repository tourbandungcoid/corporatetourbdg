import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Activity log" };

const ACTIVITY_LABEL: Record<string, string> = {
  lead_created: "Lead created",
  status_changed: "Status changed",
  note_added: "Note added",
  assigned: "Assigned",
  email_sent: "Email sent",
  proposal_sent: "Proposal sent",
  proposal_viewed: "Proposal viewed",
  created: "Lead created",
};

type SearchParams = Promise<{ page?: string; type?: string }>;
const PAGE_SIZE = 100;

const ACTIVITY_TYPES = [
  "all",
  "lead_created",
  "status_changed",
  "note_added",
  "assigned",
  "email_sent",
];

async function getActivity(params: { page: number; type?: string }) {
  const sb = createAdminClient();
  const from = (params.page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let q = sb
    .from("lead_activities")
    .select(
      "id, activity_type, created_at, details, lead_id, actor_id",
      { count: "exact" }
    )
    .order("created_at", { ascending: false })
    .range(from, to);

  if (params.type && params.type !== "all") {
    q = q.eq("activity_type", params.type);
  }

  const { data, count } = await q;
  const activities = data ?? [];

  // Resolve actor names + lead refs
  const actorIds = Array.from(
    new Set(activities.map((a) => a.actor_id).filter((x): x is string => !!x))
  );
  const leadIds = Array.from(new Set(activities.map((a) => a.lead_id)));

  const [actorsRes, leadsRes] = await Promise.all([
    actorIds.length > 0
      ? sb.from("profiles").select("id, full_name, email").in("id", actorIds)
      : Promise.resolve({ data: [] as { id: string; full_name: string | null; email: string }[] }),
    leadIds.length > 0
      ? sb
          .from("leads")
          .select("id, ref_code, full_name, company_name")
          .in("id", leadIds)
      : Promise.resolve({ data: [] as { id: string; ref_code: string; full_name: string; company_name: string }[] }),
  ]);

  const actorMap = new Map(
    (actorsRes.data ?? []).map((a) => [a.id, a.full_name ?? a.email])
  );
  const leadMap = new Map((leadsRes.data ?? []).map((l) => [l.id, l]));

  return {
    activities,
    actorMap,
    leadMap,
    count: count ?? 0,
  };
}

export default async function ActivityPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page: pageParam, type } = await searchParams;
  const page = Math.max(1, Number(pageParam ?? 1) || 1);
  const { activities, actorMap, leadMap, count } = await getActivity({
    page,
    type,
  });

  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  const showingFrom = count === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, count);

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-5xl">
        <div className="mb-8">
          <p className="eyebrow-brand">Audit</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Activity log <span className="text-slate-mute tabular">({count})</span>
          </h1>
          <p className="mt-3 text-sm text-slate">
            Audit trail — semua lead activity terurut waktu, paling baru di atas.
          </p>
        </div>

        {/* Type filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {ACTIVITY_TYPES.map((t) => {
            const active = (type ?? "all") === t;
            return (
              <Link
                key={t}
                href={`/admin/activity${t === "all" ? "" : `?type=${t}`}`}
                className={`inline-flex items-center rounded-full px-3 h-8 text-xs font-medium transition ${
                  active
                    ? "bg-ink text-paper"
                    : "border border-border bg-paper text-slate hover:bg-cream"
                }`}
              >
                {ACTIVITY_LABEL[t] ?? t.replace(/_/g, " ")}
              </Link>
            );
          })}
        </div>

        {activities.length === 0 ? (
          <div className="rounded-2xl border border-border bg-paper p-12 text-center text-sm text-slate">
            No activity in this view.
          </div>
        ) : (
          <>
            <div className="rounded-2xl border border-border bg-paper overflow-hidden">
              <ul className="divide-y divide-divider/60">
                {activities.map((a) => {
                  const details = (a.details ?? {}) as Record<string, unknown>;
                  const lead = leadMap.get(a.lead_id);
                  const actorName = a.actor_id
                    ? actorMap.get(a.actor_id)
                    : (details.by_name as string) ?? null;
                  const label =
                    ACTIVITY_LABEL[a.activity_type] ?? a.activity_type.replace(/_/g, " ");
                  return (
                    <li
                      key={a.id}
                      className="px-6 py-4 hover:bg-cream/40 transition"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 min-w-0 flex-1">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-brand flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-ink">
                              <span className="font-medium">{label}</span>
                              {lead && (
                                <>
                                  {" · "}
                                  <Link
                                    href={`/admin/leads/${lead.id}`}
                                    className="text-brand-deep hover:underline font-mono text-xs"
                                  >
                                    {lead.ref_code}
                                  </Link>
                                  <span className="text-slate text-xs">
                                    {" "}
                                    ({lead.company_name})
                                  </span>
                                </>
                              )}
                            </p>
                            {a.activity_type === "note_added" && typeof details.note === "string" && (
                              <p className="mt-1 text-sm text-slate line-clamp-2">
                                {details.note}
                              </p>
                            )}
                            {a.activity_type === "status_changed" && (
                              <p className="mt-1 text-xs text-slate">
                                {String(details.from ?? "—")} →{" "}
                                <span className="text-ink">
                                  {String(details.to ?? "—")}
                                </span>
                              </p>
                            )}
                            {actorName && (
                              <p className="mt-1 text-xs text-slate-mute">
                                by {actorName}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-slate-mute tabular flex-shrink-0">
                          {new Date(a.created_at).toLocaleString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate">
              <p className="tabular">
                Showing {showingFrom}–{showingTo} of {count}
              </p>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  {page > 1 && (
                    <Link
                      href={`/admin/activity?${new URLSearchParams({
                        ...(type ? { type } : {}),
                        page: String(page - 1),
                      })}`}
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
                      href={`/admin/activity?${new URLSearchParams({
                        ...(type ? { type } : {}),
                        page: String(page + 1),
                      })}`}
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
