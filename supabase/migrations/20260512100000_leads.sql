-- =====================================================================
-- 20260512100000 — Leads, lead_qualifications, lead_activities
-- =====================================================================
-- Core Phase 5 schema for the proposal funnel.
-- Idempotent — safe to re-run.
-- =====================================================================

-- ---------------------------------------------------------------------
-- Ref code generator
-- Public-safe short alphanumeric code (length 8, base32-ish).
-- Used in URLs like /proposal/track/[ref].
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.generate_ref_code()
RETURNS TEXT LANGUAGE plpgsql AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';  -- no 0/O/1/I confusion
  result TEXT := '';
  i INT;
BEGIN
  FOR i IN 1..8 LOOP
    result := result || substr(chars, (random() * length(chars))::int + 1, 1);
  END LOOP;
  RETURN result;
END;
$$;

-- ---------------------------------------------------------------------
-- Leads
-- ---------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.lead_status AS ENUM (
    'submitted','under_review','drafting','internal_qa','sent',
    'feedback_requested','revising','approved','declined','archived',
    'won','lost','no_response','cooled'
  );
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE public.lead_priority AS ENUM ('hot','warm','medium','cool','cold');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE public.lead_source AS ENUM (
    'request_proposal','quick_quote','book_consultation',
    'whatsapp_inbound','lead_magnet','newsletter','manual'
  );
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ref_code TEXT UNIQUE NOT NULL DEFAULT public.generate_ref_code(),

  source public.lead_source NOT NULL,
  source_url TEXT,
  referrer TEXT,

  -- Contact
  full_name TEXT NOT NULL,
  work_email CITEXT NOT NULL,
  whatsapp TEXT,
  whatsapp_preferred BOOLEAN DEFAULT TRUE,

  -- Company
  company_name TEXT NOT NULL,
  industry TEXT,
  company_size TEXT CHECK (company_size IN ('startup','sme','midsize','enterprise')),

  -- Role
  job_role TEXT,

  -- Status
  status public.lead_status NOT NULL DEFAULT 'submitted',

  -- Scoring
  lead_score INT NOT NULL DEFAULT 0,
  lead_score_breakdown JSONB DEFAULT '{}'::jsonb,
  priority public.lead_priority,

  -- Assignment
  assigned_to UUID REFERENCES public.profiles(id),
  assigned_at TIMESTAMPTZ,

  -- Audit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_leads_priority ON public.leads(priority) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_leads_assigned ON public.leads(assigned_to) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_leads_score ON public.leads(lead_score DESC) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_leads_created ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_ref_code ON public.leads(ref_code);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(work_email);

DROP TRIGGER IF EXISTS set_leads_updated_at ON public.leads;
CREATE TRIGGER set_leads_updated_at BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ---------------------------------------------------------------------
-- Lead Qualifications (1:1 with leads — full form data)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.lead_qualifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,

  event_types TEXT[] NOT NULL DEFAULT '{}',
  pax_estimated INT,
  pax_min INT,
  pax_max INT,
  budget_tier TEXT CHECK (budget_tier IN ('conservative','standard','premium','all_out','help_me')),
  duration_preference TEXT,
  location_preferences TEXT[] DEFAULT '{}',

  target_date_specific DATE,
  target_date_flexible_quarter TEXT,
  urgency TEXT CHECK (urgency IN ('urgent','standard','planning_ahead','researching')),

  additional_notes TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE (lead_id)
);

CREATE INDEX IF NOT EXISTS idx_lead_qual_lead ON public.lead_qualifications(lead_id);

-- ---------------------------------------------------------------------
-- Lead Activities (audit trail per lead)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.lead_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,

  activity_type TEXT NOT NULL,
  actor_id UUID REFERENCES public.profiles(id),
  actor_type TEXT,
  details JSONB DEFAULT '{}'::jsonb,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_lead_activities_lead ON public.lead_activities(lead_id, created_at DESC);

-- ---------------------------------------------------------------------
-- Lead scoring helper
-- ---------------------------------------------------------------------
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

-- Auto-set priority from score on insert/update
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

-- ---------------------------------------------------------------------
-- RBAC helper for leads
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.can_view_leads()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.current_user_role() IN ('super_admin','sales_admin','marketing_admin');
$$;

CREATE OR REPLACE FUNCTION public.can_edit_leads()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.current_user_role() IN ('super_admin','sales_admin');
$$;

-- ---------------------------------------------------------------------
-- RLS — Leads
-- ---------------------------------------------------------------------
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "leads_anon_insert" ON public.leads;
CREATE POLICY "leads_anon_insert" ON public.leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "leads_sales_select" ON public.leads;
CREATE POLICY "leads_sales_select" ON public.leads
  FOR SELECT TO authenticated
  USING (public.can_view_leads());

DROP POLICY IF EXISTS "leads_sales_update" ON public.leads;
CREATE POLICY "leads_sales_update" ON public.leads
  FOR UPDATE TO authenticated
  USING (public.can_edit_leads())
  WITH CHECK (public.can_edit_leads());

DROP POLICY IF EXISTS "leads_super_admin_delete" ON public.leads;
CREATE POLICY "leads_super_admin_delete" ON public.leads
  FOR DELETE TO authenticated
  USING (public.current_user_role() = 'super_admin');

-- Explicit table-level grants (anon needs INSERT + SELECT for INSERT...RETURNING)
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT ON public.leads TO anon;

-- ---------------------------------------------------------------------
-- RLS — Lead Qualifications
-- ---------------------------------------------------------------------
ALTER TABLE public.lead_qualifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "lead_qual_anon_insert" ON public.lead_qualifications;
CREATE POLICY "lead_qual_anon_insert" ON public.lead_qualifications
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "lead_qual_sales_select" ON public.lead_qualifications;
CREATE POLICY "lead_qual_sales_select" ON public.lead_qualifications
  FOR SELECT TO authenticated
  USING (public.can_view_leads());

GRANT INSERT ON public.lead_qualifications TO anon, authenticated;

-- ---------------------------------------------------------------------
-- RLS — Lead Activities
-- ---------------------------------------------------------------------
ALTER TABLE public.lead_activities ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "lead_act_anon_insert" ON public.lead_activities;
CREATE POLICY "lead_act_anon_insert" ON public.lead_activities
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "lead_act_sales_select" ON public.lead_activities;
CREATE POLICY "lead_act_sales_select" ON public.lead_activities
  FOR SELECT TO authenticated
  USING (public.can_view_leads());

GRANT INSERT ON public.lead_activities TO anon, authenticated;

-- ---------------------------------------------------------------------
-- Audit triggers on leads tables
-- ---------------------------------------------------------------------
DROP TRIGGER IF EXISTS audit_leads ON public.leads;
CREATE TRIGGER audit_leads AFTER INSERT OR UPDATE OR DELETE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.audit_table_changes();

DROP TRIGGER IF EXISTS audit_lead_qualifications ON public.lead_qualifications;
CREATE TRIGGER audit_lead_qualifications AFTER INSERT OR UPDATE OR DELETE ON public.lead_qualifications
  FOR EACH ROW EXECUTE FUNCTION public.audit_table_changes();

DO $$ BEGIN
  RAISE NOTICE 'Leads schema migration applied successfully.';
END $$;
