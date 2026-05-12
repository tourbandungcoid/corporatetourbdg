import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppButton";

/**
 * Public-facing layout — adds floating navbar, footer, and sticky
 * WhatsApp CTA. Wraps all marketing pages but NOT the admin dashboard
 * or auth flows (those are outside this route group).
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
