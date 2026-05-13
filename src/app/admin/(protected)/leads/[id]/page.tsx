import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { PriorityBadge, StatusBadge } from "@/components/admin/LeadBadges";
import { LeadActionsPanel } from "@/components/admin/LeadActionsPanel";
import { EditContactDialog } from "@/components/admin/EditContactDialog";
import { getAdminUsers } from "@/lib/actions/lead-actions";
import { buildWaLink } from "@/lib/site";
import { Whatsapp, ArrowRight } from "@/components/icons/Icons";

export const dynamic = "force-dynamic";

const EVENT_TYPE_LABEL: Record<string, string> = {
  company_gathering: "Company Gathering",
  team_building: "Team Building",
  employee_gathering: "Employee Gathering",
  corporate_retreat: "Corporate Retreat",
  leadership_camp: "Leadership Camp",
  executive_offsite: "Executive Offsite",
  incentive_trip: "Incentive Trip",
  annual_company_trip: "Annual Company Trip",
  mice: "MICE Event",
  glamping_corporate: "Glamping Corporate",
  not_sure: "Belum decide",
};

const SIZE_LABEL: Record<string, string> = {
  startup: "Startup (<50)",
  sme: "SME (50–200)",
  midsize: "Mid-size (200–1000)",
  enterprise: "Enterprise (1000+)",
};

const BUDGET_LABEL: Record<string, string> = {
  conservative: "Conservative (Rp 1.5–2.5 jt/pax)",
  standard: "Standard (Rp 2.5–4.5 jt/pax)",
  premium: "Premium (Rp 4.5–7 jt/pax)",
  all_out: "All-Out (Rp 7 jt+/pax)",
  help_me: "Help me figure out",
};

const ACTIVITY_LABEL: Record<string, string> = {
  lead_created: "Lead created",
  status_changed: "Status changed",
  note_added: "Note added",
  assigned: "Assigned",
  email_sent: "Email sent",
  proposal_sent: "Proposal sent",
  proposal_viewed: "Proposal viewed",
};

const URGENCY_LABEL: Record<string, string> = {
  urgent: "🔴 Urgent (2–4 minggu)",
  standard: "🟠 Standard (1–3 bulan)",
  planning_ahead: "🟢 Planning ahead (3+ bulan)",
  researching: "⚪ Just researching",
};

async function getLead(id: string) {
  const sb = createAdminClient();

  const [leadRes, qualRes, activitiesRes] = await Promise.all([
    sb.from("leads").select("*").eq("id", id).single(),
    sb.from("lead_qualifications").select("*").eq("lead_id", id).maybeSingle(),
    sb
      .from("lead_activities")
      .select("*")
      .eq("lead_id", id)
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  if (leadRes.error || !leadRes.data) return null;

  // Find potential duplicates: same email, same whatsapp, or same company name
  const lead = leadRes.data;
  const dupQuery = sb
    .from("leads")
    .select(
      "id, ref_code, full_name, company_name, work_email, whatsapp, status, priority, lead_score, created_at"
    )
    .neq("id", lead.id)
    .is("deleted_at", null)
    .order("created_at", { ascending: false })
    .limit(8);

  const orFilters: string[] = [];
  if (lead.work_email) orFilters.push(`work_email.eq.${lead.work_email}`);
  if (lead.whatsapp) orFilters.push(`whatsapp.eq.${lead.whatsapp}`);
  if (lead.company_name) orFilters.push(`company_name.ilike.${lead.company_name.replace(/[%,]/g, "")}`);

  const dupRes =
    orFilters.length > 0
      ? await dupQuery.or(orFilters.join(","))
      : { data: [] as never[], error: null };
  const duplicates = (dupRes.data ?? []).map((d) => {
    const matchReasons: string[] = [];
    if (lead.work_email && d.work_email === lead.work_email) matchReasons.push("email");
    if (lead.whatsapp && d.whatsapp === lead.whatsapp) matchReasons.push("whatsapp");
    if (
      lead.company_name &&
      d.company_name?.toLowerCase() === lead.company_name.toLowerCase()
    )
      matchReasons.push("company");
    return { ...d, matchReasons };
  });

  // Collect all unique actor IDs + assigned_to to resolve to names
  const actorIds = new Set<string>();
  (activitiesRes.data ?? []).forEach((a) => {
    if (a.actor_id) actorIds.add(a.actor_id);
    const d = (a.details ?? {}) as Record<string, unknown>;
    if (typeof d.from === "string" && d.from) actorIds.add(d.from);
    if (typeof d.to === "string" && d.to) actorIds.add(d.to);
  });
  if (leadRes.data.assigned_to) actorIds.add(leadRes.data.assigned_to);

  let userMap: Record<string, string> = {};
  if (actorIds.size > 0) {
    const { data: profiles } = await sb
      .from("profiles")
      .select("id, full_name, email")
      .in("id", Array.from(actorIds));
    userMap = Object.fromEntries(
      (profiles ?? []).map((p) => [p.id, p.full_name ?? p.email])
    );
  }

  return {
    lead: leadRes.data,
    qual: qualRes.data,
    activities: activitiesRes.data ?? [],
    userMap,
    duplicates,
  };
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [result, adminUsers] = await Promise.all([getLead(id), getAdminUsers()]);

  if (!result) notFound();
  const { lead, qual, activities, userMap, duplicates } = result;

  const breakdown =
    (lead.lead_score_breakdown as Record<string, number> | null) ?? {};

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-6xl">
        {/* Top breadcrumb + actions */}
        <div className="mb-6">
          <Link
            href="/admin/leads"
            className="text-sm text-slate hover:text-ink"
          >
            ← All leads
          </Link>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-mute mb-1">
              {lead.ref_code}
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-ink">
              {lead.full_name}
            </h1>
            <p className="mt-1 text-base text-slate">
              {lead.company_name}
              {lead.industry && ` · ${lead.industry}`}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <StatusBadge status={lead.status} />
              <PriorityBadge priority={lead.priority} />
              <span className="inline-flex items-center rounded-full border border-border bg-paper px-2.5 py-0.5 text-xs font-medium text-slate">
                Score: {lead.lead_score}
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-paper px-2.5 py-0.5 text-xs font-medium text-slate">
                Source: {lead.source}
              </span>
              {lead.assigned_to && userMap[lead.assigned_to] && (
                <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/5 px-2.5 py-0.5 text-xs font-medium text-brand-deep">
                  Assigned: {userMap[lead.assigned_to]}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <EditContactDialog
              leadId={lead.id}
              initial={{
                fullName: lead.full_name,
                workEmail: lead.work_email,
                whatsapp: lead.whatsapp,
                companyName: lead.company_name,
                industry: lead.industry,
                jobRole: lead.job_role,
              }}
            />
            <a
              href={`mailto:${lead.work_email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-4 h-10 text-sm text-ink hover:bg-cream transition"
            >
              Email
            </a>
            {lead.whatsapp && (
              <a
                href={buildWaLink(`proposal request ${lead.ref_code}`, lead.ref_code)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] text-white px-4 h-10 text-sm hover:opacity-90 transition"
              >
                <Whatsapp size={14} />
                WhatsApp
              </a>
            )}
            <a
              href={`/proposal/track/${lead.ref_code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-4 h-10 text-sm hover:bg-brand-deep transition"
            >
              Client tracking page
              <ArrowRight size={12} />
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact card */}
            <Card title="Contact">
              <Field label="Email" value={lead.work_email} mono />
              <Field label="WhatsApp" value={lead.whatsapp ?? "—"} mono />
              <Field
                label="Role"
                value={lead.job_role ?? "—"}
              />
              <Field
                label="Company size"
                value={SIZE_LABEL[lead.company_size ?? ""] ?? "—"}
              />
              <Field
                label="WA preferred"
                value={lead.whatsapp_preferred ? "Yes" : "No"}
              />
            </Card>

            {/* Qualification card */}
            {qual ? (
              <Card title="Qualifying details">
                <Field
                  label="Event types"
                  value={
                    qual.event_types
                      .map(
                        (t: string) => EVENT_TYPE_LABEL[t] ?? t.replace(/_/g, " ")
                      )
                      .join(", ") || "—"
                  }
                />
                <Field
                  label="Pax estimated"
                  value={`${qual.pax_estimated ?? "—"} pax`}
                />
                <Field
                  label="Budget tier"
                  value={BUDGET_LABEL[qual.budget_tier ?? ""] ?? "—"}
                />
                <Field
                  label="Duration"
                  value={qual.duration_preference ?? "—"}
                />
                <Field
                  label="Location preferences"
                  value={qual.location_preferences?.join(", ") || "—"}
                />
                <Field
                  label="Target date"
                  value={
                    qual.target_date_specific ??
                    qual.target_date_flexible_quarter ??
                    "—"
                  }
                />
                <Field
                  label="Urgency"
                  value={URGENCY_LABEL[qual.urgency ?? ""] ?? "—"}
                />
                {qual.additional_notes && (
                  <Field label="Notes" value={qual.additional_notes} />
                )}
              </Card>
            ) : (
              <Card title="Qualifying details">
                <p className="text-sm text-slate">
                  No qualifying data captured (possibly from quick-quote or
                  WhatsApp source).
                </p>
              </Card>
            )}
          </div>

          {/* Sidebar column */}
          <div className="space-y-6">
            <Card title="Quick actions">
              <LeadActionsPanel
                leadId={lead.id}
                currentStatus={lead.status}
                currentAssignedTo={lead.assigned_to}
                currentFollowUpAt={lead.follow_up_at ?? null}
                adminUsers={adminUsers}
              />
            </Card>

            {duplicates.length > 0 && (
              <Card title={`Possible duplicates (${duplicates.length})`}>
                <ul className="space-y-3 text-sm">
                  {duplicates.map((d) => (
                    <li key={d.id} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-warm flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/admin/leads/${d.id}`}
                          className="font-medium text-ink hover:text-brand-deep"
                        >
                          {d.ref_code} · {d.full_name}
                        </Link>
                        <p className="text-xs text-slate truncate">
                          {d.company_name}
                        </p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {d.matchReasons.map((r) => (
                            <span
                              key={r}
                              className="inline-flex items-center rounded-full bg-warm/10 text-warm px-1.5 py-0.5 text-[10px] font-medium"
                            >
                              same {r}
                            </span>
                          ))}
                          <span className="inline-flex items-center text-[10px] text-slate-mute tabular">
                            {new Date(d.created_at).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <Card title="Score breakdown">
              {Object.keys(breakdown).length === 0 ? (
                <p className="text-sm text-slate">No breakdown captured.</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {Object.entries(breakdown).map(([key, val]) => (
                    <li
                      key={key}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-slate">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span
                        className={`font-medium tabular ${
                          val < 0 ? "text-error" : "text-ink"
                        }`}
                      >
                        {val > 0 ? "+" : ""}
                        {val}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between gap-3 pt-2 border-t border-divider font-medium">
                    <span>Total</span>
                    <span className="tabular">{lead.lead_score}</span>
                  </li>
                </ul>
              )}
            </Card>

            <Card title="Activity">
              {activities.length === 0 ? (
                <p className="text-sm text-slate">No activity yet.</p>
              ) : (
                <ol className="space-y-4 text-sm">
                  {activities.map((a) => {
                    const details = (a.details ?? {}) as Record<string, unknown>;
                    const label = ACTIVITY_LABEL[a.activity_type] ?? a.activity_type.replace(/_/g, " ");
                    return (
                      <li key={a.id} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-brand flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-ink font-medium">{label}</p>
                          {a.activity_type === "note_added" && typeof details.note === "string" && (
                            <p className="mt-1 text-sm text-slate whitespace-pre-wrap leading-relaxed">
                              {details.note}
                            </p>
                          )}
                          {a.activity_type === "status_changed" && (
                            <p className="mt-1 text-xs text-slate">
                              {String(details.from ?? "—")} → <span className="text-ink">{String(details.to ?? "—")}</span>
                            </p>
                          )}
                          {a.activity_type === "assigned" && (
                            <p className="mt-1 text-xs text-slate">
                              {details.to
                                ? `Assigned to ${userMap[String(details.to)] ?? "user"}`
                                : "Unassigned"}
                            </p>
                          )}
                          <p className="text-xs text-slate-mute mt-1 tabular">
                            {a.actor_id && userMap[a.actor_id]
                              ? `${userMap[a.actor_id]} · `
                              : typeof details.by_name === "string"
                              ? `${details.by_name} · `
                              : ""}
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
                </ol>
              )}
            </Card>

            <Card title="Audit">
              <Field
                label="Submitted"
                value={new Date(lead.created_at).toLocaleString("id-ID")}
              />
              <Field
                label="Updated"
                value={new Date(lead.updated_at).toLocaleString("id-ID")}
              />
              {lead.source_url && (
                <Field label="Source URL" value={lead.source_url} mono />
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-3 border-b border-divider">
        <h2 className="text-xs uppercase tracking-wider text-slate-mute font-medium">
          {title}
        </h2>
      </header>
      <div className="p-5 space-y-3">{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  mono,
}: {
  label: string;
  value: string | React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div>
      <p className="text-xs text-slate-mute">{label}</p>
      <p
        className={`mt-0.5 text-sm text-ink ${
          mono ? "font-mono break-all" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
