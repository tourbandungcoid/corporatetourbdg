import { IMAGES } from "@/lib/drive-images";

export type InsightSection = {
  heading?: string;
  paragraphs: string[];
  /** Optional bullet list rendered after paragraphs */
  bullets?: string[];
  /** Optional numbered list */
  numbered?: string[];
  /** Optional callout style */
  callout?: { label: string; text: string };
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tldr: string[];
  metaDescription: string;
  heroImage: typeof IMAGES.heroMain;
  publishDate: string; // ISO date
  readTimeMin: number;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  sections: InsightSection[];
  relatedSlugs?: string[];
  /** Contextual links to money/service pages — rendered as "Layanan terkait" widget in article body */
  internalLinks?: { href: string; label: string; description: string }[];
  /** Optional HowTo schema data — emit HowTo rich result when article is a step-by-step guide */
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
};

const INSIGHTS: Record<string, Insight> = {
  "5-pillar-corporate-outing-design": {
    slug: "5-pillar-corporate-outing-design",
    title:
      "5-Pillar Corporate Outing Design™ — Framework dari 400+ Events",
    excerpt:
      "Methodology yang kami pakai untuk design corporate outing yang outcome-driven, bukan generic. 5 pilar — Objective, Audience, Venue, Activity, Measurement.",
    metaDescription:
      "5-Pillar Corporate Outing Design framework — methodology untuk corporate event yang outcome-driven. Dari 400+ events delivered oleh TourBandung Corporate.",
    category: "Methodology",
    tldr: [
      "Generic corporate outing fail karena tidak start dari objective. 70% perusahaan book vendor tanpa clear goal definition.",
      "5-Pillar framework: Objective → Audience → Venue & Logistics → Activity Architecture → Outcome Measurement. Sequential, bukan parallel.",
      "Pillar 1 (Objective) adalah yang paling underrated. Tanpa clear objective, 4 pillar lain jadi opinion.",
      "Pillar 5 (Measurement) adalah yang paling sering di-skip. Tanpa measurement, susah justify investment ke management.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-10",
    readTimeMin: 9,
    author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist", initials: "AP" },
    sections: [
      {
        paragraphs: [
          "Setelah deliver 400+ corporate events sejak 2018, kami notice pattern jelas: event yang outcome-nya impactful selalu di-design dari objective dulu — bukan dari venue, activity, atau budget. Event yang generic dan forgettable, selalu start dari pertanyaan salah: 'Mau outing dimana?' atau 'Activity apa yang seru?'",
          "Framework yang kami pakai untuk men-translate brief client jadi corporate event yang impactful — 5-Pillar Corporate Outing Design™. Sequential framework, bukan parallel. Setiap pillar adalah prerequisite untuk pillar berikutnya.",
        ],
      },
      {
        heading: "Pillar 1: Objective Alignment",
        paragraphs: [
          "Pertanyaan terbalik: apa team outcome yang mau dicapai? Bukan 'kita mau outing tanggal X', tapi 'kita butuh tim X melakukan Y dalam waktu Z'. Outcome bisa bonding pasca-merger, engagement boost, cultural reinforcement, strategic alignment, atau leadership development — masing-masing demand format yang berbeda.",
          "Dari 400+ event, kami consistently see: tim yang sebelum event punya specific articulated objective, post-event engagement score-nya naik signifikan dan retention impact bertahan 6+ bulan. Tim yang event-nya generic ('refresh + bonding casual'), impact rata-rata cuma 2-4 minggu.",
        ],
        callout: {
          label: "Insight",
          text: "70% perusahaan yang kami brief pertama kali tidak punya specific objective. Brief mereka 'we want outing' atau 'team need bonding'. Sebelum kami design, harus brief intensif 60-90 menit untuk articulate objective real.",
        },
      },
      {
        heading: "Pillar 2: Audience Mapping",
        paragraphs: [
          "Setelah objective clear, baru analisis audience. Demografi (umur range, gender mix, generational split), fitness/mobility level, religion + dietary needs, cultural diversity, dan first-timer vs repeat outing experience.",
          "Cross-generational outing demand parallel activity tracks (Gen-Z prefer high-energy + photo moments, Gen-X prefer pragmatic + comfort). First-timer outdoor demand Tier 1 Light activity dengan modification option. Religious mix demand parallel F&B station + prayer time accommodation.",
        ],
      },
      {
        heading: "Pillar 3: Venue & Logistics Curation",
        paragraphs: [
          "Venue di-pick berdasarkan objective + audience. Bonding intimate → villa private. Premium awarding → hotel ballroom premium. Adventure outbound → outdoor camp. Strategic retreat → eco-lodge atau private heritage villa.",
          "Logistics: pax capacity, dietary feasibility, accessibility (wheelchair, mobility-impaired), parking + transport logistics, medical proximity, dan safety standards. Untuk grup 200+ pax, multi-venue cluster setup adalah default.",
        ],
        bullets: [
          "Lembang area — accessible, premium villa density tinggi, ideal untuk 50-300 pax",
          "Ciwidey — adventure + glamping, lebih remote, ideal untuk team bonding deep",
          "Pangalengan — quiet, scenic, ideal untuk retreat reflektif",
          "Bandung kota — accessibility-first untuk hybrid event + MICE",
        ],
      },
      {
        heading: "Pillar 4: Activity Architecture",
        paragraphs: [
          "Activity di-frame untuk hit specific team outcome — bukan random fun. Activity mix di-design untuk balance energy curve (tidak boleh back-to-back high intensity), accommodate audience diversity, dan deliver shared moments yang memorable.",
          "Methodology framework yang kami pakai: Tuckman model untuk team development arc, DiSC profile untuk personality awareness session, Belbin team roles untuk role optimization. Pilihan framework di-match dengan goal dan team maturity level.",
        ],
      },
      {
        heading: "Pillar 5: Outcome Measurement",
        paragraphs: [
          "Pillar paling sering di-skip — dan paling impactful. Tanpa measurement, susah justify investment ke management dan susah improve next event.",
          "Framework standar yang kami integrate: (1) Pre-event baseline survey (engagement score, communication index, retention intent). (2) Post-event survey 1 minggu setelahnya. (3) Long-term retention check 6 bulan kemudian. Compare delta antara peserta vs non-peserta = data yang bisa di-translate ke financial outcome.",
        ],
        callout: {
          label: "Example",
          text: "Untuk 100 peserta event, kalau attrition reduction 10% × salary Rp 8 jt × 9 bulan turnover cost = Rp 720 jt retention saving. Event budget Rp 250 jt = ROI 2.9x. Itu angka yang CFO bisa relate.",
        },
      },
      {
        heading: "Sequential, bukan parallel",
        paragraphs: [
          "Implementasi framework ini sequential. Tidak bisa skip pillar 1 dan langsung ke pillar 3 (venue). Tidak bisa design activity (pillar 4) tanpa tahu objective dan audience. Sequential discipline ini yang membedakan vendor specialist dari travel agent retail yang nyambi corporate.",
          "Untuk perusahaan yang serius pertimbangin corporate outing sebagai strategic investment (bukan annual ritual generic), framework ini adalah starting point. Brief tim Anda lewat 5 pillar — apa objective, siapa audience, kenapa venue X, kenapa activity Y, bagaimana measurement-nya.",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Apply 5-pillar framework ke outing kantor — dari planning hingga eksekusi." },
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "Program team building dengan methodology outcome-driven untuk tim Anda." },
      { href: "/executive-offsite-bandung", label: "Executive Offsite Bandung", description: "Framework 5-pillar untuk C-suite strategic session yang high-impact." },
      { href: "/faq/formats", label: "FAQ Format & Programs", description: "88+ jawaban soal format corporate event — outdoor, indoor, hybrid, multi-day." },
      { href: "/faq/outcome", label: "FAQ Outcome & ROI", description: "Cara mengukur ROI outing dan justifikasi ke Finance + C-level." },
    ],
    relatedSlugs: ["bandung-outing-tier-system", "justify-outing-budget-to-finance", "cara-membuat-brief-event-organizer"],
    howTo: {
      name: "Cara Menerapkan 5-Pillar Corporate Outing Design™",
      description: "Framework sequential untuk merancang corporate outing yang outcome-driven — dari objective hingga measurement.",
      steps: [
        { name: "Tentukan Objective", text: "Artikulasikan team outcome spesifik yang ingin dicapai: bonding pasca-merger, engagement boost, cultural reinforcement, strategic alignment, atau leadership development. Hindari objective generik seperti 'refreshing' atau 'bonding casual'." },
        { name: "Peta Audience", text: "Analisis demografi peserta: umur range, generational split, fitness level, kebutuhan dietary dan religi, serta pengalaman outing sebelumnya. Cross-generational group butuh parallel activity track." },
        { name: "Kurasi Venue & Logistik", text: "Pilih venue berdasarkan objective dan audience — bukan harga. Bonding intimate: villa private. Award night premium: hotel ballroom. Adventure outbound: outdoor camp. Pastikan kapasitas, aksesibilitas, dan kedekatan layanan medis terpenuhi." },
        { name: "Rancang Activity Architecture", text: "Frame setiap activity untuk hit specific team outcome. Desain energy curve yang seimbang (tidak back-to-back high intensity). Gunakan framework Tuckman, DiSC, atau Belbin yang sesuai goal dan maturitas tim." },
        { name: "Tetapkan Outcome Measurement", text: "Kirim pre-event baseline survey (eNPS, retention intent, communication index) 1 minggu sebelum event. Ulangi 1 minggu setelah event. Track attrition peserta vs non-peserta 6 bulan kemudian untuk membuktikan ROI ke Finance." },
      ],
    },
  },

  "bandung-outing-tier-system": {
    slug: "bandung-outing-tier-system",
    title: "Bandung Outing Tier System™ (BOTS) — 4 Tier Pricing & Quality",
    excerpt:
      "Framework klasifikasi corporate outing di Bandung dengan 4 tier: Foundation, Elevated, Signature, Bespoke. Investment range, vendor capability, dan use case per tier.",
    metaDescription:
      "Bandung Outing Tier System (BOTS) — framework pricing & quality classification untuk corporate outing di Bandung. 4 tier dengan investment range jelas.",
    category: "Framework",
    tldr: [
      "Corporate outing market Bandung tidak transparent soal tier. Vendor advertise 'paket murah' tanpa context — bandingin 'paket murah' yang Rp 1 jt/pax vs 'paket murah' yang Rp 2 jt/pax susah.",
      "BOTS adalah 4-tier classification kami: Foundation (Rp 1.5-2.5 jt/pax), Elevated (Rp 2.5-4.5 jt/pax), Signature (Rp 4.5-7 jt/pax), Bespoke (Rp 7 jt+/pax).",
      "Bukan tier = lebih baik. Tier yang fit kebutuhan = optimal. Foundation cocok untuk quarterly bonding 30-80 pax. Bespoke untuk C-suite offsite 8-15 pax.",
    ],
    heroImage: IMAGES.packageGlamping,
    publishDate: "2026-05-08",
    readTimeMin: 7,
    author: { name: "Sinta Rahmadhani", role: "Head of Client Strategy", initials: "SR" },
    sections: [
      {
        paragraphs: [
          "Pertanyaan paling sering kami terima dari HR pertama kali: 'Berapa biaya outing kantor di Bandung?' Jawaban honest: tergantung. Tergantung apa? Tergantung tier. Tier apa? Itulah yang BOTS clarify.",
          "Bandung Outing Tier System (BOTS) adalah framework klasifikasi yang kami develop dari 400+ events delivered. 4 tier yang reflect different combinations of venue quality, activity sophistication, dan service level. Each tier punya use case yang specific.",
        ],
      },
      {
        heading: "Tier 1: Foundation (Rp 1.5–2.5 jt/pax)",
        paragraphs: [
          "Entry-level corporate outing dengan kualitas tetap baik. Venue: standard villa atau resort mid-tier. F&B: Indonesian buffet quality, dietary accommodation basic. Activity: outbound Tier 1 Light atau bonding informal. Facilitator: senior planner internal (bukan certified coach).",
          "Best for: quarterly bonding 30-80 pax, departmental outing, refresh casual. Cocok untuk perusahaan yang budget-conscious tapi tidak mau kompromi safety atau service.",
        ],
      },
      {
        heading: "Tier 2: Elevated (Rp 2.5–4.5 jt/pax)",
        paragraphs: [
          "Sweet spot untuk most annual outing. Venue: premium villa atau resort 4-star dengan ballroom kalau perlu. F&B: 50/50 buffet + plating premium untuk gala dinner. Activity: outbond Tier 2 Medium atau hybrid format dengan facilitator certified untuk team building.",
          "Best for: annual employee gathering 100-300 pax, team building cohort, mid-size company outing. Tier paling sering kami deliver — 60% dari portfolio kami di tier ini.",
        ],
      },
      {
        heading: "Tier 3: Signature (Rp 4.5–7 jt/pax)",
        paragraphs: [
          "Premium tier untuk marquee event. Venue: hotel bintang 5 atau heritage villa premium. F&B: fine-dining set menu atau live cooking buffet. Activity: bespoke design dengan facilitator senior + AV production untuk awarding night. Photo + video professional documentation full coverage.",
          "Best for: annual gala dinner premium, anniversary milestone (10+ tahun), post-IPO celebration, marquee leadership cohort.",
        ],
      },
      {
        heading: "Tier 4: Bespoke (Rp 7 jt+/pax)",
        paragraphs: [
          "Fully custom premium experience. Venue: private mountain estate, heritage villa exclusive, atau international destination. Service: dedicated concierge, customized everything (menu, decor, branding). Facilitator: certified executive coach senior (ICF MCC), strategy consultant level McKinsey/BCG alumni.",
          "Best for: C-suite executive offsite, founders ritual annual, M&A integration retreat. Smaller scale (5-25 pax), highly substantive substansi.",
        ],
        callout: {
          label: "Insight",
          text: "Tier choice harus di-base pada use case, bukan budget ceiling. Beberapa client kami memilih Tier 2 untuk 300 pax annual gathering dan Tier 4 untuk 8 pax founders ritual — total spend mereka untuk tahun itu Rp 900 juta dengan 2 event yang impact-nya complementary.",
        },
      },
      {
        heading: "Cara apply BOTS ke decision Anda",
        paragraphs: [
          "Brief tim Anda lewat 4 pertanyaan: (1) Apa use case event ini — bonding casual, annual celebration, strategic work, atau leadership development? (2) Berapa pax? (3) Bagaimana perceived value yang kami mau project ke peserta? (4) Apa budget total yang available?",
          "Match jawaban ini ke tier. Tier yang fit, bukan tier yang highest, adalah pilihan optimal. Vendor profesional akan honest soal tier yang fit kebutuhan Anda — kalau vendor selalu push tier tertinggi tanpa diagnosis, that's a red flag.",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Pilih tier yang tepat untuk outing kantor — Foundation hingga Bespoke." },
      { href: "/executive-offsite-bandung", label: "Executive Offsite Bandung", description: "Tier 4 Bespoke: pilihan optimal untuk C-suite offsite 8-25 pax." },
      { href: "/company-retreat-bandung", label: "Company Retreat Bandung", description: "Tier 3–4 untuk multi-day strategic retreat dengan premium venue." },
      { href: "/faq/budget", label: "FAQ Budget & Investment", description: "Breakdown budget corporate outing dari Rp 1–12 jt/pax — mana yang realistis?" },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "Bingung pilih format? 88 jawaban soal outing vs gathering vs retreat vs incentive." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "justify-outing-budget-to-finance"],
    howTo: {
      name: "Cara Memilih Tier Corporate Outing yang Tepat dengan BOTS",
      description: "4 langkah untuk menentukan tier corporate outing Bandung yang optimal berdasarkan use case, skala, dan investment yang tersedia.",
      steps: [
        { name: "Identifikasi Use Case Event", text: "Tentukan kategori event: bonding casual (quarterly refresh), annual celebration, strategic work session, atau leadership development. Setiap use case punya tier yang ideal — Foundation untuk casual, Bespoke untuk leadership development intensif." },
        { name: "Hitung Jumlah Peserta", text: "Pax count sangat mempengaruhi tier realistis. Foundation (30–80 pax), Elevated (100–300 pax), Signature (50–200 pax untuk marquee event), Bespoke (5–25 pax). Grup 300+ pax butuh multi-venue setup yang hanya tersedia di Elevated ke atas." },
        { name: "Tentukan Perceived Value yang Ingin Diproyeksikan", text: "Tanyakan: apa sinyal yang ingin dikirim ke peserta? Annual gathering yang ingin proyeksikan 'company is growing premium' butuh minimal Tier 2 Elevated. C-suite offsite yang perlu privasi dan eksklusivitas butuh Tier 4 Bespoke." },
        { name: "Match ke Tier dan Alokasikan Budget", text: "Cocokkan tiga jawaban di atas ke tier yang fit. Foundation: Rp 1.5–2.5 jt/pax. Elevated: Rp 2.5–4.5 jt/pax. Signature: Rp 4.5–7 jt/pax. Bespoke: Rp 7 jt+/pax. Tier yang fit kebutuhan — bukan tier tertinggi — adalah pilihan optimal." },
      ],
    },
  },

  "justify-outing-budget-to-finance": {
    slug: "justify-outing-budget-to-finance",
    title: "Cara Justify Budget Outing ke Finance — ROI Framework untuk HR",
    excerpt:
      "HR sering struggle convince CFO untuk approve outing budget. Framework di artikel ini translate engagement outcome ke financial impact yang Finance team bisa relate.",
    metaDescription:
      "ROI framework untuk justify corporate outing budget ke CFO/Finance team. Translate engagement + retention outcome ke financial saving. Untuk HR Indonesia.",
    category: "HR Tactics",
    tldr: [
      "Finance team challenge budget outing karena no hard number — beda dengan marketing yang bisa show CAC/LTV.",
      "Framework: retention saving = attrition reduction × salary × turnover multiplier. Untuk 100 peserta event, typical saving Rp 700jt+ dari attrition reduction.",
      "Pre-event baseline + post-event measurement + 6-month retention check = data points yang bisa di-translate.",
      "Bonus: productivity improvement, internal referral rate, dan employee referral cost saving juga measurable kalau perlu push harder.",
    ],
    heroImage: IMAGES.caseStudyExecutive,
    publishDate: "2026-05-05",
    readTimeMin: 8,
    author: { name: "Sinta Rahmadhani", role: "Head of Client Strategy", initials: "SR" },
    sections: [
      {
        paragraphs: [
          "Conversation paling sering kami dengar dari HR Manager: 'Kami sudah lock vendor, budget Rp 300 juta untuk 100 pax, tapi Finance push back. Mereka minta justify ROI.' Pertanyaan reasonable dari Finance perspective — budget itu bisa untuk hire 1 employee tambahan, atau spent di tools, atau diversify ke training program.",
          "Framework di artikel ini adalah yang kami share ke client kami untuk help mereka win Finance approval. Bukan magic — sequential measurement methodology yang translate intangible engagement outcome ke financial impact.",
        ],
      },
      {
        heading: "Step 1: Pre-event baseline survey",
        paragraphs: [
          "1 minggu sebelum event, kirim 10 pertanyaan ke peserta. Engagement score (eNPS), retention intent ('how likely you'd stay 12 months from now'), communication quality, leadership trust, role clarity, manager relationship.",
          "Hasil baseline ini critical — tanpa baseline, susah claim improvement post-event. Pre-event survey takes 5 minutes per peserta. 70%+ response rate normal kalau di-communicate properly.",
        ],
      },
      {
        heading: "Step 2: Post-event survey (1 minggu setelahnya)",
        paragraphs: [
          "Repeat 10 pertanyaan baseline + 5 reflection question specific event. Compare delta — typical improvement 15-30% pada engagement metric, 10-20% pada retention intent.",
          "Sample data dari 100 peserta event: eNPS naik dari 32 ke 58 (+26 points), retention intent 'definitely stay 12 mo' naik dari 62% ke 81% (+19 percentage points). Numbers yang bisa di-screenshot dan share ke Finance.",
        ],
      },
      {
        heading: "Step 3: Long-term retention check (6 bulan setelahnya)",
        paragraphs: [
          "Track voluntary attrition: peserta event vs non-peserta dalam role/department serupa. Untuk structured event, peserta event attrition turun 5-15% vs non-peserta dalam 6-12 bulan setelahnya.",
          "Catatan penting: retention saving adalah lagging indicator. Tidak bisa show pre-event. Tapi setelah event ke-2 atau ke-3, Anda punya track record yang konkret untuk justify subsequent budgets.",
        ],
      },
      {
        heading: "Step 4: Translate ke financial outcome",
        paragraphs: [
          "Formula sederhana: Retention saving = Attrition reduction × Salary × Turnover multiplier.",
          "Variable: Attrition reduction (5-15% based on event measurement). Salary (use average rolling salary per peserta). Turnover multiplier (industry standard 6-9 bulan salary untuk replace + ramp up new employee).",
        ],
        callout: {
          label: "Example calculation",
          text: "Event budget Rp 250 jt untuk 100 peserta. Attrition reduction 10% × 10 person × salary Rp 8 jt × 9 bulan turnover cost = Rp 720 juta retention saving. ROI = 720/250 = 2.9x. Itu angka yang concrete untuk Finance.",
        },
      },
      {
        heading: "Bonus: 3 additional impact yang juga measurable",
        paragraphs: [
          "Productivity improvement — measure project completion rate post-event vs pre-event baseline. Engagement boost typically correlate dengan 8-15% productivity improvement bertahan 3-6 bulan.",
          "Internal referral rate — engaged employee 4x lebih likely refer talent ke perusahaan. Saving on recruitment cost: avg Rp 25-50 jt per hire dari headhunter, vs referral bonus Rp 5-10 jt.",
          "Cross-team collaboration frequency — HR-measurable via project tagging. Engagement boost typically correlate dengan 20-30% improvement dalam cross-team initiative count.",
        ],
      },
      {
        heading: "Tips comms ke Finance",
        paragraphs: [
          "Frame budget request sebagai investment, bukan expense. Show baseline data + improvement target + measurement plan. Set explicit success criteria yang Finance bisa hold Anda accountable.",
          "Setelah event 1, share post-event report ke Finance head — bukan untuk brag, tapi build credibility untuk subsequent requests. Kalau dilakukan consistent, eventually Finance jadi advocate Anda untuk event budget (mereka punya data untuk justify ke CEO).",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Hitung ROI outing kantor dengan breakdown budget per pax yang transparan." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Annual gathering dengan post-event report lengkap — data siap untuk Finance." },
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "Program team building dengan measurement framework pre & post event." },
      { href: "/faq/budget", label: "FAQ Budget & Investment", description: "Cara justify budget outing ke Finance — framework ROI dan breakdown per komponen." },
      { href: "/faq/outcome", label: "FAQ Outcome & ROI", description: "Metrik yang bisa diukur dari corporate outing — NPS, engagement, retention correlation." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "cross-generational-team-building"],
    howTo: {
      name: "Cara Justify Budget Corporate Outing ke Finance dengan ROI Framework",
      description: "4 langkah mengukur dan mempresentasikan ROI corporate event ke Finance team — dari baseline survey hingga financial calculation.",
      steps: [
        { name: "Siapkan pre-event baseline survey", text: "1 minggu sebelum event, kirim 10 pertanyaan ke peserta: eNPS, retention intent ('how likely you'd stay 12 months'), communication quality, leadership trust. Ini adalah baseline yang dibutuhkan untuk show improvement post-event ke Finance." },
        { name: "Kirim post-event survey (1 minggu setelah event)", text: "Ulangi 10 pertanyaan baseline + 5 reflection question. Compare delta — typical improvement 15–30% pada engagement metric, 10–20% pada retention intent. Screenshot delta ini untuk presentasi ke Finance." },
        { name: "Track 6-month retention", text: "Bandingkan voluntary attrition peserta event vs non-peserta dalam role/department serupa. Structured event biasanya hasilkan 5–15% penurunan attrition peserta vs non-peserta dalam 6–12 bulan setelahnya." },
        { name: "Translate ke financial impact", text: "Formula: Retention saving = Attrition reduction × Jumlah peserta × Salary rata-rata × Turnover multiplier (6–9 bulan). Contoh: 10% attrition reduction × 10 orang × Rp 8 jt × 9 bulan = Rp 720 juta saving dari event budget Rp 250 juta. ROI = 2.9x." },
      ],
    },
  },

  "cross-generational-team-building": {
    slug: "cross-generational-team-building",
    title: "Cross-Generational Team Building: Gen-Z, Millennial, Gen-X",
    excerpt:
      "Workforce Indonesia sekarang mix 3 generasi. One-size-fits-all team building fail untuk semua. Framework design yang accommodate dan engage cross-generational.",
    metaDescription:
      "Framework team building untuk cross-generational workforce Indonesia (Gen-Z, Millennial, Gen-X). Parallel activity tracks, accommodate preferences berbeda.",
    category: "Team Design",
    tldr: [
      "3 generasi di workforce punya preferences sangat berbeda — Gen-Z prefer choice + photo moments, Millennial prefer experiential bonding, Gen-X prefer pragmatic + comfort.",
      "Single-stream team building fail untuk cross-generational. Solution: parallel activity tracks dimana peserta self-select.",
      "Mix tracks: high-energy outbound, reflective workshop, cultural session. Cross-mingling natural di lunch atau closing.",
    ],
    heroImage: IMAGES.caseStudyTeamBuilding,
    publishDate: "2026-05-03",
    readTimeMin: 6,
    author: { name: "Amelia Chandra", role: "Senior Program Designer", initials: "AC" },
    sections: [
      {
        paragraphs: [
          "Generic team building di Indonesia masih default ke single-stream agenda — semua peserta lakukan activity yang sama, di waktu yang sama. Format ini works untuk era ketika workforce homogen. Sekarang? Workforce Indonesia mix 3 generasi yang punya preferences fundamentally berbeda.",
        ],
      },
      {
        heading: "Mapping the 3 generations",
        paragraphs: [
          "Gen-Z (born 1997+): grew up dengan smartphone dan social media. Prefer short blocks (max 60-90 min), high choice/variety, content yang photo-able. Avoid: long mandatory sessions, top-down talks, no autonomy.",
          "Millennial (born 1981-1996): generation yang most receptive to experiential bonding. Prefer meaningful, optional reflective time, premium quality. Avoid: forced fun, generic templates, infantilizing activity.",
          "Gen-X (born 1965-1980): pragmatic, outcome-driven, less performative. Prefer comfort, family-inclusive optional, dan less excessive performance demand. Avoid: late-night party, excessive social media expectation.",
        ],
      },
      {
        heading: "Design solution: parallel activity tracks",
        paragraphs: [
          "Format yang kami consistently rekomendasi untuk cross-generational team: Day 2 morning split jadi 3 simultaneous activity tracks — peserta self-select. Tracks:",
        ],
        numbered: [
          "Track A — High-Energy Outbound. Outbound Tier 2 (paintball, high ropes, ATV). Cocok Gen-Z + younger Millennial.",
          "Track B — Reflective Workshop. Cultural session (batik, angklung) atau strategic workshop. Cocok older Millennial + Gen-X.",
          "Track C — Bonding-Focused. Cooking competition, photo quest, atau low-impact games. Cocok mixed-age + family-inclusive.",
        ],
      },
      {
        heading: "Cross-mingling naturally di non-track time",
        paragraphs: [
          "Lunch + dinner = cross-track mingling. Hot drink station 24/7 (untuk informal small group conversation). Bonfire circle malam (all-track participation tapi optional). Result: deep bonding di track-nya masing-masing PLUS cross-track interaction natural.",
        ],
      },
      {
        heading: "Common mistakes yang harus dihindari",
        paragraphs: [
          "Force participation di high-intensity activity untuk Gen-X. Equivalent untuk Gen-Z: force long lecture-style content. Result: engagement turun, perception 'team building generic kaya' menguat.",
        ],
        bullets: [
          "Tidak buat opt-out mechanism — peserta yang punya physical limitation atau preference berbeda harus bisa opt-out tanpa stigma",
          "Single-stream 8 jam — engagement drop drastis setelah jam ke-4 untuk semua generation",
          "Forced fun — activity yang terasa 'mandatory enthusiasm' lebih hurt dari benefit",
          "Generic photo posting expectation — Gen-Z love sharing tapi mereka curate. Gen-X biasanya enggan",
        ],
      },
      {
        heading: "Cara apply untuk next team event Anda",
        paragraphs: [
          "Survey pre-event simple — 3 pertanyaan: physical activity preference (low/medium/high), prefer reflective vs energetic, family-inclusive event? Dari hasil ini, balance track allocation dan komunikasikan dengan jelas pre-event apa yang akan terjadi.",
          "Cross-generational design adalah investment kecil di planning yang berdampak besar di outcome. Most company yang implementasi ini consistently lihat engagement metric improvement 15-25% vs single-stream format mereka sebelumnya.",
        ],
      },
    ],
    internalLinks: [
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "Program team building untuk lintas generasi — Gen-Z, Millennial, Gen-X dalam satu format." },
      { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung", description: "Gathering inklusif yang accommodate semua profil demografis karyawan." },
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Outing dengan parallel activity track untuk cross-generational team." },
      { href: "/faq/formats", label: "FAQ Format & Programs", description: "Format corporate event yang tepat untuk berbagai komposisi tim — dari Gen-Z ke Gen-X." },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "Outbound vs indoor vs hybrid — panduan memilih format berdasarkan profil peserta." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "post-merger-cultural-bonding"],
    howTo: {
      name: "Cara Merancang Team Building untuk Cross-Generational Workforce",
      description: "4 langkah merancang program team building yang mengakomodasi kebutuhan Gen-Z, Millennial, dan Gen-X sekaligus.",
      steps: [
        { name: "Diagnosis generational composition", text: "Hitung proporsi Gen-Z (lahir 1997+), Millennial (1981–1996), dan Gen-X (1965–1980) dalam tim. Proporsi ini menentukan format yang dominan. Tim dengan 60%+ Gen-Z butuh high-stimulation, technology-integrated activity. Tim dengan banyak Gen-X butuh structured facilitation dan output yang clear." },
        { name: "Rancang parallel activity tracks", text: "Jangan force seluruh peserta ke satu format yang sama. Desain parallel tracks: High-intensity outdoor untuk yang mau (Gen-Z/Millennial), moderat untuk middle ground, low-intensity collaborative untuk senior atau kondisi fisik tertentu. Semua tracks harus contribute ke objective yang sama — bisa diukur." },
        { name: "Brief facilitator dengan generational context", text: "Facilitator harus dibrief tentang composition tim dan specific inter-generational tension yang ingin di-address. Hindari script yang menganggap semua peserta homogen. Structured debrief setelah setiap session harus include perspektif dari generasi berbeda." },
        { name: "Ukur cross-generational collaboration post-event", text: "Pre-event: survey cross-generational communication quality score dan collaboration frequency. Post-event (1 minggu dan 3 bulan): ulangi survey. Success metric: peningkatan informal cross-generational interaction, berkurangnya silos generasional dalam project team assignment." },
      ],
    },
  },

  "post-merger-cultural-bonding": {
    slug: "post-merger-cultural-bonding",
    title: "Post-Merger Cultural Bonding: 3-Day Integration Playbook",
    excerpt:
      "Post-merger atau acquisition demand cultural integration yang cepat. Tanpa structured intervention, friksi early signal jadi attrition risk. 3-day playbook dari 8+ post-merger events.",
    metaDescription:
      "Playbook untuk post-merger cultural integration via 3-day corporate event. Dari 8+ post-merger events yang kami handle untuk tech, banking, dan FMCG.",
    category: "Strategic Event",
    tldr: [
      "Post-merger / acquisition adalah moment paling fragile dalam company culture. Tanpa intervention deliberate, friksi early signal jadi attrition risk.",
      "3-day playbook: Day 1 cultural exchange (curiosity-driven), Day 2 alignment work (parallel strategy session), Day 3 commitment + celebration.",
      "Key principle: tidak boleh dominasi salah satu side. Awarding cross-team, F&B mix dari kedua side, dan leadership message harus reflect gabungan.",
    ],
    heroImage: IMAGES.caseStudyLarge,
    publishDate: "2026-04-30",
    readTimeMin: 8,
    author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist", initials: "AP" },
    sections: [
      {
        paragraphs: [
          "Dari 8 post-merger / acquisition integration events yang kami handle dalam 4 tahun terakhir, pattern paling consistent: company yang sukses integrate culturally selalu invest dalam structured intervention dalam 30-90 hari setelah deal close. Yang gagal? Mereka assume cultural integration akan happen organically.",
          "Spoiler: organic culture integration biasanya bias ke side yang lebih dominant (parent company atau larger team). Acquired team merasa identity-nya hilang. Result: attrition risk tinggi dalam 12-18 bulan post-deal — exactly what M&A is supposed to avoid.",
        ],
      },
      {
        heading: "Day 1: Cultural Exchange (Curiosity-Driven)",
        paragraphs: [
          "Goal: peserta dari dua side meet, get curious tentang each other, set tone bahwa kedua culture valued. Bukan workshop, bukan strategy work — pure exposure + curiosity.",
        ],
        numbered: [
          "Arrival + welcome session dengan video founder kedua side sharing visi gabungan. Bukan corporate spin — authentic vulnerability.",
          "Cultural exchange activity: peserta dipasangkan cross-team untuk 30-min casual conversation dengan prompt cards (e.g. 'what's a tradition in your previous company you'd miss?').",
          "Welcome dinner outdoor dengan booth makanan khas dari masing-masing kota / kantor asal. Symbolic gesture — both cultures di-acknowledge.",
          "Bonfire storytelling circle: peserta share moments yang shaped career mereka. Cross-team listening = empathy building natural.",
        ],
      },
      {
        heading: "Day 2: Alignment Work (Parallel Strategy Tracks)",
        paragraphs: [
          "Goal: dari empathy ke action. Cross-team work session dimana peserta dari dua side collaborate concretely.",
        ],
        numbered: [
          "Parallel strategy tracks per fungsi (Engineering, Product, Sales, Operations) — 3 jam working session. Each track mixed leadership dari kedua side untuk facilitate.",
          "Lunch + small group discussion (4 group of 6, randomly mixed).",
          "Olympic outbond multi-station — team baru cross-original-company. Forced cross-team mixing dalam low-stakes context.",
          "Closing reflection circle: 'what surprised you positively about the other side today?'",
        ],
      },
      {
        heading: "Day 3: Commitment + Celebration",
        paragraphs: [
          "Goal: lock the new culture publicly + celebrate the integration milestone.",
        ],
        numbered: [
          "Morning recap session — share what was learned from Day 1-2.",
          "Awarding cross-team. Kategori dirancang yang inclusive (e.g. 'Best Collaborator', 'Cultural Ambassador'). Awardee dipilih dari both sides.",
          "Closing CEO address — commit pada gabungan culture, bukan dominasi salah satu side. Public commitment matters.",
          "Group photo + departure.",
        ],
      },
      {
        heading: "Key principles yang non-negotiable",
        paragraphs: [
          "Pertama: tidak boleh dominasi salah satu side. F&B mix dari kedua side, awarding kategori inclusive, leadership message reflect gabungan.",
          "Kedua: psychological safety paramount. Day 1 set ground rules — semua opinions valid, perspectives berbeda di-honor.",
          "Ketiga: capture moments. Photographer + videographer profesional untuk hari memorable. Material untuk subsequent internal storytelling yang lock cultural narrative.",
        ],
        callout: {
          label: "Real outcome example",
          text: "Tech unicorn post-acquisition 800 pax (kami handle Q3 2024). Post-event survey: 95% peserta vote 'best company event' tahun itu. 6-month retention check: voluntary attrition di acquired team turun 40% vs pre-merger trajectory. Cross-team collaboration project initiation naik 28% dalam 3 bulan.",
        },
      },
      {
        heading: "When to do this — timing matters",
        paragraphs: [
          "Sweet spot: 30-90 hari setelah deal close. Sebelum 30 hari, operational integration masih chaos — peserta tidak punya bandwidth untuk cultural work. Setelah 90 hari, friksi early signal sudah jadi resistance entrenched — much harder to address.",
        ],
      },
    ],
    internalLinks: [
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "Program cultural integration post-merger dengan certified facilitator dan Tuckman framework." },
      { href: "/company-retreat-bandung", label: "Company Retreat Bandung", description: "Multi-day immersive retreat untuk alignment pasca-merger dalam setting terpencil." },
      { href: "/executive-offsite-bandung", label: "Executive Offsite Bandung", description: "C-suite alignment session pasca-merger — discreet, NDA-ready, strategic facilitator." },
      { href: "/faq/formats", label: "FAQ Format & Programs", description: "Format retreat multi-day vs single day — kapan masing-masing lebih efektif?" },
      { href: "/faq/outcome", label: "FAQ Outcome & ROI", description: "Outcome apa yang realistis dari cultural integration event pasca-merger?" },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "cross-generational-team-building"],
    howTo: {
      name: "Cara Merancang Cultural Bonding Event untuk Tim Pasca-Merger atau Reorganisasi",
      description: "5 langkah dari diagnosis budaya hingga eksekusi event yang mengintegrasikan dua entitas yang sebelumnya terpisah.",
      steps: [
        { name: "Lakukan cultural diagnosis sebelum design program", text: "Survey dual-entity: ukur tingkat trust, language gap (terminologi berbeda antar organisasi), hierarchy perception, dan values alignment. Hasil ini jadi design brief untuk facilitator — bukan asumsi. Interview 5–10 orang dari masing-masing entitas untuk uncover specific tension points." },
        { name: "Design small-group mixed sessions", text: "Cross-entity small groups (8–12 orang) adalah unit terbaik untuk trust building. Avoid segregasi entitas lama — mix secara intentional. Gunakan collaborative challenge (bukan kompetisi antar-entitas) untuk ciptakan shared memory. Facilitated dialogue sessions dengan safe space protocol lebih efektif dari lecture tentang 'visi bersama'." },
        { name: "Address leadership alignment terpisah", text: "Senior management dari kedua entitas butuh sesi khusus (half-day atau 1 hari penuh) untuk align narrative perubahan sebelum cascading ke seluruh tim. Inkonsistensi pesan dari leadership adalah killer #1 dari cultural integration — harus diselesaikan di level ini dulu." },
        { name: "Ukur dan follow up", text: "Post-event survey: ukur perceived trust antar-entitas, willingness to collaborate, dan shared identity index. 90-day check-in: tanya manager apakah ada behavioral change dalam cross-entity collaboration. Cultural integration adalah marathon bukan sprint — 1 event tidak cukup, tapi jadi foundation yang critical." },
        { name: "Rancang seri follow-up lightweight touchpoints", text: "Setelah main bonding event, rancang 2–3 lightweight touchpoint dalam 6 bulan (quarterly informal gathering, cross-entity project pairing, joint recognition program). Continuity adalah kunci — bonding event yang tidak di-follow up kehilangan 60–70% efektivitasnya dalam 3 bulan." },
      ],
    },
  },

  "force-majeure-contingency-corporate-outing": {
    slug: "force-majeure-contingency-corporate-outing",
    title: "Force Majeure & Contingency Planning untuk Corporate Outing Bandung",
    excerpt:
      "Hujan ekstrem, longsor, akses jalan tertutup, atau insiden medis — apa yang terjadi kalau worst case happen di tengah event lo? Framework risk tiering + contingency plan dari 400+ events.",
    metaDescription:
      "Framework force majeure + contingency planning untuk corporate outing Bandung. Risk register, backup indoor plan, evacuation protocol, insurance coverage breakdown.",
    category: "Risk Management",
    tldr: [
      "Bandung & Jawa Barat punya risk profile spesifik: hujan ekstrem Oktober–April, longsor di jalur Lembang/Ciwidey, kabut tebal di Pangalengan, dan area-area remote yang medical evacuation 45+ menit.",
      "Risk tiering 3 level: Likely (rain, traffic delay) — plan indoor backup mandatory. Moderate (sakit peserta, jadwal molor) — protokol standar. Rare-but-critical (kecelakaan, force majeure) — full evacuation + insurance.",
      "Setiap event 7Summits di-attach risk register + RS partner contact + crisis comm template. Bukan add-on premium — included di setiap tier.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-10",
    readTimeMin: 9,
    author: { name: "Raden Bagus Wicaksono", role: "Head of Operations & Risk", initials: "RB" },
    sections: [
      {
        paragraphs: [
          "Pertanyaan yang HR jarang tanya pre-kontrak, tapi paling regret kalau tidak tanya: \"Kalau hujan deras pas Day 2 morning outbound, plan B apa?\" Vendor yang jawab \"don't worry, nanti kita atur\" — itu red flag besar. Vendor specialist punya contingency plan terdokumentasi sebelum kontrak ditandatangan.",
          "Setelah 400+ event di Jawa Barat, kami consolidate framework risk management 3-tier yang jadi default semua engagement. Bukan dijual sebagai \"premium add-on\" — risk management adalah baseline.",
        ],
      },
      {
        heading: "Risk profile Bandung & Jawa Barat",
        paragraphs: [
          "Konteks geografis: Bandung & sekitarnya adalah dataran tinggi dengan beberapa karakteristik risk-specific yang harus di-plan, bukan di-deny.",
        ],
        bullets: [
          "Musim hujan Oktober–April: probabilitas hujan deras di Lembang/Ciwidey 60–80% setiap sore. Bukan \"mungkin hujan\" — \"hampir pasti hujan\"",
          "Jalur Lembang & Ciwidey: longsor occasional di musim hujan, akses bisa terputus 6–24 jam",
          "Pangalengan & area selatan: kabut tebal pagi (jarak pandang 5–20m), berpengaruh ke jadwal outdoor & transportasi",
          "Area remote (Cikidang, Rancabali): RS terdekat 30–45 menit. Untuk activity Tier 2 (high ropes, paintball, ATV), medical proximity adalah faktor venue selection",
        ],
      },
      {
        heading: "Tier 1: Likely risks — mandatory mitigation",
        paragraphs: [
          "Risk yang probabilitas terjadi >30% setiap event. Bukan \"if\", tapi \"when\". Mitigasi di-build-in ke design.",
        ],
        numbered: [
          "Hujan deras → setiap outdoor activity HARUS punya indoor backup version yang testable. Outbound games → indoor team building. BBQ dinner → ballroom dinner. Bonfire → indoor reflection circle. Non-negotiable.",
          "Traffic Jakarta–Bandung Friday & Sunday → ETA dengan buffer +90 menit. Plan tidak boleh assume \"normal traffic\".",
          "Jadwal molor → buffer 30 menit di transition antar activity. Compressed schedule yang back-to-back = recipe untuk crisis di hari-H.",
          "Peserta yang fatigue overload → break + opt-out station tersedia di setiap activity. Tidak ada peer pressure.",
        ],
        callout: {
          label: "Red flag",
          text: "Vendor yang quote outing 2D1N dengan 8+ activity slot tanpa rest buffer — itu unrealistic. Hampir pasti molor & burn-out peserta di Day 2 sore.",
        },
      },
      {
        heading: "Tier 2: Moderate risks — protokol standar",
        paragraphs: [
          "Probabilitas 5–20% per event. Tidak setiap event terjadi, tapi cukup sering sehingga harus punya protokol siap-pakai.",
        ],
        bullets: [
          "Peserta sakit (mual, demam, alergi makanan): first aid kit di setiap venue, P3K-certified field crew, kontak RS partner sudah pre-confirmed",
          "Vendor lokal terlambat / no-show (catering, MC, equipment): backup vendor stand-by, contract clause yang ada penalty + SLA",
          "Peserta hilang (di area outdoor luas, terutama di kawasan hutan): protokol headcount per activity, system buddy, radio communication untuk field crew",
          "Equipment failure (sound system mati, generator down): backup equipment on-site untuk event >100 pax",
        ],
      },
      {
        heading: "Tier 3: Rare-but-critical — full evacuation protocol",
        paragraphs: [
          "Probabilitas <2% per event, tapi impact maksimum kalau terjadi. Untuk Tier 3, ada full evacuation protocol + insurance + crisis comm template yang sudah di-test.",
        ],
        bullets: [
          "Kecelakaan peserta (cedera serius di outbound, jatuh dari high ropes): evacuation ke RS partner dalam <30 menit, tim P3K + ambulance stand-by untuk Tier 2 activity, asuransi event coverage Rp 100–500 jt per peserta",
          "Force majeure (gempa, longsor besar, banjir bandang): protokol evacuate ke titik kumpul pre-designated, koordinasi BPBD lokal, akomodasi alternative di Bandung kota",
          "Insiden keamanan (kecelakaan transportasi grup, kebakaran venue): contingency hotel kontrak emergency di Bandung kota, transport backup, asuransi perjalanan grup",
        ],
        callout: {
          label: "Crisis comm",
          text: "Setiap event punya pre-drafted crisis comm: SMS/WA template ke emergency contact, statement internal untuk management, dan briefing untuk peserta yang tidak terdampak. Bukan improvisasi di tengah krisis.",
        },
      },
      {
        heading: "Insurance: apa yang biasanya tidak di-cover",
        paragraphs: [
          "Insurance event = umumnya cover personal accident + medical untuk peserta. Yang sering tidak di-cover & harus di-cek explicitly:",
        ],
        bullets: [
          "Activity high-risk yang tidak di-declare upfront (extreme outbound, paragliding, scuba) — biasanya excluded",
          "Pre-existing medical condition peserta — perlu disclosure dan rider tambahan",
          "Force majeure act of God (gempa, gunung meletus) — kebanyakan polis exclude, perlu coverage khusus",
          "Loss/damage of personal belongings peserta — biasanya tidak di-cover, harus claim ke asuransi peserta sendiri",
        ],
      },
      {
        heading: "Cara HR validasi risk readiness vendor",
        paragraphs: [
          "Sebelum tandatangan kontrak, minta 4 dokumen ini ke vendor. Vendor yang serius akan kasih dalam 24 jam. Vendor yang generic akan stall atau kasih boilerplate generic.",
        ],
        numbered: [
          "Risk register event lo specific — bukan template universal. Harus mention venue & activity yang akan di-eksekusi.",
          "RS partner list per area + estimated evac time. Untuk area remote, ini bukan optional.",
          "Indoor backup plan terdokumentasi untuk setiap outdoor activity, lengkap dengan venue alternate.",
          "Insurance policy summary + coverage limit per peserta. Pastikan amount cukup vs salary band peserta lo.",
        ],
      },
    ],
    howTo: {
      name: "Cara Memvalidasi Risk Readiness Vendor Corporate Outing",
      description: "4 dokumen yang harus diminta ke vendor sebelum menandatangani kontrak — untuk memastikan vendor punya contingency plan yang terdokumentasi, bukan improvisasi.",
      steps: [
        {
          name: "Minta risk register spesifik event Anda",
          text: "Vendor yang profesional akan memberikan risk register yang mention venue dan activity spesifik event Anda, bukan template universal. Jika vendor memberikan boilerplate generik, itu red flag.",
        },
        {
          name: "Verifikasi RS partner list per area",
          text: "Minta daftar rumah sakit partner beserta estimasi waktu evakuasi. Untuk area remote seperti Cikidang atau Rancabali, RS terdekat bisa 30–45 menit — ini bukan optional, khususnya untuk activity high-risk.",
        },
        {
          name: "Review indoor backup plan terdokumentasi",
          text: "Setiap outdoor activity harus punya indoor backup version yang testable. Tanyakan versi indoor dari setiap sesi: outbound → indoor team building, BBQ → ballroom dinner. Jika vendor tidak bisa menjawab, evaluasi ulang.",
        },
        {
          name: "Periksa ringkasan polis asuransi + coverage limit per peserta",
          text: "Minta policy summary dengan coverage limit yang jelas per peserta. Pastikan jumlah coverage cukup vs salary band peserta, dan cek apakah activity high-risk (high ropes, ATV) di-cover atau di-exclude.",
        },
      ],
    },
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Vendor outing dengan risk register & safety SOP terdokumentasi — siap untuk procurement." },
      { href: "/event-organizer-corporate-bandung", label: "EO Corporate Bandung", description: "Event organizer dengan protokol force majeure dan contingency plan tersertifikasi." },
      { href: "/b2b-corporate-event-specialist-bandung", label: "B2B Event Specialist", description: "7 kriteria vendor B2B termasuk verifikasi risk management dan liability coverage." },
      { href: "/faq/logistics", label: "FAQ Process & Logistics", description: "Semua pertanyaan soal timeline planning, koordinasi vendor, dan operasional event." },
      { href: "/faq/vendor", label: "FAQ Vendor Selection", description: "Cara memverifikasi vendor — dari NPWP, risk register, hingga force majeure clause." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "indoor-vs-outdoor-corporate-outing"],
  },

  "indoor-vs-outdoor-corporate-outing": {
    slug: "indoor-vs-outdoor-corporate-outing",
    title: "Indoor vs Outdoor Corporate Outing: Decision Framework",
    excerpt:
      "Kapan indoor lebih tepat dari outdoor? Bukan soal musim atau preference saja — bergantung objective, audience profile, dan risk tolerance. Framework decision dari 400+ events.",
    metaDescription:
      "Framework decision indoor vs outdoor corporate outing Bandung. 6 faktor decision: objective, audience fitness, weather window, budget, brand image, risk tolerance.",
    category: "Format Design",
    tldr: [
      "Indoor vs outdoor bukan soal preference HR — soal fit dengan objective + audience + risk profile.",
      "6 faktor decision: objective type, audience fitness mix, weather window, budget tier, brand image, risk tolerance.",
      "Hybrid (mixed indoor-outdoor 70:30 atau 30:70) seringkali optimal untuk grup 80+ pax — accommodate diversity tanpa kompromi outcome.",
    ],
    heroImage: IMAGES.packageAnnualGathering,
    publishDate: "2026-05-09",
    readTimeMin: 7,
    author: { name: "Amelia Chandra", role: "Senior Program Designer", initials: "AC" },
    sections: [
      {
        paragraphs: [
          "Pertanyaan default HR di briefing pertama: \"Mendingan indoor atau outdoor ya?\" Jawaban honest: tergantung 6 faktor. Indoor cocok untuk objective tertentu, outdoor untuk objective lain. Hybrid seringkali optimal untuk grup besar dengan diversity audience.",
          "Framework decision yang kami pakai bukan vote preference HR — sequential check 6 faktor yang ujung-nya menghasilkan rekomendasi defensible.",
        ],
      },
      {
        heading: "Faktor 1: Objective type",
        paragraphs: [
          "Outdoor unggul untuk: bonding deep, ice-breaking untuk team baru, energy reset post-burnout, leadership challenge. Outdoor inherently demand collaboration + adaptasi — outcome bonding lebih dalam.",
          "Indoor unggul untuk: strategic alignment, training/upskilling, awarding & celebration, hybrid working session, multi-stakeholder formal meeting. Indoor kontrol environment 100% — focus tidak teralihkan oleh cuaca.",
        ],
        callout: {
          label: "Rule of thumb",
          text: "Bonding/emotional outcome → outdoor lean. Cognitive/strategic outcome → indoor lean. Hybrid outcome → mix dengan ratio sesuai weight objective.",
        },
      },
      {
        heading: "Faktor 2: Audience fitness mix",
        paragraphs: [
          "Audience yang 30%+ punya mobility/fitness limitation (umur 45+, pregnant peserta, recent recovery, disability) → pure outdoor adventure jadi exclusion problem. Solusi: indoor primary + optional outdoor track untuk yang interested.",
          "Audience predominantly muda + fit + first-timer outdoor → outdoor lean, dengan moderation activity Tier 1 (light). Audience executive (umur 40+, mostly desk-bound) → indoor primary dengan light outdoor element (jalan santai, cooking).",
        ],
      },
      {
        heading: "Faktor 3: Weather window",
        paragraphs: [
          "Bandung musim hujan (Oktober–April): probabilitas hujan sore >60%. Outdoor afternoon activity = risk indoor backup hampir pasti aktif. Plan ya indoor-primary atau scheduled morning untuk outdoor.",
          "Musim kemarau (Mei–September): outdoor full-day feasible. Tapi suhu Bandung kota bisa 32°C+ midday — outdoor heavy di siang hari demand canopy + hydration station.",
          "Untuk event yang scheduled fixed (annual gathering biasanya Desember atau awal tahun), check probabilitas musim. Tidak masuk akal force outdoor di puncak musim hujan.",
        ],
      },
      {
        heading: "Faktor 4: Budget tier",
        paragraphs: [
          "Foundation tier (Rp 1.5–2.5 jt/pax): outdoor base camp setting jauh lebih affordable dari hotel/ballroom rental. Outdoor lean.",
          "Elevated (Rp 2.5–4.5 jt/pax): hybrid feasible. Indoor di hotel/resort + outdoor activity di venue terdekat.",
          "Signature (Rp 4.5–7 jt/pax): premium indoor di hotel berbintang + curated outdoor experience. Hybrid 50:50 atau 70:30 (indoor lean untuk brand image).",
          "Bespoke (Rp 7 jt+/pax) executive offsite: indoor private heritage villa atau premium eco-lodge. Outdoor element optional & curated (nature walk, sunrise photography).",
        ],
      },
      {
        heading: "Faktor 5: Brand image & corporate culture",
        paragraphs: [
          "Brand premium banking, consulting, tech enterprise → ekspektasi peserta indoor refined. Outdoor adventure heavy bisa under-deliver perception.",
          "Brand startup, lifestyle, FMCG youth-targeted → outdoor adventure heavy align dengan brand energy. Indoor formal terasa stiff.",
          "Brand industrial, manufacturing, logistic → mixed reception. Older workforce prefer indoor comfort, younger workforce open ke outdoor.",
        ],
        callout: {
          label: "Insight",
          text: "Brand image bukan tentang \"yang penting peserta happy\" — tentang reinforcement nilai brand internal. Outing yang mismatch brand justru terasa awkward & costly.",
        },
      },
      {
        heading: "Faktor 6: Risk tolerance & insurance",
        paragraphs: [
          "Outdoor adventure (Tier 2 activity: high ropes, paintball, rafting) demand insurance coverage tinggi + waiver explicit. Untuk perusahaan dengan risk tolerance konservatif (regulated industry: banking, healthcare), indoor lean atau outdoor Tier 1 (light) saja.",
          "Indoor pure: insurance baseline cukup, waiver standar. Trade-off: kurang \"memorable\" untuk peserta younger generation yang expect Instagram-able moment.",
        ],
      },
      {
        heading: "Hybrid 70:30 atau 30:70: format optimal untuk grup besar",
        paragraphs: [
          "Untuk grup 80+ pax dengan audience diversity tinggi, hybrid jadi default rekomendasi:",
        ],
        numbered: [
          "Hybrid 70:30 (indoor-heavy): Day 1 strategic + awarding di ballroom, Day 2 morning outdoor activity (terbuka opt-out), Day 2 sore networking + closing indoor.",
          "Hybrid 30:70 (outdoor-heavy): Day 1 ice-breaking + outbound, Day 1 malam bonfire reflection circle, Day 2 morning workshop indoor, Day 2 sore farewell + photo.",
        ],
      },
      {
        heading: "Cara apply decision framework untuk next event",
        paragraphs: [
          "Step-by-step: (1) Articulate objective primary + secondary. (2) Audit audience fitness & mobility profile via survey 3-pertanyaan. (3) Check weather window event date. (4) Confirm budget tier. (5) Validate brand image fit. (6) Set risk tolerance threshold.",
          "Hasil 6 faktor ini = rekomendasi indoor/outdoor/hybrid dengan ratio defensible. Bukan opinion HR, bukan template generic — keputusan data-driven.",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Indoor & outdoor outing dengan venue fleksibel — ballroom hingga private villa Lembang." },
      { href: "/outbound-perusahaan-bandung", label: "Outbound Perusahaan Bandung", description: "Program outdoor adventure dengan safety-certified instructor untuk tim Anda." },
      { href: "/villa-gathering-bandung", label: "Villa Gathering Bandung", description: "Gathering di villa private — semi-outdoor dengan privasi penuh." },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "Indoor vs outdoor vs hybrid — framework memilih berdasarkan objective dan anggaran." },
      { href: "/faq/location", label: "FAQ Lokasi & Venue", description: "Venue mana yang terbaik — hotel ballroom, villa, resort, atau outdoor ground?" },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "force-majeure-contingency-corporate-outing", "corporate-outing-theme-selection"],
    howTo: {
      name: "Cara Memilih Format Indoor vs Outdoor untuk Corporate Outing",
      description: "Framework 4 langkah memilih antara format indoor dan outdoor berdasarkan objective, audience, cuaca, dan risk tolerance.",
      steps: [
        { name: "Evaluasi objective event", text: "Outdoor cocok jika objective adalah adventure, physical challenge, atau nature immersion. Indoor cocok jika objective adalah strategic alignment, knowledge sharing, atau award ceremony. Event yang fokus bonding bisa kedua-duanya — pertimbangkan format hybrid (indoor meeting, outdoor activity)." },
        { name: "Profil audience", text: "Periksa distribusi usia dan kondisi fisik peserta. Untuk tim yang ada peserta 50+ atau kondisi fisik tertentu, outdoor high-intensity bukan pilihan optimal. Untuk Gen-Z yang dominan, outdoor activity lebih engaging. Untuk diverse generasi, format hybrid (indoor ceremony + outdoor fun activity) biasanya paling inklusif." },
        { name: "Cek kondisi cuaca dan musim", text: "Bandung hujan Oktober–April. Untuk event di musim hujan dengan format outdoor, backup indoor wajib sudah di-book dan siap. Budget untuk backup biasanya tambah Rp 5–20 jt. Peak dry season Juli–September adalah waktu terbaik untuk outdoor event Bandung." },
        { name: "Kalkulasi biaya dan risiko", text: "Outdoor event: lebih memorable dan fotogenik, biaya logistics lebih tinggi (transport ke venue, setup lapangan, weather risk), tidak bisa diprediksi 100%. Indoor event: lebih terkontrol, AV lebih baik, lebih mudah untuk presentasi atau plenary — tapi atmosphere lebih formal. Hybrid: best of both, tapi butuh venue yang support keduanya dan logistik lebih kompleks." },
      ],
    },
  },

  "corporate-outing-theme-selection": {
    slug: "corporate-outing-theme-selection",
    title: "Corporate Outing Theme Selection: Avoiding Cringe, Hitting Brand",
    excerpt:
      "Tema generic kaya \"Bali Vibes\" atau \"Olympic Games\" sudah expired. Framework theme selection yang align dengan brand, objective, dan audience — dari 400+ events delivered.",
    metaDescription:
      "Framework pemilihan tema corporate outing yang relevant ke brand & objective. 4 jenis tema: narrative, aesthetic, mission, cultural. Plus 5 tema yang harus dihindari di 2026.",
    category: "Program Design",
    tldr: [
      "Tema generic (\"Bali Vibes\", \"Hawaiian Beach\", \"Olympic Games\") sudah expired — peserta perceive sebagai effort minimal vendor.",
      "4 kategori tema yang masih relevan 2026: narrative-driven, aesthetic-curated, mission-based, cultural-rooted.",
      "Tema yang work = align dengan brand identity + reinforce objective event + accommodate audience demographic. Bukan tema cantik di Pinterest yang ditempel ke event.",
    ],
    heroImage: IMAGES.packageGlamping,
    publishDate: "2026-05-07",
    readTimeMin: 8,
    author: { name: "Amelia Chandra", role: "Senior Program Designer", initials: "AC" },
    sections: [
      {
        paragraphs: [
          "\"Mau tema apa?\" — pertanyaan klasik yang HR sering tidak punya jawaban kuat. Default jadinya tema generic dari Pinterest atau katalog vendor: Bali Vibes, Hawaiian Beach, Olympic Games, Casino Night, Masquerade Ball. Di 2026, tema-tema ini sudah saturated dan perceive peserta sebagai \"effort minimal vendor\".",
          "Tema yang berhasil punya 3 karakteristik: (1) align dengan brand identity perusahaan, (2) reinforce objective primary event, dan (3) accommodate audience demographic & cultural mix. Tema yang gagal: dipick dari katalog vendor tanpa context.",
        ],
      },
      {
        heading: "Kategori 1: Narrative-Driven Theme",
        paragraphs: [
          "Tema berbentuk story arc yang peserta navigate sepanjang event. Memberikan rasa progress + memorable narrative spine.",
        ],
        bullets: [
          "\"Expedition\": peserta jadi explorer team yang lewatin misi-misi sepanjang event. Awarding malam = celebration \"summit reached\"",
          "\"Time Capsule\": opening = panggil masa lalu perusahaan (foto founding team, milestones). Day 2 = present focus. Closing = vision masa depan",
          "\"Detective / Heist\": cocok untuk grup creative & marketing — mystery solving sepanjang event, klimaks malam dengan reveal",
        ],
        callout: {
          label: "Pakai untuk",
          text: "Objective bonding deep + storytelling brand. Audience predominantly Millennial / Gen-Z yang appreciate narrative.",
        },
      },
      {
        heading: "Kategori 2: Aesthetic-Curated Theme",
        paragraphs: [
          "Tema yang focus visual + experience refinement, bukan story arc. Cocok untuk event premium / awarding dimana visual delivery jadi central piece.",
        ],
        bullets: [
          "\"Modernist Industrial\": estetika minimal + concrete + brushed metal. Match untuk tech / manufacturing brand",
          "\"Tropical Refined\": bukan cliche Hawaii — modern interpretation tropical (rattan, neutral palette, soft botanical). Premium feel",
          "\"Heritage Indonesia\": curated by region (Jawa elegant, Bali contemporary, Sumatra textiles). Local pride tanpa stereotype",
          "\"Garden Soirée\": elegant outdoor dining dengan refined lighting + curated florals. Cocok untuk grup executive premium",
        ],
        callout: {
          label: "Pakai untuk",
          text: "Brand premium (banking, consulting, professional services) + objective awarding atau celebration. Demand venue + F&B yang match aesthetic.",
        },
      },
      {
        heading: "Kategori 3: Mission-Based Theme",
        paragraphs: [
          "Tema yang attach event ke purpose-driven mission. Beyond bonding — peserta leave dengan rasa kontribusi.",
        ],
        bullets: [
          "\"Plant 1000 trees\": CSR-integrated outing. Peserta plant pohon di hutan rehab Jawa Barat. Sustainability brand alignment",
          "\"Community impact day\": 50% time outing, 50% volunteer di komunitas lokal (renovasi sekolah, gotong royong)",
          "\"Skill exchange\": peserta share skill ke komunitas (financial literacy, digital skill workshop)",
        ],
        callout: {
          label: "Pakai untuk",
          text: "Brand yang punya ESG / sustainability commitment. Audience Millennial / Gen-Z lebih engaged dengan mission-based theme dari generic fun.",
        },
      },
      {
        heading: "Kategori 4: Cultural-Rooted Theme",
        paragraphs: [
          "Tema yang root ke budaya lokal Sunda / Indonesia tanpa stereotype. Demand riset proper, bukan cosplay budaya.",
        ],
        bullets: [
          "\"Sundanese Pasar Malam\": pasar tradisional reimagined dengan curated F&B Sunda authentic + live music traditional + interactive booth kerajinan",
          "\"Tarian & Cerita\": opening dengan tari Jaipong oleh sanggar lokal + storytelling tentang nilai filosofi Sunda yang connect ke nilai perusahaan",
          "\"Petualangan Pasundan\": expedition narrative dengan elemen budaya Sunda (peta tradisional, makanan khas, bahasa daerah dalam game)",
        ],
        callout: {
          label: "Penting",
          text: "Hindari versi karikatur (\"costume Sunda costume\" yang stereotype). Engage konsultan budaya atau sanggar lokal untuk autentisitas. Budaya bukan dekorasi.",
        },
      },
      {
        heading: "5 tema yang harus dihindari di 2026",
        paragraphs: [
          "Tema-tema berikut sudah saturated atau punya implicit problem. Hindari kecuali ada twist signifikan:",
        ],
        numbered: [
          "\"Hawaiian / Bali Beach Vibes\": cliche, peserta perceive low-effort, tidak match Bandung context (dataran tinggi, bukan pantai).",
          "\"Olympic Games\": kompetisi heavy dengan winner-loser dynamic justru bisa hurt team cohesion. Plus terkesan kekanak-kanakan untuk audience profesional.",
          "\"Casino Night\": gambling theme problematic dari sisi compliance + brand image untuk banyak industri (regulated, family-oriented brand).",
          "\"Masquerade Ball\": cliche, costume requirement adds friction, jarang fit brand modern.",
          "\"Black-tie Gala\" (tanpa context): terlalu formal untuk most outing, costume requirement exclude peserta yang tidak comfortable.",
        ],
      },
      {
        heading: "Process pilih tema yang work",
        paragraphs: [
          "Sequential 5-step yang kami pakai:",
        ],
        numbered: [
          "Confirm objective primary event (bonding / strategic / celebration / mission).",
          "Audit brand identity — refined? playful? mission-driven? cultural?",
          "Map audience demographic + cultural mix.",
          "Shortlist 3 tema dari 4 kategori, evaluate fit dengan 3 faktor di atas.",
          "Validasi internal stakeholder (HR + brand/marketing) sebelum lock-in. Tema yang HR suka tapi brand reject = friction kemudian.",
        ],
      },
    ],
    howTo: {
      name: "Cara Memilih Tema Corporate Outing yang On-Brand dan Relevan",
      description: "5 langkah sequential untuk memilih tema outing yang align dengan brand identity, reinforce objective, dan sesuai audience — bukan sekadar memilih dari katalog vendor.",
      steps: [
        {
          name: "Konfirmasi objective primary event",
          text: "Tentukan apakah event ini untuk bonding, strategic alignment, celebration milestone, atau mission-based activity. Objective ini menjadi filter utama untuk memilih kategori tema yang sesuai.",
        },
        {
          name: "Audit brand identity perusahaan",
          text: "Tanyakan: apakah brand tone perusahaan refined dan premium, playful dan energetic, mission-driven, atau culture-rooted? Tema yang dipilih harus mencerminkan karakter brand — bukan kontradiksi.",
        },
        {
          name: "Peta audience demographic dan cultural mix",
          text: "Pahami komposisi peserta: dominan Gen-Z dan Millennial, atau campuran dengan Gen-X? Ada keberagaman budaya yang perlu diakomodasi? Tema yang berhasil accommodate semua peserta tanpa ada yang merasa excluded.",
        },
        {
          name: "Shortlist 3 tema dari 4 kategori dan evaluasi fit",
          text: "Buat shortlist dari 4 kategori: narrative-driven, aesthetic-curated, mission-based, dan cultural-rooted. Evaluasi masing-masing dengan 3 filter: align dengan brand? reinforce objective? accommodate audience? Eliminasi yang tidak pass ketiga filter.",
        },
        {
          name: "Validasi dengan internal stakeholder sebelum lock-in",
          text: "Presentasi shortlist ke HR dan tim brand/marketing. Tema yang disukai HR tapi ditolak brand akan menciptakan friction di eksekusi. Aligned decision di awal jauh lebih efisien dari revisi di tengah jalan.",
        },
      ],
    },
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Eksekusi tema outing yang on-brand dengan vendor specialist Bandung." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Annual gathering dengan awarding ceremony — tema premium, production grade." },
      { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung", description: "Tema gathering yang inklusif untuk semua level karyawan." },
      { href: "/faq/formats", label: "FAQ Format & Programs", description: "Format event apa yang paling cocok untuk tema tertentu — panduan dari planner senior." },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "Perbedaan gathering, outing, retreat, dan incentive trip dari perspektif tema." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "indoor-vs-outdoor-corporate-outing"],
  },

  "contoh-rundown-outing-kantor-1-hari": {
    slug: "contoh-rundown-outing-kantor-1-hari",
    title: "Contoh Rundown Outing Kantor 1 Hari — Template Siap Pakai 2026",
    excerpt:
      "3 template rundown outing kantor 1 hari lengkap: casual bonding, team building fokus, dan premium 1-day experience. Dengan breakdown waktu, PIC, dan catatan logistik.",
    metaDescription:
      "Contoh rundown outing kantor 1 hari yang bisa langsung dipakai — 3 format: casual bonding, team building, premium experience. Lengkap dengan timing, logistik, dan tips vendor.",
    category: "Planning Guide",
    tldr: [
      "Rundown 1-hari terbaik mulai 08.00 dan selesai maksimal 18.00 — hindari kelelahan dan kesan tidak profesional.",
      "3 format: casual bonding (santai, cocok semua demografi), team building fokus (dengan facilitator), premium 1-day (makan siang fine dining + dokumentasi).",
      "Buffer waktu 15-20 menit antar sesi adalah wajib — corporate outing selalu ada delay kecil di registration, F&B, dan perpindahan lokasi.",
      "Brief vendor tentang rundown minimal H-7. Brief ulang H-1. On-site briefing H-0 pagi.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-13",
    readTimeMin: 8,
    author: { name: "Tio Mahesa", role: "Lead Field Operations Manager", initials: "TM" },
    sections: [
      {
        paragraphs: [
          "Outing kantor 1 hari adalah format paling sering di-request HR dan GA Indonesia — cukup untuk recharge tim, tidak memakan budget besar, dan tidak butuh izin menginap dari management. Tapi tanpa rundown yang solid, 1 hari bisa terasa chaotic atau terlalu padat.",
          "Kami share 3 template rundown yang kami pakai dari 400+ events — bisa langsung dipakai sebagai starting point atau dikustom sesuai kebutuhan.",
        ],
      },
      {
        heading: "Format A: Casual Bonding 1 Hari (Cocok untuk semua demografi)",
        paragraphs: [
          "Format paling flexible, cocok untuk departmental outing atau grup dengan demografi campuran. Emphasis pada koneksi informal, bukan structured activity.",
        ],
        numbered: [
          "07.30 — Kumpul + keberangkatan dari titik meeting (bis chartered atau konvoi)",
          "09.00 — Arrival venue, registrasi, welcome snack",
          "09.30 — Ice breaker + welcome session (MC opens, quick intro games, energy setting)",
          "10.15 — Activity sesi 1: outdoor game light atau indoor creative challenge (sesuai venue)",
          "12.00 — Makan siang (Indonesian buffet, dietary accommodation)",
          "13.00 — Break + free time (kolam renang, hammock area, foto)",
          "14.00 — Activity sesi 2: team challenge atau bonding workshop (lebih substantive dari sesi 1)",
          "15.30 — Coffee break + doorprize / games kecil",
          "16.00 — Sharing & reflection circle (tiap tim share 1 highlight hari ini)",
          "16.30 — Closing ceremony, foto grup, ucapan terima kasih dari pimpinan",
          "17.00 — Persiapan pulang, loading bis",
          "17.30 — Keberangkatan kembali",
        ],
        callout: {
          label: "Tips",
          text: "Jaga 'dead time' minimal. Transisi antar sesi harus smooth — MC atau fasilitator selalu on-stage untuk fill gap. Silent gap lebih dari 5 menit = peserta mulai buka HP.",
        },
      },
      {
        heading: "Format B: Team Building Fokus 1 Hari (dengan Certified Facilitator)",
        paragraphs: [
          "Format untuk objective spesifik — membangun trust, improve komunikasi antar departemen, atau post-merger alignment. Butuh certified facilitator, bukan MC biasa.",
        ],
        numbered: [
          "07.30 — Kumpul + keberangkatan",
          "09.00 — Arrival, welcome coffee, setup",
          "09.30 — Opening facilitation: kontrak belajar, objective sharing (fasilitator lead)",
          "10.00 — Modul 1: Trust-building exercise (blind walk, fall-and-catch, atau collaborative art)",
          "11.00 — Debrief Modul 1: fasilitator extract insight, connect ke workplace reality",
          "11.30 — Modul 2: Communication challenge (broken telephone advanced, atau LEGO® serious play)",
          "12.30 — Makan siang",
          "13.30 — Energizer post-lunch (high energy, 15 menit)",
          "13.45 — Modul 3: Problem-solving challenge atau leadership simulation",
          "15.00 — Debrief akhir: action commitment dari tiap tim",
          "15.45 — Coffee break",
          "16.00 — Closing: commitment wall, closing ritual, foto",
          "16.30 — Persiapan pulang",
        ],
        callout: {
          label: "Penting",
          text: "Format ini tidak bisa dijalankan oleh MC biasa atau panitia internal. Butuh certified facilitator (ICF ACC minimum) yang bisa run debrief session yang meaningful. Tanpa ini, modul team building jadi game yang menyenangkan tapi tidak ada transfer ke workplace.",
        },
      },
      {
        heading: "Format C: Premium 1-Day Experience (Corporate + Fine Dining)",
        paragraphs: [
          "Format untuk perusahaan yang mau kesan premium dalam 1 hari — biasanya untuk tim kecil (20-60 pax) atau departemen senior. Budget Rp 3-5 jt/pax.",
        ],
        numbered: [
          "08.00 — Penjemputan dengan transport premium (minibus executive atau convoy sedan)",
          "10.00 — Arrival di private villa atau heritage property",
          "10.15 — Welcome drink + property tour + photo moment",
          "10.45 — Activity eksklusif: private cooking class, wine/coffee tasting, atau collaborative art session",
          "12.30 — Fine dining lunch (4-5 course set menu atau premium live cooking buffet)",
          "14.00 — Leisure time: kolam renang, nature walk, atau spa session add-on",
          "15.30 — Afternoon tea + sharing session informal (dipimpin senior leader / CEO)",
          "16.30 — Foto grup profesional (fotografer dedicated)",
          "17.00 — Persiapan pulang, souvenir premium per peserta",
          "17.30 — Keberangkatan dengan transport yang sama",
        ],
        callout: {
          label: "Cocok untuk",
          text: "Departemen C-suite atau senior manager, client appreciation event internal, atau milestone celebration tim kecil. Format ini tentang exclusivity dan curated experience — bukan tentang activity volume.",
        },
      },
      {
        heading: "Logistik yang sering terlupakan",
        paragraphs: ["5 detail logistik yang panitia sering skip dan jadi masalah di hari H:"],
        bullets: [
          "Titik kumpul yang jelas dengan koordinat Maps + petugas standby untuk guide peserta yang nyasar",
          "Handling peserta telat — siapa yang tunggu, berapa lama, kapan bis berangkat tanpa menunggu",
          "Medical kit on-site + nama kontak darurat + puskesmas / klinik terdekat dari venue",
          "Checkpoint dietary restriction — minta list dari HR H-7, serahkan ke catering H-3",
          "Power bank komunal + charging station untuk peserta yang perlu dokumentasi / live story",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Gunakan rundown ini sebagai template dan serahkan eksekusinya ke kami." },
      { href: "/event-organizer-corporate-bandung", label: "EO Corporate Bandung", description: "EO yang bisa eksekusi rundown 1 hari dari A-Z dengan dedicated PM." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Template rundown 3D2N untuk event skala lebih besar." },
      { href: "/faq/logistics", label: "FAQ Process & Logistics", description: "Pertanyaan seputar timeline planning, koordinasi vendor hari-H, dan contingency." },
      { href: "/faq/formats", label: "FAQ Format & Programs", description: "Format rundown per jenis event — 1D, 2D1N, 3D2N, hingga multi-venue." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "bandung-outing-tier-system", "contoh-rundown-outing-kantor-2d1n"],
    howTo: {
      name: "Cara Membuat Rundown Outing Kantor 1 Hari",
      description: "Langkah-langkah membuat rundown outing kantor 1 hari yang efektif dan profesional",
      steps: [
        { name: "Tentukan format outing", text: "Pilih antara 3 format: casual bonding (santai semua demografi), team building fokus (dengan fasilitator), atau premium 1-day experience. Format menentukan kebutuhan SDM dan anggaran." },
        { name: "Tetapkan waktu mulai dan selesai", text: "Rundown 1 hari terbaik mulai 07.30–08.00 dan selesai maksimal 17.30–18.00. Hindari melebihi 10 jam untuk mencegah kelelahan peserta." },
        { name: "Susun sesi dengan buffer 15–20 menit", text: "Setiap transisi antar sesi butuh buffer 15–20 menit untuk perpindahan lokasi, keberangkatan yang terlambat, dan F&B. Jangan packing sesi terlalu rapat." },
        { name: "Assign PIC per sesi", text: "Setiap sesi harus ada nama penanggung jawab yang jelas — bukan hanya 'panitia'. PIC bertanggung jawab atas kesiapan venue, peserta, dan material per sesi." },
        { name: "Brief vendor minimal H-7", text: "Kirim rundown final ke semua vendor (venue, katering, fasilitator, dokumentasi) minimal 7 hari sebelum event. Review ulang H-1. Briefing pagi on-site H-0." },
        { name: "Siapkan contingency per sesi outdoor", text: "Setiap sesi outdoor harus punya Plan B indoor. Catat di rundown: 'Jika hujan → pindah ke [lokasi indoor]' dengan PIC yang sama." },
      ],
    },
  },

  "checklist-vendor-event-organizer-corporate": {
    slug: "checklist-vendor-event-organizer-corporate",
    title: "Checklist 12 Poin Pilih Vendor EO Corporate — Jangan Sampai Salah Pilih",
    excerpt:
      "12 pertanyaan yang harus ditanyakan sebelum hire EO corporate. Dari portofolio sampai kontrak, dari team structure sampai contingency plan. Panduan untuk HR & GA.",
    metaDescription:
      "Checklist 12 poin untuk memilih vendor event organizer corporate yang tepat. Pertanyaan untuk portfolio, contract, team, contingency, dan post-event accountability. Untuk HR & GA Indonesia.",
    category: "Vendor Selection",
    tldr: [
      "70% masalah event bukan dari force majeure — tapi dari vendor yang tidak punya sistem. Checklist ini bantu HR/GA screen vendor sebelum commit.",
      "Red flag terbesar: vendor yang tidak mau discovery call atau langsung quote tanpa brief. Vendor profesional selalu demand brief dulu.",
      "Kontrak harus cover: force majeure clause, payment schedule, cancellation policy, dan accountability post-event. Tanpa ini, Anda tidak punya proteksi.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-12",
    readTimeMin: 7,
    author: { name: "Sinta Rahmadhani", role: "Head of Client Strategy", initials: "SR" },
    sections: [
      {
        paragraphs: [
          "Pilih vendor EO corporate yang salah bisa sangat mahal — bukan hanya dari sisi budget, tapi juga dari sisi reputasi internal HR/GA yang responsible. Setelah handle 400+ events dan sering di-brief oleh perusahaan yang pernah kecewa dengan vendor sebelumnya, kami kompilasi 12 pertanyaan ini sebagai due diligence framework.",
          "Gunakan checklist ini sebagai panduan saat Anda shortlist 2-3 vendor dan masuk ke discovery call.",
        ],
      },
      {
        heading: "Kategori 1: Portofolio & Pengalaman (4 poin)",
        paragraphs: [],
        numbered: [
          "Berapa event corporate (bukan retail/wedding) yang sudah dihandle? Minta angka spesifik — bukan 'sudah banyak'. Benchmark: vendor yang serius punya 50+ corporate events documented.",
          "Pernah handle event dengan skala dan industri yang mirip perusahaan Anda? Minta 2-3 case study konkret — bukan katalog foto. Case study harus include brief, approach, dan result.",
          "Siapa klien korporat mereka? Tidak perlu nama perusahaan (NDA wajar), tapi industri dan skala pax bisa di-share. Vendor yang tidak bisa share industri klien = red flag.",
          "Apakah ada referensi yang bisa dihubungi langsung? Vendor confident akan welcome ini. Vendor yang menghindar = meragukan.",
        ],
      },
      {
        heading: "Kategori 2: Tim & Struktur (3 poin)",
        paragraphs: [],
        numbered: [
          "Siapa project manager yang akan assigned ke event Anda? Apakah PM ini experienced atau junior? Vendor besar sering pitch dengan senior account tapi execute dengan tim junior.",
          "Berapa event yang dihandle PM Anda secara paralel? PM yang handle 5+ event bersamaan tidak bisa memberikan attention yang cukup untuk event Anda.",
          "Apakah fasilitator / MC internal atau freelance? Freelance tidak selalu buruk, tapi pastikan ada SLA dan hubungan kerja yang jelas — bukan asal subkon last minute.",
        ],
        callout: {
          label: "Green flag",
          text: "Vendor yang upfront soal tim structure dan tidak oversell — 'PM kami handle 2-3 event sekaligus tapi briefing kami intensive' lebih honest dari 'Anda dapat full attention kami'.",
        },
      },
      {
        heading: "Kategori 3: Proses & Sistem (3 poin)",
        paragraphs: [],
        numbered: [
          "Apakah ada discovery brief / intake form sebelum mereka quote? Vendor profesional tidak akan quote tanpa brief. Kalau vendor langsung kirim harga tanpa tanya objective, audience, dan constraints — itu template quote, bukan custom proposal.",
          "Bagaimana sistem komunikasi mereka? Ada project management tool (Notion, Trello, ClickUp)? Ada designated contact di luar jam kerja untuk urgency on-site? Verbal commitment saja tidak cukup.",
          "Apakah ada risk register atau contingency plan per event? Setiap event punya Plan A dan Plan B minimum. Kalau vendor belum pernah dengar istilah ini, itu signal mereka tidak punya sistem.",
        ],
      },
      {
        heading: "Kategori 4: Kontrak & Post-Event (2 poin)",
        paragraphs: [],
        numbered: [
          "Apakah kontrak cover force majeure, cancellation policy, dan refund terms secara eksplisit? Baca kontrak sebelum tanda tangan. Klausul 'force majeure' harus define trigger yang jelas, bukan open-ended.",
          "Apakah ada post-event report? Vendor profesional deliver post-event report dalam 5-7 hari kerja: execution summary, dokumentasi, feedback compilation, dan lessons learned. Ini penting untuk justify budget ke management dan brief vendor next year.",
        ],
        callout: {
          label: "Red flags dalam kontrak",
          text: "Non-refundable deposit 100% untuk semua skenario cancel. Klausul 'perubahan sewaktu-waktu tanpa pemberitahuan'. Tidak ada service level agreement yang tertulis. Tidak ada mekanisme dispute resolution.",
        },
      },
    ],
    internalLinks: [
      { href: "/event-organizer-corporate-bandung", label: "EO Corporate Bandung", description: "EO corporate Bandung yang memenuhi semua 12 poin checklist — NPWP, dedicated PM, post-event report." },
      { href: "/b2b-corporate-event-specialist-bandung", label: "B2B Event Specialist", description: "Panduan lengkap 7 kriteria vendor B2B untuk procurement perusahaan besar." },
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Brief vendor outing Anda dengan checklist ini untuk mendapatkan proposal terbaik." },
      { href: "/faq/vendor", label: "FAQ Vendor Selection", description: "12 pertanyaan kritis untuk ditanyakan ke calon vendor EO corporate." },
      { href: "/faq/logistics", label: "FAQ Process & Logistics", description: "Proses kerja vendor specialist — dari brief hingga post-event report." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "bandung-outing-tier-system", "cara-membuat-brief-event-organizer"],
    howTo: {
      name: "Cara Memilih Event Organizer Corporate yang Tepat",
      description: "Checklist 12 poin due diligence sebelum hire vendor EO corporate untuk acara perusahaan",
      steps: [
        { name: "Verifikasi portofolio event corporate", text: "Minta angka spesifik event corporate (bukan retail/wedding) yang sudah dihandle. Benchmark: 50+ corporate events documented. Minta 2-3 case study konkret dengan brief, approach, dan result." },
        { name: "Cek referensi klien yang bisa dihubungi", text: "Vendor yang confident akan welcome referral check. Tanyakan industri dan skala pax klien sebelumnya. Vendor yang menghindar memberikan referensi adalah red flag." },
        { name: "Identifikasi project manager yang akan assigned", text: "Siapa PM yang akan handle event Anda? Senior atau junior? Berapa event paralel yang dia handle? PM yang pegang 5+ event bersamaan tidak bisa memberikan attention cukup." },
        { name: "Validasi proses discovery brief", text: "Apakah ada intake form atau discovery call sebelum mereka quote? Vendor yang langsung kirim harga tanpa brief sedang memberikan template quote, bukan custom proposal." },
        { name: "Periksa sistem risk management", text: "Tanyakan apakah ada risk register atau contingency plan per event. Vendor tanpa dokumen ini tidak punya sistem profesional." },
        { name: "Review kontrak secara menyeluruh", text: "Pastikan kontrak cover force majeure clause, cancellation policy, refund schedule, dan SLA komunikasi. Klausul ambigu = potensi dispute di kemudian hari." },
        { name: "Konfirmasi deliverable post-event", text: "Apakah ada post-event report dalam 5-7 hari kerja? Report ini dibutuhkan HR untuk justify budget ke management dan brief vendor tahun berikutnya." },
      ],
    },
  },

  "outing-lembang-vs-ciwidey": {
    slug: "outing-lembang-vs-ciwidey",
    title: "Outing Lembang vs Ciwidey — Mana yang Cocok untuk Tim Anda?",
    excerpt:
      "Dua destinasi outing terpopuler Bandung — Lembang dan Ciwidey — punya karakter sangat berbeda. Panduan komparasi venue, akses, aktivitas, dan harga per area.",
    metaDescription:
      "Lembang vs Ciwidey untuk outing kantor — perbandingan jarak, venue, aktivitas, dan harga. Panduan lengkap untuk HR & GA yang sedang memilih lokasi outing Bandung.",
    category: "Destination Guide",
    tldr: [
      "Lembang: akses termudah dari Bandung kota (45-90 menit), venue paling beragam (villa, resort, hotel), cocok untuk grup campuran dan first-timer.",
      "Ciwidey: lebih jauh (90-150 menit dari kota), tapi punya unique attraction (Kawah Putih, Situ Patenggang, kebun teh), cocok untuk grup yang cari experience berbeda.",
      "Lembang = everyday corporate outing. Ciwidey = nature immersive experience. Pangalengan = quiet escape untuk retreat atau leadership.",
    ],
    heroImage: IMAGES.packageAnnualGathering,
    publishDate: "2026-05-11",
    readTimeMin: 9,
    author: { name: "Tio Mahesa", role: "Lead Field Operations Manager", initials: "TM" },
    sections: [
      {
        paragraphs: [
          "Dua destinasi yang paling sering di-shortlist HR dan GA untuk outing kantor Bandung: Lembang dan Ciwidey. Keduanya di Jawa Barat, keduanya dataran tinggi berhawa sejuk, tapi karakter event-nya sangat berbeda.",
          "Artikel ini adalah comparative guide berdasarkan ratusan event yang sudah kami deliver di kedua area. Bukan untuk memenangkan satu area atas yang lain — tapi untuk membantu Anda match lokasi ke kebutuhan tim.",
        ],
      },
      {
        heading: "Lembang — Accessible Corporate Outing Hub",
        paragraphs: [
          "Lembang adalah destinasi default untuk corporate outing Bandung — bukan karena kurang inspiratif, tapi karena infrastrukturnya paling mature untuk corporate event.",
        ],
        bullets: [
          "Jarak dari Bandung kota: 30-45 km, 45-90 menit (tergantung traffic). Bisa dijangkau dari Jakarta dalam 3-3.5 jam",
          "Tipe venue: paling beragam di semua area Bandung — villa private, resort dengan ballroom, glamping farm, hotel butik, outdoor camp",
          "Aktivitas: outbound, team building, flying fox, ATV, paintball, cooking class, glamping, cycling, berkuda",
          "Kapasitas venue: dari 20 pax (villa intimate) sampai 500+ pax (resort ballroom)",
          "Sinyal komunikasi: umumnya baik — penting untuk event yang butuh live streaming atau hybrid",
          "Budget: paling flexible — dari Rp 1.5 jt/pax sampai Rp 7 jt+/pax tergantung venue",
        ],
        callout: {
          label: "Best for",
          text: "Annual outing standar 100-300 pax, team building 1 hari, gathering department, outing yang ada peserta dengan mobility issue (akses lebih mudah).",
        },
      },
      {
        heading: "Ciwidey — Nature Immersive Experience",
        paragraphs: [
          "Ciwidey menawarkan sesuatu yang Lembang tidak bisa replikasi: natural landmark yang dramatic — Kawah Putih (kawah belerang dengan pemandangan moonscape), Situ Patenggang (danau eksotis), kebun teh Malabar.",
        ],
        bullets: [
          "Jarak dari Bandung kota: 45-65 km, 90-150 menit (akses lebih challenging, terutama dari Jakarta — 4+ jam)",
          "Tipe venue: lebih terbatas — sebagian besar villa dan resort outdoor, glamping camp, eco-lodge. Ballroom besar jarang ada",
          "Aktivitas: trekking ke Kawah Putih, camping, glamping, outbound alam, perahu Situ Patenggang, petik teh, offroad",
          "Kapasitas venue: umumnya lebih kecil — optimal 30-150 pax. Di atas 200 pax logistik lebih kompleks",
          "Sinyal komunikasi: bisa terbatas di beberapa titik — consider ini untuk event hybrid",
          "Budget: mirip Lembang di range bawah, tapi opsi premium lebih terbatas",
        ],
        callout: {
          label: "Best for",
          text: "Tim yang sudah pernah outing ke Lembang dan mau experience berbeda. Grup 30-120 pax. Event dengan focus pada nature + adventure. Tim yang appreciate uniqueness atas convenience.",
        },
      },
      {
        heading: "Tabel Komparasi Cepat",
        paragraphs: [
          "Faktor-faktor decision utama side by side:",
        ],
        bullets: [
          "Akses: Lembang lebih mudah ✓ | Ciwidey lebih jauh",
          "Venue variety: Lembang lebih banyak ✓ | Ciwidey terbatas",
          "Natural drama: Lembang standar | Ciwidey lebih memorable ✓",
          "Grup besar (200+ pax): Lembang lebih feasible ✓ | Ciwidey challenging",
          "Hybrid event: Lembang lebih aman ✓ | Ciwidey sinyal terbatas",
          "Novelty factor: Lembang familiar | Ciwidey lebih fresh ✓",
          "First-timer group: Lembang lebih safe ✓ | Ciwidey learning curve",
        ],
      },
      {
        heading: "Area lain yang perlu dipertimbangkan",
        paragraphs: ["Dua area yang juga layak di-shortlist tergantung kebutuhan:"],
        bullets: [
          "Pangalengan: lebih remote dari Ciwidey, hawa dingin ekstrem, kebun teh Malabar. Cocok untuk retreat reflektif / leadership deep work. Bukan untuk grup yang cari fun aktif.",
          "Subang: arah berbeda dari Bandung (utara), akses lebih mudah dari Jakarta Timur / Bekasi. Geothermal landscape unik (Tangkuban Perahu area). Cocok untuk mix sightseeing + outbound.",
        ],
      },
      {
        heading: "Decision framework — pilih berdasarkan ini",
        paragraphs: ["3 pertanyaan untuk arrive di keputusan yang tepat:"],
        numbered: [
          "Berapa pax dan apakah ada peserta dengan keterbatasan mobilitas? → Lembang lebih safe untuk grup besar dan mobility issue.",
          "Apakah tim sudah pernah outing ke Lembang dan mau sesuatu berbeda? → Ciwidey atau Pangalengan untuk novelty.",
          "Apakah ada konten hybrid / live streaming yang penting? → Pilih Lembang — sinyal lebih reliable.",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Eksplorasi venue Lembang & Ciwidey dengan dukungan 60+ vendor partnership langsung." },
      { href: "/villa-gathering-bandung", label: "Villa Gathering Bandung", description: "Villa private premium Lembang — eksklusif, 30-300 pax, non-shared." },
      { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung", description: "Glamping di Lembang atau Ciwidey — outdoor premium untuk team bonding unik." },
      { href: "/faq/location", label: "FAQ Lokasi & Venue", description: "Perbandingan Lembang vs Ciwidey vs area lain — mana yang fit untuk tim Anda?" },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "Pertimbangan memilih lokasi: jarak, fasilitas, kapasitas, dan budget." },
    ],
    relatedSlugs: ["bandung-outing-tier-system", "contoh-rundown-outing-kantor-1-hari", "indoor-vs-outdoor-corporate-outing"],
    howTo: {
      name: "Cara Memilih antara Lembang vs Ciwidey untuk Corporate Outing",
      description: "4 langkah memilih destinasi outing yang tepat — Lembang atau Ciwidey — berdasarkan objective, pax, durasi, dan budget perusahaan.",
      steps: [
        { name: "Tentukan objective dan format event", text: "Lembang cocok untuk team building aktif (outdoor activity park seperti The Lodge Maribaya), glamping casual, atau annual gathering hotel premium (Padma Hotel Lembang). Ciwidey cocok untuk glamping alam terbuka yang lebih immersive, nature-based retreat, atau executive offsite yang butuh ketenangan lebih jauh dari keramaian." },
        { name: "Cek waktu perjalanan dan logistics peserta", text: "Lembang: 30–45 menit dari pusat kota Bandung, paling mudah diakses dari Jakarta (2–2.5 jam). Ciwidey: 60–90 menit dari pusat kota, kurang ideal untuk peserta dari Jakarta yang ingin efisiensi waktu. Untuk grup dari Jakarta yang hanya 2D1N, Lembang lebih disarankan." },
        { name: "Sesuaikan dengan kapasitas grup", text: "Lembang memiliki lebih banyak pilihan venue berskala besar (50–800 pax) — cocok untuk company gathering, annual event, atau family day. Ciwidey lebih optimal untuk grup kecil-menengah (20–80 pax) yang butuh ekslusivitas dan ketenangan alam." },
        { name: "Pertimbangkan cuaca dan backup plan", text: "Kedua destinasi berada di area pegunungan dengan cuaca yang dapat berubah — rain plan wajib ada. Ciwidey lebih rentan kabut tebal di musim hujan (Oktober–April) yang bisa mengganggu aktivitas outdoor. Lembang memiliki lebih banyak venue dengan indoor backup option yang layak." },
      ],
    },
  },

  "mice-vs-corporate-outing-perbedaan": {
    slug: "mice-vs-corporate-outing-perbedaan",
    title: "MICE vs Corporate Outing — Beda Definisi, Beda Vendor, Beda Budget",
    excerpt:
      "Banyak perusahaan salah pilih format karena tidak tahu beda MICE dan corporate outing. Panduan definitif untuk HR & GA yang sedang brief vendor.",
    metaDescription:
      "Perbedaan MICE dan corporate outing — definisi, format, vendor capability, budget, dan kapan pilih mana. Panduan untuk HR, GA, dan procurement Indonesia.",
    category: "Format Design",
    tldr: [
      "MICE = Meeting, Incentive, Conference, Exhibition. Format yang lebih structured, butuh AV production lebih kompleks, dan biasanya ada deliverable bisnis spesifik.",
      "Corporate Outing = format yang focus pada team bonding, refresh, dan employee engagement. Lebih relaxed, tidak harus ada formal presentation atau stage.",
      "Salah pilih format = budget terbuang. Hire EO yang strong di outing untuk MICE = mismatch. Hire travel agent untuk corporate gathering = disaster.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-10",
    readTimeMin: 7,
    author: { name: "Sinta Rahmadhani", role: "Head of Client Strategy", initials: "SR" },
    sections: [
      {
        paragraphs: [
          "Kami sering terima brief yang blur: 'Kami mau gathering tapi ada sesi presentation juga dan malam ada awarding.' Itu bukan outing biasa — itu hybrid MICE-Gathering yang butuh capability spesifik.",
          "Artikel ini untuk HR dan GA yang sedang dalam proses brief vendor dan perlu tahu format apa yang sesuai dengan kebutuhan perusahaan mereka.",
        ],
      },
      {
        heading: "MICE — Meeting, Incentive, Conference, Exhibition",
        paragraphs: [
          "MICE adalah kategori umbrella untuk 4 format corporate event yang punya satu kesamaan: ada deliverable bisnis yang terukur, bukan semata-mata employee experience.",
        ],
        bullets: [
          "Meeting: sesi kerja terstruktur — kick-off, strategy review, all-hands. Butuh AV profesional, breakout room, dan dokumentasi minuted.",
          "Incentive: program reward untuk top performer — trip atau experience sebagai motivasi. Butuh 'wow factor' dan exclusive feel.",
          "Conference: seminar, congress, atau gathering industri dengan speakers dan agenda formal. Butuh registration system, stage production, dan live streaming capability.",
          "Exhibition: showcase produk, trade show internal atau eksternal. Butuh booth design, floor plan management, dan operational support.",
        ],
        callout: {
          label: "Vendor yang Anda butuhkan",
          text: "EO dengan track record corporate conference dan AV production capability. Bukan semua travel agent atau event organizer bisa deliver MICE dengan kualitas yang expected.",
        },
      },
      {
        heading: "Corporate Outing — Employee Experience First",
        paragraphs: [
          "Corporate outing focus pada employee engagement: bonding, refresh, celebrate milestone, atau align culture. Output-nya tidak terukur lewat profit margin — tapi lewat employee satisfaction, engagement score, dan retention.",
        ],
        bullets: [
          "Company gathering: annual event celebration + awarding night + entertainment",
          "Team building: structured activity dengan facilitator untuk specific team outcome",
          "Employee outing: casual refresh 1-2 hari untuk bonding",
          "Glamping / villa retreat: experience-based program untuk small to medium group",
          "Leadership retreat: development-focused untuk senior cohort",
        ],
        callout: {
          label: "Vendor yang Anda butuhkan",
          text: "Specialist corporate outing yang paham adult learning principles, facilitation, dan experience design. Travel agent retail tidak punya ini.",
        },
      },
      {
        heading: "Kapan pilih MICE, kapan pilih outing?",
        paragraphs: ["Framework sederhana: tanya satu pertanyaan utama:"],
        bullets: [
          "Ada agenda formal / presentation / speaker / deliverable bisnis? → MICE format",
          "Focus pada bonding, refresh, celebration, atau team development? → Corporate outing",
          "Keduanya? → Hybrid format (gathering + conference) — butuh vendor yang bisa handle keduanya",
        ],
      },
      {
        heading: "Budget implication",
        paragraphs: [
          "MICE event umumnya lebih mahal per pax bukan karena mark-up vendor, tapi karena cost structure berbeda:",
        ],
        bullets: [
          "MICE: AV production (renting stage, sound, LED backdrop, live stream encoder) Rp 50-300 jt tergantung skala",
          "MICE: Speaker fee atau moderator profesional Rp 10-80 jt/session",
          "MICE: Registration system + badge + event app Rp 15-50 jt untuk conference formal",
          "Corporate outing: cost terbesar di venue + F&B + fasilitator + dokumentasi — predictable dan lebih linear dengan pax",
        ],
      },
    ],
    howTo: {
      name: "Cara Menentukan Format Event: MICE atau Corporate Outing",
      description: "4 langkah untuk memilih format event yang tepat — MICE, corporate outing, atau hybrid — sebelum brief vendor agar tidak terjadi mismatch capability dan anggaran.",
      steps: [
        {
          name: "Identifikasi apakah ada deliverable bisnis yang terukur",
          text: "Tanyakan: apakah event ini harus menghasilkan sesuatu yang bisa dilaporkan ke manajemen — keputusan bisnis, presentasi strategi, launch produk, atau penandatanganan kontrak? Jika ya, ini masuk format MICE. Jika tidak ada deliverable formal, ini corporate outing.",
        },
        {
          name: "Evaluasi kebutuhan AV production dan staging",
          text: "MICE membutuhkan AV profesional — stage, LED backdrop, live stream encoder, sound system conference-grade. Corporate outing tidak perlu ini. Jika brief Anda menyebutkan 'stage besar' dan 'keynote speaker', budget dan vendor capability MICE yang dibutuhkan.",
        },
        {
          name: "Tentukan apakah format hybrid diperlukan",
          text: "Jika event menggabungkan sesi presentasi formal dan bonding activities, itu hybrid format. Contoh: annual gathering dengan all-hands meeting + malam awarding + outbound Day 2. Hybrid membutuhkan vendor yang bisa handle keduanya, bukan spesialis satu format saja.",
        },
        {
          name: "Sesuaikan pilihan vendor dengan format yang dipilih",
          text: "MICE: butuh EO dengan track record conference production dan AV capability. Corporate outing: butuh specialist outing dengan facilitation skill dan experience design. Hiring travel agent retail untuk MICE, atau EO yang biasa handle conference untuk outing — keduanya mismatch yang berujung eksekusi di bawah ekspektasi.",
        },
      ],
    },
    internalLinks: [
      { href: "/mice-organizer-bandung", label: "MICE Organizer Bandung", description: "Full-stack MICE production — meeting, incentive, conference, exhibition di Bandung." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Corporate gathering dengan format annual event production — bukan sekadar outing." },
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Outing kantor sebagai alternatif MICE yang lebih kasual namun tetap impactful." },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "MICE vs outing vs gathering — perbedaan definisi, budget, dan vendor yang dibutuhkan." },
      { href: "/faq/formats", label: "FAQ Format & Programs", description: "Format event bisnis mana yang sesuai dengan objective — MICE, outing, atau retreat?" },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "checklist-vendor-event-organizer-corporate", "bandung-outing-tier-system"],
  },

  "annual-company-trip-vs-incentive-trip": {
    slug: "annual-company-trip-vs-incentive-trip",
    title: "Annual Company Trip vs Incentive Trip — Mana yang Perusahaan Anda Butuhkan?",
    excerpt:
      "Annual company trip untuk semua karyawan, incentive trip untuk top performers — terdengar simple, tapi banyak perusahaan salah mixing keduanya. Panduan untuk HR.",
    metaDescription:
      "Perbedaan annual company trip dan incentive trip — objective, eligibility, format, budget, dan vendor requirement. Panduan untuk HR Indonesia merencanakan program reward.",
    category: "Program Design",
    tldr: [
      "Annual company trip = untuk semua karyawan, objective bonding + celebration + culture reinforcement. Tidak ada threshold performance.",
      "Incentive trip = untuk top performers terseleksi, objective motivasi + reward + recognition. Ada threshold performance yang jelas.",
      "Mixing keduanya tanpa clear eligibility criteria bisa hurt morale — peserta yang tidak lolos threshold merasa unfair, peserta yang lolos tidak merasa exclusive.",
    ],
    heroImage: IMAGES.packageGlamping,
    publishDate: "2026-05-09",
    readTimeMin: 6,
    author: { name: "Putri Anggraeni", role: "Client Success & Reporting Lead", initials: "PA" },
    sections: [
      {
        paragraphs: [
          "Dua format yang sering di-brief bersamaan tapi punya logic yang sangat berbeda. Kami pernah handle perusahaan yang 'annual company trip'-nya hanya untuk tim sales dengan quota achieved — itu bukan annual trip, itu incentive trip yang kurang tepat naming-nya. Dan itu matter karena implikasi morale-nya berbeda.",
        ],
      },
      {
        heading: "Annual Company Trip — Inclusive Celebration",
        paragraphs: [
          "Format: semua karyawan eligible (atau semua karyawan dengan masa kerja tertentu). Objective primary adalah culture reinforcement, celebration milestone perusahaan, dan cross-departmental bonding yang tidak terjadi di hari kerja biasa.",
        ],
        bullets: [
          "Eligibility: semua karyawan (atau min masa kerja, misal 3 bulan / 6 bulan)",
          "Objective: team bonding, celebration, culture alignment, refresh",
          "Scale: bisa besar (50-2000 pax) — butuh logistik yang solid",
          "Experience: inklusif tapi bisa ada tier (departemen berbeda, kelas transportasi berbeda)",
          "Budget range: Rp 2-5 jt/pax untuk 2D1N standard",
          "Frequency: annual atau semi-annual",
        ],
        callout: {
          label: "Red flag",
          text: "Annual company trip yang tidak melibatkan semua divisi secara inklusif — sering memunculkan persepsi favoritism dan hurt cross-team collaboration.",
        },
      },
      {
        heading: "Incentive Trip — Exclusive Recognition",
        paragraphs: [
          "Format: hanya untuk peserta yang mencapai threshold tertentu (biasanya performance metric: sales quota, project delivery, atau behavioral target). Objective adalah motivasi top performers dan sinyal ke seluruh organisasi bahwa performance dihargai.",
        ],
        bullets: [
          "Eligibility: threshold yang jelas (misal: top 20% sales, atau semua yang achieve 110% quota)",
          "Objective: reward, recognition, exclusive experience, recharge untuk top performers",
          "Scale: kecil dan intimate lebih baik (15-80 pax) — exclusivity adalah fitur, bukan bug",
          "Experience: premium, personalized, bukan generic. Peserta harus feel 'ini special'",
          "Budget range: Rp 3.5-9 jt/pax (standard sampai president's club)",
          "Frequency: annual atau per-cycle (Q4 atau setelah sales cycle selesai)",
        ],
      },
      {
        heading: "Decision matrix — pilih yang mana?",
        paragraphs: [],
        numbered: [
          "Semua karyawan harus merasakan benefitnya? → Annual company trip",
          "Hanya top performer yang eligible? → Incentive trip",
          "Mau reward sekaligus bonding seluruh perusahaan? → Dua program terpisah dengan budget terpisah",
          "Budget terbatas tapi mau reward high achiever? → Incentive trip dengan skala kecil, tapi premium — lebih impactful dari annual trip biasa",
        ],
      },
      {
        heading: "Mengapa tidak disarankan di-mix?",
        paragraphs: [
          "Mixing — annual trip yang sebenarnya hanya untuk tim tertentu, atau incentive trip yang terlalu inklusif — menciptakan ambiguity yang justru hurt morale:",
        ],
        bullets: [
          "Karyawan yang tidak diundang ke 'annual trip' merasa excluded — meski alasannya performance",
          "Karyawan yang diundang ke incentive trip yang terlalu besar tidak merasa special",
          "Management sulit justify budget ke Finance karena narrative program tidak jelas",
        ],
      },
    ],
    howTo: {
      name: "Cara Memilih antara Annual Company Trip dan Incentive Trip",
      description: "4 langkah untuk HR menentukan format program perjalanan karyawan yang tepat — agar tidak terjadi mixing yang hurt morale dan menyulitkan justifikasi budget ke Finance.",
      steps: [
        {
          name: "Tentukan kriteria eligibilitas peserta",
          text: "Tanyakan: apakah semua karyawan (atau semua dengan masa kerja tertentu) berhak hadir? Jika ya, ini annual company trip. Jika hanya karyawan yang mencapai threshold performance tertentu (misal top 20% sales atau 110% quota achieved), ini incentive trip. Eligibilitas yang jelas adalah fondasi seluruh program.",
        },
        {
          name: "Definisikan objective primary program",
          text: "Annual company trip: culture reinforcement, celebration, cross-departmental bonding. Incentive trip: reward, recognition, exclusive experience yang membuat top performer merasa dihargai. Satu program tidak bisa serve kedua objective sekaligus tanpa tradeoff.",
        },
        {
          name: "Tetapkan skala, budget, dan experience level",
          text: "Annual trip: inklusif dan scalable (50–2000 pax), budget Rp 2–5 jt/pax. Incentive trip: eksklusif dan intimate (15–80 pax), budget Rp 3.5–9 jt/pax. Exclusivity adalah fitur incentive trip — menurunkan standar pengalaman demi skala besar mengalahkan tujuan programnya.",
        },
        {
          name: "Jika butuh keduanya, rancang sebagai dua program terpisah",
          text: "Jika perusahaan ingin reward top performer sekaligus bonding semua karyawan, buat dua program dengan budget terpisah dan narrative yang jelas. Satu program hybrid yang mencoba melayani keduanya umumnya tidak efektif untuk keduanya.",
        },
      ],
    },
    internalLinks: [
      { href: "/incentive-trip-bandung", label: "Incentive Trip Bandung", description: "Rancang incentive trip yang eksklusif dan bermakna untuk top performer Anda." },
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Annual company trip format casual — bonding inklusif untuk semua karyawan." },
      { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung", description: "Employee gathering sebagai alternatif company trip yang lebih inklusif dan scalable." },
      { href: "/faq/budget", label: "FAQ Budget & Investment", description: "Budget incentive trip vs company trip — range harga dan apa yang beda." },
      { href: "/faq/comparison", label: "FAQ Comparison & Decision", description: "Annual trip vs incentive trip vs employee gathering — pilih yang sesuai tujuan." },
    ],
    relatedSlugs: ["bandung-outing-tier-system", "mice-vs-corporate-outing-perbedaan", "justify-outing-budget-to-finance"],
  },

  "cara-pilih-venue-corporate-gathering-bandung": {
    slug: "cara-pilih-venue-corporate-gathering-bandung",
    title: "Cara Pilih Venue Corporate Gathering Bandung — 8 Faktor yang Sering Diabaikan",
    excerpt:
      "Venue yang salah bisa ruin event yang planning-nya sempurna. 8 faktor evaluasi yang HR & GA sering abaikan saat pilih venue gathering Bandung.",
    metaDescription:
      "8 faktor penting pilih venue corporate gathering Bandung yang sering diabaikan — kapasitas real vs paper, akustik, akses, backup option, dan F&B flexibility. Panduan untuk HR & GA.",
    category: "Venue Guide",
    tldr: [
      "Kapasitas tertulis di brosur venue selalu lebih besar dari kapasitas realnya untuk setup corporate (dengan stage, AV, catering island). Minta floor plan.",
      "Akustik buruk adalah deal-breaker untuk sesi formal — tapi sering baru ketahuan di hari H. Kunjungi venue saat event lain berlangsung untuk test.",
      "F&B flexibility (bawa catering sendiri vs harus pakai venue) bisa ngaruh signifikan ke budget. Tanyakan dulu sebelum site visit.",
    ],
    heroImage: IMAGES.packageAnnualGathering,
    publishDate: "2026-05-08",
    readTimeMin: 8,
    author: { name: "Tio Mahesa", role: "Lead Field Operations Manager", initials: "TM" },
    sections: [
      {
        paragraphs: [
          "Venue adalah keputusan yang paling irreversible dalam planning corporate event — begitu deposit terkunci 3 bulan sebelum event, sangat susah pivot. Tapi banyak HR dan GA terburu-buru lock venue hanya berdasarkan foto Instagram atau rekomendasi rekan kerja tanpa site visit yang proper.",
          "8 faktor ini adalah yang paling sering terlewat dalam evaluasi — dan paling sering jadi masalah di hari H.",
        ],
      },
      {
        heading: "1. Kapasitas real, bukan kapasitas di brosur",
        paragraphs: [
          "Brosur venue sering tulis '300 pax standing'. Tapi untuk setup corporate (theater style dengan stage, AV rack, catering island, registrasi counter) kapasitas real bisa turun 30-40%. Venue 300 pax standing = 180-220 pax theater style corporate.",
          "Selalu minta floor plan + tanyakan setup apa yang pernah dilakukan untuk event corporate terakhir mereka.",
        ],
      },
      {
        heading: "2. Akustik dan noise pollution",
        paragraphs: [
          "Plafon rendah, dinding keras, dan layout L-shape adalah resep akustik buruk. Speech dari podium terdengar echoey, peserta di belakang tidak jelas dengar.",
          "Test: kunjungi venue saat event lain (conference atau gathering) sedang berlangsung. Kalau tidak bisa, bawa mic portable dan test di tengah ruangan saat venue kosong.",
        ],
      },
      {
        heading: "3. Akses loading untuk vendor AV dan catering",
        paragraphs: [
          "Vendor AV membawa equipment besar (speaker, LED panel, truss). Catering membawa puluhan box dan peralatan. Kalau loading area sempit atau lift kecil, waktu setup bisa molor 2-4 jam.",
          "Cek: lebar pintu loading, kapasitas lift barang, dan parking untuk kendaraan vendor.",
        ],
      },
      {
        heading: "4. F&B policy — exclusive atau flexible?",
        paragraphs: [
          "Venue exclusive F&B artinya Anda wajib pakai catering mereka (tidak bisa bawa dari luar). Ini tidak selalu buruk — tapi harga F&B venue sering 30-50% lebih mahal dari catering eksternal dengan kualitas setara.",
          "Tanyakan dulu: apakah boleh bawa catering sendiri? Kalau ya, ada corkage fee? Berapa? Hitung total cost comparison sebelum commit.",
        ],
      },
      {
        heading: "5. Backup space untuk cuaca / contingency",
        paragraphs: [
          "Event yang ada outdoor component butuh backup indoor yang jelas. Bukan sekadar 'bisa pindah ke lobby kalau hujan' — tapi designated backup space dengan kapasitas yang cukup dan sudah disepakati di kontrak.",
        ],
        callout: {
          label: "Penting",
          text: "Minta venue untuk confirm backup space secara tertulis di contract. 'Kita bisa atur nanti kalau hujan' adalah jawaban yang tidak acceptable.",
        },
      },
      {
        heading: "6. Sinyal dan konektivitas internet",
        paragraphs: [
          "Untuk event dengan hybrid component, live streaming, atau heavy documentation — test sinyal di dalam ruangan, bukan di luar. Gedung dengan dinding tebal atau basement sering mati sinyal.",
          "Minta dedicated WiFi SSID + password untuk event Anda (bukan shared guest WiFi). Bandwidth shared bisa crash saat 200 peserta connect bersamaan.",
        ],
      },
      {
        heading: "7. Waktu setup dan breakdown yang diizinkan",
        paragraphs: [
          "Setup AV + catering butuh 4-6 jam sebelum event. Breakdown butuh 2-3 jam. Tanyakan: mulai jam berapa vendor boleh masuk? Sampai jam berapa harus keluar? Ada overtime charge kalau melebihi waktu?",
          "Venue yang tight dengan waktu setup sering bikin event mulai terlambat atau tanpa sound check proper.",
        ],
      },
      {
        heading: "8. Track record corporate event, bukan wedding",
        paragraphs: [
          "Venue yang populer untuk wedding punya sensibility yang berbeda dari corporate event — dekorasi, lighting default, F&B presentation, dan service style. Tanyakan berapa persen event mereka adalah corporate vs wedding/personal.",
          "Venue dengan 80% wedding bisa deliver corporate gathering dengan baik — tapi perlu brief yang lebih intensif untuk ensure corporate vibe yang proper.",
        ],
      },
    ],
    internalLinks: [
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Annual corporate gathering dengan kurasi venue sesuai 8 faktor di artikel ini." },
      { href: "/villa-gathering-bandung", label: "Villa Gathering Bandung", description: "Villa private Lembang & Bandung — venue gathering eksklusif dengan kapasitas fleksibel." },
      { href: "/venue-gathering-bandung", label: "Venue Gathering Bandung", description: "Direktori venue gathering Bandung — hotel ballroom, villa cluster, resort premium." },
      { href: "/faq/location", label: "FAQ Lokasi & Venue", description: "8 faktor kritis memilih venue gathering — kapasitas, fasilitas, aksesibilitas, dan budget." },
      { href: "/faq/logistics", label: "FAQ Process & Logistics", description: "Proses booking venue dan koordinasi dengan hotel/resort untuk corporate event." },
    ],
    relatedSlugs: ["bandung-outing-tier-system", "outing-lembang-vs-ciwidey", "indoor-vs-outdoor-corporate-outing"],
    howTo: {
      name: "Cara Memilih Venue Corporate Gathering Bandung",
      description: "8 faktor evaluasi venue yang sering diabaikan saat memilih venue gathering perusahaan di Bandung",
      steps: [
        { name: "Cek kapasitas real, bukan kapasitas di brosur", text: "Minta floor plan venue dan tanyakan setup event corporate terakhir. Kapasitas tertulis di brosur biasanya 30-40% lebih besar dari kapasitas real untuk setup corporate dengan stage, AV, dan catering island." },
        { name: "Test akustik ruangan sebelum booking", text: "Kunjungi venue saat event lain berlangsung untuk test akustik. Plafon rendah, dinding keras, dan layout L-shape adalah resep akustik buruk yang baru ketahuan di hari H." },
        { name: "Periksa akses loading AV dan katering", text: "Cek lebar pintu loading, kapasitas lift barang, dan parkir kendaraan vendor. Akses loading yang sempit bisa membuat setup molor 2-4 jam." },
        { name: "Klarifikasi kebijakan F&B", text: "Tanyakan apakah boleh bawa katering sendiri atau harus pakai venue (exclusive F&B). Hitung perbandingan biaya total sebelum commit — harga F&B venue sering 30-50% lebih mahal." },
        { name: "Konfirmasi backup space untuk contingency", text: "Pastikan ada designated indoor backup space dengan kapasitas cukup, dikonfirmasi secara tertulis di kontrak. 'Bisa diatur nanti kalau hujan' bukan jawaban yang acceptable." },
        { name: "Test sinyal dan bandwidth internet", text: "Test sinyal di dalam ruangan (bukan di luar), terutama untuk event hybrid. Minta dedicated WiFi SSID — bukan shared guest WiFi yang bisa crash saat 200 peserta connect bersamaan." },
        { name: "Verifikasi waktu setup dan breakdown yang diizinkan", text: "Tanyakan jam berapa vendor boleh masuk untuk setup dan sampai jam berapa harus selesai breakdown. Setup AV butuh 4-6 jam sebelum event." },
        { name: "Periksa track record event corporate mereka", text: "Tanyakan berapa persen event di venue ini adalah corporate vs wedding/personal. Venue yang dominan wedding butuh brief lebih intensif untuk deliver corporate vibe yang proper." },
      ],
    },
  },
  "cara-membuat-brief-event-organizer": {
    slug: "cara-membuat-brief-event-organizer",
    title: "Cara Membuat Brief Event Organizer Corporate — Template & 10 Poin Wajib",
    excerpt:
      "Brief yang buruk = proposal yang salah = event yang generic. Panduan lengkap membuat brief EO corporate yang efektif — 10 poin wajib, template siap pakai, dan kesalahan fatal yang harus dihindari HR.",
    metaDescription:
      "Template brief event organizer corporate Indonesia — 10 poin wajib yang harus ada: objective, pax, budget, constraint, output. Panduan untuk HR manager dan procurement.",
    category: "Planning Guide",
    tldr: [
      "80% brief yang masuk ke EO profesional tidak punya clear objective — hasilnya proposal generic yang tidak address real need.",
      "10 poin wajib dalam brief: objective, pax + demografi, tanggal + durasi, budget range, lokasi preferensi, constraint kritis, format preferensi, output yang diharapkan, PIC kontak, deadline proposal.",
      "Brief yang baik menghemat 2-3 putaran revisi dan mempercepat approval internal karena proposal langsung on-target.",
      "15 menit briefing call dengan planner yang right akan menghasilkan proposal yang lebih akurat dari 2 halaman brief tertulis.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-16",
    readTimeMin: 8,
    author: { name: "Sinta Rahmadhani", role: "Head of Client Strategy", initials: "SR" },
    sections: [
      {
        paragraphs: [
          "Dari ratusan proposal yang tim kami buat untuk corporate client, pola ini konsisten: brief yang detail dan clear → proposal langsung on-target → approval cepat → event outcome-driven. Brief yang vague atau tidak lengkap → proposal generic → revisi 2-3 putaran → timeline mepet → event yang 'yah begitu aja'.",
          "Brief bukan formalitas. Brief adalah dokumen pertama yang menentukan apakah EO yang Anda ajak kerja sama benar-benar memahami kebutuhan Anda — atau hanya akan kirim template paket standar.",
        ],
      },
      {
        heading: "10 Poin Wajib dalam Brief EO Corporate",
        paragraphs: [
          "Berikut 10 poin yang harus ada di setiap brief corporate event. Jika salah satu tidak bisa dijawab saat menulis brief, itu sinyal bahwa scope internal belum final — dan lebih baik diselesaikan dulu sebelum brief ke EO.",
        ],
        numbered: [
          "Objective event: Apa yang ingin dicapai? Annual bonding? Post-merger cultural integration? Leadership alignment? Reward program? Semakin spesifik, semakin tepat design eventnya. 'Refreshing bareng' bukan objective.",
          "Jumlah peserta (pax) + demografi: Berapa orang, kisaran usia, gender split, generasi dominan (Gen-Z, Millennial, Gen-X)? Ada peserta dengan keterbatasan mobilitas? Ini menentukan format aktivitas.",
          "Tanggal event + durasi: Tanggal preferred dan alternatif. 1 hari, 2D1N, atau 3D2N? Ada tanggal yang tidak bisa (hari besar, sprint period, event internal lain)?",
          "Budget range (bukan angka pasti): Cantumkan range yang realistis — misal Rp 1,5–2,5 jt/pax all-in. EO yang profesional tidak akan pitching di luar range Anda. Range lebih jujur dari 'budget sesuai proposal terbaik'.",
          "Lokasi preferensi: Bandung kota, Lembang, Ciwidey, atau terbuka? Apakah transport dari Jakarta perlu di-include? Jauh dekat venue dari kantor memengaruhi cost dan kehadiran.",
          "Constraint kritis: Dietary restrictions (halal-only, vegetarian), mobilitas (ada peserta wheelchair), kebutuhan khusus (silent room untuk ibadah, nursing room), atau policy company (tidak boleh ada alkohol, tidak boleh overnight).",
          "Format preferensi: Indoor atau outdoor? Hotel ballroom, villa private, atau resort? Full outbound atau semi-formal? Apakah ada agenda ceremony (awarding, kick-off, sambutan direksi)?",
          "Output/deliverable yang diharapkan: Apa yang Anda terima dari EO? Sekadar execute, atau include documentation (foto/video), post-event report, feedback survey, dan ROI measurement?",
          "PIC dari sisi klien: Siapa decision maker (approval budget)? Siapa contact person teknis sehari-hari? Siapa reviewer proposal? Kejelasan ini mempercepat iterasi.",
          "Deadline proposal: Kapan paling lambat proposal harus di-tangan untuk review? Mundur dari approval timeline internal Anda — jangan minta proposal hari ini untuk approval besok.",
        ],
      },
      {
        heading: "Template Brief — Copy & Pakai",
        paragraphs: [
          "Tidak perlu format yang fancy. Isi poin berikut dan kirim via WhatsApp atau email — EO yang profesional bisa langsung kerja dari sini:",
        ],
        callout: {
          label: "Template",
          text: "Perusahaan: [nama] | Industri: [industri] | PIC: [nama, jabatan, kontak] | Objective: [apa yang ingin dicapai] | Pax: [jumlah] | Demografi: [usia range, gender split] | Tanggal: [preferred + alternatif] | Durasi: [1 hari / 2D1N / 3D2N] | Lokasi: [Bandung / Lembang / Ciwidey / terbuka] | Budget: [Rp X – Y jt / pax] | Format: [outdoor / indoor / villa / hotel] | Constraint: [dietary, mobilitas, policy] | Output: [execute only / include dokumentasi / post-event report] | Deadline proposal: [tanggal]",
        },
      },
      {
        heading: "3 Kesalahan Fatal yang Sering Terjadi",
        paragraphs: [
          "Setelah ratusan brief masuk ke inbox kami, tiga kesalahan ini paling sering muncul:",
        ],
        bullets: [
          "Brief tanpa objective — 'Kami mau outing' bukan objective. EO yang bagus akan tanya balik, tapi yang generic langsung kirim paket katalog. Hasil? Event yang tidak address real need tim Anda.",
          "Budget 'sesuai proposal terbaik' — EO tidak tahu harus design di range mana. Hasilnya 2 proposal: satu super premium (yang pasti di-reject) dan satu super budget (yang bikin EO rugi jika di-approve). Cantumkan range nyata.",
          "PIC tidak clear — brief dari HR staff, approval dari HR Director yang berbeda view, konfirmasi dari GA Manager. Tanpa decision chain yang clear, revisi bisa muter-muter 2 minggu.",
        ],
      },
      {
        heading: "Brief via Call vs Brief Tertulis",
        paragraphs: [
          "Brief tertulis bagus untuk mendokumentasikan scope dan alignment internal. Tapi untuk event yang kompleks (200+ pax, multi-day, cross-department), brief tertulis alone tidak cukup.",
          "15–30 menit discovery call dengan senior planner yang experienced jauh lebih efektif dari 2 halaman brief tertulis. Di call itu, planner yang tepat akan ask the right questions — hal-hal yang Anda sendiri belum kepikiran untuk dicantumkan di brief.",
          "Rekomendasi kami: kirim brief tertulis sebagai starting point, lalu follow up dengan discovery call sebelum EO mengerjakan proposal. Ini standar kerja kami untuk semua client — bukan luxury, tapi prerequisite untuk proposal yang on-target.",
        ],
        callout: {
          label: "Waktu investasi",
          text: "15 menit briefing call awal menghemat 2-3 putaran revisi proposal dan rata-rata 1-2 minggu timeline. Untuk event Rp 200-500 jt, itu worth it.",
        },
      },
      {
        heading: "Kapan Brief Boleh Singkat?",
        paragraphs: [
          "Brief super singkat oke jika: (1) Anda sudah pernah event dengan EO yang sama dan hanya butuh recurring event dengan minor adjustment, atau (2) event simple — family gathering 1 hari, < 50 pax, satu lokasi, satu aktivitas utama, budget sudah fix.",
          "Selain dua kondisi itu, investasikan waktu untuk brief yang proper. Event corporate Rp 100-500 jt+ tidak layak dapat brief 3 baris.",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Start dari brief yang tepat untuk outing kantor yang outcome-driven." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Brief corporate gathering annual — objective, pax, format, output." },
      { href: "/proposal/request", label: "Request Proposal", description: "Kirim brief Anda — kami respond dalam 24 jam dengan proposal yang relevant." },
      { href: "/faq/budget", label: "FAQ Budget & Pricing", description: "Panduan budget range realistic untuk berbagai format corporate event." },
      { href: "/methodology", label: "Methodology Kami", description: "Discovery Brief adalah step pertama dari 3 framework kami — sebelum design dan execute." },
    ],
    relatedSlugs: ["5-pillar-corporate-outing-design", "checklist-vendor-event-organizer-corporate", "justify-outing-budget-to-finance"],
    howTo: {
      name: "Cara Membuat Brief Event Organizer Corporate yang Efektif",
      description: "5 langkah membuat brief EO corporate yang menghasilkan proposal on-target dan meminimalkan revisi.",
      steps: [
        { name: "Tentukan objective event terlebih dahulu", text: "Sebelum menulis brief, jawab pertanyaan ini: apa perubahan nyata yang ingin Anda lihat pada tim setelah event? Bonding pasca-merger, alignment strategi, engagement boost, atau reward? Objective yang specific menghasilkan design yang specific." },
        { name: "Isi 10 poin wajib brief", text: "Lengkapi 10 poin: objective, pax + demografi, tanggal + durasi, budget range, lokasi, constraint kritis (dietary, mobilitas, policy), format preferensi, output yang diharapkan, PIC decision chain, dan deadline proposal. Jangan kirim brief yang bolong salah satu poin ini." },
        { name: "Validasi brief dengan stakeholder internal", text: "Sebelum kirim ke EO, align dengan HR Director dan Finance untuk budget range dan approval criteria. Brief yang belum di-approve internal akan menyebabkan scope creep di tengah proses yang membuang waktu semua pihak." },
        { name: "Kirim brief dan jadwalkan discovery call", text: "Kirim brief tertulis sebagai starting point, lalu minta jadwal discovery call 15–30 menit dengan senior planner EO. Call ini bukan sales pitch — ini sesi untuk planner mengajukan pertanyaan yang lebih dalam tentang kebutuhan Anda." },
        { name: "Evaluasi proposal berdasarkan brief, bukan harga saja", text: "Saat proposal masuk, cek dulu: apakah proposal menjawab objective di brief Anda? Apakah design activity address audience Anda? Proposal termurah yang tidak address objective Anda lebih mahal dari proposal premium yang on-target." },
      ],
    },
  },
  "contoh-rundown-outing-kantor-2d1n": {
    slug: "contoh-rundown-outing-kantor-2d1n",
    title: "Contoh Rundown Outing Kantor 2D1N — Template + Tips Logistik Menginap",
    excerpt:
      "3 template rundown outing kantor 2 hari 1 malam — standard outdoor, bonding deep dengan fasilitasi malam, dan premium villa. Lengkap dengan breakdown waktu, tips overnight, dan checklist H-1.",
    metaDescription:
      "Contoh rundown outing kantor 2D1N siap pakai 2026 — 3 format: standard, bonding deep, premium villa. Jadwal lengkap dengan timing, overnight logistics, dan tips hari H untuk HR.",
    category: "Planning Guide",
    tldr: [
      "2D1N adalah format terpopuler corporate outing Indonesia — cukup dalam untuk impact, tidak terlalu panjang untuk approval management.",
      "3 template: standard outdoor (80-200 pax, resort/hotel), bonding deep (dengan sesi fasilitasi malam), dan premium villa (40-80 pax, private).",
      "Overnight logistics yang sering terlupakan: rooming list, check-in timing, late arrival procedure, dan overnight emergency contact.",
      "Hari 2 dimulai lebih lambat dari hari 1 — peserta perlu recovery time setelah aktivitas hari pertama. Jadwal padat di hari 2 adalah kesalahan umum.",
    ],
    heroImage: IMAGES.heroMain,
    publishDate: "2026-05-16",
    readTimeMin: 10,
    author: { name: "Tio Mahesa", role: "Lead Field Operations Manager", initials: "TM" },
    sections: [
      {
        paragraphs: [
          "2 hari 1 malam adalah format paling banyak di-request untuk corporate outing di Indonesia. Lebih panjang dari 1 hari sehingga bisa deliver experience yang lebih meaningful. Tidak butuh 2 malam penginapan yang bikin persetujuan internal lebih rumit. Sweet spot antara impact dan practical.",
          "3 template ini kami design dari ratusan event 2D1N yang kami kelola — dari resort populer di Lembang hingga villa private di Ciwidey. Setiap format bisa dikustomisasi ke kebutuhan spesifik tim Anda.",
        ],
      },
      {
        heading: "Format A: Standard Outdoor 2D1N (80–200 pax, Resort/Hotel)",
        paragraphs: [
          "Format paling populer untuk medium-size corporate group. Cocok untuk departemen besar atau multi-departemen. Venue: resort atau hotel dengan fasilitas outdoor.",
        ],
        callout: {
          label: "Hari 1",
          text: "07.30 Kumpul + keberangkatan konvoi | 10.00 Arrival venue, registrasi, welcome lunch | 13.00 Opening ceremony + ice breaker | 14.00 Outbound sesi 1 (outdoor challenge multi-station) | 16.00 Coffee break + mini games | 16.30 Free time (check-in, kolam renang) | 19.00 Gala dinner + awarding + hiburan | 21.00 Malam bebas (api unggun, bonding informal)",
        },
      },
      {
        paragraphs: [""],
        callout: {
          label: "Hari 2",
          text: "07.00 Sarapan | 08.30 Senam pagi + energizer | 09.30 Outbound sesi 2 (team challenge, lebih kompetitif dari sesi 1) | 11.30 Sharing & closing ceremony | 12.00 Makan siang | 13.00 Check-out + loading | 14.00 Keberangkatan kembali",
        },
      },
      {
        heading: "Format B: Bonding Deep 2D1N (dengan Sesi Malam Terfasilitasi)",
        paragraphs: [
          "Format untuk objective yang lebih dalam — post-merger integration, trust building lintas divisi, atau nilai-nilai perusahaan. Menggunakan malam hari untuk sesi fasilitasi yang lebih intimate dibanding suasana siang.",
        ],
        callout: {
          label: "Hari 1",
          text: "07.30 Keberangkatan | 09.30 Arrival + welcome brief | 10.00 Modul 1: Appreciative inquiry (tiap peserta share strength rekan) | 12.00 Makan siang | 13.00 Energizer post-lunch | 13.30 Modul 2: Challenge outdoor berbasis kerja tim | 15.30 Break + check-in kamar | 19.30 Sesi malam: facilitated values dialogue (kecil, 8–12 orang per kelompok) | 21.00 Informal networking + snack malam",
        },
      },
      {
        paragraphs: [""],
        callout: {
          label: "Hari 2",
          text: "07.00 Sarapan bebas | 08.30 Morning reflection (15 menit, tiap kelompok share 1 insight dari kemarin) | 09.00 Modul 3: Co-design session (tiap tim design 1 practical action untuk 30 hari ke depan) | 11.00 Plenary debrief + commitment board | 12.00 Makan siang | 13.00 Check-out + keberangkatan",
        },
      },
      {
        heading: "Format C: Premium Villa 2D1N (40–80 pax, Private)",
        paragraphs: [
          "Format untuk tim kecil atau senior leadership yang prioritasnya intimacy dan exclusivity. Budget lebih tinggi (Rp 3.5–6 jt/pax) tapi experience-nya jauh lebih personal.",
        ],
        callout: {
          label: "Hari 1",
          text: "09.00 Keberangkatan dengan transport premium | 11.00 Arrival villa private + property tour + welcome drink | 12.00 Makan siang fine dining | 13.30 Activity eksklusif (cooking class, wine tasting, atau collaborative art) | 16.00 Free time (kolam renang, spa add-on) | 19.30 Private gala dinner di villa + CEO sharing session informal | 21.30 Malam bebas",
        },
      },
      {
        paragraphs: [""],
        callout: {
          label: "Hari 2",
          text: "07.30 Sarapan santai + morning walk | 09.30 Strategic reflection session (facilitated atau self-led) | 11.00 Leisure time terakhir | 12.00 Makan siang | 13.00 Foto grup profesional + farewell | 13.30 Keberangkatan",
        },
      },
      {
        heading: "Logistik Overnight yang Sering Terlupakan",
        paragraphs: [
          "Perbedaan utama 2D1N vs 1D bukan hanya waktu — tapi logistik overnight yang kalau tidak disiapkan bisa jadi masalah di hari H:",
        ],
        bullets: [
          "Rooming list final — siapa sekamar dengan siapa, preferensi smoking/non-smoking, request twin bed vs double. Kirim ke venue H-5, konfirmasi ulang H-1.",
          "Check-in timing coordination — pastikan kamar ready saat peserta tiba. Kalau tidak bisa check-in awal, siapkan designated area untuk titip tas.",
          "Late arrival procedure — ada peserta yang tidak bisa berangkat pagi (tugas mendadak, kondisi keluarga). SOP late arrival: kontak PIC, pickup point alternatif, atau langsung ke venue.",
          "Overnight emergency contact — nomor PIC vendor yang bisa dihubungi malam hari. Bukan hotline kantor yang tutup jam 17.00.",
          "Checkout logistics — siapkan area pengumpulan tas sebelum breakfast. Checkout standar hotel jam 12.00, tapi event selesai jam 13.00 — negosiasikan late checkout atau luggage storage.",
          "Valuables reminder — brief peserta untuk tidak membawa barang berharga berlebihan. Peserta bawa laptop untuk bekerja malam = security risk di venue sharing.",
        ],
      },
      {
        heading: "Kesalahan Umum Rundown 2D1N",
        paragraphs: ["Lima kesalahan yang paling sering kami lihat:"],
        bullets: [
          "Hari 2 sepadat hari 1 — peserta fisik kelelahan setelah outbound hari 1. Hari 2 harus lebih ringan dari hari 1, bukan sebaliknya.",
          "Tidak ada buffer antar sesi — 2D1N punya lebih banyak transisi (outdoor ke indoor, makan ke aktivitas). Setiap transisi butuh buffer 15-20 menit.",
          "Gala dinner terlalu panjang — awarding + hiburan yang molor sampai jam 23.00 membuat peserta kelelahan untuk hari 2. Cap dinner + acara malam di jam 21.30.",
          "Tidak ada free time — peserta butuh waktu untuk check-in, ganti baju, dan personal recovery. Free time bukan 'wasted time'.",
          "Foto grup setelah check-out — logistik check-out (loading koper, loading bus) berebutan dengan foto grup. Jadwalkan foto grup sebelum check-out, bukan sesudahnya.",
        ],
      },
    ],
    internalLinks: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Panduan lengkap corporate outing Bandung — dari planning hingga eksekusi 2D1N." },
      { href: "/villa-gathering-bandung", label: "Villa Gathering Bandung", description: "Villa private Lembang & Bandung untuk format premium 2D1N." },
      { href: "/company-retreat-bandung", label: "Company Retreat Bandung", description: "Program retreat 2D1N atau 3D2N dengan fokus strategic planning." },
      { href: "/insights/contoh-rundown-outing-kantor-1-hari", label: "Rundown 1 Hari", description: "Template rundown outing kantor format 1 hari jika budget lebih terbatas." },
      { href: "/faq/logistics", label: "FAQ Logistik", description: "Pertanyaan seputar koordinasi vendor, transport, dan overnight logistics." },
    ],
    relatedSlugs: ["contoh-rundown-outing-kantor-1-hari", "5-pillar-corporate-outing-design", "outing-lembang-vs-ciwidey"],
    howTo: {
      name: "Cara Membuat Rundown Outing Kantor 2D1N yang Efektif",
      description: "6 langkah membuat rundown outing kantor 2 hari 1 malam yang profesional dan tereksekusi lancar",
      steps: [
        { name: "Tentukan format 2D1N sesuai objective", text: "Pilih dari 3 format: standard outdoor (80-200 pax), bonding deep (dengan sesi fasilitasi malam), atau premium villa (40-80 pax). Format menentukan venue, vendor, dan budget yang dibutuhkan." },
        { name: "Design Hari 1 lebih padat dari Hari 2", text: "Hari 1 adalah energy peak — jadwalkan main activity dan gala dinner di hari pertama. Hari 2 harus lebih ringan: morning activity sedang, closing session, dan checkout yang tidak terburu-buru." },
        { name: "Kelola overnight logistics", text: "Siapkan rooming list H-5, konfirmasi H-1. Buat SOP late arrival dan overnight emergency contact. Negosiasikan late checkout atau luggage storage untuk hari 2." },
        { name: "Jadwalkan buffer antar semua sesi", text: "2D1N memiliki lebih banyak transisi dibanding 1D — setiap transisi butuh buffer 15-20 menit. Sesi outdoor ke indoor, makan ke aktivitas, dan checkout ke keberangkatan semua perlu waktu transisi." },
        { name: "Brief semua vendor H-7 dan H-1", text: "Kirim rundown final ke venue, katering, fasilitator, dan dokumentasi H-7. Brief ulang H-1. On-site briefing H-0 pagi sebelum peserta tiba." },
        { name: "Siapkan contingency per sesi outdoor", text: "Setiap sesi outdoor harus ada Plan B indoor yang sudah dikonfirmasi dengan venue. Catat di rundown: 'Jika hujan → sesi X dipindah ke [indoor space], PIC: [nama]'." },
      ],
    },
  },
};

export function getAllInsightSlugsStatic(): string[] {
  return Object.keys(INSIGHTS);
}

export function getInsightStatic(slug: string): Insight | undefined {
  return INSIGHTS[slug];
}

export function getInsightsListStatic(): Insight[] {
  return Object.values(INSIGHTS).sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}
