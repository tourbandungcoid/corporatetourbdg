-- ---------------------------------------------------------------------
-- Migration: Brand Settings (Module 7)
-- ---------------------------------------------------------------------
-- Singleton row controlling site-wide visual tokens + key text overrides.
-- Runtime injects CSS variables into <head> based on this row; existing
-- Tailwind utilities (text-ink, bg-brand, etc.) auto-pick up the values.
--
-- copy_overrides is a flat JSONB key-value map for editable text snippets:
--   { "hero.headline": "...", "hero.subheadline": "...", "cta.primary": "..." }
-- Components fall back to hardcoded copy if key missing.
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.brand_settings (
  id                  INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  -- Colors (hex with leading #)
  color_ink           TEXT NOT NULL DEFAULT '#0F1F1A',
  color_brand         TEXT NOT NULL DEFAULT '#6BA239',
  color_brand_deep    TEXT NOT NULL DEFAULT '#4E7E2A',
  color_brand_darker  TEXT NOT NULL DEFAULT '#2E5C3E',
  color_brand_light   TEXT NOT NULL DEFAULT '#E6EED7',
  color_forest        TEXT NOT NULL DEFAULT '#2E5C3E',
  color_warm          TEXT NOT NULL DEFAULT '#B8924C',
  color_bone          TEXT NOT NULL DEFAULT '#FAFAF7',
  color_cream         TEXT NOT NULL DEFAULT '#F1F2EA',
  color_paper         TEXT NOT NULL DEFAULT '#FFFFFF',
  -- Typography (Google Fonts family name)
  font_sans           TEXT NOT NULL DEFAULT 'Inter',
  font_display        TEXT NOT NULL DEFAULT 'Inter',
  -- Logo URLs (Drive thumbnail, Supabase Storage, or absolute URL)
  logo_primary_url    TEXT,
  logo_dark_url       TEXT,
  logo_favicon_url    TEXT,
  -- Editable text snippets (flat key-value, hierarchical via dotted keys)
  copy_overrides      JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by          UUID REFERENCES public.profiles(id)
);

DROP TRIGGER IF EXISTS set_brand_settings_updated_at ON public.brand_settings;
CREATE TRIGGER set_brand_settings_updated_at BEFORE UPDATE ON public.brand_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.brand_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "brand_settings_admin_read" ON public.brand_settings;
CREATE POLICY "brand_settings_admin_read" ON public.brand_settings
  FOR SELECT TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'content_admin', 'marketing_admin', 'sales_admin'));

DROP POLICY IF EXISTS "brand_settings_admin_write" ON public.brand_settings;
CREATE POLICY "brand_settings_admin_write" ON public.brand_settings
  FOR ALL TO authenticated
  USING (public.current_user_role() IN ('super_admin', 'marketing_admin'))
  WITH CHECK (public.current_user_role() IN ('super_admin', 'marketing_admin'));

INSERT INTO public.brand_settings (id) VALUES (1) ON CONFLICT DO NOTHING;
