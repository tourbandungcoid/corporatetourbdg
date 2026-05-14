export type GlossaryEntry = {
  term: string;
  short: string;
  long: string;
  related?: string[];
  /** Optional anchor slug — defaults to slugify(term) */
  slug?: string;
};

export type GlossaryGroup = {
  letter: string;
  entries: GlossaryEntry[];
};

const ENTRIES: GlossaryEntry[] = [
  {
    term: "Annual Company Trip",
    short: "Outing tahunan untuk semua karyawan sebagai recognition + bonding.",
    long: "Format gathering perusahaan dengan agenda 2D1N atau 3D2N yang dilakukan setiap tahun, biasanya akhir tahun atau awal tahun, untuk seluruh karyawan. Tujuan utama: recognition kinerja, bonding lintas-divisi, dan reinforcement budaya perusahaan. Investment tipikal Rp 2.5–4.5 jt/pax (Elevated tier).",
    related: ["Annual Employee Gathering", "Corporate Gathering"],
  },
  {
    term: "Annual Employee Gathering",
    short: "Pertemuan tahunan formal yang menggabungkan awarding, business review, dan team building.",
    long: "Event tahunan dengan agenda terstruktur — CEO speech, business review tahun lalu, awarding karyawan, dan elemen team building. Skala biasanya 100–500 pax di hotel berbintang atau resort premium. Berbeda dengan annual company trip yang fokus refreshing, annual employee gathering punya bobot formal lebih tinggi.",
    related: ["Corporate Gathering", "Awarding Night"],
  },
  {
    term: "Awarding Night",
    short: "Acara malam puncak dengan penghargaan karyawan + entertainment.",
    long: "Segment acara malam (biasanya Day 1 atau Day 2 gathering) yang berisi pemberian award untuk karyawan berprestasi, top performer, longest service, dan kategori budaya. Demand venue dengan stage + AV system + lighting. Untuk grup 100+ pax, butuh MC profesional + live band atau DJ.",
    related: ["Annual Employee Gathering", "Gala Dinner"],
  },
  {
    term: "BOTS",
    short: "Bandung Outing Tier System™ — framework 4-tier pricing & quality.",
    long: "Sistem klasifikasi 4-tier untuk corporate outing di Bandung yang kami develop dari 400+ events. Foundation (Rp 1.5–2.5 jt/pax), Elevated (Rp 2.5–4.5 jt/pax), Signature (Rp 4.5–7 jt/pax), Bespoke (Rp 7 jt+/pax). Setiap tier punya use case spesifik — bukan ladder. Detail: /methodology.",
    related: ["5-Pillar Design", "Foundation Tier", "Signature Tier"],
  },
  {
    term: "Bonding Activity",
    short: "Activity yang dirancang untuk membangun koneksi emosional antar peserta.",
    long: "Berbeda dengan team building yang fokus skill/strategi, bonding activity fokus deep interpersonal connection — biasanya melalui shared experience yang vulnerable atau memorable. Contoh: bonfire reflection circle, storytelling session, atau cooking competition kolaboratif. Cocok untuk team yang sudah lama bekerja tapi belum saling kenal personally.",
    related: ["Team Building", "Reflection Circle"],
  },
  {
    term: "Buffer Time",
    short: "Waktu jeda antar aktivitas yang sengaja disisipkan untuk menghindari schedule slip.",
    long: "Praktik standar profesional event planner: setiap transisi antar activity wajib punya buffer 15–30 menit. Vendor amatir biasanya pack schedule back-to-back, yang nyaris pasti molor di hari-H. Buffer juga berfungsi sebagai informal bonding moment (peserta ngobrol bebas, transit santai).",
  },
  {
    term: "Company Retreat",
    short: "Format gathering eksekutif untuk strategic planning + leadership bonding.",
    long: "Format 2D1N atau 3D2N untuk grup eksekutif (8–25 pax), biasanya C-suite atau senior leadership. Fokus strategic alignment + leadership development, bukan refreshing umum. Venue tipikal: heritage villa private atau eco-lodge eksklusif. Investment Rp 7 jt+/pax (Bespoke tier).",
    related: ["Executive Offsite", "Leadership Camp"],
  },
  {
    term: "Contingency Plan",
    short: "Rencana backup untuk skenario worst-case (hujan, force majeure, insiden).",
    long: "Dokumen risk mitigation yang harus ada di setiap event profesional. Mencakup indoor backup untuk outdoor activity, RS partner kontak, evacuation protocol, dan crisis comm template. Vendor yang quote tanpa contingency plan = red flag.",
    related: ["Force Majeure", "Risk Register"],
  },
  {
    term: "Corporate Gathering",
    short: "Term payung untuk semua event grup perusahaan yang punya elemen formal.",
    long: "Umbrella term yang mencakup annual gathering, kick-off meeting, anniversary celebration, atau product launch internal. Karakteristik: ada speech eksekutif, awarding, atau business segment. Beda dengan corporate outing yang lebih casual / refreshing-focused.",
    related: ["Annual Employee Gathering", "Kick-Off Meeting"],
  },
  {
    term: "Corporate Outing",
    short: "Aktivitas grup karyawan untuk bonding + refreshing di luar kantor.",
    long: "Format paling umum (1-day s/d 3D2N) untuk grup 30–300 pax dengan agenda predominantly refreshing + bonding informal. Bukan ceremony formal. Investment range luas tergantung tier (Foundation s/d Signature).",
    related: ["Annual Company Trip", "Team Building"],
  },
  {
    term: "Discovery Brief",
    short: "Sesi briefing 60–90 menit untuk articulate objective event sebelum design.",
    long: "Pillar 1 dari 5-Pillar Design™. Sesi consultative dengan HR + stakeholder kunci untuk translate brief vague (\"mau outing seru\") jadi articulated objective dengan measurable outcome. Vendor yang skip discovery brief dan langsung tawarin paket = generic vendor.",
    related: ["5-Pillar Design", "Objective Alignment"],
  },
  {
    term: "Employee Gathering",
    short: "Variasi annual gathering dengan fokus seluruh employee populasi.",
    long: "Format gathering yang inklusif untuk semua level karyawan (operasional, staff, supervisor, manajer). Berbeda dengan executive offsite yang khusus eksekutif. Demand venue dengan kapasitas besar + agenda yang accommodate diverse audience.",
    related: ["Annual Employee Gathering"],
  },
  {
    term: "Energy Curve",
    short: "Pola energi grup sepanjang event yang harus di-design eksplisit.",
    long: "Konsep program design: tidak boleh back-to-back high-intensity activity. Optimal: high (opening) → medium → low (reflection) → high (closing). Energy curve yang flat atau monotonic = engagement drop.",
    related: ["Program Flow"],
  },
  {
    term: "Executive Offsite",
    short: "Retreat strategis untuk C-suite atau senior leadership.",
    long: "Format premium 2D1N–3D2N untuk grup kecil (8–25 pax) dengan fokus strategic planning, leadership development, atau crisis alignment. Venue tipikal: private villa heritage, eco-lodge eksklusif. Investment Bespoke tier (Rp 7 jt+/pax). Demand white-glove service + privacy guarantee.",
    related: ["Company Retreat", "Leadership Camp"],
  },
  {
    term: "5-Pillar Design™",
    short: "Framework sequential 5-tahap untuk design corporate outing outcome-driven.",
    long: "5-Pillar Corporate Outing Design™ adalah framework yang kami develop dari 400+ events. Sequential, bukan parallel: Pillar 1 Objective → Pillar 2 Audience → Pillar 3 Venue & Logistics → Pillar 4 Activity Architecture → Pillar 5 Outcome Measurement. Detail: /methodology.",
    related: ["BOTS", "Discovery Brief"],
    slug: "5-pillar-design",
  },
  {
    term: "Force Majeure",
    short: "Kejadian di luar kendali yang membatalkan / mengganggu event (gempa, banjir, pandemi).",
    long: "Klausul kontrak standar yang mengatur kewajiban pihak ketika terjadi event di luar kendali. Vendor profesional punya force majeure clause yang fair (refund partial, reschedule option). Vendor yang refuse rebate apapun under force majeure = red flag kontrak.",
    related: ["Contingency Plan", "Risk Register"],
  },
  {
    term: "Foundation Tier",
    short: "Tier paling entry-level di BOTS — Rp 1.5–2.5 jt/pax.",
    long: "Tier 1 di Bandung Outing Tier System (BOTS). Cocok untuk quarterly bonding 30–80 pax, 1-day refresh, atau team building basic. Venue tipikal: villa standar, outdoor camp Lembang/Ciwidey. Bukan tier paling ekonomi — tier yang fit untuk frequent / informal gathering.",
    related: ["BOTS", "Elevated Tier"],
  },
  {
    term: "Gala Dinner",
    short: "Acara makan malam formal dengan dress code + entertainment + speech.",
    long: "Segment acara malam dengan tingkat formalitas tinggi — dress code (semi-formal s/d black-tie), table setting refined, sequence speech + awarding + entertainment + dance floor. Demand venue ballroom + AV premium. Tipikal di Signature atau Bespoke tier.",
    related: ["Awarding Night"],
  },
  {
    term: "Glamping",
    short: "Glamorous camping — outdoor menginap dengan kenyamanan hotel.",
    long: "Format outdoor menginap di tenda mewah atau pondok kayu dengan fasilitas hotel (bed proper, kamar mandi en-suite, electricity, AC kadang). Cocok untuk bonding intimate 30–80 pax di area Lembang, Ciwidey, atau Pangalengan. Premium di Elevated–Signature tier.",
  },
  {
    term: "Ice Breaker",
    short: "Activity ringan 30–45 menit untuk mencairkan suasana di awal event.",
    long: "Activity pembuka yang non-threatening, low-energy, dan inclusive — fungsinya let peserta saling lihat-lihat sambil grow ke high-energy. Ice breaker yang baik: short, no winner-loser dynamic, dan integrate semua peserta tanpa peer pressure. Hindari ice breaker yang force performative behavior.",
    related: ["Energizer", "Energy Curve"],
  },
  {
    term: "Incentive Trip",
    short: "Trip reward untuk top performer atau sales achiever.",
    long: "Format gathering exclusive untuk peserta yang qualify quota / achievement target. Demand venue premium (luar negeri atau Bali untuk Indonesia context) + experience yang \"memorable\". Investment top tier per-pax. Beda dengan annual gathering yang inklusif — incentive trip sengaja exclusive sebagai reward.",
  },
  {
    term: "Internal QA",
    short: "Quality assurance internal di vendor sebelum proposal di-sent ke client.",
    long: "Status di pipeline kami: setelah drafting proposal selesai, masuk Internal QA — review oleh senior planner untuk catch error, pricing inconsistency, atau spec misalignment. Vendor amatir skip QA dan langsung kirim, biasanya ada error yang harus revisi setelah client komplain.",
    related: ["Status Pipeline"],
  },
  {
    term: "Kick-Off Meeting",
    short: "Event pembukaan tahun atau proyek dengan elemen alignment + motivation.",
    long: "Format gathering di awal tahun atau awal proyek besar dengan fokus alignment objektif + motivation. Biasanya 1-day intensive di venue formal (hotel ballroom). Beda dengan annual gathering yang reflektif tahun lalu, kick-off forward-looking.",
    related: ["Corporate Gathering"],
  },
  {
    term: "Leadership Camp",
    short: "Camp intensive untuk leadership development melalui experience challenge.",
    long: "Format 3D2N atau lebih untuk senior leadership team dengan agenda outdoor challenge + reflective workshop + strategic planning. Methodology biasanya pakai Belbin, DiSC, atau Tuckman framework. Venue: outdoor camp atau eco-lodge dengan ruang workshop.",
    related: ["Executive Offsite", "Company Retreat"],
  },
  {
    term: "Lead Score",
    short: "Skor prioritas untuk setiap inquiry berdasarkan fit + urgency.",
    long: "Internal scoring system kami untuk setiap inquiry. Factor: budget fit, pax size, urgency, completeness brief, dan source quality. Output: priority tier (Hot / Warm / Medium / Cool / Cold). Hot leads = response prioritas <2 jam working hours.",
    related: ["Priority Tier"],
  },
  {
    term: "MICE",
    short: "Meetings, Incentives, Conferences, Exhibitions — kategori industri event B2B.",
    long: "Umbrella term industri untuk corporate event B2B yang demand venue + service profesional. Kami specialist di sub-segment Incentive + Meeting (offsite/retreat), bukan Exhibition/Trade Show.",
  },
  {
    term: "Objective Alignment",
    short: "Pillar 1 dari 5-Pillar Design — translate brief vague jadi articulated outcome.",
    long: "Proses brief intensive untuk articulate apa team outcome yang mau dicapai. Bukan \"kita mau outing tanggal X\" tapi \"kita butuh tim X melakukan Y dalam waktu Z\". Tanpa objective alignment, semua keputusan downstream (venue, activity) jadi opinion.",
    related: ["Discovery Brief", "5-Pillar Design"],
  },
  {
    term: "Outbound",
    short: "Activity outdoor adventure yang fokus team challenge fisik.",
    long: "Format activity outdoor (flying fox, high ropes, paintball, rafting, ATV) untuk team building. Tier 1 (light: trust fall, low ropes) cocok untuk semua audience. Tier 2 (high ropes, paintball) demand fitness moderate + waiver. Tier 3 (extreme: rafting jeram tinggi) demand pre-screening.",
    related: ["Team Building"],
  },
  {
    term: "Outcome ROI Framework",
    short: "Framework convert soft outcome (bonding, engagement) jadi financial impact.",
    long: "Framework kami untuk justifikasi investment event ke CFO. Sample: event 100 pax × Rp 2.5 jt = Rp 250 jt. Attrition reduction 10% × Rp 8 jt salary × 9 bulan turnover cost × 100 = Rp 720 jt retention saving. Net ROI 2.9×. Detail: /methodology.",
    related: ["5-Pillar Design"],
  },
  {
    term: "Pax",
    short: "Singkatan dari \"passengers / persons\" — unit hitung peserta event.",
    long: "Industri jargon untuk jumlah peserta. \"100 pax 2D1N\" = 100 peserta selama 2 hari 1 malam. Pricing biasanya quote per-pax untuk transparency.",
  },
  {
    term: "Post-Event Survey",
    short: "Survey peserta dalam 7 hari setelah event untuk measure outcome.",
    long: "Pillar 5 dari 5-Pillar Design™. Survey terstruktur (NPS + outcome-specific metrics) yang dikirim ke peserta 5–7 hari post-event. Tujuan: measure outcome delta vs pre-event baseline, capture feedback untuk improve next event, dan generate data untuk justifikasi ke management.",
    related: ["5-Pillar Design", "Outcome Measurement"],
  },
  {
    term: "Pre-Event Survey",
    short: "Survey pre-event untuk baseline + demographic mapping.",
    long: "Survey 3-5 pertanyaan yang dikirim ke peserta 2 minggu sebelum event. Capture: dietary preference, physical activity preference (low/medium/high), reflective vs energetic preference, family-inclusive. Hasil dipakai untuk audience mapping (Pillar 2).",
    related: ["5-Pillar Design", "Audience Mapping"],
  },
  {
    term: "Priority Tier",
    short: "5-level priority untuk lead inquiry: Hot, Warm, Medium, Cool, Cold.",
    long: "Internal classification kami berdasarkan lead score. Hot (≥80): respon <2 jam. Warm (60-79): respon <8 jam. Medium (40-59): respon <24 jam. Cool (20-39): respon <48 jam. Cold (<20): queue.",
    related: ["Lead Score"],
  },
  {
    term: "Proposal",
    short: "Dokumen lengkap detailing scope, pricing, dan timeline untuk event spesifik.",
    long: "Dokumen output dari fase Drafting di pipeline. Berisi: scope breakdown, venue alternative (2–3 opsi), pricing transparency (line item), timeline pre-event–post-event, dan terms. Standar kami: proposal dalam 24 jam working hours post-discovery brief.",
    related: ["Discovery Brief"],
  },
  {
    term: "Reflection Circle",
    short: "Sesi sharing intim untuk close event atau transisi antar segment.",
    long: "Format facilitated discussion dimana peserta sit in circle dan share refleksi atas pengalaman event. Powerful untuk closing day, post-challenge processing, atau team transition moment. Demand fasilitator senior + setting yang intimate (bonfire, ruang outdoor private).",
    related: ["Bonding Activity"],
  },
  {
    term: "Risk Register",
    short: "Dokumen yang mendata semua risk + mitigasinya untuk event spesifik.",
    long: "Standar industri profesional event management. Setiap event di-attach risk register dengan 3-tier classification: Likely (hujan, traffic) → mandatory mitigation. Moderate (sakit peserta, vendor delay) → standard protocol. Rare-but-critical (kecelakaan, force majeure) → full evacuation plan.",
    related: ["Contingency Plan", "Force Majeure"],
  },
  {
    term: "Signature Tier",
    short: "Tier 3 di BOTS — Rp 4.5–7 jt/pax. Premium gathering 100–300 pax.",
    long: "Tier untuk corporate gathering premium tahunan, 3D2N. Venue tipikal: hotel berbintang Lembang, premium villa cluster, eco-lodge premium. Includes signature: live band, gala dinner, customized swag, drone aerial documentation.",
    related: ["BOTS", "Bespoke Tier"],
  },
  {
    term: "Team Building",
    short: "Activity terstruktur untuk improve team dynamics + collaboration skills.",
    long: "Berbeda dengan bonding activity (emotional connection), team building fokus skill-building: communication, problem-solving, leadership, collaboration. Methodology populer: Tuckman model, DiSC, Belbin team roles. Demand fasilitator certified untuk extract learning.",
    related: ["Outbound", "Bonding Activity"],
  },
  {
    term: "Tuckman Model",
    short: "Framework klasik team development: Forming → Storming → Norming → Performing.",
    long: "Bruce Tuckman (1965) — 4-tahap team development yang masih relevan sebagai framework facilitated team building. Pickup tahap team Anda saat ini, design activity yang sesuai. Team baru-formed butuh forming activity, team conflict-heavy butuh storming-resolution. Tahap 5 (Adjourning) ditambahkan Tuckman tahun 1977.",
    related: ["Team Building"],
  },
  {
    term: "Venue Curation",
    short: "Pillar 3 dari 5-Pillar — pilih venue berdasarkan objective + audience.",
    long: "Bukan dari katalog vendor, tapi by-design. Bonding intimate → villa private. Premium awarding → hotel ballroom. Adventure outbound → outdoor camp. Strategic retreat → eco-lodge atau heritage villa. Demand juga: medical proximity, accessibility, parking capacity, dan dietary feasibility.",
    related: ["5-Pillar Design"],
  },
  {
    term: "Working Hours Response",
    short: "SLA komunikasi yang dihitung dalam jam kerja (Senin–Jumat 08.00–17.00 WIB).",
    long: "Industri standar SLA. \"Respond avg 6 jam working hours\" = jika lo kirim brief Jumat 18.00, respon di-deliver Senin 14.00 (akumulasi 6 jam kerja Senin pagi).",
  },
  {
    term: "MICE Organizer",
    short: "Vendor spesialis yang handle Meeting, Incentive, Conference, atau Exhibition secara profesional.",
    long: "Berbeda dari EO generik — MICE organizer punya capability AV production, hybrid streaming, registration system, dan breakout management. Cocok ketika event punya deliverable bisnis formal (bukan hanya bonding). Sub-segment paling demanding adalah Conference (400+ pax) dan Exhibition.",
    related: ["MICE", "Event Organizer"],
  },
  {
    term: "Hybrid Event",
    short: "Event yang berjalan serentak untuk peserta onsite dan remote (virtual).",
    long: "Format yang makin umum pasca-pandemi. Butuh: dedicated streaming encoder, platform virtual (Zoom, Airmeet, Hopin), moderator hybrid, dan operator teknis minimal 2 orang. Risiko utama: audio-visual sync issue dan engagement gap antara peserta onsite vs remote.",
    related: ["MICE", "MICE Organizer"],
  },
  {
    term: "President's Club",
    short: "Tier tertinggi incentive trip — program reward eksklusif untuk top 5–10% performer.",
    long: "Istilah industri untuk incentive trip tier premium dengan eligibility threshold ketat (biasanya top 5–10% sales quota achievement). Karakteristik: skala kecil (20–50 pax), fully bespoke, personalized recognition ceremony, dan destination premium (international atau private estate domestik). Impact motivasi jauh lebih tinggi dari program incentive generic.",
    related: ["Incentive Trip", "Bespoke Tier"],
  },
  {
    term: "Incentive Program",
    short: "Program reward terstruktur yang motivasi karyawan mencapai target melalui experience.",
    long: "Broader dari incentive trip — bisa berupa trip, merchandise, cash equivalent, atau experience. Incentive trip adalah subset paling premium karena creates shared memory dan social proof internal. ROI incentive program: untuk setiap Rp 1 yang diinvestasikan di incentive, benchmark industri menunjukkan 3–10x revenue lift dari peserta dibanding non-peserta.",
    related: ["Incentive Trip", "President's Club"],
  },
  {
    term: "Venue Ballroom",
    short: "Ruang fungsi di hotel dengan kapasitas large-scale — ideal untuk gathering formal.",
    long: "Venue ballroom hotel di Bandung tipikal berkapasitas 200–800 pax theater style. Kelebihan: built-in AV system, F&B catering terstandard, accommodation dalam satu gedung. Kekurangan: karakteristik corporate 'generic', F&B usually exclusive (tidak bisa bawa catering sendiri). Rekomendasi Bandung: Padma Hotel Lembang, Trans Luxury Hotel, Pullman Grand Central.",
    related: ["Corporate Gathering", "Venue Curation"],
  },
  {
    term: "Villa Cluster",
    short: "Konfigurasi beberapa villa berdekatan yang disewa eksklusif untuk satu grup.",
    long: "Strategi untuk grup 80–300 pax yang butuh venue private tanpa venue ballroom formal. 2–4 villa dengan akses shared ground atau outdoor area. Kelebihan: privacy 100%, vibe lebih casual dan authentic, photogenic. Kekurangan: koordinasi logistik lebih complex, F&B biasanya butuh catering eksternal.",
    related: ["Venue Curation", "Corporate Outing"],
  },
  {
    term: "Lembang",
    short: "Destinasi corporate outing terpopuler di Jawa Barat — 30–45 km dari Bandung kota.",
    long: "Area dataran tinggi di utara Bandung (ketinggian 1.200–1.500 mdpl), hawa 18–24°C. Infrastruktur paling mature untuk corporate event: villa private, resort dengan ballroom, glamping site, hotel butik. Sinyal umumnya baik. Jarak dari Bandung: 45–90 menit. Dari Jakarta: 3–3.5 jam via Tol Cipularang.",
    related: ["Venue Curation", "Corporate Outing"],
  },
  {
    term: "Ciwidey",
    short: "Destinasi outing di selatan Bandung — terkenal Kawah Putih dan kebun teh.",
    long: "Area di selatan Bandung (90–150 menit dari kota). Unique attraction: Kawah Putih (moonscape volcanic crater), Situ Patenggang, kebun teh Malabar, Kawah Rengganis. Cocok untuk grup yang cari nature immersive experience. Venue lebih terbatas dari Lembang — optimal untuk 30–120 pax. Sinyal bisa terbatas di beberapa titik.",
    related: ["Lembang", "Corporate Outing"],
  },
  {
    term: "Rundown",
    short: "Timeline eksekusi detail event — jadwal per jam dengan PIC dan catatan logistik.",
    long: "Dokumen operasional yang jadi 'bible' di hari H. Standar professional rundown berisi: waktu mulai/selesai per sesi, PIC yang bertanggung jawab, location, equipment yang dibutuhkan, dan contingency note. Briefing vendor dengan rundown minimal H-7. Review ulang H-1. On-site morning briefing H-0.",
    related: ["Contingency Plan"],
  },
  {
    term: "Event Organizer",
    short: "Vendor yang bertanggung jawab mengelola dan mengeksekusi corporate event end-to-end.",
    long: "Umbrella term untuk berbagai tipe vendor event. Di konteks B2B corporate: (1) Specialist corporate EO — fokus di segment corporate dengan PM dedicated, methodology, dan post-event report. (2) Generic EO — handle semua jenis event (wedding, festival, corporate). (3) Travel agent yang nyambi corporate. Untuk corporate event yang punya objective bisnis, specialist adalah pilihan optimal.",
    related: ["Discovery Brief", "MICE Organizer"],
  },
  {
    term: "Certificate of Appreciation",
    short: "Sertifikat penghargaan yang di-deliver kepada peserta sebagai bagian dari recognition.",
    long: "Bisa digital atau fisik. Di incentive program dan leadership camp, certificate bukan sekadar formalitas — ini bagian dari recognition ritual yang reinforce achievement. Sertifikat yang well-designed (bukan template online) meningkatkan perceived value program.",
    related: ["Incentive Trip", "Awarding Night"],
  },
  {
    term: "Breakout Room",
    short: "Ruang diskusi kecil untuk grup terpisah dalam conference atau workshop.",
    long: "Di MICE conference: breakout room memungkinkan parallel session dengan topik berbeda untuk sub-grup berbeda. Standar: minimal 40–60% ukuran main hall untuk tiap breakout room. Untuk hybrid: setiap breakout butuh AV dedicated + streaming encoder terpisah. 5 breakout paralel = kompleksitas operasional 5x lebih tinggi dari plenary tunggal.",
    related: ["MICE", "Hybrid Event"],
  },
  {
    term: "AV Production",
    short: "Audio-visual production setup untuk event — sound system, lighting, stage, dan display.",
    long: "Komponen wajib di conference dan gathering premium. Terdiri dari: PA system (public address / sound), stage lighting, LED backdrop atau screen projection, streaming encoder untuk hybrid, dan operator dedicated per area. Budget AV untuk event 200 pax: Rp 30–80 jt. Untuk conference 500+ pax dengan hybrid: Rp 100–300 jt+.",
    related: ["MICE", "Corporate Gathering"],
  },
  {
    term: "Post-Event Report",
    short: "Dokumen terstruktur yang dibuat vendor dalam 5–7 hari kerja pasca event.",
    long: "Standar deliverable vendor profesional. Isi: executive summary, attendance vs target, aktivitas ringkasan, NPS/survey hasil, photo selects, video recap, budget reconciliation, dan recommendations untuk next event. HR butuh ini untuk justify anggaran ke management dan brief vendor tahun berikutnya. Vendor yang tidak deliver ini = tidak akuntabel.",
    related: ["Working Hours Response", "Discovery Brief"],
  },
];

const SLUGIFY = (s: string) =>
  s
    .toLowerCase()
    .replace(/™/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function getEntrySlug(e: GlossaryEntry): string {
  return e.slug ?? SLUGIFY(e.term);
}

export function getGlossaryGroups(): GlossaryGroup[] {
  const sorted = [...ENTRIES].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" })
  );
  const groups = new Map<string, GlossaryEntry[]>();
  sorted.forEach((e) => {
    const first = e.term.replace(/^["'\d]+/, "").charAt(0).toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : "#";
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(e);
  });
  return Array.from(groups.entries()).map(([letter, entries]) => ({ letter, entries }));
}

export function getAllGlossaryEntries(): GlossaryEntry[] {
  return [...ENTRIES].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" })
  );
}
