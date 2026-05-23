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
import { IMAGES } from "@/lib/drive-images";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
  localBusinessSchema,
  faqPageSchema,
  howToSchema,
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
      "@id": `${SITE.url}#website`,
      url: SITE.url,
      name: "TourBandung Corporate",
      description: "Specialist B2B corporate outing, team building, dan executive offsite di Bandung & Jawa Barat. Unit dari 7Summits Travel sejak 2018.",
      inLanguage: "id-ID",
      publisher: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: "7Summits Travel" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/faq?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      hasPart: [
        { "@type": "WebPage", "@id": `${SITE.url}/services`, name: "Services", url: `${SITE.url}/services` },
        { "@type": "WebPage", "@id": `${SITE.url}/packages`, name: "Packages", url: `${SITE.url}/packages` },
        { "@type": "WebPage", "@id": `${SITE.url}/case-studies`, name: "Case Studies", url: `${SITE.url}/case-studies` },
        { "@type": "WebPage", "@id": `${SITE.url}/insights`, name: "Insights", url: `${SITE.url}/insights` },
        { "@type": "WebPage", "@id": `${SITE.url}/faq`, name: "FAQ", url: `${SITE.url}/faq` },
        { "@type": "WebPage", "@id": `${SITE.url}/pricing`, name: "Pricing", url: `${SITE.url}/pricing` },
        { "@type": "WebPage", "@id": `${SITE.url}/methodology`, name: "Methodology", url: `${SITE.url}/methodology` },
        { "@type": "WebPage", "@id": `${SITE.url}/glossary`, name: "Glossary Corporate Event", url: `${SITE.url}/glossary` },
        { "@type": "WebPage", "@id": `${SITE.url}/specialist-vs-generic-eo`, name: "Specialist vs Generic EO", url: `${SITE.url}/specialist-vs-generic-eo` },
        { "@type": "WebPage", "@id": `${SITE.url}/team`, name: "Team", url: `${SITE.url}/team` },
        { "@type": "WebPage", "@id": `${SITE.url}/about`, name: "About", url: `${SITE.url}/about` },
        { "@type": "WebPage", "@id": `${SITE.url}/clients`, name: "Clients", url: `${SITE.url}/clients` },
        { "@type": "WebPage", "@id": `${SITE.url}/panduan-corporate-outing-bandung`, name: "Panduan Corporate Outing Bandung", url: `${SITE.url}/panduan-corporate-outing-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/outing-kantor-bandung`, name: "Outing Kantor Bandung", url: `${SITE.url}/outing-kantor-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/team-building-bandung`, name: "Team Building Bandung", url: `${SITE.url}/team-building-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/corporate-gathering-bandung`, name: "Corporate Gathering Bandung", url: `${SITE.url}/corporate-gathering-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/employee-gathering-bandung`, name: "Employee Gathering Bandung", url: `${SITE.url}/employee-gathering-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/executive-offsite-bandung`, name: "Executive Offsite Bandung", url: `${SITE.url}/executive-offsite-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/company-retreat-bandung`, name: "Company Retreat Bandung", url: `${SITE.url}/company-retreat-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/glamping-corporate-bandung`, name: "Glamping Corporate Bandung", url: `${SITE.url}/glamping-corporate-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/leadership-retreat-jawa-barat`, name: "Leadership Retreat Jawa Barat", url: `${SITE.url}/leadership-retreat-jawa-barat` },
        { "@type": "WebPage", "@id": `${SITE.url}/outbound-perusahaan-bandung`, name: "Outbound Perusahaan Bandung", url: `${SITE.url}/outbound-perusahaan-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/villa-gathering-bandung`, name: "Villa Gathering Bandung", url: `${SITE.url}/villa-gathering-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/incentive-trip-bandung`, name: "Incentive Trip Bandung", url: `${SITE.url}/incentive-trip-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/mice-organizer-bandung`, name: "MICE Organizer Bandung", url: `${SITE.url}/mice-organizer-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/venue-gathering-bandung`, name: "Venue Gathering Bandung", url: `${SITE.url}/venue-gathering-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/event-organizer-corporate-bandung`, name: "Event Organizer Corporate Bandung", url: `${SITE.url}/event-organizer-corporate-bandung` },
        { "@type": "WebPage", "@id": `${SITE.url}/b2b-corporate-event-specialist-bandung`, name: "B2B Corporate Event Specialist Bandung", url: `${SITE.url}/b2b-corporate-event-specialist-bandung` },
      ],
    },
    faqPageSchema(TOP_FAQS, SITE.url),
    howToSchema({
      pageUrl: SITE.url,
      name: "Cara Mulai Merencanakan Corporate Outing di Bandung dengan TourBandung Corporate",
      description: "4 langkah dari kebutuhan awal hingga event terlaksana — proses yang kami pakai untuk 400+ corporate events di Bandung & Jawa Barat.",
      steps: [
        {
          name: "Tentukan Objective dan Kirim Brief Awal",
          text: "Tentukan satu primary objective event (bonding, recognition, alignment, atau refreshing). Kirim brief awal via WhatsApp atau form Request Proposal — cukup 3 informasi: jumlah pax, budget range, dan tanggal target. Kami respond dalam 6 jam working hours.",
        },
        {
          name: "Ikuti Briefing Call 15 Menit dengan Senior Planner",
          text: "Senior planner kami jadwalkan briefing call 15 menit untuk menggali objective lebih dalam, preferensi format, dan constraint khusus (procurement requirement, dietary restriction, dsb). Call ini gratis dan tidak mengikat.",
        },
        {
          name: "Terima Proposal Lengkap dalam 24 Jam",
          text: "Setelah briefing call, proposal lengkap dengan breakdown line-item, 2 alternatif venue, dan timeline eksekusi dikirim dalam 24 jam. Revisi proposal dilakukan dalam 1–2 hari berdasarkan feedback Anda.",
        },
        {
          name: "Konfirmasi dan Serahkan Eksekusi ke Tim Kami",
          text: "Konfirmasi dengan DP 30% untuk lock venue dan vendor. Project manager dedicated kami mulai koordinasi produksi — dari logistics, vendor briefing, hingga rehearsal (untuk event besar). Pada hari H, tim kami hadir penuh dari setup hingga wrap up.",
        },
      ],
    })
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
