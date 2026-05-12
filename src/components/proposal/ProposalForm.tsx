"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "../Icon";
import { SITE } from "@/lib/site";
import { submitLead } from "@/lib/actions/leads";
import { parseBudgetRange } from "@/lib/utils/budget";

const STEPS = [
  { id: 1, label: "Perusahaan" },
  { id: 2, label: "Event" },
  { id: 3, label: "Kebutuhan" },
  { id: 4, label: "Budget" },
  { id: 5, label: "Kontak" },
];

type FormState = {
  companyName: string;
  industry: string;
  companySize: string;
  eventType: string;
  objective: string;
  paxCount: string;
  duration: string;
  preferredDates: string;
  destination: string;
  customNeeds: string;
  budgetRange: string;
  decisionTimeline: string;
  fullName: string;
  position: string;
  email: string;
  phone: string;
  notes: string;
};

const INITIAL: FormState = {
  companyName: "",
  industry: "",
  companySize: "",
  eventType: "",
  objective: "",
  paxCount: "",
  duration: "",
  preferredDates: "",
  destination: "",
  customNeeds: "",
  budgetRange: "",
  decisionTimeline: "",
  fullName: "",
  position: "",
  email: "",
  phone: "",
  notes: "",
};

export function ProposalForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async () => {
    setSubmitting(true);
    setError(null);

    const budget = parseBudgetRange(data.budgetRange);

    const result = await submitLead({
      source: "rfp_form",
      contact_name: data.fullName,
      contact_position: data.position,
      email: data.email,
      phone: data.phone,
      company_name: data.companyName,
      industry: data.industry,
      company_size: data.companySize,
      event_type: data.eventType,
      objective: data.objective,
      pax_count: data.paxCount ? parseInt(data.paxCount, 10) : undefined,
      duration: data.duration,
      preferred_dates: data.preferredDates,
      destination: data.destination,
      custom_needs: data.customNeeds || data.notes,
      budget_range: data.budgetRange,
      budget_min_idr: budget.min,
      budget_max_idr: budget.max,
      decision_timeline: data.decisionTimeline,
      raw_payload: data as unknown as Record<string, unknown>,
    });

    if (!result.ok) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    router.push(`/proposal/thank-you?lead=${result.leadNumber}`);
  };

  const progress = (step / STEPS.length) * 100;

  return (
    <section className="pt-[120px] lg:pt-[140px] pb-24">
      <div className="container-1280">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: progress + context */}
          <aside className="lg:col-span-4">
            <p className="eyebrow-gold mb-5">Request a Proposal</p>
            <h1 className="font-display text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              Brief kami,{" "}
              <span className="font-display-italic">
                proposal di tangan Anda dalam 24 jam.
              </span>
            </h1>
            <p className="mt-5 text-[15px] text-[var(--color-slate)] max-w-[360px]">
              Senior account director akan personally review brief Anda dan
              respon dengan proposal yang detail — bukan template generik.
            </p>

            <div className="mt-10 hidden lg:block">
              <ol className="space-y-4">
                {STEPS.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center gap-3 text-[14px]"
                  >
                    <span
                      className={`flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-medium transition-all ${
                        step > s.id
                          ? "bg-[var(--color-gold)] text-white"
                          : step === s.id
                          ? "bg-[var(--color-ink)] text-white"
                          : "bg-[var(--color-border)] text-[var(--color-slate)]"
                      }`}
                    >
                      {step > s.id ? <Check size={14} /> : s.id}
                    </span>
                    <span
                      className={`${
                        step >= s.id
                          ? "text-[var(--color-ink)] font-medium"
                          : "text-[var(--color-slate-mute)]"
                      }`}
                    >
                      {s.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-divider)]">
              <p className="eyebrow mb-3">Lebih cepat?</p>
              <Link
                href="/proposal/quick-quote"
                className="link-underline text-[14px]"
              >
                Quick quote 4 fields →
              </Link>
              <br />
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[14px] mt-2 inline-block"
              >
                Chat WhatsApp langsung →
              </a>
            </div>
          </aside>

          {/* Right: form */}
          <div className="lg:col-span-8">
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-sm overflow-hidden">
              {/* Progress bar */}
              <div className="px-7 lg:px-10 pt-7 lg:pt-9">
                <div className="flex items-center justify-between text-[12px] mb-3">
                  <span className="text-[var(--color-slate)]">
                    Step {step} dari {STEPS.length}
                  </span>
                  <span className="text-[var(--color-slate-mute)] tabular">
                    {Math.round(progress)}% selesai
                  </span>
                </div>
                <div className="h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-gold)] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="p-7 lg:p-10">
                {step === 1 && (
                  <FormStep title="Tentang perusahaan Anda">
                    <Field
                      label="Nama perusahaan"
                      required
                      type="text"
                      placeholder="PT Contoh Indonesia"
                      value={data.companyName}
                      onChange={(v) => update("companyName", v)}
                    />
                    <SelectField
                      label="Industri"
                      required
                      value={data.industry}
                      onChange={(v) => update("industry", v)}
                      options={[
                        "Banking & Finance",
                        "Tech & Startup",
                        "Manufacturing",
                        "FMCG & Retail",
                        "Oil & Gas",
                        "Pharmaceutical",
                        "BUMN & Government",
                        "Multinational",
                        "Other",
                      ]}
                    />
                    <RadioField
                      label="Ukuran perusahaan"
                      required
                      value={data.companySize}
                      onChange={(v) => update("companySize", v)}
                      options={[
                        "Kurang dari 100",
                        "100–500",
                        "500–2.000",
                        "Lebih dari 2.000",
                      ]}
                    />
                  </FormStep>
                )}

                {step === 2 && (
                  <FormStep title="Tipe event yang Anda rencanakan">
                    <SelectField
                      label="Format event"
                      required
                      value={data.eventType}
                      onChange={(v) => update("eventType", v)}
                      options={[
                        "Company Outing",
                        "Team Building",
                        "Company Gathering",
                        "MICE / Conference",
                        "Corporate Retreat",
                        "Leadership Camp",
                        "Executive Offsite",
                        "Incentive Trip",
                        "Belum yakin / butuh konsultasi",
                      ]}
                    />
                    <TextareaField
                      label="Objective utama event (1–2 kalimat)"
                      placeholder="Contoh: kick-off regional sales team, alignment strategy 2026, recognition top performer."
                      value={data.objective}
                      onChange={(v) => update("objective", v)}
                    />
                  </FormStep>
                )}

                {step === 3 && (
                  <FormStep title="Skala & timing">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Estimasi jumlah peserta"
                        required
                        type="number"
                        placeholder="150"
                        value={data.paxCount}
                        onChange={(v) => update("paxCount", v)}
                      />
                      <SelectField
                        label="Durasi"
                        required
                        value={data.duration}
                        onChange={(v) => update("duration", v)}
                        options={[
                          "Half-day (3–4 jam)",
                          "1 hari",
                          "2D1N",
                          "3D2N",
                          "4D3N",
                          "5D atau lebih",
                          "Fleksibel",
                        ]}
                      />
                    </div>
                    <Field
                      label="Tanggal yang dipertimbangkan (jika sudah ada)"
                      type="text"
                      placeholder="Contoh: minggu ke-2 Maret 2026, atau fleksibel"
                      value={data.preferredDates}
                      onChange={(v) => update("preferredDates", v)}
                    />
                    <SelectField
                      label="Destinasi preferensi"
                      value={data.destination}
                      onChange={(v) => update("destination", v)}
                      options={[
                        "Bandung kota",
                        "Lembang",
                        "Ciwidey",
                        "Pangalengan",
                        "Sumedang",
                        "Belum yakin",
                      ]}
                    />
                    <TextareaField
                      label="Kebutuhan khusus / special requirement (opsional)"
                      placeholder="Contoh: family-friendly, halal-certified catering, accessibility requirement, dll."
                      value={data.customNeeds}
                      onChange={(v) => update("customNeeds", v)}
                    />
                  </FormStep>
                )}

                {step === 4 && (
                  <FormStep title="Budget & timeline keputusan">
                    <RadioField
                      label="Range budget per pax"
                      required
                      value={data.budgetRange}
                      onChange={(v) => update("budgetRange", v)}
                      options={[
                        "< IDR 1.000.000",
                        "IDR 1.000.000 – 2.500.000",
                        "IDR 2.500.000 – 5.000.000",
                        "IDR 5.000.000 +",
                        "Belum yakin",
                      ]}
                    />
                    <RadioField
                      label="Kapan event akan berlangsung"
                      required
                      value={data.decisionTimeline}
                      onChange={(v) => update("decisionTimeline", v)}
                      options={[
                        "< 1 bulan (urgent)",
                        "1–3 bulan",
                        "3–6 bulan",
                        "6–12 bulan",
                        "Lebih dari 1 tahun (planning)",
                      ]}
                    />
                  </FormStep>
                )}

                {step === 5 && (
                  <FormStep title="Kontak Anda">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Nama lengkap"
                        required
                        type="text"
                        placeholder="Andini Pratama"
                        value={data.fullName}
                        onChange={(v) => update("fullName", v)}
                      />
                      <Field
                        label="Jabatan"
                        required
                        type="text"
                        placeholder="HR Manager"
                        value={data.position}
                        onChange={(v) => update("position", v)}
                      />
                    </div>
                    <Field
                      label="Email kantor"
                      required
                      type="email"
                      placeholder="andini@perusahaan.com"
                      value={data.email}
                      onChange={(v) => update("email", v)}
                    />
                    <Field
                      label="Nomor WhatsApp"
                      required
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      value={data.phone}
                      onChange={(v) => update("phone", v)}
                    />
                    <TextareaField
                      label="Catatan tambahan (opsional)"
                      placeholder="Apa pun yang perlu kami tahu sebelum prepare proposal."
                      value={data.notes}
                      onChange={(v) => update("notes", v)}
                    />
                    <p className="text-[12px] text-[var(--color-slate)] mt-3 leading-relaxed">
                      🔒 Data ini hanya digunakan untuk mempersiapkan proposal
                      Anda. Tanpa spam, tanpa sales call yang tidak relevan.
                    </p>
                  </FormStep>
                )}

                {/* Footer actions */}
                <div className="mt-10 pt-7 border-t border-[var(--color-divider)] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="text-[14px] text-[var(--color-slate)] hover:text-[var(--color-ink)] transition-colors"
                    >
                      ← Kembali
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < STEPS.length ? (
                    <button
                      type="button"
                      onClick={next}
                      className="btn btn-primary"
                    >
                      Lanjut
                      <ArrowRight size={14} className="arrow" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submit}
                      disabled={submitting}
                      className="btn btn-primary"
                    >
                      {submitting ? "Mengirim..." : "Kirim Brief"}
                      {!submitting && (
                        <ArrowRight size={14} className="arrow" />
                      )}
                    </button>
                  )}
                </div>

                {error && (
                  <div className="mt-5 rounded-md bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 px-4 py-3 text-[13px] text-[var(--color-error)]">
                    ⚠ {error}
                  </div>
                )}
              </div>
            </div>

            <p className="mt-6 text-[13px] text-[var(--color-slate)] flex items-start gap-2">
              <span className="text-[var(--color-gold)]">→</span>
              Senior account director akan personally respon dalam 24 jam dengan
              proposal detail. Untuk inquiry urgent, gunakan{" "}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-ink)] underline"
              >
                WhatsApp
              </a>
              .
            </p>

            <div className="mt-8 p-6 border border-[var(--color-border)] rounded-sm bg-[var(--color-cream)]">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
                  <p className="text-[13px] text-[var(--color-slate)]">
                    Average response time: <strong>47 menit</strong> · Mon–Sat
                    08:00–20:00 WIB
                  </p>
                </div>
                <Link
                  href="/proposal/sample"
                  className="text-[13px] inline-flex items-center gap-1.5 text-[var(--color-ink)] hover:text-[var(--color-gold)]"
                >
                  Lihat sample proposal
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormStep({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fade-up">
      <h2 className="font-display text-[24px] lg:text-[28px] leading-tight text-[var(--color-ink)] mb-7">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && (
          <span className="text-[var(--color-gold)] ml-0.5">*</span>
        )}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      />
    </div>
  );
}

function TextareaField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea
        rows={3}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="textarea"
      />
    </div>
  );
}

function SelectField({
  label,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && (
          <span className="text-[var(--color-gold)] ml-0.5">*</span>
        )}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select"
      >
        <option value="" disabled>
          Pilih opsi...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioField({
  label,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && (
          <span className="text-[var(--color-gold)] ml-0.5">*</span>
        )}
      </label>
      <div className="grid sm:grid-cols-2 gap-2.5">
        {options.map((o) => (
          <label
            key={o}
            className={`flex items-center gap-3 px-4 py-3 border rounded-md cursor-pointer transition-all ${
              value === o
                ? "border-[var(--color-gold)] bg-[var(--color-gold)]/5"
                : "border-[var(--color-border)] hover:border-[var(--color-slate)]"
            }`}
          >
            <input
              type="radio"
              name={label}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                value === o
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              {value === o && (
                <span className="block w-1.5 h-1.5 rounded-full bg-white m-auto mt-[3px]" />
              )}
            </span>
            <span className="text-[14px] text-[var(--color-ink)]">{o}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
