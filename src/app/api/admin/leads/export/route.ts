/**
 * CSV export of leads matching current filter set.
 * Auth: requires signed-in admin (super_admin / sales_admin / marketing_admin).
 */
import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

export const dynamic = "force-dynamic";

const EXPORT_LIMIT = 5000;

function rangeToDate(range: string | null): string | null {
  if (!range || range === "all") return null;
  const days = range === "7d" ? 7 : range === "30d" ? 30 : range === "90d" ? 90 : 0;
  if (!days) return null;
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

function csvEscape(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET(req: NextRequest) {
  const profile = await getCurrentProfile();
  if (!profile || !["super_admin", "sales_admin", "marketing_admin"].includes(profile.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = req.nextUrl;
  const q = url.searchParams.get("q");
  const priority = url.searchParams.get("priority");
  const status = url.searchParams.get("status");
  const assigned = url.searchParams.get("assigned");
  const range = url.searchParams.get("range");

  const sb = createAdminClient();
  let query = sb
    .from("leads")
    .select(
      "ref_code, full_name, work_email, whatsapp, company_name, industry, company_size, job_role, source, status, priority, lead_score, assigned_to, created_at, updated_at"
    )
    .is("deleted_at", null)
    .order("created_at", { ascending: false })
    .limit(EXPORT_LIMIT);

  if (priority && priority !== "all") query = query.eq("priority", priority);
  if (status && status !== "all") query = query.eq("status", status);
  if (assigned && assigned !== "all") {
    if (assigned === "unassigned") query = query.is("assigned_to", null);
    else query = query.eq("assigned_to", assigned);
  }
  const sinceIso = rangeToDate(range);
  if (sinceIso) query = query.gte("created_at", sinceIso);
  if (q && q.trim().length > 0) {
    const term = `%${q.trim()}%`;
    query = query.or(
      `full_name.ilike.${term},work_email.ilike.${term},company_name.ilike.${term},ref_code.ilike.${term}`
    );
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Resolve assigned_to → name
  const assignedIds = Array.from(
    new Set((data ?? []).map((l) => l.assigned_to).filter((x): x is string => !!x))
  );
  let nameMap = new Map<string, string>();
  if (assignedIds.length > 0) {
    const { data: profiles } = await sb
      .from("profiles")
      .select("id, full_name, email")
      .in("id", assignedIds);
    nameMap = new Map(
      (profiles ?? []).map((p) => [p.id, p.full_name ?? p.email])
    );
  }

  const headers = [
    "ref_code",
    "full_name",
    "work_email",
    "whatsapp",
    "company_name",
    "industry",
    "company_size",
    "job_role",
    "source",
    "status",
    "priority",
    "lead_score",
    "assigned_to",
    "created_at",
    "updated_at",
  ];

  const rows = (data ?? []).map((l) =>
    [
      l.ref_code,
      l.full_name,
      l.work_email,
      l.whatsapp,
      l.company_name,
      l.industry,
      l.company_size,
      l.job_role,
      l.source,
      l.status,
      l.priority,
      l.lead_score,
      l.assigned_to ? nameMap.get(l.assigned_to) ?? l.assigned_to : "",
      l.created_at,
      l.updated_at,
    ]
      .map(csvEscape)
      .join(",")
  );

  const csv = "﻿" + [headers.join(","), ...rows].join("\n");
  const stamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
