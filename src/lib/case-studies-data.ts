/**
 * Case studies data accessor — DB-first with static repo fallback.
 * See insights-data.ts for the rationale.
 */
import { createAdminClient } from "@/lib/supabase/admin";
import {
  type CaseStudy,
  getCaseStudiesListStatic,
  getCaseStudyStatic,
  getAllCaseStudySlugsStatic,
} from "@/lib/case-studies-data-static";

export type { CaseStudy };

type Row = {
  slug: string;
  industry: string;
  industry_label: string;
  outcome_headline: string;
  short_description: string;
  meta_description: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  pax: string;
  duration: string;
  location: string;
  budget_tier: string;
  service_slug: string;
  challenge: unknown;
  approach: unknown;
  execution: unknown;
  outcome: unknown;
  metrics: unknown;
  testimonial: unknown;
  related_service_slugs: unknown;
  gallery: unknown;
};

function rowToCaseStudy(r: Row): CaseStudy {
  const gallery = Array.isArray(r.gallery)
    ? (r.gallery as { src: string; alt: string }[]).map((g) => ({
        id: "",
        src: g.src,
        alt: g.alt,
      }))
    : [];
  return {
    slug: r.slug,
    industry: r.industry,
    industryLabel: r.industry_label,
    outcomeHeadline: r.outcome_headline,
    shortDescription: r.short_description,
    metaDescription: r.meta_description,
    heroImage: {
      id: "",
      src: r.hero_image_url ?? "",
      alt: r.hero_image_alt ?? r.outcome_headline,
    } as CaseStudy["heroImage"],
    gallery: gallery as CaseStudy["gallery"],
    pax: r.pax,
    duration: r.duration,
    location: r.location,
    budgetTier: r.budget_tier,
    serviceSlug: r.service_slug,
    challenge: Array.isArray(r.challenge) ? (r.challenge as string[]) : [],
    approach: Array.isArray(r.approach) ? (r.approach as string[]) : [],
    execution: Array.isArray(r.execution) ? (r.execution as string[]) : [],
    outcome: Array.isArray(r.outcome) ? (r.outcome as string[]) : [],
    metrics: Array.isArray(r.metrics)
      ? (r.metrics as { label: string; value: string }[])
      : [],
    testimonial: (r.testimonial ?? {
      quote: "",
      name: "",
      role: "",
      company: "",
    }) as CaseStudy["testimonial"],
    relatedServiceSlugs: Array.isArray(r.related_service_slugs)
      ? (r.related_service_slugs as string[])
      : [],
  };
}

const SELECT_COLS =
  "slug, industry, industry_label, outcome_headline, short_description, meta_description, hero_image_url, hero_image_alt, pax, duration, location, budget_tier, service_slug, challenge, approach, execution, outcome, metrics, testimonial, related_service_slugs, gallery";

async function fetchPublished(): Promise<CaseStudy[] | null> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("case_studies")
      .select(SELECT_COLS)
      .eq("status", "published")
      .order("created_at", { ascending: false });
    if (error || !data || data.length === 0) return null;
    return data.map((d) => rowToCaseStudy(d as Row));
  } catch {
    return null;
  }
}

export async function getCaseStudiesList(): Promise<CaseStudy[]> {
  const fromDb = await fetchPublished();
  if (fromDb) return fromDb;
  return getCaseStudiesListStatic();
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("case_studies")
      .select(SELECT_COLS)
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error || !data) return getCaseStudyStatic(slug);
    return rowToCaseStudy(data as Row);
  } catch {
    return getCaseStudyStatic(slug);
  }
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("case_studies")
      .select("slug")
      .eq("status", "published");
    if (error || !data || data.length === 0) return getAllCaseStudySlugsStatic();
    return data.map((d) => d.slug);
  } catch {
    return getAllCaseStudySlugsStatic();
  }
}
