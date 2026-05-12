import { ArrowRight, Check } from "@/components/icons/Icons";

const ITEMS = [
  "Real sample proposal (bukan template)",
  "Detailed cost breakdown — line-item",
  "Sample itinerary 2D1N untuk 200 pax",
  "Contract clauses + terms checklist",
];

export function LeadMagnet() {
  return (
    <section className="section bg-bone">
      <div className="container-1280">
        <div className="rounded-3xl overflow-hidden bg-ink relative">
          {/* Background accent */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 0%, rgba(107, 162, 57, 0.25) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(184, 146, 76, 0.15) 0%, transparent 50%)",
            }}
          />

          <div className="relative grid gap-0 lg:grid-cols-12">
            {/* Left: content */}
            <div className="lg:col-span-7 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/15 border border-brand/30 px-3 py-1.5 text-xs font-medium text-brand backdrop-blur">
                Free download
              </span>

              <h2 className="font-display mt-7 text-3xl md:text-4xl lg:text-5xl text-paper leading-[1.04]">
                Sample proposal untuk
                <br />
                <span className="text-brand">outing kantor 200 pax.</span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-paper/70 leading-relaxed max-w-xl">
                Real proposal yang kami kirim ke klien tech unicorn tahun lalu
                (data sensitive sudah di-redact). Pakai buat reference internal.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-paper/85"
                  >
                    <span className="mt-0.5 text-brand">
                      <Check size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <form
                className="mt-10 flex flex-col sm:flex-row gap-3"
                action="/proposal/sample"
                method="get"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email perusahaan lo"
                  className="flex-1 rounded-full bg-paper/10 border border-paper/20 px-5 h-12 text-paper placeholder:text-paper/40 focus:outline-none focus:border-brand focus:bg-paper/15 transition"
                  aria-label="Email"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand text-paper px-7 h-12 text-sm font-medium hover:bg-brand-deep transition-colors"
                >
                  Email me the sample
                  <ArrowRight size={14} />
                </button>
              </form>

              <p className="mt-4 text-xs text-paper/50">
                🔒 800+ HR sudah download. No spam — kami kirim sekali + 1
                follow-up 3 hari kemudian.
              </p>
            </div>

            {/* Right: visual */}
            <div className="lg:col-span-5 relative min-h-[280px] flex items-center justify-center p-10 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/30 via-transparent to-transparent" />
              <div className="relative">
                <div className="rounded-xl bg-paper p-7 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
                  <p className="font-mono text-[10px] tracking-widest text-slate uppercase">
                    Sample Proposal · PDF
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="h-2.5 w-36 rounded-full bg-divider" />
                    <div className="h-2.5 w-44 rounded-full bg-divider" />
                    <div className="h-2.5 w-32 rounded-full bg-divider" />
                  </div>
                  <div className="mt-5 h-20 w-48 rounded-md bg-gradient-to-br from-brand-light to-cream" />
                  <div className="mt-5 space-y-2">
                    <div className="h-2 w-44 rounded-full bg-divider" />
                    <div className="h-2 w-40 rounded-full bg-divider" />
                    <div className="h-2 w-36 rounded-full bg-divider" />
                  </div>
                  <div className="mt-5 pt-3 border-t border-divider flex justify-between">
                    <div className="h-3 w-12 rounded bg-brand-deep" />
                    <div className="h-3 w-8 rounded bg-divider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
