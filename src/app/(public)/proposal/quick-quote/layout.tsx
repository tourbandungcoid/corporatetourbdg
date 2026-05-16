import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/drive-images";

const url = `${SITE.url}/proposal/quick-quote`;
const description =
  "Estimasi cepat dalam 6 jam. Kasih scope dasar (pax, lokasi, tanggal), tim kami balas dengan range budget realistis sebelum proposal lengkap.";

export const metadata: Metadata = {
  title: "Quick Quote Corporate Event Bandung — TourBandung Corporate",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Quick Quote Corporate Event — TourBandung Corporate",
    description,
    url,
    type: "website",
    images: [{ url: IMAGES.heroMain.src, width: 1200, height: 630, alt: IMAGES.heroMain.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Quote Corporate Event — TourBandung Corporate",
    description: "Estimasi budget corporate event dalam 6 jam. Gratis, tanpa commitment.",
    images: [IMAGES.heroMain.src],
  },
};

export default function QuickQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
