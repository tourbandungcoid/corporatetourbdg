-- =====================================================================
-- 7Summits OS — Migration 03: Media Library + Site Settings (singleton)
-- =====================================================================

-- Media library
CREATE TABLE public.media_library (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  storage_path TEXT NOT NULL,
  public_url TEXT NOT NULL,
  external_url TEXT,
  file_name TEXT NOT NULL,
  file_size_bytes BIGINT,
  mime_type TEXT,
  width INT,
  height INT,
  alt_text TEXT,
  caption TEXT,
  category TEXT,
  tags TEXT[],
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_media_category ON public.media_library(category) WHERE deleted_at IS NULL;
CREATE INDEX idx_media_tags ON public.media_library USING GIN(tags);

CREATE TRIGGER set_media_updated_at
  BEFORE UPDATE ON public.media_library
  FOR EACH ROW EXECUTE FUNCTION moddatetime(updated_at);

CREATE TRIGGER audit_media
  AFTER INSERT OR UPDATE OR DELETE ON public.media_library
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read media" ON public.media_library
  FOR SELECT USING (deleted_at IS NULL);

CREATE POLICY "Admins manage media" ON public.media_library
  FOR ALL USING (public.can_edit_content());

-- =====================================================================
-- Site Settings (singleton — only row id=1)
-- =====================================================================
CREATE TABLE public.site_settings (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),

  contact JSONB NOT NULL DEFAULT '{
    "phone": "+62 811 2345 678",
    "phone_raw": "+6281123456780",
    "whatsapp": "+6281123456780",
    "whatsapp_url": "https://wa.me/6281123456780",
    "email": "hello@corporate.tourbandung.co.id",
    "address": {
      "street": "Jl. Riau No. 1",
      "city": "Bandung",
      "region": "Jawa Barat",
      "postal_code": "40115",
      "country": "ID"
    }
  }'::JSONB,

  social JSONB NOT NULL DEFAULT '{
    "linkedin": "https://www.linkedin.com/company/7summits-corporate",
    "instagram": "https://www.instagram.com/7summits.corporate",
    "youtube": "https://www.youtube.com/@7summitscorporate"
  }'::JSONB,

  branding JSONB NOT NULL DEFAULT '{
    "brand_name": "7Summits Corporate",
    "legal_name": "7Summits Travel — Corporate Unit",
    "parent_brand": "7Summits Travel",
    "tagline": "Corporate experience design untuk tim yang fokus hasil.",
    "logo_url": null,
    "favicon_url": null,
    "established_year": 2012,
    "colors": {
      "brand": "#6BA239",
      "brand_deep": "#4E7E2A",
      "forest": "#2E5C3E"
    }
  }'::JSONB,

  stats JSONB NOT NULL DEFAULT '{
    "programs": "500+",
    "clients": "180+",
    "pax": "50,000+",
    "years": "13"
  }'::JSONB,

  seo_defaults JSONB NOT NULL DEFAULT '{
    "default_title": "7Summits Corporate — Corporate Experience Design",
    "default_description": "Corporate outing, MICE, retreat, dan executive offsite untuk enterprise Indonesia.",
    "default_og_image": null,
    "keywords": ["corporate outing bandung", "team building bandung", "MICE bandung", "corporate retreat indonesia"]
  }'::JSONB,

  analytics JSONB NOT NULL DEFAULT '{
    "ga4_id": null,
    "meta_pixel_id": null,
    "gtag_id": null,
    "hotjar_id": null,
    "linkedin_insight_id": null
  }'::JSONB,

  organization_schema JSONB,

  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

INSERT INTO public.site_settings (id) VALUES (1) ON CONFLICT DO NOTHING;

CREATE TRIGGER set_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();

CREATE TRIGGER audit_site_settings
  AFTER INSERT OR UPDATE OR DELETE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read site settings" ON public.site_settings
  FOR SELECT USING (true);

CREATE POLICY "Super admin manages site settings" ON public.site_settings
  FOR ALL USING (public.current_user_role() = 'super_admin');

CREATE POLICY "Admins read site settings" ON public.site_settings
  FOR SELECT USING (public.is_admin());
