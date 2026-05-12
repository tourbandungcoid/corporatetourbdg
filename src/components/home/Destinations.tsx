import { DESTINATIONS_CURRENT, DESTINATIONS_COMING } from "@/lib/site";
import { MapPin } from "../Icon";

export function Destinations() {
  return (
    <section className="section">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow-gold mb-6">Where we operate</p>
            <h2 className="font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              30+ venue terkurasi di{" "}
              <span className="font-display-italic">Jawa Barat.</span>
            </h2>
            <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[440px]">
              Setiap venue telah kami audit untuk kapasitas, safety,
              aksesibilitas, dan kesesuaian dengan tipe corporate program.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[var(--color-cream)] rounded-sm p-8 lg:p-12">
              <p className="eyebrow mb-8 text-[var(--color-slate)]">
                Available destinations
              </p>
              <div className="space-y-5">
                {DESTINATIONS_CURRENT.map((dest, idx) => (
                  <div
                    key={dest}
                    className="flex items-center justify-between pb-5 border-b border-[var(--color-divider)] last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <MapPin size={20} className="text-[var(--color-gold)]" />
                      <div>
                        <p className="font-display text-[22px] text-[var(--color-ink)]">
                          {dest}
                        </p>
                        <p className="text-[12px] text-[var(--color-slate)]">
                          {DEST_DESCRIPTIONS[idx]}
                        </p>
                      </div>
                    </div>
                    <span className="text-[12px] tabular text-[var(--color-slate-mute)]">
                      {DEST_VENUE_COUNT[idx]} venues
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--color-divider)]">
                <p className="eyebrow mb-3 text-[var(--color-slate-mute)]">
                  Coming soon
                </p>
                <div className="flex flex-wrap gap-2">
                  {DESTINATIONS_COMING.map((d) => (
                    <span
                      key={d}
                      className="text-[13px] px-3 py-1.5 border border-[var(--color-border)] rounded-full text-[var(--color-slate)]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const DEST_DESCRIPTIONS = [
  "Urban venues, MICE-grade hotels",
  "Hutan pinus, villa premium",
  "Kebun teh, glamping resort",
  "High-altitude retreat, kebun stroberi",
  "Heritage destination, exclusive villa",
];

const DEST_VENUE_COUNT = [12, 14, 8, 6, 4];
