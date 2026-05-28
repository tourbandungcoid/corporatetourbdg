"use client";

import { useState } from "react";
import { useActionState } from "react";
import { submitLeadRequest, type LeadSubmitState } from "@/lib/actions/submit-lead";
import { ArrowRight, Check } from "@/components/icons/Icons";
import { FormTrustSignals, FormConfidenceIndicator, FormSocialProof } from "./FormTrustSignals";

// ---------------------------------------------------------------------
// Static options
// ---------------------------------------------------------------------
const INDUSTRIES = [
  "Technology",
  "Banking & Finance",
  "BUMN",
  "FMCG",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Education",
  "Media",
  "Government",
  "Other",
];

const SIZES = [
  { value: "startup", label: "Startup", note: "<50 karyawan" },
  { value: "sme", label: "SME", note: "50–200" },
  { value: "midsize", label: "Mid-size", note: "200–1000" },
  { value: "enterprise", label: "Enterprise", note: "1000+" },
];

const ROLES = [
  "HR Manager",
  "HR Director",
  "GA Manager",
  "Office Manager",
  "People & Culture",
  "Procurement",
  "Founder",
  "CEO",
  "Director",
  "Other",
];

const EVENT_TYPES = [
  { value: "company_gathering", label: "Company Gathering" },
  { value: "team_building", label: "Team Building" },
  { value: "employee_gathering", label: "Employee Gathering" },
  { value: "corporate_retreat", label: "Corporate Retreat" },
  { value: "leadership_camp", label: "Leadership Camp" },
  { value: "executive_offsite", label: "Executive Offsite" },
  { value: "incentive_trip", label: "Incentive Trip" },
  { value: "annual_company_trip", label: "Annual Company Trip" },
  { value: "mice", label: "MICE Event" },
  { value: "glamping_corporate", label: "Glamping Corporate" },
  { value: "not_sure", label: "Belum decide — butuh konsultasi" },
];

const BUDGET_TIERS = [
  { value: "conservative", label: "Conservative", range: "Rp 1.5–2.5 jt/pax" },
  { value: "standard", label: "Standard", range: "Rp 2.5–4.5 jt/pax" },
  { value: "premium", label: "Premium", range: "Rp 4.5–7 jt/pax" },
  { value: "all_out", label: "All-Out", range: "Rp 7 jt+/pax" },
  { value: "help_me", label: "Help me figure out", range: "Konsultasi dulu" },
];

const DURATIONS = [
  "Half Day",
  "Full Day",
  "2D1N",
  "3D2N",
  "4+ Days",
  "Belum decide",
];

const LOCATIONS = [
  "Lembang",
  "Ciwidey",
  "Bandung City",
  "Pangalengan",
  "Subang / Tangkuban Perahu",
  "Outside Bandung",
  "Flexible — recommend us",
];

const URGENCIES = [
  { value: "urgent", label: "Urgent", note: "Event dalam 2–4 minggu", color: "text-error" },
  { value: "standard", label: "Standard", note: "1–3 bulan", color: "text-warm" },
  { value: "planning_ahead", label: "Planning ahead", note: "3+ bulan", color: "text-brand-deep" },
  { value: "researching", label: "Just researching", note: "Belum target tanggal", color: "text-slate" },
];

const QUARTERS = [
  "Q1 2026",
  "Q2 2026",
  "Q3 2026",
  "Q4 2026",
  "Q1 2027",
  "Q2 2027",
  "Flexible — within 3–6 bulan",
];

// ---------------------------------------------------------------------
// Form component
// ---------------------------------------------------------------------
const initialState: LeadSubmitState = { status: "idle" };

export function RequestProposalForm() {
  const [state, action, isPending] = useActionState(
    submitLeadRequest,
    initialState
  );
  const [step, setStep] = useState(1);

  const goNext = () => setStep((s) => Math.min(3, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const err = (key: string): string | null =>
    state.fieldErrors?.[key]?.[0] ?? null;

  return (
    <form action={action} className="space-y-8">
      {/* Trust signals at top */}
      <FormTrustSignals position="top" />

      {/* Progress indicator */}
      <div>
        <FormConfidenceIndicator step={step} />
      </div>

      <div className="flex items-center gap-3 mb-10">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-3 flex-1">
            <span
              className={[
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors",
                n < step
                  ? "bg-brand text-paper"
                  : n === step
                  ? "bg-ink text-paper"
                  : "bg-divider text-slate",
              ].join(" ")}
            >
              {n < step ? <Check size={14} /> : n}
            </span>
            <div className="flex-1">
              <p className="text-xs text-slate-mute uppercase tracking-wider">
                Step {n}
              </p>
              <p className="text-sm font-medium text-ink">
                {n === 1 ? "Tentang Tim" : n === 2 ? "Event" : "Timeline & Kontak"}
              </p>
            </div>
            {n < 3 && <span className="h-px flex-1 bg-divider hidden sm:block" />}
          </div>
        ))}
      </div>

      {/* Social proof */}
      <FormSocialProof />

      {/* Step 1 */}
      <div className={step === 1 ? "block space-y-5" : "hidden"}>
        <Field
          label="Company name"
          name="company_name"
          required
          placeholder="PT/CV/perusahaan lo"
          error={err("company_name")}
        />

        <SelectField
          label="Industry"
          name="industry"
          required
          options={INDUSTRIES.map((i) => ({ value: i, label: i }))}
          helper="Helps us pick relevant case study"
          error={err("industry")}
        />

        <RadioCards
          label="Company size"
          name="company_size"
          required
          options={SIZES}
          error={err("company_size")}
        />

        <SelectField
          label="Your role"
          name="job_role"
          required
          options={ROLES.map((r) => ({ value: r, label: r }))}
          helper="Tau siapa yg ngomong helps us calibrate"
          error={err("job_role")}
        />
      </div>

      {/* Step 2 */}
      <div className={step === 2 ? "block space-y-6" : "hidden"}>
        <CheckboxGrid
          label="Event type"
          name="event_types"
          required
          options={EVENT_TYPES}
          helper="Pilih satu atau lebih"
          error={err("event_types")}
        />

        <Field
          label="Pax estimation"
          name="pax_estimated"
          type="number"
          required
          placeholder="80"
          helper="Exact atau range OK. Bisa adjust di proposal nanti."
          error={err("pax_estimated")}
        />

        <RadioCards
          label="Budget per pax"
          name="budget_tier"
          required
          options={BUDGET_TIERS.map((b) => ({
            value: b.value,
            label: b.label,
            note: b.range,
          }))}
          error={err("budget_tier")}
        />

        <SelectField
          label="Duration"
          name="duration_preference"
          required
          options={DURATIONS.map((d) => ({ value: d, label: d }))}
          error={err("duration_preference")}
        />

        <CheckboxGrid
          label="Preferred location"
          name="location_preferences"
          required
          options={LOCATIONS.map((l) => ({ value: l, label: l }))}
          helper="Multi-select OK. 'Flexible' = trust our recommendation."
          error={err("location_preferences")}
        />
      </div>

      {/* Step 3 */}
      <div className={step === 3 ? "block space-y-6" : "hidden"}>
        <SelectField
          label="Target event date"
          name="target_date_flexible_quarter"
          options={QUARTERS.map((q) => ({ value: q, label: q }))}
          helper="Belum fix? Pilih quarter approximation"
        />

        <RadioCards
          label="Urgency level"
          name="urgency"
          required
          options={URGENCIES.map((u) => ({
            value: u.value,
            label: u.label,
            note: u.note,
          }))}
          error={err("urgency")}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            label="Full name"
            name="full_name"
            required
            placeholder="Nama lengkap lo"
            error={err("full_name")}
          />
          <Field
            label="Work email"
            name="work_email"
            type="email"
            required
            placeholder="kamu@perusahaan.com"
            helper="Email perusahaan untuk respon lebih cepat & verified."
            error={err("work_email")}
          />
        </div>

        <Field
          label="WhatsApp"
          name="whatsapp"
          placeholder="+62 812 3456 7890"
          helper="Optional, tapi recommended buat respond cepet"
          error={err("whatsapp")}
        />

        <div>
          <label className="label">Additional notes (optional)</label>
          <textarea
            name="additional_notes"
            rows={4}
            placeholder="Anything specific yang mau kami tau? Past vendor experience, brief dari boss, special requests…"
            className="textarea"
          />
          <p className="helper">
            Optional — tapi semakin tau, semakin tepat proposal kami.
          </p>
        </div>

        <div className="rounded-2xl bg-bone p-5 text-xs text-slate flex items-start gap-3">
          <span className="mt-0.5 text-brand">
            <Check size={14} />
          </span>
          <p>
            🔒 Privacy anda terjaga. Kami kirim proposal custom dalam 24 jam + optional 15-min consultation call. No pressure, no hidden fees.
          </p>
        </div>
      </div>

      {/* Trust signals at bottom */}
      <FormTrustSignals position="bottom" />

      {/* Error banner */}
      {state.status === "error" && state.message && (
        <div className="rounded-2xl border border-error/30 bg-error/5 p-4 text-sm text-error">
          {state.message}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-divider">
        {step > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 h-11 text-sm font-medium text-ink hover:bg-cream transition"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-7 h-11 text-sm font-medium hover:bg-brand-deep transition"
          >
            Next: {step === 1 ? "Event Detail" : "Timeline & Kontak"}
            <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-full bg-brand text-paper px-7 h-11 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? "Sending…" : "Kirim & Dapat Proposal"}
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------
type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  helper?: string;
  error?: string | null;
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  helper,
  error,
}: FieldProps) {
  return (
    <div>
      <label className="label">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`input ${error ? "border-error" : ""}`}
      />
      {error ? (
        <p className="helper text-error">{error}</p>
      ) : helper ? (
        <p className="helper">{helper}</p>
      ) : null}
    </div>
  );
}

type Option = { value: string; label: string; note?: string };

function SelectField({
  label,
  name,
  required,
  options,
  helper,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: Option[];
  helper?: string;
  error?: string | null;
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className={`select ${error ? "border-error" : ""}`}
      >
        <option value="" disabled>
          Pilih satu…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
            {o.note ? ` — ${o.note}` : ""}
          </option>
        ))}
      </select>
      {error ? (
        <p className="helper text-error">{error}</p>
      ) : helper ? (
        <p className="helper">{helper}</p>
      ) : null}
    </div>
  );
}

function RadioCards({
  label,
  name,
  required,
  options,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: Option[];
  error?: string | null;
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((o) => (
          <label
            key={o.value}
            className="relative cursor-pointer rounded-xl border border-border bg-paper px-4 py-3 hover:border-ink-soft transition has-[:checked]:border-ink has-[:checked]:bg-brand-light/40"
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              required={required}
              className="sr-only"
            />
            <p className="text-sm font-medium text-ink">{o.label}</p>
            {o.note && (
              <p className="text-xs text-slate mt-0.5">{o.note}</p>
            )}
          </label>
        ))}
      </div>
      {error && <p className="helper text-error">{error}</p>}
    </div>
  );
}

function CheckboxGrid({
  label,
  name,
  required,
  options,
  helper,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: Option[];
  helper?: string;
  error?: string | null;
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((o) => (
          <label
            key={o.value}
            className="relative cursor-pointer rounded-xl border border-border bg-paper px-4 py-3 hover:border-ink-soft transition has-[:checked]:border-ink has-[:checked]:bg-brand-light/40 flex items-center gap-2"
          >
            <input type="checkbox" name={name} value={o.value} className="accent-brand" />
            <span className="text-sm text-ink">{o.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p className="helper text-error">{error}</p>
      ) : helper ? (
        <p className="helper">{helper}</p>
      ) : null}
    </div>
  );
}
