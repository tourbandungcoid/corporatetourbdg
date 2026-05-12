/**
 * 7Summits OS — Supabase Database Types
 *
 * Hand-written to match migrations in db/migrations/.
 * To regenerate from live schema:
 *   npx supabase gen types typescript --project-id nqxdxiejnxfffwztkrpd > src/types/database.generated.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole =
  | "super_admin"
  | "content_admin"
  | "sales_admin"
  | "marketing_admin"
  | "viewer";

export type PublishStatus = "draft" | "published" | "archived";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal_sent"
  | "negotiating"
  | "won"
  | "lost";

export type LeadPriority = "low" | "normal" | "high" | "urgent";

export type ProposalStatus =
  | "draft"
  | "internal_review"
  | "sent"
  | "viewed"
  | "accepted"
  | "rejected"
  | "revised";

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  avatar_url: string | null;
  phone: string | null;
  position: string | null;
  is_active: boolean;
  last_seen_at: string | null;
  preferences: Json;
  created_at: string;
  updated_at: string;
}

export interface SiteSettingsContact {
  phone: string;
  phone_raw: string;
  whatsapp: string;
  whatsapp_url: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
  };
}

export interface SiteSettingsSocial {
  linkedin: string | null;
  instagram: string | null;
  youtube: string | null;
}

export interface SiteSettingsBranding {
  brand_name: string;
  legal_name: string;
  parent_brand: string;
  tagline: string;
  logo_url: string | null;
  favicon_url: string | null;
  established_year: number;
  colors: {
    brand: string;
    brand_deep: string;
    forest: string;
  };
}

export interface SiteSettingsStats {
  programs: string;
  clients: string;
  pax: string;
  years: string;
}

export interface SiteSettingsSEO {
  default_title: string;
  default_description: string;
  default_og_image: string | null;
  keywords: string[];
}

export interface SiteSettingsAnalytics {
  ga4_id: string | null;
  meta_pixel_id: string | null;
  gtag_id: string | null;
  hotjar_id: string | null;
  linkedin_insight_id: string | null;
}

export interface SiteSettings {
  id: number;
  contact: SiteSettingsContact;
  social: SiteSettingsSocial;
  branding: SiteSettingsBranding;
  stats: SiteSettingsStats;
  seo_defaults: SiteSettingsSEO;
  analytics: SiteSettingsAnalytics;
  organization_schema: Json | null;
  updated_at: string;
  updated_by: string | null;
}

export interface MediaLibraryItem {
  id: string;
  storage_path: string;
  public_url: string;
  external_url: string | null;
  file_name: string;
  file_size_bytes: number | null;
  mime_type: string | null;
  width: number | null;
  height: number | null;
  alt_text: string | null;
  caption: string | null;
  category: string | null;
  tags: string[] | null;
  metadata: Json;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  deleted_at: string | null;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  title_en: string | null;
  short_description: string | null;
  long_description: string | null;
  icon: string | null;
  hero_image_id: string | null;
  body_image_id: string | null;
  capacity_label: string | null;
  duration_options: string[];
  price_from_idr: number | null;
  price_from_display: string | null;
  outcomes: string[];
  who_for: string[];
  included: string[];
  formats: Array<{ label: string; description: string; from: string }>;
  pricing_tiers: Array<{
    name: string;
    from: string;
    description: string;
    features: string[];
  }>;
  faqs: Array<{ q: string; a: string }>;
  meta_title: string | null;
  meta_description: string | null;
  og_image_id: string | null;
  status: PublishStatus;
  display_order: number | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  deleted_at: string | null;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  tag: string | null;
  short_description: string | null;
  long_description: string | null;
  hero_image_id: string | null;
  duration: string | null;
  capacity_label: string | null;
  price_from_idr: number | null;
  price_from_display: string | null;
  service_id: string | null;
  destination: string | null;
  includes: string[];
  itinerary: Json[];
  meta_title: string | null;
  meta_description: string | null;
  status: PublishStatus;
  is_featured: boolean;
  display_order: number | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  deleted_at: string | null;
}

export interface CaseStudy {
  id: string;
  slug: string;
  headline: string;
  industry: string | null;
  pax_count: number | null;
  duration: string | null;
  client_name: string | null;
  is_anonymized: boolean;
  challenge: string | null;
  approach: string | null;
  experience: string | null;
  outcomes: string | null;
  outcomes_metrics: Array<{ label: string; value: string }>;
  quote: string | null;
  quote_author: string | null;
  quote_title: string | null;
  hero_image_id: string | null;
  gallery_image_ids: string[];
  video_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: PublishStatus;
  is_featured: boolean;
  display_order: number | null;
  event_date: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  deleted_at: string | null;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string | null;
  company: string | null;
  industry: string | null;
  avatar_image_id: string | null;
  video_url: string | null;
  case_study_id: string | null;
  is_featured: boolean;
  status: PublishStatus;
  display_order: number | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  deleted_at: string | null;
}

export interface Faq {
  id: string;
  category: string | null;
  question: string;
  answer: string;
  slug: string | null;
  meta_title: string | null;
  meta_description: string | null;
  is_long_tail: boolean;
  is_featured: boolean;
  status: PublishStatus;
  display_order: number | null;
  service_id: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  deleted_at: string | null;
}

export interface ClientLogo {
  id: string;
  company_name: string;
  logo_image_id: string | null;
  industry: string | null;
  is_featured: boolean;
  status: PublishStatus;
  display_order: number | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  deleted_at: string | null;
}

export interface Lead {
  id: string;
  lead_number: string;
  source: string;
  contact_name: string;
  contact_position: string | null;
  email: string | null;
  phone: string | null;
  company_name: string | null;
  industry: string | null;
  company_size: string | null;
  event_type: string | null;
  objective: string | null;
  pax_count: number | null;
  duration: string | null;
  preferred_dates: string | null;
  destination: string | null;
  custom_needs: string | null;
  budget_range: string | null;
  budget_min_idr: number | null;
  budget_max_idr: number | null;
  decision_timeline: string | null;
  status: LeadStatus;
  priority: LeadPriority;
  lead_score: number;
  assigned_to: string | null;
  first_response_at: string | null;
  qualified_at: string | null;
  closed_at: string | null;
  lost_reason: string | null;
  raw_payload: Json | null;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
}

export interface LeadActivity {
  id: string;
  lead_id: string;
  type: string;
  subject: string | null;
  content: string | null;
  metadata: Json;
  performed_by: string | null;
  created_at: string;
}

export interface Proposal {
  id: string;
  proposal_number: string;
  lead_id: string | null;
  title: string | null;
  status: ProposalStatus;
  version: number;
  parent_proposal_id: string | null;
  content: Json;
  budget_total_idr: number | null;
  budget_breakdown: Json | null;
  sent_at: string | null;
  first_viewed_at: string | null;
  view_count: number;
  last_viewed_at: string | null;
  decided_at: string | null;
  rejection_reason: string | null;
  prepared_by: string | null;
  approved_by: string | null;
  approved_at: string | null;
  public_token: string;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
}
