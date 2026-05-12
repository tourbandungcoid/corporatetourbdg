import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Book Consultation",
  description:
    "Book free 15-minute briefing call dengan senior planner. Discuss objective, scope, dan timeline tim lo.",
};

export default function BookConsultationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free briefing call"
        title="15 menit bareng senior planner kami."
        description="Bukan sales pitch — call ini buat align expectation soal scope, budget, dan timeline. Setelah call, kami kirim proposal yang bener-bener fit."
      />
      <ComingSoon
        description="Slot booking calendar sedang dipersiapkan. Sementara, request full proposal — kami inisiasi call setelah brief masuk."
        primaryCtaLabel="Request Proposal"
        primaryCtaHref="/proposal/request"
      />
    </main>
  );
}
