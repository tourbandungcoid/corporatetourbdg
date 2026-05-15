import Link from "next/link";
import { notFound } from "next/navigation";
import { getPackageDB } from "@/lib/packages-data-db";
import { PackageForm, type PackageFormInitial } from "@/components/admin/PackageForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit package" };

export default async function EditPackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = await getPackageDB(slug);
  if (!pkg) notFound();

  const initial: PackageFormInitial = {
    slug: pkg.slug,
    title: pkg.title,
    subtitle: pkg.subtitle,
    description: pkg.description,
    paxRange: pkg.paxRange,
    duration: pkg.duration,
    vibeTags: pkg.vibeTags,
    startingPrice: pkg.startingPrice,
    priceNumeric: pkg.priceNumeric,
    inclusions: pkg.inclusions,
    featured: pkg.featured,
    serviceSlug: pkg.serviceSlug,
    heroImageUrl: pkg.image.src,
    heroImageAlt: pkg.image.alt,
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/admin/content/packages" className="text-sm text-slate hover:text-ink">
            ← Kembali ke packages
          </Link>
          <a href={`/packages/${slug}`} target="_blank" rel="noopener noreferrer"
            className="text-sm text-brand-deep hover:underline">
            Lihat halaman publik →
          </a>
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">Packages</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">{pkg.title}</h1>
          <p className="mt-1 font-mono text-xs text-slate-mute">/packages/{slug}</p>
        </div>

        <PackageForm initial={initial} />
      </div>
    </main>
  );
}
