export type FaqQ = {
  question: string;
  answer: string;
  /** Optional longer detail rendered below the snippet-friendly answer */
  detail?: string;
};

export type FaqCategory = {
  slug: string;
  title: string;
  intro: string;
  metaDescription: string;
  eyebrow: string;
  questions: FaqQ[];
};

const CATEGORIES: Record<string, FaqCategory> = {
  budget: {
    slug: "budget",
    title: "Budget & Investment FAQ — Corporate Outing Bandung",
    eyebrow: "Budget & Investment",
    intro:
      "Pertanyaan paling sering soal pricing — range, tier, payment terms, breakdown, ROI, hidden cost, dan cost optimization. Update 2026 dengan range pricing terkini.",
    metaDescription:
      "24 jawaban detail soal budget corporate outing di Bandung — dari paket 1-day Rp 1.5jt/pax sampai executive offsite premium Rp 12jt+/pax, financing, dan ROI justification.",
    questions: [
      {
        question: "Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?",
        answer:
          "Budget outing kantor 100 pax di Bandung untuk paket 2D1N standar berkisar Rp 2,5–5 juta per orang, atau total Rp 250–500 juta untuk grup. Range mencakup venue, F&B 3x, activity, transportation lokal, project management, dan contingency 8%.",
        detail:
          "Variasi tergantung tier venue (villa standar vs resort premium), kompleksitas activity (outbound adventure vs indoor workshop), dan kebutuhan tambahan seperti talent atau dokumentasi video.",
      },
      {
        question: "Apa saja tier pricing corporate outing di Bandung?",
        answer:
          "4 tier: Foundation (Rp 1.5-2.5 jt/pax) untuk budget-conscious quarterly outing. Elevated (Rp 2.5-4.5 jt/pax) sweet spot annual gathering. Signature (Rp 4.5-7 jt/pax) marquee event. Bespoke (Rp 7 jt+/pax) C-suite executive offsite premium.",
      },
      {
        question: "Apakah ada hidden cost di luar proposal?",
        answer:
          "Tidak. Proposal detailed breakdown — venue, F&B, logistics, talent, equipment, contingency, dan profit margin. Yang muncul di invoice = yang ada di proposal yang Anda approve. Add-on jika ada selalu konfirmasi tertulis dulu.",
      },
      {
        question: "Apakah harga sudah include PPN dan tax?",
        answer:
          "Proposal transparant: subtotal + PPN 11% line-item terpisah. No 'tax' yang muncul mendadak di invoice. Faktur pajak available kalau perusahaan butuh untuk reimbursement.",
      },
      {
        question: "Apakah ada deposit atau down payment?",
        answer:
          "Standard 30% deposit setelah proposal di-approve untuk lock venue & date. Sisa 70% bayar 3 hari sebelum event execution. Bisa adjust kalau ada kebutuhan finance team — fleksibel selama agreement tertulis.",
      },
      {
        question: "Berapa biaya tambahan kalau pax bertambah mendekati hari H?",
        answer:
          "Tambahan pax di-quote dengan unit price yang sama (transparent dari awal), tidak ada penalty. Selama venue masih punya kapasitas. Kalau perlu upgrade venue karena pax naik signifikan, kami negotiate dengan vendor venue dulu.",
      },
      {
        question: "Bagaimana cara justify budget outing ke management?",
        answer:
          "Framework ROI: retention saving = attrition reduction × salary × turnover multiplier. Untuk 100 peserta event, kalau attrition turun 10% × salary Rp 8 jt × 9 bulan turnover cost = Rp 720 juta saving. Event budget Rp 250 jt = ROI 2.9x.",
      },
      {
        question: "Bisa nego harga vendor outing untuk corporate?",
        answer:
          "Negotiation possible terutama untuk: (1) Volume — grup besar 200+ pax dapat economy of scale 10-20%. (2) Off-peak period (Maret, Juni di-luar libur sekolah). (3) Multi-event annual contract. Yang tidak negotiable: safety, insurance, atau senior planner dedicated.",
      },
      {
        question: "Berapa biaya rental venue villa di Lembang untuk gathering 100 pax?",
        answer:
          "Range Rp 40–80 juta per villa per 2D1N untuk villa premium yang accommodate 100 pax (atau multi-villa cluster 2-3 unit). Tambah F&B, activity, dan transportation untuk total cost. Detail per venue di-share saat proposal.",
      },
      {
        question: "Apakah ada early bird discount?",
        answer:
          "Tidak ada model 'early bird promo'. Tapi: lock booking 8+ minggu sebelum hari H bantu kami negotiate harga venue lebih baik, savings biasanya 5-10% di-pass ke client. Lock 12+ minggu untuk peak season (Q4) memberi pricing flexibility tertinggi.",
      },
      {
        question: "Apakah ada refund kalau force majeure?",
        answer:
          "Force majeure (cuaca extreme, kondisi venue, regulasi pemerintah) handled per contract: 70-100% refund tergantung notice period. <7 hari sebelum hari H: 70% refund. 8-14 hari: 85%. 15+ hari: 100%. Plus reschedule option tanpa penalty.",
      },
      {
        question: "Bagaimana strategi negosiasi budget dengan vendor outing?",
        answer:
          "Tips: (1) Brief detail di awal — vendor bisa rekomendasi venue/activity yang fit budget. (2) Flexible date (off-peak = cheaper). (3) Tanya breakdown line-item — identify mana yang bisa di-adjust. (4) Multi-event annual contract dapat better pricing. Avoid: pressure tactic atau race-to-bottom — quality drops.",
      },
      {
        question: "Berapa estimasi budget per pax untuk team building 1 hari?",
        answer:
          "Range Rp 1.5–3.5 juta/pax untuk 1-day team building standard di Bandung. Breakdown: venue + F&B 2x (Rp 600rb), activity + equipment (Rp 500rb), transport lokal + logistics (Rp 300rb), PM + contingency (Rp 200rb). Scaling ke 100 pax = Rp 150–350 juta total.",
      },
      {
        question: "Apakah budget team building bisa dikurangi dengan metode hybrid?",
        answer:
          "Iya, cost efficiency 15-25%. Hybrid setup: pagi indoor workshop di venue di-kota, siang outdoor activity singkat di lokasi di-dekat, malam reflection session. Mengurangi transport cost + venue rental. Tapi harus design smart agar experience tetap seamless.",
      },
      {
        question: "Berapa biaya tambahan untuk dokumentasi video profesional?",
        answer:
          "Dokumentasi standar (photographer + videographer, video recap 3-5 menit) included dalam tier Standard+. Upgrade premium: multi-camera setup (Rp 5-10 jt tambahan), drone footage (Rp 3-8 jt), highlight film cinema-style (Rp 10-20 jt). Delivery timeline: foto 1 minggu, video 2-3 minggu.",
      },
      {
        question: "Bagaimana struktur pembayaran untuk event besar (500+ pax)?",
        answer:
          "Standard 3-phase: (1) 25% down payment untuk lock venue & date (saat proposal approved). (2) 50% di minggu ke-2 execution untuk finalisasi numbers & confirm vendor. (3) 25% final di 3 hari sebelum event untuk cash-flow vendor. Bisa adjust sesuai risk profile vendor + client capability.",
      },
      {
        question: "Apakah ada fee untuk change request di tengah planning?",
        answer:
          "Revisi scope significant (scope creep) past round-2 revision akan trigger scope change cost. Biasanya minimal Rp 2-5 jt per major change (e.g., venue swap, activity add, pax +50%). Minor adjustment gratis selama logistik masih feasible.",
      },
      {
        question: "Berapa estimasi budget untuk incentive trip premium?",
        answer:
          "Incentive trip tier premium: 3D2N dengan destination Jawa Barat premium (Pangalengan, Kawah Putih area). Budget Rp 5-7 jt/pax untuk 30-50 pax. Include: 5-star resort atau private villa exclusive, fine-dining F&B, exclusive activities (helicopter tour, wine tasting, atau private tour dengan guide premium), personalized recognition ceremony.",
      },
      {
        question: "Apakah budget untuk leadership retreat bisa di-customise?",
        answer:
          "Ya, highly customizable. 2D1N basic retreat Rp 4-6 jt/pax. 3D2N standard sweet-spot Rp 5-9 jt/pax. Upgrade options: 360-feedback assessment (Rp 4-8 jt/peserta), certified executive coach (Rp 50-150 jt flat), customized framework design (Rp 20-50 jt). Total investasi skala ke kebutuhan leadership development maturity.",
      },
      {
        question: "Berapa budget untuk executive offsite dengan consultant strategist?",
        answer:
          "1D intensive Rp 5-7 jt/pax. 2D1N standard Rp 7-9 jt/pax. 2D1N bespoke dengan certified strategy consultant senior Rp 10-15 jt/pax (consultant fee Rp 50-150 jt flat included). Semakin besar C-suite (20+ eksekutif) dan kompleksitas decision, semakin worth-it investment consultant.",
      },
      {
        question: "Bagaimana cara kalkulasi ROI event perusahaan?",
        answer:
          "Framework: event investment vs benefit captured. Benefit dihitung dari: retention saving (attrition reduction × salary × cost multiplier) + productivity gain (post-event output lift) + morale/culture impact. Example: 100 pax event, attrition turun 5% = Rp 400 jt savings. Event budget Rp 250 jt = ROI 1.6x, payback dalam 6-9 bulan.",
      },
      {
        question: "Apakah ada payment plan atau cicilan untuk event besar?",
        answer:
          "Ada, untuk event di atas Rp 500 juta bisa diskusi payment plan multi-phase. Standard: 25%-50%-25%. Extended: bisa jadi 20%-30%-30%-20% spread over 4-5 bulan sebelum event, negotiable tergantung vendor cash-flow need + client payment cycle.",
      },
      {
        question: "Bagaimana cost-benefit analysis outing vs tidak ada outing?",
        answer:
          "Cost: event investment Rp 250-500 jt (1-year budget). Benefit per research: employee satisfaction +25%, retention improvement +10-15%, collaboration score +20%, sick day reduction 10%. Untuk 100 orang team, benefit cumulative dalam 12 bulan jauh exceed investment cost. Most companies ROI-positive.",
      },
    ],
  },

  logistics: {
    slug: "logistics",
    title: "Logistics & Process FAQ — Corporate Outing Bandung",
    eyebrow: "Process & Logistics",
    intro:
      "Pertanyaan soal timeline, briefing flow, day-of execution, force majeure, safety protocols, dan operational complexities untuk corporate event di Bandung.",
    metaDescription:
      "Jawaban detail soal proses booking, timeline prep, safety handling, force majeure, dietary mapping, insurance, dan day-of execution corporate outing di Bandung.",
    questions: [
      {
        question: "Berapa lama proses dari request proposal ke konfirmasi?",
        answer:
          "Proposal lengkap dengan breakdown & 2 alternative venue dalam 24 jam setelah briefing call. Revision 1–2 hari. Konfirmasi venue & deposit 30%, siap di-eksekusi 3 minggu kemudian (urgent request bisa 4 hari, tergantung availability venue).",
      },
      {
        question: "Berapa minggu sebelum hari H harus booking vendor?",
        answer:
          "Minimum 3-4 minggu untuk grup 50-100 pax. Untuk 200+ pax, 6-8 minggu. Peak season (Oktober-Desember Q4 corporate gathering rush) lock minimum 8-12 minggu. Untuk Bespoke offsite dengan certified facilitator, 8+ minggu untuk facilitator availability.",
      },
      {
        question: "Bagaimana proses revisi proposal?",
        answer:
          "Standar 2 revision included di proposal (no extra cost). Revisi typically dari client side: scope adjust, budget adjust, atau venue shift. Revision turnaround 24-48 jam per round. Revision ke-3+ biasanya signal scope significantly changed — kami suggest re-brief.",
      },
      {
        question: "Siapa yang handle transportasi peserta outing?",
        answer:
          "Kami atur full — multi-bus pickup dari Jakarta (atau client city), convoy coordination, drop-off di venue, transport antar venue jika multi-cluster, dan return trip. Insurance peserta included selama transport. Driver: licensed + experienced corporate group transport.",
      },
      {
        question: "Bagaimana penanganan kalau cuaca buruk di hari H?",
        answer:
          "Setiap program siapkan Plan A & Plan B. Plan B: indoor backup activity, alternative venue di-standby, flexibility shifting itinerary. Contingency budget 5-8% include. Untuk full cancel due to force majeure, refund/reschedule per contract policy.",
      },
      {
        question: "Apakah vendor menyediakan dokumentasi (foto/video)?",
        answer:
          "Iya, standard include. Photographer profesional + videographer untuk capture event. Untuk premium tier: drone footage, multi-camera setup, video recap montage. Delivery: photo dalam 1 minggu post-event, video recap dalam 2-3 minggu.",
      },
      {
        question: "Berapa staf vendor yang on-site saat event?",
        answer:
          "Tergantung scale: 100 pax 1-2 day event = 4-6 crew (1 senior PM + 3-5 coordinator + safety/medical). 500+ pax multi-day = 8-12 crew. Crew assignment di-share di proposal supaya client tahu siapa tim on-site.",
      },
      {
        question: "Apakah ada project manager dedicated untuk event corporate kami?",
        answer:
          "Iya, setiap proyek di-assign 1 senior PM dedicated dari briefing sampai post-event. Bukan rotating freelancer. PM jadi single point of contact untuk client — communication clean, accountability ada nama. Avg tenure PM kami: 4+ tahun.",
      },
      {
        question: "Bagaimana koordinasi catering untuk grup besar?",
        answer:
          "Pre-event dietary mapping wajib — survey peserta untuk halal, vegetarian, vegan, allergen. F&B station multiple dengan signage clear. Untuk 500+ pax: central kitchen + multiple station setup. Capacity test 1-2 minggu sebelum hari H.",
      },
      {
        question: "Bagaimana penanganan dietary restriction peserta?",
        answer:
          "Pre-event medical/dietary questionnaire. F&B accommodation: halal main (default majority), vegetarian station, vegan option, allergen-free dedicated (gluten, nut, dairy). Stigma-free queuing — semua station di akses sama. Tagged dengan card per dietary type.",
      },
      {
        question: "Bagaimana koordinasi dengan venue untuk grup besar (200+)?",
        answer:
          "Multi-touchpoint coordination — venue manager assigned dari side venue + senior PM dari kami. Pre-event walkthrough wajib. Site visit + safety induction. Day-of: radio communication, real-time issue handling. Post-event: incident report kalau ada.",
      },
      {
        question: "Apakah vendor handle dekorasi dan branding event?",
        answer:
          "Iya, standar include untuk corporate gathering tier Standard+. Decoration design custom sesuai theme: stage backdrop, photo wall, signage. Custom branding (banner, t-shirt, merchandise) optional dengan cost tambahan. Production lead time 2-3 minggu.",
      },
      {
        question: "Bagaimana penanganan insurance peserta untuk outbound adventure?",
        answer:
          "Insurance peserta mandatory untuk outbound tier 2-3 (high-risk activity). Coverage Rp 50-200 jt per peserta. Include: accident, medical treatment, hospitalization, emergency evacuation. Claim process: vendor yang handle paperwork, peserta claim melalui vendor. Confirmation insurance 1 minggu sebelum event.",
      },
      {
        question: "Apakah ada medical standby on-site untuk corporate event?",
        answer:
          "Iya, mandatory untuk event 100+ pax atau yang involve outdoor activity. Medical standby: paramedik trained + first aid kit + ambulance ready. Untuk outbound extreme (rafting, rappelling), medic specialist trained untuk activity-specific emergency.",
      },
      {
        question: "Bagaimana pre-event safety briefing untuk peserta?",
        answer:
          "Safety briefing wajib sebelum setiap activity. Format: visual demo (5-10 menit) + Q&A + signed acknowledgment per peserta. Untuk high-risk activity (flying fox, rafting), 1-on-1 briefing + gear check per peserta. Dokumentasi briefing di-keep untuk audit trail.",
      },
      {
        question: "Apakah ada contingency budget dalam proposal?",
        answer:
          "Ya, standar 5-8% contingency budget included. Used for: unexpected cost spike (venue F&B price increase, activity add-on request, weather backup activity). Sisa contingency (jika tidak terpakai) di-refund ke klien atau convert jadi upgrade surprise (better venue, talent upgrade, drone footage gratis).",
      },
      {
        question: "Bagaimana komunikasi dengan klien pada hari H?",
        answer:
          "Real-time coordination via dedicated WhatsApp group (PM vendor + project lead client + key stakeholders). Update frequency: morning brief (08:00), mid-event check (13:00), evening recap (17:00), post-event (next day). Escalation path jelas: on-site issue → PM vendor → project lead client instant decision.",
      },
    ],
  },

  comparison: {
    slug: "comparison",
    title: "Comparison & Decision FAQ — Pilih Format yang Fit",
    eyebrow: "Comparison & Decision",
    intro:
      "Pertanyaan 'X vs Y' yang sering muncul saat HR decide format event — outing vs gathering, hotel vs villa, vendor size, outbound vs indoor. Comparison practical dari 400+ events untuk membantu decision.",
    metaDescription:
      "Comparison detail: outing vs gathering, hotel vs villa, vendor besar vs spesialis, outbound vs indoor team building, glamping vs villa. Decision framework untuk HR corporate event.",
    questions: [
      {
        question: "Apa bedanya outing kantor dan corporate gathering?",
        answer:
          "Outing kantor adalah aktivitas refreshing + bonding informal, biasanya 1-2 hari, vibe relaxed. Corporate gathering adalah formal annual event dengan ceremony, awarding, dan company update — durasi 2-3 hari di venue premium. Budget gathering biasanya 1.5-2x outing standard.",
      },
      {
        question: "Outing kantor 1-day vs 2D1N — mana yang lebih efektif?",
        answer:
          "Tergantung goal. 1-day: surface-level refresh, bonding terbatas, cocok quarterly. 2D1N: real bonding dengan shared overnight experience, deeper conversation, more memorable. Untuk annual flagship event, 2D1N sweet spot. 1-day cocok untuk team yang sudah punya bonding base.",
      },
      {
        question: "Bedanya team building dan outbound perusahaan?",
        answer:
          "Team building = umbrella term untuk activity yang frame outcome tim (komunikasi, problem solving, trust). Bisa indoor, outdoor, atau hybrid. Outbound = subset team building yang khusus outdoor adventure dengan physical activity dominant. Tidak semua team building outbound.",
      },
      {
        question: "Villa gathering vs hotel — mana yang lebih cocok untuk corporate?",
        answer:
          "Villa: privacy 100%, custom vibe, multi-day bonding deeper, photogenic. Cocok 30-200 pax. Hotel: built-in concierge, formal ballroom, multi-day stay tanpa logistics burden. Cocok 200+ pax atau awarding ceremony formal. Mix-and-match juga doable.",
      },
      {
        question: "Glamping vs villa untuk corporate outing — pilih yang mana?",
        answer:
          "Glamping: unique outdoor immersive experience, bonfire vibe, memorable differentiator. Cocok 30-80 pax intimate group. Villa: lebih premium, formal-friendly, capacity lebih besar. Untuk tim yang prioritas memorable + bonding intim, glamping. Untuk premium formal event, villa.",
      },
      {
        question: "Bandung vs Jakarta untuk corporate outing — pertimbangannya apa?",
        answer:
          "Bandung: hawa sejuk (18-24°C), variety venue (villa, resort, glamping, hotel), 2-3 jam dari Jakarta via tol, premium feel without premium logistics cost. Jakarta: instant access, no travel time. Untuk corporate yang nilai 'change of environment + memorable experience', Bandung pilihan default.",
      },
      {
        question: "Lembang vs Ciwidey untuk outing perusahaan?",
        answer:
          "Lembang: paling accessible (60-90 min dari Bandung kota), variety venue tertinggi, mainstream cocok semua segmentasi. Ciwidey: lebih remote (75-110 min), feel lebih natural, cocok untuk adventure (Kawah Putih, hot spring) atau retreat yang prefer outdoor immersive.",
      },
      {
        question: "Vendor outing besar vs kecil — beda kualitasnya apa?",
        answer:
          "Vendor besar (national/multinational): scale capability, brand reputation, tapi rotating freelancer, factory-feel, less personal. Vendor specialist B2B (kami): senior planner dedicated, akses langsung ke venue (no calo), tenure tim panjang, customization tinggi. Trade-off: vendor specialist biasanya fokus area geografis tertentu.",
      },
      {
        question: "In-house team building vs vendor — ROI mana yang lebih baik?",
        answer:
          "Tergantung scale. In-house: cocok untuk grup kecil <20 pax, single-day, low complexity. Time investment HR signifikan. Vendor: cocok 30+ pax, multi-day, atau structured outcome (post-merger, leadership development). Vendor liberate HR untuk focus strategic, plus methodology + execution expertise.",
      },
      {
        question: "Annual gathering vs quarterly outing — mana yang lebih impactful?",
        answer:
          "Both serve different functions. Annual gathering: big moment, milestone celebration, brand-building internal, full company alignment. Quarterly: maintenance engagement, departmental bonding, course correction. Best practice: kombinasi — annual flagship + 2-3 quarterly. Total investment 1.5-2x annual-only tapi impact bertahan 4x lebih lama.",
      },
      {
        question: "Outsourced project manager vs in-house HR planner?",
        answer:
          "HR planner: deep company context, internal stakeholder alignment, no learning curve. Outsourced: vendor methodology + venue network + day-of execution expertise. Best practice: HR jadi 'event sponsor' (set goal, budget, success criteria) + vendor jadi 'event executor' (design, logistics, on-site). Clear role split = clean accountability.",
      },
      {
        question: "Vendor lokal Bandung vs vendor luar kota?",
        answer:
          "Vendor lokal Bandung: akses langsung venue (60+ partnership direct, no calo), pricing leverage, local knowledge (cuaca, traffic, dietary). Vendor luar kota nyambi Bandung: lebih dependent pada local supplier, less leverage. Untuk corporate outing di Bandung specifically, vendor specialist Bandung biasanya optimal.",
      },
      {
        question: "Apa tanda-tanda vendor EO corporate yang tidak profesional?",
        answer:
          "5 red flag: (1) Quote langsung tanpa discovery brief — tidak tahu kebutuhan Anda tapi sudah kasih harga. (2) Proposal tanpa breakdown line-item — hanya total harga. (3) Tidak ada PM dedicated — Anda deal dengan 3 orang berbeda. (4) Tidak bisa kasih referensi klien corporate. (5) Tidak ada kontrak force majeure atau cancellation policy yang jelas.",
      },
      {
        question: "Event organizer corporate vs travel agent — bedanya apa untuk outing kantor?",
        answer:
          "Travel agent: strong di ticketing, hotel booking, package tour retail. Lemah di: facilitation team building, custom program design, AV production, post-event report. EO corporate specialist: kuat di program design, facilitation, logistics coordination, pada-site execution, akuntabilitas. Untuk corporate outing dengan objective lebih dari 'pergi dan senang', gunakan EO specialist.",
      },
    ],
  },

  formats: {
    slug: "formats",
    title: "Format & Programs FAQ — Corporate Event Bandung",
    eyebrow: "Format & Programs",
    intro:
      "Pertanyaan soal format event, rundown, activity choices, customization scope, dan sample programs dari 10+ corporate event types yang kami handle di Bandung.",
    metaDescription:
      "Detail format corporate event Bandung — rundown 1D/2D1N/3D2N, activity options, customization scope, hybrid formats, glamping, MICE, incentive trip, dan special event types.",
    questions: [
      {
        question: "Apa saja format umum outing kantor di Bandung?",
        answer:
          "Format paling sering: (1) 1-day full-day untuk quarterly refresh. (2) 1D2N glamping untuk team bonding. (3) 2D1N standard untuk annual employee gathering. (4) 3D2N premium untuk annual corporate gathering. (5) Hybrid format (outbound + indoor workshop). (6) Family day corporate untuk family-inclusive.",
      },
      {
        question: "Rundown ideal employee gathering 2D1N seperti apa?",
        answer:
          "Day 1: 14:00 arrival + check-in, 16:00 ice-breaker + light activity, 19:00 welcome dinner + entertainment, 21:00 bonfire bonding. Day 2: 07:00 breakfast, 09:00 main activity (parallel tracks), 12:00 lunch, 13:30 closing reflection, 15:00 departure.",
      },
      {
        question: "Activity team building paling efektif untuk perusahaan teknologi?",
        answer:
          "Untuk tim tech (young, analytical): (1) Escape room corporate edition. (2) Hackathon mini 3 jam team-based. (3) Outdoor problem-solving challenge. (4) Cooking competition. (5) Drone race team-based. Hindari activity terlalu fisik untuk first-timer outing. Mix outbound + indoor optimal.",
      },
      {
        question: "Format yang cocok untuk bonding pasca merger?",
        answer:
          "3D2N integration playbook: Day 1 cultural exchange (curiosity-driven activity, peserta cross-team), Day 2 alignment work (parallel strategy tracks per fungsi), Day 3 commitment + celebration (awarding cross-team, closing CEO address). Key principle: tidak boleh dominasi salah satu side.",
      },
      {
        question: "Bagaimana design corporate retreat untuk strategic planning?",
        answer:
          "5 komponen: (1) Pre-retreat preparation (briefing + pre-read material). (2) Opening session (psychological safety, ground rules). (3) Substantive working session 2-4 jam blocks dengan structured methodology. (4) Reflective time + informal interaction. (5) Closing — commitment + 30/60/90 day follow-up plan.",
      },
      {
        question: "Activity outbound paling populer di Bandung?",
        answer:
          "Top 8: high ropes course (flying fox, burma bridge), paintball tactical, ATV/jeep adventure, white water rafting (Sungai Cikandang), mountain biking trail, outbond Olympic multi-station, war games strategy, outdoor orienteering. Mix berdasarkan goal tim.",
      },
      {
        question: "Bagaimana format executive offsite untuk C-level?",
        answer:
          "1D Intensive untuk quarterly C-suite alignment (8-10 jam working session). 2D1N Standard untuk annual strategic planning. 2D1N Bespoke dengan certified strategy consultant senior untuk major pivot atau M&A integration. Sweet spot 8-15 pax dengan facilitator senior.",
      },
      {
        question: "Apa saja activity glamping corporate yang seru?",
        answer:
          "Signature: bonfire briefing session (CEO address di bawah bintang), sunrise hike + reflection circle 5:30 AM, outdoor cooking competition team-based, stargazing dengan astronomer, forest meditation, bonfire storytelling. Activity yang impossible di hotel/villa setting.",
      },
      {
        question: "Format awarding night corporate gathering yang berkesan?",
        answer:
          "5 theme: (1) Classic Black-Tie Corporate. (2) Hollywood Movie Awards style. (3) Modern Minimalist. (4) Cultural Indonesia. (5) Themed Decade (Gatsby, 80s, dll). Komponen wajib: stage design custom, trophy custom, MC charismatic, video bumper per kategori, photo moment per awardee.",
      },
      {
        question: "Bagaimana design leadership camp 3 hari?",
        answer:
          "Day 1: self-awareness foundation (DiSC/360 debrief, psychological safety). Day 2: framework deep-dive (Adaptive + Situational Leadership working session) + case study application. Day 3: integration + IDP finalization + peer coaching pair setup. Closing commitment circle.",
      },
      {
        question: "Activity untuk cross-generational team?",
        answer:
          "Parallel activity tracks. Day 2 morning split 3 simultaneous: (A) High-energy outbound untuk Gen-Z + young Millennial. (B) Reflective workshop untuk older Millennial + Gen-X. (C) Bonding-focused cooking/photo quest untuk mixed-age. Lunch + dinner = natural cross-mingling.",
      },
      {
        question: "Format incentive trip untuk top sales performers?",
        answer:
          "2D1N atau 3D2N premium tier. Premium accommodation (villa private atau resort 5-star), F&B fine-dining, exclusive activities (private tour, premium adventure), personal recognition speech per peserta, custom branded merchandise, photographer profesional untuk memorable capture. Cost Rp 4.5-7 jt/pax.",
      },
      {
        question: "Apa itu MICE dan kapan perusahaan butuh MICE organizer?",
        answer:
          "MICE = Meeting, Incentive, Conference, Exhibition. Perusahaan butuh MICE organizer (bukan EO biasa) ketika ada: (1) sesi formal dengan presentasi + AV production, (2) hybrid event dengan remote attendees, (3) conference dengan multiple speaker + breakout room, atau (4) exhibition dengan booth setup. Budget biasanya lebih tinggi dari outing karena AV production cost.",
      },
      {
        question: "Berapa pax ideal untuk incentive trip yang impactful?",
        answer:
          "Sweet spot incentive trip yang masih terasa 'exclusive' adalah 15-80 pax. Di bawah 15 pax: sangat intimate, cost per pax tinggi tapi impact high. Di atas 100 pax: logistik kompleks, rasa exclusivity menurun. Untuk President's Club tier, 20-50 pax adalah optimal untuk personalisasi maximum.",
      },
      {
        question: "Bagaimana contoh rundown corporate gathering 3D2N?",
        answer:
          "Day 1: 14:00 arrival + check-in, 16:00 opening ceremony, 19:00 welcome dinner. Day 2: 09:00 parallel activity tracks, 12:00 makan siang, 14:00 leisure + persiapan awarding, 19:00 awarding gala + entertainment. Day 3: 08:00 breakfast, 10:00 refleksi + foto grup, 12:00 makan siang, 13:30 keberangkatan.",
      },
      {
        question: "Apa beda corporate outing dengan family day?",
        answer:
          "Corporate outing = employees only, fokus team bonding + professional development. Family day = employees + keluarga (pasangan, anak), fokus celebration + appreciation. Family day butuh pertimbangan khusus: area bermain anak, safety extra, food variety lebih luas, dan activity yang inclusive untuk semua umur. Budget family day biasanya 1.3-1.5x outing standar per kepala.",
      },
      {
        question: "Bagaimana format company retreat untuk post-merger integration?",
        answer:
          "3D2N structured retreat: Day 1 cultural exchange (identify strength masing-masing kultur), Day 2 alignment work (parallel strategy session per fungsi), Day 3 commitment + celebration (joint decision, cross-team activity, joint dinner). Key: fasilitator senior untuk manage potential tension, psychological safety sangat penting.",
      },
      {
        question: "Apa format ideal glamping corporate untuk team intim?",
        answer:
          "2D1N glamping standar optimal untuk 30-60 pax intimate team. Signature activities: bonfire CEO briefing (informal, intimate), sunrise hike + reflection circle (build vulnerability + trust), outdoor cooking team-based (hands-on bonding), stargazing meditation session. Tidak bisa ada meeting di glamping — environment force informal bonding.",
      },
      {
        question: "Format MICE hybrid conference seperti apa eksekusinya?",
        answer:
          "Setup: on-site venue venue dengan ballroom AV premium + online broadcast setup. Multi-camera capture (speaker angle + audience reaction), live switching crew, dedicated streaming engineer. Peserta on-site: normal experience. Peserta online: interactive via Zoom, Q&A real-time, breakout room facility. Technical briefing 1-2 minggu sebelum untuk coordinate speaker + remote attendees.",
      },
    ],
  },

  location: {
    slug: "location",
    title: "Location & Venue FAQ — Bandung & Jawa Barat",
    eyebrow: "Location & Venue",
    intro:
      "Pertanyaan soal lokasi terbaik di Bandung untuk corporate event — area recommendation, venue type, akses, cuaca, dan karakteristik geografis setiap zone.",
    metaDescription:
      "Detail area Bandung untuk corporate event — Lembang vs Ciwidey vs Pangalengan, akses dari Jakarta, cuaca seasonal, venue density, dan recommendation per corporate type.",
    questions: [
      {
        question: "Area mana di Bandung yang paling banyak venue corporate?",
        answer:
          "Lembang adalah hub utama — 40+ venue (hotel, villa, resort, adventure ground) dalam radius 10 km. Akses 60-90 menit dari Bandung kota. Cuaca sejuk (18-22°C), infrastructure mature. Ciwidey (75-110 menit) lebih natural, cocok adventure. Pangalengan (90-120 menit) paling remote, cocok exclusive retreat.",
      },
      {
        question: "Berapa waktu perjalanan dari Jakarta ke venue Bandung?",
        answer:
          "Jakarta ke Bandung kota: 2-3 jam via tol Cipularang (170 km). Jakarta ke Lembang: 3-3.5 jam. Jakarta ke Ciwidey: 3.5-4 jam. Jakarta ke Pangalengan: 4-4.5 jam. Plus loading/unloading waktu venue, total travel time dalam itinerary budgetkan 4-5 jam termasuk rest stops.",
      },
      {
        question: "Musim apa paling cocok untuk corporate outing di Bandung?",
        answer:
          "Sepanjang tahun viable. Dry season (Mei-September): cuaca stabil, outdoor activity smooth, booking availability ketat (peak season). Wet season (Desember-Februari): harga negotiable, less crowded, tapi perlu contingency weather. Best value-for-money: April, Mei, September, Oktober (shoulder season).",
      },
      {
        question: "Apakah Bandung cocok untuk international executive dari luar Indonesia?",
        answer:
          "Iya, increasingly popular. Differentiator dari destination lain: cool climate, premium yet approachable, short flight dari Jakarta (1 jam), cultural authenticity (tea plantation, local crafts), dan venue quality world-class. International executive biasanya appreciate premium non-mainstream destination angle.",
      },
      {
        question: "Venue mana yang best untuk gathering 500+ pax di Bandung?",
        answer:
          "Hotel ballroom premium di Bandung kota untuk ease of logistics: Aston Priority, Aston Grand Preanger. Atau split across 2-3 villa cluster (Lembang) + central gathering ground. For 500+ pax outdoor venue agak challenging, usually semi-indoor atau hybrid setup di venue dengan large covered area.",
      },
      {
        question: "Berapa jarak dari Bandung kota ke Lembang dan Ciwidey?",
        answer:
          "Bandung kota ke Lembang: 35-40 km, 45-60 menit (depending traffic). Bandung kota ke Ciwidey: 40-50 km, 60-75 menit. Bandung kota ke Pangalengan: 50-60 km, 75-90 menit. Routing via Kopo jalan sudah improve, tapi peak hour morning (06:00-09:00) dapat jam.",
      },
      {
        question: "Apakah venue di Lembang atau Ciwidey lebih bagus untuk bonding?",
        answer:
          "Lembang: mainstream option, comfortable infrastructure, variety venue type, logistik simple. Cocok untuk corporate biasa atau grup pertama kali ke Bandung. Ciwidey: more immersive nature experience, outdoor feel lebih strong, cocok untuk adventure-seekers atau company yang value nature + team bonding intim.",
      },
      {
        question: "Bagaimana akses internet di venue di Lembang dan Ciwidey?",
        answer:
          "Lembang: internet coverage generally good (4G+, fiber available di kebanyakan villa premium). Ciwidey: variable, some venue good signal, some remote area spotty. Untuk event dengan online component (live streaming, virtual attendees), guarantee venue punya dedicated internet line + backup.",
      },
      {
        question: "Apakah cuaca di Lembang lebih dingin dari area lain di Bandung?",
        answer:
          "Ya, Lembang lebih tinggi elevation (±1500m vs Bandung kota ±700m), temperatur 2-4°C lebih dingin. Biasanya 16-22°C. Ciwidey/ Pangalengan elevation lebih tinggi lagi (±2000m), bisa 14-18°C. Untuk peserta dari Jakarta/coast, bawa jaket. Untuk outdoor activity durasi panjang, consider cuaca faktor.",
      },
      {
        question: "Venue mana yang best untuk glamping experience di Bandung?",
        answer:
          "Top glamping venue: Kawah Putih area (Ciwidey), Ranca Upas (Pangalengan), Cikole (Lembang). Signature: tent premium dengan en-suite, bonfire atmosphere, natural setting immersive. Untuk 50-80 pax glamping optimal. 100+ pax, split across 2-3 glamping site atau hybrid (sebagian glamping, sebagian villa nearby).",
      },
      {
        question: "Bagaimana venue Bandung untuk event dengan VIP C-suite?",
        answer:
          "Top tier venues untuk executive offsite: Tangkuban Parahu area (private estate heritage), Cikole private villa, Aston Priority (hotel luxury, formal). Karakteristik: privacy 100%, dedicated concierge, security good, F&B premium, private transport untuk exec. Cost Rp 60-150 jt per venue per 2D1N.",
      },
      {
        question: "Apakah venue Bandung aman untuk corporate event besar?",
        answer:
          "Iya, crime rate low untuk tourist area. Venue security biasanya in-house + kami coordinate. For high-profile exec event, bisa request security extra. Venue standard protocol: ID check entrance, security perimeter, first aid station. Kami assess security risk per client profile + event type.",
      },
      {
        question: "Berapa alternatif venue dalam 30 menit drive dari Lembang?",
        answer:
          "Sekurangnya 20+ venue dalam 30 menit Lembang: villa cluster Lembang, resort Hilltop, glamping area, hotel heritage, outdoor adventure ground, tea plantation venue. Diversitas ini give flexibility kalau venue first choice unavailable atau client mau compare options.",
      },
      {
        question: "Venue mana yang cocok untuk corporate celebration dengan keluarga?",
        answer:
          "Villa cluster Lembang dengan playground area, atau resort dengan kids club. Atau Bandung Great Farm (agritourism). Activity yang inclusive: cooking class family, farm tour, soft outbound untuk kids. Food: serve variety inclusive anak-anak. Venue atmosphere: casual fun, bukan formal. Budget 1.3-1.5x outing standar.",
      },
    ],
  },

  vendor: {
    slug: "vendor",
    title: "Vendor Selection & Partnership FAQ",
    eyebrow: "Vendor Selection",
    intro:
      "Pertanyaan soal cara memilih vendor corporate event yang tepat, red flags, evaluation criteria, reference check, dan partnership approaches yang sustainable.",
    metaDescription:
      "Panduan memilih vendor corporate event — evaluation criteria, red flags, reference check, SLA expectations, dan cara build partnership jangka panjang.",
    questions: [
      {
        question: "Apa criteria vendor EO corporate yang berkualitas?",
        answer:
          "7 criteria: (1) Portfolio track record — 100+ event minimum, case study corporate reference, 4+ tahun operating. (2) Dedicated senior PM per client — bukan rotating freelancer. (3) Direct venue partnership — 60+ venue akses, no calo margin. (4) Transparent proposal breakdown — line-item clear, no lump-sum. (5) Clear SLA — 24h response, proposal 24h, post-event report 5 hari. (6) Insurance + force majeure policy documented. (7) Testimonial referral 3+ client seukuran Anda.",
      },
      {
        question: "Bagaimana cara check reference vendor corporate event?",
        answer:
          "Ask for 3+ client reference yang similar scale + event type. Call mereka (bukan email): tanya tentang (1) PM reliability, (2) budget adherence, (3) on-site execution quality, (4) problem resolution, (5) would you use them again? Ideal call mereka post-event 2-4 minggu (saat perspective sudah cool, bukan saat excited).",
      },
      {
        question: "Apakah vendor specialist lebih bagus dari vendor multinational?",
        answer:
          "Trade-off. Vendor specialist local: dedicated PM, personalized approach, deep local knowledge, better pricing leverage. Vendor multinational: brand reputation, scale capability, broader service line. Untuk corporate outing Bandung, specialist biasanya deliver better value + experience. Untuk 500+ pax atau multi-city event, multinational punya advantage.",
      },
      {
        question: "Red flag apa saat interview vendor EO corporate?",
        answer:
          "5 red flags: (1) Quote langsung tanpa discovery — tidak tanya kebutuhan, langsung kasih harga. (2) 'Bisa apa saja' — tidak punya fokus clear. (3) Tidak punya PM dedicated to assign. (4) Tidak bisa kasih referral. (5) Proposal hanya 1 option — tidak customized. Jika ada 3+ red flag, skip.",
      },
      {
        question: "Bagaimana negosiasi rate dengan vendor EO corporate?",
        answer:
          "Approach: (1) Budget realistic berdasarkan scope, bukan fantasy number. (2) Tanya vendor tentang cost driver — identify mana yang bisa optimize. (3) Leverage: multi-event annual contract, off-peak booking, atau volume discount. (4) Never: pressure tactic atau pit vendor against each other — relationship sour tapi quality drop. Better: transparent negotiation dengan mutual benefit frame.",
      },
      {
        question: "Apakah perlu vendor insurance + liability coverage?",
        answer:
          "Highly recommended. Vendor wajib punya: (1) Public liability insurance (peserta/third party injury). (2) Event cancellation insurance (force majeure loss). (3) Equipment coverage (AV, sound, setup risk). (4) Professional indemnity untuk high-risk activity (outbound adventure). Check certificate insurance, validate dengan insurer directly.",
      },
      {
        question: "Bagaimana evaluate proposal dari vendor untuk event corporate?",
        answer:
          "Checklist: (1) Scope clear — activity, venue, F&B detail, timeline jelas. (2) Breakdown line-item — no lump-sum. (3) Contingency explicit — wording jelas bagaimana handle unexpected. (4) Timeline realistic — proposal timeline + execution timeline sesuai your constraint. (5) Alternatives included — 2+ venue option minimum. (6) PM assigned — nama, experience, kontak detail.",
      },
      {
        question: "Apakah vendor specialist lebih mahal dari generic EO?",
        answer:
          "Biasanya tidak jauh berbeda (within 5-10%). Specialist bisa lebih efisien karena venue relationship + local knowledge, bisa offset premium pricing. Generic EO biasanya mark-up venue karena reseller. Value proposition specialist: better customization, higher execution quality, better problem resolution.",
      },
      {
        question: "Bagaimana cara assess vendor reliability?",
        answer:
          "3 test: (1) Response time — kirim pertanyaan via email, tentukan deadline, check apakah mereka respond in time. (2) Proposal quality — apakah proposal thoughtful dan customized atau templated boilerplate. (3) Referral depth — call referral, tanya tentang responsiveness + problem solving, bukan hanya 'bagus atau enggak'.",
      },
      {
        question: "Apakah perlu kontrak tertulis dengan vendor event?",
        answer:
          "Sangat penting. Kontrak harus include: (1) Scope detail (venue, activity, F&B, pax count). (2) Payment terms (timeline, milestone). (3) Cancellation/force majeure policy (refund terms, reschedule option). (4) Insurance requirement. (5) Liability limitation. (6) Dispute resolution path. Do not skip kontrak — standard practice untuk professional vendor.",
      },
      {
        question: "Bagaimana membangun partnership jangka panjang dengan vendor?",
        answer:
          "Tips: (1) Clear communication upfront — set expectation, give feedback real-time. (2) Fair pricing — negotiate hard tapi jangan race-to-bottom. (3) Consistent business — repeat event schedule, multi-year planning. (4) Respect vendor expertise — listen to recommendation, trust their judgment. (5) Payment on-time — vendor appreciate client yang reliable payment. (6) Feedback + testimonial — help vendor grow, they reward you dengan better service.",
      },
      {
        question: "Apakah bisa vendor handle 2-3 corporate event sekaligus dalam timing berdekatan?",
        answer:
          "Possible tapi tidak recommended. Vendor risk over-commit, service quality drop. Best practice: vendor fokus 1 major event per minggu. Kalau ada 2-3 event berdekatan (e.g., 2-3 minggu), vendor harus punya backup PM + team ter-backup. Clarify capability in proposal, jangan assume.",
      },
      {
        question: "Bagaimana cara monitor vendor execution sebelum hari H?",
        answer:
          "Weekly touchpoint: (1) Week 4 pre-event: confirm pax count, dietary survey, materials finalization. (2) Week 2: venue site visit, confirm F&B, confirm activity readiness, confirm transport. (3) Week 1: final headcount, contingency finalization, day-of timeline walkthrough, emergency contact assignment.",
      },
      {
        question: "Apakah vendor bisa handle full outsourcing atau harus hybrid approach?",
        answer:
          "Both work tergantung HR bandwidth + risk appetite. Full outsourcing: vendor handle semua, HR jadi sponsor (set goal + budget + success criteria). Hybrid: HR jadi project lead, vendor jadi executor. Hybrid = better alignment, tapi HR effort lebih tinggi. Full outsourcing = cleaner, tapi alignment risk.",
      },
      {
        question: "Bagaimana evaluasi vendor setelah event selesai?",
        answer:
          "Post-event survey: (1) Technical execution — on-time, quality venue, activity run smooth. (2) PM responsiveness — available, problem-solve quick. (3) Financial adherence — expense sesuai proposal, no surprise charge. (4) Participant satisfaction — survey 10-15% peserta untuk feedback candid. (5) Overall satisfaction 1-10 scale. Use feedback untuk future vendor selection atau continue partnership.",
      },
    ],
  },

  outcome: {
    slug: "outcome",
    title: "Outcome & ROI FAQ — Measure Impact Event",
    eyebrow: "Outcome & ROI",
    intro:
      "Pertanyaan soal measurement, impact, ROI calculation, dan bagaimana corporate event drive business outcome beyond 'fun' dan 'bonding'.",
    metaDescription:
      "Measure impact corporate event — ROI calculation, retention improvement, satisfaction metric, business outcome, dan long-term value.",
    questions: [
      {
        question: "Bagaimana measure impact corporate outing untuk company?",
        answer:
          "4-tier measurement: (1) Immediate (day-of) — satisfaction score 1-10, NPS participant feedback, engagement observation on-site. (2) Short-term (2-4 minggu) — collaboration score lift via pulse survey, sentiment internal komunikasi, internal buzz metric. (3) Medium-term (3-6 bulan) — retention rate improvement, sick day trend, performance score lift, transfer request volume. (4) Long-term (12 bulan) — attrition rate vs baseline, repeat booking likelihood, brand perception improvement.",
      },
      {
        question: "Bagaimana hitung employee retention saving dari corporate outing?",
        answer:
          "Formula: Attrition cost = (attrition rate reduction × employee count × average salary × turnover cost multiplier). Example: 100 orang team, attrition 20% baseline. Post-event drop ke 15% (5% improvement). Average salary Rp 8 jt × 9 bulan cost (recruiting, training, ramp-up) = Rp 72 jt × 5 orang = Rp 360 jt saving. Event cost Rp 250 jt = ROI 1.4x. Most companies see 2-3x ROI dalam 12 bulan post-event.",
      },
      {
        question: "Apakah corporate event affect employee satisfaction score?",
        answer:
          "Yes, documented lift 5-15 points dalam eNPS (employee NPS). Event impact terukur pada: (1) 'Feel valued' score +10-20%. (2) 'Proud bekerja di company' +15-25%. (3) 'Trust management' +10-15%. (4) 'Would recommend company as employer' +12-18%. Lift sustainable 3-6 bulan post-event kalau ada follow-up komunikasi dari leadership.",
      },
      {
        question: "Bagaimana measure collaboration improvement pasca-event?",
        answer:
          "Collaboration score diukur via: (1) Cross-departmental project velocity +10-20% post-event. (2) Internal meeting engagement (attendance, participation) +5-10%. (3) Intra-company communication volume (internal chat, email, call) +8-12%. (4) Team transfer request volume (people requesting transfer within company, not out) trend negative (good). (5) 360-feedback peer score lift 10-15% dalam 3 bulan post-event.",
      },
      {
        question: "Apakah corporate event impact productivity?",
        answer:
          "Documented productivity lift 5-12% untuk 2-3 bulan post-event, dalam metric: (1) Output per capita. (2) Project completion rate. (3) Quality score (bug reduction, error rate). Lift visible dalam tim yang punya strong collaboration goal. Lift smaller kalau event pure fun tanpa outcome-focused design.",
      },
      {
        question: "Bagaimana measure business outcome dari leadership retreat?",
        answer:
          "Leadership retreat impact measured pada: (1) Decision velocity — time-to-decision untuk strategic issue drop 20-30%. (2) Alignment clarity — leadership team alignment score pada quarterly goal +15-25%. (3) Retention executive — C-level turnover rate improvement, tenure stability. (4) Post-event execution — action items 90+ day completion rate. (5) Employee engagement — leadership communication clarity perception +10-15%.",
      },
      {
        question: "Apakah bisa measure ROI dari incentive trip?",
        answer:
          "ROI incentive trip lebih qualitative tapi still measurable: (1) Top performer retention rate post-trip (99%+ target). (2) Next-tier performer motivation (performance score lift 10-15%). (3) Sales team productivity — sales target achievement post-trip. (4) Cost per acquisition top performer (attrition replacement recruiting cost saving). Formula: (retention value + productivity gain + recruitment saving) vs trip cost.",
      },
      {
        question: "Bagaimana measure engagement participant saat event berlangsung?",
        answer:
          "Real-time engagement metric: (1) Activity participation rate — % participant yang join vs total. (2) Interaction level — conversation intensity, cross-table networking frequency observation. (3) Energy level — vibe check by facilitator, audience engagement observation during presentation. (4) Photo/content capture rate — berapa participant share moment internally. (5) Post-activity reflection depth — quality response di closing circle/feedback form.",
      },
      {
        question: "Bagaimana sampling survey untuk accurate outcome measurement?",
        answer:
          "Recommendation survey sample: 30-50% untuk event 100-500 pax. Sampling method: random selection (unbiased) + optional open-feedback form (capture sentiment). Survey timing: 1-2 minggu post-event (bukan immediately, emotion masih fresh; bukan 1 bulan, momentum lost). Questions simple NPS + 3-5 open-ended. Completion incentive: entry raffle Rp 5 jt.",
      },
      {
        question: "Apakah corporate event bisa measure customer perspective?",
        answer:
          "Untuk incentive trip atau client-facing event (MICE conference), yes. Customer satisfaction metric: (1) NPS score (likely recommend company after event). (2) Brand perception lift — survey pre vs post event. (3) Purchase intent (untuk B2B event, lead generation, decision acceleration). (4) Referral value — customer refer other customer post-event. (5) Repeat business likelihood.",
      },
    ],
  },
};

export function getAllFaqCategorySlugsStatic(): string[] {
  return Object.keys(CATEGORIES);
}

export function getFaqCategoryStatic(slug: string): FaqCategory | undefined {
  return CATEGORIES[slug];
}

export function getFaqCategoriesListStatic(): FaqCategory[] {
  return Object.values(CATEGORIES);
}
