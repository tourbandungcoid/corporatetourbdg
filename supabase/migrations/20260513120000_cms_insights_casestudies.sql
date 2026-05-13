-- ---------------------------------------------------------------------
-- Migration: hybrid-lite CMS for insights + case_studies
-- ---------------------------------------------------------------------
-- Adds DB tables for the two content types that change most often
-- (new articles, new case studies). Other content types (services,
-- packages, FAQ, glossary, team, pricing) remain in repo data files.
--
-- Tables get a `content_status` column (draft / published / archived)
-- and the public site reads only `published` rows.
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  hero_image_url TEXT,
  hero_image_alt TEXT,
  publish_date DATE NOT NULL,
  read_time_min INT NOT NULL DEFAULT 5,
  author_name TEXT NOT NULL DEFAULT 'Senior Planning Team',
  author_role TEXT NOT NULL DEFAULT 'TourBandung Corporate',
  author_initials TEXT NOT NULL DEFAULT 'TC',
  status public.content_status NOT NULL DEFAULT 'draft',
  tldr JSONB NOT NULL DEFAULT '[]'::jsonb,
  sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  related_slugs JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by UUID REFERENCES public.profiles(id),
  updated_by UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_insights_status_pub ON public.insights(status, publish_date DESC) WHERE status = 'published';

DROP TRIGGER IF EXISTS set_insights_updated_at ON public.insights;
CREATE TRIGGER set_insights_updated_at BEFORE UPDATE ON public.insights
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE IF NOT EXISTS public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  industry TEXT NOT NULL,
  industry_label TEXT NOT NULL,
  outcome_headline TEXT NOT NULL,
  short_description TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  hero_image_url TEXT,
  hero_image_alt TEXT,
  pax TEXT NOT NULL,
  duration TEXT NOT NULL,
  location TEXT NOT NULL,
  budget_tier TEXT NOT NULL,
  service_slug TEXT NOT NULL,
  status public.content_status NOT NULL DEFAULT 'draft',
  challenge JSONB NOT NULL DEFAULT '[]'::jsonb,
  approach JSONB NOT NULL DEFAULT '[]'::jsonb,
  execution JSONB NOT NULL DEFAULT '[]'::jsonb,
  outcome JSONB NOT NULL DEFAULT '[]'::jsonb,
  metrics JSONB NOT NULL DEFAULT '[]'::jsonb,
  testimonial JSONB,
  related_service_slugs JSONB NOT NULL DEFAULT '[]'::jsonb,
  gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by UUID REFERENCES public.profiles(id),
  updated_by UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_case_studies_status ON public.case_studies(status) WHERE status = 'published';
CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON public.case_studies(industry) WHERE status = 'published';

DROP TRIGGER IF EXISTS set_case_studies_updated_at ON public.case_studies;
CREATE TRIGGER set_case_studies_updated_at BEFORE UPDATE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ---------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "insights_public_read" ON public.insights;
CREATE POLICY "insights_public_read" ON public.insights
  FOR SELECT TO anon, authenticated
  USING (status = 'published');

DROP POLICY IF EXISTS "insights_admin_all" ON public.insights;
CREATE POLICY "insights_admin_all" ON public.insights
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

DROP POLICY IF EXISTS "case_studies_public_read" ON public.case_studies;
CREATE POLICY "case_studies_public_read" ON public.case_studies
  FOR SELECT TO anon, authenticated
  USING (status = 'published');

DROP POLICY IF EXISTS "case_studies_admin_all" ON public.case_studies;
CREATE POLICY "case_studies_admin_all" ON public.case_studies
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

-- ---------------------------------------------------------------------
-- Seed: import all existing content from repo data files (idempotent)
-- ---------------------------------------------------------------------

-- Auto-generated seed. Do not edit manually.

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  '5-pillar-corporate-outing-design',
  '5-Pillar Corporate Outing Design™ — Framework dari 400+ Events',
  'Methodology yang kami pakai untuk design corporate outing yang outcome-driven, bukan generic. 5 pilar — Objective, Audience, Venue, Activity, Measurement.',
  'Methodology',
  '5-Pillar Corporate Outing Design framework — methodology untuk corporate event yang outcome-driven. Dari 400+ events delivered oleh TourBandung Corporate.',
  'https://drive.google.com/thumbnail?id=1zGufb68_WTLYzpXXSakFoqChmT3dREQJ&sz=w2400',
  'Corporate outing peserta di lokasi Bandung — momentum bonding tim',
  '2026-05-10'::date,
  9,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Generic corporate outing fail karena tidak start dari objective. 70% perusahaan book vendor tanpa clear goal definition.","5-Pillar framework: Objective → Audience → Venue & Logistics → Activity Architecture → Outcome Measurement. Sequential, bukan parallel.","Pillar 1 (Objective) adalah yang paling underrated. Tanpa clear objective, 4 pillar lain jadi opinion.","Pillar 5 (Measurement) adalah yang paling sering di-skip. Tanpa measurement, susah justify investment ke management."]'::jsonb,
  '[{"paragraphs":["Setelah deliver 400+ corporate events sejak 2018, kami notice pattern jelas: event yang outcome-nya impactful selalu di-design dari objective dulu — bukan dari venue, activity, atau budget. Event yang generic dan forgettable, selalu start dari pertanyaan salah: ''Mau outing dimana?'' atau ''Activity apa yang seru?''","Framework yang kami pakai untuk men-translate brief client jadi corporate event yang impactful — 5-Pillar Corporate Outing Design™. Sequential framework, bukan parallel. Setiap pillar adalah prerequisite untuk pillar berikutnya."]},{"heading":"Pillar 1: Objective Alignment","paragraphs":["Pertanyaan terbalik: apa team outcome yang mau dicapai? Bukan ''kita mau outing tanggal X'', tapi ''kita butuh tim X melakukan Y dalam waktu Z''. Outcome bisa bonding pasca-merger, engagement boost, cultural reinforcement, strategic alignment, atau leadership development — masing-masing demand format yang berbeda.","Dari 400+ event, kami consistently see: tim yang sebelum event punya specific articulated objective, post-event engagement score-nya naik signifikan dan retention impact bertahan 6+ bulan. Tim yang event-nya generic (''refresh + bonding casual''), impact rata-rata cuma 2-4 minggu."],"callout":{"label":"Insight","text":"70% perusahaan yang kami brief pertama kali tidak punya specific objective. Brief mereka ''we want outing'' atau ''team need bonding''. Sebelum kami design, harus brief intensif 60-90 menit untuk articulate objective real."}},{"heading":"Pillar 2: Audience Mapping","paragraphs":["Setelah objective clear, baru analisis audience. Demografi (umur range, gender mix, generational split), fitness/mobility level, religion + dietary needs, cultural diversity, dan first-timer vs repeat outing experience.","Cross-generational outing demand parallel activity tracks (Gen-Z prefer high-energy + photo moments, Gen-X prefer pragmatic + comfort). First-timer outdoor demand Tier 1 Light activity dengan modification option. Religious mix demand parallel F&B station + prayer time accommodation."]},{"heading":"Pillar 3: Venue & Logistics Curation","paragraphs":["Venue di-pick berdasarkan objective + audience. Bonding intimate → villa private. Premium awarding → hotel ballroom premium. Adventure outbound → outdoor camp. Strategic retreat → eco-lodge atau private heritage villa.","Logistics: pax capacity, dietary feasibility, accessibility (wheelchair, mobility-impaired), parking + transport logistics, medical proximity, dan safety standards. Untuk grup 200+ pax, multi-venue cluster setup adalah default."],"bullets":["Lembang area — accessible, premium villa density tinggi, ideal untuk 50-300 pax","Ciwidey — adventure + glamping, lebih remote, ideal untuk team bonding deep","Pangalengan — quiet, scenic, ideal untuk retreat reflektif","Bandung kota — accessibility-first untuk hybrid event + MICE"]},{"heading":"Pillar 4: Activity Architecture","paragraphs":["Activity di-frame untuk hit specific team outcome — bukan random fun. Activity mix di-design untuk balance energy curve (tidak boleh back-to-back high intensity), accommodate audience diversity, dan deliver shared moments yang memorable.","Methodology framework yang kami pakai: Tuckman model untuk team development arc, DiSC profile untuk personality awareness session, Belbin team roles untuk role optimization. Pilihan framework di-match dengan goal dan team maturity level."]},{"heading":"Pillar 5: Outcome Measurement","paragraphs":["Pillar paling sering di-skip — dan paling impactful. Tanpa measurement, susah justify investment ke management dan susah improve next event.","Framework standar yang kami integrate: (1) Pre-event baseline survey (engagement score, communication index, retention intent). (2) Post-event survey 1 minggu setelahnya. (3) Long-term retention check 6 bulan kemudian. Compare delta antara peserta vs non-peserta = data yang bisa di-translate ke financial outcome."],"callout":{"label":"Example","text":"Untuk 100 peserta event, kalau attrition reduction 10% × salary Rp 8 jt × 9 bulan turnover cost = Rp 720 jt retention saving. Event budget Rp 250 jt = ROI 2.9x. Itu angka yang CFO bisa relate."}},{"heading":"Sequential, bukan parallel","paragraphs":["Implementasi framework ini sequential. Tidak bisa skip pillar 1 dan langsung ke pillar 3 (venue). Tidak bisa design activity (pillar 4) tanpa tahu objective dan audience. Sequential discipline ini yang membedakan vendor specialist dari travel agent retail yang nyambi corporate.","Untuk perusahaan yang serius pertimbangin corporate outing sebagai strategic investment (bukan annual ritual generic), framework ini adalah starting point. Brief tim Anda lewat 5 pillar — apa objective, siapa audience, kenapa venue X, kenapa activity Y, bagaimana measurement-nya."]}]'::jsonb,
  '["bandung-outing-tier-system","justify-outing-budget-to-finance"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'force-majeure-contingency-corporate-outing',
  'Force Majeure & Contingency Planning untuk Corporate Outing Bandung',
  'Hujan ekstrem, longsor, akses jalan tertutup, atau insiden medis — apa yang terjadi kalau worst case happen di tengah event lo? Framework risk tiering + contingency plan dari 400+ events.',
  'Risk Management',
  'Framework force majeure + contingency planning untuk corporate outing Bandung. Risk register, backup indoor plan, evacuation protocol, insurance coverage breakdown.',
  'https://drive.google.com/thumbnail?id=1zGufb68_WTLYzpXXSakFoqChmT3dREQJ&sz=w2400',
  'Corporate outing peserta di lokasi Bandung — momentum bonding tim',
  '2026-05-10'::date,
  9,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Bandung & Jawa Barat punya risk profile spesifik: hujan ekstrem Oktober–April, longsor di jalur Lembang/Ciwidey, kabut tebal di Pangalengan, dan area-area remote yang medical evacuation 45+ menit.","Risk tiering 3 level: Likely (rain, traffic delay) — plan indoor backup mandatory. Moderate (sakit peserta, jadwal molor) — protokol standar. Rare-but-critical (kecelakaan, force majeure) — full evacuation + insurance.","Setiap event 7Summits di-attach risk register + RS partner contact + crisis comm template. Bukan add-on premium — included di setiap tier."]'::jsonb,
  '[{"paragraphs":["Pertanyaan yang HR jarang tanya pre-kontrak, tapi paling regret kalau tidak tanya: \"Kalau hujan deras pas Day 2 morning outbound, plan B apa?\" Vendor yang jawab \"don''t worry, nanti kita atur\" — itu red flag besar. Vendor specialist punya contingency plan terdokumentasi sebelum kontrak ditandatangan.","Setelah 400+ event di Jawa Barat, kami consolidate framework risk management 3-tier yang jadi default semua engagement. Bukan dijual sebagai \"premium add-on\" — risk management adalah baseline."]},{"heading":"Risk profile Bandung & Jawa Barat","paragraphs":["Konteks geografis: Bandung & sekitarnya adalah dataran tinggi dengan beberapa karakteristik risk-specific yang harus di-plan, bukan di-deny."],"bullets":["Musim hujan Oktober–April: probabilitas hujan deras di Lembang/Ciwidey 60–80% setiap sore. Bukan \"mungkin hujan\" — \"hampir pasti hujan\"","Jalur Lembang & Ciwidey: longsor occasional di musim hujan, akses bisa terputus 6–24 jam","Pangalengan & area selatan: kabut tebal pagi (jarak pandang 5–20m), berpengaruh ke jadwal outdoor & transportasi","Area remote (Cikidang, Rancabali): RS terdekat 30–45 menit. Untuk activity Tier 2 (high ropes, paintball, ATV), medical proximity adalah faktor venue selection"]},{"heading":"Tier 1: Likely risks — mandatory mitigation","paragraphs":["Risk yang probabilitas terjadi >30% setiap event. Bukan \"if\", tapi \"when\". Mitigasi di-build-in ke design."],"numbered":["Hujan deras → setiap outdoor activity HARUS punya indoor backup version yang testable. Outbound games → indoor team building. BBQ dinner → ballroom dinner. Bonfire → indoor reflection circle. Non-negotiable.","Traffic Jakarta–Bandung Friday & Sunday → ETA dengan buffer +90 menit. Plan tidak boleh assume \"normal traffic\".","Jadwal molor → buffer 30 menit di transition antar activity. Compressed schedule yang back-to-back = recipe untuk crisis di hari-H.","Peserta yang fatigue overload → break + opt-out station tersedia di setiap activity. Tidak ada peer pressure."],"callout":{"label":"Red flag","text":"Vendor yang quote outing 2D1N dengan 8+ activity slot tanpa rest buffer — itu unrealistic. Hampir pasti molor & burn-out peserta di Day 2 sore."}},{"heading":"Tier 2: Moderate risks — protokol standar","paragraphs":["Probabilitas 5–20% per event. Tidak setiap event terjadi, tapi cukup sering sehingga harus punya protokol siap-pakai."],"bullets":["Peserta sakit (mual, demam, alergi makanan): first aid kit di setiap venue, P3K-certified field crew, kontak RS partner sudah pre-confirmed","Vendor lokal terlambat / no-show (catering, MC, equipment): backup vendor stand-by, contract clause yang ada penalty + SLA","Peserta hilang (di area outdoor luas, terutama di kawasan hutan): protokol headcount per activity, system buddy, radio communication untuk field crew","Equipment failure (sound system mati, generator down): backup equipment on-site untuk event >100 pax"]},{"heading":"Tier 3: Rare-but-critical — full evacuation protocol","paragraphs":["Probabilitas <2% per event, tapi impact maksimum kalau terjadi. Untuk Tier 3, ada full evacuation protocol + insurance + crisis comm template yang sudah di-test."],"bullets":["Kecelakaan peserta (cedera serius di outbound, jatuh dari high ropes): evacuation ke RS partner dalam <30 menit, tim P3K + ambulance stand-by untuk Tier 2 activity, asuransi event coverage Rp 100–500 jt per peserta","Force majeure (gempa, longsor besar, banjir bandang): protokol evacuate ke titik kumpul pre-designated, koordinasi BPBD lokal, akomodasi alternative di Bandung kota","Insiden keamanan (kecelakaan transportasi grup, kebakaran venue): contingency hotel kontrak emergency di Bandung kota, transport backup, asuransi perjalanan grup"],"callout":{"label":"Crisis comm","text":"Setiap event punya pre-drafted crisis comm: SMS/WA template ke emergency contact, statement internal untuk management, dan briefing untuk peserta yang tidak terdampak. Bukan improvisasi di tengah krisis."}},{"heading":"Insurance: apa yang biasanya tidak di-cover","paragraphs":["Insurance event = umumnya cover personal accident + medical untuk peserta. Yang sering tidak di-cover & harus di-cek explicitly:"],"bullets":["Activity high-risk yang tidak di-declare upfront (extreme outbound, paragliding, scuba) — biasanya excluded","Pre-existing medical condition peserta — perlu disclosure dan rider tambahan","Force majeure act of God (gempa, gunung meletus) — kebanyakan polis exclude, perlu coverage khusus","Loss/damage of personal belongings peserta — biasanya tidak di-cover, harus claim ke asuransi peserta sendiri"]},{"heading":"Cara HR validasi risk readiness vendor","paragraphs":["Sebelum tandatangan kontrak, minta 4 dokumen ini ke vendor. Vendor yang serius akan kasih dalam 24 jam. Vendor yang generic akan stall atau kasih boilerplate generic."],"numbered":["Risk register event lo specific — bukan template universal. Harus mention venue & activity yang akan di-eksekusi.","RS partner list per area + estimated evac time. Untuk area remote, ini bukan optional.","Indoor backup plan terdokumentasi untuk setiap outdoor activity, lengkap dengan venue alternate.","Insurance policy summary + coverage limit per peserta. Pastikan amount cukup vs salary band peserta lo."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","indoor-vs-outdoor-corporate-outing"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'indoor-vs-outdoor-corporate-outing',
  'Indoor vs Outdoor Corporate Outing: Decision Framework',
  'Kapan indoor lebih tepat dari outdoor? Bukan soal musim atau preference saja — bergantung objective, audience profile, dan risk tolerance. Framework decision dari 400+ events.',
  'Format Design',
  'Framework decision indoor vs outdoor corporate outing Bandung. 6 faktor decision: objective, audience fitness, weather window, budget, brand image, risk tolerance.',
  'https://drive.google.com/thumbnail?id=1Wvu5nFEI9naLVxB4zD6ynyo_m_nXJKQD&sz=w2400',
  'Annual company gathering — momentum tahunan tim perusahaan',
  '2026-05-09'::date,
  7,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Indoor vs outdoor bukan soal preference HR — soal fit dengan objective + audience + risk profile.","6 faktor decision: objective type, audience fitness mix, weather window, budget tier, brand image, risk tolerance.","Hybrid (mixed indoor-outdoor 70:30 atau 30:70) seringkali optimal untuk grup 80+ pax — accommodate diversity tanpa kompromi outcome."]'::jsonb,
  '[{"paragraphs":["Pertanyaan default HR di briefing pertama: \"Mendingan indoor atau outdoor ya?\" Jawaban honest: tergantung 6 faktor. Indoor cocok untuk objective tertentu, outdoor untuk objective lain. Hybrid seringkali optimal untuk grup besar dengan diversity audience.","Framework decision yang kami pakai bukan vote preference HR — sequential check 6 faktor yang ujung-nya menghasilkan rekomendasi defensible."]},{"heading":"Faktor 1: Objective type","paragraphs":["Outdoor unggul untuk: bonding deep, ice-breaking untuk team baru, energy reset post-burnout, leadership challenge. Outdoor inherently demand collaboration + adaptasi — outcome bonding lebih dalam.","Indoor unggul untuk: strategic alignment, training/upskilling, awarding & celebration, hybrid working session, multi-stakeholder formal meeting. Indoor kontrol environment 100% — focus tidak teralihkan oleh cuaca."],"callout":{"label":"Rule of thumb","text":"Bonding/emotional outcome → outdoor lean. Cognitive/strategic outcome → indoor lean. Hybrid outcome → mix dengan ratio sesuai weight objective."}},{"heading":"Faktor 2: Audience fitness mix","paragraphs":["Audience yang 30%+ punya mobility/fitness limitation (umur 45+, pregnant peserta, recent recovery, disability) → pure outdoor adventure jadi exclusion problem. Solusi: indoor primary + optional outdoor track untuk yang interested.","Audience predominantly muda + fit + first-timer outdoor → outdoor lean, dengan moderation activity Tier 1 (light). Audience executive (umur 40+, mostly desk-bound) → indoor primary dengan light outdoor element (jalan santai, cooking)."]},{"heading":"Faktor 3: Weather window","paragraphs":["Bandung musim hujan (Oktober–April): probabilitas hujan sore >60%. Outdoor afternoon activity = risk indoor backup hampir pasti aktif. Plan ya indoor-primary atau scheduled morning untuk outdoor.","Musim kemarau (Mei–September): outdoor full-day feasible. Tapi suhu Bandung kota bisa 32°C+ midday — outdoor heavy di siang hari demand canopy + hydration station.","Untuk event yang scheduled fixed (annual gathering biasanya Desember atau awal tahun), check probabilitas musim. Tidak masuk akal force outdoor di puncak musim hujan."]},{"heading":"Faktor 4: Budget tier","paragraphs":["Foundation tier (Rp 1.5–2.5 jt/pax): outdoor base camp setting jauh lebih affordable dari hotel/ballroom rental. Outdoor lean.","Elevated (Rp 2.5–4.5 jt/pax): hybrid feasible. Indoor di hotel/resort + outdoor activity di venue terdekat.","Signature (Rp 4.5–7 jt/pax): premium indoor di hotel berbintang + curated outdoor experience. Hybrid 50:50 atau 70:30 (indoor lean untuk brand image).","Bespoke (Rp 7 jt+/pax) executive offsite: indoor private heritage villa atau premium eco-lodge. Outdoor element optional & curated (nature walk, sunrise photography)."]},{"heading":"Faktor 5: Brand image & corporate culture","paragraphs":["Brand premium banking, consulting, tech enterprise → ekspektasi peserta indoor refined. Outdoor adventure heavy bisa under-deliver perception.","Brand startup, lifestyle, FMCG youth-targeted → outdoor adventure heavy align dengan brand energy. Indoor formal terasa stiff.","Brand industrial, manufacturing, logistic → mixed reception. Older workforce prefer indoor comfort, younger workforce open ke outdoor."],"callout":{"label":"Insight","text":"Brand image bukan tentang \"yang penting peserta happy\" — tentang reinforcement nilai brand internal. Outing yang mismatch brand justru terasa awkward & costly."}},{"heading":"Faktor 6: Risk tolerance & insurance","paragraphs":["Outdoor adventure (Tier 2 activity: high ropes, paintball, rafting) demand insurance coverage tinggi + waiver explicit. Untuk perusahaan dengan risk tolerance konservatif (regulated industry: banking, healthcare), indoor lean atau outdoor Tier 1 (light) saja.","Indoor pure: insurance baseline cukup, waiver standar. Trade-off: kurang \"memorable\" untuk peserta younger generation yang expect Instagram-able moment."]},{"heading":"Hybrid 70:30 atau 30:70: format optimal untuk grup besar","paragraphs":["Untuk grup 80+ pax dengan audience diversity tinggi, hybrid jadi default rekomendasi:"],"numbered":["Hybrid 70:30 (indoor-heavy): Day 1 strategic + awarding di ballroom, Day 2 morning outdoor activity (terbuka opt-out), Day 2 sore networking + closing indoor.","Hybrid 30:70 (outdoor-heavy): Day 1 ice-breaking + outbound, Day 1 malam bonfire reflection circle, Day 2 morning workshop indoor, Day 2 sore farewell + photo."]},{"heading":"Cara apply decision framework untuk next event","paragraphs":["Step-by-step: (1) Articulate objective primary + secondary. (2) Audit audience fitness & mobility profile via survey 3-pertanyaan. (3) Check weather window event date. (4) Confirm budget tier. (5) Validate brand image fit. (6) Set risk tolerance threshold.","Hasil 6 faktor ini = rekomendasi indoor/outdoor/hybrid dengan ratio defensible. Bukan opinion HR, bukan template generic — keputusan data-driven."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","force-majeure-contingency-corporate-outing","corporate-outing-theme-selection"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'bandung-outing-tier-system',
  'Bandung Outing Tier System™ (BOTS) — 4 Tier Pricing & Quality',
  'Framework klasifikasi corporate outing di Bandung dengan 4 tier: Foundation, Elevated, Signature, Bespoke. Investment range, vendor capability, dan use case per tier.',
  'Framework',
  'Bandung Outing Tier System (BOTS) — framework pricing & quality classification untuk corporate outing di Bandung. 4 tier dengan investment range jelas.',
  'https://drive.google.com/thumbnail?id=1FgSvGURuRXmXEmUWe7RKqF86kUzIjpzX&sz=w2400',
  'Glamping corporate experience — outdoor premium di Bandung',
  '2026-05-08'::date,
  7,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Corporate outing market Bandung tidak transparent soal tier. Vendor advertise ''paket murah'' tanpa context — bandingin ''paket murah'' yang Rp 1 jt/pax vs ''paket murah'' yang Rp 2 jt/pax susah.","BOTS adalah 4-tier classification kami: Foundation (Rp 1.5-2.5 jt/pax), Elevated (Rp 2.5-4.5 jt/pax), Signature (Rp 4.5-7 jt/pax), Bespoke (Rp 7 jt+/pax).","Bukan tier = lebih baik. Tier yang fit kebutuhan = optimal. Foundation cocok untuk quarterly bonding 30-80 pax. Bespoke untuk C-suite offsite 8-15 pax."]'::jsonb,
  '[{"paragraphs":["Pertanyaan paling sering kami terima dari HR pertama kali: ''Berapa biaya outing kantor di Bandung?'' Jawaban honest: tergantung. Tergantung apa? Tergantung tier. Tier apa? Itulah yang BOTS clarify.","Bandung Outing Tier System (BOTS) adalah framework klasifikasi yang kami develop dari 400+ events delivered. 4 tier yang reflect different combinations of venue quality, activity sophistication, dan service level. Each tier punya use case yang specific."]},{"heading":"Tier 1: Foundation (Rp 1.5–2.5 jt/pax)","paragraphs":["Entry-level corporate outing dengan kualitas tetap baik. Venue: standard villa atau resort mid-tier. F&B: Indonesian buffet quality, dietary accommodation basic. Activity: outbound Tier 1 Light atau bonding informal. Facilitator: senior planner internal (bukan certified coach).","Best for: quarterly bonding 30-80 pax, departmental outing, refresh casual. Cocok untuk perusahaan yang budget-conscious tapi tidak mau kompromi safety atau service."]},{"heading":"Tier 2: Elevated (Rp 2.5–4.5 jt/pax)","paragraphs":["Sweet spot untuk most annual outing. Venue: premium villa atau resort 4-star dengan ballroom kalau perlu. F&B: 50/50 buffet + plating premium untuk gala dinner. Activity: outbond Tier 2 Medium atau hybrid format dengan facilitator certified untuk team building.","Best for: annual employee gathering 100-300 pax, team building cohort, mid-size company outing. Tier paling sering kami deliver — 60% dari portfolio kami di tier ini."]},{"heading":"Tier 3: Signature (Rp 4.5–7 jt/pax)","paragraphs":["Premium tier untuk marquee event. Venue: hotel bintang 5 atau heritage villa premium. F&B: fine-dining set menu atau live cooking buffet. Activity: bespoke design dengan facilitator senior + AV production untuk awarding night. Photo + video professional documentation full coverage.","Best for: annual gala dinner premium, anniversary milestone (10+ tahun), post-IPO celebration, marquee leadership cohort."]},{"heading":"Tier 4: Bespoke (Rp 7 jt+/pax)","paragraphs":["Fully custom premium experience. Venue: private mountain estate, heritage villa exclusive, atau international destination. Service: dedicated concierge, customized everything (menu, decor, branding). Facilitator: certified executive coach senior (ICF MCC), strategy consultant level McKinsey/BCG alumni.","Best for: C-suite executive offsite, founders ritual annual, M&A integration retreat. Smaller scale (5-25 pax), highly substantive substansi."],"callout":{"label":"Insight","text":"Tier choice harus di-base pada use case, bukan budget ceiling. Beberapa client kami memilih Tier 2 untuk 300 pax annual gathering dan Tier 4 untuk 8 pax founders ritual — total spend mereka untuk tahun itu Rp 900 juta dengan 2 event yang impact-nya complementary."}},{"heading":"Cara apply BOTS ke decision Anda","paragraphs":["Brief tim Anda lewat 4 pertanyaan: (1) Apa use case event ini — bonding casual, annual celebration, strategic work, atau leadership development? (2) Berapa pax? (3) Bagaimana perceived value yang kami mau project ke peserta? (4) Apa budget total yang available?","Match jawaban ini ke tier. Tier yang fit, bukan tier yang highest, adalah pilihan optimal. Vendor profesional akan honest soal tier yang fit kebutuhan Anda — kalau vendor selalu push tier tertinggi tanpa diagnosis, that''s a red flag."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","justify-outing-budget-to-finance"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'corporate-outing-theme-selection',
  'Corporate Outing Theme Selection: Avoiding Cringe, Hitting Brand',
  'Tema generic kaya "Bali Vibes" atau "Olympic Games" sudah expired. Framework theme selection yang align dengan brand, objective, dan audience — dari 400+ events delivered.',
  'Program Design',
  'Framework pemilihan tema corporate outing yang relevant ke brand & objective. 4 jenis tema: narrative, aesthetic, mission, cultural. Plus 5 tema yang harus dihindari di 2026.',
  'https://drive.google.com/thumbnail?id=1FgSvGURuRXmXEmUWe7RKqF86kUzIjpzX&sz=w2400',
  'Glamping corporate experience — outdoor premium di Bandung',
  '2026-05-07'::date,
  8,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Tema generic (\"Bali Vibes\", \"Hawaiian Beach\", \"Olympic Games\") sudah expired — peserta perceive sebagai effort minimal vendor.","4 kategori tema yang masih relevan 2026: narrative-driven, aesthetic-curated, mission-based, cultural-rooted.","Tema yang work = align dengan brand identity + reinforce objective event + accommodate audience demographic. Bukan tema cantik di Pinterest yang ditempel ke event."]'::jsonb,
  '[{"paragraphs":["\"Mau tema apa?\" — pertanyaan klasik yang HR sering tidak punya jawaban kuat. Default jadinya tema generic dari Pinterest atau katalog vendor: Bali Vibes, Hawaiian Beach, Olympic Games, Casino Night, Masquerade Ball. Di 2026, tema-tema ini sudah saturated dan perceive peserta sebagai \"effort minimal vendor\".","Tema yang berhasil punya 3 karakteristik: (1) align dengan brand identity perusahaan, (2) reinforce objective primary event, dan (3) accommodate audience demographic & cultural mix. Tema yang gagal: dipick dari katalog vendor tanpa context."]},{"heading":"Kategori 1: Narrative-Driven Theme","paragraphs":["Tema berbentuk story arc yang peserta navigate sepanjang event. Memberikan rasa progress + memorable narrative spine."],"bullets":["\"Expedition\": peserta jadi explorer team yang lewatin misi-misi sepanjang event. Awarding malam = celebration \"summit reached\"","\"Time Capsule\": opening = panggil masa lalu perusahaan (foto founding team, milestones). Day 2 = present focus. Closing = vision masa depan","\"Detective / Heist\": cocok untuk grup creative & marketing — mystery solving sepanjang event, klimaks malam dengan reveal"],"callout":{"label":"Pakai untuk","text":"Objective bonding deep + storytelling brand. Audience predominantly Millennial / Gen-Z yang appreciate narrative."}},{"heading":"Kategori 2: Aesthetic-Curated Theme","paragraphs":["Tema yang focus visual + experience refinement, bukan story arc. Cocok untuk event premium / awarding dimana visual delivery jadi central piece."],"bullets":["\"Modernist Industrial\": estetika minimal + concrete + brushed metal. Match untuk tech / manufacturing brand","\"Tropical Refined\": bukan cliche Hawaii — modern interpretation tropical (rattan, neutral palette, soft botanical). Premium feel","\"Heritage Indonesia\": curated by region (Jawa elegant, Bali contemporary, Sumatra textiles). Local pride tanpa stereotype","\"Garden Soirée\": elegant outdoor dining dengan refined lighting + curated florals. Cocok untuk grup executive premium"],"callout":{"label":"Pakai untuk","text":"Brand premium (banking, consulting, professional services) + objective awarding atau celebration. Demand venue + F&B yang match aesthetic."}},{"heading":"Kategori 3: Mission-Based Theme","paragraphs":["Tema yang attach event ke purpose-driven mission. Beyond bonding — peserta leave dengan rasa kontribusi."],"bullets":["\"Plant 1000 trees\": CSR-integrated outing. Peserta plant pohon di hutan rehab Jawa Barat. Sustainability brand alignment","\"Community impact day\": 50% time outing, 50% volunteer di komunitas lokal (renovasi sekolah, gotong royong)","\"Skill exchange\": peserta share skill ke komunitas (financial literacy, digital skill workshop)"],"callout":{"label":"Pakai untuk","text":"Brand yang punya ESG / sustainability commitment. Audience Millennial / Gen-Z lebih engaged dengan mission-based theme dari generic fun."}},{"heading":"Kategori 4: Cultural-Rooted Theme","paragraphs":["Tema yang root ke budaya lokal Sunda / Indonesia tanpa stereotype. Demand riset proper, bukan cosplay budaya."],"bullets":["\"Sundanese Pasar Malam\": pasar tradisional reimagined dengan curated F&B Sunda authentic + live music traditional + interactive booth kerajinan","\"Tarian & Cerita\": opening dengan tari Jaipong oleh sanggar lokal + storytelling tentang nilai filosofi Sunda yang connect ke nilai perusahaan","\"Petualangan Pasundan\": expedition narrative dengan elemen budaya Sunda (peta tradisional, makanan khas, bahasa daerah dalam game)"],"callout":{"label":"Penting","text":"Hindari versi karikatur (\"costume Sunda costume\" yang stereotype). Engage konsultan budaya atau sanggar lokal untuk autentisitas. Budaya bukan dekorasi."}},{"heading":"5 tema yang harus dihindari di 2026","paragraphs":["Tema-tema berikut sudah saturated atau punya implicit problem. Hindari kecuali ada twist signifikan:"],"numbered":["\"Hawaiian / Bali Beach Vibes\": cliche, peserta perceive low-effort, tidak match Bandung context (dataran tinggi, bukan pantai).","\"Olympic Games\": kompetisi heavy dengan winner-loser dynamic justru bisa hurt team cohesion. Plus terkesan kekanak-kanakan untuk audience profesional.","\"Casino Night\": gambling theme problematic dari sisi compliance + brand image untuk banyak industri (regulated, family-oriented brand).","\"Masquerade Ball\": cliche, costume requirement adds friction, jarang fit brand modern.","\"Black-tie Gala\" (tanpa context): terlalu formal untuk most outing, costume requirement exclude peserta yang tidak comfortable."]},{"heading":"Process pilih tema yang work","paragraphs":["Sequential 5-step yang kami pakai:"],"numbered":["Confirm objective primary event (bonding / strategic / celebration / mission).","Audit brand identity — refined? playful? mission-driven? cultural?","Map audience demographic + cultural mix.","Shortlist 3 tema dari 4 kategori, evaluate fit dengan 3 faktor di atas.","Validasi internal stakeholder (HR + brand/marketing) sebelum lock-in. Tema yang HR suka tapi brand reject = friction kemudian."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","indoor-vs-outdoor-corporate-outing"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'justify-outing-budget-to-finance',
  'Cara Justify Budget Outing ke Finance — ROI Framework untuk HR',
  'HR sering struggle convince CFO untuk approve outing budget. Framework di artikel ini translate engagement outcome ke financial impact yang Finance team bisa relate.',
  'HR Tactics',
  'ROI framework untuk justify corporate outing budget ke CFO/Finance team. Translate engagement + retention outcome ke financial saving. Untuk HR Indonesia.',
  'https://drive.google.com/thumbnail?id=1RaLPiB5OfUq1v079lQfp2YonxtU7PSdh&sz=w2400',
  'C-level strategic offsite — intimate setting',
  '2026-05-05'::date,
  8,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Finance team challenge budget outing karena no hard number — beda dengan marketing yang bisa show CAC/LTV.","Framework: retention saving = attrition reduction × salary × turnover multiplier. Untuk 100 peserta event, typical saving Rp 700jt+ dari attrition reduction.","Pre-event baseline + post-event measurement + 6-month retention check = data points yang bisa di-translate.","Bonus: productivity improvement, internal referral rate, dan employee referral cost saving juga measurable kalau perlu push harder."]'::jsonb,
  '[{"paragraphs":["Conversation paling sering kami dengar dari HR Manager: ''Kami sudah lock vendor, budget Rp 300 juta untuk 100 pax, tapi Finance push back. Mereka minta justify ROI.'' Pertanyaan reasonable dari Finance perspective — budget itu bisa untuk hire 1 employee tambahan, atau spent di tools, atau diversify ke training program.","Framework di artikel ini adalah yang kami share ke client kami untuk help mereka win Finance approval. Bukan magic — sequential measurement methodology yang translate intangible engagement outcome ke financial impact."]},{"heading":"Step 1: Pre-event baseline survey","paragraphs":["1 minggu sebelum event, kirim 10 pertanyaan ke peserta. Engagement score (eNPS), retention intent (''how likely you''d stay 12 months from now''), communication quality, leadership trust, role clarity, manager relationship.","Hasil baseline ini critical — tanpa baseline, susah claim improvement post-event. Pre-event survey takes 5 minutes per peserta. 70%+ response rate normal kalau di-communicate properly."]},{"heading":"Step 2: Post-event survey (1 minggu setelahnya)","paragraphs":["Repeat 10 pertanyaan baseline + 5 reflection question specific event. Compare delta — typical improvement 15-30% pada engagement metric, 10-20% pada retention intent.","Sample data dari 100 peserta event: eNPS naik dari 32 ke 58 (+26 points), retention intent ''definitely stay 12 mo'' naik dari 62% ke 81% (+19 percentage points). Numbers yang bisa di-screenshot dan share ke Finance."]},{"heading":"Step 3: Long-term retention check (6 bulan setelahnya)","paragraphs":["Track voluntary attrition: peserta event vs non-peserta dalam role/department serupa. Untuk structured event, peserta event attrition turun 5-15% vs non-peserta dalam 6-12 bulan setelahnya.","Catatan penting: retention saving adalah lagging indicator. Tidak bisa show pre-event. Tapi setelah event ke-2 atau ke-3, Anda punya track record yang konkret untuk justify subsequent budgets."]},{"heading":"Step 4: Translate ke financial outcome","paragraphs":["Formula sederhana: Retention saving = Attrition reduction × Salary × Turnover multiplier.","Variable: Attrition reduction (5-15% based on event measurement). Salary (use average rolling salary per peserta). Turnover multiplier (industry standard 6-9 bulan salary untuk replace + ramp up new employee)."],"callout":{"label":"Example calculation","text":"Event budget Rp 250 jt untuk 100 peserta. Attrition reduction 10% × 10 person × salary Rp 8 jt × 9 bulan turnover cost = Rp 720 juta retention saving. ROI = 720/250 = 2.9x. Itu angka yang concrete untuk Finance."}},{"heading":"Bonus: 3 additional impact yang juga measurable","paragraphs":["Productivity improvement — measure project completion rate post-event vs pre-event baseline. Engagement boost typically correlate dengan 8-15% productivity improvement bertahan 3-6 bulan.","Internal referral rate — engaged employee 4x lebih likely refer talent ke perusahaan. Saving on recruitment cost: avg Rp 25-50 jt per hire dari headhunter, vs referral bonus Rp 5-10 jt.","Cross-team collaboration frequency — HR-measurable via project tagging. Engagement boost typically correlate dengan 20-30% improvement dalam cross-team initiative count."]},{"heading":"Tips comms ke Finance","paragraphs":["Frame budget request sebagai investment, bukan expense. Show baseline data + improvement target + measurement plan. Set explicit success criteria yang Finance bisa hold Anda accountable.","Setelah event 1, share post-event report ke Finance head — bukan untuk brag, tapi build credibility untuk subsequent requests. Kalau dilakukan consistent, eventually Finance jadi advocate Anda untuk event budget (mereka punya data untuk justify ke CEO)."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","cross-generational-team-building"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'cross-generational-team-building',
  'Cross-Generational Team Building: Gen-Z, Millennial, Gen-X',
  'Workforce Indonesia sekarang mix 3 generasi. One-size-fits-all team building fail untuk semua. Framework design yang accommodate dan engage cross-generational.',
  'Team Design',
  'Framework team building untuk cross-generational workforce Indonesia (Gen-Z, Millennial, Gen-X). Parallel activity tracks, accommodate preferences berbeda.',
  'https://drive.google.com/thumbnail?id=1vLvaJJ11Wwgz_BpfEl1TFswcBjCT2wId&sz=w2400',
  'Outbound corporate — offroad activity di Bandung',
  '2026-05-03'::date,
  6,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["3 generasi di workforce punya preferences sangat berbeda — Gen-Z prefer choice + photo moments, Millennial prefer experiential bonding, Gen-X prefer pragmatic + comfort.","Single-stream team building fail untuk cross-generational. Solution: parallel activity tracks dimana peserta self-select.","Mix tracks: high-energy outbound, reflective workshop, cultural session. Cross-mingling natural di lunch atau closing."]'::jsonb,
  '[{"paragraphs":["Generic team building di Indonesia masih default ke single-stream agenda — semua peserta lakukan activity yang sama, di waktu yang sama. Format ini works untuk era ketika workforce homogen. Sekarang? Workforce Indonesia mix 3 generasi yang punya preferences fundamentally berbeda."]},{"heading":"Mapping the 3 generations","paragraphs":["Gen-Z (born 1997+): grew up dengan smartphone dan social media. Prefer short blocks (max 60-90 min), high choice/variety, content yang photo-able. Avoid: long mandatory sessions, top-down talks, no autonomy.","Millennial (born 1981-1996): generation yang most receptive to experiential bonding. Prefer meaningful, optional reflective time, premium quality. Avoid: forced fun, generic templates, infantilizing activity.","Gen-X (born 1965-1980): pragmatic, outcome-driven, less performative. Prefer comfort, family-inclusive optional, dan less excessive performance demand. Avoid: late-night party, excessive social media expectation."]},{"heading":"Design solution: parallel activity tracks","paragraphs":["Format yang kami consistently rekomendasi untuk cross-generational team: Day 2 morning split jadi 3 simultaneous activity tracks — peserta self-select. Tracks:"],"numbered":["Track A — High-Energy Outbound. Outbound Tier 2 (paintball, high ropes, ATV). Cocok Gen-Z + younger Millennial.","Track B — Reflective Workshop. Cultural session (batik, angklung) atau strategic workshop. Cocok older Millennial + Gen-X.","Track C — Bonding-Focused. Cooking competition, photo quest, atau low-impact games. Cocok mixed-age + family-inclusive."]},{"heading":"Cross-mingling naturally di non-track time","paragraphs":["Lunch + dinner = cross-track mingling. Hot drink station 24/7 (untuk informal small group conversation). Bonfire circle malam (all-track participation tapi optional). Result: deep bonding di track-nya masing-masing PLUS cross-track interaction natural."]},{"heading":"Common mistakes yang harus dihindari","paragraphs":["Force participation di high-intensity activity untuk Gen-X. Equivalent untuk Gen-Z: force long lecture-style content. Result: engagement turun, perception ''team building generic kaya'' menguat."],"bullets":["Tidak buat opt-out mechanism — peserta yang punya physical limitation atau preference berbeda harus bisa opt-out tanpa stigma","Single-stream 8 jam — engagement drop drastis setelah jam ke-4 untuk semua generation","Forced fun — activity yang terasa ''mandatory enthusiasm'' lebih hurt dari benefit","Generic photo posting expectation — Gen-Z love sharing tapi mereka curate. Gen-X biasanya enggan"]},{"heading":"Cara apply untuk next team event Anda","paragraphs":["Survey pre-event simple — 3 pertanyaan: physical activity preference (low/medium/high), prefer reflective vs energetic, family-inclusive event? Dari hasil ini, balance track allocation dan komunikasikan dengan jelas pre-event apa yang akan terjadi.","Cross-generational design adalah investment kecil di planning yang berdampak besar di outcome. Most company yang implementasi ini consistently lihat engagement metric improvement 15-25% vs single-stream format mereka sebelumnya."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","post-merger-cultural-bonding"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  'post-merger-cultural-bonding',
  'Post-Merger Cultural Bonding: 3-Day Integration Playbook',
  'Post-merger atau acquisition demand cultural integration yang cepat. Tanpa structured intervention, friksi early signal jadi attrition risk. 3-day playbook dari 8+ post-merger events.',
  'Strategic Event',
  'Playbook untuk post-merger cultural integration via 3-day corporate event. Dari 8+ post-merger events yang kami handle untuk tech, banking, dan FMCG.',
  'https://drive.google.com/thumbnail?id=1Zs5yMN6JLpCQ0mbKArehj2bTQkQ2oW2e&sz=w2400',
  'Large-scale corporate event — 800 pax di Lembang',
  '2026-04-30'::date,
  8,
  'Senior Planning Team',
  'TourBandung Corporate',
  'TC',
  'published',
  '["Post-merger / acquisition adalah moment paling fragile dalam company culture. Tanpa intervention deliberate, friksi early signal jadi attrition risk.","3-day playbook: Day 1 cultural exchange (curiosity-driven), Day 2 alignment work (parallel strategy session), Day 3 commitment + celebration.","Key principle: tidak boleh dominasi salah satu side. Awarding cross-team, F&B mix dari kedua side, dan leadership message harus reflect gabungan."]'::jsonb,
  '[{"paragraphs":["Dari 8 post-merger / acquisition integration events yang kami handle dalam 4 tahun terakhir, pattern paling consistent: company yang sukses integrate culturally selalu invest dalam structured intervention dalam 30-90 hari setelah deal close. Yang gagal? Mereka assume cultural integration akan happen organically.","Spoiler: organic culture integration biasanya bias ke side yang lebih dominant (parent company atau larger team). Acquired team merasa identity-nya hilang. Result: attrition risk tinggi dalam 12-18 bulan post-deal — exactly what M&A is supposed to avoid."]},{"heading":"Day 1: Cultural Exchange (Curiosity-Driven)","paragraphs":["Goal: peserta dari dua side meet, get curious tentang each other, set tone bahwa kedua culture valued. Bukan workshop, bukan strategy work — pure exposure + curiosity."],"numbered":["Arrival + welcome session dengan video founder kedua side sharing visi gabungan. Bukan corporate spin — authentic vulnerability.","Cultural exchange activity: peserta dipasangkan cross-team untuk 30-min casual conversation dengan prompt cards (e.g. ''what''s a tradition in your previous company you''d miss?'').","Welcome dinner outdoor dengan booth makanan khas dari masing-masing kota / kantor asal. Symbolic gesture — both cultures di-acknowledge.","Bonfire storytelling circle: peserta share moments yang shaped career mereka. Cross-team listening = empathy building natural."]},{"heading":"Day 2: Alignment Work (Parallel Strategy Tracks)","paragraphs":["Goal: dari empathy ke action. Cross-team work session dimana peserta dari dua side collaborate concretely."],"numbered":["Parallel strategy tracks per fungsi (Engineering, Product, Sales, Operations) — 3 jam working session. Each track mixed leadership dari kedua side untuk facilitate.","Lunch + small group discussion (4 group of 6, randomly mixed).","Olympic outbond multi-station — team baru cross-original-company. Forced cross-team mixing dalam low-stakes context.","Closing reflection circle: ''what surprised you positively about the other side today?''"]},{"heading":"Day 3: Commitment + Celebration","paragraphs":["Goal: lock the new culture publicly + celebrate the integration milestone."],"numbered":["Morning recap session — share what was learned from Day 1-2.","Awarding cross-team. Kategori dirancang yang inclusive (e.g. ''Best Collaborator'', ''Cultural Ambassador''). Awardee dipilih dari both sides.","Closing CEO address — commit pada gabungan culture, bukan dominasi salah satu side. Public commitment matters.","Group photo + departure."]},{"heading":"Key principles yang non-negotiable","paragraphs":["Pertama: tidak boleh dominasi salah satu side. F&B mix dari kedua side, awarding kategori inclusive, leadership message reflect gabungan.","Kedua: psychological safety paramount. Day 1 set ground rules — semua opinions valid, perspectives berbeda di-honor.","Ketiga: capture moments. Photographer + videographer profesional untuk hari memorable. Material untuk subsequent internal storytelling yang lock cultural narrative."],"callout":{"label":"Real outcome example","text":"Tech unicorn post-acquisition 800 pax (kami handle Q3 2024). Post-event survey: 95% peserta vote ''best company event'' tahun itu. 6-month retention check: voluntary attrition di acquired team turun 40% vs pre-merger trajectory. Cross-team collaboration project initiation naik 28% dalam 3 bulan."}},{"heading":"When to do this — timing matters","paragraphs":["Sweet spot: 30-90 hari setelah deal close. Sebelum 30 hari, operational integration masih chaos — peserta tidak punya bandwidth untuk cultural work. Setelah 90 hari, friksi early signal sudah jadi resistance entrenched — much harder to address."]}]'::jsonb,
  '["5-pillar-corporate-outing-design","cross-generational-team-building"]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  'post-merger-bonding-800-pax',
  'tech',
  'Tech Unicorn',
  'Post-merger bonding untuk 800 tim baru — satu suara dalam 3 hari.',
  'Tech unicorn paska akuisisi tim 800 pax butuh cultural integration cepat. 3D2N gathering di Lembang dengan multi-track activity, awarding cross-team, dan strategic alignment session.',
  'Case study: post-merger integration 800 pax untuk tech unicorn di Bandung. 3D2N program dengan cultural integration, awarding cross-team, dan strategic alignment.',
  'https://drive.google.com/thumbnail?id=1Zs5yMN6JLpCQ0mbKArehj2bTQkQ2oW2e&sz=w2400',
  'Large-scale corporate event — 800 pax di Lembang',
  '800 pax',
  '3D2N',
  'Lembang',
  'Premium',
  'company-gathering',
  'published',
  '["Dua tim dari perusahaan berbeda paska akuisisi — Tim A 500 orang dari parent company, Tim B 300 orang dari acquired startup. Cultural dynamics sangat berbeda: parent corporate-formal, startup hustle-casual.","HR mendeteksi friksi early signal: communication breakdown lintas departemen baru, ambiguity peran, dan attrition risk di Tim B (acquired startup) yang khawatir budaya akan di-overwrite.","Timeline tight: 6 minggu dari brief ke event. Logistic complex untuk 800 pax, multi-bus dari Jakarta."]'::jsonb,
  '["Brief intensif dengan HR Director + COO untuk identify success criteria: bukan bonding casual, tapi structural cultural integration.","Design 3D2N dengan 3 arc: Day 1 cultural exchange (curiosity-driven activity), Day 2 alignment work (parallel track strategy session per fungsi), Day 3 commitment + celebration.","Pick venue cluster Lembang — 2 hotel resort berdekatan untuk lodging, 1 outdoor venue untuk activity day. Coordinate transport 16 bus dari Jakarta + return.","Senior PM dedicated dengan 8 site coordinator on-site. Plus medical standby + dedicated logistic for dietary mapping (halal, vegan, gluten-free)."]'::jsonb,
  '["Day 1: Arrival, welcome session dengan video founder (parent + acquired) sharing visi gabungan. Cultural exchange activity — peserta dipasangkan cross-team untuk casual conversation.","Day 1 malam: Welcome dinner outdoor dengan booth makanan khas dari masing-masing kota asal. Storytelling circle bonfire — share moments yang shaped career mereka.","Day 2 pagi: Parallel strategy tracks — Engineering, Product, Sales, Operations. Each track 3 jam, mixed leadership dari kedua side untuk facilitate.","Day 2 sore: Activity day — Olympic outbond multi-station, peserta team baru cross-original-company. Closed dengan reflection circle.","Day 3: Awarding cross-team (kategori dirancang yang inclusive untuk both sides). Closing CEO address — commit pada gabungan culture, bukan dominasi salah satu side."]'::jsonb,
  '["Post-event engagement survey: 95% peserta vote event sebagai ''best company event'' tahun itu (baseline historic 65%).","6-month retention check: Voluntary attrition di acquired team turun 40% vs pre-merger trajectory.","Cross-team collaboration frequency (HR-measured via project tagging): naik 28% dalam 3 bulan setelah event.","Repeat booking: client kembali book 2 event berikutnya dalam 18 bulan setelahnya."]'::jsonb,
  '[{"label":"Peserta","value":"800"},{"label":"Best event vote","value":"95%"},{"label":"Attrition reduction","value":"40%"},{"label":"Cross-team collab","value":"+28%"}]'::jsonb,
  '{"quote":"Yang gw appreciate: senior planner dedicated dari briefing sampai event. Bukan rotating freelancer. Komunikasi clean, accountability ada nama.","name":"Andini Pratama","role":"HR Director","company":"Tech Unicorn (anonymized)"}'::jsonb,
  '["company-gathering","annual-company-trip","team-building"]'::jsonb,
  '[{"src":"https://drive.google.com/thumbnail?id=1Zs5yMN6JLpCQ0mbKArehj2bTQkQ2oW2e&sz=w2400","alt":"Large-scale corporate event — 800 pax di Lembang"},{"src":"https://drive.google.com/thumbnail?id=1zGufb68_WTLYzpXXSakFoqChmT3dREQJ&sz=w2400","alt":"Corporate outing peserta di lokasi Bandung — momentum bonding tim"},{"src":"https://drive.google.com/thumbnail?id=1prBQePuxrjkrLs2F-jDhIUbrk6vxERwc&sz=w2400","alt":"Group photo corporate gathering"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  'annual-gathering-banking-3depts',
  'banking',
  'Banking · BUMN',
  'Annual gathering 3 departemen — 92% tim vote ''best event'' dalam 5 tahun.',
  'BUMN bank dengan 3 departemen di-konsolidasi annual gathering — 120 pax di Ciwidey. Format hybrid: cultural workshop + structured team activity + gala dinner premium.',
  'Case study annual gathering 120 pax banking BUMN di Ciwidey. Vote 92% ''best event 5 tahun'' dengan hybrid format cultural + activity + gala.',
  'https://drive.google.com/thumbnail?id=1vLvaJJ11Wwgz_BpfEl1TFswcBjCT2wId&sz=w2400',
  'Outbound corporate — offroad activity di Bandung',
  '120 pax',
  '2D1N',
  'Ciwidey',
  'Standard',
  'corporate-retreat',
  'published',
  '["BUMN bank dengan 3 departemen (Risk, Operations, Compliance) yang traditionally siloed. HR mau annual gathering yang membawa connection bukan cuma celebration.","Budget constraint dari finance — harus tier standard, bukan premium. Sweet spot 120 pax adalah challenge logistics tersendiri (terlalu kecil untuk hotel ballroom besar, terlalu besar untuk villa single).","Bank context demand premium feel — image-conscious. Tidak mau kelihatan ''murahan'' walaupun budget standard."]'::jsonb,
  '["Pick venue villa cluster di Ciwidey — 3 villa berdekatan dengan common ballroom area. Premium feel achievable di budget standard.","Design hybrid format: cultural workshop hari 1 (angklung bareng Saung Mang Udjo), structured team activity hari 2 (Olympic outbond cross-departemen), gala dinner traditional Sundanese authentic.","Curate gala dinner — bukan buffet generic, tapi 5-course set menu Sundanese refined dengan plating premium. Cost sama dengan buffet, perceived value 2-3x lipat."]'::jsonb,
  '["Day 1: Arrival, cultural session angklung — peserta belajar bareng, 60 min performance circle. Bonding cepat lewat shared learning new skill.","Day 1 dinner: Gala 5-course set menu di area outdoor garden villa. Dress code casual elegant. MC senior bilingual.","Day 1 malam: Bonfire reflection circle — peserta share apa yang mereka pelajari dari departemen lain selama tahun lalu.","Day 2: Olympic outbond cross-departemen. 4 station, rotation 90 menit. Forced cross-team mixing.","Closing: Awarding cross-departemen (kategori dirancang untuk inclusive — bukan cuma ''top performer'', tapi ''best collaborator'', ''cultural ambassador'', etc)."]'::jsonb,
  '["Post-event survey: 92% peserta vote ''best event dalam 5 tahun''. Comparison vs previous year hotel ballroom format (vote 73%).","Cross-departemen project initiation dalam 3 bulan setelah event naik 35% (HR-measured).","Repeat booking 2 tahun consecutive setelahnya — client become anchor account untuk kami."]'::jsonb,
  '[{"label":"Peserta","value":"120"},{"label":"Best event vote","value":"92%"},{"label":"Cross-dept project","value":"+35%"},{"label":"Repeat booking","value":"2 tahun"}]'::jsonb,
  '{"quote":"Banking image-conscious — kami gak mau kelihatan murahan. Vendor ini deliver premium feel tanpa harus jualan ke C-level kami.","name":"Dewi Lestari","role":"HR Director","company":"BUMN Bank Top 5"}'::jsonb,
  '["company-gathering","team-building","employee-gathering"]'::jsonb,
  '[{"src":"https://drive.google.com/thumbnail?id=1vLvaJJ11Wwgz_BpfEl1TFswcBjCT2wId&sz=w2400","alt":"Outbound corporate — offroad activity di Bandung"},{"src":"https://drive.google.com/thumbnail?id=1Wvu5nFEI9naLVxB4zD6ynyo_m_nXJKQD&sz=w2400","alt":"Annual company gathering — momentum tahunan tim perusahaan"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  'quarterly-strategy-offsite-clevel',
  'fmcg',
  'FMCG · C-Level',
  'Quarterly strategy offsite — 24 senior leader, 12 new initiatives lahir.',
  'FMCG global Indonesia mengadakan quarterly C-suite strategy offsite 1-day intensive di Bandung kota. Hasil: 12 strategic initiatives di-launch dalam Q berikutnya.',
  'Case study executive offsite C-suite FMCG 24 senior leader 1-day intensive. Output: 12 new strategic initiatives diluncurkan dalam Q berikutnya.',
  'https://drive.google.com/thumbnail?id=1RaLPiB5OfUq1v079lQfp2YonxtU7PSdh&sz=w2400',
  'C-level strategic offsite — intimate setting',
  '24 pax',
  '1D Intensive',
  'Bandung City (heritage villa)',
  'Premium',
  'executive-offsite',
  'published',
  '["FMCG global Indonesia operations butuh quarterly alignment C-suite + direct reports. Market context volatile — kompetisi local + international, regulation shift.","Sebelumnya offsite di Jakarta venue hotel — feedback C-level: tidak fokus, banyak interruption (calls, urgent matters). Butuh location yang force disconnect.","Format harus 1-day intensive (bukan multi-day) karena C-level schedule constraint. Need productive 8 jam."]'::jsonb,
  '["Pick venue heritage villa Bandung utara — Sundanese architecture, full private, 90 min drive dari Jakarta. Natural setting force disconnect tapi accessible.","Engage certified strategy consultant senior (McKinsey alumni) untuk facilitate. Pre-engagement 1-on-1 dengan masing-masing peserta untuk collect input + concerns confidential.","Design agenda: morning whitespace analysis + competitive landscape, afternoon initiative ideation + prioritization, closing commitment + accountability."]'::jsonb,
  '["08:00 — Welcome breakfast outdoor garden villa. Reading pre-read material kalau belum sempat.","09:00-12:00 — Working session 1: Whitespace + competitive landscape analysis. Facilitator-led, peserta input via Post-it methodology.","12:00-13:30 — Working lunch + small group discussion (4 group of 6).","13:30-16:30 — Working session 2: Initiative ideation. 60 candidate ideas → narrowed to 20 → prioritized to 12 actionable.","16:30-18:00 — Commitment + accountability. Setiap initiative di-assign owner + 90-day milestone. Signed document.","18:00 — Closing dinner casual. Discussion off-record."]'::jsonb,
  '["12 strategic initiatives launched dalam Q berikutnya (5 product, 3 operations, 4 market expansion).","8 dari 12 initiatives achieve atau exceed 90-day milestone (67% success rate vs historic 40% untuk strategic initiatives perusahaan).","Repeat: offsite jadi quarterly ritual, kami handle 8 quarter consecutive.","Internal: C-suite alignment score (internal survey) naik dari 6.8 ke 8.4 (out of 10)."]'::jsonb,
  '[{"label":"Senior leaders","value":"24"},{"label":"New initiatives","value":"12"},{"label":"90-day success","value":"67%"},{"label":"Alignment score","value":"+1.6"}]'::jsonb,
  '{"quote":"Setting beda + facilitator quality + zero distraction = productive day. Hasil 12 initiatives biasanya butuh 2-3 quarter terbentuk, sekarang 1 day done.","name":"Bagas Wicaksono","role":"Country Head","company":"FMCG Global Indonesia"}'::jsonb,
  '["executive-offsite","corporate-retreat","leadership-camp"]'::jsonb,
  '[{"src":"https://drive.google.com/thumbnail?id=1RaLPiB5OfUq1v079lQfp2YonxtU7PSdh&sz=w2400","alt":"C-level strategic offsite — intimate setting"},{"src":"https://drive.google.com/thumbnail?id=1zfavZyqmxlBQUGYROITIIcXwgjU4uSd7&sz=w2400","alt":"Executive offsite di premium villa — discreet & focused"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  'sales-reward-50pax-telco',
  'telco',
  'Telco · Sales Reward',
  'Sales reward trip 50 top performer — 100% target Q berikutnya dari peserta.',
  'Telco provider Indonesia President''s Club annual trip — 50 top sales performer ke premium glamping experience di Pangalengan. Recognition + bonding + signal investment di top talent.',
  'Case study sales reward trip 50 top performer telco premium glamping experience Pangalengan. 100% peserta hit target Q berikutnya.',
  'https://drive.google.com/thumbnail?id=1FgSvGURuRXmXEmUWe7RKqF86kUzIjpzX&sz=w2400',
  'Glamping corporate experience — outdoor premium di Bandung',
  '50 pax',
  '2D1N',
  'Pangalengan (premium glamping)',
  'Premium',
  'incentive-trip',
  'published',
  '["Telco provider Indonesia annual President''s Club untuk 50 top sales performer. Sebelumnya dipakai hotel bintang 5 di Bali — feedback peserta: ''feels generic, not unique enough''.","Goal HR + Sales Director: experience yang memorable + signal kuat ''kami invest di top talent'' yang inspire sales lain di company untuk perform.","Budget premium tier — willing invest, tapi must be tangibly differentiated."]'::jsonb,
  '["Recommend glamping premium di Pangalengan — tea plantation view 360°. Unique factor: tidak ada peer telco yang gunakan format ini.","Curate experience hari demi hari: bonfire welcome dengan personal recognition per peserta, sunrise hike + reflection ROI session, outdoor cooking competition team-based.","Custom branded merchandise untuk peserta (jaket premium dengan logo perusahaan + ''President''s Club'' embroidery).","Dedicated photographer + videographer outdoor specialist untuk capture memorable moments — material untuk internal storytelling subsequent."]'::jsonb,
  '["Day 1: Arrival 14:00, check-in tenda safari premium. Welcome refreshment + camp orientation.","Day 1 sore: Outdoor cooking competition (team based, 5 group of 10). Theme Indonesian fusion. Plating + judging.","Day 1 dinner: Premium gala outdoor — chef profesional. Each peserta receive personal recognition speech dari Sales Director (90 detik per orang).","Day 1 malam: Bonfire + storytelling circle. Top performer share ''one moment that defined this year''.","Day 2: 5:30 AM sunrise hike + reflection session. ''What''s your ambition for next year'' commitment circle.","Day 2 pagi-siang: Closing recognition + commemorative photo profesional + departure 14:00."]'::jsonb,
  '["Post-event NPS dari peserta: 96 (out of 100). Comparison vs Bali trip tahun sebelumnya: 78.","Quarter following the trip: 100% peserta hit atau exceed target. Historical baseline: 72% hit rate.","Inspiration effect: ''I want to be in President''s Club next year'' mentions di internal survey naik 240% — strong signal investment di top talent terlihat oleh non-attendee.","Client repeat: annual booking dengan kami selama 3 tahun consecutive."]'::jsonb,
  '[{"label":"Top performers","value":"50"},{"label":"NPS","value":"96"},{"label":"Q hit rate","value":"100%"},{"label":"Aspiration lift","value":"+240%"}]'::jsonb,
  '{"quote":"Yang bikin nempel: peserta balik ke kantor cerita ke tim lain. Itu yang impact ke morale lebih jauh dari trip itu sendiri.","name":"Erlangga Wirawan","role":"VP Sales","company":"Telco Provider Indonesia"}'::jsonb,
  '["incentive-trip","glamping-corporate","annual-company-trip"]'::jsonb,
  '[{"src":"https://drive.google.com/thumbnail?id=1FgSvGURuRXmXEmUWe7RKqF86kUzIjpzX&sz=w2400","alt":"Glamping corporate experience — outdoor premium di Bandung"},{"src":"https://drive.google.com/thumbnail?id=1zGufb68_WTLYzpXXSakFoqChmT3dREQJ&sz=w2400","alt":"Corporate outing peserta di lokasi Bandung — momentum bonding tim"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  'family-day-400-manufacturing',
  'manufacturing',
  'Manufacturing · Family Day',
  'Family day 400 pax + 600 family member — 0 incident, 98% satisfaction.',
  'Manufacturing MNC Family Day Indonesia 1000 attendee total (employee + spouse + anak). Parallel activity tracks, dietary mapping, child-friendly area, dan zero safety incident.',
  'Case study family day corporate 400 employee + 600 family member di Bandung. Parallel tracks, child-friendly, 0 safety incident, 98% satisfaction.',
  'https://drive.google.com/thumbnail?id=1zGufb68_WTLYzpXXSakFoqChmT3dREQJ&sz=w2400',
  'Corporate outing peserta di lokasi Bandung — momentum bonding tim',
  '400 employee + 600 family',
  '1 hari',
  'Lembang (resort + outdoor area)',
  'Standard',
  'annual-company-trip',
  'published',
  '["Manufacturing MNC dengan 400 employee Indonesia melaksanakan Family Day annual — keluarga + anak ikut. Total attendee 1000 orang.","Logistic complex: parallel activity tracks (anak-anak vs dewasa), dietary mapping multi-religion (halal majority, vegetarian minority, allergen sensitivities), child safety paramount.","Manufacturing context — safety-first culture. Single incident = HR + management nightmare."]'::jsonb,
  '["Pick venue resort Lembang dengan outdoor area luas + dedicated kids zone. 4 zone parallel activity untuk distribusi crowd.","Dedicated kids program team (4 child entertainer profesional, P3K khusus anak, no-loose-watch protocol).","Pre-event survey untuk dietary mapping — granular sampai allergen specific. F&B station multiple (halal main, vegetarian, allergen-free) tanpa stigma queuing.","Safety briefing pre-event + zone marshals 12 orang stationed selama acara. Medical standby + ambulance ready."]'::jsonb,
  '["08:00 — Arrival multi-bus dari Jakarta. Welcome refreshment di main outdoor area.","09:00 — Opening + family group photo (drone shot). Activity zone introduction.","09:30-12:00 — Parallel zones running: (1) Kids fun zone — bouncy castle, face painting, magic show. (2) Family bonding outbound Tier 1 light. (3) Family cooking station — kids + parents bareng. (4) Sundanese cultural workshop.","12:00-13:30 — Lunch buffet multi-station — halal main + vegetarian + allergen-free dedicated.","13:30-15:30 — Continue parallel zones with rotation.","15:30 — Closing recognition (employee tenure milestone announcement) + group photo final + door prize draw.","16:30 — Departure."]'::jsonb,
  '["Zero safety incident. Zero medical evacuation. Critical for manufacturing context.","Post-event satisfaction survey: 98% positif (employee + family combined). Notable: 95% family member rate experience tinggi — strong signal company care.","Internal effect: employee retention measurement 6 months after family day — voluntary attrition 8% (industri average 15-22%).","Repeat: annual booking 3 tahun consecutive."]'::jsonb,
  '[{"label":"Total attendee","value":"1000"},{"label":"Safety incidents","value":"0"},{"label":"Satisfaction","value":"98%"},{"label":"Attrition rate","value":"8%"}]'::jsonb,
  '{"quote":"Manufacturing safety-first. Zero incident untuk 1000 orang dalam 1 hari itu deliverable yang sebenarnya hard. Kami appreciate.","name":"Fitri Hapsari","role":"HR Manager","company":"Manufacturing MNC"}'::jsonb,
  '["annual-company-trip","employee-gathering","company-gathering"]'::jsonb,
  '[{"src":"https://drive.google.com/thumbnail?id=1zGufb68_WTLYzpXXSakFoqChmT3dREQJ&sz=w2400","alt":"Corporate outing peserta di lokasi Bandung — momentum bonding tim"},{"src":"https://drive.google.com/thumbnail?id=1prBQePuxrjkrLs2F-jDhIUbrk6vxERwc&sz=w2400","alt":"Group photo corporate gathering"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  'leadership-camp-25-banking',
  'banking',
  'Private Banking · Leadership',
  'Leadership camp 25 emerging leader — 360-feedback delta +28% dalam 6 bulan.',
  'Private bank annual leadership development cohort 25 emerging leader. 3D2N retreat di Lembang dengan certified executive coach, 5 framework, dan 360-feedback integration.',
  'Case study leadership camp 25 emerging leader private banking. 3D2N retreat dengan certified coach, 5 framework. 360-feedback delta +28% dalam 6 bulan.',
  'https://drive.google.com/thumbnail?id=1RaLPiB5OfUq1v079lQfp2YonxtU7PSdh&sz=w2400',
  'C-level strategic offsite — intimate setting',
  '25 pax',
  '3D2N',
  'Lembang (premium resort)',
  'Bespoke',
  'leadership-camp',
  'published',
  '["Private bank Indonesia merekrut 25 emerging leader (Manager-level menuju Senior Manager) untuk 12-month leadership development program. Leadership camp adalah anchor program-nya.","Demand high quality: senior bankers tidak akan tolerate generic ''team building'' fluff. Need substantive content + measurable outcome.","Cohort already busy — only 3 hari yang feasible untuk lock semua schedule."]'::jsonb,
  '["Engage certified executive coach senior (ICF MCC level) untuk facilitate. Pre-engagement 1-on-1 dengan setiap peserta untuk collect baseline + personal aspiration.","Administer 360-feedback assessment 8 minggu sebelum camp. Aggregate report personalized per peserta. Pre-camp 1-hour debrief dengan coach.","Curriculum design: Day 1 self-awareness (DiSC + 360 debrief), Day 2 framework deep-dive (3 dari 5 framework — Adaptive, Situational, Authentic), Day 3 integration + IDP finalization + peer coaching setup."]'::jsonb,
  '["Pre-camp (8-2 minggu sebelumnya): 360 admin + personal debrief + pre-read material distribution.","Day 1: Arrival + opening dinner with table dialogue prompts. Foundation session — psychological safety + ground rules.","Day 2: Deep methodology — Adaptive Leadership working session (2.5 jam), Situational Leadership (2 jam), application case study afternoon. Group dinner with fishbowl conversation format.","Day 3 pagi: Authentic Leadership session. IDP finalization individual. Peer coaching pair setup (each paired untuk 6-month commitment).","Day 3 siang: Closing commitment circle — each peserta articulate public commitment. Closing lunch."]'::jsonb,
  '["6-month re-administration 360 — aggregate delta +28% pada metrics utama (peer perception, communication quality, decision-making confidence).","Individual Development Plan progress (peserta self-report 90-day): 76% peserta complete minimum 70% IDP milestones.","Peer coaching engagement: 92% pair tetap consistent monthly call 6 month later — high retention untuk peer coaching program.","Internal effect: 6 dari 25 peserta dipromote ke Senior Manager dalam 12 bulan (24% promotion rate vs historic 12%)."]'::jsonb,
  '[{"label":"Cohort size","value":"25"},{"label":"360 delta","value":"+28%"},{"label":"IDP completion","value":"76%"},{"label":"Promotion rate","value":"24%"}]'::jsonb,
  '{"quote":"Substansi-nya nyata. Senior banker yang biasanya skeptis vs leadership program — semua confirm value setelah 6 bulan. Itu yang matter.","name":"Citra Sari","role":"Head of Talent Development","company":"Private Bank Indonesia"}'::jsonb,
  '["leadership-camp","executive-offsite","corporate-retreat"]'::jsonb,
  '[{"src":"https://drive.google.com/thumbnail?id=1RaLPiB5OfUq1v079lQfp2YonxtU7PSdh&sz=w2400","alt":"C-level strategic offsite — intimate setting"},{"src":"https://drive.google.com/thumbnail?id=1zfavZyqmxlBQUGYROITIIcXwgjU4uSd7&sz=w2400","alt":"Executive offsite di premium villa — discreet & focused"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

