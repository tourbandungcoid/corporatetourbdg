-- =====================================================================
-- 20260515200000 — Repair foundation schema
-- =====================================================================
-- Production hit "column profiles.role does not exist" because an
-- older incomplete version of the foundation migration was applied
-- to the DB. Supabase's migration tracker only records "version X was
-- applied", not the file hash — so when the foundation file was edited
-- afterwards to add columns, the changes never re-ran against prod.
--
-- This migration defensively re-asserts the foundation schema using
-- IF NOT EXISTS / OR REPLACE / DROP+CREATE, so any environment that
-- was bootstrapped from a stale foundation file gets brought up to
-- spec on next deploy.
--
-- Idempotent — safe to re-run.
-- =====================================================================

-- ---------------------------------------------------------------------
-- Extensions (in case any are missing)
-- ---------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ---------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.user_role AS ENUM (
    'super_admin','content_admin','sales_admin','marketing_admin','viewer'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.content_status AS ENUM ('draft','published','archived');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ---------------------------------------------------------------------
-- profiles — add any columns that may be missing
-- ---------------------------------------------------------------------
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS full_name   TEXT,
  ADD COLUMN IF NOT EXISTS avatar_url  TEXT,
  ADD COLUMN IF NOT EXISTS role        public.user_role NOT NULL DEFAULT 'viewer',
  ADD COLUMN IF NOT EXISTS is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS phone       TEXT,
  ADD COLUMN IF NOT EXISTS specialty   TEXT,
  ADD COLUMN IF NOT EXISTS created_at  TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS updated_at  TIMESTAMPTZ DEFAULT NOW();

CREATE INDEX IF NOT EXISTS idx_profiles_role
  ON public.profiles(role) WHERE is_active = TRUE;

-- ---------------------------------------------------------------------
-- Universal updated_at trigger fn (in case it's stale)
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ---------------------------------------------------------------------
-- handle_new_user trigger fn — auto-create profile on auth.users insert
-- ---------------------------------------------------------------------
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
-- RBAC helper functions (SECURITY DEFINER — bypass RLS during eval)
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
-- profiles RLS policies (re-assert)
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
-- audit_log — re-assert (was originally in foundation)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_log (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id      UUID,
  action        TEXT NOT NULL,
  resource_type TEXT,
  resource_id   UUID,
  changes       JSONB,
  ip_address    TEXT,
  user_agent    TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_actor
  ON public.audit_log(actor_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_resource
  ON public.audit_log(resource_type, resource_id, created_at DESC);

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "audit_log_super_admin_read" ON public.audit_log;
CREATE POLICY "audit_log_super_admin_read" ON public.audit_log
  FOR SELECT TO authenticated
  USING (public.current_user_role() = 'super_admin');

-- ---------------------------------------------------------------------
-- leads — add any columns that may be missing
-- ---------------------------------------------------------------------
-- Lead submission failed in prod with the generic "submit error" message,
-- which happens when `leads` INSERT errors. Most likely cause: same drift
-- pattern as profiles — an older version of the leads migration was
-- applied without all the columns the current code expects.
-- These ADD COLUMN IF NOT EXISTS calls bring the table up to spec.
-- ---------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.lead_status AS ENUM (
    'submitted','under_review','drafting','internal_qa','sent',
    'feedback_requested','revising','approved','declined','archived',
    'won','lost','no_response','cooled'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.lead_priority AS ENUM ('hot','warm','medium','cool','cold');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.lead_source AS ENUM (
    'request_proposal','quick_quote','book_consultation',
    'whatsapp_inbound','lead_magnet','newsletter','manual'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS ref_code              TEXT,
  ADD COLUMN IF NOT EXISTS source_url            TEXT,
  ADD COLUMN IF NOT EXISTS referrer              TEXT,
  ADD COLUMN IF NOT EXISTS whatsapp              TEXT,
  ADD COLUMN IF NOT EXISTS whatsapp_preferred    BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS industry              TEXT,
  ADD COLUMN IF NOT EXISTS company_size          TEXT,
  ADD COLUMN IF NOT EXISTS job_role              TEXT,
  ADD COLUMN IF NOT EXISTS lead_score            INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS lead_score_breakdown  JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS assigned_to           UUID REFERENCES public.profiles(id),
  ADD COLUMN IF NOT EXISTS assigned_at           TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS deleted_at            TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS created_at            TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS updated_at            TIMESTAMPTZ DEFAULT NOW();

-- ref_code generator + default (in case the column was added later)
CREATE OR REPLACE FUNCTION public.generate_ref_code()
RETURNS TEXT LANGUAGE plpgsql AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result TEXT := '';
  i INT;
BEGIN
  FOR i IN 1..8 LOOP
    result := result || substr(chars, (random() * length(chars))::int + 1, 1);
  END LOOP;
  RETURN result;
END;
$$;

-- Backfill ref_code for any existing rows with NULL, then enforce NOT NULL + UNIQUE.
UPDATE public.leads
   SET ref_code = public.generate_ref_code()
 WHERE ref_code IS NULL;

ALTER TABLE public.leads
  ALTER COLUMN ref_code SET DEFAULT public.generate_ref_code(),
  ALTER COLUMN ref_code SET NOT NULL;

DO $$ BEGIN
  ALTER TABLE public.leads ADD CONSTRAINT leads_ref_code_key UNIQUE (ref_code);
EXCEPTION WHEN duplicate_object THEN NULL;
WHEN duplicate_table THEN NULL; END $$;

-- Priority compute fn + trigger (in case missing)
CREATE OR REPLACE FUNCTION public.compute_lead_priority(score INT)
RETURNS public.lead_priority LANGUAGE sql IMMUTABLE AS $$
  SELECT CASE
    WHEN score >= 90 THEN 'hot'::public.lead_priority
    WHEN score >= 70 THEN 'warm'::public.lead_priority
    WHEN score >= 50 THEN 'medium'::public.lead_priority
    WHEN score >= 30 THEN 'cool'::public.lead_priority
    ELSE 'cold'::public.lead_priority
  END;
$$;

CREATE OR REPLACE FUNCTION public.set_lead_priority()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.priority := public.compute_lead_priority(NEW.lead_score);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS set_leads_priority ON public.leads;
CREATE TRIGGER set_leads_priority BEFORE INSERT OR UPDATE OF lead_score ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.set_lead_priority();

DROP TRIGGER IF EXISTS set_leads_updated_at ON public.leads;
CREATE TRIGGER set_leads_updated_at BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ---------------------------------------------------------------------
-- lead_qualifications — add columns if missing
-- ---------------------------------------------------------------------
ALTER TABLE public.lead_qualifications
  ADD COLUMN IF NOT EXISTS event_types                   TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS pax_estimated                 INT,
  ADD COLUMN IF NOT EXISTS pax_min                       INT,
  ADD COLUMN IF NOT EXISTS pax_max                       INT,
  ADD COLUMN IF NOT EXISTS budget_tier                   TEXT,
  ADD COLUMN IF NOT EXISTS duration_preference           TEXT,
  ADD COLUMN IF NOT EXISTS location_preferences          TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS target_date_specific          DATE,
  ADD COLUMN IF NOT EXISTS target_date_flexible_quarter  TEXT,
  ADD COLUMN IF NOT EXISTS urgency                       TEXT,
  ADD COLUMN IF NOT EXISTS additional_notes              TEXT,
  ADD COLUMN IF NOT EXISTS created_at                    TIMESTAMPTZ DEFAULT NOW();

-- ---------------------------------------------------------------------
-- lead_activities — add columns if missing
-- ---------------------------------------------------------------------
ALTER TABLE public.lead_activities
  ADD COLUMN IF NOT EXISTS activity_type   TEXT,
  ADD COLUMN IF NOT EXISTS actor_id        UUID REFERENCES public.profiles(id),
  ADD COLUMN IF NOT EXISTS actor_type      TEXT,
  ADD COLUMN IF NOT EXISTS details         JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS created_at      TIMESTAMPTZ DEFAULT NOW();

-- ---------------------------------------------------------------------
-- Final sanity GRANTs (in case anything was created above without
-- inheriting the default privileges from the previous migration)
-- ---------------------------------------------------------------------
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.audit_log TO authenticated;
GRANT INSERT ON public.leads, public.lead_qualifications, public.lead_activities TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.leads, public.lead_qualifications, public.lead_activities TO authenticated;
GRANT ALL ON public.profiles, public.audit_log, public.leads, public.lead_qualifications, public.lead_activities TO service_role;

DO $$ BEGIN
  RAISE NOTICE 'Foundation schema repair migration completed.';
END $$;
