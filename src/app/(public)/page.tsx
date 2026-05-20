import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { YouTubeVideos } from "@/components/home/YouTubeVideos";

export const dynamic = "force-dynamic";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  faqPageSchema,
  speakableSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Provider Corporate Event Bandung — Event Organizer B2B, Team Building & Gathering | TourBandung Corporate",
  description:
    "Provider corporate event Bandung specialist B2B: outing kantor, corporate gathering, team building, MICE, incentive trip & executive offsite. ⭐ 4.9/5 · 400+ events sejak 2018 · Proposal gratis dalam 24 jam.",
  alternates: { canonical: SITE.url },
  keywords: [
    "corporate event bandung",
    "provider corporate event bandung",
    "event organizer corporate bandung",
    "corporate gathering bandung",
    "team building bandung",
    "outing kantor bandung",
    "MICE organizer bandung",
    "incentive trip bandung",
  ],
  openGraph: {
    title:
      "TourBandung Corporate — Provider Corporate Event & EO B2B Bandung Specialist",
    description:
      "400+ corporate events delivered. 100+ perusahaan Indonesia. Specialist B2B — outing, gathering, team building, MICE, incentive trip. Proposal gratis dalam 24 jam.",
    url: SITE.url,
    type: "website",
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TourBandung Corporate — Provider Corporate Event Bandung",
    description:
      "Specialist B2B corporate event Bandung. 400+ events · 4.9 ⭐ Google · Proposal 24 jam.",
    images: [`${SITE.url}/opengraph-image`],
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
    faqPageSchema(TOP_FAQS),
    speakableSchema(["h1", ".quick-answer", ".trust-bar", "h2"])
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
