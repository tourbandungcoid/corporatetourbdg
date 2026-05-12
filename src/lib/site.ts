/**
 * Site-wide constants.
 *
 * These are hardcoded for now. In Phase 7 (CMS), most will move to
 * `site_settings` table editable via /admin/settings.
 */

export const SITE = {
  name: "TourBandung Corporate",
  legalName: "7Summits Travel",
  parentBrand: "7Summits Travel",
  tagline: "B2B Corporate Outing & Team Building Bandung",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://corporate.tourbandung.co.id",
  googleMapsUrl: "https://maps.app.goo.gl/Qppfm6wPUYiKg26i9",
} as const;

export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "628112277954",
  phoneDisplay: "0811 2277 954",
  email: "hello@corporate.tourbandung.co.id",
  address: {
    street: "Jl. Babakan Priangan I No.11C",
    sublocality: "Ciseureuh",
    locality: "Kec. Regol",
    city: "Kota Bandung",
    region: "Jawa Barat",
    postalCode: "40255",
    country: "ID",
    full: "Jl. Babakan Priangan I No.11C, Ciseureuh, Kec. Regol, Kota Bandung, Jawa Barat 40255",
  },
  officeHours: "Senin–Jumat · 08.00–17.00 WIB",
  officeHoursStructured: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
} as const;

export const REVIEWS = {
  googleRating: 4.9,
  googleReviewCount: 105,
  googleMapsUrl: "https://maps.app.goo.gl/Qppfm6wPUYiKg26i9",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/7summits-travel",
  instagram: "https://www.instagram.com/7summitstravel",
  youtube: "https://www.youtube.com/@7summitstravel",
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
