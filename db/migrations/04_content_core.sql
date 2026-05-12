-- =====================================================================
-- 7Summits OS — Migration 04: Content Core Tables
-- services, programs, case_studies, testimonials, faqs, client_logos
-- =====================================================================

CREATE TYPE public.publish_status AS ENUM ('draft', 'published', 'archived');

-- =====================================================================
-- SERVICES
-- =====================================================================
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  title_en TEXT,
  short_description TEXT,
  long_description TEXT,
  icon TEXT,
  hero_image_id UUID REFERENCES public.media_library(id),
  body_image_id UUID REFERENCES public.media_library(id),
  capacity_label TEXT,
  duration_options JSONB DEFAULT '[]'::JSONB,
  price_from_idr BIGINT,
  price_from_display TEXT,
  outcomes JSONB DEFAULT '[]'::JSONB,
  who_for JSONB DEFAULT '[]'::JSONB,
  included JSONB DEFAULT '[]'::JSONB,
  formats JSONB DEFAULT '[]'::JSONB,
  pricing_tiers JSONB DEFAULT '[]'::JSONB,
  faqs JSONB DEFAULT '[]'::JSONB,
  meta_title TEXT,
  meta_description TEXT,
  og_image_id UUID REFERENCES public.media_library(id),
  status public.publish_status NOT NULL DEFAULT 'draft',
  display_order INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ,
  CONSTRAINT services_slug_unique_when_active UNIQUE NULLS NOT DISTINCT (slug, deleted_at)
);

CREATE INDEX idx_services_status ON public.services(status, display_order) WHERE deleted_at IS NULL;
CREATE INDEX idx_services_slug ON public.services(slug) WHERE deleted_at IS NULL;

CREATE TRIGGER set_services_updated_metadata BEFORE UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_services AFTER INSERT OR UPDATE OR DELETE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published services" ON public.services
  FOR SELECT USING (status = 'published' AND deleted_at IS NULL);
CREATE POLICY "Admins read all services" ON public.services
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Content admins manage services" ON public.services
  FOR ALL USING (public.can_edit_content());

-- =====================================================================
-- PROGRAMS (productized signature programs)
-- =====================================================================
CREATE TABLE public.programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  tag TEXT,
  short_description TEXT,
  long_description TEXT,
  hero_image_id UUID REFERENCES public.media_library(id),
  duration TEXT,
  capacity_label TEXT,
  price_from_idr BIGINT,
  price_from_display TEXT,
  service_id UUID REFERENCES public.services(id),
  destination TEXT,
  includes JSONB DEFAULT '[]'::JSONB,
  itinerary JSONB DEFAULT '[]'::JSONB,
  meta_title TEXT,
  meta_description TEXT,
  status public.publish_status NOT NULL DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  display_order INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ,
  CONSTRAINT programs_slug_unique_when_active UNIQUE NULLS NOT DISTINCT (slug, deleted_at)
);

CREATE INDEX idx_programs_status ON public.programs(status, display_order) WHERE deleted_at IS NULL;
CREATE INDEX idx_programs_featured ON public.programs(is_featured) WHERE status = 'published' AND deleted_at IS NULL;

CREATE TRIGGER set_programs_updated_metadata BEFORE UPDATE ON public.programs
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_programs AFTER INSERT OR UPDATE OR DELETE ON public.programs
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published programs" ON public.programs
  FOR SELECT USING (status = 'published' AND deleted_at IS NULL);
CREATE POLICY "Admins read all programs" ON public.programs
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Content admins manage programs" ON public.programs
  FOR ALL USING (public.can_edit_content());

-- =====================================================================
-- CASE STUDIES
-- =====================================================================
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL,
  headline TEXT NOT NULL,
  industry TEXT,
  pax_count INT,
  duration TEXT,
  client_name TEXT,
  is_anonymized BOOLEAN DEFAULT true,
  challenge TEXT,
  approach TEXT,
  experience TEXT,
  outcomes TEXT,
  outcomes_metrics JSONB DEFAULT '[]'::JSONB,
  quote TEXT,
  quote_author TEXT,
  quote_title TEXT,
  hero_image_id UUID REFERENCES public.media_library(id),
  gallery_image_ids UUID[] DEFAULT '{}',
  video_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  status public.publish_status NOT NULL DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  display_order INT,
  event_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ,
  CONSTRAINT case_studies_slug_unique_when_active UNIQUE NULLS NOT DISTINCT (slug, deleted_at)
);

CREATE INDEX idx_case_studies_status ON public.case_studies(status, display_order) WHERE deleted_at IS NULL;
CREATE INDEX idx_case_studies_featured ON public.case_studies(is_featured) WHERE status = 'published' AND deleted_at IS NULL;
CREATE INDEX idx_case_studies_industry ON public.case_studies(industry) WHERE status = 'published' AND deleted_at IS NULL;

CREATE TRIGGER set_case_studies_updated_metadata BEFORE UPDATE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_case_studies AFTER INSERT OR UPDATE OR DELETE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published case studies" ON public.case_studies
  FOR SELECT USING (status = 'published' AND deleted_at IS NULL);
CREATE POLICY "Admins read all case studies" ON public.case_studies
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Content admins manage case studies" ON public.case_studies
  FOR ALL USING (public.can_edit_content());

-- =====================================================================
-- TESTIMONIALS
-- =====================================================================
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  title TEXT,
  company TEXT,
  industry TEXT,
  avatar_image_id UUID REFERENCES public.media_library(id),
  video_url TEXT,
  case_study_id UUID REFERENCES public.case_studies(id),
  is_featured BOOLEAN DEFAULT false,
  status public.publish_status NOT NULL DEFAULT 'published',
  display_order INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_testimonials_status ON public.testimonials(status, display_order) WHERE deleted_at IS NULL;
CREATE INDEX idx_testimonials_featured ON public.testimonials(is_featured) WHERE status = 'published' AND deleted_at IS NULL;

CREATE TRIGGER set_testimonials_updated_metadata BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_testimonials AFTER INSERT OR UPDATE OR DELETE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published testimonials" ON public.testimonials
  FOR SELECT USING (status = 'published' AND deleted_at IS NULL);
CREATE POLICY "Admins read all testimonials" ON public.testimonials
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Content admins manage testimonials" ON public.testimonials
  FOR ALL USING (public.can_edit_content());

-- =====================================================================
-- FAQS
-- =====================================================================
CREATE TABLE public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  slug TEXT,
  meta_title TEXT,
  meta_description TEXT,
  is_long_tail BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  status public.publish_status NOT NULL DEFAULT 'published',
  display_order INT,
  service_id UUID REFERENCES public.services(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_faqs_category ON public.faqs(category, display_order) WHERE deleted_at IS NULL;
CREATE INDEX idx_faqs_featured ON public.faqs(is_featured) WHERE status = 'published' AND deleted_at IS NULL;
CREATE INDEX idx_faqs_slug ON public.faqs(slug) WHERE is_long_tail = true AND deleted_at IS NULL;

CREATE TRIGGER set_faqs_updated_metadata BEFORE UPDATE ON public.faqs
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_faqs AFTER INSERT OR UPDATE OR DELETE ON public.faqs
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published faqs" ON public.faqs
  FOR SELECT USING (status = 'published' AND deleted_at IS NULL);
CREATE POLICY "Admins read all faqs" ON public.faqs
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Content admins manage faqs" ON public.faqs
  FOR ALL USING (public.can_edit_content());

-- =====================================================================
-- CLIENT LOGOS
-- =====================================================================
CREATE TABLE public.client_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  logo_image_id UUID REFERENCES public.media_library(id),
  industry TEXT,
  is_featured BOOLEAN DEFAULT true,
  status public.publish_status NOT NULL DEFAULT 'published',
  display_order INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_client_logos_featured ON public.client_logos(is_featured, display_order) WHERE status = 'published' AND deleted_at IS NULL;

CREATE TRIGGER set_client_logos_updated_metadata BEFORE UPDATE ON public.client_logos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_metadata();
CREATE TRIGGER audit_client_logos AFTER INSERT OR UPDATE OR DELETE ON public.client_logos
  FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published client logos" ON public.client_logos
  FOR SELECT USING (status = 'published' AND deleted_at IS NULL);
CREATE POLICY "Admins read all client logos" ON public.client_logos
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Content admins manage client logos" ON public.client_logos
  FOR ALL USING (public.can_edit_content());
