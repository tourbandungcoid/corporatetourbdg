import { INDUSTRY_CERTS } from "@/lib/site";

export function Awards() {
  return (
    <section className="section-sm border-y border-[var(--color-divider)] bg-[var(--color-bone)]">
      <div className="container-1280">
        <p className="eyebrow text-center mb-8">
          Member of · Certified by · Featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {INDUSTRY_CERTS.map((c) => (
            <span
              key={c}
              className="text-[14px] tracking-tight text-[var(--color-slate)] opacity-70 hover:opacity-100 transition-opacity"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
