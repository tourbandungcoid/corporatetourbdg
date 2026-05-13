import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { CaseStudyForm, type CaseStudyFormInitial } from "@/components/admin/CaseStudyForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit case study" };

async function getCaseStudy(id: string) {
  const sb = createAdminClient();
  const { data, error } = await sb.from("case_studies").select("*").eq("id", id).maybeSingle();
  if (error || !data) return null;
  return data;
}

export default async function EditCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await getCaseStudy(id);
  if (!row) notFound();

  const initial: CaseStudyFormInitial = {
    id: row.id,
    slug: row.slug,
    industry: row.industry,
    industryLabel: row.industry_label,
    outcomeHeadline: row.outcome_headline,
    shortDescription: row.short_description,
    metaDescription: row.meta_description,
    heroImageUrl: row.hero_image_url ?? "",
    heroImageAlt: row.hero_image_alt ?? "",
    pax: row.pax,
    duration: row.duration,
    location: row.location,
    budgetTier: row.budget_tier,
    serviceSlug: row.service_slug,
    status: row.status,
    challenge: Array.isArray(row.challenge) ? row.challenge : [],
    approach: Array.isArray(row.approach) ? row.approach : [],
    execution: Array.isArray(row.execution) ? row.execution : [],
    outcome: Array.isArray(row.outcome) ? row.outcome : [],
    metrics: Array.isArray(row.metrics) ? row.metrics : [],
    testimonial: row.testimonial ?? {},
    relatedServiceSlugs: Array.isArray(row.related_service_slugs)
      ? row.related_service_slugs
      : [],
    gallery: Array.isArray(row.gallery) ? row.gallery : [],
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/admin/content/case-studies"
            className="text-sm text-slate hover:text-ink"
          >
            ← Back to list
          </Link>
          <a
            href={`/case-studies/${row.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-deep hover:underline"
          >
            View public page →
          </a>
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">Content</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink line-clamp-2">
            {row.outcome_headline}
          </h1>
        </div>

        <CaseStudyForm initial={initial} />
      </div>
    </main>
  );
}
