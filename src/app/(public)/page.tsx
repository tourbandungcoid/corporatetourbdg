import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { YouTubeVideos } from "@/components/home/YouTubeVideos";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { FinalCTA } from "@/components/home/FinalCTA";
import { IMAGES } from "@/lib/drive-images";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Corporate Outing & Gathering Bandung | TourBandung Corporate — 7Summits Travel",
  description:
    "Specialist B2B corporate outing, team building & executive offsite di Bandung. ⭐ 4.9/5 (105 Google Reviews) · 400+ events delivered · Proposal gratis dalam 24 jam. Hubungi kami sekarang.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title:
      "TourBandung Corporate — Corporate Outing & Gathering Bandung Specialist",
    description:
      "400+ corporate events. 100+ perusahaan Indonesia. Specialist B2B — bukan generic EO. Proposal gratis dalam 24 jam.",
    url: SITE.url,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TourBandung Corporate — Corporate Outing & Gathering Bandung",
    description:
      "Specialist B2B corporate outing & team building Bandung. 400+ events · 4.9 ⭐ Google · Proposal 24 jam.",
    images: [IMAGES.heroMain.src],
  },
};

const TOP_FAQS = [
  {
    question:
      "Berapa estimasi budget outing kantor di Bandung untuk grup 100 pax?",
    answer:
      "Budget outing kantor 100 pax di Bandung untuk paket 2D1N standar berkisar Rp 2,5–5 juta per orang, atau total Rp 250–500 juta. Range mencakup venue, F&B 3x, activity, transportation lokal, project management, dan contingency 8%.",
  },
  {
    question: "Berapa lama proses dari request proposal ke konfirmasi event?",
    answer:
      "Proposal lengkap dengan breakdown line-item + 2 alternative venue dalam 24 jam setelah briefing call. Revisi 1–2 hari. Konfirmasi venue dan deposit 30% — siap dieksekusi 3 minggu kemudian.",
  },
  {
    question:
      "Apa bedanya corporate event specialist dengan generic EO atau travel agent?",
    answer:
      "Specialist demand discovery brief 60–90 menit sebelum quote, kasih breakdown line-item transparent, punya risk register terdokumentasi, dan deliver post-event report. Generic EO biasanya skip discovery, quote total tanpa breakdown, dan tidak ada accountability post-event.",
  },
  {
    question: "Tim Anda khusus Bandung atau bisa di kota lain?",
    answer:
      "Fokus operasional kami di Bandung dan Jawa Barat (Lembang, Ciwidey, Pangalengan, Subang). Untuk client yang berbasis di Jakarta, transportasi grup PP termasuk dalam scope. Outside Jawa Barat case-by-case basis.",
  },
];

export default function HomePage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([{ name: "Home", url: SITE.url }]),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: SITE.url,
      name: "TourBandung Corporate",
      inLanguage: "id-ID",
      publisher: { "@type": "Organization", name: "7Summits Travel" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/faq?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    faqPageSchema(TOP_FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <YouTubeVideos />
        <WhyChooseUs />
        <FeaturedPackages />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <LeadMagnet />
        <FinalCTA />
      </main>
    </>
  );
}
