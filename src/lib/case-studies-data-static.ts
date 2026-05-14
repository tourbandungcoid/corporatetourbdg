import { IMAGES } from "@/lib/drive-images";

export type CaseStudy = {
  slug: string;
  industry: string;
  industryLabel: string;
  outcomeHeadline: string;
  shortDescription: string;
  metaDescription: string;
  heroImage: typeof IMAGES.heroMain;
  gallery: (typeof IMAGES.heroMain)[];

  // Snapshot
  pax: string;
  duration: string;
  location: string;
  budgetTier: string;
  serviceSlug: string;

  // Narrative
  challenge: string[];
  approach: string[];
  execution: string[];
  outcome: string[];

  // Metrics (numeric outcomes)
  metrics: { label: string; value: string }[];

  // Testimonial
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };

  // Related
  relatedServiceSlugs: string[];
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  "post-merger-bonding-800-pax": {
    slug: "post-merger-bonding-800-pax",
    industry: "tech",
    industryLabel: "Tech Unicorn",
    outcomeHeadline: "Post-merger bonding untuk 800 tim baru — satu suara dalam 3 hari.",
    shortDescription:
      "Tech unicorn paska akuisisi tim 800 pax butuh cultural integration cepat. 3D2N gathering di Lembang dengan multi-track activity, awarding cross-team, dan strategic alignment session.",
    metaDescription:
      "Case study: post-merger integration 800 pax untuk tech unicorn di Bandung. 3D2N program dengan cultural integration, awarding cross-team, dan strategic alignment.",
    heroImage: IMAGES.caseStudyLarge,
    gallery: [IMAGES.caseStudyLarge, IMAGES.heroMain, IMAGES.groupShot1],
    pax: "800 pax",
    duration: "3D2N",
    location: "Lembang",
    budgetTier: "Premium",
    serviceSlug: "company-gathering",
    challenge: [
      "Dua tim dari perusahaan berbeda paska akuisisi — Tim A 500 orang dari parent company, Tim B 300 orang dari acquired startup. Cultural dynamics sangat berbeda: parent corporate-formal, startup hustle-casual.",
      "HR mendeteksi friksi early signal: communication breakdown lintas departemen baru, ambiguity peran, dan attrition risk di Tim B (acquired startup) yang khawatir budaya akan di-overwrite.",
      "Timeline tight: 6 minggu dari brief ke event. Logistic complex untuk 800 pax, multi-bus dari Jakarta.",
    ],
    approach: [
      "Brief intensif dengan HR Director + COO untuk identify success criteria: bukan bonding casual, tapi structural cultural integration.",
      "Design 3D2N dengan 3 arc: Day 1 cultural exchange (curiosity-driven activity), Day 2 alignment work (parallel track strategy session per fungsi), Day 3 commitment + celebration.",
      "Pick venue cluster Lembang — 2 hotel resort berdekatan untuk lodging, 1 outdoor venue untuk activity day. Coordinate transport 16 bus dari Jakarta + return.",
      "Senior PM dedicated dengan 8 site coordinator on-site. Plus medical standby + dedicated logistic for dietary mapping (halal, vegan, gluten-free).",
    ],
    execution: [
      "Day 1: Arrival, welcome session dengan video founder (parent + acquired) sharing visi gabungan. Cultural exchange activity — peserta dipasangkan cross-team untuk casual conversation.",
      "Day 1 malam: Welcome dinner outdoor dengan booth makanan khas dari masing-masing kota asal. Storytelling circle bonfire — share moments yang shaped career mereka.",
      "Day 2 pagi: Parallel strategy tracks — Engineering, Product, Sales, Operations. Each track 3 jam, mixed leadership dari kedua side untuk facilitate.",
      "Day 2 sore: Activity day — Olympic outbond multi-station, peserta team baru cross-original-company. Closed dengan reflection circle.",
      "Day 3: Awarding cross-team (kategori dirancang yang inclusive untuk both sides). Closing CEO address — commit pada gabungan culture, bukan dominasi salah satu side.",
    ],
    outcome: [
      "Post-event engagement survey: 95% peserta vote event sebagai 'best company event' tahun itu (baseline historic 65%).",
      "6-month retention check: Voluntary attrition di acquired team turun 40% vs pre-merger trajectory.",
      "Cross-team collaboration frequency (HR-measured via project tagging): naik 28% dalam 3 bulan setelah event.",
      "Repeat booking: client kembali book 2 event berikutnya dalam 18 bulan setelahnya.",
    ],
    metrics: [
      { label: "Peserta", value: "800" },
      { label: "Best event vote", value: "95%" },
      { label: "Attrition reduction", value: "40%" },
      { label: "Cross-team collab", value: "+28%" },
    ],
    testimonial: {
      quote:
        "Yang gw appreciate: senior planner dedicated dari briefing sampai event. Bukan rotating freelancer. Komunikasi clean, accountability ada nama.",
      name: "Andini Pratama",
      role: "HR Director",
      company: "Tech Unicorn (anonymized)",
    },
    relatedServiceSlugs: ["company-gathering", "annual-company-trip", "team-building"],
  },

  "annual-gathering-banking-3depts": {
    slug: "annual-gathering-banking-3depts",
    industry: "banking",
    industryLabel: "Banking · BUMN",
    outcomeHeadline:
      "Annual gathering 3 departemen — 92% tim vote 'best event' dalam 5 tahun.",
    shortDescription:
      "BUMN bank dengan 3 departemen di-konsolidasi annual gathering — 120 pax di Ciwidey. Format hybrid: cultural workshop + structured team activity + gala dinner premium.",
    metaDescription:
      "Case study annual gathering 120 pax banking BUMN di Ciwidey. Vote 92% 'best event 5 tahun' dengan hybrid format cultural + activity + gala.",
    heroImage: IMAGES.caseStudyTeamBuilding,
    gallery: [IMAGES.caseStudyTeamBuilding, IMAGES.packageAnnualGathering],
    pax: "120 pax",
    duration: "2D1N",
    location: "Ciwidey",
    budgetTier: "Standard",
    serviceSlug: "corporate-retreat",
    challenge: [
      "BUMN bank dengan 3 departemen (Risk, Operations, Compliance) yang traditionally siloed. HR mau annual gathering yang membawa connection bukan cuma celebration.",
      "Budget constraint dari finance — harus tier standard, bukan premium. Sweet spot 120 pax adalah challenge logistics tersendiri (terlalu kecil untuk hotel ballroom besar, terlalu besar untuk villa single).",
      "Bank context demand premium feel — image-conscious. Tidak mau kelihatan 'murahan' walaupun budget standard.",
    ],
    approach: [
      "Pick venue villa cluster di Ciwidey — 3 villa berdekatan dengan common ballroom area. Premium feel achievable di budget standard.",
      "Design hybrid format: cultural workshop hari 1 (angklung bareng Saung Mang Udjo), structured team activity hari 2 (Olympic outbond cross-departemen), gala dinner traditional Sundanese authentic.",
      "Curate gala dinner — bukan buffet generic, tapi 5-course set menu Sundanese refined dengan plating premium. Cost sama dengan buffet, perceived value 2-3x lipat.",
    ],
    execution: [
      "Day 1: Arrival, cultural session angklung — peserta belajar bareng, 60 min performance circle. Bonding cepat lewat shared learning new skill.",
      "Day 1 dinner: Gala 5-course set menu di area outdoor garden villa. Dress code casual elegant. MC senior bilingual.",
      "Day 1 malam: Bonfire reflection circle — peserta share apa yang mereka pelajari dari departemen lain selama tahun lalu.",
      "Day 2: Olympic outbond cross-departemen. 4 station, rotation 90 menit. Forced cross-team mixing.",
      "Closing: Awarding cross-departemen (kategori dirancang untuk inclusive — bukan cuma 'top performer', tapi 'best collaborator', 'cultural ambassador', etc).",
    ],
    outcome: [
      "Post-event survey: 92% peserta vote 'best event dalam 5 tahun'. Comparison vs previous year hotel ballroom format (vote 73%).",
      "Cross-departemen project initiation dalam 3 bulan setelah event naik 35% (HR-measured).",
      "Repeat booking 2 tahun consecutive setelahnya — client become anchor account untuk kami.",
    ],
    metrics: [
      { label: "Peserta", value: "120" },
      { label: "Best event vote", value: "92%" },
      { label: "Cross-dept project", value: "+35%" },
      { label: "Repeat booking", value: "2 tahun" },
    ],
    testimonial: {
      quote:
        "Banking image-conscious — kami gak mau kelihatan murahan. Vendor ini deliver premium feel tanpa harus jualan ke C-level kami.",
      name: "Dewi Lestari",
      role: "HR Director",
      company: "BUMN Bank Top 5",
    },
    relatedServiceSlugs: ["company-gathering", "team-building", "employee-gathering"],
  },

  "quarterly-strategy-offsite-clevel": {
    slug: "quarterly-strategy-offsite-clevel",
    industry: "fmcg",
    industryLabel: "FMCG · C-Level",
    outcomeHeadline:
      "Quarterly strategy offsite — 24 senior leader, 12 new initiatives lahir.",
    shortDescription:
      "FMCG global Indonesia mengadakan quarterly C-suite strategy offsite 1-day intensive di Bandung kota. Hasil: 12 strategic initiatives di-launch dalam Q berikutnya.",
    metaDescription:
      "Case study executive offsite C-suite FMCG 24 senior leader 1-day intensive. Output: 12 new strategic initiatives diluncurkan dalam Q berikutnya.",
    heroImage: IMAGES.caseStudyExecutive,
    gallery: [IMAGES.caseStudyExecutive, IMAGES.packageExecutiveOffsite],
    pax: "24 pax",
    duration: "1D Intensive",
    location: "Bandung City (heritage villa)",
    budgetTier: "Premium",
    serviceSlug: "executive-offsite",
    challenge: [
      "FMCG global Indonesia operations butuh quarterly alignment C-suite + direct reports. Market context volatile — kompetisi local + international, regulation shift.",
      "Sebelumnya offsite di Jakarta venue hotel — feedback C-level: tidak fokus, banyak interruption (calls, urgent matters). Butuh location yang force disconnect.",
      "Format harus 1-day intensive (bukan multi-day) karena C-level schedule constraint. Need productive 8 jam.",
    ],
    approach: [
      "Pick venue heritage villa Bandung utara — Sundanese architecture, full private, 90 min drive dari Jakarta. Natural setting force disconnect tapi accessible.",
      "Engage certified strategy consultant senior (McKinsey alumni) untuk facilitate. Pre-engagement 1-on-1 dengan masing-masing peserta untuk collect input + concerns confidential.",
      "Design agenda: morning whitespace analysis + competitive landscape, afternoon initiative ideation + prioritization, closing commitment + accountability.",
    ],
    execution: [
      "08:00 — Welcome breakfast outdoor garden villa. Reading pre-read material kalau belum sempat.",
      "09:00-12:00 — Working session 1: Whitespace + competitive landscape analysis. Facilitator-led, peserta input via Post-it methodology.",
      "12:00-13:30 — Working lunch + small group discussion (4 group of 6).",
      "13:30-16:30 — Working session 2: Initiative ideation. 60 candidate ideas → narrowed to 20 → prioritized to 12 actionable.",
      "16:30-18:00 — Commitment + accountability. Setiap initiative di-assign owner + 90-day milestone. Signed document.",
      "18:00 — Closing dinner casual. Discussion off-record.",
    ],
    outcome: [
      "12 strategic initiatives launched dalam Q berikutnya (5 product, 3 operations, 4 market expansion).",
      "8 dari 12 initiatives achieve atau exceed 90-day milestone (67% success rate vs historic 40% untuk strategic initiatives perusahaan).",
      "Repeat: offsite jadi quarterly ritual, kami handle 8 quarter consecutive.",
      "Internal: C-suite alignment score (internal survey) naik dari 6.8 ke 8.4 (out of 10).",
    ],
    metrics: [
      { label: "Senior leaders", value: "24" },
      { label: "New initiatives", value: "12" },
      { label: "90-day success", value: "67%" },
      { label: "Alignment score", value: "+1.6" },
    ],
    testimonial: {
      quote:
        "Setting beda + facilitator quality + zero distraction = productive day. Hasil 12 initiatives biasanya butuh 2-3 quarter terbentuk, sekarang 1 day done.",
      name: "Bagas Wicaksono",
      role: "Country Head",
      company: "FMCG Global Indonesia",
    },
    relatedServiceSlugs: ["executive-offsite", "corporate-retreat", "leadership-camp"],
  },

  "sales-reward-50pax-telco": {
    slug: "sales-reward-50pax-telco",
    industry: "telco",
    industryLabel: "Telco · Sales Reward",
    outcomeHeadline:
      "Sales reward trip 50 top performer — 100% target Q berikutnya dari peserta.",
    shortDescription:
      "Telco provider Indonesia President's Club annual trip — 50 top sales performer ke premium glamping experience di Pangalengan. Recognition + bonding + signal investment di top talent.",
    metaDescription:
      "Case study sales reward trip 50 top performer telco premium glamping experience Pangalengan. 100% peserta hit target Q berikutnya.",
    heroImage: IMAGES.packageGlamping,
    gallery: [IMAGES.packageGlamping, IMAGES.heroMain],
    pax: "50 pax",
    duration: "2D1N",
    location: "Pangalengan (premium glamping)",
    budgetTier: "Premium",
    serviceSlug: "incentive-trip",
    challenge: [
      "Telco provider Indonesia annual President's Club untuk 50 top sales performer. Sebelumnya dipakai hotel bintang 5 di Bali — feedback peserta: 'feels generic, not unique enough'.",
      "Goal HR + Sales Director: experience yang memorable + signal kuat 'kami invest di top talent' yang inspire sales lain di company untuk perform.",
      "Budget premium tier — willing invest, tapi must be tangibly differentiated.",
    ],
    approach: [
      "Recommend glamping premium di Pangalengan — tea plantation view 360°. Unique factor: tidak ada peer telco yang gunakan format ini.",
      "Curate experience hari demi hari: bonfire welcome dengan personal recognition per peserta, sunrise hike + reflection ROI session, outdoor cooking competition team-based.",
      "Custom branded merchandise untuk peserta (jaket premium dengan logo perusahaan + 'President's Club' embroidery).",
      "Dedicated photographer + videographer outdoor specialist untuk capture memorable moments — material untuk internal storytelling subsequent.",
    ],
    execution: [
      "Day 1: Arrival 14:00, check-in tenda safari premium. Welcome refreshment + camp orientation.",
      "Day 1 sore: Outdoor cooking competition (team based, 5 group of 10). Theme Indonesian fusion. Plating + judging.",
      "Day 1 dinner: Premium gala outdoor — chef profesional. Each peserta receive personal recognition speech dari Sales Director (90 detik per orang).",
      "Day 1 malam: Bonfire + storytelling circle. Top performer share 'one moment that defined this year'.",
      "Day 2: 5:30 AM sunrise hike + reflection session. 'What's your ambition for next year' commitment circle.",
      "Day 2 pagi-siang: Closing recognition + commemorative photo profesional + departure 14:00.",
    ],
    outcome: [
      "Post-event NPS dari peserta: 96 (out of 100). Comparison vs Bali trip tahun sebelumnya: 78.",
      "Quarter following the trip: 100% peserta hit atau exceed target. Historical baseline: 72% hit rate.",
      "Inspiration effect: 'I want to be in President's Club next year' mentions di internal survey naik 240% — strong signal investment di top talent terlihat oleh non-attendee.",
      "Client repeat: annual booking dengan kami selama 3 tahun consecutive.",
    ],
    metrics: [
      { label: "Top performers", value: "50" },
      { label: "NPS", value: "96" },
      { label: "Q hit rate", value: "100%" },
      { label: "Aspiration lift", value: "+240%" },
    ],
    testimonial: {
      quote:
        "Yang bikin nempel: peserta balik ke kantor cerita ke tim lain. Itu yang impact ke morale lebih jauh dari trip itu sendiri.",
      name: "Erlangga Wirawan",
      role: "VP Sales",
      company: "Telco Provider Indonesia",
    },
    relatedServiceSlugs: ["incentive-trip", "glamping-corporate", "annual-company-trip"],
  },

  "family-day-400-manufacturing": {
    slug: "family-day-400-manufacturing",
    industry: "manufacturing",
    industryLabel: "Manufacturing · Family Day",
    outcomeHeadline:
      "Family day 400 pax + 600 family member — 0 incident, 98% satisfaction.",
    shortDescription:
      "Manufacturing MNC Family Day Indonesia 1000 attendee total (employee + spouse + anak). Parallel activity tracks, dietary mapping, child-friendly area, dan zero safety incident.",
    metaDescription:
      "Case study family day corporate 400 employee + 600 family member di Bandung. Parallel tracks, child-friendly, 0 safety incident, 98% satisfaction.",
    heroImage: IMAGES.heroMain,
    gallery: [IMAGES.heroMain, IMAGES.groupShot1],
    pax: "400 employee + 600 family",
    duration: "1 hari",
    location: "Lembang (resort + outdoor area)",
    budgetTier: "Standard",
    serviceSlug: "annual-company-trip",
    challenge: [
      "Manufacturing MNC dengan 400 employee Indonesia melaksanakan Family Day annual — keluarga + anak ikut. Total attendee 1000 orang.",
      "Logistic complex: parallel activity tracks (anak-anak vs dewasa), dietary mapping multi-religion (halal majority, vegetarian minority, allergen sensitivities), child safety paramount.",
      "Manufacturing context — safety-first culture. Single incident = HR + management nightmare.",
    ],
    approach: [
      "Pick venue resort Lembang dengan outdoor area luas + dedicated kids zone. 4 zone parallel activity untuk distribusi crowd.",
      "Dedicated kids program team (4 child entertainer profesional, P3K khusus anak, no-loose-watch protocol).",
      "Pre-event survey untuk dietary mapping — granular sampai allergen specific. F&B station multiple (halal main, vegetarian, allergen-free) tanpa stigma queuing.",
      "Safety briefing pre-event + zone marshals 12 orang stationed selama acara. Medical standby + ambulance ready.",
    ],
    execution: [
      "08:00 — Arrival multi-bus dari Jakarta. Welcome refreshment di main outdoor area.",
      "09:00 — Opening + family group photo (drone shot). Activity zone introduction.",
      "09:30-12:00 — Parallel zones running: (1) Kids fun zone — bouncy castle, face painting, magic show. (2) Family bonding outbound Tier 1 light. (3) Family cooking station — kids + parents bareng. (4) Sundanese cultural workshop.",
      "12:00-13:30 — Lunch buffet multi-station — halal main + vegetarian + allergen-free dedicated.",
      "13:30-15:30 — Continue parallel zones with rotation.",
      "15:30 — Closing recognition (employee tenure milestone announcement) + group photo final + door prize draw.",
      "16:30 — Departure.",
    ],
    outcome: [
      "Zero safety incident. Zero medical evacuation. Critical for manufacturing context.",
      "Post-event satisfaction survey: 98% positif (employee + family combined). Notable: 95% family member rate experience tinggi — strong signal company care.",
      "Internal effect: employee retention measurement 6 months after family day — voluntary attrition 8% (industri average 15-22%).",
      "Repeat: annual booking 3 tahun consecutive.",
    ],
    metrics: [
      { label: "Total attendee", value: "1000" },
      { label: "Safety incidents", value: "0" },
      { label: "Satisfaction", value: "98%" },
      { label: "Attrition rate", value: "8%" },
    ],
    testimonial: {
      quote:
        "Manufacturing safety-first. Zero incident untuk 1000 orang dalam 1 hari itu deliverable yang sebenarnya hard. Kami appreciate.",
      name: "Fitri Hapsari",
      role: "HR Manager",
      company: "Manufacturing MNC",
    },
    relatedServiceSlugs: ["annual-company-trip", "employee-gathering", "company-gathering"],
  },

  "leadership-camp-25-banking": {
    slug: "leadership-camp-25-banking",
    industry: "banking",
    industryLabel: "Private Banking · Leadership",
    outcomeHeadline:
      "Leadership camp 25 emerging leader — 360-feedback delta +28% dalam 6 bulan.",
    shortDescription:
      "Private bank annual leadership development cohort 25 emerging leader. 3D2N retreat di Lembang dengan certified executive coach, 5 framework, dan 360-feedback integration.",
    metaDescription:
      "Case study leadership camp 25 emerging leader private banking. 3D2N retreat dengan certified coach, 5 framework. 360-feedback delta +28% dalam 6 bulan.",
    heroImage: IMAGES.caseStudyExecutive,
    gallery: [IMAGES.caseStudyExecutive, IMAGES.packageExecutiveOffsite],
    pax: "25 pax",
    duration: "3D2N",
    location: "Lembang (premium resort)",
    budgetTier: "Bespoke",
    serviceSlug: "leadership-camp",
    challenge: [
      "Private bank Indonesia merekrut 25 emerging leader (Manager-level menuju Senior Manager) untuk 12-month leadership development program. Leadership camp adalah anchor program-nya.",
      "Demand high quality: senior bankers tidak akan tolerate generic 'team building' fluff. Need substantive content + measurable outcome.",
      "Cohort already busy — only 3 hari yang feasible untuk lock semua schedule.",
    ],
    approach: [
      "Engage certified executive coach senior (ICF MCC level) untuk facilitate. Pre-engagement 1-on-1 dengan setiap peserta untuk collect baseline + personal aspiration.",
      "Administer 360-feedback assessment 8 minggu sebelum camp. Aggregate report personalized per peserta. Pre-camp 1-hour debrief dengan coach.",
      "Curriculum design: Day 1 self-awareness (DiSC + 360 debrief), Day 2 framework deep-dive (3 dari 5 framework — Adaptive, Situational, Authentic), Day 3 integration + IDP finalization + peer coaching setup.",
    ],
    execution: [
      "Pre-camp (8-2 minggu sebelumnya): 360 admin + personal debrief + pre-read material distribution.",
      "Day 1: Arrival + opening dinner with table dialogue prompts. Foundation session — psychological safety + ground rules.",
      "Day 2: Deep methodology — Adaptive Leadership working session (2.5 jam), Situational Leadership (2 jam), application case study afternoon. Group dinner with fishbowl conversation format.",
      "Day 3 pagi: Authentic Leadership session. IDP finalization individual. Peer coaching pair setup (each paired untuk 6-month commitment).",
      "Day 3 siang: Closing commitment circle — each peserta articulate public commitment. Closing lunch.",
    ],
    outcome: [
      "6-month re-administration 360 — aggregate delta +28% pada metrics utama (peer perception, communication quality, decision-making confidence).",
      "Individual Development Plan progress (peserta self-report 90-day): 76% peserta complete minimum 70% IDP milestones.",
      "Peer coaching engagement: 92% pair tetap consistent monthly call 6 month later — high retention untuk peer coaching program.",
      "Internal effect: 6 dari 25 peserta dipromote ke Senior Manager dalam 12 bulan (24% promotion rate vs historic 12%).",
    ],
    metrics: [
      { label: "Cohort size", value: "25" },
      { label: "360 delta", value: "+28%" },
      { label: "IDP completion", value: "76%" },
      { label: "Promotion rate", value: "24%" },
    ],
    testimonial: {
      quote:
        "Substansi-nya nyata. Senior banker yang biasanya skeptis vs leadership program — semua confirm value setelah 6 bulan. Itu yang matter.",
      name: "Citra Sari",
      role: "Head of Talent Development",
      company: "Private Bank Indonesia",
    },
    relatedServiceSlugs: ["leadership-camp", "executive-offsite", "corporate-retreat"],
  },

  "mice-conference-fintech-500pax": {
    slug: "mice-conference-fintech-500pax",
    industry: "fintech",
    industryLabel: "Fintech · MICE Conference",
    outcomeHeadline:
      "Annual dealer conference 500 pax fintech — full hybrid production, zero technical glitch.",
    shortDescription:
      "Fintech platform Indonesia annual dealer & partner conference 500 pax. 2D1N full hybrid — live streaming ke 800 remote attendees, 5 breakout, awarding gala.",
    metaDescription:
      "Case study MICE conference fintech 500 pax Bandung — hybrid production, live streaming 800 remote attendees, 5 breakout room, awarding gala. Zero technical issue.",
    heroImage: IMAGES.caseStudyLarge,
    gallery: [IMAGES.caseStudyLarge, IMAGES.heroMain],
    pax: "500 pax onsite + 800 remote",
    duration: "2D1N",
    location: "Padma Hotel Lembang",
    budgetTier: "Premium",
    serviceSlug: "mice",
    challenge: [
      "Fintech yang berkembang pesat perlu annual dealer conference untuk align 500 dealer onsite + 800 remote attendees di 12 kota. Format conference hybrid pertama kali mereka — belum ada template internal.",
      "Demand teknis tinggi: 5 track breakout paralel, live streaming multi-channel (YouTube + Zoom + in-house platform), simultaneous translation untuk 1 sesi dengan pembicara asing.",
      "Awarding gala malam hari untuk 150 dealer terpilih — recognition ceremony yang harus premium, bukan sekadar foto panggung.",
      "Timeline 8 minggu dari brief ke event. Budget tight relative ke scope.",
    ],
    approach: [
      "Dedicated technical director assigned untuk scope seluruh AV + streaming infrastructure. Pre-event site survey 2x di Padma Hotel untuk map WiFi coverage + backup fiber planning.",
      "Design 5 breakout room setup yang bisa streaming independent — masing-masing dengan encoder, mic system, dan operator dedicated.",
      "Hybrid platform recommendation: custom Airmeet setup untuk remote attendees dengan Q&A, polling, dan networking feature. Training remote attendees H-3.",
      "Awarding night design: custom LED backdrop dengan fintech branding, trophy design 150 pcs custom, MC bilingual (Indonesia + English), plus video bumper per kategori award (12 kategori).",
    ],
    execution: [
      "D-1 (setup day): tim 22 orang — AV, dekorasi, catering coordination, streaming test, dan rehearsal MC. Full run-through 19.00-21.00 malam.",
      "Day 1 pagi: Registration onsite + remote login check. Keynote opening CEO — live ke semua channel simultaneously. Q1 zero technical issue.",
      "Day 1 siang: 5 track parallel breakout (Dealer Growth, Product Update, Risk Management, Operations Excellence, Partner Ecosystem). 100 pax per track onsite + remote.",
      "Day 1 malam: Awarding gala dinner. 150 dealer terpilih + seluruh peserta onsite. Ceremonial hybrid — remote attendees bisa lihat live + react via platform.",
      "Day 2: Plenary session — Q&A live + product roadmap. Closing. Networking lunch. Checkout.",
    ],
    outcome: [
      "Streaming reliability: 99.1% uptime selama 14 jam streaming — zero major technical glitch meski WiFi venue di-stress test 1.300 concurrent device.",
      "Remote attendance rate: 88% dari 800 registered remote attendees aktif sepanjang conference (benchmark industri: 60-70%).",
      "Awarding completion: 150 award di-deliver on-time dengan ceremony rata-rata 2 menit/pemenang — smooth, tidak bertele-tele.",
      "Client NPS: 9.2/10 dari post-event survey internal client. Immediate re-book untuk conference tahun berikutnya.",
    ],
    metrics: [
      { label: "Onsite pax", value: "500" },
      { label: "Remote attendees", value: "800" },
      { label: "Streaming uptime", value: "99.1%" },
      { label: "Client NPS", value: "9.2/10" },
    ],
    testimonial: {
      quote:
        "Ini pertama kali kami hybrid conference skala ini. Yang bikin tenang: ada technical director dedicated yang bisa kami telpon kapan saja. Tidak ada 'akan kami cek dulu' — semua ada jawaban.",
      name: "Rangga Putra",
      role: "Head of Dealer Engagement",
      company: "Fintech Platform Indonesia",
    },
    relatedServiceSlugs: ["mice", "annual-company-trip", "company-gathering"],
  },

  "incentive-trip-telco-bali-80pax": {
    slug: "incentive-trip-telco-bali-80pax",
    industry: "telco",
    industryLabel: "Telco · Incentive Trip",
    outcomeHeadline:
      "President's Club incentive trip Bali 80 top performer — repeat quota 94% tahun berikutnya.",
    shortDescription:
      "Telco nasional annual President's Club program untuk 80 top performer sales. 4D3N fully bespoke Bali — private villa, recognition ceremony, curated experience, concierge service.",
    metaDescription:
      "Case study incentive trip Bali 80 top performer telco — 4D3N President's Club program. Private villa, recognition ceremony, curated experience. Repeat quota 94% tahun berikutnya.",
    heroImage: IMAGES.packageGlamping,
    gallery: [IMAGES.packageGlamping, IMAGES.caseStudyExecutive],
    pax: "80 pax",
    duration: "4D3N",
    location: "Bali (private villa cluster)",
    budgetTier: "Bespoke",
    serviceSlug: "incentive-trip",
    challenge: [
      "Telco terbesar Indonesia punya President's Club program sejak 2019 — tapi 2 tahun terakhir satisfaction peserta turun. Feedback: 'terasa seperti tour biasa, tidak ada yang special.'",
      "Target 80 top performer paling high-value di organisasi. Mereka bisa compare dengan program competitor. Kalau tidak memorable, attrition risk ke telco lain tinggi.",
      "Budget ada, tapi harus terasa exclusive dan personalised — bukan sekadar 4D3N Bali generic.",
      "Recognition ceremony harus meaningful, bukan sekedar foto naik panggung.",
    ],
    approach: [
      "Pre-trip profiling: 80 peserta diminta mengisi micro-survey (adventure preference, dietary, personal interest, dan 1 aspiration experience yang belum pernah dicoba). Data ini jadi basis personalisasi.",
      "Venue: private villa cluster di Canggu — 8 villa yang connected, exclusive untuk grup ini saja. Zero shared space dengan tamu lain.",
      "Experience design: bukan paket Bali generic (Tanah Lot, Uluwatu, Ubud). Setiap hari punya curated experience: hari 1 welcome ceremony sunset Jimbaran, hari 2 private cooking class dengan chef Bali Aga, hari 3 optional track (surf lesson / private golf / wellness retreat).",
      "Recognition ceremony: malam day 3 — formal awards dengan storytelling per pemenang (bukan sekadar bacain nama). Video tribute 90 detik per winner kategori. Trophy custom dengan nama + personal achievement.",
    ],
    execution: [
      "Airport meet-and-greet dengan concierge dedicated — tidak ada queue atau uncertainty untuk peserta.",
      "Day 1: Check-in private villa, welcome cocktail sunset di Jimbaran private beach, dinner seafood premium, opening ceremony informal oleh CEO yang hadir langsung.",
      "Day 2: Morning yoga (opt-in), breakfast di villa, private cooking class Balinese cuisine, afternoon leisure, spa optional.",
      "Day 3: Optional tracks pagi (surfing di Canggu, private golf di Nirwana, atau wellness program). Siang: leisure + persiapan gala malam. Malam: President's Club Recognition Ceremony — awarding formal, standing ovation tradition, photo book per winner.",
      "Day 4: Breakfast farewell di villa, personalized gift box per peserta (curated based on pre-trip profiling), airport transfer.",
    ],
    outcome: [
      "Post-trip satisfaction: 97/100 average score — tertinggi sepanjang history President's Club program.",
      "Repeat quota achievement: tahun berikutnya, 94% dari 80 peserta achieve quota untuk qualify ke program lagi (vs 71% rate sebelum program ini).",
      "Internal referral: 12 peserta actively recruit talent yang mereka tahu ke perusahaan dengan menyebut 'President's Club' sebagai benefit nyata.",
      "CEO endorsement: CEO perusahaan minta program ini di-replicate untuk regional dealer incentive program.",
    ],
    metrics: [
      { label: "Peserta", value: "80" },
      { label: "Satisfaction score", value: "97/100" },
      { label: "Repeat quota rate", value: "94%" },
      { label: "Internal referral", value: "12" },
    ],
    testimonial: {
      quote:
        "Tahun lalu peserta saya bilang 'ya seru lah Bali'. Tahun ini mereka bilang 'itu program terbaik yang pernah aku dapat dari perusahaan manapun.' Itu perbedaannya.",
      name: "Hendra Kurniawan",
      role: "VP Sales Excellence",
      company: "Telco Nasional Indonesia",
    },
    relatedServiceSlugs: ["incentive-trip", "executive-offsite", "company-gathering"],
  },
};

export function getAllCaseStudySlugsStatic(): string[] {
  return Object.keys(CASE_STUDIES);
}

export function getCaseStudyStatic(slug: string): CaseStudy | undefined {
  return CASE_STUDIES[slug];
}

export function getCaseStudiesListStatic(): CaseStudy[] {
  return Object.values(CASE_STUDIES);
}
