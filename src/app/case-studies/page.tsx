import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Case Studies",
  description:
    "Real events untuk real companies — outcome yang konkret, bukan testimonial template.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real events. Real outcomes."
        description="Cerita lengkap event yang kami handle untuk corporate client — challenge, approach, eksekusi, dan hasil terukur."
      />
      <ComingSoon description="Full case studies sedang ditulis dengan koordinasi tim brand client. Sementara, request proposal untuk dapat case study yang paling relevan dengan industri Anda." />
    </main>
  );
}
