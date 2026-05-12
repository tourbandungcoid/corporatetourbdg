import { PageHero } from "@/components/PageHero";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Quick Quote",
  description:
    "Dapat estimate kasar budget corporate event dalam 2 jam — 4 pertanyaan singkat untuk ballpark range.",
};

export default function QuickQuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Quick estimate"
        title="Ballpark estimate dalam 2 jam."
        description="4 pertanyaan singkat. Email kasar estimate sampai dalam 2 jam working hours. Kalau cocok, lo bisa upgrade ke full proposal kapan aja."
      />
      <ComingSoon
        description="Quick quote form sedang dipersiapkan. Sementara, request full proposal — proses sama cepat, hasil lebih detail."
        primaryCtaLabel="Request full proposal"
        primaryCtaHref="/proposal/request"
      />
    </main>
  );
}
