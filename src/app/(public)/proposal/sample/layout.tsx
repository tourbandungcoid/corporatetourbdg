import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";

const url = `${SITE.url}/proposal/sample`;
const description =
  "Free download — real sample proposal corporate outing 200 pax. 12 halaman PDF: line-item cost breakdown, sample itinerary 2D1N, contract clauses.";

export const metadata: Metadata = {
  title: "Sample Proposal Corporate Outing — Free Download | TourBandung Corporate",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Sample Proposal Corporate Outing — Free Download",
    description,
    url,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sample Proposal Corporate Outing — Free Download",
    description: "12 halaman PDF: cost breakdown, itinerary 2D1N, contract clauses. Gratis.",
    images: [IMAGES.heroMain.src],
  },
};

export default function SampleProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
