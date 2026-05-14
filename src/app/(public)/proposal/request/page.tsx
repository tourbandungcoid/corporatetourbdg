import { PageHero } from "@/components/PageHero";
import { RequestProposalForm } from "@/components/proposal/RequestProposalForm";

export const metadata = {
  title: "Request Proposal Gratis — Corporate Outing & Gathering Bandung | TourBandung Corporate",
  description:
    "Request proposal gratis dalam 24 jam. 3 step, 5 menit — senior planner kami kirim custom proposal lengkap dengan breakdown line-item, venue rekomendasi, dan sample itinerary. No commitment.",
};

export default function RequestProposalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Request proposal"
        title="Free proposal dalam 24 jam."
        description="3 step, 5 menit. Senior planner kami review brief lo dan kirim custom proposal dengan breakdown lengkap. No commitment."
      />

      <section className="pb-24 -mt-8">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-paper p-6 md:p-10 lg:p-12 shadow-[0_24px_56px_rgba(15,31,26,0.06)]">
            <RequestProposalForm />
          </div>
        </div>
      </section>
    </main>
  );
}
