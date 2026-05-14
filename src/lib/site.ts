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
 * context: human-readable event type (e.g. "corporate gathering 200 pax")
 * refCode: optional tracking ref
 * details: optional structured details for pre-qualified leads
 */
export function buildWaLink(
  context?: string,
  refCode?: string,
  details?: { pax?: string; timeline?: string; budget?: string }
): string {
  const refSuffix = refCode ? ` (Ref: ${refCode})` : "";

  let fullMsg: string;
  if (details && (details.pax || details.timeline || details.budget)) {
    const lines = [
      `Halo, saya mau tanya tentang *${context ?? "corporate outing/gathering"}* untuk perusahaan kami.`,
      "",
      "Detail kebutuhan:",
      details.pax ? `• Jumlah peserta: *${details.pax}*` : "",
      details.timeline ? `• Target waktu: *${details.timeline}*` : "",
      details.budget ? `• Budget range: *${details.budget}*` : "",
      "",
      "Bisa bantu kirimkan proposal / estimasi budget awal?",
      "",
      `[Dari: ${SITE.url}${refSuffix}]`,
    ].filter((l) => l !== undefined);
    fullMsg = lines.join("\n");
  } else {
    const baseMsg = context
      ? `Halo, saya tertarik dengan *${context}* untuk tim kami. Bisa tolong kirimkan proposal / estimasi budget?`
      : "Halo, saya tertarik dengan layanan corporate outing/gathering TourBandung. Bisa info lebih lanjut?";
    fullMsg = `${baseMsg}\n\n[Dari: ${SITE.url}${refSuffix}]`;
  }

  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(fullMsg)}`;
}
