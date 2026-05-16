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
  faqPageSchema,
  howToSchema,
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
      alternativeHeadline: "Contoh Paket Outing Kantor Bandung: Glamping, Gathering, 1D, 2D1N, 3D2N",
      description: "8 sample corporate event packages dari TourBandung Corporate — starting point yang bisa di-customize. Range Rp 1.5–6.5 jt/pax. Free proposal dalam 24 jam.",
      image: IMAGES.packageAnnualGathering.src,
      datePublished: "2026-05-12",
      dateModified: "2026-05-16",
      slug: "/packages",
      aboutService: "Corporate Event Packages Bandung",
      aboutServiceUrl: `${SITE.url}/outing-kantor-bandung`,
      author: { name: "Andre Pratama", role: "Founder & Lead Corporate Strategist" },
      keywords: [
        "paket corporate outing bandung",
        "harga paket team building bandung 2025",
        "sample program company gathering jawa barat",
        "biaya corporate event per pax bandung",
        "paket annual gathering bandung murah berkualitas",
        "contoh proposal outing kantor bandung",
      ],
      mentions: [
        { type: "Organization", name: "TourBandung Corporate", id: `${SITE.url}#organization`, url: SITE.url },
        { type: "WebPage", name: "Pricing & Transparent Breakdown", url: `${SITE.url}/pricing` },
        { type: "WebPage", name: "Services Overview", url: `${SITE.url}/services` },
        { type: "WebPage", name: "Request Proposal Gratis", url: `${SITE.url}/proposal/request` },
      ],
    }),
    faqPageSchema([
      { question: "Apakah paket corporate outing di TourBandung bisa di-customize?", answer: "Ya — semua paket di halaman ini adalah sample starting point, bukan paket fixed. Setiap proposal yang kami kirim disesuaikan dengan jumlah pax, budget aktual, format event, dan objective spesifik perusahaan Anda. Customization mencakup venue, aktivitas, F&B, transport, dan rundown." },
      { question: "Berapa rentang harga paket corporate outing di Bandung?", answer: "Range harga sample paket TourBandung Corporate: Foundation (Rp 1,5 jt/pax untuk 1-day event 50–100 pax), Standard (Rp 2,5–3,5 jt/pax untuk 2D1N), Premium (Rp 3,5–5 jt/pax dengan venue premium), dan Executive (Rp 5–6,5 jt/pax untuk executive offsite). Semua harga bisa disesuaikan berdasarkan skala grup dan periode booking." },
      { question: "Apa yang sudah termasuk dalam paket corporate outing TourBandung?", answer: "Setiap paket umumnya mencakup: venue/villa/resort, F&B sesuai durasi (makan 2–6x), aktivitas utama (outbound/indoor games/workshop), transportasi lokal, project manager dedicated, dokumentasi dasar, dan post-event report. Komponen bisa ditambah (MC, photobooth, live band) atau dikurangi sesuai kebutuhan." },
      { question: "Berapa lama proses konfirmasi dan eksekusi setelah memilih paket?", answer: "Timeline standar: briefing call 15 menit → proposal lengkap dalam 24 jam → revisi 1–2 hari → konfirmasi + DP 30% → ready to execute 3 minggu kemudian. Untuk event urgent (< 2 minggu), kami punya express track dengan availability tergantung slot vendor dan venue." },
    ], `${SITE.url}/packages`),
    howToSchema({
      pageUrl: `${SITE.url}/packages`,
      name: "Cara Memilih dan Memesan Paket Corporate Outing di TourBandung Corporate",
      description: "4 langkah praktis dari eksplorasi paket hingga konfirmasi booking corporate outing Bandung.",
      steps: [
        {
          name: "Pilih Sample Paket yang Paling Mendekati Kebutuhan",
          text: "Browse 8 sample paket berdasarkan format event (1-day, 2D1N, glamping, gathering) dan estimasi budget per pax. Tidak harus perfect match — ini adalah starting point untuk diskusi customization.",
        },
        {
          name: "Hubungi via WhatsApp atau Request Proposal",
          text: "Setelah menemukan sample yang mendekati, klik 'Request Custom Proposal' atau chat WhatsApp dengan mention sample paket pilihan dan jumlah pax. Senior planner akan merespons dalam 6 jam working hours.",
        },
        {
          name: "Ikuti Briefing Call 15 Menit",
          text: "Senior planner akan jadwalkan briefing call 15 menit untuk menggali objective event, pax, budget range, dan tanggal yang diinginkan. Dari sini proposal custom dibuat dalam 24 jam.",
        },
        {
          name: "Review Proposal dan Konfirmasi",
          text: "Proposal lengkap dengan breakdown line-item dikirim dalam 24 jam setelah briefing. Setelah review dan revisi (biasanya 1–2 hari), konfirmasi dengan DP 30% untuk lock venue dan vendor.",
        },
      ],
    }),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE.url}/packages#webpage`,
      name: "Corporate Event Packages",
      url: `${SITE.url}/packages`,
      inLanguage: "id-ID",
      isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
      mainEntity: {
        "@type": "ItemList",
        "@id": `${SITE.url}/packages#itemlist`,
        numberOfItems: packages.length,
        itemListElement: packages.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            "@id": `${SITE.url}/packages/${p.slug}#product`,
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
              seller: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.legalName, url: SITE.url },
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
