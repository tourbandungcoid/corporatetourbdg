-- =====================================================================
-- 7Summits OS — Migration 05: Lead Management + Proposal Engine (Phase 2-3)
-- =====================================================================

CREATE TYPE public.lead_status AS ENUM (
  'new', 'contacted', 'qualified', 'proposal_sent',
  'negotiating', 'won', 'lost'
);

CREATE TYPE public.lead_priority AS ENUM ('low', 'normal', 'high', 'urgent');

CREATE TYPE public.proposal_status AS ENUM (
  'draft', 'internal_review', 'sent', 'viewed',
  'accepted', 'rejected', 'revised'
);

-- =====================================================================
-- LEADS
-- =====================================================================
CREATE SEQUENCE public.lead_number_seq START 1;

CREATE OR REPLACE FUNCTION public.generate_lead_number()
RETURNS TEXT
LANGUAGE sql
AS $$
  SELECT 'LEAD-' || EXTRACT(YEAR FROM now())::TEXT || '-' || lpad(nextval('public.lead_number_seq')::TEXT, 4, '0');
$$;

CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_number TEXT UNIQUE NOT NULL DEFAULT public.generate_lead_number(),
  source TEXT NOT NULL,                 -- 'rfp_form' | 'quick_quote' | 'whatsapp' | 'consultation' | 'manual'

  -- Contact
  contact_name TEXT NOT NULL,
  contact_position TEXT,
  email TEXT,
  phone TEXT,

  -- Company
  company_name TEXT,
  industry TEXT,
  company_size TEXT,

  -- Inquiry detail
  event_type TEXT,
  objective TEXT,
  pax_count INT,
  duration TEXT,
  preferred_dates TEXT,
  destination TEXT,
  custom_needs TEXT,
  budget_range TEXT,
  budget_min_idr BIGINT,
  budget_max_idr BIGINT,
  decision_timeline TEXT,

  -- Pipeline
  status public.lead_status NOT NULL DEFAULT 'new',
  priority public.lead_priority NOT NULL DEFAULT 'normal',
  lead_score INT DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  assigned_to UUID REFERENCES public.profiles(id),

  -- Lifecycle
  first_response_at TIMESTAMPTZ,
  qualified_at TIMESTAMPTZ,
  closed_at TIMESTAMPTZ,
  lost_reason TEXT,

  -- Raw payload (full form submission backup)
  raw_payload JSONB,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

CREATE INDEX idx_leads_status ON public.leads(status, created_at DESC);
CREATE INDEX idx_leads_priority ON public.leads(priority, created_at DESC);
CREATE INDEX idx_leads_assigned_to ON public.leads(assigned_to);
CREATE INDEX idx_leads_score ON public.leads(lead_score DESC);
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_phone ON public.leads(phone);
CREATE INDEX idx_leads_company ON public.leads(company_name);

-- Lead scoring function
CREATE OR REPLACE FUNCTION public.calculate_lead_score(lead public.leads)
RETURNS INT
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  score INT := 0;
BEGIN
  -- Company size weight (0-30)
  IF lead.company_size = '2000+' THEN score := score + 30;
  ELSIF lead.company_size = '500-2000' THEN score := score + 22;
  ELSIF lead.company_size = '100-500' THEN score := score + 12;
  END IF;

  -- Budget weight (0-25)
  IF lead.budget_range LIKE '%5.000.000%' OR lead.budget_max_idr >= 5000000 THEN
    score := score + 25;
  ELSIF lead.budget_range LIKE '%2.500.000%' OR lead.budget_max_idr >= 2500000 THEN
    score := score + 18;
  ELSIF lead.budget_range LIKE '%1.000.000%' OR lead.budget_max_idr >= 1000000 THEN
    score := score + 10;
  END IF;

  -- Urgency weight (0-20)
  IF lead.decision_timeline LIKE '%1 bulan%' OR lead.decision_timeline LIKE '%urgent%' THEN
    score := score + 20;
  ELSIF lead.decision_timeline LIKE '%1-3 bulan%' THEN
    score := score + 15;
  ELSIF lead.decision_timeline LIKE '%3-6 bulan%' THEN
    score := score + 8;
  END IF;

  -- Group size weight (0-15)
  IF lead.pax_count >= 300 THEN score := score + 15;
  ELSIF lead.pax_count >= 100 THEN score := score + 10;
  ELSIF lead.pax_count >= 50 THEN score := score + 5;
  END IF;

  -- Corporate email weight (0-10)
  IF lead.email IS NOT NULL
     AND lead.email NOT LIKE '%@gmail.com'
     AND lead.email NOT LIKE '%@yahoo.com'
     AND lead.email NOT LIKE '%@hotmail.com'
     AND lead.email NOT LIKE '%@outlook.com' THEN
    score := score + 10;
  END IF;

  RETURN LEAST(score, 100);
END;
$$;

-- Auto-update lead score on insert/update
CREATE OR REPLACE FUNCTION public.update_lead_score()
RETURNS TRIGGER AS $$
BEGIN
  NEW.lead_score := public.calculate_lead_score(NEW);
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_lead_score
  BEFORE INSERT OR UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.update_lead_score();

CREATE TRIGGER audit_leads
  AFTER INSERT OR UPDATE OR DELETE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Public can INSERT leads (forms submit anonymously)
CREATE POLICY "Anyone can submit lead" ON public.leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Sales reads leads" ON public.leads
  FOR SELECT USING (public.can_view_leads());

CREATE POLICY "Sales updates leads" ON public.leads
  FOR UPDATE USING (public.can_edit_leads());

CREATE POLICY "Super admin deletes leads" ON public.leads
  FOR DELETE USING (public.current_user_role() = 'super_admin');

-- =====================================================================
-- LEAD ACTIVITIES (touchpoints)
-- =====================================================================
CREATE TABLE public.lead_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  type TEXT NOT NULL,                   -- 'note' | 'email_sent' | 'email_received' | 'call' | 'whatsapp' | 'meeting' | 'status_change' | 'proposal_sent'
  subject TEXT,
  content TEXT,
  metadata JSONB DEFAULT '{}'::JSONB,
  performed_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_lead_activities_lead ON public.lead_activities(lead_id, created_at DESC);
CREATE INDEX idx_lead_activities_type ON public.lead_activities(type);

ALTER TABLE public.lead_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sales reads lead activities" ON public.lead_activities
  FOR SELECT USING (public.can_view_leads());

CREATE POLICY "Sales manages lead activities" ON public.lead_activities
  FOR INSERT WITH CHECK (public.can_edit_leads());

-- =====================================================================
-- PROPOSALS
-- =====================================================================
CREATE SEQUENCE public.proposal_number_seq START 1;

CREATE OR REPLACE FUNCTION public.generate_proposal_number()
RETURNS TEXT
LANGUAGE sql
AS $$
  SELECT 'PROP-' || EXTRACT(YEAR FROM now())::TEXT || '-' || lpad(nextval('public.proposal_number_seq')::TEXT, 4, '0');
$$;

CREATE TABLE public.proposals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  proposal_number TEXT UNIQUE NOT NULL DEFAULT public.generate_proposal_number(),
  lead_id UUID REFERENCES public.leads(id),

  title TEXT,
  status public.proposal_status NOT NULL DEFAULT 'draft',

  version INT NOT NULL DEFAULT 1,
  parent_proposal_id UUID REFERENCES public.proposals(id),

  -- Content (versioned snapshot)
  content JSONB NOT NULL DEFAULT '{}'::JSONB,
  budget_total_idr BIGINT,
  budget_breakdown JSONB,

  -- Lifecycle
  sent_at TIMESTAMPTZ,
  first_viewed_at TIMESTAMPTZ,
  view_count INT DEFAULT 0,
  last_viewed_at TIMESTAMPTZ,
  decided_at TIMESTAMPTZ,
  rejection_reason TEXT,

  -- Approval flow
  prepared_by UUID REFERENCES public.profiles(id),
  approved_by UUID REFERENCES public.profiles(id),
  approved_at TIMESTAMPTZ,

  -- Public access (no-auth view via shareable token)
  public_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
  expires_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

CREATE INDEX idx_proposals_lead ON public.proposals(lead_id);
CREATE INDEX idx_proposals_status ON public.proposals(status, created_at DESC);
CREATE INDEX idx_proposals_token ON public.proposals(public_token);

CREATE TRIGGER set_proposals_updated_metadata BEFORE UPDATE ON public.proposals
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_proposals AFTER INSERT OR UPDATE OR DELETE ON public.proposals
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sales reads proposals" ON public.proposals
  FOR SELECT USING (public.can_view_leads());

CREATE POLICY "Sales manages proposals" ON public.proposals
  FOR ALL USING (public.can_edit_leads());

-- Public can view proposal via token (no auth required)
-- This policy bypasses auth for sharable proposal URLs
CREATE POLICY "Public can view by token" ON public.proposals
  FOR SELECT USING (
    public_token IS NOT NULL
    AND (expires_at IS NULL OR expires_at > now())
    AND status IN ('sent', 'viewed', 'accepted', 'rejected')
  );

-- =====================================================================
-- PROPOSAL LINE ITEMS
-- =====================================================================
CREATE TABLE public.proposal_line_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  proposal_id UUID NOT NULL REFERENCES public.proposals(id) ON DELETE CASCADE,
  category TEXT,                        -- 'venue' | 'accommodation' | 'fnb' | 'transport' | 'facilitator' | 'production' | 'other'
  description TEXT NOT NULL,
  quantity NUMERIC,
  unit TEXT,                            -- 'pax' | 'package' | 'hour' | 'unit'
  unit_price_idr BIGINT,
  total_idr BIGINT GENERATED ALWAYS AS (quantity * unit_price_idr) STORED,
  notes TEXT,
  display_order INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_proposal_line_items_proposal ON public.proposal_line_items(proposal_id, display_order);

ALTER TABLE public.proposal_line_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sales reads line items" ON public.proposal_line_items
  FOR SELECT USING (public.can_view_leads());

CREATE POLICY "Sales manages line items" ON public.proposal_line_items
  FOR ALL USING (public.can_edit_leads());
