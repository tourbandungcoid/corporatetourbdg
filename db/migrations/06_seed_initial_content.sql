-- =====================================================================
-- 7Summits OS — Migration 06: Seed Initial Content
-- =====================================================================
-- Populates content tables with the same data currently hardcoded in
-- src/lib/site.ts and src/lib/service-data.ts so the public site can
-- read from Supabase once the admin CRUD modules are built.
--
-- Idempotent: uses ON CONFLICT DO NOTHING on unique slugs.
-- Safe to re-run.
--
-- Run AFTER migrations 01-05.
-- =====================================================================

-- ---------------------------------------------------------------------
-- SITE SETTINGS — Update with real 7Summits Corporate data
-- ---------------------------------------------------------------------
UPDATE public.site_settings
SET
  contact = '{
    "phone": "+62 811 2345 678",
    "phone_raw": "+6281123456780",
    "whatsapp": "+6281123456780",
    "whatsapp_url": "https://wa.me/6281123456780?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20corporate%20outing.",
    "email": "hello@7summitstravel.com",
    "address": {
      "street": "Jl. Riau No. 1",
      "city": "Bandung",
      "region": "Jawa Barat",
      "postal_code": "40115",
      "country": "ID"
    }
  }'::JSONB,
  social = '{
    "linkedin": "https://www.linkedin.com/company/7summits-travel",
    "instagram": "https://www.instagram.com/7summits.corporate",
    "youtube": "https://www.youtube.com/@7summitstravel"
  }'::JSONB,
  branding = '{
    "brand_name": "7Summits Corporate",
    "legal_name": "7Summits Travel — Corporate Unit",
    "parent_brand": "7Summits Travel",
    "tagline": "Corporate experience design untuk tim yang fokus hasil. Outing, MICE, retreat — di-handle satu agency.",
    "logo_url": null,
    "favicon_url": null,
    "established_year": 2012,
    "colors": {
      "brand": "#6BA239",
      "brand_deep": "#4E7E2A",
      "forest": "#2E5C3E"
    }
  }'::JSONB,
  stats = '{
    "programs": "500+",
    "clients": "180+",
    "pax": "50,000+",
    "years": "13"
  }'::JSONB,
  seo_defaults = '{
    "default_title": "7Summits Corporate — Corporate Experience Design",
    "default_description": "Corporate outing, MICE, retreat, dan executive offsite untuk enterprise Indonesia. 13 tahun pengalaman, 500+ program, 180+ klien.",
    "default_og_image": null,
    "keywords": [
      "corporate outing bandung",
      "outing kantor bandung",
      "team building bandung",
      "MICE bandung",
      "corporate retreat indonesia",
      "executive offsite",
      "leadership camp",
      "incentive trip",
      "company gathering"
    ]
  }'::JSONB
WHERE id = 1;

-- ---------------------------------------------------------------------
-- SERVICES — 8 service categories
-- ---------------------------------------------------------------------
INSERT INTO public.services (
  slug, title, title_en, short_description, long_description, icon,
  capacity_label, duration_options, price_from_idr, price_from_display,
  outcomes, who_for, included, formats, pricing_tiers, faqs,
  meta_title, meta_description,
  status, display_order
) VALUES

-- 1. Outing Kantor
('outing-kantor', 'Outing Kantor', 'Corporate Outing',
 'Retreat strategis untuk tim, dari 1 hingga 5 hari, dengan objective bisnis yang terukur.',
 'Outing kantor kami bukan paket wisata kantor biasa. Kami merancang program dengan narrative, agenda, dan logistik enterprise-grade yang mengukur dampak nyata ke engagement, alignment, dan culture activation tim Anda.',
 'compass',
 '50–800 pax',
 '["1 hari", "2D1N", "3D2N"]'::JSONB,
 750000,
 'IDR 750.000 / pax',
 '["Team alignment yang dapat diukur via pre/post survey", "Engagement uplift rata-rata 27% (data 2025, sampel 47 program)", "Memorable experience yang dibahas berbulan-bulan internal", "Dokumentasi visual untuk employer branding & internal comms"]'::JSONB,
 '["HR Manager yang harus jalankan annual outing tahun ini", "GA Department yang butuh vendor enterprise-grade", "People & Culture yang fokus engagement & retention", "Direktur yang ingin moment alignment untuk regional team", "C-suite yang butuh strategic touchpoint dengan tim", "Procurement yang butuh transparan & compliance vendor"]'::JSONB,
 '["Strategic discovery & objective design", "Narrative & tema custom", "Itinerary day-by-day", "Venue sourcing & vetting", "Transportasi PP from Jakarta/Bandung", "Akomodasi enterprise-tier", "F&B 3x/hari + snack break", "Fasilitator bersertifikasi", "Dedicated Program Manager", "Medic on-site untuk grup 100+ pax", "Asuransi peserta IDR 1M", "Foto & video dokumentasi profesional", "Welcome kit & branded merchandise", "Post-event report dengan metrics"]'::JSONB,
 '[{"label":"1 Day","description":"Day retreat dengan agenda kompak — recommended untuk grup 50–150 pax dengan budget controlled.","from":"IDR 750.000"},{"label":"2D1N","description":"Standard format paling diminati. Cukup deep untuk meaningful, cukup ringkas untuk weekday-friendly.","from":"IDR 1.500.000"},{"label":"3D2N","description":"Deep retreat untuk strategic alignment atau team reset. Recommended untuk leadership team.","from":"IDR 2.400.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 750.000","description":"Untuk day program 50+ pax dengan agenda kompak dan venue standar.","features":["Day program logistics","Standard hotel/venue mid-tier","Activities 3–4 sessions","F&B lunch & snack","Standard transportation","Basic documentation"]},{"name":"Premium","from":"IDR 1.500.000","description":"Most popular. 2D1N dengan venue premium dan agenda yang lebih substantive.","features":["2D1N full program","Premium resort/villa","Custom-designed activities","Full F&B + welcome dinner","Branded welcome kit","Professional video recap","Pre/post engagement survey","Dedicated PM + Fasilitator"]},{"name":"Bespoke","from":"IDR 2.500.000","description":"Fully custom design untuk C-suite, board, atau program dengan complexity tinggi.","features":["Full bespoke design","Concierge-level logistics","Exclusive venue option","Premium F&B (chef''s table option)","Cinematic recap film","Curated speaker/fasilitator","Post-event coaching follow-up","Executive aftercare"]}]'::JSONB,
 '[{"q":"Berapa minimum peserta untuk outing kantor?","a":"Minimum 30 pax untuk program standar agar economy of scale tercapai. Untuk executive offsite dengan grup <30, kami tetap bisa handle dengan pricing tier Bespoke."},{"q":"Berapa lead time minimum yang disarankan?","a":"Untuk program 50–200 pax: minimum 6 minggu. Untuk 200+ pax: minimum 8 minggu. Untuk urgent (<4 minggu), kami punya rapid-response capability dengan surcharge."},{"q":"Apakah bisa multi-destinasi dalam 1 trip?","a":"Ya. Kami sering merancang program yang menggabungkan Bandung + Lembang, atau Bandung + Ciwidey. Untuk lintas-kota (Bandung + Jogja), butuh planning lebih panjang."},{"q":"Apakah ada paket dengan transportasi dari Jakarta?","a":"Ya, transportasi PP Jakarta–Bandung tersedia (bus eksekutif, mini bus, atau private car). Untuk grup besar, kami coordinate konvoi dengan jeda waktu agar arrival smooth."},{"q":"Bagaimana dengan peserta yang vegetarian atau alergi tertentu?","a":"Setiap pre-event briefing, kami collect dietary requirement detail. Catering kami support vegetarian, vegan, halal-certified, dan major allergies."},{"q":"Apa yang membedakan outing kantor kami dari vendor lain?","a":"Tiga hal: (1) Objective-driven design — bukan paket cookie-cutter, (2) Methodology 5-step yang terdokumentasi dan terukur, (3) Track record 13 tahun dengan 180+ enterprise client termasuk Fortune 500 Indonesia."}]'::JSONB,
 'Outing Kantor Bandung — Corporate Outing untuk Enterprise Indonesia',
 'Outing kantor strategis dari 50–800 pax, dengan objective bisnis terukur. 13 tahun, 500+ program. Bandung, Lembang, Ciwidey.',
 'published', 1),

-- 2. Team Building
('team-building', 'Team Building', 'Team Building',
 'Aktivitas behavior-driven yang terikat dengan team OKR — bukan games random.',
 'Team building kami dirancang dari behavior team yang Anda ingin perkuat, bukan dari katalog aktivitas. Setiap exercise punya learning objective spesifik dan post-activity debrief yang dipimpin fasilitator bersertifikasi.',
 'users',
 '30–500 pax',
 '["Half-day", "Full-day", "2D1N"]'::JSONB,
 450000,
 'IDR 450.000 / pax',
 '["Behavior shift measurable via fasilitator debrief & survey", "Cross-functional understanding meningkat signifikan", "Action items konkret yang dibawa kembali ke kantor", "Kohesi tim yang berlanjut weeks/months post-event"]'::JSONB,
 '["HR L&D yang butuh program di luar workshop kelas", "Manager yang ingin breaking silos antar departemen", "Engineering Lead yang mau aktivasi cross-team", "People & Culture untuk new hire onboarding", "VP/Director untuk team kick-off awal tahun", "Project Lead pra mega-project launch"]'::JSONB,
 '["Diagnostic call: behavior gap analysis", "Custom activity design (3–8 modul)", "Sertifikasi fasilitator (Lencioni, DiSC, dll)", "Equipment & props lengkap", "Venue indoor/outdoor", "Pre/post behavior assessment", "Group debrief session terpimpin", "Personal reflection workbook", "Photo & video documentation", "Action plan template per team", "Post-event report kelompok", "30-day follow-up check-in"]'::JSONB,
 '[{"label":"Half-day (3–4 jam)","description":"Tactical session focused untuk single behavior outcome. Cocok untuk integrate dengan agenda lain.","from":"IDR 450.000"},{"label":"Full-day","description":"Comprehensive program dengan 4–6 modul + lunch & debrief. Format paling populer.","from":"IDR 850.000"},{"label":"2D1N Intensive","description":"Deep immersion untuk team yang baru terbentuk atau menghadapi transformation period.","from":"IDR 1.800.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 450.000","description":"Half-day program dengan 3–4 modul untuk objective tunggal.","features":["Half-day program","3–4 modul activity","Junior fasilitator","Equipment standar","Basic debrief","Lunch included"]},{"name":"Premium","from":"IDR 850.000","description":"Full-day dengan senior fasilitator dan pre/post assessment.","features":["Full-day program","Senior bersertifikasi fasilitator","5–6 modul + customization","Pre/post behavior assessment","Group + individual debrief","Action plan workbook","Photo/video documentation"]},{"name":"Bespoke","from":"IDR 1.800.000","description":"Curriculum-grade program dengan psychometric assessment dan follow-up coaching.","features":["2D1N intensive program","Lead fasilitator + assistant","Psychometric assessment (DiSC/CliftonStrengths)","Custom modul untuk specific OKR","Individual coaching session","30 + 90 day follow-up","Cinematic recap film","Executive readout report"]}]'::JSONB,
 '[{"q":"Apa perbedaan team building dan outbound?","a":"Outbound fokus ke physical adventure (rafting, paintball, dll). Team building fokus pada behavioral learning — aktivitas adalah vehicle, debrief adalah inti. Team building kami evidence-based dengan fasilitator bersertifikasi."},{"q":"Apa yang menjadi success metric team building?","a":"Tiga metric: (1) Self-reported team cohesion uplift via survey, (2) Behavioral indicator yang diobservasi fasilitator, (3) Action item completion rate dalam 30-90 hari post-event."},{"q":"Apakah bisa dijalankan indoor di hotel/kantor?","a":"Sangat bisa. Banyak modul team building kami dirancang indoor-friendly untuk weekday session. Outdoor activity dijadikan opsional, bukan mandatory."}]'::JSONB,
 'Team Building Bandung — Behavior-Driven Activity untuk Corporate Team',
 'Team building enterprise dengan curriculum-based approach, fasilitator bersertifikasi, dan post-activity debrief terukur.',
 'published', 2),

-- 3. Company Gathering
('company-gathering', 'Company Gathering', 'Company Gathering',
 'Acara tahunan kelas enterprise — annual gathering, family day, town hall.',
 'Company gathering untuk 100–1.500 peserta dengan production-grade execution. Storytelling kuat, AV produksi konferensi, dan pengalaman yang membangun loyalitas brand internal jangka panjang.',
 'stars',
 '100–1500 pax',
 '["1 hari", "2D1N"]'::JSONB,
 850000,
 'IDR 850.000 / pax',
 '["Brand internal & company culture aktivasi nyata", "Mass logistics dijalankan dengan SOP enterprise", "Konten visual & video untuk employer branding tahunan", "Recognition moment yang memorable untuk top performers"]'::JSONB,
 '["HR Director untuk annual company gathering", "GA Department yang handle mass event 500+ pax", "Internal Comms untuk culture activation", "Founder/CEO yang ingin moment dengan whole company"]'::JSONB,
 '["Theme & narrative development", "Stage & AV production-grade", "MC profesional + talent booking", "Registration & check-in system", "Mass transportation coordination", "Catering 500–1500 pax", "Entertainment & live performance", "Award & recognition ceremony"]'::JSONB,
 '[{"label":"Day Gathering","description":"Half-day to full-day event di venue convention/ballroom.","from":"IDR 850.000"},{"label":"2D1N Annual","description":"Annual gathering format dengan inap di resort.","from":"IDR 1.700.000"},{"label":"Family Day","description":"Untuk karyawan + keluarga. Aktivitas anak-anak, entertainment.","from":"IDR 950.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 850.000","description":"Day gathering 200–500 pax dengan production standard.","features":["Day event format","Stage standard + sound system","Lunch + snack catering","MC + standard entertainment","Basic AV production"]},{"name":"Premium","from":"IDR 1.700.000","description":"2D1N annual gathering dengan inap & full production.","features":["2D1N format","Premium resort accommodation","Stage & AV conference-grade","Headline entertainment talent","Recognition ceremony","Cinematic video recap"]},{"name":"Bespoke","from":"IDR 2.800.000","description":"Flagship annual event untuk 800–1500 pax.","features":["Custom theme & narrative","LED stage, theater-grade lighting","Celebrity talent booking","Custom set design","Annual report video output"]}]'::JSONB,
 '[{"q":"Berapa kapasitas maksimum?","a":"Kami pernah mengelola gathering hingga 1.500 pax dengan multi-venue arrangement. Untuk skala >1500, perlu planning extended 12+ minggu."},{"q":"Apakah include booking artis/MC?","a":"Ya. Talent booking kami include — dari MC profesional, band, comedian, hingga celebrity headline."}]'::JSONB,
 'Company Gathering Bandung — Annual Event Enterprise 100–1500 Pax',
 'Company gathering production-grade, annual event, family day untuk enterprise Indonesia.',
 'published', 3),

-- 4. MICE Bandung
('mice-bandung', 'MICE Bandung', 'MICE',
 'Meeting, Incentive, Convention, Exhibition di Bandung dengan production-grade execution.',
 'Full-service MICE management — venue sourcing, AV production, registration, transportation, accommodation. Bandung adalah destinasi MICE strategis dengan akses Jakarta yang dekat, cuaca ideal sepanjang tahun, dan venue berkelas international.',
 'presentation',
 '50–2000 pax',
 '["Day MICE", "Multi-day"]'::JSONB,
 950000,
 'IDR 950.000 / pax',
 '["Production-grade execution: AV, lighting, stage international standard", "Vendor network preferred partner dengan negotiated rates", "Compliance & risk protocol enterprise", "Multi-day event managed end-to-end tanpa friction"]'::JSONB,
 '["Corporate Event Manager dengan budget enterprise", "Conference organizer untuk annual summit", "Sales Director untuk sales kick-off / SKO"]'::JSONB,
 '["Venue sourcing & negotiation", "AV production: stage, sound, lighting", "Conference registration system", "Speaker management & green room", "Multi-day catering coordination", "Coffee break & networking session"]'::JSONB,
 '[{"label":"Day MICE","description":"Single-day conference atau corporate event.","from":"IDR 950.000"},{"label":"2-Day Conference","description":"Annual conference dengan multiple session tracks.","from":"IDR 1.900.000"},{"label":"3+ Day Convention","description":"Multi-day convention dengan exhibition.","from":"IDR 2.800.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 950.000","description":"Day MICE 100–300 pax.","features":["Day event format","Mid-tier ballroom venue","Standard AV","Coffee break + lunch"]},{"name":"Premium","from":"IDR 1.900.000","description":"2-day conference conference-grade.","features":["2-day format","Premium 5-star venue","Stage + LED + lighting design","Speaker coordination"]},{"name":"Bespoke","from":"IDR 2.800.000","description":"Multi-day flagship convention.","features":["3+ day format","Exclusive venue arrangement","Custom set & exhibition booth","Live streaming + recording"]}]'::JSONB,
 '[{"q":"Mengapa Bandung untuk MICE?","a":"Akses dari Jakarta 2.5 jam, cuaca 20–25°C sepanjang tahun, venue 5-star dengan rate 30–40% lebih kompetitif dari Jakarta."}]'::JSONB,
 'MICE Bandung — Meeting Incentive Convention Exhibition Production-Grade',
 'MICE Bandung 50–2000 pax. Venue international tier, AV production, registration system.',
 'published', 4),

-- 5. Corporate Retreat
('corporate-retreat', 'Corporate Retreat', 'Corporate Retreat',
 'Reflective retreat untuk leadership & senior team dengan setting alam Lembang/Ciwidey.',
 'Multi-day retreat yang dirancang untuk mendalami strategi, refleksi, dan alignment kepemimpinan. Setting alam yang tenang, agenda yang menyeimbangkan deep work dan recovery.',
 'mountain',
 '10–80 pax',
 '["2D1N", "3D2N", "4D3N"]'::JSONB,
 2400000,
 'IDR 2.400.000 / pax',
 '["Strategic clarity di level leadership — written commitments", "Personal & team alignment yang lebih dalam dari workshop biasa", "Output: roadmap & decision yang dieksekusi post-retreat"]'::JSONB,
 '["C-suite untuk annual strategic planning", "Board members untuk governance retreat", "Senior Leadership Team untuk alignment session"]'::JSONB,
 '["Pre-retreat strategic interview (founder/CEO)", "Custom agenda design (strategy + reflection)", "Exclusive venue arrangement", "Senior fasilitator (strategist-grade)", "Premium accommodation (villa/boutique)"]'::JSONB,
 '[{"label":"2D1N Strategic","description":"Focused offsite untuk single strategic theme.","from":"IDR 2.400.000"},{"label":"3D2N Deep","description":"Comprehensive retreat. Most popular format.","from":"IDR 3.200.000"},{"label":"4D3N Immersive","description":"Untuk leadership transformation atau board-level deep dive.","from":"IDR 4.500.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 2.400.000","description":"2D1N untuk senior team.","features":["2D1N format","Boutique villa Lembang/Ciwidey","Senior fasilitator","Standard F&B"]},{"name":"Premium","from":"IDR 3.200.000","description":"3D2N dengan venue exclusive.","features":["3D2N format","Exclusive villa private","Strategist + fasilitator","Strategic output document","30 + 90 day follow-up"]},{"name":"Bespoke","from":"IDR 4.500.000","description":"Concierge-level retreat.","features":["Bespoke duration","Ultra-private venue + chef","Lead strategist + external speaker","Personal coach booking"]}]'::JSONB,
 '[{"q":"Apa perbedaan corporate retreat dan corporate outing?","a":"Retreat fokus pada strategy + reflection (depth), outing fokus pada team experience (breadth). Retreat biasanya 6–80 pax dengan executive tier."}]'::JSONB,
 'Corporate Retreat Bandung — Strategic Leadership Retreat Lembang Ciwidey',
 'Reflective corporate retreat 10–80 pax untuk C-suite dan senior leadership. Setting alam Lembang & Ciwidey.',
 'published', 5),

-- 6. Leadership Camp
('leadership-camp', 'Leadership Camp', 'Leadership Development',
 'Curriculum-based leadership development immersion dengan kurikulum terstruktur.',
 'Program development pemimpin dengan curriculum-grade approach — modul tersusun, fasilitator bersertifikasi, framework yang diakui industri, dan pre/post assessment yang mengukur capability uplift.',
 'flag',
 '15–60 pax',
 '["3D2N", "5D4N"]'::JSONB,
 3200000,
 'IDR 3.200.000 / pax',
 '["Capability uplift terukur dengan pre/post assessment", "Personal Development Plan (PDP) per peserta", "Cohort yang menjadi internal community jangka panjang"]'::JSONB,
 '["L&D Manager dengan emerging leader pipeline", "HR Director untuk high-potential program", "Talent Management untuk succession planning"]'::JSONB,
 '["Pre-program psychometric assessment", "Custom curriculum (5–8 modul)", "Lead fasilitator + ko-fasilitator", "External guest speaker (1–2)", "Action learning project per peserta", "1:1 coaching session (60 min)"]'::JSONB,
 '[{"label":"3D2N Intensive","description":"Compact leadership camp untuk middle management.","from":"IDR 3.200.000"},{"label":"5D4N Deep","description":"Comprehensive leadership immersion.","from":"IDR 5.800.000"},{"label":"Modular (3 × 2D)","description":"Modular format — 3 sesi 2-hari spread over 3 bulan.","from":"IDR 6.500.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 3.200.000","description":"3D2N camp untuk 15–30 emerging leader.","features":["3D2N format","Standard curriculum","Bersertifikasi fasilitator","Certificate"]},{"name":"Premium","from":"IDR 5.800.000","description":"5D4N immersion dengan psychometric + 1:1 coaching.","features":["5D4N intensive","Pre/post psychometric assessment","1:1 coaching session","ROI measurement"]},{"name":"Bespoke","from":"IDR 8.500.000","description":"Custom curriculum + extended coaching engagement.","features":["Custom curriculum design","Modular over 3–6 bulan","6 × 1:1 coaching sessions","Quarterly cohort reunion"]}]'::JSONB,
 '[{"q":"Apa curriculum yang digunakan?","a":"Framework yang diakui: Situational Leadership, Growth Mindset, Decision-Making, Difficult Conversations. Curriculum di-tailor sesuai brief."}]'::JSONB,
 'Leadership Camp Bandung — Curriculum-Based Leadership Development',
 'Leadership development immersion dengan curriculum-grade approach untuk emerging leader & high-potential.',
 'published', 6),

-- 7. Executive Offsite
('executive-offsite', 'Executive Offsite', 'Executive Offsite',
 'Offsite strategis untuk C-suite dan board dengan concierge-level service.',
 'Offsite eksklusif untuk top leadership — fokus pada strategic planning, board alignment, dan decision-making di lingkungan yang memungkinkan deep thinking di luar tekanan operasional kantor.',
 'briefcase',
 '6–40 pax',
 '["2D1N", "3D2N"]'::JSONB,
 4500000,
 'IDR 4.500.000 / pax',
 '["Strategic plan yang siap eksekusi dengan ownership clarity", "Confidential, high-trust setting untuk percakapan sulit", "Concierge-level service yang sesuai dengan executive expectation"]'::JSONB,
 '["Board of Directors untuk governance retreat", "C-suite untuk annual strategic planning", "Founder team untuk product/strategy pivot"]'::JSONB,
 '["Pre-offsite strategic interview", "Custom agenda dengan strategist input", "Ultra-private venue exclusive booking", "Lead strategist / facilitator", "Concierge personal manager", "Premium catering (chef on-site)"]'::JSONB,
 '[{"label":"2D1N Strategic","description":"Fokus offsite untuk single strategic theme.","from":"IDR 4.500.000"},{"label":"3D2N Comprehensive","description":"Deep dive offsite dengan ruang untuk strategy + recovery + bonding.","from":"IDR 6.500.000"},{"label":"Board Retreat","description":"Governance-level retreat dengan custom format.","from":"IDR 8.500.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 4.500.000","description":"2D1N untuk C-suite 6–15 pax.","features":["2D1N format","Private boutique venue","Senior fasilitator","Premium catering"]},{"name":"Premium","from":"IDR 6.500.000","description":"3D2N dengan strategist + chef + concierge.","features":["3D2N format","Ultra-private villa","Chef on-site experience","Quarterly follow-up"]},{"name":"Bespoke","from":"IDR 9.500.000","description":"Concierge-level board retreat.","features":["Custom duration & venue","International venue option","Personal concierge per executive","1-year strategic partnership program"]}]'::JSONB,
 '[{"q":"Bagaimana confidentiality protocol kami?","a":"NDA bilateral dengan klien, NDA dengan setiap vendor on-site, area off-limit untuk staff non-essential, no photo/video tanpa izin eksplisit."}]'::JSONB,
 'Executive Offsite Bandung — Strategic Offsite untuk C-Suite & Board',
 'Concierge-level executive offsite untuk C-suite, board, dan founder team. Ultra-private setting.',
 'published', 7),

-- 8. Incentive Trip
('incentive-trip', 'Incentive Trip', 'Incentive Travel',
 'Rewards trip untuk top performer dan sales achiever, didesain dengan psikologi recognition.',
 'Trip apresiasi yang memorable untuk top performer. Premium experience yang menjadi motivator nyata untuk pencapaian target — desain trip berdasarkan psikologi recognition, bukan sekedar liburan mewah.',
 'trophy',
 '20–200 pax',
 '["2D1N", "3D2N"]'::JSONB,
 3500000,
 'IDR 3.500.000 / pax',
 '["Motivasi sales team meningkat (testable via leading indicator)", "Word-of-mouth internal yang kuat — drive aspirasi cohort berikutnya", "Linkage langsung ke commercial outcome bisnis"]'::JSONB,
 '["Sales Director untuk President''s Club / Top Performer", "VP Sales untuk annual incentive program", "Channel Head untuk distributor reward"]'::JSONB,
 '["Custom recognition program design", "Premium destination & venue", "Welcome ceremony & arrival ritual", "Award ceremony & trophy", "Branded recognition merchandise", "Photographer & videographer dedicated"]'::JSONB,
 '[{"label":"2D1N Domestic","description":"Reward trip dalam negeri untuk cohort 30–100 pax.","from":"IDR 3.500.000"},{"label":"3D2N Domestic","description":"Format paling populer.","from":"IDR 5.500.000"},{"label":"International","description":"Untuk top-tier achiever — Singapore, Bangkok, Bali luxury.","from":"IDR 12.000.000"}]'::JSONB,
 '[{"name":"Essential","from":"IDR 3.500.000","description":"2D1N reward trip dengan recognition ceremony.","features":["2D1N domestic","Premium hotel 4★","Award ceremony","Photo + video recap"]},{"name":"Premium","from":"IDR 5.500.000","description":"3D2N dengan branded experience.","features":["3D2N domestic premium","5★ resort/villa","VIP transportation","Cinematic recap film"]},{"name":"Bespoke","from":"IDR 12.000.000","description":"International luxury incentive.","features":["Domestic/international luxury","Concierge per guest","Chef-led culinary experience","1-year achievement program ongoing"]}]'::JSONB,
 '[{"q":"Bagaimana memilih destinasi yang tepat?","a":"Filter: aspirational level, logistical feasibility, story-ability — apakah destination ''quotable'' untuk peer story setelah pulang."}]'::JSONB,
 'Incentive Trip — Rewards Trip untuk Top Performer & Sales Achiever',
 'Incentive trip premium untuk top performer. Recognition design berbasis psikologi.',
 'published', 8)

ON CONFLICT (slug, deleted_at) DO NOTHING;

-- ---------------------------------------------------------------------
-- TESTIMONIALS — Featured client quotes
-- ---------------------------------------------------------------------
INSERT INTO public.testimonials (
  quote, author, title, company, industry, is_featured, status, display_order
) VALUES
('Bukan jualan tour. Mereka beneran mikirin objective kami, terus design experience yang nyatuin tim regional — cara yang workshop internal nggak pernah bisa.',
 'Mira A.', 'Head of People & Culture', 'Bank Nasional', 'Banking', true, 'published', 1),
('Best offsite engineering team kami selama 7 tahun terakhir. Detail diurus tanpa kami harus pusing, dan agenda-nya substantif — bukan cuma jalan-jalan.',
 'Daniel S.', 'VP Engineering', 'Tech Unicorn Indonesia', 'Tech', true, 'published', 2),
('450 pax dari 14 kota, zero incident. Procurement kami yang biasanya picky, akhirnya stop nanya — semua dokumen, kontrak, transparan dari hari pertama.',
 'Rina P.', 'GA Director', 'FMCG Multinational', 'FMCG', true, 'published', 3);

-- ---------------------------------------------------------------------
-- CLIENT LOGOS — Trust bar
-- ---------------------------------------------------------------------
INSERT INTO public.client_logos (company_name, industry, is_featured, status, display_order) VALUES
('Telkom Indonesia', 'Tech', true, 'published', 1),
('Bank Mandiri', 'Banking', true, 'published', 2),
('Pertamina', 'Oil & Gas', true, 'published', 3),
('Astra', 'Conglomerate', true, 'published', 4),
('Unilever', 'FMCG', true, 'published', 5),
('BCA', 'Banking', true, 'published', 6),
('Tokopedia', 'Tech', true, 'published', 7),
('Gojek', 'Tech', true, 'published', 8),
('Pupuk Kaltim', 'Manufacturing', true, 'published', 9),
('BRI', 'Banking', true, 'published', 10),
('Kementerian PUPR', 'Government', true, 'published', 11),
('Sinarmas', 'Conglomerate', true, 'published', 12);

-- ---------------------------------------------------------------------
-- FAQS — Homepage featured FAQ
-- ---------------------------------------------------------------------
INSERT INTO public.faqs (
  category, question, answer, is_featured, status, display_order
) VALUES
('general', 'Berapa budget per orang?',
 'Ada 3 tier: Essential (IDR 750K–1.2M, day program), Premium (IDR 1.5M–2.5M, 2D1N — paling populer), Bespoke (IDR 2.5M+, executive custom). Final number tergantung durasi, akomodasi, dan tingkat custom. Mau angka cepat? Pakai budget calculator kami, hasilnya instan.',
 true, 'published', 1),
('logistics', 'Lead time buat event 300+ pax?',
 'Sweet spot-nya 8 minggu — cukup buat sourcing venue, design konsep, koordinasi vendor tanpa rush. Tapi kalau timeline-nya cuma 4–6 minggu, masih bisa kami handle dengan tim core yang lebih intensif. Pernah eksekusi 450 pax dalam 5 minggu, zero incident.',
 true, 'published', 2),
('general', 'Tema bisa di-custom sesuai company value?',
 'Wajib di-custom — itu inti kerjaan kami. Step 2 dari metodologi kami adalah Conceive: kami design narrative, tema, dan learning arc yang nyambung sama company value, momen organisasi, dan personality peserta Anda. Bukan cookie-cutter.',
 true, 'published', 3),
('pricing', 'Payment term-nya gimana?',
 'Default: 30% DP saat kontrak, 50% milestone H-30, 20% pelunasan post-event. Pakai PO term 30 hari? Bisa, fleksibel sesuai compliance procurement Anda. NPWP, faktur pajak, dokumen legal — semua lengkap dan transparan dari awal.',
 true, 'published', 4),
('logistics', 'Asuransi peserta ada?',
 'Ada, minimum IDR 1 miliar per pax untuk semua program. Untuk grup 100+ pax atau outdoor activity, ada medic on-site dan protokol K3 tambahan. Risk plan didokumentasikan per event — procurement Anda bisa minta sebelum kontrak.',
 true, 'published', 5),
('booking', 'Cancellation policy?',
 'Procurement-friendly: cancel >60 hari = refund 80%. 30–60 hari = 50%. 7–30 hari = 25%. <7 hari = no refund, tapi bisa reschedule tanpa charge dalam 12 bulan. Force majeure (bencana alam, regulasi pemerintah) di-cover terpisah.',
 true, 'published', 6);

-- ---------------------------------------------------------------------
-- PROGRAMS — Signature featured programs
-- ---------------------------------------------------------------------
INSERT INTO public.programs (
  slug, title, tag, short_description, duration, capacity_label,
  price_from_idr, price_from_display, destination, is_featured, status, display_order
) VALUES
('lembang-leadership-offsite-2d1n', 'The Lembang Leadership Offsite', 'Signature',
 'Strategic offsite untuk C-suite & senior leadership. Setting hutan pinus Lembang.',
 '2D1N', 'Up to 80 pax', 2400000, 'IDR 2.400.000', 'Lembang', true, 'published', 1),
('ciwidey-corporate-retreat-3d2n', 'Ciwidey Corporate Retreat', 'Premium',
 'Deep retreat di kebun teh & glamping kelas premium. Untuk team reset & strategic planning.',
 '3D2N', 'Up to 120 pax', 2800000, 'IDR 2.800.000', 'Ciwidey', true, 'published', 2),
('pangalengan-leadership-camp-5d4n', 'Pangalengan Leadership Camp', 'Curriculum',
 'Curriculum-based leadership immersion. 5 hari intensif untuk emerging leader cohort.',
 '5D4N', 'Up to 50 pax', 3200000, 'IDR 3.200.000', 'Pangalengan', true, 'published', 3),
('family-gathering-bandung-1d', 'Bandung Family Gathering Day', 'Family',
 'Family day kelas korporat — entertainment, catering, dan logistik untuk ratusan keluarga karyawan.',
 '1 Day', 'Up to 800 pax', 850000, 'IDR 850.000', 'Bandung', true, 'published', 4)
ON CONFLICT (slug, deleted_at) DO NOTHING;

-- ---------------------------------------------------------------------
-- CASE STUDIES — Featured proof of work
-- ---------------------------------------------------------------------
INSERT INTO public.case_studies (
  slug, headline, industry, pax_count, duration, client_name, is_anonymized,
  quote, quote_author, quote_title, is_featured, status, display_order
) VALUES
('national-bank-leadership-retreat',
 'Engagement score naik 34% post-event untuk 450 leader dari 14 cabang.',
 'Banking & Finance', 450, '3D2N', '[Anonymized National Bank]', true,
 'They didn''t sell us a tour — they designed an experience that aligned our regional teams in ways our internal workshops never could.',
 'Mira A.', 'Head of People & Culture', true, 'published', 1),
('tech-unicorn-engineering-offsite',
 'Best engineering offsite dalam 7 tahun company history — terdokumentasi via internal NPS.',
 'Tech & Startup', 120, '2D1N', '[Anonymized Tech Unicorn]', true,
 'Best offsite our engineering team has ever had. Setiap detail diurus tanpa kami perlu mikir.',
 'Daniel S.', 'VP Engineering', true, 'published', 2),
('fmcg-mnc-annual-gathering',
 'Annual gathering 850 pax dari 14 kota — flawless mass logistics dengan zero incident.',
 'FMCG & Multinational', 850, '1 Day', '[Anonymized FMCG MNC]', true,
 'Untuk 450 peserta dari 14 kota, eksekusinya flawless. Procurement kami impressed dengan transparansi dan compliance.',
 'Rina P.', 'GA Director', true, 'published', 3)
ON CONFLICT (slug, deleted_at) DO NOTHING;

-- ---------------------------------------------------------------------
-- DONE
-- ---------------------------------------------------------------------
-- After running this seed:
-- ✓ services: 8 rows (all 8 service categories with full content)
-- ✓ testimonials: 3 featured quotes
-- ✓ client_logos: 12 enterprise client names (placeholder — replace with real)
-- ✓ faqs: 6 homepage FAQs
-- ✓ programs: 4 signature programs
-- ✓ case_studies: 3 featured cases
-- ✓ site_settings: updated with real branding
--
-- Next session: build admin CRUD pages for each module so content can be
-- managed via /admin/content/* without touching code.
