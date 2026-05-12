import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions tentang corporate outing, budget, logistics, vendor selection, dan ROI measurement.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Jawaban detail untuk pertanyaan paling sering ditanyakan HR."
        description="114 pertanyaan dalam 7 kategori — budget, logistik, comparison, format, lokasi, vendor selection, ROI."
      />
      <ComingSoon description="Halaman FAQ lengkap sedang dipersiapkan. Untuk sekarang, top 7 FAQ tersedia di homepage. Atau langsung chat — kami jawab cepet." />
    </main>
  );
}
