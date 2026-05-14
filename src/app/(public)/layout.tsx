import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
import { getBrandSettings } from "@/lib/brand-settings";

/**
 * Public-facing layout — adds floating navbar, footer, and sticky
 * WhatsApp CTA. Wraps all marketing pages but NOT the admin dashboard
 * or auth flows (those are outside this route group).
 */
export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brand = await getBrandSettings();
  return (
    <>
      <Navigation logoHeight={brand.logo_height_nav} />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
