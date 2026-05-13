-- ---------------------------------------------------------------------
-- Migration: Global app_settings (Module 8)
-- ---------------------------------------------------------------------
-- Single-row table. Each top-level column is a JSONB group so we can
-- evolve schema per-group without migration churn.
--
-- Public site reads via createAdminClient (server-side only). Admin
-- writes via super_admin / marketing_admin role.
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.app_settings (
  id          INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  contact     JSONB NOT NULL DEFAULT '{}'::jsonb,
  social      JSONB NOT NULL DEFAULT '{}'::jsonb,
  analytics   JSONB NOT NULL DEFAULT '{}'::jsonb,
  seo         JSONB NOT NULL DEFAULT '{}'::jsonb,
  reviews     JSONB NOT NULL DEFAULT '{}'::jsonb,
  stats       JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by  UUID REFERENCES public.profiles(id)
);

DROP TRIGGER IF EXISTS set_app_settings_updated_at ON public.app_settings;
CREATE TRIGGER set_app_settings_updated_at BEFORE UPDATE ON public.app_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "app_settings_admin_read" ON public.app_settings;
CREATE POLICY "app_settings_admin_read" ON public.app_settings
  FOR SELECT TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin', 'sales_admin'));

DROP POLICY IF EXISTS "app_settings_admin_write" ON public.app_settings;
CREATE POLICY "app_settings_admin_write" ON public.app_settings
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'marketing_admin'));

-- Seed the singleton with current repo defaults so admin can edit
INSERT INTO public.app_settings (
  id, contact, social, analytics, seo, reviews, stats
) VALUES (
  1,
  jsonb_build_object(
    'whatsapp',        '628112277954',
    'phone_display',   '0811 2277 954',
    'email',           'hello@corporate.tourbandung.co.id',
    'office_hours',    'Senin–Jumat · 08.00–17.00 WIB',
    'address_street',  'Jl. Babakan Priangan I No.11C',
    'address_city',    'Kota Bandung',
    'address_region',  'Jawa Barat',
    'address_postal',  '40255',
    'address_country', 'ID',
    'address_full',    'Jl. Babakan Priangan I No.11C, Ciseureuh, Kec. Regol, Kota Bandung, Jawa Barat 40255',
    'maps_url',        'https://maps.app.goo.gl/Qppfm6wPUYiKg26i9'
  ),
  jsonb_build_object(
    'linkedin',  'https://www.linkedin.com/company/7summits-travel',
    'instagram', 'https://www.instagram.com/7summitstravel',
    'youtube',   'https://www.youtube.com/@7summitstravel',
    'tiktok',    '',
    'facebook',  ''
  ),
  jsonb_build_object(
    'ga4_id',         '',
    'meta_pixel_id',  '',
    'gtm_id',         '',
    'hotjar_id',      '',
    'clarity_id',     ''
  ),
  jsonb_build_object(
    'default_title',       'TourBandung Corporate — Premium Corporate Outing & Team Building Bandung',
    'default_description', 'Vendor specialist corporate outing, team building, dan executive offsite di Bandung & Jawa Barat. 400+ events delivered sejak 2018.'
  ),
  jsonb_build_object(
    'google_rating',       4.9,
    'google_review_count', 105,
    'google_maps_url',     'https://maps.app.goo.gl/Qppfm6wPUYiKg26i9'
  ),
  jsonb_build_object(
    'events_delivered',     '400+',
    'years_operating',      'Sejak 2018',
    'repeat_booking_rate',  '92%',
    'avg_response_time',    '6 jam',
    'companies_trusted',    '100+',
    'largest_event_pax',    '1,200',
    'venue_partners',       '60+',
    'industries_served',    '8+'
  )
)
ON CONFLICT (id) DO NOTHING;
