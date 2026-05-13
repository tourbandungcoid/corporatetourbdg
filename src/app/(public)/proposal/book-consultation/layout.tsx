import type { Metadata } from "next";
import { SITE } from "@/lib/site";

const url = `${SITE.url}/proposal/book-consultation`;
const description =
  "15 menit briefing call gratis bareng senior planner — align scope, budget, timeline sebelum proposal. Bukan sales pitch.";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Free Consultation — TourBandung Corporate",
    description,
    url,
    type: "website",
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
