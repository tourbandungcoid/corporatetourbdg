/**
 * Site-wide configuration & content constants.
 * Centralized for easy updates (NAP consistency, SEO, schema).
 */

export const SITE = {
  name: "TourBandung Corporate",
  legalName: "TourBandung Corporate (a unit of 7Summits Travel)",
  parent: "7Summits Travel",
  tagline:
    "Indonesia's most trusted partner for high-stakes corporate gatherings, designed with intent.",
  shortTagline: "Designed corporate experiences for enterprise Indonesia.",
  url: "https://corporate.tourbandung.co.id",
  domain: "corporate.tourbandung.co.id",
  email: "hello@corporate.tourbandung.co.id",
  phone: "+62 811 2345 678",
  phoneRaw: "+6281123456780",
  whatsapp: "+6281123456780",
  whatsappUrl:
    "https://wa.me/6281123456780?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20corporate%20outing.",
  address: {
    street: "Jl. Riau No. 1",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "40115",
    country: "ID",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/tourbandung-corporate",
    instagram: "https://www.instagram.com/tourbandung.corporate",
    youtube: "https://www.youtube.com/@tourbandungcorporate",
  },
  established: 2012,
  stats: {
    programs: "500+",
    clients: "180+",
    pax: "50,000+",
    years: "13",
  },
};

export const NAV = {
  primary: [
    {
      label: "Layanan",
      href: "/services",
      children: [
        { label: "Outing Kantor", href: "/services/outing-kantor" },
        { label: "Team Building", href: "/services/team-building" },
        { label: "Company Gathering", href: "/services/company-gathering" },
        { label: "MICE Bandung", href: "/services/mice-bandung" },
        { label: "Corporate Retreat", href: "/services/corporate-retreat" },
        { label: "Leadership Camp", href: "/services/leadership-camp" },
        { label: "Executive Offsite", href: "/services/executive-offsite" },
        { label: "Incentive Trip", href: "/services/incentive-trip" },
      ],
    },
    {
      label: "Industri",
      href: "/industries",
      children: [
        { label: "Banking & Finance", href: "/industries/banking-finance" },
        { label: "Tech & Startup", href: "/industries/tech-startup" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "FMCG & Retail", href: "/industries/fmcg" },
        { label: "BUMN & Government", href: "/industries/government-bumn" },
        { label: "Multinational", href: "/industries/multinational" },
      ],
    },
    { label: "Programs", href: "/programs" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ],
};

export const SERVICES = [
  {
    slug: "outing-kantor",
    title: "Outing Kantor",
    titleEn: "Corporate Outing",
    short: "Retreat strategis untuk tim, dari 1 hingga 5 hari.",
    description:
      "Program outing kantor yang dirancang dengan objective bisnis yang jelas — bukan sekadar jalan-jalan. Kami merancang narrative, agenda, dan logistik yang mengukur dampak ke engagement & alignment tim.",
    icon: "compass",
    duration: ["1 hari", "2 hari 1 malam", "3 hari 2 malam"],
    capacity: "50–800 pax",
    priceFrom: "IDR 750.000 / pax",
    outcomes: [
      "Team alignment terukur via pre/post survey",
      "Engagement uplift rata-rata 27% (data 2025)",
      "Memorable experience yang dibahas berbulan-bulan",
    ],
  },
  {
    slug: "team-building",
    title: "Team Building",
    titleEn: "Team Building",
    short: "Aktivitas behavior-driven yang terkait dengan team OKR.",
    description:
      "Bukan games random. Setiap aktivitas team building yang kami rancang terkait langsung dengan behavior team yang Anda ingin perkuat — kolaborasi, decision-making, komunikasi lintas-fungsi.",
    icon: "users",
    duration: ["Half-day", "Full-day", "2D1N"],
    capacity: "30–500 pax",
    priceFrom: "IDR 450.000 / pax",
    outcomes: [
      "Behavior shift measurable via facilitator debrief",
      "Cross-functional understanding meningkat",
      "Action items konkret yang dibawa kembali ke kantor",
    ],
  },
  {
    slug: "company-gathering",
    title: "Company Gathering",
    titleEn: "Company Gathering",
    short: "Acara tahunan kelas enterprise — annual gathering, family day.",
    description:
      "Annual gathering yang menyatukan ratusan hingga ribuan karyawan dengan storytelling yang kuat, produksi grade konferensi, dan pengalaman yang membangun loyalitas brand internal.",
    icon: "stars",
    duration: ["1 hari", "2 hari 1 malam"],
    capacity: "100–1500 pax",
    priceFrom: "IDR 850.000 / pax",
    outcomes: [
      "Brand internal & company culture aktivasi nyata",
      "Mass logistics dijalankan dengan SOP enterprise",
      "Konten visual & video untuk employer branding",
    ],
  },
  {
    slug: "mice-bandung",
    title: "MICE Bandung",
    titleEn: "MICE",
    short: "Meeting, Incentive, Convention, Exhibition di Bandung.",
    description:
      "Full-service MICE management — venue sourcing, AV production, registration, transportation. Bandung adalah destinasi MICE strategis: akses Jakarta dekat, cuaca ideal, venue berkelas.",
    icon: "presentation",
    duration: ["Day MICE", "Multi-day"],
    capacity: "50–2000 pax",
    priceFrom: "IDR 950.000 / pax",
    outcomes: [
      "Production-grade execution: AV, lighting, stage",
      "Vendor network preferred partner",
      "Compliance & risk protocol enterprise",
    ],
  },
  {
    slug: "corporate-retreat",
    title: "Corporate Retreat",
    titleEn: "Corporate Retreat",
    short: "Reflective retreat untuk leadership & senior team.",
    description:
      "Multi-day retreat yang dirancang untuk mendalami strategi, refleksi, dan alignment kepemimpinan. Setting alam Lembang atau Ciwidey, agenda yang menyeimbangkan deep work dan recovery.",
    icon: "mountain",
    duration: ["2D1N", "3D2N", "4D3N"],
    capacity: "10–80 pax",
    priceFrom: "IDR 2.400.000 / pax",
    outcomes: [
      "Strategic clarity di level leadership",
      "Personal & team alignment lebih kuat",
      "Output: written commitments & roadmap",
    ],
  },
  {
    slug: "leadership-camp",
    title: "Leadership Camp",
    titleEn: "Leadership Development",
    short: "Curriculum-based leadership development immersion.",
    description:
      "Program development pemimpin dengan kurikulum terstruktur, fasilitator bersertifikasi, dan framework yang dikenal industri (situational leadership, growth mindset, decision-making).",
    icon: "flag",
    duration: ["3D2N", "5D4N"],
    capacity: "15–60 pax",
    priceFrom: "IDR 3.200.000 / pax",
    outcomes: [
      "Capability uplift dengan assessment pre/post",
      "Personal development plan per peserta",
      "Cohort yang menjadi internal community",
    ],
  },
  {
    slug: "executive-offsite",
    title: "Executive Offsite",
    titleEn: "Executive Offsite",
    short: "Offsite strategis untuk C-suite dan board.",
    description:
      "Offsite eksklusif untuk top leadership — fokus pada strategic planning, board alignment, decision-making di lingkungan yang memungkinkan deep thinking di luar tekanan kantor.",
    icon: "briefcase",
    duration: ["2D1N", "3D2N"],
    capacity: "6–40 pax",
    priceFrom: "IDR 4.500.000 / pax",
    outcomes: [
      "Strategic plan yang siap eksekusi",
      "Confidential, high-trust setting",
      "Concierge-level service & logistics",
    ],
  },
  {
    slug: "incentive-trip",
    title: "Incentive Trip",
    titleEn: "Incentive Travel",
    short: "Rewards trip untuk top performer & sales achiever.",
    description:
      "Trip apresiasi yang memorable untuk top performer. Premium experience yang menjadi motivator nyata untuk pencapaian target — desain trip didasarkan pada psikologi recognition.",
    icon: "trophy",
    duration: ["2D1N", "3D2N"],
    capacity: "20–200 pax",
    priceFrom: "IDR 3.500.000 / pax",
    outcomes: [
      "Motivasi sales team meningkat (testable)",
      "Word-of-mouth internal yang kuat",
      "Linkage langsung ke commercial outcome",
    ],
  },
];

export const TRUST_LOGOS = [
  "Telkom Indonesia",
  "Bank Mandiri",
  "Pertamina",
  "Astra",
  "Unilever",
  "BCA",
  "Tokopedia",
  "Gojek",
  "Pupuk Kaltim",
  "BRI",
  "Kementerian PUPR",
  "Sinarmas",
];

export const INDUSTRY_CERTS = [
  "ASITA",
  "IATA",
  "ISO 9001:2015",
  "K3 Certified",
  "HR Asia Featured",
  "SWA Magazine",
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Strategic interview dengan HR & leadership untuk mendefinisikan outcome bisnis — bukan sekadar aktivitas.",
  },
  {
    number: "02",
    title: "Conceive",
    description:
      "Custom narrative, tema, dan learning arc yang relevan dengan company value dan momen Anda saat ini.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Proposal lengkap: itinerary day-by-day, venue, budget transparan line-item, dan risk plan.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Eksekusi on-ground dengan dedicated PM, medic, fasilitator bersertifikasi, dan protokol K3.",
  },
  {
    number: "05",
    title: "Debrief",
    description:
      "Post-event report dengan engagement metrics, foto/video kurated, dan recommendation untuk siklus berikutnya.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Mereka tidak menjual tour. Mereka mendesain experience yang menyatukan tim regional kami dengan cara yang workshop internal tidak pernah bisa lakukan.",
    author: "Mira A.",
    title: "Head of People & Culture",
    company: "Bank Nasional",
    industry: "Banking",
  },
  {
    quote:
      "Best offsite our engineering team has ever had. Setiap detail diurus tanpa kami perlu mikir, dan substance program-nya benar-benar berbobot.",
    author: "Daniel S.",
    title: "VP Engineering",
    company: "Tech Unicorn Indonesia",
    industry: "Tech",
  },
  {
    quote:
      "Untuk 450 peserta dari 14 kota berbeda, eksekusinya flawless. Procurement kami impressed dengan transparansi pricing dan compliance.",
    author: "Rina P.",
    title: "GA Director",
    company: "FMCG Multinational",
    industry: "FMCG",
  },
];

export const FAQ_HOME = [
  {
    q: "Berapa kira-kira budget per orang untuk corporate outing di Bandung?",
    a: "Range budget per pax: Essential (IDR 750K–1.2M, day program), Premium (IDR 1.5M–2.5M, 2D1N standard), Bespoke (IDR 2.5M+, custom executive). Variabel utama: durasi, akomodasi, dan tingkat customization. Kami menyediakan budget calculator interaktif untuk estimasi cepat.",
  },
  {
    q: "Berapa lead time minimum untuk event 300+ pax?",
    a: "Untuk event 300+ pax, kami merekomendasikan minimum 8 minggu lead time untuk hasil optimal — termasuk venue sourcing, konsep design, vendor coordination. Untuk RFP urgent (4–6 minggu), tetap bisa kami tangani dengan tim core yang lebih intensif.",
  },
  {
    q: "Apakah bisa custom tema sesuai company value kami?",
    a: "Ya, customization adalah core dari metodologi kami. Step 2 dari proses kami adalah Conceive — di mana kami merancang narrative, tema, dan learning arc yang spesifik untuk company value, momen organisasi, dan profile peserta Anda.",
  },
  {
    q: "Bagaimana payment term untuk corporate?",
    a: "Standard: 30% DP saat kontrak, 50% milestone (T-30 hari), 20% pelunasan post-event. Untuk klien enterprise dengan PO/term 30 hari, kami fleksibel sesuai compliance procurement Anda. NPWP, faktur pajak, dan dokumen legal lengkap tersedia.",
  },
  {
    q: "Apakah ada asuransi peserta?",
    a: "Setiap program kami covered dengan asuransi peserta minimum IDR 1M per orang, plus medic on-site untuk grup di atas 100 pax. Untuk aktivitas outdoor, ada protokol K3 tambahan dan emergency response SOP.",
  },
  {
    q: "Bagaimana cancellation policy?",
    a: "Transparan dan procurement-friendly: Cancellation >60 hari = refund 80%. 30–60 hari = 50%. 7–30 hari = 25%. <7 hari = no refund tapi reschedule available tanpa charge dalam 12 bulan. Force majeure clause mengcover situasi luar kendali.",
  },
];

export const PROGRAMS_FEATURED = [
  {
    slug: "lembang-leadership-offsite-2d1n",
    title: "The Lembang Leadership Offsite",
    duration: "2D1N",
    capacity: "Up to 80 pax",
    priceFrom: "IDR 2.400.000",
    short:
      "Strategic offsite untuk C-suite & senior leadership. Setting hutan pinus Lembang.",
    tag: "Signature",
  },
  {
    slug: "ciwidey-corporate-retreat-3d2n",
    title: "Ciwidey Corporate Retreat",
    duration: "3D2N",
    capacity: "Up to 120 pax",
    priceFrom: "IDR 2.800.000",
    short:
      "Deep retreat di kebun teh & glamping kelas premium. Untuk team reset & strategic planning.",
    tag: "Premium",
  },
  {
    slug: "pangalengan-leadership-camp-5d4n",
    title: "Pangalengan Leadership Camp",
    duration: "5D4N",
    capacity: "Up to 50 pax",
    priceFrom: "IDR 3.200.000",
    short:
      "Curriculum-based leadership immersion. 5 hari intensif untuk emerging leader cohort.",
    tag: "Curriculum",
  },
  {
    slug: "family-gathering-bandung-1d",
    title: "Bandung Family Gathering Day",
    duration: "1 Day",
    capacity: "Up to 800 pax",
    priceFrom: "IDR 850.000",
    short:
      "Family day kelas korporat — entertainment, catering, dan logistik untuk ratusan keluarga karyawan.",
    tag: "Family",
  },
];

export const CASE_STUDIES_FEATURED = [
  {
    slug: "national-bank-leadership-retreat",
    industry: "Banking & Finance",
    paxCount: 450,
    duration: "3D2N",
    headline:
      "Engagement score naik 34% post-event untuk 450 leader dari 14 cabang.",
    quote:
      "They didn't sell us a tour — they designed an experience that aligned our regional teams in ways our internal workshops never could.",
    quoteAuthor: "Mira A.",
    quoteTitle: "Head of People & Culture",
    company: "[Anonymized National Bank]",
  },
  {
    slug: "tech-unicorn-engineering-offsite",
    industry: "Tech & Startup",
    paxCount: 120,
    duration: "2D1N",
    headline:
      "Best engineering offsite dalam 7 tahun company history — terdokumentasi via internal NPS.",
    quote:
      "Best offsite our engineering team has ever had. Setiap detail diurus tanpa kami perlu mikir.",
    quoteAuthor: "Daniel S.",
    quoteTitle: "VP Engineering",
    company: "[Anonymized Tech Unicorn]",
  },
  {
    slug: "fmcg-mnc-annual-gathering",
    industry: "FMCG & Multinational",
    paxCount: 850,
    duration: "1 Day",
    headline:
      "Annual gathering 850 pax dari 14 kota — flawless mass logistics dengan zero incident.",
    quote:
      "Untuk 450 peserta dari 14 kota, eksekusinya flawless. Procurement kami impressed dengan transparansi dan compliance.",
    quoteAuthor: "Rina P.",
    quoteTitle: "GA Director",
    company: "[Anonymized FMCG MNC]",
  },
];

export const INDUSTRIES = [
  { slug: "banking-finance", label: "Banking & Finance" },
  { slug: "tech-startup", label: "Tech & Startup" },
  { slug: "manufacturing", label: "Manufacturing" },
  { slug: "fmcg", label: "FMCG & Retail" },
  { slug: "oil-gas", label: "Oil & Gas" },
  { slug: "pharmaceutical", label: "Pharmaceutical" },
  { slug: "government-bumn", label: "BUMN & Government" },
  { slug: "multinational", label: "Multinational" },
];

export const DESTINATIONS_CURRENT = [
  "Bandung",
  "Lembang",
  "Ciwidey",
  "Pangalengan",
  "Sumedang",
];

export const DESTINATIONS_COMING = ["Bali", "Yogyakarta", "Lombok"];
