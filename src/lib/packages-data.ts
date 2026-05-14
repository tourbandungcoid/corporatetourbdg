import { IMAGES } from "@/lib/drive-images";

export type Package = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  paxRange: string;
  duration: string;
  vibeTags: string[];
  startingPrice: string;
  priceNumeric: number; // for sorting
  inclusions: string[];
  featured: boolean;
  serviceSlug: string;
  image: typeof IMAGES.heroMain;
};

const PACKAGES: Package[] = [
  {
    slug: "glamping-1d2n-team-bonding",
    title: "Glamping 1D2N — Team Bonding",
    subtitle: "Premium outdoor experience untuk team bonding",
    description:
      "Tenda safari premium, bonfire dinner, sunrise reflection circle, outdoor cooking competition. Unique outdoor tanpa kompromi kenyamanan.",
    paxRange: "30–80 pax",
    duration: "1D2N",
    vibeTags: ["Outdoor", "Bonding", "Unique"],
    startingPrice: "Rp 1.8 jt/pax",
    priceNumeric: 1.8,
    inclusions: [
      "Tenda safari premium dengan kasur asli + en-suite bathroom",
      "F&B 3x fine-dining outdoor",
      "Bonfire briefing session",
      "Sunrise + outdoor cooking competition",
      "Photographer outdoor specialist",
    ],
    featured: false,
    serviceSlug: "glamping-corporate",
    image: IMAGES.packageGlamping,
  },
  {
    slug: "team-building-olympic-1day",
    title: "Team Building Olympic 1-Day",
    subtitle: "Full-day outbond multi-station team challenge",
    description:
      "Olympic-format dengan 4-5 station challenge rotation. Methodology Tuckman-aligned untuk hit specific team outcome.",
    paxRange: "30–150 pax",
    duration: "Full Day",
    vibeTags: ["Energy", "Methodology", "Outbound"],
    startingPrice: "Rp 1.8 jt/pax",
    priceNumeric: 1.8,
    inclusions: [
      "Senior facilitator certified",
      "Equipment standard internasional + safety crew",
      "4-5 activity stations (rotation 90 min)",
      "Pre-event team assessment optional",
      "F&B 2 meals + snack",
      "Post-event outcome report",
    ],
    featured: false,
    serviceSlug: "team-building",
    image: IMAGES.caseStudyTeamBuilding,
  },
  {
    slug: "signature-annual-gathering-3d2n",
    title: "Signature Annual Gathering 3D2N",
    subtitle: "Premium multi-day corporate event",
    description:
      "Annual gathering dengan opening ceremony, awarding night, gala dinner premium. Sweet spot untuk perusahaan 100-400 pax.",
    paxRange: "100–400 pax",
    duration: "3D2N",
    vibeTags: ["Premium", "Annual", "Production"],
    startingPrice: "Rp 3.5 jt/pax",
    priceNumeric: 3.5,
    inclusions: [
      "Hotel bintang 4-5 dengan ballroom",
      "F&B 3x premium + gala 5-course",
      "Opening ceremony + CEO address production",
      "Awarding night dengan trophy custom",
      "Live entertainment + MC bilingual",
      "Team activity day parallel tracks",
      "Documentation profesional + drone footage",
    ],
    featured: true,
    serviceSlug: "company-gathering",
    image: IMAGES.packageAnnualGathering,
  },
  {
    slug: "family-day-corporate-1day",
    title: "Family Day Corporate 1-Day",
    subtitle: "Employee + keluarga + anak — family inclusive",
    description:
      "Multi-track activity paralel (anak-anak vs dewasa), family-style dining, photo moments, child entertainment profesional.",
    paxRange: "80–400 attendee (incl family)",
    duration: "1 Day",
    vibeTags: ["Family", "Inclusive", "Mass-scale"],
    startingPrice: "Rp 1.5 jt/employee",
    priceNumeric: 1.5,
    inclusions: [
      "Resort venue dengan outdoor area luas",
      "Kids zone profesional (4 child entertainer)",
      "Multi-track activity paralel",
      "F&B halal + vegetarian + allergen-friendly station",
      "Door prize draw + photo profesional",
      "Medical standby khusus anak",
    ],
    featured: false,
    serviceSlug: "annual-company-trip",
    image: IMAGES.heroMain,
  },
  {
    slug: "executive-offsite-premium-2d1n",
    title: "Executive Offsite Premium 2D1N",
    subtitle: "C-suite strategy session discreet",
    description:
      "Venue private exclusive (heritage villa atau private estate), NDA-bound staff, certified strategy facilitator, 6-layer confidentiality protocol.",
    paxRange: "8–20 pax C-suite",
    duration: "2D1N",
    vibeTags: ["Discreet", "Premium", "Strategic"],
    startingPrice: "Rp 6.5 jt/pax",
    priceNumeric: 6.5,
    inclusions: [
      "Venue private exclusive (heritage villa)",
      "NDA-bound staff + vendor",
      "F&B fine-dining premium",
      "Pre-offsite stakeholder briefing + pre-read material",
      "Decision capture + accountability framework",
      "Encrypted documentation protocol",
    ],
    featured: false,
    serviceSlug: "executive-offsite",
    image: IMAGES.packageExecutiveOffsite,
  },
  {
    slug: "leadership-retreat-3d2n",
    title: "Leadership Retreat 3D2N",
    subtitle: "Senior leadership development cohort",
    description:
      "Certified executive coach (ICF MCC), 5 leadership framework curriculum, 360-feedback integration optional, peer coaching pair setup.",
    paxRange: "12–25 pax",
    duration: "3D2N",
    vibeTags: ["Development", "Cohort", "Senior"],
    startingPrice: "Rp 5 jt/pax",
    priceNumeric: 5.0,
    inclusions: [
      "Certified executive coach (ICF PCC/MCC)",
      "5 leadership framework curriculum",
      "360-feedback assessment optional",
      "Pre-retreat 1-on-1 coaching call",
      "Peer coaching pair 6-month commitment",
      "Individual Leadership Development Plan (IDP)",
      "30/60/90 day follow-up framework",
    ],
    featured: false,
    serviceSlug: "leadership-camp",
    image: IMAGES.caseStudyExecutive,
  },
  {
    slug: "sales-reward-trip-2d1n",
    title: "Sales Reward Trip 2D1N",
    subtitle: "Premium incentive experience untuk top performer",
    description:
      "Recognition + bonding + signal investment di top talent. Premium accommodation, exclusive activities, personal recognition speech.",
    paxRange: "20–80 top performer",
    duration: "2D1N",
    vibeTags: ["Reward", "Premium", "Recognition"],
    startingPrice: "Rp 4.5 jt/pax",
    priceNumeric: 4.5,
    inclusions: [
      "Premium accommodation (villa atau resort 5-star)",
      "F&B fine-dining premium",
      "Exclusive activity (private tour, premium adventure)",
      "Personal recognition speech per peserta",
      "Custom branded merchandise",
      "Photographer profesional + recap video",
    ],
    featured: false,
    serviceSlug: "incentive-trip",
    image: IMAGES.packageGlamping,
  },
  {
    slug: "mass-annual-trip-3d2n",
    title: "Mass Annual Trip 3D2N (500+ pax)",
    subtitle: "Big annual moment seluruh perusahaan",
    description:
      "Logistically complex — multi-bus transport, parallel activity tracks, F&B mass coordination. Kami sudah handle 1.200 pax 3-day.",
    paxRange: "500–2000 pax",
    duration: "3D2N",
    vibeTags: ["Mass-scale", "Annual", "Multi-day"],
    startingPrice: "Rp 2.5 jt/pax",
    priceNumeric: 2.5,
    inclusions: [
      "Multi-venue hotel cluster setup",
      "Multi-bus convoy coordination",
      "Multi-track parallel activity (3-5 streams)",
      "Dietary mapping mass (halal, vegetarian, allergen)",
      "Medical standby + first responder",
      "Senior PM + 6-12 coordinator",
      "Recap video + post-event report",
    ],
    featured: false,
    serviceSlug: "annual-company-trip",
    image: IMAGES.caseStudyLarge,
  },
];

export function getPackages(): Package[] {
  return PACKAGES;
}

export function getFeaturedPackages(): Package[] {
  return PACKAGES.filter((p) => p.featured);
}

export function getPackageBySlug(slug: string): Package | null {
  return PACKAGES.find((p) => p.slug === slug) ?? null;
}

export function getPackageSlugs(): string[] {
  return PACKAGES.map((p) => p.slug);
}
