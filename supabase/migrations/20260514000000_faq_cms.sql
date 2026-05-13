-- ---------------------------------------------------------------------
-- Migration: FAQ CMS (Module 4)
-- ---------------------------------------------------------------------
-- Two-level structure:
--   faq_categories   — 4 buckets (budget, logistics, comparison, formats)
--   faq_questions    — ~49 questions linked to category, with answer +
--                      optional long detail
--
-- Public site reads only status='published' rows. RLS lets super_admin,
-- content_admin, marketing_admin write.
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.faq_categories (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug              TEXT UNIQUE NOT NULL,
  eyebrow           TEXT NOT NULL,
  title             TEXT NOT NULL,
  intro             TEXT NOT NULL,
  meta_description  TEXT NOT NULL,
  display_order     INT NOT NULL DEFAULT 0,
  status            public.content_status NOT NULL DEFAULT 'published',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by        UUID REFERENCES public.profiles(id),
  updated_by        UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_faq_cat_published
  ON public.faq_categories(display_order) WHERE status = 'published';

DROP TRIGGER IF EXISTS set_faq_categories_updated_at ON public.faq_categories;
CREATE TRIGGER set_faq_categories_updated_at BEFORE UPDATE ON public.faq_categories
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE IF NOT EXISTS public.faq_questions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id     UUID NOT NULL REFERENCES public.faq_categories(id) ON DELETE CASCADE,
  slug            TEXT NOT NULL,
  question        TEXT NOT NULL,
  answer          TEXT NOT NULL,
  detail          TEXT,
  tags            JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_featured     BOOLEAN NOT NULL DEFAULT FALSE,
  display_order   INT NOT NULL DEFAULT 0,
  status          public.content_status NOT NULL DEFAULT 'published',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by      UUID REFERENCES public.profiles(id),
  updated_by      UUID REFERENCES public.profiles(id),
  UNIQUE (category_id, slug)
);

CREATE INDEX IF NOT EXISTS idx_faq_q_category
  ON public.faq_questions(category_id, display_order) WHERE status = 'published';

CREATE INDEX IF NOT EXISTS idx_faq_q_featured
  ON public.faq_questions(display_order) WHERE status = 'published' AND is_featured = TRUE;

DROP TRIGGER IF EXISTS set_faq_questions_updated_at ON public.faq_questions;
CREATE TRIGGER set_faq_questions_updated_at BEFORE UPDATE ON public.faq_questions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "faq_cat_public_read" ON public.faq_categories;
CREATE POLICY "faq_cat_public_read" ON public.faq_categories
  FOR SELECT TO anon, authenticated
  USING (status = 'published');

DROP POLICY IF EXISTS "faq_cat_admin_all" ON public.faq_categories;
CREATE POLICY "faq_cat_admin_all" ON public.faq_categories
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

DROP POLICY IF EXISTS "faq_q_public_read" ON public.faq_questions;
CREATE POLICY "faq_q_public_read" ON public.faq_questions
  FOR SELECT TO anon, authenticated
  USING (status = 'published');

DROP POLICY IF EXISTS "faq_q_admin_all" ON public.faq_questions;
CREATE POLICY "faq_q_admin_all" ON public.faq_questions
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

-- ---------------------------------------------------------------------
-- Seed: import existing 4 categories + ~49 questions (idempotent)
-- ---------------------------------------------------------------------
-- Auto-generated FAQ seed. Do not edit manually.

-- Category: budget
INSERT INTO public.faq_categories (
  slug, eyebrow, title, intro, meta_description, display_order, status
) VALUES (
  'budget',
  'Budget & Investment',
  'Budget & Investment FAQ — Corporate Outing Bandung',
  'Pertanyaan paling sering soal pricing — range, tier, payment terms, breakdown, ROI, dan hidden cost. Update 2026 dengan range pricing terkini.',
  '12 jawaban detail soal budget corporate outing di Bandung — dari paket 1-day Rp 1.5jt/pax sampai executive offsite premium Rp 12jt+/pax. Update 2026.',
  0,
  'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'berapa-estimasi-budget-outing-kantor-untuk-tim-100-pax-di-bandung', 'Berapa estimasi budget outing kantor untuk tim 100 pax di Bandung?', 'Budget outing kantor 100 pax di Bandung untuk paket 2D1N standar berkisar Rp 2,5–5 juta per orang, atau total Rp 250–500 juta untuk grup. Range mencakup venue, F&B 3x, activity, transportation lokal, project management, dan contingency 8%.', 'Variasi tergantung tier venue (villa standar vs resort premium), kompleksitas activity (outbound adventure vs indoor workshop), dan kebutuhan tambahan seperti talent atau dokumentasi video.', 0, true, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apa-saja-tier-pricing-corporate-outing-di-bandung', 'Apa saja tier pricing corporate outing di Bandung?', '4 tier: Foundation (Rp 1.5-2.5 jt/pax) untuk budget-conscious quarterly outing. Elevated (Rp 2.5-4.5 jt/pax) sweet spot annual gathering. Signature (Rp 4.5-7 jt/pax) marquee event. Bespoke (Rp 7 jt+/pax) C-suite executive offsite premium.', NULL, 10, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-ada-hidden-cost-di-luar-proposal', 'Apakah ada hidden cost di luar proposal?', 'Tidak. Proposal detailed breakdown — venue, F&B, logistics, talent, equipment, contingency, dan profit margin. Yang muncul di invoice = yang ada di proposal yang Anda approve. Add-on jika ada selalu konfirmasi tertulis dulu.', NULL, 20, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-harga-sudah-include-ppn-dan-tax', 'Apakah harga sudah include PPN dan tax?', 'Proposal transparant: subtotal + PPN 11% line-item terpisah. No ''tax'' yang muncul mendadak di invoice. Faktur pajak available kalau perusahaan butuh untuk reimbursement.', NULL, 30, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-ada-deposit-atau-down-payment', 'Apakah ada deposit atau down payment?', 'Standard 30% deposit setelah proposal di-approve untuk lock venue & date. Sisa 70% bayar 3 hari sebelum event execution. Bisa adjust kalau ada kebutuhan finance team — fleksibel selama agreement tertulis.', NULL, 40, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'berapa-biaya-tambahan-kalau-pax-bertambah-mendekati-hari-h', 'Berapa biaya tambahan kalau pax bertambah mendekati hari H?', 'Tambahan pax di-quote dengan unit price yang sama (transparent dari awal), tidak ada penalty. Selama venue masih punya kapasitas. Kalau perlu upgrade venue karena pax naik signifikan, kami negotiate dengan vendor venue dulu.', NULL, 50, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-cara-justify-budget-outing-ke-management', 'Bagaimana cara justify budget outing ke management?', 'Framework ROI: retention saving = attrition reduction × salary × turnover multiplier. Untuk 100 peserta event, kalau attrition turun 10% × salary Rp 8 jt × 9 bulan turnover cost = Rp 720 juta saving. Event budget Rp 250 jt = ROI 2.9x.', NULL, 60, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bisa-nego-harga-vendor-outing-untuk-corporate', 'Bisa nego harga vendor outing untuk corporate?', 'Negotiation possible terutama untuk: (1) Volume — grup besar 200+ pax dapat economy of scale 10-20%. (2) Off-peak period (Maret, Juni di-luar libur sekolah). (3) Multi-event annual contract. Yang tidak negotiable: safety, insurance, atau senior planner dedicated.', NULL, 70, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'berapa-biaya-rental-venue-villa-di-lembang-untuk-gathering-100-pax', 'Berapa biaya rental venue villa di Lembang untuk gathering 100 pax?', 'Range Rp 40–80 juta per villa per 2D1N untuk villa premium yang accommodate 100 pax (atau multi-villa cluster 2-3 unit). Tambah F&B, activity, dan transportation untuk total cost. Detail per venue di-share saat proposal.', NULL, 80, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-ada-early-bird-discount', 'Apakah ada early bird discount?', 'Tidak ada model ''early bird promo''. Tapi: lock booking 8+ minggu sebelum hari H bantu kami negotiate harga venue lebih baik, savings biasanya 5-10% di-pass ke client. Lock 12+ minggu untuk peak season (Q4) memberi pricing flexibility tertinggi.', NULL, 90, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-ada-refund-kalau-force-majeure', 'Apakah ada refund kalau force majeure?', 'Force majeure (cuaca extreme, kondisi venue, regulasi pemerintah) handled per contract: 70-100% refund tergantung notice period. <7 hari sebelum hari H: 70% refund. 8-14 hari: 85%. 15+ hari: 100%. Plus reschedule option tanpa penalty.', NULL, 100, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-strategi-negosiasi-budget-dengan-vendor-outing', 'Bagaimana strategi negosiasi budget dengan vendor outing?', 'Tips: (1) Brief detail di awal — vendor bisa rekomendasi venue/activity yang fit budget. (2) Flexible date (off-peak = cheaper). (3) Tanya breakdown line-item — identify mana yang bisa di-adjust. (4) Multi-event annual contract dapat better pricing. Avoid: pressure tactic atau race-to-bottom — quality drops.', NULL, 110, false, 'published'
FROM public.faq_categories WHERE slug = 'budget'
ON CONFLICT (category_id, slug) DO NOTHING;

-- Category: logistics
INSERT INTO public.faq_categories (
  slug, eyebrow, title, intro, meta_description, display_order, status
) VALUES (
  'logistics',
  'Process & Logistics',
  'Logistics & Process FAQ — Corporate Outing Bandung',
  'Pertanyaan soal timeline, briefing flow, day-of execution, force majeure, dan operational complexities untuk corporate event di Bandung.',
  'Jawaban detail soal proses booking, timeline prep, force majeure handling, dietary mapping, dan day-of execution corporate outing di Bandung.',
  10,
  'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'berapa-lama-proses-dari-request-proposal-ke-konfirmasi', 'Berapa lama proses dari request proposal ke konfirmasi?', 'Proposal lengkap dengan breakdown & 2 alternative venue dalam 24 jam setelah briefing call. Revision 1–2 hari. Konfirmasi venue & deposit 30%, siap di-eksekusi 3 minggu kemudian (urgent request bisa 4 hari, tergantung availability venue).', NULL, 0, true, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'berapa-minggu-sebelum-hari-h-harus-booking-vendor', 'Berapa minggu sebelum hari H harus booking vendor?', 'Minimum 3-4 minggu untuk grup 50-100 pax. Untuk 200+ pax, 6-8 minggu. Peak season (Oktober-Desember Q4 corporate gathering rush) lock minimum 8-12 minggu. Untuk Bespoke offsite dengan certified facilitator, 8+ minggu untuk facilitator availability.', NULL, 10, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-proses-revisi-proposal', 'Bagaimana proses revisi proposal?', 'Standar 2 revision included di proposal (no extra cost). Revisi typically dari client side: scope adjust, budget adjust, atau venue shift. Revision turnaround 24-48 jam per round. Revision ke-3+ biasanya signal scope significantly changed — kami suggest re-brief.', NULL, 20, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'siapa-yang-handle-transportasi-peserta-outing', 'Siapa yang handle transportasi peserta outing?', 'Kami atur full — multi-bus pickup dari Jakarta (atau client city), convoy coordination, drop-off di venue, transport antar venue jika multi-cluster, dan return trip. Insurance peserta included selama transport. Driver: licensed + experienced corporate group transport.', NULL, 30, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-penanganan-kalau-cuaca-buruk-di-hari-h', 'Bagaimana penanganan kalau cuaca buruk di hari H?', 'Setiap program siapkan Plan A & Plan B. Plan B: indoor backup activity, alternative venue di-standby, flexibility shifting itinerary. Contingency budget 5-8% include. Untuk full cancel due to force majeure, refund/reschedule per contract policy.', NULL, 40, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-vendor-menyediakan-dokumentasi-foto-video', 'Apakah vendor menyediakan dokumentasi (foto/video)?', 'Iya, standard include. Photographer profesional + videographer untuk capture event. Untuk premium tier: drone footage, multi-camera setup, video recap montage. Delivery: photo dalam 1 minggu post-event, video recap dalam 2-3 minggu.', NULL, 50, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'berapa-staf-vendor-yang-on-site-saat-event', 'Berapa staf vendor yang on-site saat event?', 'Tergantung scale: 100 pax 1-2 day event = 4-6 crew (1 senior PM + 3-5 coordinator + safety/medical). 500+ pax multi-day = 8-12 crew. Crew assignment di-share di proposal supaya client tahu siapa tim on-site.', NULL, 60, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-ada-project-manager-dedicated-untuk-event-corporate-kami', 'Apakah ada project manager dedicated untuk event corporate kami?', 'Iya, setiap proyek di-assign 1 senior PM dedicated dari briefing sampai post-event. Bukan rotating freelancer. PM jadi single point of contact untuk client — communication clean, accountability ada nama. Avg tenure PM kami: 4+ tahun.', NULL, 70, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-koordinasi-catering-untuk-grup-besar', 'Bagaimana koordinasi catering untuk grup besar?', 'Pre-event dietary mapping wajib — survey peserta untuk halal, vegetarian, vegan, allergen. F&B station multiple dengan signage clear. Untuk 500+ pax: central kitchen + multiple station setup. Capacity test 1-2 minggu sebelum hari H.', NULL, 80, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-penanganan-dietary-restriction-peserta', 'Bagaimana penanganan dietary restriction peserta?', 'Pre-event medical/dietary questionnaire. F&B accommodation: halal main (default majority), vegetarian station, vegan option, allergen-free dedicated (gluten, nut, dairy). Stigma-free queuing — semua station di akses sama. Tagged dengan card per dietary type.', NULL, 90, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-koordinasi-dengan-venue-untuk-grup-besar-200', 'Bagaimana koordinasi dengan venue untuk grup besar (200+)?', 'Multi-touchpoint coordination — venue manager assigned dari side venue + senior PM dari kami. Pre-event walkthrough wajib. Site visit + safety induction. Day-of: radio communication, real-time issue handling. Post-event: incident report kalau ada.', NULL, 100, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apakah-vendor-handle-dekorasi-dan-branding-event', 'Apakah vendor handle dekorasi dan branding event?', 'Iya, standar include untuk corporate gathering tier Standard+. Decoration design custom sesuai theme: stage backdrop, photo wall, signage. Custom branding (banner, t-shirt, merchandise) optional dengan cost tambahan. Production lead time 2-3 minggu.', NULL, 110, false, 'published'
FROM public.faq_categories WHERE slug = 'logistics'
ON CONFLICT (category_id, slug) DO NOTHING;

-- Category: comparison
INSERT INTO public.faq_categories (
  slug, eyebrow, title, intro, meta_description, display_order, status
) VALUES (
  'comparison',
  'Comparison & Decision',
  'Comparison & Decision FAQ — Pilih Format yang Fit',
  'Pertanyaan ''X vs Y'' yang sering muncul saat HR decide format event. Vendor size, hotel vs villa, outbound vs indoor — comparison practical dari 400+ events.',
  'Comparison detail: outing vs gathering, hotel vs villa, vendor besar vs spesialis, outbound vs indoor team building. Decision framework untuk HR.',
  20,
  'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apa-bedanya-outing-kantor-dan-corporate-gathering', 'Apa bedanya outing kantor dan corporate gathering?', 'Outing kantor adalah aktivitas refreshing + bonding informal, biasanya 1-2 hari, vibe relaxed. Corporate gathering adalah formal annual event dengan ceremony, awarding, dan company update — durasi 2-3 hari di venue premium. Budget gathering biasanya 1.5-2x outing standard.', NULL, 0, true, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'outing-kantor-1-day-vs-2d1n-mana-yang-lebih-efektif', 'Outing kantor 1-day vs 2D1N — mana yang lebih efektif?', 'Tergantung goal. 1-day: surface-level refresh, bonding terbatas, cocok quarterly. 2D1N: real bonding dengan shared overnight experience, deeper conversation, more memorable. Untuk annual flagship event, 2D1N sweet spot. 1-day cocok untuk team yang sudah punya bonding base.', NULL, 10, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bedanya-team-building-dan-outbound-perusahaan', 'Bedanya team building dan outbound perusahaan?', 'Team building = umbrella term untuk activity yang frame outcome tim (komunikasi, problem solving, trust). Bisa indoor, outdoor, atau hybrid. Outbound = subset team building yang khusus outdoor adventure dengan physical activity dominant. Tidak semua team building outbound.', NULL, 20, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'villa-gathering-vs-hotel-mana-yang-lebih-cocok-untuk-corporate', 'Villa gathering vs hotel — mana yang lebih cocok untuk corporate?', 'Villa: privacy 100%, custom vibe, multi-day bonding deeper, photogenic. Cocok 30-200 pax. Hotel: built-in concierge, formal ballroom, multi-day stay tanpa logistics burden. Cocok 200+ pax atau awarding ceremony formal. Mix-and-match juga doable.', NULL, 30, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'glamping-vs-villa-untuk-corporate-outing-pilih-yang-mana', 'Glamping vs villa untuk corporate outing — pilih yang mana?', 'Glamping: unique outdoor immersive experience, bonfire vibe, memorable differentiator. Cocok 30-80 pax intimate group. Villa: lebih premium, formal-friendly, capacity lebih besar. Untuk tim yang prioritas memorable + bonding intim, glamping. Untuk premium formal event, villa.', NULL, 40, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bandung-vs-jakarta-untuk-corporate-outing-pertimbangannya-apa', 'Bandung vs Jakarta untuk corporate outing — pertimbangannya apa?', 'Bandung: hawa sejuk (18-24°C), variety venue (villa, resort, glamping, hotel), 2-3 jam dari Jakarta via tol, premium feel without premium logistics cost. Jakarta: instant access, no travel time. Untuk corporate yang nilai ''change of environment + memorable experience'', Bandung pilihan default.', NULL, 50, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'lembang-vs-ciwidey-untuk-outing-perusahaan', 'Lembang vs Ciwidey untuk outing perusahaan?', 'Lembang: paling accessible (60-90 min dari Bandung kota), variety venue tertinggi, mainstream cocok semua segmentasi. Ciwidey: lebih remote (75-110 min), feel lebih natural, cocok untuk adventure (Kawah Putih, hot spring) atau retreat yang prefer outdoor immersive.', NULL, 60, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'vendor-outing-besar-vs-kecil-beda-kualitasnya-apa', 'Vendor outing besar vs kecil — beda kualitasnya apa?', 'Vendor besar (national/multinational): scale capability, brand reputation, tapi rotating freelancer, factory-feel, less personal. Vendor specialist B2B (kami): senior planner dedicated, akses langsung ke venue (no calo), tenure tim panjang, customization tinggi. Trade-off: vendor specialist biasanya fokus area geografis tertentu.', NULL, 70, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'in-house-team-building-vs-vendor-roi-mana-yang-lebih-baik', 'In-house team building vs vendor — ROI mana yang lebih baik?', 'Tergantung scale. In-house: cocok untuk grup kecil <20 pax, single-day, low complexity. Time investment HR signifikan. Vendor: cocok 30+ pax, multi-day, atau structured outcome (post-merger, leadership development). Vendor liberate HR untuk focus strategic, plus methodology + execution expertise.', NULL, 80, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'annual-gathering-vs-quarterly-outing-mana-yang-lebih-impactful', 'Annual gathering vs quarterly outing — mana yang lebih impactful?', 'Both serve different functions. Annual gathering: big moment, milestone celebration, brand-building internal, full company alignment. Quarterly: maintenance engagement, departmental bonding, course correction. Best practice: kombinasi — annual flagship + 2-3 quarterly. Total investment 1.5-2x annual-only tapi impact bertahan 4x lebih lama.', NULL, 90, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'outsourced-project-manager-vs-in-house-hr-planner', 'Outsourced project manager vs in-house HR planner?', 'HR planner: deep company context, internal stakeholder alignment, no learning curve. Outsourced: vendor methodology + venue network + day-of execution expertise. Best practice: HR jadi ''event sponsor'' (set goal, budget, success criteria) + vendor jadi ''event executor'' (design, logistics, on-site). Clear role split = clean accountability.', NULL, 100, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'vendor-lokal-bandung-vs-vendor-luar-kota', 'Vendor lokal Bandung vs vendor luar kota?', 'Vendor lokal Bandung: akses langsung venue (60+ partnership direct, no calo), pricing leverage, local knowledge (cuaca, traffic, dietary). Vendor luar kota nyambi Bandung: lebih dependent pada local supplier, less leverage. Untuk corporate outing di Bandung specifically, vendor specialist Bandung biasanya optimal.', NULL, 110, false, 'published'
FROM public.faq_categories WHERE slug = 'comparison'
ON CONFLICT (category_id, slug) DO NOTHING;

-- Category: formats
INSERT INTO public.faq_categories (
  slug, eyebrow, title, intro, meta_description, display_order, status
) VALUES (
  'formats',
  'Format & Programs',
  'Format & Programs FAQ — Corporate Event Bandung',
  'Pertanyaan soal format event, rundown, activity choices, customization scope, dan sample programs dari 10+ corporate event types yang kami handle.',
  'Detail format corporate event Bandung — rundown 2D1N, activity options, customization scope, hybrid formats, dan special event types.',
  30,
  'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apa-saja-format-umum-outing-kantor-di-bandung', 'Apa saja format umum outing kantor di Bandung?', 'Format paling sering: (1) 1-day full-day untuk quarterly refresh. (2) 1D2N glamping untuk team bonding. (3) 2D1N standard untuk annual employee gathering. (4) 3D2N premium untuk annual corporate gathering. (5) Hybrid format (outbound + indoor workshop). (6) Family day corporate untuk family-inclusive.', NULL, 0, true, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'rundown-ideal-employee-gathering-2d1n-seperti-apa', 'Rundown ideal employee gathering 2D1N seperti apa?', 'Day 1: 14:00 arrival + check-in, 16:00 ice-breaker + light activity, 19:00 welcome dinner + entertainment, 21:00 bonfire bonding. Day 2: 07:00 breakfast, 09:00 main activity (parallel tracks), 12:00 lunch, 13:30 closing reflection, 15:00 departure.', NULL, 10, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'activity-team-building-paling-efektif-untuk-perusahaan-teknologi', 'Activity team building paling efektif untuk perusahaan teknologi?', 'Untuk tim tech (young, analytical): (1) Escape room corporate edition. (2) Hackathon mini 3 jam team-based. (3) Outdoor problem-solving challenge. (4) Cooking competition. (5) Drone race team-based. Hindari activity terlalu fisik untuk first-timer outing. Mix outbound + indoor optimal.', NULL, 20, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'format-yang-cocok-untuk-bonding-pasca-merger', 'Format yang cocok untuk bonding pasca merger?', '3D2N integration playbook: Day 1 cultural exchange (curiosity-driven activity, peserta cross-team), Day 2 alignment work (parallel strategy tracks per fungsi), Day 3 commitment + celebration (awarding cross-team, closing CEO address). Key principle: tidak boleh dominasi salah satu side.', NULL, 30, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-design-corporate-retreat-untuk-strategic-planning', 'Bagaimana design corporate retreat untuk strategic planning?', '5 komponen: (1) Pre-retreat preparation (briefing + pre-read material). (2) Opening session (psychological safety, ground rules). (3) Substantive working session 2-4 jam blocks dengan structured methodology. (4) Reflective time + informal interaction. (5) Closing — commitment + 30/60/90 day follow-up plan.', NULL, 40, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'activity-outbound-paling-populer-di-bandung', 'Activity outbound paling populer di Bandung?', 'Top 8: high ropes course (flying fox, burma bridge), paintball tactical, ATV/jeep adventure, white water rafting (Sungai Cikandang), mountain biking trail, outbond Olympic multi-station, war games strategy, outdoor orienteering. Mix berdasarkan goal tim.', NULL, 50, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-format-executive-offsite-untuk-c-level', 'Bagaimana format executive offsite untuk C-level?', '1D Intensive untuk quarterly C-suite alignment (8-10 jam working session). 2D1N Standard untuk annual strategic planning. 2D1N Bespoke dengan certified strategy consultant senior untuk major pivot atau M&A integration. Sweet spot 8-15 pax dengan facilitator senior.', NULL, 60, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'apa-saja-activity-glamping-corporate-yang-seru', 'Apa saja activity glamping corporate yang seru?', 'Signature: bonfire briefing session (CEO address di bawah bintang), sunrise hike + reflection circle 5:30 AM, outdoor cooking competition team-based, stargazing dengan astronomer, forest meditation, bonfire storytelling. Activity yang impossible di hotel/villa setting.', NULL, 70, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'format-awarding-night-corporate-gathering-yang-berkesan', 'Format awarding night corporate gathering yang berkesan?', '5 theme: (1) Classic Black-Tie Corporate. (2) Hollywood Movie Awards style. (3) Modern Minimalist. (4) Cultural Indonesia. (5) Themed Decade (Gatsby, 80s, dll). Komponen wajib: stage design custom, trophy custom, MC charismatic, video bumper per kategori, photo moment per awardee.', NULL, 80, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'bagaimana-design-leadership-camp-3-hari', 'Bagaimana design leadership camp 3 hari?', 'Day 1: self-awareness foundation (DiSC/360 debrief, psychological safety). Day 2: framework deep-dive (Adaptive + Situational Leadership working session) + case study application. Day 3: integration + IDP finalization + peer coaching pair setup. Closing commitment circle.', NULL, 90, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'activity-untuk-cross-generational-team', 'Activity untuk cross-generational team?', 'Parallel activity tracks. Day 2 morning split 3 simultaneous: (A) High-energy outbound untuk Gen-Z + young Millennial. (B) Reflective workshop untuk older Millennial + Gen-X. (C) Bonding-focused cooking/photo quest untuk mixed-age. Lunch + dinner = natural cross-mingling.', NULL, 100, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

INSERT INTO public.faq_questions (
  category_id, slug, question, answer, detail, display_order, is_featured, status
)
SELECT id, 'format-incentive-trip-untuk-top-sales-performers', 'Format incentive trip untuk top sales performers?', '2D1N atau 3D2N premium tier. Premium accommodation (villa private atau resort 5-star), F&B fine-dining, exclusive activities (private tour, premium adventure), personal recognition speech per peserta, custom branded merchandise, photographer profesional untuk memorable capture. Cost Rp 4.5-7 jt/pax.', NULL, 110, false, 'published'
FROM public.faq_categories WHERE slug = 'formats'
ON CONFLICT (category_id, slug) DO NOTHING;

