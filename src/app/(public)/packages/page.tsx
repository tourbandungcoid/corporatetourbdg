import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Packages",
  description:
    "Curated corporate event programs — starting point yang bisa di-customize sesuai tim, budget, dan objective lo.",
};

export default function PackagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Featured Packages"
        title="Sample programs. Tinggal customize."
        description="Bukan paket fixed — sample starting point dengan pricing transparent. Setiap proposal yang kami kirim disesuaikan dengan brief tim lo."
      />
      <ComingSoon description="Daftar lengkap packages dengan detail itinerary & pricing tier sedang dipersiapkan." />
    </main>
  );
}
