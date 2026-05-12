-- =====================================================================
-- 20260512000000 — Foundation
-- =====================================================================
-- Extensions, audit infrastructure, profiles, roles, site settings, media.
-- Idempotent — safe to re-run.
-- =====================================================================

-- ---------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ---------------------------------------------------------------------
-- User Roles
-- ---------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.user_role AS ENUM (
    'super_admin','content_admin','sales_admin','marketing_admin','viewer'
  );
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- ---------------------------------------------------------------------
-- Content Status
-- ---------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.content_status AS ENUM ('draft','published','archived');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- ---------------------------------------------------------------------
-- Universal updated_at trigger
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- ---------------------------------------------------------------------
-- Audit log
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id UUID,
  changes JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_actor ON public.audit_log(actor_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_resource ON public.audit_log(resource_type, resource_id, created_at DESC);

-- RLS: audit_log is internal — only super_admin can read via API.
-- Writes happen via audit_table_changes() trigger (SECURITY DEFINER, bypasses RLS).
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "audit_log_super_admin_read" ON public.audit_log;
CREATE POLICY "audit_log_super_admin_read" ON public.audit_log
  FOR SELECT TO authenticated
  USING (public.current_user_role() = 'super_admin');

CREATE OR REPLACE FUNCTION public.audit_table_changes()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.audit_log (actor_id, action, resource_type, resource_id, changes)
  VALUES (
    auth.uid(),
    TG_OP || '.' || TG_TABLE_NAME,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id),
    CASE
      WHEN TG_OP = 'INSERT' THEN to_jsonb(NEW)
      WHEN TG_OP = 'UPDATE' THEN jsonb_build_object('before', to_jsonb(OLD), 'after', to_jsonb(NEW))
      WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD)
    END
  );
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- ---------------------------------------------------------------------
-- Profiles (extends auth.users)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email CITEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role public.user_role NOT NULL DEFAULT 'viewer',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  phone TEXT,
  specialty TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role) WHERE is_active = TRUE;

DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto-create profile on auth.users insert
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ---------------------------------------------------------------------
-- RBAC Helper Functions (SECURITY DEFINER for use in RLS policies)
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS public.user_role LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid() AND is_active = TRUE LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.current_user_role() IN
    ('super_admin','content_admin','sales_admin','marketing_admin');
$$;

CREATE OR REPLACE FUNCTION public.can_edit_content()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.current_user_role() IN
    ('super_admin','content_admin','marketing_admin');
$$;

CREATE OR REPLACE FUNCTION public.can_manage_leads()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.current_user_role() IN ('super_admin','sales_admin');
$$;

-- ---------------------------------------------------------------------
-- RLS — Profiles
-- ---------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_select_self_or_admin" ON public.profiles;
CREATE POLICY "profiles_select_self_or_admin" ON public.profiles
  FOR SELECT TO authenticated
  USING (id = auth.uid() OR public.is_admin());

DROP POLICY IF EXISTS "profiles_update_self" ON public.profiles;
CREATE POLICY "profiles_update_self" ON public.profiles
  FOR UPDATE TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid() AND role = (SELECT role FROM public.profiles WHERE id = auth.uid()));

DROP POLICY IF EXISTS "profiles_super_admin_all" ON public.profiles;
CREATE POLICY "profiles_super_admin_all" ON public.profiles
  FOR ALL TO authenticated
  USING (public.current_user_role() = 'super_admin');

-- ---------------------------------------------------------------------
-- Site Settings (singleton)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_settings (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),

  -- Branding
  site_name TEXT NOT NULL DEFAULT 'Tour Bandung Corporate',
  site_tagline TEXT,
  logo_url TEXT,
  logo_dark_url TEXT,
  favicon_url TEXT,

  -- Contact
  whatsapp_number TEXT,
  contact_email CITEXT,
  office_address TEXT,
  office_hours TEXT,
  google_maps_url TEXT,

  -- Social (sameAs ecosystem for GEO)
  linkedin_url TEXT,
  instagram_url TEXT,
  youtube_url TEXT,
  twitter_url TEXT,
  facebook_url TEXT,

  -- SEO Defaults
  default_meta_title TEXT,
  default_meta_description TEXT,
  default_og_image_url TEXT,

  -- Tracking
  google_analytics_id TEXT,
  google_tag_manager_id TEXT,
  meta_pixel_id TEXT,
  hotjar_id TEXT,

  -- Schema
  organization_schema JSONB,

  -- Hero / CTA defaults
  hero_default_image_url TEXT,
  cta_primary_label TEXT DEFAULT 'Request Free Proposal',

  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by UUID REFERENCES public.profiles(id)
);

INSERT INTO public.site_settings (id, site_tagline, cta_primary_label)
VALUES (1, 'B2B Corporate Outing & Team Building Bandung', 'Request Free Proposal')
ON CONFLICT (id) DO NOTHING;

DROP TRIGGER IF EXISTS set_site_settings_updated_at ON public.site_settings;
CREATE TRIGGER set_site_settings_updated_at BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "site_settings_public_read" ON public.site_settings;
CREATE POLICY "site_settings_public_read" ON public.site_settings
  FOR SELECT TO anon, authenticated USING (TRUE);

DROP POLICY IF EXISTS "site_settings_admin_write" ON public.site_settings;
CREATE POLICY "site_settings_admin_write" ON public.site_settings
  FOR UPDATE TO authenticated
  USING (public.current_user_role() = 'super_admin');

-- ---------------------------------------------------------------------
-- Media library
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bucket TEXT NOT NULL,
  path TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime_type TEXT,
  size_bytes BIGINT,
  width INT,
  height INT,
  alt_text TEXT,
  caption TEXT,
  tags TEXT[],
  uploaded_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (bucket, path)
);

CREATE INDEX IF NOT EXISTS idx_media_bucket ON public.media(bucket);
CREATE INDEX IF NOT EXISTS idx_media_tags ON public.media USING gin(tags);

ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "media_public_read_public_bucket" ON public.media;
CREATE POLICY "media_public_read_public_bucket" ON public.media
  FOR SELECT TO anon, authenticated USING (bucket = 'media-public');

DROP POLICY IF EXISTS "media_admin_read_all" ON public.media;
CREATE POLICY "media_admin_read_all" ON public.media
  FOR SELECT TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "media_editor_write" ON public.media;
CREATE POLICY "media_editor_write" ON public.media
  FOR ALL TO authenticated USING (public.can_edit_content());

-- ---------------------------------------------------------------------
-- Done
-- ---------------------------------------------------------------------
DO $$ BEGIN
  RAISE NOTICE 'Foundation migration applied successfully.';
END $$;
