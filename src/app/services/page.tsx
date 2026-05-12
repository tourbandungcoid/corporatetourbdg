import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Services",
  description:
    "10 program corporate event yang siap kami custom — company gathering, team building, executive offsite, dan lainnya di Bandung & Jawa Barat.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="10 program corporate yang siap di-customize."
        description="Dari intimate retreat sampai mass gathering 2.000 pax — semua di-design dari brief tim lo, bukan paket template."
      />
      <ComingSoon description="Detail per service sedang dipersiapkan. Anda bisa langsung request proposal — kami match dengan service yang paling fit untuk tim Anda." />
    </main>
  );
}
