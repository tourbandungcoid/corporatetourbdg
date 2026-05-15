/**
 * DB-first services accessor.
 * Merges DB row on top of static fallback for each service slug.
 */
import { createAdminClient } from "@/lib/supabase/admin";
import { getService, getServicesList, type ServiceDetail } from "@/lib/services-data";

type ServiceRow = {
  slug: string;
  title: string | null;
  eyebrow: string | null;
  hero_description: string | null;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  meta_description: string | null;
  pax_range: string | null;
  duration_options: unknown;
  price_from: string | null;
  vibe_tags: unknown;
  inclusions: unknown;
  samples: unknown;
  process_steps: unknown;
  faqs: unknown;
};

async function fetchServiceRow(slug: string): Promise<ServiceRow | null> {
  try {
    const sb = createAdminClient();
    const { data } = await sb
      .from("services")
      .select("slug,title,eyebrow,hero_description,hero_image_url,hero_image_alt,meta_description,pax_range,duration_options,price_from,vibe_tags,inclusions,samples,process_steps,faqs")
      .eq("slug", slug)
      .maybeSingle();
    return data ?? null;
  } catch {
    return null;
  }
}

function arr<T>(v: unknown, fallback: T[]): T[] {
  return Array.isArray(v) ? (v as T[]) : fallback;
}

function mergeService(base: ServiceDetail, row: ServiceRow): ServiceDetail {
  return {
    ...base,
    title:           row.title           ?? base.title,
    eyebrow:         row.eyebrow         ?? base.eyebrow,
    heroDescription: row.hero_description ?? base.heroDescription,
    metaDescription: row.meta_description ?? base.metaDescription,
    paxRange:        row.pax_range        ?? base.paxRange,
    priceFrom:       row.price_from       ?? base.priceFrom,
    durationOptions: arr<string>(row.duration_options, base.durationOptions),
    vibeTags:        arr<string>(row.vibe_tags,        base.vibeTags),
    inclusions:      arr<string>(row.inclusions,       base.inclusions),
    samples:         arr<ServiceDetail["samples"][number]>(row.samples, base.samples),
    process:         arr<ServiceDetail["process"][number]>(row.process_steps, base.process),
    faqs:            arr<ServiceDetail["faqs"][number]>(row.faqs, base.faqs),
    heroImage: row.hero_image_url
      ? { id: "", src: row.hero_image_url, alt: row.hero_image_alt ?? base.heroImage.alt }
      : base.heroImage,
  };
}

export async function getServiceDB(slug: string): Promise<ServiceDetail | undefined> {
  const base = getService(slug);
  if (!base) return undefined;
  const row = await fetchServiceRow(slug);
  if (!row) return base;
  return mergeService(base, row);
}
