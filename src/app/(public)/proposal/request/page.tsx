import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RequestProposalForm } from "@/components/proposal/RequestProposalForm";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";
import { JsonLd, combineSchemas, breadcrumbSchema, organizationSchema, localBusinessSchema } from "@/lib/schema";

const title = "Request Proposal Gratis — Corporate Outing & Gathering Bandung | TourBandung Corporate";
const description =
  "Request proposal gratis dalam 24 jam. 3 step, 5 menit — senior planner kami kirim custom proposal lengkap dengan breakdown line-item, venue rekomendasi, dan sample itinerary. No commitment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/proposal/request` },
  openGraph: {
    title: "Request Proposal Gratis — TourBandung Corporate",
    description,
    url: `${SITE.url}/proposal/request`,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Proposal Gratis — TourBandung Corporate",
    description: "3 step, 5 menit. Custom proposal lengkap dalam 24 jam. No commitment.",
    images: [IMAGES.heroMain.src],
  },
};

export default function RequestProposalPage() {
  const schema = combineSchemas(
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Proposal", url: `${SITE.url}/proposal` },
      { name: "Request Proposal", url: `${SITE.url}/proposal/request` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Request Proposal Corporate Event Bandung",
      description,
      url: `${SITE.url}/proposal/request`,
      inLanguage: "id-ID",
      mainEntity: {
        "@type": "Organization",
        name: SITE.legalName,
        url: SITE.url,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales",
          availableLanguage: ["Indonesian", "English"],
          hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "18:00" },
        },
      },
    }
  );

  return (
    <>
      <JsonLd data={schema} />
      <main>
      <PageHero
        eyebrow="Request proposal"
        title="Free proposal dalam 24 jam."
        description="3 step, 5 menit. Senior planner kami review brief lo dan kirim custom proposal dengan breakdown lengkap. No commitment."
      />

      <section className="pb-24 -mt-8">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-paper p-6 md:p-10 lg:p-12 shadow-[0_24px_56px_rgba(15,31,26,0.06)]">
            <RequestProposalForm />
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
