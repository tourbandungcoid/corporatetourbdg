import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Whatsapp } from "@/components/icons/Icons";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { StickyProposalBar } from "@/components/StickyProposalBar";
import {
  getPackageSlugs,
  getPackages,
} from "@/lib/packages-data";
import { getPackageDB } from "@/lib/packages-data-db";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageDB(slug);
  if (!pkg) return { title: "Package not found" };

  const url = `${SITE.url}/packages/${pkg.slug}`;
  const title = `${pkg.title} — ${pkg.startingPrice}`;
  const description = `${pkg.subtitle}. ${pkg.paxRange} · ${pkg.duration}. Starting ${pkg.startingPrice}. Free custom proposal dalam 24 jam.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${pkg.title} — TourBandung Corporate`,
      description,
      url,
      type: "article",
      images: [
        {
          url: pkg.image.src,
          alt: pkg.image.alt,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const pkg = await getPackageDB(slug);
  if (!pkg) notFound();

  const url = `${SITE.url}/packages/${pkg.slug}`;
  const relatedPackages = getPackages()
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Packages", url: `${SITE.url}/packages` },
      { name: pkg.title, url },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: pkg.title,
      description: pkg.subtitle,
      url,
      image: pkg.image.src,
      brand: { "@type": "Organization", name: "TourBandung Corporate" },
      offers: {
        "@type": "Offer",
        price: pkg.priceNumeric * 1_000_000,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url,
      },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <StickyProposalBar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={pkg.image.src}
              alt={pkg.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />
          </div>

          <div className="relative container-1280">
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-paper/60 flex items-center gap-2 mb-6"
            >
              <Link href="/" className="hover:text-paper">
                Home
              </Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-paper">
                Packages
              </Link>
              <span>/</span>
              <span className="text-paper/90 line-clamp-1">{pkg.title}</span>
            </nav>

            <div className="flex flex-wrap gap-2">
              {pkg.vibeTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-paper/10 backdrop-blur border border-paper/20 px-3 py-1 text-[11px] uppercase tracking-wider font-medium text-paper/90"
                >
                  {tag}
                </span>
              ))}
              {pkg.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand text-paper px-3 py-1 text-[11px] uppercase tracking-wider font-medium">
                  ★ Most Popular
                </span>
              )}
            </div>

            <h1 className="font-display mt-6 text-4xl md:text-5xl lg:text-6xl text-paper leading-[1.04] max-w-3xl">
              {pkg.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-paper/80 leading-relaxed max-w-2xl">
              {pkg.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-13 py-3.5 text-[15px] font-medium hover:bg-brand-deep transition-colors hover:shadow-[0_8px_30px_rgba(107,162,57,0.35)]"
              >
                Request Custom Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink(`Interest: ${pkg.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] backdrop-blur text-paper px-7 py-3.5 text-[15px] font-medium hover:bg-paper hover:text-ink hover:border-paper transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Quick facts strip */}
        <section className="border-b border-divider bg-paper py-8">
          <div className="container-1280">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Fact label="Pax range" value={pkg.paxRange} />
              <Fact label="Duration" value={pkg.duration} />
              <Fact label="Starting price" value={pkg.startingPrice} />
              <Fact label="Tipe" value={pkg.vibeTags.join(" · ") || "Custom"} />
            </div>
          </div>
        </section>

        {/* Description + Inclusions */}
        <section className="py-16 md:py-20 bg-bone">
          <div className="container-1280 grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow-brand">Overview</span>
              <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink leading-tight">
                Apa yang lo dapet di paket ini.
              </h2>
              <p className="mt-6 text-base md:text-lg text-slate leading-relaxed">
                {pkg.description}
              </p>

              <div className="mt-10 rounded-2xl border border-border bg-paper p-6 md:p-8">
                <h3 className="font-display text-xl text-ink">
                  Yang sudah include
                </h3>
                <ul className="mt-5 space-y-3">
                  {pkg.inclusions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate leading-relaxed"
                    >
                      <span className="mt-0.5 text-brand flex-shrink-0">
                        <Check size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-xs text-slate-mute leading-relaxed">
                Catatan: harga {pkg.startingPrice} adalah <strong>starting
                point</strong> — di-finalize setelah brief discovery (lokasi,
                tanggal, scope custom). Proposal lengkap include line-item
                breakdown + 2 alternative venue.
              </p>
            </div>

            <aside className="md:sticky md:top-32 md:self-start">
              <div className="rounded-3xl border border-border bg-paper p-7 md:p-8 shadow-[0_24px_56px_rgba(15,31,26,0.06)]">
                <p className="text-xs text-slate-mute uppercase tracking-wider">
                  Mulai dari
                </p>
                <p className="font-display mt-2 text-4xl text-ink tabular leading-none">
                  {pkg.startingPrice}
                </p>
                <p className="mt-2 text-xs text-slate">
                  per pax · sebelum customization
                </p>

                <div className="mt-6 pt-6 border-t border-divider space-y-3">
                  <Link
                    href="/proposal/request"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
                  >
                    Request Proposal
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={buildWaLink(`Tanya paket ${pkg.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-paper px-6 h-12 text-sm font-medium text-ink hover:bg-cream transition"
                  >
                    <Whatsapp size={14} />
                    WhatsApp dulu
                  </a>
                  <Link
                    href={`/services/${pkg.serviceSlug}`}
                    className="inline-flex w-full items-center justify-center gap-2 text-xs text-slate hover:text-ink transition"
                  >
                    Lihat detail service →
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-divider">
                  <GoogleReviewsBadge variant="compact" />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related packages */}
        {relatedPackages.length > 0 && (
          <section className="py-16 md:py-20 bg-paper border-t border-divider">
            <div className="container-1280">
              <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
                <div>
                  <span className="eyebrow-brand">Related</span>
                  <h2 className="font-display mt-4 text-3xl md:text-4xl text-ink">
                    Paket lain yang sering jadi pilihan.
                  </h2>
                </div>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-deep transition"
                >
                  All packages
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedPackages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/packages/${p.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-paper transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)] hover:border-ink-soft"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-ink leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-mute">
                        {p.paxRange} · {p.duration}
                      </p>
                      <p className="mt-3 text-sm text-ink tabular font-medium">
                        {p.startingPrice}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-1280 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
              Paket ini bisa di-tweak 100%.
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
              Brief tim lo — venue, tanggal, scope custom — kami kirim proposal
              detail dengan line-item breakdown dalam 24 jam.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal/request"
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors"
              >
                Request Custom Proposal
                <ArrowRight size={16} />
              </Link>
              <a
                href={buildWaLink(`Custom ${pkg.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors"
              >
                <Whatsapp size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-mute">{label}</p>
      <p className="mt-1.5 font-display text-base md:text-lg text-ink leading-snug">
        {value}
      </p>
    </div>
  );
}
