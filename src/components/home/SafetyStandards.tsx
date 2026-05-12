import Link from "next/link";
import { Shield, Check } from "../Icon";
import { PhotoFrame, PHOTOS } from "../PhotoFrame";

const STANDARDS = [
  "Asuransi peserta minimum IDR 1.000.000.000",
  "Medic on-site untuk grup di atas 100 pax",
  "K3 compliance dan ISO 9001:2015",
  "24/7 emergency hotline & response protocol",
  "Driver vetting & vehicle audit per program",
  "Risk plan & contingency dokumented per event",
];

export function SafetyStandards() {
  return (
    <section className="section">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <PhotoFrame
                driveId={PHOTOS.briefing}
                alt="Fasilitator briefing dan protokol K3"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-6">
              <Shield size={20} className="text-[var(--color-gold)]" />
              <p className="eyebrow-gold mb-0">Safety & Standards</p>
            </div>
            <h2 className="font-display text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Direkayasa untuk{" "}
              <span className="font-display-italic">
                enterprise-grade risk management.
              </span>
            </h2>
            <p className="mt-6 text-[16px] text-[var(--color-slate)] max-w-[480px]">
              Procurement Anda tidak perlu khawatir. Setiap program dijalankan
              dengan SOP yang sama yang digunakan untuk klien enterprise tier-1.
            </p>

            <ul className="mt-10 space-y-4">
              {STANDARDS.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[var(--color-gold)]" />
                  </span>
                  <span className="text-[15px] text-[var(--color-ink)]">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/why-us/safety-standards" className="link-underline">
                Baca protokol safety lengkap →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
