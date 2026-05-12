import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Sample Proposal",
  description:
    "Download real sample proposal untuk corporate outing kantor 200 pax — line-item breakdown, sample itinerary, contract clauses.",
};

export default function SampleProposalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free download"
        title="Sample proposal untuk outing kantor 200 pax."
        description="Real proposal yang kami kirim ke klien tech unicorn tahun lalu (data sensitive sudah di-redact). 12 halaman PDF — detailed cost breakdown, sample itinerary 2D1N, contract clauses."
      />
      <ComingSoon
        description="Form download & email delivery sedang dipersiapkan. Sementara, langsung request proposal sesuai tim Anda — kami kirim custom proposal dalam 24 jam."
        primaryCtaLabel="Request Proposal"
        primaryCtaHref="/proposal/request"
      />
    </main>
  );
}
