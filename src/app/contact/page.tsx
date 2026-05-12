import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Contact",
  description: "Hubungi tim Tour Bandung Corporate untuk konsultasi corporate event.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Mulai dari briefing call 15 menit."
        description="Tim senior planner kami respond cepat — avg 6 jam dalam working hours. WhatsApp atau email, terserah lo."
      />
      <ComingSoon description="Halaman kontak lengkap dengan map dan team direct lines sedang dipersiapkan." />
    </main>
  );
}
