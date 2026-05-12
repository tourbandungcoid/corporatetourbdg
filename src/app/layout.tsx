import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://corporate.tourbandung.co.id"
  ),
  title: {
    default:
      "Tour Bandung Corporate — Premium Corporate Outing & Team Building Bandung",
    template: "%s · Tour Bandung Corporate",
  },
  description:
    "Vendor specialist corporate outing, team building, dan executive offsite di Bandung & Jawa Barat. 400+ events delivered sejak 2018. Free proposal dalam 24 jam.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Tour Bandung Corporate",
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
      <body>{children}</body>
    </html>
  );
}
