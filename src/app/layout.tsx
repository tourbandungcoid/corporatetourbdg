import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { OrganizationSchema } from "@/components/Schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.shortTagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "corporate outing bandung",
    "outing kantor bandung",
    "team building bandung",
    "MICE bandung",
    "corporate retreat indonesia",
    "executive offsite",
    "leadership camp",
    "incentive trip",
    "company gathering",
    "annual company trip",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.shortTagline}`,
    description: SITE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "id-ID": SITE.url,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <OrganizationSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-ink)] focus:text-[var(--color-bone)] focus:px-4 focus:py-2 focus:rounded"
        >
          Lewati ke konten utama
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
