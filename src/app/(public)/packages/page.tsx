import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { PackagesGrid } from "@/components/PackagesGrid";
import { getPackages } from "@/lib/packages-data";
import { ArrowRight, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  articleSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Paket Corporate Outing Bandung — 8 Sample Program Rp 1,5–6,5 Jt/Pax",
  description:
    "8 sample corporate event packages dari TourBandung Corporate — starting point yang bisa di-customize. Range Rp 1.5-6.5 jt/pax. Free proposal dalam 24 jam.",
  alternates: { canonical: `${SITE.url}/packages` },
  openGraph: {
    title: "Paket Corporate Outing Bandung — 8 Sample Program Rp 1,5–6,5 Jt/Pax",
    description: "8 sample programs Rp 1.5–6.5 jt/pax dengan customization scope.",
    url: `${SITE.url}/packages`,
    type: "website",
    images: [{ url: IMAGES.packageAnnualGathering.src, width: 1200, height: 630, alt: IMAGES.packageAnnualGathering.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Corporate Outing Bandung — 8 Program Rp 1,5–6,5 Jt/Pax",
    description: "8 sample corporate event packages TourBandung. Rp 1,5–6,5 jt/pax. Free proposal dalam 24 jam.",
    images: [IMAGES.packageAnnualGathering.src],
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
    articleSchema({
      headline: "Paket Corporate Outing Bandung — 8 Sample Program Rp 1,5–6,5 Jt/Pax",
      description: "8 sample corporate event packages dari TourBandung Corporate — starting point yang bisa di-customize. Range Rp 1.5–6.5 jt/pax. Free proposal dalam 24 jam.",
      image: IMAGES.packageAnnualGathering.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/packages",
      aboutService: "Corporate Event Packages Bandung",
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "paket corporate outing bandung",
        "harga paket team building bandung 2025",
        "sample program company gathering jawa barat",
        "biaya corporate event per pax bandung",
        "paket annual gathering bandung murah berkualitas",
        "contoh proposal outing kantor bandung",
      ],
    }),
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
            url: `${SITE.url}/packages/${p.slug}`,
            image: { "@type": "ImageObject", url: p.image.src, width: 1200, height: 630, alt: p.image.alt },
            offers: {
              "@type": "Offer",
              price: p.priceNumeric * 1_000_000,
              priceCurrency: "IDR",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              seller: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
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

      {/* Filter bar + Packages grid */}
      <PackagesGrid packages={packages} />

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
