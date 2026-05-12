/**
 * Site-wide constants.
 *
 * These are hardcoded for now. In Phase 7 (CMS), most will move to
 * `site_settings` table editable via /admin/settings.
 */

export const SITE = {
  name: "TourBandung Corporate",
  parentBrand: "7Summits Travel",
  tagline: "B2B Corporate Outing & Team Building Bandung",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://corporate.tourbandung.co.id",
} as const;

export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "628000000000",
  email: "hello@corporate.tourbandung.co.id",
  address: "Bandung, Jawa Barat, Indonesia",
  officeHours: "Senin–Jumat · 09.00–18.00 WIB",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/tour-bandung-corporate",
  instagram: "https://www.instagram.com/tourbandungcorporate",
  youtube: "https://www.youtube.com/@tourbandungcorporate",
} as const;

export const STATS = {
  eventsDelivered: "400+",
  yearsOperating: "Sejak 2018",
  repeatBookingRate: "92%",
  avgResponseTime: "6 jam",
  companiesTrusted: "100+",
  largestEventPax: "1,200",
  venuePartners: "60+",
  industriesServed: "8+",
} as const;

/**
 * Build a WhatsApp pre-fill link.
 */
export function buildWaLink(context?: string, refCode?: string): string {
  const baseMsg = context
    ? `Halo, saya tertarik dengan ${context} untuk tim saya.`
    : "Halo, saya tertarik dengan layanan corporate outing/gathering. Bisa info lebih lanjut?";
  const refSuffix = refCode ? ` (Ref: ${refCode})` : "";
  const fullMsg = `${baseMsg}${refSuffix}\n\n[Dari: ${SITE.url}]`;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(fullMsg)}`;
}
