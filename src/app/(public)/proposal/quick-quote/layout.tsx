import type { Metadata } from "next";
import { SITE } from "@/lib/site";

const url = `${SITE.url}/proposal/quick-quote`;
const description =
  "Estimasi cepat dalam 6 jam. Kasih scope dasar (pax, lokasi, tanggal), tim kami balas dengan range budget realistis sebelum proposal lengkap.";

export const metadata: Metadata = {
  title: "Quick Quote",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Quick Quote — TourBandung Corporate",
    description,
    url,
    type: "website",
  },
};

export default function QuickQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
