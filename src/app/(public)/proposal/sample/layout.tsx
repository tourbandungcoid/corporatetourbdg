import type { Metadata } from "next";
import { SITE } from "@/lib/site";

const url = `${SITE.url}/proposal/sample`;
const description =
  "Free download — real sample proposal corporate outing 200 pax. 12 halaman PDF: line-item cost breakdown, sample itinerary 2D1N, contract clauses.";

export const metadata: Metadata = {
  title: "Sample Proposal — Free Download",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Sample Proposal — TourBandung Corporate",
    description,
    url,
    type: "website",
  },
};

export default function SampleProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
