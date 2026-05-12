import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Insights",
  description:
    "Editorial dan thought leadership soal corporate outing, employee engagement, dan event design untuk B2B di Indonesia.",
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Editorial buat HR dan corporate decision makers."
        description="Framework, data, dan insight soal corporate event design — dari Tour Bandung Corporate methodology lab."
      />
      <ComingSoon description="Artikel pertama sedang dipersiapkan. Sementara, lihat halaman FAQ untuk jawaban paling sering ditanyakan." primaryCtaLabel="Lihat FAQ" primaryCtaHref="/faq" />
    </main>
  );
}
