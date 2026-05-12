import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ArrowUpRight } from "@/components/Icon";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terima kasih — Brief Anda telah diterima",
  description:
    "Senior account director kami akan mereview brief Anda dan respon dengan proposal dalam 24 jam.",
  robots: { index: false, follow: true },
};

const NEXT_STEPS = [
  {
    n: "01",
    title: "Review brief Anda",
    body: "Senior account director kami akan mempelajari brief secara detail dalam beberapa jam ke depan.",
  },
  {
    n: "02",
    title: "Diskusi internal (jika perlu)",
    body: "Untuk brief kompleks, AD kami konsultasi dengan strategist dan operations team.",
  },
  {
    n: "03",
    title: "Proposal dikirim",
    body: "Anda akan menerima proposal lengkap dalam 24 jam — by email, dengan opsi follow-up call.",
  },
];

export default function ThankYouPage() {
  return (
    <section className="pt-[120px] lg:pt-[160px] pb-32">
      <div className="container-1280">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/15 flex items-center justify-center mx-auto mb-8">
            <Check size={28} className="text-[var(--color-success)]" />
          </div>

          <p className="eyebrow-gold mb-6">Brief diterima</p>
          <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]">
            Terima kasih.{" "}
            <span className="font-display-italic">
              Proposal Anda akan tiba dalam 24 jam.
            </span>
          </h1>
          <p className="mt-7 text-[17px] text-[var(--color-slate)] max-w-[560px] mx-auto">
            Konfirmasi penerimaan brief telah dikirim ke email Anda. Sambil
            menunggu, ini yang akan terjadi:
          </p>
        </div>

        <ol className="mt-16 grid md:grid-cols-3 gap-8 max-w-[1080px] mx-auto">
          {NEXT_STEPS.map((s) => (
            <li
              key={s.n}
              className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-sm p-7"
            >
              <span className="font-display-italic text-[36px] text-[var(--color-gold)] block leading-none mb-4">
                {s.n}
              </span>
              <h3 className="font-display text-[20px] text-[var(--color-ink)] mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-slate)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 max-w-[820px] mx-auto bg-[var(--color-ink)] text-[var(--color-bone)] rounded-sm p-10 lg:p-14">
          <p className="eyebrow-gold mb-5">Sambil menunggu</p>
          <h2 className="font-display text-[28px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] mb-6">
            Mungkin akan berguna untuk{" "}
            <span className="font-display-italic">internal stakeholder Anda.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            <Link
              href="/proposal/sample"
              className="block p-5 bg-white/[0.04] border border-white/15 rounded-md hover:border-[var(--color-gold)] transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow text-[var(--color-gold)]">PDF</span>
                <ArrowUpRight
                  size={16}
                  className="text-white/50 group-hover:text-[var(--color-gold)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <p className="font-display text-[17px] text-white">
                Sample Proposal Preview
              </p>
              <p className="text-[13px] text-white/60 mt-1">
                Anonymized PDF untuk procurement
              </p>
            </Link>
            <Link
              href="/case-studies"
              className="block p-5 bg-white/[0.04] border border-white/15 rounded-md hover:border-[var(--color-gold)] transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow text-[var(--color-gold)]">Library</span>
                <ArrowUpRight
                  size={16}
                  className="text-white/50 group-hover:text-[var(--color-gold)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <p className="font-display text-[17px] text-white">
                Case Studies (12+)
              </p>
              <p className="text-[13px] text-white/60 mt-1">
                Dari berbagai industri enterprise
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[14px] text-[var(--color-slate)] mb-3">
            Ada pertanyaan urgent?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Chat WhatsApp langsung
            </a>
            <Link href="/" className="btn btn-ghost">
              Kembali ke beranda
              <ArrowRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
