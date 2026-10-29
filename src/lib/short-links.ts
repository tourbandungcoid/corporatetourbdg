/**
 * Short tracked links — corporate.tourbandung.co.id/go/<code>
 *
 * Use these anywhere a link leaves our control (IG bio, WA broadcast,
 * LinkedIn, email signature, Google Business Profile) so every visit
 * arrives with UTM tags and lands in the right channel on /admin.
 *
 * Optional query params on the short link:
 *   ?to=/insights/<slug>   land on a specific page (same-site path only)
 *   ?c=<label>             utm_content — e.g. the post or broadcast name
 *
 * Add a code: append below, commit, deploy. Never reuse a code for a
 * different source — old posts keep pointing at it.
 */
export type ShortLink = {
  label: string;
  to: string;
  utm: { source: string; medium: string; campaign: string };
};

export const SHORT_LINKS: Record<string, ShortLink> = {
  ig: {
    label: "Instagram bio",
    to: "/",
    utm: { source: "instagram", medium: "social", campaign: "bio" },
  },
  "ig-story": {
    label: "Instagram story link sticker",
    to: "/",
    utm: { source: "instagram", medium: "social", campaign: "story" },
  },
  li: {
    label: "LinkedIn company page / posts",
    to: "/",
    utm: { source: "linkedin", medium: "social", campaign: "organic-post" },
  },
  wa: {
    label: "WhatsApp broadcast",
    to: "/",
    utm: { source: "whatsapp", medium: "broadcast", campaign: "broadcast" },
  },
  "wa-status": {
    label: "WhatsApp status",
    to: "/",
    utm: { source: "whatsapp", medium: "status", campaign: "status" },
  },
  gbp: {
    label: "Google Business Profile website button",
    to: "/",
    utm: { source: "google-business", medium: "organic", campaign: "gbp" },
  },
  sig: {
    label: "Email signature",
    to: "/",
    utm: { source: "email-signature", medium: "email", campaign: "signature" },
  },
  yt: {
    label: "YouTube channel / description",
    to: "/",
    utm: { source: "youtube", medium: "social", campaign: "video-description" },
  },
  "7s": {
    label: "7Summits group websites",
    to: "/",
    utm: { source: "7summits", medium: "referral", campaign: "group-site" },
  },
};

/** Only same-site absolute paths — blocks open redirects (//evil.com, https://…). */
export function safeInternalPath(to: string | null | undefined): string | null {
  if (!to || !to.startsWith("/") || to.startsWith("//") || to.includes("\\")) return null;
  return to.slice(0, 300);
}

export function buildShortLinkTarget(
  link: ShortLink,
  opts: { to?: string | null; content?: string | null } = {}
): string {
  const path = safeInternalPath(opts.to) ?? link.to;
  const [pathname, existingQuery = ""] = path.split("?");
  const qs = new URLSearchParams(existingQuery);
  qs.set("utm_source", link.utm.source);
  qs.set("utm_medium", link.utm.medium);
  qs.set("utm_campaign", link.utm.campaign);
  const content = opts.content?.trim().slice(0, 100);
  if (content) qs.set("utm_content", content);
  return `${pathname}?${qs.toString()}`;
}
