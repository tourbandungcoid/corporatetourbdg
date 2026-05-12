import { ArrowRight, Check } from "@/components/icons/Icons";

const ITEMS = [
  "Real sample proposal (bukan template)",
  "Detailed cost breakdown — line-item",
  "Sample itinerary 2D1N untuk 200 pax",
  "Contract clauses + terms checklist",
];

export function LeadMagnet() {
  return (
    <section className="section bg-cream/40">
      <div className="container-1280">
        <div className="card overflow-hidden bg-paper">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* Left: content */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-deep">
                FREE DOWNLOAD
              </span>

              <h2 className="font-display mt-6 text-3xl text-ink md:text-4xl lg:text-5xl">
                Download: Sample Proposal untuk Outing Kantor 200 pax
              </h2>

              <p className="mt-5 text-base text-slate md:text-lg leading-relaxed">
                Real proposal yang kami kirim ke klien tech unicorn tahun lalu
                (data sensitive sudah di-redact). Pakai buat reference internal.
              </p>

              <ul className="mt-7 space-y-2.5">
                {ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 text-brand">
                      <Check size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Form (mock — Phase 5 wires to real submit) */}
              <form
                className="mt-8 flex flex-col sm:flex-row gap-3"
                action="/proposal/sample"
                method="get"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email perusahaan lo"
                  className="input flex-1"
                  aria-label="Email"
                />
                <button type="submit" className="btn btn-primary">
                  Email Sample ke Saya
                  <ArrowRight size={14} className="arrow" />
                </button>
              </form>

              <p className="mt-4 text-xs text-slate">
                🔒 800+ HR sudah download. No spam — kami kirim sekali + 1
                follow-up 3 hari kemudian kalau lo tertarik.
              </p>
            </div>

            {/* Right: visual */}
            <div className="lg:col-span-5 relative bg-gradient-to-br from-brand-deep via-forest to-ink min-h-[320px] flex items-center justify-center p-8">
              <div className="text-center">
                <div className="inline-block rounded-lg bg-paper p-8 shadow-2xl rotate-3">
                  <p className="font-mono text-xs text-slate">PDF Preview</p>
                  <div className="mt-4 space-y-1.5">
                    <div className="h-2 w-32 rounded bg-divider" />
                    <div className="h-2 w-40 rounded bg-divider" />
                    <div className="h-2 w-28 rounded bg-divider" />
                    <div className="mt-3 h-12 w-40 rounded bg-cream" />
                    <div className="mt-3 space-y-1">
                      <div className="h-2 w-40 rounded bg-divider" />
                      <div className="h-2 w-36 rounded bg-divider" />
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-paper/40 text-xs font-mono">
                  [Replace with real PDF cover mockup]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
