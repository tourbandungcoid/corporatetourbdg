-- ---------------------------------------------------------------------
-- Migration: Testimonials CMS (Module 3)
-- ---------------------------------------------------------------------
-- Social proof. Used on:
--   - Homepage marquee (is_featured = TRUE only)
--   - /clients page (all published)
--   - Embedded on case-study detail (linked via case_study_slug)
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.testimonials (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug               TEXT UNIQUE,
  client_name        TEXT NOT NULL,
  company            TEXT NOT NULL,
  role               TEXT,
  quote              TEXT NOT NULL,
  event_type         TEXT,
  industry           TEXT,
  rating             SMALLINT CHECK (rating BETWEEN 1 AND 5),
  photo_url          TEXT,
  is_featured        BOOLEAN NOT NULL DEFAULT FALSE,
  display_order      INT NOT NULL DEFAULT 0,
  case_study_slug    TEXT,
  source_lead_id     UUID REFERENCES public.leads(id),
  status             public.content_status NOT NULL DEFAULT 'published',
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by         UUID REFERENCES public.profiles(id),
  updated_by         UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_testimonials_published
  ON public.testimonials(display_order) WHERE status = 'published';
CREATE INDEX IF NOT EXISTS idx_testimonials_featured
  ON public.testimonials(display_order) WHERE status = 'published' AND is_featured = TRUE;

DROP TRIGGER IF EXISTS set_testimonials_updated_at ON public.testimonials;
CREATE TRIGGER set_testimonials_updated_at BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "testimonials_public_read" ON public.testimonials;
CREATE POLICY "testimonials_public_read" ON public.testimonials
  FOR SELECT TO anon, authenticated
  USING (status = 'published');

DROP POLICY IF EXISTS "testimonials_admin_all" ON public.testimonials;
CREATE POLICY "testimonials_admin_all" ON public.testimonials
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin'));

-- ---------------------------------------------------------------------
-- Seed: import from repo Testimonials.tsx + clients/page.tsx
-- ---------------------------------------------------------------------

INSERT INTO public.testimonials (slug, client_name, company, role, quote, industry, is_featured, display_order, rating, status) VALUES
  ('andini-pratama-tech-unicorn', 'Andini Pratama', 'Tech Unicorn', 'HR Manager',
   'Yang gw appreciate: senior planner dedicated dari briefing sampai event. Bukan rotating freelancer. Komunikasi clean, accountability ada nama.',
   'tech', TRUE, 10, 5, 'published'),

  ('bagas-wicaksono-bumn-bank', 'Bagas Wicaksono', 'BUMN Bank', 'GA Manager',
   'Proposal-nya detailed breakdown — finance team gw approval cepet karena gak ada hidden cost yang muncul belakangan.',
   'banking', TRUE, 20, 5, 'published'),

  ('citra-sari-b2b-saas', 'Citra Sari', 'B2B SaaS Startup', 'People Ops Lead',
   'Custom 100%. Brief gw soal cross-team bonding pasca-merger, mereka kasih program yang bener-bener address itu — bukan template outing.',
   'tech', TRUE, 30, 5, 'published'),

  ('dewi-lestari-private-banking', 'Dewi Lestari', 'Private Banking', 'HR Director',
   'Banking image-conscious — kami gak mau kelihatan murahan. Vendor ini deliver premium feel tanpa harus jualan ke C-level kami.',
   'banking', TRUE, 40, 5, 'published'),

  ('erlangga-wirawan-series-b', 'Erlangga Wirawan', 'Series B Startup', 'Founder',
   'Response time-nya nyata 6 jam. Kami pernah urgent request 3 minggu sebelum event — they handled it tanpa drama.',
   'tech', TRUE, 50, 5, 'published'),

  ('fitri-hapsari-manufacturing', 'Fitri Hapsari', 'Manufacturing MNC', 'HR Manager',
   'Vendor outing sebelumnya gak sanggup 600 pax. Mereka deliver 800 pax 3-day program tanpa miss detail. Skala mereka real.',
   'manufacturing', TRUE, 60, 5, 'published')

ON CONFLICT (slug) DO NOTHING;
