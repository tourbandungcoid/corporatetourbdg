import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";

const url = `${SITE.url}/proposal/book-consultation`;
const description =
  "15 menit briefing call gratis bareng senior planner — align scope, budget, timeline sebelum proposal. Bukan sales pitch.";

export const metadata: Metadata = {
  title: "Book Free Consultation — TourBandung Corporate",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Free Consultation — TourBandung Corporate",
    description,
    url,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Consultation — TourBandung Corporate",
    description: "15 menit briefing call gratis. Align scope & budget sebelum proposal. Bukan sales pitch.",
    images: [IMAGES.heroMain.src],
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
