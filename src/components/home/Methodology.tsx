import Link from "next/link";
import { PROCESS_STEPS } from "@/lib/site";
import { ArrowRight } from "../Icon";

export function Methodology() {
  return (
    <section className="section bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="container-1280">
        <div className="max-w-[820px] mb-16 lg:mb-24">
          <p className="eyebrow-gold mb-6">Metodologi</p>
          <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
            The 7Summits Corporate{" "}
            <span className="font-display-italic text-[var(--color-gold)]">
              Experience Framework
            </span>
            <sup className="text-[20px] lg:text-[28px]">™</sup>
          </h2>
          <p className="mt-6 text-[17px] text-white/70 max-w-[560px]">
            Lima tahap yang membedakan kami dari travel agency biasa. Dari
            objective bisnis hingga measurement post-event.
          </p>
        </div>

        <ol className="relative">
          <div className="absolute left-[14px] top-3 bottom-3 w-px bg-white/15 hidden md:block" />
          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step) => (
              <li key={step.number} className="relative md:pl-16">
                <div className="md:absolute md:left-0 md:top-1 flex items-center gap-4 mb-3 md:mb-0">
                  <span className="hidden md:flex w-[29px] h-[29px] rounded-full bg-[var(--color-gold)] items-center justify-center text-[11px] font-medium text-[var(--color-ink)] tabular">
                    {step.number}
                  </span>
                  <span className="md:hidden font-display-italic text-[var(--color-gold)] text-[24px]">
                    {step.number}
                  </span>
                </div>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                  <h3 className="md:col-span-3 font-display text-[28px] lg:text-[32px] leading-tight">
                    {step.title}
                  </h3>
                  <p className="md:col-span-9 text-[16px] leading-relaxed text-white/80 max-w-[640px]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-6">
          <Link href="/why-us/our-process" className="btn btn-on-dark">
            Pelajari metodologi lengkap
            <ArrowRight size={16} className="arrow" />
          </Link>
          <a
            href="/proposal/sample"
            className="btn btn-ghost text-[var(--color-bone)] hover:text-[var(--color-gold)]"
          >
            Lihat sample proposal →
          </a>
        </div>
      </div>
    </section>
  );
}
