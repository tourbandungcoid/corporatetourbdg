import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "About",
  description:
    "Tour Bandung Corporate — unit specialized dari 7Summits Travel untuk B2B corporate outing, team building, dan executive offsite di Bandung & Jawa Barat sejak 2018.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Specialist corporate event design — sejak 2018."
        description="Unit specialized dari 7Summits Travel yang fokus 100% di market corporate B2B. 400+ events delivered, 60+ venue partnership, tim senior dengan tenure 4+ tahun."
      />
      <ComingSoon description="Halaman About lengkap dengan team profiles, methodology, dan track record sedang dipersiapkan." primaryCtaLabel="Lihat services" primaryCtaHref="/services" />
    </main>
  );
}
