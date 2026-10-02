import { cookies } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  ATTR_COOKIE,
  LAST_CONTENT_COOKIE,
  deriveChannel,
  type FirstTouch,
  type LeadAttribution,
} from "@/lib/attribution";

const MAX_LEN = 500;

function clean(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  return s ? s.slice(0, MAX_LEN) : null;
}

function parseFirstTouch(raw: string | undefined): FirstTouch {
  if (!raw) return {};
  try {
    const obj = JSON.parse(decodeURIComponent(raw));
    return obj && typeof obj === "object" ? (obj as FirstTouch) : {};
  } catch {
    return {};
  }
}

/** Read attribution cookies set by <AttributionTracker />. Never throws. */
export async function getLeadAttribution(): Promise<LeadAttribution> {
  let t: FirstTouch = {};
  let lastContent: string | null = null;
  try {
    const jar = await cookies();
    t = parseFirstTouch(jar.get(ATTR_COOKIE)?.value);
    const lc = jar.get(LAST_CONTENT_COOKIE)?.value;
    lastContent = lc ? clean(decodeURIComponent(lc)) : null;
  } catch {
    // cookies() unavailable — fall through with empty attribution
  }

  const ts = clean(t.ts);
  return {
    landing_page: clean(t.lp),
    conversion_page: lastContent,
    referrer: clean(t.ref),
    channel: deriveChannel(t),
    utm_source: clean(t.us),
    utm_medium: clean(t.um),
    utm_campaign: clean(t.uc),
    utm_term: clean(t.ut),
    utm_content: clean(t.ux),
    gclid: clean(t.gclid),
    fbclid: clean(t.fbclid),
    first_visit_at: ts && !Number.isNaN(Date.parse(ts)) ? ts : null,
  };
}

/**
 * Insert a lead with attribution columns. If the attribution migration
 * hasn't been applied yet (unknown column), retry with only the legacy
 * `referrer` column so lead capture never breaks because of tracking.
 */
export async function insertLeadWithAttribution(
  sb: SupabaseClient,
  row: Record<string, unknown>,
  attribution: LeadAttribution
) {
  const first = await sb
    .from("leads")
    .insert({ ...row, ...attribution })
    .select("id, ref_code")
    .single();

  const code = first.error?.code;
  if (code === "PGRST204" || code === "42703") {
    console.warn(
      "[attribution] attribution columns missing — run migration 20261002000000_lead_attribution.sql"
    );
    return sb
      .from("leads")
      .insert({ ...row, referrer: attribution.referrer })
      .select("id, ref_code")
      .single();
  }
  return first;
}
