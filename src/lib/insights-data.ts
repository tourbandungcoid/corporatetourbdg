/**
 * Insights data accessor — DB-first with static repo fallback.
 *
 * Reads `public.insights` rows where status='published'. If the table
 * doesn't exist yet (e.g. before migration applies) or returns nothing,
 * falls back to the static repo data in insights-data-static.ts so the
 * site keeps rendering during initial deploy.
 *
 * Re-exports the `Insight` + `InsightSection` types unchanged from
 * the static file so every consumer keeps the same shape.
 */
import { createAdminClient } from "@/lib/supabase/admin";
import {
  type Insight,
  type InsightSection,
  getInsightsListStatic,
  getInsightStatic,
  getAllInsightSlugsStatic,
} from "@/lib/insights-data-static";

export type { Insight, InsightSection };

type Row = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  meta_description: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  publish_date: string;
  read_time_min: number;
  author_name: string;
  author_role: string;
  author_initials: string;
  tldr: unknown;
  sections: unknown;
  related_slugs: unknown;
};

function rowToInsight(r: Row): Insight {
  return {
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    category: r.category,
    metaDescription: r.meta_description,
    heroImage: {
      id: "",
      src: r.hero_image_url ?? "",
      alt: r.hero_image_alt ?? r.title,
    } as Insight["heroImage"],
    publishDate: r.publish_date,
    readTimeMin: r.read_time_min,
    author: {
      name: r.author_name,
      role: r.author_role,
      initials: r.author_initials,
    },
    tldr: Array.isArray(r.tldr) ? (r.tldr as string[]) : [],
    sections: Array.isArray(r.sections) ? (r.sections as InsightSection[]) : [],
    relatedSlugs: Array.isArray(r.related_slugs) ? (r.related_slugs as string[]) : [],
  };
}

async function fetchPublished(): Promise<Insight[] | null> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("insights")
      .select(
        "slug, title, excerpt, category, meta_description, hero_image_url, hero_image_alt, publish_date, read_time_min, author_name, author_role, author_initials, tldr, sections, related_slugs"
      )
      .eq("status", "published")
      .order("publish_date", { ascending: false });
    if (error || !data) return null;
    if (data.length === 0) return null;
    return data.map((d) => rowToInsight(d as Row));
  } catch {
    return null;
  }
}

export async function getInsightsList(): Promise<Insight[]> {
  const fromDb = await fetchPublished();
  if (fromDb) return fromDb;
  return getInsightsListStatic();
}

export async function getInsight(slug: string): Promise<Insight | undefined> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("insights")
      .select(
        "slug, title, excerpt, category, meta_description, hero_image_url, hero_image_alt, publish_date, read_time_min, author_name, author_role, author_initials, tldr, sections, related_slugs"
      )
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error || !data) return getInsightStatic(slug);
    return rowToInsight(data as Row);
  } catch {
    return getInsightStatic(slug);
  }
}

export async function getAllInsightSlugs(): Promise<string[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb
      .from("insights")
      .select("slug")
      .eq("status", "published");
    if (error || !data || data.length === 0) return getAllInsightSlugsStatic();
    return data.map((d) => d.slug);
  } catch {
    return getAllInsightSlugsStatic();
  }
}
