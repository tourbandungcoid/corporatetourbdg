import { PageHero } from "@/components/PageHero";
import { RequestProposalForm } from "@/components/proposal/RequestProposalForm";

export const metadata = {
  title: "Request Proposal",
  description:
    "Free custom corporate event proposal. 10 fields, 3 step — proposal lengkap di-email dalam 24 jam.",
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
