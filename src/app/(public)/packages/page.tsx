import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { getPackages } from "@/lib/packages-data";
import { ArrowRight, Check, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "8 sample corporate event packages dari TourBandung Corporate — starting point yang bisa di-customize. Range Rp 1.5-6.5 jt/pax. Free proposal dalam 24 jam.",
  alternates: { canonical: `${SITE.url}/packages` },
  openGraph: {
    title: "Packages — TourBandung Corporate",
    description: "8 sample programs Rp 1.5–6.5 jt/pax dengan customization scope.",
    url: `${SITE.url}/packages`,
    type: "website",
  },
};

export default function PackagesIndexPage() {
  const packages = getPackages();

  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Packages", url: `${SITE.url}/packages` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Corporate Event Packages",
      url: `${SITE.url}/packages`,
      inLanguage: "id-ID",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: packages.length,
        itemListElement: packages.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.title,
            description: p.subtitle,
            url: `${SITE.url}/packages`,
            offers: {
              "@type": "Offer",
              price: p.priceNumeric * 1_000_000,
              priceCurrency: "IDR",
              availability: "https://schema.org/InStock",
            },
          },
        })),
      },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="Featured Programs"
        title="8 sample programs. Tinggal customize."
        description="Bukan paket fixed — sample starting point dengan pricing transparent. Setiap proposal yang kami kirim disesuaikan dengan tim, budget, dan objective lo."
      />

      {/* Featured strip */}
      <section className="border-b border-divider py-8 bg-paper">
        <div className="container-1280 flex flex-wrap items-center justify-between gap-4">
          <GoogleReviewsBadge variant="compact" />
          <Link
            href="/proposal/request"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 h-12 text-sm font-medium hover:bg-brand-deep transition"
          >
            Request custom proposal
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-16 md:py-20">
        <div className="container-1280">
          <div className="grid gap-6 md:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className={[
                  "group relative overflow-hidden rounded-3xl bg-paper border transition-all hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,31,26,0.08)]",
                  pkg.featured
                    ? "border-brand md:scale-[1.01] ring-2 ring-brand/30"
                    : "border-border hover:border-ink-soft",
                ].join(" ")}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-forest to-ink">
                  <Image
                    src={pkg.image.src}
                    alt={pkg.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  {pkg.featured && (
                    <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink shadow-md">
                      ★ Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-1.5">
                    {pkg.vibeTags.map((v) => (
                      <span key={v} className="inline-flex items-center rounded-full bg-paper/90 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-medium text-ink">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight">{pkg.title}</h2>
                  <p className="mt-2 text-sm text-slate">{pkg.subtitle}</p>
                  <p className="mt-4 text-sm text-slate leading-relaxed">{pkg.description}</p>

                  <div className="mt-6 pt-5 border-t border-divider flex items-center gap-6 text-sm text-slate">
                    <span>{pkg.paxRange}</span>
                    <span className="h-1 w-1 rounded-full bg-divider" />
                    <span>{pkg.duration}</span>
                  </div>

                  <details className="mt-5 group/details">
                    <summary className="cursor-pointer text-sm font-medium text-ink hover:text-brand-deep flex items-center gap-1.5">
                      <span>Yang sudah include</span>
                      <span className="text-xs text-slate-mute transition-transform group-open/details:rotate-180">↓</span>
                    </summary>
                    <ul className="mt-4 space-y-2">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                          <span className="mt-0.5 text-brand flex-shrink-0"><Check size={14} /></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  <div className="mt-6 pt-5 border-t border-divider flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-mute mb-0.5">Mulai dari</p>
                      <p className="font-display text-2xl text-ink tabular leading-none">
                        {pkg.startingPrice}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/services/${pkg.serviceSlug}`}
                        className="inline-flex items-center justify-center h-10 px-4 rounded-full border border-border text-xs font-medium text-ink hover:bg-cream transition"
                      >
                        Detail service
                      </Link>
                      <Link
                        href="/proposal/request"
                        className="inline-flex items-center justify-center gap-1 h-10 px-4 rounded-full bg-ink text-paper text-xs font-medium hover:bg-brand-deep transition"
                      >
                        Request<ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-1280 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.02]">
            Belum ada package yang fit?
          </h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
            Setiap proposal kami custom — sample di atas adalah starting point.
            Brief tim lo, kami design proposal yang fit goal + budget actual.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposal/request" className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 h-14 text-base font-medium hover:bg-brand hover:text-paper transition-colors">
              Request Custom Proposal<ArrowRight size={16} />
            </Link>
            <a href={buildWaLink("custom corporate package")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/5 backdrop-blur text-paper px-8 h-14 text-base font-medium hover:bg-paper/10 transition-colors">
              <Whatsapp size={16} />WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
