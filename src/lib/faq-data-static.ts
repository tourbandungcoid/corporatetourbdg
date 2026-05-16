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
  relatedPages?: { href: string; label: string; description: string }[];
};

const CATEGORIES: Record<string, FaqCategory> = {
  budget: {
    slug: "budget",
    title: "Budget & Investment FAQ — Corporate Outing Bandung",
    eyebrow: "Budget & Investment",
    intro:
      "Pertanyaan paling sering soal pricing — range, tier, payment terms, breakdown, ROI, dan hidden cost. Update 2026 dengan range pricing terkini.",
    metaDescription:
      "12 jawaban detail soal budget corporate outing di Bandung — dari paket 1-day Rp 1.5jt/pax sampai executive offsite premium Rp 12jt+/pax. Update 2026.",
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
        question: "Apakah ada biaya tersembunyi (hidden cost) yang sering muncul di luar penawaran awal?",
        answer:
          "Hidden cost yang paling sering: (1) Biaya overtime venue jika event melebihi jadwal. (2) Extra charge untuk pax tambahan di luar kontrak. (3) Biaya parkir atau akomodasi supir bus (sering dilupakan). (4) Biaya setup/dekorasi tambahan di luar paket. (5) Charge untuk dokumentasi profesional jika tidak termasuk paket. Vendor transparan akan menyertakan semua ini di proposal. TourBandung Corporate policy: proposal harus mencantumkan semua contingency charge di muka — 0% hidden cost dalam 6 tahun.",
        detail:
          "Cara proteksi: Minta itemized breakdown lengkap sebelum tandatangan kontrak. Tanyakan secara eksplisit: 'Apa yang tidak termasuk dalam paket ini?' dan 'Apa yang bisa menyebabkan biaya tambahan?'. Kontrak yang baik mencantumkan rate untuk setiap potensi tambahan.",
      },
      {
        question: "Berapa perbedaan harga outing kantor Bandung weekday vs weekend?",
        answer:
          "Weekday (Senin–Kamis): 10–20% lebih murah untuk venue, hotel, dan bus charter dibanding weekend. Jumat–Minggu: peak booking, venue dan transportasi penuh — harga premium. Untuk grup 100+ pax, selisih harga weekday vs weekend bisa Rp 30–80 ribu per pax. Rekomendasi: jika jadwal kerja memungkinkan, lock mid-week (Selasa–Rabu) untuk savings optimal. Plus: venue lebih lengang, service lebih fokus ke tim Anda.",
      },
      {
        question: "Berapa budget minimum yang realistis untuk corporate outing 1 hari di Bandung?",
        answer:
          "Budget minimum realistis untuk 1-day outing Bandung: Rp 1.5–2.2 juta per pax (Foundation tier) untuk 50+ pax. Ini mencakup: transportasi PP dari titik kumpul (Jakarta atau Bandung), venue halfday, F&B 2x (snack + makan siang), 1 aktivitas utama, dan koordinasi lapangan. Di bawah Rp 1.5 jt/pax untuk group 50+ pax, akan ada kompromi serius di kualitas venue, F&B, atau tidak ada PM dedicated. Untuk 30 pax ke bawah, cost per pax naik karena fixed cost transport dan venue yang tidak terbagi banyak.",
      },
    ],
    relatedPages: [
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Budget breakdown per tier dan estimasi real untuk outing 1D / 2D1N di Bandung." },
      { href: "/pricing", label: "Transparent Pricing", description: "4 tier pricing dengan line-item breakdown — Foundation hingga Bespoke." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Estimasi budget gathering 100–800 pax termasuk gala dinner dan awarding production." },
      { href: "/panduan-corporate-outing-bandung", label: "Panduan Lengkap", description: "Master guide: semua yang perlu HR tahu soal budget, vendor, dan lokasi." },
    ],
  },

  logistics: {
    slug: "logistics",
    title: "Logistics & Process FAQ — Corporate Outing Bandung",
    eyebrow: "Process & Logistics",
    intro:
      "Pertanyaan soal timeline, briefing flow, day-of execution, force majeure, dan operational complexities untuk corporate event di Bandung.",
    metaDescription:
      "Jawaban detail soal proses booking, timeline prep, force majeure handling, dietary mapping, dan day-of execution corporate outing di Bandung.",
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
        question: "Apakah ada site visit sebelum hari H dan siapa yang melakukannya?",
        answer:
          "Site visit wajib dilakukan 2 kali: H-14 (senior planner + field ops manager — check kapasitas, akses bus, layout outdoor, sound & AV, titik darurat) dan H-3 (field ops coordination — konfirmasi setup, equipment on-site, briefing vendor lokal). Untuk event 300+ pax, tambahan H-1 rehearsal. Klien tidak wajib hadir kecuali ingin verify sendiri — foto site visit selalu dikirim sebagai progress update.",
      },
      {
        question: "Bagaimana cara TourBandung Corporate handle contingency dan force majeure?",
        answer:
          "Setiap event punya risk register (likelihood × impact matrix) yang dibuat sejak proposal. Contingency 5–8% budget disisihkan. Indoor backup program selalu disiapkan untuk outdoor event. Backup vendor tier-2 untuk transportasi dan catering bisa diaktivasi dalam 2 jam. Weather check dilakukan dari H-7, final switch decision H-2. Force majeure clause di PKS melindungi klien dari penalty jika event dibatalkan karena bencana alam atau kahar.",
      },
    ],
    relatedPages: [
      { href: "/event-organizer-corporate-bandung", label: "EO Corporate Bandung", description: "Proses lengkap dari request proposal hingga eksekusi dan post-event report." },
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Timeline dan step-by-step proses perencanaan outing kantor di Bandung." },
      { href: "/proposal/request", label: "Request Proposal", description: "Start proses sekarang — brief call 15 menit, proposal dalam 24 jam kerja." },
    ],
  },

  comparison: {
    slug: "comparison",
    title: "Comparison & Decision FAQ — Pilih Format yang Fit",
    eyebrow: "Comparison & Decision",
    intro:
      "Pertanyaan 'X vs Y' yang sering muncul saat HR decide format event. Vendor size, hotel vs villa, outbound vs indoor — comparison practical dari 400+ events.",
    metaDescription:
      "Comparison detail: outing vs gathering, hotel vs villa, vendor besar vs spesialis, outbound vs indoor team building. Decision framework untuk HR.",
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
      {
        question: "Lebih baik 1 corporate event besar per tahun atau beberapa event kecil?",
        answer:
          "Keduanya punya peran berbeda dan idealnya dikombinasikan. 1 annual event besar (company gathering): menciptakan milestone tahunan, merayakan pencapaian bersama, mempertemukan semua divisi. 2–3 event kecil per tahun (quarterly outing atau departmental bonding): menjaga engagement di antara annual event, lebih targeted per tim. Best practice: annual flagship + 2 quarterly dengan total budget 1.5–2x annual-only. Impact engagement bertahan jauh lebih lama dibanding event sporadis.",
      },
      {
        question: "Apakah corporate retreat sama dengan leadership retreat?",
        answer:
          "Tidak persis sama. Corporate retreat: bisa untuk semua level (30–200 pax), campuran bonding dan strategic review, format lebih beragam. Leadership retreat: spesifik untuk senior management atau C-suite (10–40 pax), fokus development, coaching, dan succession planning. Budget leadership retreat biasanya 1.5–2x lebih tinggi per pax karena scope lebih intensif dan venue eksklusif. TourBandung Corporate menyediakan keduanya di jalur terpisah.",
      },
      {
        question: "Family day vs employee gathering — mana yang lebih cocok untuk employee retention?",
        answer:
          "Keduanya efektif namun mekanismenya berbeda. Employee gathering: membangun cohesion antar karyawan, lebih impactful untuk internal trust dan cross-team collaboration. Family day: membangun perasaan 'perusahaan menghargai saya sebagai manusia seutuhnya' — efektif untuk long-term loyalty dan kebanggaan karyawan. Penelitian menunjukkan employee dengan keseimbangan kerja-keluarga yang positif 27% lebih mungkin stay. Untuk retention yang kuat, kombinasikan keduanya.",
      },
    ],
    relatedPages: [
      { href: "/specialist-vs-generic-eo", label: "Specialist vs Generic EO", description: "Panduan perbandingan lengkap: 5 perbedaan utama specialist B2B vs generic EO." },
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "Team building vs outing — format, methodology, dan kapan masing-masing tepat." },
      { href: "/corporate-gathering-bandung", label: "Corporate Gathering Bandung", description: "Gathering vs outing — perbedaan budget, format, dan expectation management." },
    ],
  },

  formats: {
    slug: "formats",
    title: "Format & Programs FAQ — Corporate Event Bandung",
    eyebrow: "Format & Programs",
    intro:
      "Pertanyaan soal format event, rundown, activity choices, customization scope, dan sample programs dari 10+ corporate event types yang kami handle.",
    metaDescription:
      "Detail format corporate event Bandung — rundown 2D1N, activity options, customization scope, hybrid formats, dan special event types.",
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
        question: "Apakah bisa gabungkan strategic meeting dengan corporate outing dalam satu event?",
        answer:
          "Bisa — ini yang disebut hybrid format atau MICE-gathering. Format populer: Day 1 pagi strategic session (kick-off, strategy review, departement update) → sore/malam bonding activity + dinner. Day 2 outing/team building penuh. Kunci: jangan kompres schedule — tiap sesi butuh buffer 15–30 menit. Venue harus support dual function (meeting room + outdoor activity area atau ballroom yang bisa dialih fungsi). TourBandung Corporate mendesain 'work + play' format untuk klien yang butuh keduanya.",
      },
      {
        question: "Bagaimana format event yang tepat untuk onboarding batch karyawan baru?",
        answer:
          "Untuk onboarding batch 20–100 karyawan baru: (1) Half-day atau 1-day format lebih efektif dari overnight — energi dan focus lebih tinggi. (2) Mixed activity: karyawan baru + buddy karyawan lama dalam satu tim kecil — forced interaction yang natural. (3) Company storytelling: company history tour, pengenalan tim leadership secara informal. (4) 'Pledge' atau team agreement: sesi komitmen sederhana yang menciptakan psychological ownership lebih awal. Hindari terlalu banyak informational briefing — onboarding event harus experiential, bukan lecture.",
      },
      {
        question: "Apa format terbaik untuk corporate event yang harus menutupi peserta dari berbagai kota sekaligus?",
        answer:
          "Untuk event multi-kota serentak (misal: kantor Jakarta, Surabaya, dan Bandung di hari yang sama), ada 3 opsi: (1) Hub gathering — pilih satu lokasi central, semua hadir di sana (Bandung/Jakarta paling sering). (2) Parallel events — eksekusi simultan di masing-masing kota dengan rundown sama, briefing material unified. (3) Hybrid — peserta yang tidak bisa hadir fisik join via live streaming di sesi plenary, hadir fisik hanya di sesi bonding lokal. TourBandung Corporate dapat serve sebagai master organizer untuk parallel event dengan partner di kota lain.",
      },
    ],
    relatedPages: [
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "50+ activity catalog team building — outbound, indoor, hybrid, dan cultural." },
      { href: "/outbound-perusahaan-bandung", label: "Outbound Perusahaan Bandung", description: "Format outbound adventure outdoor untuk perusahaan — activity, safety, dan venue." },
      { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung", description: "Format glamping — premium outdoor experience tanpa kompromi kenyamanan." },
      { href: "/employee-gathering-bandung", label: "Employee Gathering Bandung", description: "Format gathering refreshing — pilihan program untuk bonding tim yang inklusif." },
    ],
  },

  location: {
    slug: "location",
    title: "Lokasi & Venue FAQ — Corporate Outing di Bandung & Jawa Barat",
    eyebrow: "Lokasi & Venue",
    intro:
      "Pertanyaan soal lokasi, area, venue, aksesibilitas, dan perbandingan destinasi untuk corporate outing di Bandung dan Jawa Barat. Berdasarkan 400+ events yang kami eksekusi sejak 2018.",
    metaDescription:
      "Panduan lokasi corporate outing Bandung — Lembang vs Ciwidey vs Pangalengan, venue terbaik untuk 50-500 pax, jarak dari Jakarta, musim, dan tips booking. Update 2026.",
    questions: [
      {
        question: "Mana lokasi terbaik untuk corporate outing di Bandung?",
        answer:
          "Lembang adalah pilihan paling populer — hawa sejuk 18–22°C, venue terlengkap dari villa hingga resort ballroom 800 pax, dan akses mudah 60–90 menit dari pusat kota. Untuk adventure outbound, Ciwidey lebih recommended. Untuk executive retreat yang tenang, Pangalengan ideal.",
        detail:
          "Pilihan area tergantung prioritas event. Lembang terbaik untuk annual gathering atau outing yang butuh venue premium. Ciwidey cocok untuk program outbound aktif dengan Kawah Putih dan hot spring. Pangalengan untuk retreat eksklusif di tea plantation — lebih quiet, lebih private. Bandung kota cocok untuk hybrid MICE dengan akses hotel bintang 4-5.",
      },
      {
        question: "Apa beda outing di Lembang vs Ciwidey untuk corporate?",
        answer:
          "Lembang: venue paling beragam (villa, resort, glamping), hawa sejuk, akses 60–90 menit dari kota, cocok untuk outing premium dan gathering besar. Ciwidey: atmosphere lebih adventure, Kawah Putih + hot spring + rafting tersedia, cocok untuk outbound aktif. Lembang adalah safe choice, Ciwidey adalah memorable choice.",
        detail:
          "Rekomendasi kami: kalau tim belum pernah outing di Bandung, mulai dari Lembang. Kalau sudah beberapa kali dan mau experience beda, coba Ciwidey. Untuk annual gathering 200+ pax, Lembang lebih banyak pilihan venue berkapasitas. Untuk team building aktif 50-150 pax dengan prioritas outdoor challenge, Ciwidey lebih optimal.",
      },
      {
        question: "Berapa lama perjalanan dari Jakarta ke venue corporate outing di Bandung?",
        answer:
          "Dari Jakarta ke pusat Bandung: 2–2,5 jam via tol Cipularang (kondisi normal). Ke Lembang: tambah 30–45 menit. Ke Ciwidey: tambah 90 menit dari pusat kota. Kereta cepat (Whoosh) Jakarta–Padalarang: 40 menit — opsi untuk grup tanpa koper besar.",
        detail:
          "Tips transportasi: untuk grup 50+ pax dari Jakarta, kami atur convoy bus dengan checkpoint rest area KM 42 (Cipali). Estimasikan 30–45 menit ekstra di peak hour (Jumat sore keluar Jakarta = nightmare). Untuk Ciwidey, keluar Bandung subuh lebih ideal. Kereta cepat opsi bagus untuk executive small group yang tidak bawa banyak barang.",
      },
      {
        question: "Area mana di Bandung yang paling dekat dari pintu tol untuk event corporate?",
        answer:
          "Paling dekat pintu tol Pasteur (arah dari Jakarta): hotel di pusat kota (Trans Luxury, Pullman, Hilton) — 5–10 menit. Lembang lewat tol Pasteur: 45–60 menit. Untuk grup besar yang datang dari Jakarta dengan banyak bus, venue dekat tol mengurangi fatigue perjalanan peserta.",
      },
      {
        question: "Kapan peak season venue outing di Bandung dan kapan harus booking?",
        answer:
          "Peak season: Oktober–Desember (Q4 corporate rush, budget year-end) dan Maret–Mei (Q1 kick-off). Di peak season, venue premium Lembang bisa fully booked 8–12 minggu sebelumnya. Off-peak (Januari–Februari, Juli–Agustus): lebih fleksibel, kadang ada rate lebih baik.",
        detail:
          "Aturan praktis: lock venue secepat mungkin setelah tanggal disepakati internal. Jangan tunggu proposal approved — minta venue hold dulu 3–5 hari sambil proses approval. Kehilangan tanggal karena tidak lock adalah salah satu penyebab paling sering klien harus reschedule.",
      },
      {
        question: "Venue apa yang cocok untuk corporate outing 200+ pax di Bandung?",
        answer:
          "Untuk 200+ pax, pilihan terbaik: Padma Hotel Lembang (ballroom 500 pax, mountain view), Pullman Bandung Grand Central (ballroom 1.500 pax, dekat tol), Trans Luxury Hotel (grand ballroom 1.000 pax, produksi premium), atau Dusun Bambu Lembang (outdoor aesthetic, 300+ pax dengan setup). Tergantung format: indoor formal vs outdoor aesthetic.",
      },
      {
        question: "Apakah aman melakukan outing outdoor di musim hujan Bandung?",
        answer:
          "Bisa, dengan Plan B yang solid. Bandung hujan sore lebih sering di November–Februari. Setiap program kami siapkan Plan A (outdoor) + Plan B (indoor backup di venue yang sama atau nearby). Contingency budget 5–8% mencakup biaya shift ke Plan B. Outdoor di pagi hari lebih aman dari hujan.",
      },
      {
        question: "Apa kelebihan Pangalengan untuk corporate retreat dibanding Lembang?",
        answer:
          "Pangalengan lebih tenang, lebih remote, atmosfer tea plantation yang unik, dan kurang touristy dibanding Lembang. Ideal untuk executive offsite atau leadership retreat yang butuh fokus + immersive experience. Tradeoff: akses 100–130 menit dari kota, pilihan venue lebih terbatas. Untuk 10–60 pax di-budget premium.",
      },
      {
        question: "Berapa estimasi biaya sewa venue di Lembang untuk gathering corporate?",
        answer:
          "Estimasi sewa venue Lembang 2026: villa private (30–80 pax, 2D1N): Rp 8–25 juta total. Resort mid-tier dengan ballroom (100–300 pax, 2D1N): Rp 35–90 juta venue fee. Hotel premium bintang 4–5 (200–500 pax): Rp 60–180 juta per event. Harga belum include F&B, aktivitas, dan dekorasi.",
      },
      {
        question: "Apakah Bandung cocok sebagai destinasi incentive trip dari Jakarta?",
        answer:
          "Sangat cocok — akses cepat 2–3 jam, cost per pax 30–50% lebih efisien dari Bali atau Lombok, dan variasi experience luas (glamping, tea plantation, adventure, city tour). Untuk incentive trip 3–5 hari, Bandung+ Ciwidey atau Bandung + Pangalengan bisa digabung untuk multi-destination experience.",
      },
      {
        question: "Venue outdoor mana di Bandung yang paling recommended untuk outbound perusahaan?",
        answer:
          "Top picks untuk outbound korporat: Maribaya Nature Heritage (Lembang, outbound terstruktur, area luas), Kampung Cai Ranca Upas (Ciwidey, outbound + glamping, 50–300 pax), Galunggung Adventure Camp (Subang, physical challenge), dan lokasi rafting Cilayu (Subang). Pilihan tergantung skala pax dan intensity program.",
      },
      {
        question: "Apa perbedaan venue di Lembang Atas vs Lembang Bawah untuk corporate event?",
        answer:
          "Lembang Bawah (dekat Cihanjuang/Setiabudi): akses mudah dari kota, 30–45 menit dari tol Pasteur, cocok untuk event 1-hari atau yang peserta-nya banyak dari Jakarta tanpa mau menghabiskan waktu di jalan. Lembang Atas (Cikole, Jayagiri, Gunung Putri): pemandangan lebih dramatic, suhu lebih sejuk (16–20°C), cocok untuk 2D1N retreat dan glamping. Trade-off: Lembang Atas butuh 15–25 menit tambahan di jalan berkelok.",
      },
      {
        question: "Berapa kapasitas maksimum untuk corporate outing outdoor di satu lokasi Bandung?",
        answer:
          "Tergantung lokasi. Villa cluster Lembang: biasanya 50–200 pax di satu properti. Eco-lodge Ciwidey: 80–300 pax. Outdoor camp Subang: bisa sampai 500 pax dengan setup tenda tambahan. Untuk event 300+ pax, kami biasanya kombinasikan venue utama dengan area camping ekstensi atau split between dua property yang berdekatan.",
      },
      {
        question: "Apakah ada rekomendasi hotel bintang 4–5 di Bandung untuk corporate gathering besar?",
        answer:
          "Untuk corporate gathering formal dengan ballroom: The Trans Luxury Hotel (1.200 pax capacity, Pasteur), Pullman Bandung Grand Central (600 pax, sentral), Four Points by Sheraton (500 pax, Dago). Untuk hybrid outdoor+ballroom: Padma Hotel Bandung (Ciumbuleuit, 400 pax + outdoor area), Grand Mercure (Setiabudi, 350 pax). Untuk event 200+ pax dengan overnight stay, hotel bintang 4 di Lembang seperti Grand Sunshine Resort lebih cocok karena combined capacity akomodasi + venue.",
      },
    ],
    relatedPages: [
      { href: "/venue-gathering-bandung", label: "20 Venue Gathering Bandung", description: "Panduan venue gathering korporat — hotel ballroom, villa private, resort, outdoor." },
      { href: "/glamping-corporate-bandung", label: "Glamping Corporate Bandung", description: "Glamping site rekomendasi di Bandung dan sekitarnya untuk corporate event." },
      { href: "/outing-kantor-bandung", label: "Outing Kantor Bandung", description: "Pilihan lokasi dan area untuk outing kantor 1D / 2D1N di Bandung." },
    ],
  },

  vendor: {
    slug: "vendor",
    title: "Vendor Selection FAQ — Cara Pilih EO Corporate Bandung yang Tepat",
    eyebrow: "Vendor Selection",
    intro:
      "Pertanyaan HR dan procurement soal evaluasi vendor, red flags, proposal comparison, kontrak, dan cara menghindari salah pilih vendor EO corporate. Berdasarkan pengalaman 400+ events.",
    metaDescription:
      "Cara pilih vendor EO corporate Bandung: 12 pertanyaan wajib sebelum sign kontrak — verifikasi legal, evaluasi proposal, red flags, referensi klien, dan contract terms.",
    questions: [
      {
        question: "Bagaimana cara pilih vendor corporate outing yang terpercaya?",
        answer:
          "5 kriteria utama: (1) Specialist B2B, bukan travel agent retail. (2) Legal entity + NPWP aktif — bisa di-PO finance. (3) Senior PM dedicated dari briefing sampai eksekusi. (4) Line-item proposal transparan, bukan lump-sum. (5) Track record skala event serupa — minta case study eksplisit.",
        detail:
          "Tambahkan: (6) Risk register + safety SOP tersedia. (7) Post-event report template — vendor yang tidak punya ini belum siap untuk level enterprise. (8) Confidentiality clause dan NDA-ready untuk executive offsite. Vendor yang bisa deliver semua 8 poin ini adalah specialist B2B yang sesungguhnya.",
      },
      {
        question: "Apa saja red flag vendor EO corporate yang harus dihindari?",
        answer:
          "5 red flags utama: (1) Quote tanpa discovery briefing — vendor tidak tahu kebutuhan Anda. (2) Lump-sum proposal tanpa breakdown. (3) Tidak punya legal entity / NPWP. (4) PM yang berbeda saat briefing vs eksekusi. (5) Tidak bisa menunjukkan case study real dengan nama klien atau anonymized.",
        detail:
          "Red flag tambahan: (6) Pembayaran hanya terima cash atau rekening personal, bukan rekening perusahaan. (7) Tidak bersedia tanda tangan NDA. (8) Response time lambat saat sales phase — ini akan lebih buruk saat event. (9) Tidak ada contingency plan untuk cuaca buruk. (10) Tidak mau memberikan referensi 2-3 klien eksisting.",
      },
      {
        question: "Apakah vendor corporate event harus memiliki legal entity dan NPWP?",
        answer:
          "Untuk perusahaan besar: ya, wajib. Finance butuh invoice resmi dengan NPWP untuk proses PO internal. Vendor freelance atau individual tidak bisa di-PO dan tidak bisa diaudit. Cek akta perusahaan (PT/CV) + NPWP aktif sebelum lanjut ke tahap proposal.",
      },
      {
        question: "Bagaimana cara verify track record vendor EO corporate sebelum hire?",
        answer:
          "4 cara verifikasi: (1) Minta 2–3 referensi klien existing yang bisa dihubungi langsung. (2) Minta case study dengan nama klien (atau anonymized untuk NDA) + outcome metrics. (3) Cek Google Reviews dan Gmaps rating secara independen. (4) Tanya vendor berapa pax event terbesar yang pernah di-handle dan minta bukti.",
        detail:
          "Yang perlu ditanyakan ke referensi klien: apakah PM dedicated hadir on-site sampai selesai? Apakah proposal sesuai dengan eksekusi aktual? Ada surprise cost? Apakah post-event report dikirimkan? Apakah vendor re-bookable? Referensi yang enggan menjawab pertanyaan spesifik = tanda tanya.",
      },
      {
        question: "Apa yang harus ada dalam proposal vendor corporate event?",
        answer:
          "Proposal lengkap harus berisi: (1) Breakdown per komponen (venue, F&B, activity, transport, PM fee, contingency). (2) Timeline persiapan. (3) Tim yang ditugaskan + senioritas. (4) Risk register dan Plan B. (5) Payment terms dan cancellation policy. (6) Post-event report template. Proposal tanpa salah satu poin ini perlu di-clarify.",
      },
      {
        question: "Berapa referensi klien yang ideal diminta dari vendor EO corporate?",
        answer:
          "Minimum 2 referensi yang bisa dihubungi langsung — idealnya dengan skala event serupa (pax dan kompleksitas) dengan kebutuhan Anda. Vendor yang enggan memberikan referensi atau hanya mau kasih testimoni tertulis adalah red flag. Referensi klien yang reliable lebih berharga dari portofolio foto.",
      },
      {
        question: "Apakah aman membandingkan 3 atau lebih vendor sebelum memutuskan?",
        answer:
          "Sangat disarankan — tapi lakukan dengan efisien. Cara yang tepat: buat RFP 1-page dengan scope jelas, kirim ke 3 vendor, bandingkan berdasarkan breakdown (bukan harga total), track record, dan response quality. Avoid meminta detail proposal terlalu dalam dari semua vendor karena tidak fair jika ujungnya tidak dipilih.",
        detail:
          "Proses shortlisting yang ideal: (1) Initial screening dari website dan portofolio. (2) Briefing call 30 menit per vendor. (3) Proposal comparison apples-to-apples berdasarkan scope yang sama. (4) Reference check untuk top 2 kandidat. (5) Final negotiation dengan winner. Total waktu yang wajar: 2-3 minggu untuk vendor selection sebelum sign.",
      },
      {
        question: "Apa perbedaan antara vendor B2B specialist dan travel agent yang juga terima corporate?",
        answer:
          "Specialist B2B: SOP discovery → custom proposal → eksekusi → post-event report. Fokus outcome bisnis. Senior PM dedicated. Legal entity. Track record pure corporate. Travel agent: paket dari katalog, tidak ada discovery mendalam, lebih transaksional. Specialist biasanya 10–20% lebih mahal tapi signifikan lebih accountable.",
      },
      {
        question: "Bagaimana cara negosiasi harga dengan vendor corporate event tanpa mengorbankan kualitas?",
        answer:
          "Negosiasi yang produktif: (1) Minta breakdown per komponen — negosiasi per line, bukan total. (2) Offer volume: pax lebih banyak, multi-event, atau long-term partnership. (3) Negotiable: dokumentasi tier, dekorasi custom, add-ons. Tidak negotiable: PM fee, safety SOP, venue quality — ini protect Anda, bukan vendor.",
        detail:
          "Tips: Timing negosiasi lebih efektif di off-peak (Januari-Februari). Budget yang lebih tight bisa di-solve dengan adjust scope (durasi, venue tier, activity complexity) bukan memotong PM fee atau quality check. Vendor yang langsung potong price tanpa nego item berarti ada margin yang disembunyikan di awal.",
      },
      {
        question: "Apa saja klausul penting yang harus ada dalam kontrak vendor corporate outing?",
        answer:
          "8 klausul wajib: (1) Scope of service yang detail. (2) Payment terms + milestone. (3) Cancellation policy dan refund schedule. (4) Force majeure definition dan prosedur. (5) Liability insurance vendor. (6) Confidentiality/NDA clause. (7) Change order process. (8) Post-event report deliverables dan timeline.",
      },
      {
        question: "Apakah vendor event corporate perlu memiliki asuransi?",
        answer:
          "Idealnya ya — liability insurance yang cover peserta selama event (medical, accident, property damage) dan crew on-site. Vendor specialist B2B umumnya punya event liability coverage. Tanyakan eksplisit: 'Apakah ada event insurance yang cover peserta kami?' dan minta bukti polis sebelum sign kontrak.",
      },
      {
        question: "Bagaimana cara membandingkan proposal dari beberapa vendor secara apple-to-apple?",
        answer:
          "Buat comparison matrix: baris = komponen (venue, F&B, activity, transport, PM fee, contingency, dokumentasi), kolom = setiap vendor. Pastikan scope persis sama — venue tier serupa, jumlah peserta sama, durasi identik. Harga total yang beda signifikan biasanya karena ada komponen yang dihilangkan, bukan efisiensi vendor.",
      },
      {
        question: "Apakah vendor EO corporate Bandung bisa handle event untuk peserta dari luar Jawa?",
        answer:
          "Ya. Untuk peserta dari luar Jawa, EO corporate specialist mengkoordinasikan transportasi grup (charter penerbangan, kereta, atau bus) sebagai add-on. Kami biasa handle peserta dari Surabaya, Medan, Makassar yang fly ke Bandung untuk gathering tahunan. Briefing satu kali dengan HR head office — koordinasi transportasi masing-masing regional kami handle.",
      },
      {
        question: "Apakah vendor EO corporate wajib memiliki NPWP untuk bisa masuk vendor list perusahaan kami?",
        answer:
          "Ya — dan ini bukan sekadar formalitas. NPWP adalah syarat dasar untuk invoicing formal dengan PPN, yang dibutuhkan untuk reimbursement dan audit perusahaan. Selain NPWP, minimal harus ada: akta pendirian perusahaan (PT atau CV), SIUP/NIB, dan rekening perusahaan (bukan pribadi). Vendor yang tidak bisa provide ketiganya bukan vendor B2B yang proper.",
      },
      {
        question: "Bagaimana cara melakukan tender atau beauty contest untuk memilih EO corporate?",
        answer:
          "Best practice tender EO corporate: (1) Pre-qualify 3–5 vendor dengan cek legal entity, portfolio, dan referensi klien. (2) Kirim RFP yang sama ke semua vendor — brief identik untuk comparison fair. (3) Evaluasi proposal dengan scoring matrix: 40% capability (portfolio, PM track record), 30% proposal quality (detail, objective alignment), 20% pricing (value for money, bukan yang termurah), 10% cultural fit. (4) Shortlist 2 vendor untuk presentation + Q&A session. (5) Due diligence referensi 2 klien sebelumnya sebelum final decision.",
      },
      {
        question: "Apa perbedaan management fee dan service fee dalam proposal vendor EO corporate?",
        answer:
          "Management fee (atau PM fee): biaya untuk jasa perencanaan, koordinasi, dan project management — dibayar ke vendor EO sebagai imbalan keahlian dan tenaga tim. Service fee: biaya layanan administrasi untuk transaksi atau procurement tertentu. Dalam proposal EO yang transparan, management fee dicantumkan terpisah (biasanya 10–20% dari total biaya) — ini bukan markup tersembunyi, tapi biaya yang legitimate. Vendor yang tidak mencantumkan management fee secara eksplisit kemungkinan menyembunyikannya di markup komponen lain.",
      },
      {
        question: "Bagaimana cara memastikan vendor EO corporate tidak fly-by-night atau project-based only?",
        answer:
          "3 cara cek legitimasi vendor: (1) Verifikasi legal — minta akta pendirian PT/CV, NPWP aktif, dan rekening perusahaan. Cek NIB/SIUP di OSS.go.id. (2) Physical office — minta alamat kantor dan kunjungi atau verifikasi via Google Street View. EO serius punya kantor tetap, bukan hanya WA number. (3) Longevity check — berapa tahun beroperasi? Cek year registered di akta. Vendor yang berdiri 3+ tahun lebih reliable. TourBandung Corporate beroperasi sejak 2018, kantor di Jl. Babakan Priangan I No.11C Bandung, PT dengan NPWP aktif dan PKP.",
      },
    ],
    relatedPages: [
      { href: "/b2b-corporate-event-specialist-bandung", label: "B2B Event Specialist", description: "7 kriteria vendor B2B specialist — checklist lengkap untuk procurement perusahaan." },
      { href: "/event-organizer-corporate-bandung", label: "EO Corporate Bandung", description: "Cara pilih EO corporate yang aman — legal, portfolio, dan accountability." },
      { href: "/specialist-vs-generic-eo", label: "Specialist vs Generic EO", description: "Perbandingan head-to-head: kenapa specialist B2B lebih accountable dari generic EO." },
    ],
  },

  outcome: {
    slug: "outcome",
    title: "Outcome & ROI FAQ — Bagaimana Corporate Outing Deliver Business Value",
    eyebrow: "Outcome & ROI",
    intro:
      "Pertanyaan dari CFO, direksi, dan HR yang harus justify budget outing ke finance. Framework ROI, cara mengukur keberhasilan event, dan data yang bisa dilaporkan ke leadership.",
    metaDescription:
      "ROI corporate outing: cara justify budget ke CFO, metrics keberhasilan event, NPS pengukuran, data penelitian produktivitas, dan framework pelaporan ke direksi. Update 2026.",
    questions: [
      {
        question: "Bagaimana cara mengukur ROI dari corporate outing?",
        answer:
          "3 layer ROI: (1) Direct — NPS peserta pre vs post event, produktivitas 30-hari pasca event (manager assessment). (2) Indirect — turnover rate perbandingan departemen yang rutin outing vs tidak. (3) Avoided cost — cost replace 1 karyawan ≈ 50–200% annual salary; outing reduce turnover 15–30% per penelitian Gallup.",
        detail:
          "Framework pengukuran praktis: Sebelum event, set baseline metrics (NPS tim, absensi, late submission rate). Setelah event, survey peserta (NPS, kepuasan, perceived value). 30 hari pasca event, minta manager assessment perubahan perilaku tim. 90 hari pasca event, bandingkan turnover dan sick leave rate. Ini cukup untuk laporan ke direksi.",
      },
      {
        question: "Apa metrics keberhasilan corporate event yang bisa dilaporkan ke direksi?",
        answer:
          "Metrics yang konkret untuk laporan ke direksi: (1) NPS event (target 50+). (2) Kepuasan peserta (target 80%+ sangat puas). (3) Attendance rate (target 90%+). (4) Top 3 learning/insight yang dikutip peserta. (5) Post-event sentiment survey. (6) Manager-rated improvement dalam team cohesion 30 hari pasca.",
      },
      {
        question: "Berapa persentase budget payroll yang ideal untuk corporate outing tahunan?",
        answer:
          "Benchmark industri Indonesia: 0,5–1,5% dari total annual payroll untuk outing atau gathering tahunan. Untuk tim 100 pax dengan average salary Rp 8 juta/bulan: payroll tahunan Rp 9,6 miliar → budget outing ideal Rp 48–144 juta (Rp 480rb – 1,4 juta/pax). Ini masih jauh di bawah biaya turnover 1 karyawan.",
        detail:
          "Untuk justify angka yang lebih tinggi: bandingkan dengan cost replacement. Jika 5 dari 100 karyawan resign karena disengagement, cost replacement = 5 × Rp 8 juta × 100% (1x salary) = Rp 40 juta minimum. Satu outing Rp 250 juta yang reduce turnover 2-3 orang = net positive. Frame ini untuk CFO.",
      },
      {
        question: "Apakah ada data penelitian yang membuktikan corporate outing meningkatkan produktivitas?",
        answer:
          "Ya. Gallup State of the Global Workplace 2023: tim dengan engagement tinggi 17–21% lebih produktif dan 43% lebih rendah turnover. Harvard Business Review: team bonding activities meningkatkan kepercayaan tim 20–30% yang berkorelasi langsung dengan kolaborasi dan output quality.",
        detail:
          "Riset MIT Human Dynamics Lab: 35% variasi performa tim dapat diprediksi dari interaksi face-to-face informal — yang persis difasilitasi oleh corporate outing. Data internal kami dari klien repeat (92% repeat booking rate): klien yang konsisten outing 1-2x per tahun melaporkan 23% lebih rendah voluntary turnover dibanding industri serupa.",
      },
      {
        question: "Bagaimana cara justify budget corporate outing kepada CFO atau direksi yang skeptis?",
        answer:
          "3 frame yang bekerja dengan CFO: (1) Avoided cost — hitung cost of turnover (replacement + training + lost productivity = 50–200% salary). (2) Productivity ROI — 1% peningkatan produktivitas 100 orang = 8.640 jam/tahun ekstra. (3) Benchmark — kompetitor lo kemungkinan sudah outing rutin; itu bagian dari employer branding mereka.",
        detail:
          "Template 1-slide untuk CFO: Judul: 'Investasi vs Cost Tanpa Outing'. Kolom 1: Cost outing Rp X/pax/tahun. Kolom 2: Estimated cost disengagement (Gallup: 34% dari salary per karyawan disengaged). Kolom 3: Estimated cost 1 turnover (your average salary × 100%). Bottom line: ROI break-even jika outing mencegah 1-2 resignation.",
      },
      {
        question: "Apa yang harus ada dalam post-event report dari vendor specialist?",
        answer:
          "Post-event report lengkap mencakup: (1) Attendance actual vs planned. (2) NPS dan satisfaction survey results. (3) Photo bank (high-res, kategorized). (4) Video recap. (5) Cost reconciliation vs budget. (6) Incident log (jika ada). (7) Top 3 feedback peserta. (8) Rekomendasi untuk event berikutnya. Delivery dalam 5–7 hari kerja setelah event.",
      },
      {
        question: "Bagaimana cara mengukur kepuasan peserta corporate outing secara valid?",
        answer:
          "Gunakan NPS (Net Promoter Score) + satisfaction survey 5 pertanyaan. Survey langsung setelah event (response rate tertinggi). Pertanyaan kunci: overall satisfaction (1-10), program quality, venue quality, apakah merekomendasikan, dan 1 open-ended (kesan paling berkesan). Target NPS 50+ untuk event yang well-executed.",
        detail:
          "Tips delivery survey: QR code di agenda hari terakhir, insentif kecil (e-voucher Rp 50rb) untuk completion rate 80%+. Jangan survey melalui email setelah event — response rate drop ke 15–20%. On-site digital survey menghasilkan 70–85% completion rate. Hasil survey ini masuk dalam post-event report untuk pelaporan ke HR Director.",
      },
      {
        question: "Apakah ada korelasi antara frekuensi corporate outing dan employee retention?",
        answer:
          "Ya. Dari data klien kami: perusahaan yang konsisten outing 1–2x per tahun memiliki voluntary turnover 15–25% lebih rendah dibanding yang tidak melakukan outing rutin. Faktor mediator: sense of belonging, trust antar rekan, dan perasaan dihargai perusahaan — semua ditingkatkan oleh shared experience outing.",
      },
      {
        question: "Bagaimana membandingkan ROI corporate outing vs training karyawan untuk budget yang sama?",
        answer:
          "Keduanya tidak harus dikompetisikan — outcome berbeda. Training → skill and knowledge transfer (individual growth). Outing → team cohesion, trust, dan engagement (collective growth). Rekomendasi: 70% budget L&D untuk training teknis, 30% untuk experience-based learning (outing, retreat). Keduanya berkontribusi ke retention dari sudut berbeda.",
      },
      {
        question: "Berapa lama dampak positif corporate outing biasanya terasa setelah event?",
        answer:
          "Riset menunjukkan 'post-event glow' berlangsung 4–8 minggu. Dampak yang lebih lasting (trust, komunikasi lebih terbuka) terasa 3–6 bulan jika event dirancang dengan debrief dan follow-up konkret. Tanpa tindak lanjut, dampak outing menurun di bulan ke-3. Tip: jadwalkan outing sebelum quarter penting (sebelum Q4 push, sebelum project besar).",
        detail:
          "Cara memperpanjang dampak: (1) Capture dan share foto/video highlight dalam 1 minggu pasca event. (2) Team leader minta 1 team agreement hasil dari outing (ex: 'kita sepakat untuk lebih direct dalam feedback'). (3) Reference outing saat team meeting dalam 30 hari pertama. (4) Follow-up dengan tim 30 hari dan 90 hari pasca event untuk track perubahan.",
      },
      {
        question: "Apa saja deliverables post-event yang harus diminta dari vendor EO?",
        answer:
          "Minimum 5 deliverables post-event yang harus diminta: (1) Laporan event lengkap — dokumentasi eksekusi vs rencana, timeline aktual, pax hadir. (2) Foto & video highlight (raw + edited) dalam 5–7 hari kerja. (3) Post-event satisfaction survey hasil (NPS peserta, breakdown per aspek). (4) Financial reconciliation — realisasi pengeluaran vs RAB, kembalikan sisa jika ada. (5) Evaluasi PM + rekomendasi untuk event berikutnya. Vendor yang tidak mau memberikan ini adalah red flag.",
        detail:
          "TourBandung Corporate menyertakan post-event report sebagai standar dalam setiap PKS — bukan opsional. Format laporan bisa disesuaikan untuk kebutuhan reporting ke board atau direksi.",
      },
      {
        question: "Apakah ada template laporan pasca-event untuk reporting ke board atau direksi?",
        answer:
          "Template laporan post-event ke direksi: (1) Executive summary satu halaman — apa yang terjadi, berapa pax, highlight outcome. (2) Budget realisasi vs rencana. (3) Satisfaction score (NPS peserta + breakdown aspek). (4) 3 moment highlight dengan foto. (5) Business case follow-up — rekomendasi action item pasca event (team charter, agreement tim). TourBandung Corporate menyediakan template laporan yang sudah dipakai klien untuk reporting ke C-level dan board. Request saat briefing atau lihat di proposal.",
      },
      {
        question: "Bagaimana cara menjustifikasi anggaran corporate outing kepada CFO atau finance?",
        answer:
          "Justifikasi ROI ke CFO: gunakan cost per pax per hari (bukan total lump sum) sebagai frame. Bandingkan dengan cost alternatif: training eksternal per orang (Rp 3–8 jt/orang), town hall produksi (Rp 50–200 jt sekali), atau cost of low engagement (Gallup: karyawan tidak engaged costs 34% dari annual salary dalam lost productivity). Tambahkan angka retensi: replacing 1 karyawan bisa cost 50–150% annual salary. Outing yang meningkatkan engagement 10 poin = potensi reduce 1–2 turnover per 50 pax.",
        detail:
          "TourBandung Corporate menyediakan ROI framework template yang bisa disesuaikan dengan data internal perusahaan. Request saat briefing call — template sudah dipakai klien perbankan dan BUMN untuk budget approval.",
      },
      {
        question: "Apa perbedaan antara satisfaction score dan ROI dalam konteks corporate outing?",
        answer:
          "Satisfaction score (NPS, post-event survey) adalah leading indicator — mengukur persepsi peserta segera setelah event. ROI adalah lagging indicator — mengukur dampak nyata 30–90 hari setelah event (team performance, retention, collaboration metric). Keduanya penting tapi tidak sama: satisfaction score tinggi tidak otomatis berarti ROI tinggi jika tidak ada follow-up dan reinforcement. Event yang dirancang dengan outcome-driven methodology (5-Pillar Design™ dari TourBandung Corporate) memaksimalkan keduanya.",
      },
    ],
    relatedPages: [
      { href: "/methodology", label: "Methodology & Frameworks", description: "3 named framework untuk design event outcome-driven: 5-Pillar, BOTS, dan ROI Framework." },
      { href: "/team-building-bandung", label: "Team Building Bandung", description: "Program team building dengan measurement framework pre & post event." },
      { href: "/pricing", label: "Transparent Pricing", description: "ROI justification template dan cara menghitung value vs cost corporate outing." },
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
