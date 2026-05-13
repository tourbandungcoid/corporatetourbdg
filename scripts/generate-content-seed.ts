/**
 * Generate SQL seed for insights + case_studies tables.
 *
 * Usage:
 *   npx tsx scripts/generate-content-seed.ts > /tmp/seed.sql
 *   # paste output into the migration file
 */

import { getInsightsListStatic } from "../src/lib/insights-data-static";
import { getCaseStudiesListStatic } from "../src/lib/case-studies-data-static";
const getInsightsList = getInsightsListStatic;
const getCaseStudiesList = getCaseStudiesListStatic;

function sqlString(s: string | null | undefined): string {
  if (s == null) return "NULL";
  return "'" + s.replace(/'/g, "''") + "'";
}
function sqlJsonb(o: unknown): string {
  if (o == null) return "'[]'::jsonb";
  const j = JSON.stringify(o);
  // Escape single quotes for SQL
  return "'" + j.replace(/'/g, "''") + "'::jsonb";
}

console.log("-- Auto-generated seed. Do not edit manually.");
console.log("");

for (const a of getInsightsList()) {
  console.log(`INSERT INTO public.insights (
  slug, title, excerpt, category, meta_description,
  hero_image_url, hero_image_alt, publish_date, read_time_min,
  author_name, author_role, author_initials,
  status, tldr, sections, related_slugs
) VALUES (
  ${sqlString(a.slug)},
  ${sqlString(a.title)},
  ${sqlString(a.excerpt)},
  ${sqlString(a.category)},
  ${sqlString(a.metaDescription)},
  ${sqlString(a.heroImage.src)},
  ${sqlString(a.heroImage.alt)},
  ${sqlString(a.publishDate)}::date,
  ${a.readTimeMin},
  ${sqlString(a.author.name)},
  ${sqlString(a.author.role)},
  ${sqlString(a.author.initials)},
  'published',
  ${sqlJsonb(a.tldr)},
  ${sqlJsonb(a.sections)},
  ${sqlJsonb(a.relatedSlugs ?? [])}
)
ON CONFLICT (slug) DO NOTHING;`);
  console.log("");
}

for (const cs of getCaseStudiesList()) {
  console.log(`INSERT INTO public.case_studies (
  slug, industry, industry_label, outcome_headline, short_description, meta_description,
  hero_image_url, hero_image_alt,
  pax, duration, location, budget_tier, service_slug,
  status, challenge, approach, execution, outcome,
  metrics, testimonial, related_service_slugs, gallery
) VALUES (
  ${sqlString(cs.slug)},
  ${sqlString(cs.industry)},
  ${sqlString(cs.industryLabel)},
  ${sqlString(cs.outcomeHeadline)},
  ${sqlString(cs.shortDescription)},
  ${sqlString(cs.metaDescription)},
  ${sqlString(cs.heroImage.src)},
  ${sqlString(cs.heroImage.alt)},
  ${sqlString(cs.pax)},
  ${sqlString(cs.duration)},
  ${sqlString(cs.location)},
  ${sqlString(cs.budgetTier)},
  ${sqlString(cs.serviceSlug)},
  'published',
  ${sqlJsonb(cs.challenge)},
  ${sqlJsonb(cs.approach)},
  ${sqlJsonb(cs.execution)},
  ${sqlJsonb(cs.outcome)},
  ${sqlJsonb(cs.metrics)},
  ${sqlJsonb(cs.testimonial)},
  ${sqlJsonb(cs.relatedServiceSlugs)},
  ${sqlJsonb(cs.gallery.map((g: { src: string; alt: string }) => ({ src: g.src, alt: g.alt })))}
)
ON CONFLICT (slug) DO NOTHING;`);
  console.log("");
}
