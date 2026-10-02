/**
 * Lead attribution — shared (client + server) definitions.
 *
 * <AttributionTracker /> writes two first-party cookies:
 *   tb_attr  first-touch: landing page, external referrer, UTM, click IDs (90d)
 *   tb_lc    last content page viewed before a form (30d)
 * Lead server actions read them via getLeadAttribution() and persist
 * the result on the lead row (see 20261002000000_lead_attribution.sql).
 */

export const ATTR_COOKIE = "tb_attr";
export const LAST_CONTENT_COOKIE = "tb_lc";
export const ATTR_MAX_AGE_DAYS = 90;
export const LAST_CONTENT_MAX_AGE_DAYS = 30;

/** Compact cookie payload — short keys keep the cookie small. */
export type FirstTouch = {
  lp?: string; // landing page (path + query)
  ref?: string; // external referrer URL
  us?: string; // utm_source
  um?: string; // utm_medium
  uc?: string; // utm_campaign
  ut?: string; // utm_term
  ux?: string; // utm_content
  gclid?: string;
  fbclid?: string;
  ts?: string; // ISO timestamp of first visit
};

/** Columns written to public.leads. */
export type LeadAttribution = {
  landing_page: string | null;
  conversion_page: string | null;
  referrer: string | null;
  channel: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  gclid: string | null;
  fbclid: string | null;
  first_visit_at: string | null;
};

/** Paths that are never a "landing" or "content" page. */
export function isUntrackedPath(path: string): boolean {
  return (
    path.startsWith("/admin") ||
    path.startsWith("/auth") ||
    path.startsWith("/api")
  );
}

/** Funnel pages — excluded from conversion_page (we want the page before). */
export function isFunnelPath(path: string): boolean {
  return path.startsWith("/proposal");
}

const SEARCH_HOSTS = /(^|\.)(google|bing|yahoo|duckduckgo|ecosia|yandex|baidu|naver)\./;
const AI_HOSTS =
  /(^|\.)(chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|claude\.ai|copilot\.microsoft\.com|you\.com)$/;
const SOCIAL_HOSTS =
  /(^|\.)(instagram\.com|facebook\.com|fb\.com|fb\.me|linkedin\.com|lnkd\.in|t\.co|twitter\.com|x\.com|tiktok\.com|youtube\.com|youtu\.be|threads\.net|pinterest\.com)$/;
const SOCIAL_SOURCES =
  /^(ig|instagram|fb|facebook|meta|linkedin|li|tiktok|tt|twitter|x|youtube|yt|threads)$/;

function hostOf(url: string | undefined): string {
  if (!url) return "";
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

/**
 * Bucket a first touch into a marketing channel. Mirrors GA4's default
 * channel grouping closely enough to compare numbers, plus an
 * "AI Assistant" bucket for ChatGPT / Perplexity / Gemini referrals.
 */
export function deriveChannel(t: FirstTouch): string {
  const medium = (t.um ?? "").toLowerCase();
  const source = (t.us ?? "").toLowerCase();

  if (t.gclid || /^(cpc|ppc|paid|paidsearch|paid_search|sem)$/.test(medium)) {
    return SOCIAL_SOURCES.test(source) ? "Paid Social" : "Paid Search";
  }
  if (/^(paid_social|paidsocial|social_paid|cpm)$/.test(medium)) return "Paid Social";
  if (/^(email|e-mail|newsletter)$/.test(medium)) return "Email";
  if (medium === "social" || SOCIAL_SOURCES.test(source)) return "Social";
  if (/^(whatsapp|wa)$/.test(source) || medium === "whatsapp") return "WhatsApp";
  if (source || medium) return "Other Campaign";

  const host = hostOf(t.ref);
  if (host) {
    if (AI_HOSTS.test(host)) return "AI Assistant";
    if (SEARCH_HOSTS.test(host)) return "Organic Search";
    if (SOCIAL_HOSTS.test(host) || t.fbclid) return "Social";
    return "Referral";
  }
  if (t.fbclid) return "Social";
  return "Direct";
}
