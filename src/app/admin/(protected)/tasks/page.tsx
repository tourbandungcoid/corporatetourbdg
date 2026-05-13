import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { PriorityBadge, StatusBadge } from "@/components/admin/LeadBadges";

export const dynamic = "force-dynamic";
export const metadata = { title: "Tasks" };

const SLA_HOURS: Record<string, number> = {
  hot: 2,
  warm: 8,
  medium: 24,
  cool: 48,
  cold: 168,
};

async function getTasks() {
  const sb = createAdminClient();
  const nowIso = new Date().toISOString();

  const [slaPendingRes, followUpsRes, unassignedHotRes, oldStaleRes] = await Promise.all([
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, priority, status, lead_score, created_at, assigned_to"
      )
      .in("status", ["submitted", "under_review"])
      .is("deleted_at", null)
      .order("created_at", { ascending: true })
      .limit(50),
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, priority, status, lead_score, follow_up_at, assigned_to"
      )
      .lte("follow_up_at", nowIso)
      .not("follow_up_at", "is", null)
      .is("deleted_at", null)
      .order("follow_up_at", { ascending: true })
      .limit(30),
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, priority, status, lead_score, created_at"
      )
      .in("priority", ["hot", "warm"])
      .in("status", [
        "submitted",
        "under_review",
        "drafting",
        "internal_qa",
        "sent",
        "feedback_requested",
      ])
      .is("assigned_to", null)
      .is("deleted_at", null)
      .order("lead_score", { ascending: false })
      .limit(30),
    sb
      .from("leads")
      .select(
        "id, ref_code, full_name, company_name, priority, status, lead_score, updated_at, assigned_to"
      )
      .in("status", ["sent", "feedback_requested", "revising"])
      .lte("updated_at", new Date(Date.now() - 7 * 24 * 36e5).toISOString())
      .is("deleted_at", null)
      .order("updated_at", { ascending: true })
      .limit(30),
  ]);

  const now = Date.now();
  const slaBreaches = (slaPendingRes.data ?? [])
    .map((l) => {
      const ageHours = (now - new Date(l.created_at).getTime()) / 36e5;
      const sla = SLA_HOURS[l.priority ?? "medium"] ?? 24;
      return { ...l, ageHours, sla, overdueBy: ageHours - sla };
    })
    .filter((x) => x.overdueBy > 0)
    .sort((a, b) => b.overdueBy - a.overdueBy);

  // Resolve assigned profile names (used by stale / follow-ups)
  const assignedIds = Array.from(
    new Set(
      [
        ...(followUpsRes.data ?? []).map((l) => l.assigned_to),
        ...(oldStaleRes.data ?? []).map((l) => l.assigned_to),
      ].filter((x): x is string => !!x)
    )
  );
  let nameMap = new Map<string, string>();
  if (assignedIds.length > 0) {
    const { data } = await sb
      .from("profiles")
      .select("id, full_name, email")
      .in("id", assignedIds);
    nameMap = new Map(
      (data ?? []).map((p) => [p.id, p.full_name ?? p.email])
    );
  }

  return {
    slaBreaches,
    followUps: followUpsRes.data ?? [],
    unassignedHot: unassignedHotRes.data ?? [],
    staleSent: oldStaleRes.data ?? [],
    nameMap,
  };
}

export default async function TasksPage() {
  const t = await getTasks();
  const totalTasks =
    t.slaBreaches.length +
    t.followUps.length +
    t.unassignedHot.length +
    t.staleSent.length;

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-6xl">
        <div className="mb-8">
          <p className="eyebrow-brand">Today</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">
            Tasks <span className="text-slate-mute tabular">({totalTasks})</span>
          </h1>
          <p className="mt-3 text-sm text-slate">
            Sales inbox — everything that needs action sekarang. Aging-first.
          </p>
        </div>

        {totalTasks === 0 && (
          <div className="rounded-2xl border border-success/30 bg-success/5 p-10 text-center">
            <p className="font-display text-2xl text-ink mb-2">All clear ✨</p>
            <p className="text-sm text-slate">
              No SLA breaches, no follow-ups due, no unassigned hot leads.
            </p>
          </div>
        )}

        <div className="space-y-8">
          {t.slaBreaches.length > 0 && (
            <Section
              title="SLA breaches"
              count={t.slaBreaches.length}
              accent="error"
              description="Leads stuck in submitted/under_review past their priority's response window."
            >
              <ul className="divide-y divide-divider/60">
                {t.slaBreaches.map((l) => (
                  <Row
                    key={l.id}
                    leadId={l.id}
                    refCode={l.ref_code}
                    name={l.full_name}
                    company={l.company_name}
                    status={l.status}
                    priority={l.priority}
                    score={l.lead_score}
                    rightLabel={`+${l.overdueBy.toFixed(l.overdueBy < 1 ? 1 : 0)}h overdue`}
                    rightSub={`SLA ${l.sla}h · age ${l.ageHours.toFixed(l.ageHours < 1 ? 1 : 0)}h`}
                    rightAccent="error"
                  />
                ))}
              </ul>
            </Section>
          )}

          {t.followUps.length > 0 && (
            <Section
              title="Follow-ups due"
              count={t.followUps.length}
              accent="warm"
              description="Reminders scheduled by sales — time is up."
            >
              <ul className="divide-y divide-divider/60">
                {t.followUps.map((l) => (
                  <Row
                    key={l.id}
                    leadId={l.id}
                    refCode={l.ref_code}
                    name={l.full_name}
                    company={l.company_name}
                    status={l.status}
                    priority={l.priority}
                    score={l.lead_score}
                    assignedTo={l.assigned_to ? t.nameMap.get(l.assigned_to) : null}
                    rightLabel={`Due ${new Date(l.follow_up_at!).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}`}
                    rightAccent="warm"
                  />
                ))}
              </ul>
            </Section>
          )}

          {t.unassignedHot.length > 0 && (
            <Section
              title="Unassigned hot/warm leads"
              count={t.unassignedHot.length}
              accent="info"
              description="High-priority leads di pipeline yang belum punya owner."
            >
              <ul className="divide-y divide-divider/60">
                {t.unassignedHot.map((l) => (
                  <Row
                    key={l.id}
                    leadId={l.id}
                    refCode={l.ref_code}
                    name={l.full_name}
                    company={l.company_name}
                    status={l.status}
                    priority={l.priority}
                    score={l.lead_score}
                    rightLabel="Unassigned"
                    rightAccent="info"
                  />
                ))}
              </ul>
            </Section>
          )}

          {t.staleSent.length > 0 && (
            <Section
              title="Stale proposals"
              count={t.staleSent.length}
              accent="default"
              description="Proposals sent / in revision tapi tidak ada update >7 hari."
            >
              <ul className="divide-y divide-divider/60">
                {t.staleSent.map((l) => {
                  const days = Math.floor(
                    (Date.now() - new Date(l.updated_at).getTime()) / (24 * 36e5)
                  );
                  return (
                    <Row
                      key={l.id}
                      leadId={l.id}
                      refCode={l.ref_code}
                      name={l.full_name}
                      company={l.company_name}
                      status={l.status}
                      priority={l.priority}
                      score={l.lead_score}
                      assignedTo={l.assigned_to ? t.nameMap.get(l.assigned_to) : null}
                      rightLabel={`${days}d cold`}
                      rightAccent="default"
                    />
                  );
                })}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  count,
  accent,
  description,
  children,
}: {
  title: string;
  count: number;
  accent: "error" | "warm" | "info" | "default";
  description: string;
  children: React.ReactNode;
}) {
  const border = {
    error: "border-error/30 bg-error/5",
    warm: "border-warm/30 bg-warm/5",
    info: "border-brand/30 bg-brand/5",
    default: "border-border bg-paper",
  }[accent];
  return (
    <section className={`rounded-2xl border overflow-hidden ${border}`}>
      <div className="px-6 py-5 border-b border-divider/30">
        <h2 className="font-display text-xl text-ink">
          {title}{" "}
          <span className="text-slate-mute tabular text-base">({count})</span>
        </h2>
        <p className="mt-1 text-xs text-slate">{description}</p>
      </div>
      {children}
    </section>
  );
}

function Row({
  leadId,
  refCode,
  name,
  company,
  status,
  priority,
  score,
  assignedTo,
  rightLabel,
  rightSub,
  rightAccent,
}: {
  leadId: string;
  refCode: string;
  name: string;
  company: string;
  status: string;
  priority: string | null;
  score: number;
  assignedTo?: string | null;
  rightLabel: string;
  rightSub?: string;
  rightAccent: "error" | "warm" | "info" | "default";
}) {
  const rightColor = {
    error: "text-error",
    warm: "text-warm",
    info: "text-brand-deep",
    default: "text-slate",
  }[rightAccent];
  return (
    <li>
      <Link
        href={`/admin/leads/${leadId}`}
        className="block px-6 py-3 hover:bg-cream/40 transition"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span className="font-mono text-xs text-slate-mute tabular w-20 flex-shrink-0">
              {refCode}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink truncate">{name}</p>
              <p className="text-xs text-slate truncate">
                {company}
                {assignedTo && ` · ${assignedTo}`}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <StatusBadge status={status} />
              <PriorityBadge
                priority={
                  (priority as "hot" | "warm" | "medium" | "cool" | "cold" | null) ?? null
                }
              />
              <span className="inline-flex items-center rounded-full border border-border bg-paper px-2 py-0.5 text-[11px] tabular text-slate">
                {score}
              </span>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className={`text-xs font-medium tabular ${rightColor}`}>
              {rightLabel}
            </p>
            {rightSub && (
              <p className="text-[11px] text-slate-mute mt-0.5">{rightSub}</p>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
