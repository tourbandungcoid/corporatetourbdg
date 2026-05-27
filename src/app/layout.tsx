import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import {
  AnalyticsScripts,
  GTMNoScript,
  LinkedInNoScript,
} from "@/components/AnalyticsScripts";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { getAppSettings } from "@/lib/app-settings";
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
  alternates: {
    canonical: "https://corporate.tourbandung.co.id",
    languages: {
      "id-ID": "https://corporate.tourbandung.co.id",
      "x-default": "https://corporate.tourbandung.co.id",
    },
  },
};

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getAppSettings();
  return (
    <html lang="id" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <AnalyticsScripts
          ga4Id={settings.analytics.ga4_id}
          metaPixelId={settings.analytics.meta_pixel_id}
          gtmId={settings.analytics.gtm_id}
          hotjarId={settings.analytics.hotjar_id}
          clarityId={settings.analytics.clarity_id}
          linkedinPartnerId={settings.analytics.linkedin_partner_id}
        />
      </head>
      <body>
        <GTMNoScript gtmId={settings.analytics.gtm_id} />
        <LinkedInNoScript
          linkedinPartnerId={settings.analytics.linkedin_partner_id}
        />
        {children}
        <ExitIntentModal />
      </body>
    </html>
  );
}
