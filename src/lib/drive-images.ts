/**
 * Drive image registry — curated photos dari Google Drive folder.
 *
 * Source: https://drive.google.com/drive/folders/1ho8bmQxYYqdojve1tgaXSPCCgQ6Zd5Hx
 *
 * REQUIRED SETUP:
 *   The Drive folder MUST be set to "Anyone with the link can view"
 *   in Google Drive sharing settings — otherwise images won't load in production.
 *
 * URL strategy:
 *   We use Google's thumbnail endpoint with size param. This:
 *   - Serves properly-scaled JPEG/PNG directly (no HTML interstitial)
 *   - Works for any publicly-viewable Drive file
 *   - Caches well on Google's CDN
 *
 * Migration path: in Phase 7 (CMS), these will move to Supabase Storage with
 * editable URLs in the database via /admin/media library.
 */

const DRIVE_THUMB = (id: string, size: number = 2400) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

type DriveImage = {
  id: string;
  src: string;
  alt: string;
};

const img = (id: string, alt: string, size: number = 2400): DriveImage => ({
  id,
  src: DRIVE_THUMB(id, size),
  alt,
});

export const IMAGES = {
  // --- Hero ---
  heroMain: img(
    "1zGufb68_WTLYzpXXSakFoqChmT3dREQJ",
    "Corporate outing peserta di lokasi Bandung — momentum bonding tim"
  ),

  // --- Featured Packages (3) ---
  packageGlamping: img(
    "1FgSvGURuRXmXEmUWe7RKqF86kUzIjpzX",
    "Glamping corporate experience — outdoor premium di Bandung"
  ),
  packageAnnualGathering: img(
    "1Wvu5nFEI9naLVxB4zD6ynyo_m_nXJKQD",
    "Annual company gathering — momentum tahunan tim perusahaan"
  ),
  packageExecutiveOffsite: img(
    "1zfavZyqmxlBQUGYROITIIcXwgjU4uSd7",
    "Executive offsite di premium villa — discreet & focused"
  ),

  // --- Case Studies (3) ---
  caseStudyLarge: img(
    "1Zs5yMN6JLpCQ0mbKArehj2bTQkQ2oW2e",
    "Large-scale corporate event — 800 pax di Lembang"
  ),
  caseStudyTeamBuilding: img(
    "1vLvaJJ11Wwgz_BpfEl1TFswcBjCT2wId",
    "Outbound corporate — offroad activity di Bandung"
  ),
  caseStudyExecutive: img(
    "1RaLPiB5OfUq1v079lQfp2YonxtU7PSdh",
    "C-level strategic offsite — intimate setting"
  ),

  // --- Activity / Outbound ---
  offroad1: img("1vLvaJJ11Wwgz_BpfEl1TFswcBjCT2wId", "Offroad team building"),
  offroad2: img("1r3pMf0qBYFgRiT8lb5igqPxpIVMMwRwM", "Paintball corporate"),
  offroad3: img("1m5YhycaOn3alFeWtVw_rBhEL9ok1lco-", "Adventure outbound"),

  // --- Group shots (untuk Final CTA / trust visuals) ---
  groupShot1: img(
    "1prBQePuxrjkrLs2F-jDhIUbrk6vxERwc",
    "Group photo corporate gathering"
  ),
} as const;

export type ImageKey = keyof typeof IMAGES;
