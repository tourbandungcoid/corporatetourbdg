import Link from "next/link";
import { ArrowRight, WhatsApp } from "../Icon";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-48">
      <div className="container-1280 text-center">
        <p className="eyebrow-gold mb-8">Ready to start?</p>
        <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[80px] xl:text-[96px] leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)] max-w-[1000px] mx-auto">
          Mari desain{" "}
          <span className="font-display-italic text-[var(--color-gold)]">
            momen besar
          </span>{" "}
          berikutnya untuk tim Anda.
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link href="/proposal/request" className="btn btn-primary btn-lg">
            Request Proposal
            <ArrowRight size={16} className="arrow" />
          </Link>
          <Link
            href="/proposal/book-consultation"
            className="btn btn-secondary btn-lg"
          >
            Schedule 15-min Call
          </Link>
        </div>
        <p className="mt-8 text-[14px] text-[var(--color-slate)]">
          Atau chat dengan kami di{" "}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-ink)] hover:text-[var(--color-gold)]"
          >
            <WhatsApp size={14} /> WhatsApp
          </a>
          {" · "}
          rata-rata respon 47 menit
        </p>
      </div>
    </section>
  );
}
