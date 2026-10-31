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
  isInsightLive,
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
      src: r.hero_image_url || "",
      alt: r.hero_image_alt || r.title,
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
    return data.map((d) => rowToInsight(d as Row)).filter((i) => isInsightLive(i.publishDate));
  } catch {
    return null;
  }
}

/** Every slug in the DB regardless of status — a draft/archived row hides its repo twin. */
async function fetchDbSlugs(): Promise<Set<string>> {
  try {
    const sb = createAdminClient();
    const { data } = await sb.from("insights").select("slug");
    return new Set((data ?? []).map((d) => d.slug as string));
  } catch {
    return new Set();
  }
}

/**
 * DB rows + repo articles not (yet) in the DB. The DB was seeded with
 * the first 8 articles only, so returning DB-only hid every repo article
 * added afterwards from /insights and the sitemap. DB wins on slug clash.
 */
export async function getInsightsList(): Promise<Insight[]> {
  const [published, dbSlugs] = await Promise.all([fetchPublished(), fetchDbSlugs()]);
  const fromDb = published ?? [];
  fromDb.forEach((i) => dbSlugs.add(i.slug));
  return [
    ...fromDb,
    ...getInsightsListStatic().filter((i) => !dbSlugs.has(i.slug)),
  ].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
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
    // A future-dated CMS row stays hidden (and keeps hiding its repo twin) until its day.
    return isInsightLive((data as Row).publish_date) ? rowToInsight(data as Row) : undefined;
  } catch {
    return getInsightStatic(slug);
  }
}

export async function getAllInsightSlugs(): Promise<string[]> {
  try {
    const sb = createAdminClient();
    const { data, error } = await sb.from("insights").select("slug, status, publish_date");
    if (error || !data) return getAllInsightSlugsStatic();
    const inDb = new Set(data.map((d) => d.slug));
    return [
      ...data
        .filter((d) => d.status === "published" && isInsightLive(d.publish_date))
        .map((d) => d.slug),
      ...getAllInsightSlugsStatic().filter((slug) => !inDb.has(slug)),
    ];
  } catch {
    return getAllInsightSlugsStatic();
  }
}
