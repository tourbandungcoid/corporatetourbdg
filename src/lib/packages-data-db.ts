/**
 * DB-first packages accessor.
 * Tries to fetch a DB row for the slug; merges it on top of the static fallback.
 * Public pages get live DB edits; absent slugs silently use static data.
 */
import { createAdminClient } from "@/lib/supabase/admin";
import { getPackageBySlug, getPackages, type Package } from "@/lib/packages-data";

type PackageRow = {
  slug: string;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  pax_range: string | null;
  duration: string | null;
  vibe_tags: unknown;
  starting_price: string | null;
  price_numeric: number | null;
  inclusions: unknown;
  featured: boolean | null;
  service_slug: string | null;
  hero_image_url: string | null;
  hero_image_alt: string | null;
};

async function fetchPackageRow(slug: string): Promise<PackageRow | null> {
  try {
    const sb = createAdminClient();
    const { data } = await sb
      .from("packages")
      .select("slug,title,subtitle,description,pax_range,duration,vibe_tags,starting_price,price_numeric,inclusions,featured,service_slug,hero_image_url,hero_image_alt")
      .eq("slug", slug)
      .maybeSingle();
    return data ?? null;
  } catch {
    return null;
  }
}

function mergePackage(base: Package, row: PackageRow): Package {
  return {
    ...base,
    title:         row.title         ?? base.title,
    subtitle:      row.subtitle      ?? base.subtitle,
    description:   row.description   ?? base.description,
    paxRange:      row.pax_range     ?? base.paxRange,
    duration:      row.duration      ?? base.duration,
    vibeTags:      Array.isArray(row.vibe_tags) ? (row.vibe_tags as string[]) : base.vibeTags,
    startingPrice: row.starting_price ?? base.startingPrice,
    priceNumeric:  row.price_numeric  ?? base.priceNumeric,
    inclusions:    Array.isArray(row.inclusions) ? (row.inclusions as string[]) : base.inclusions,
    featured:      row.featured       ?? base.featured,
    serviceSlug:   row.service_slug   ?? base.serviceSlug,
    image: row.hero_image_url
      ? { id: "", src: row.hero_image_url, alt: row.hero_image_alt ?? base.image.alt }
      : base.image,
  };
}

export async function getPackageDB(slug: string): Promise<Package | undefined> {
  const base = getPackageBySlug(slug);
  if (!base) return undefined;
  const row = await fetchPackageRow(slug);
  if (!row) return base;
  return mergePackage(base, row);
}

export async function getAllPackagesDB(): Promise<Package[]> {
  const statics = getPackages();
  try {
    const sb = createAdminClient();
    const { data } = await sb
      .from("packages")
      .select("slug,title,subtitle,description,pax_range,duration,vibe_tags,starting_price,price_numeric,inclusions,featured,service_slug,hero_image_url,hero_image_alt");
    const dbMap = new Map<string, PackageRow>(
      (data ?? []).map((r) => [r.slug, r as PackageRow])
    );
    return statics.map((pkg) => {
      const row = dbMap.get(pkg.slug);
      return row ? mergePackage(pkg, row) : pkg;
    });
  } catch {
    return statics;
  }
}
