import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

function normalizeSiteUrl(input: string | undefined): URL {
  const fallback = "https://corporate.tourbandung.co.id";
  if (!input) return new URL(fallback);
  const withProtocol = /^https?:\/\//i.test(input) ? input : `https://${input}`;
  try {
    return new URL(withProtocol);
  } catch {
    return new URL(fallback);
  }
}

export const metadata: Metadata = {
  metadataBase: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default:
      "TourBandung Corporate — Premium Corporate Outing & Team Building Bandung",
    template: "%s · TourBandung Corporate",
  },
  description:
    "Vendor specialist corporate outing, team building, dan executive offsite di Bandung & Jawa Barat. 400+ events delivered sejak 2018. Free proposal dalam 24 jam.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "TourBandung Corporate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
