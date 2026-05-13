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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["bandung-outing-tier-system", "justify-outing-budget-to-finance"],
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["5-pillar-corporate-outing-design", "justify-outing-budget-to-finance"],
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["5-pillar-corporate-outing-design", "cross-generational-team-building"],
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["5-pillar-corporate-outing-design", "post-merger-cultural-bonding"],
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["5-pillar-corporate-outing-design", "cross-generational-team-building"],
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["5-pillar-corporate-outing-design", "force-majeure-contingency-corporate-outing", "corporate-outing-theme-selection"],
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
    author: { name: "Senior Planning Team", role: "TourBandung Corporate", initials: "TC" },
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
    relatedSlugs: ["5-pillar-corporate-outing-design", "indoor-vs-outdoor-corporate-outing"],
  },
};

export function getAllInsightSlugs(): string[] {
  return Object.keys(INSIGHTS);
}

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS[slug];
}

export function getInsightsList(): Insight[] {
  return Object.values(INSIGHTS).sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}
