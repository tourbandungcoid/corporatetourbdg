import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Check, Whatsapp } from "@/components/icons/Icons";
import { buildWaLink, SITE } from "@/lib/site";
import {
  JsonLd,
  combineSchemas,
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/schema";

export const metadata = {
  title: "Thanks — Proposal Request Submitted",
  description: "Senior planner kami sudah notified. Proposal lengkap di-email dalam ≤24 jam.",
  alternates: { canonical: `${SITE.url}/proposal/thank-you` },
};

type Props = {
  params: Promise<{ ref: string }>;
};

export default async function ThankYouPage({ params }: Props) {
  const { ref } = await params;
  const refCode = ref.toUpperCase();

  const schema = combineSchemas(
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Proposal", url: `${SITE.url}/proposal` },
      { name: "Thank You", url: `${SITE.url}/proposal/thank-you` },
    ])
  );

  const steps = [
    { state: "done" as const, label: "Submitted", time: "Sekarang" },
    {
      state: "active" as const,
      label: "Senior planner review",
      time: "Dalam 2 jam",
    },
    {
      state: "pending" as const,
      label: "Custom proposal drafted",
      time: "Dalam 18 jam",
    },
    {
      state: "pending" as const,
      label: "Proposal di email lo",
      time: "Dalam 24 jam",
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <PageHero
          eyebrow="Thanks 🎉"
          title="Got it. Senior planner sudah notified."
          description="Proposal lengkap sampai email lo dalam ≤24 jam (avg 6 jam saat working hours). Kami design proposal menggunakan 5-Pillar framework untuk outcome-driven event."
        />

        <section className="pb-24">
          <div className="container-1280">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Ref code */}
              <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-mute">
                  Your reference
                </p>
                <p className="font-display text-3xl text-ink tabular mt-2">
                  {refCode}
                </p>
                <p className="text-sm text-slate mt-2">
                  Simpan kode ini — pakai untuk track status proposal lo nanti.
                </p>
                <Link
                  href={`/proposal/track/${refCode}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition"
                >
                  Track live status
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-mute mb-5">
                  What happens next
                </p>
                <ol className="space-y-4">
                  {steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className={[
                          "flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full",
                          s.state === "done"
                            ? "bg-brand text-paper"
                            : s.state === "active"
                            ? "bg-ink text-paper animate-pulse"
                            : "bg-divider text-slate",
                        ].join(" ")}
                      >
                        {s.state === "done" ? (
                          <Check size={14} />
                        ) : (
                          <span className="text-xs font-medium">{i + 1}</span>
                        )}
                      </span>
                      <div className="flex-1">
                        <p
                          className={[
                            "font-medium",
                            s.state === "pending"
                              ? "text-slate"
                              : "text-ink",
                          ].join(" ")}
                        >
                          {s.label}
                        </p>
                        <p className="text-xs text-slate-mute mt-0.5">
                          {s.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Why our approach works */}
              <div className="rounded-2xl border border-border bg-bone p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-mute mb-4">
                  Your proposal will include
                </p>
                <ul className="space-y-3 text-sm text-slate">
                  <li className="flex gap-3">
                    <span className="text-brand-deep flex-shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-ink">Strategic Alignment</strong> — Event designed untuk business goal lo, bukan generic rundown</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-deep flex-shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-ink">Outcome Metrics</strong> — Pre/post measurement framework untuk track bonding, collaboration, retention impact</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-deep flex-shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-ink">Venue Options</strong> — 2-3 recommendations yang match budget, timeline, dan event goal lo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-deep flex-shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-ink">Detailed Breakdown</strong> — Line-item pricing, no hidden fees, transparent margins</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-deep flex-shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-ink">Risk & Contingency</strong> — Force majeure plan, medical readiness, escalation protocol</span>
                  </li>
                </ul>

                <p className="text-xs text-slate mt-6 pt-6 border-t border-divider">
                  Proposal lo di-design dengan 5-Pillar Corporate Outing Design™ framework kami.{" "}
                  <Link href="/methodology" className="text-brand hover:text-brand-deep font-medium">
                    Learn about our 6 frameworks →
                  </Link>
                </p>
              </div>

              {/* Exploration cards */}
              <div className="rounded-2xl border border-border bg-paper p-6 md:p-8">
                <p className="text-sm font-medium text-ink mb-4">
                  Sambil nunggu, eksplorasi:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link
                    href="/methodology"
                    className="rounded-xl border border-border bg-bone px-5 py-4 hover:border-brand-deep transition flex items-center justify-between gap-3 group"
                  >
                    <span className="text-sm font-medium text-ink">
                      Our 6 frameworks →
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-slate group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="rounded-xl border border-border bg-bone px-5 py-4 hover:border-brand-deep transition flex items-center justify-between gap-3 group"
                  >
                    <span className="text-sm font-medium text-ink">
                      Case studies →
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-slate group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/faq"
                    className="rounded-xl border border-border bg-bone px-5 py-4 hover:border-brand-deep transition flex items-center justify-between gap-3 group"
                  >
                    <span className="text-sm font-medium text-ink">
                      FAQ →
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-slate group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/insights"
                    className="rounded-xl border border-border bg-bone px-5 py-4 hover:border-brand-deep transition flex items-center justify-between gap-3 group"
                  >
                    <span className="text-sm font-medium text-ink">
                      Insights & articles →
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-slate group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* WA escape */}
              <div className="text-center pt-2">
                <p className="text-sm text-slate mb-3">
                  Pertanyaan urgent? Bisa chat langsung — sebut ref{" "}
                  <span className="font-mono">{refCode}</span>
                </p>
                <a
                  href={buildWaLink(`proposal request`, refCode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-11 text-sm font-medium hover:opacity-90 transition"
                >
                  <Whatsapp size={16} />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
