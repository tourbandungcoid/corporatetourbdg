import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceDB } from "@/lib/services-data-db";
import { ServiceForm, type ServiceFormInitial } from "@/components/admin/ServiceForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit service" };

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = await getServiceDB(slug);
  if (!svc) notFound();

  const initial: ServiceFormInitial = {
    slug: svc.slug,
    title: svc.title,
    eyebrow: svc.eyebrow,
    heroDescription: svc.heroDescription,
    heroImageUrl: svc.heroImage.src,
    heroImageAlt: svc.heroImage.alt,
    metaDescription: svc.metaDescription,
    paxRange: svc.paxRange,
    priceFrom: svc.priceFrom,
    durationOptions: svc.durationOptions,
    vibeTags: svc.vibeTags,
    inclusions: svc.inclusions,
    samples: svc.samples,
    process: svc.process,
    faqs: svc.faqs,
  };

  return (
    <main className="p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/admin/content/services" className="text-sm text-slate hover:text-ink">
            ← Kembali ke services
          </Link>
          <a href={`/services/${slug}`} target="_blank" rel="noopener noreferrer"
            className="text-sm text-brand-deep hover:underline">
            Lihat halaman publik →
          </a>
        </div>

        <div className="mb-8">
          <p className="eyebrow-brand">Services</p>
          <h1 className="font-display mt-2 text-3xl md:text-4xl text-ink">{svc.title}</h1>
          <p className="mt-1 font-mono text-xs text-slate-mute">/services/{slug}</p>
        </div>

        <ServiceForm initial={initial} />
      </div>
    </main>
  );
}
