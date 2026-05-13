import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { InsightForm, type InsightFormInitial } from "@/components/admin/InsightForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit insight" };

async function getInsight(id: string) {
  const sb = createAdminClient();
  const { data, error } = await sb.from("insights").select("*").eq("id", id).maybeSingle();
  if (error || !data) return null;
  return data;
}

export default async function EditInsightPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = await getInsight(id);
  if (!row) notFound();

  const initial: InsightFormInitial = {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    metaDescription: row.meta_description,
    heroImageUrl: row.hero_image_url ?? "",
    heroImageAlt: row.hero_image_alt ?? "",
    publishDate: row.publish_date,
    readTimeMin: row.read_time_min,
    authorName: row.author_name,
    authorRole: row.author_role,
    authorInitials: row.author_initials,
    status: row.status,
    tldr: Array.isArray(row.tldr) ? row.tldr : [],
    sections: Array.isArray(row.sections) ? row.sections : [],
    relatedSlugs: Array.isArray(row.related_slugs) ? row.related_slugs : [],
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/admin/content/insights"
            className="text-sm text-slate hover:text-ink"
          >
            ← Back to list
          </Link>
          <a
            href={`/insights/${row.slug}`}
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
            {row.title}
          </h1>
        </div>

        <InsightForm initial={initial} />
      </div>
    </main>
  );
}
