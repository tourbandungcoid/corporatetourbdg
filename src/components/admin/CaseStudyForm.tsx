"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { upsertCaseStudy, deleteCaseStudy } from "@/lib/actions/content-actions";

export type CaseStudyFormInitial = {
  id?: string;
  slug: string;
  industry: string;
  industryLabel: string;
  outcomeHeadline: string;
  shortDescription: string;
  metaDescription: string;
  heroImageUrl: string;
  heroImageAlt: string;
  pax: string;
  duration: string;
  location: string;
  budgetTier: string;
  serviceSlug: string;
  status: "draft" | "published" | "archived";
  challenge: string[];
  approach: string[];
  execution: string[];
  outcome: string[];
  metrics: unknown[];
  testimonial: unknown;
  relatedServiceSlugs: string[];
  gallery: unknown[];
};

export function CaseStudyForm({ initial }: { initial: CaseStudyFormInitial }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertCaseStudy(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/case-studies/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 6000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (!confirm(`Hapus case study "${initial.outcomeHeadline}" permanen?`)) return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteCaseStudy(fd);
      if (result.ok) router.push("/admin/content/case-studies");
      else setMessage({ kind: "error", text: result.message ?? "Delete failed" });
    });
  }

  return (
    <form action={handle} className="space-y-6">
      {message && (
        <div
          className={`sticky top-0 z-10 rounded-2xl border p-3 text-sm ${
            message.kind === "ok"
              ? "border-success/30 bg-success/5 text-success"
              : "border-error/30 bg-error/5 text-error"
          }`}
        >
          {message.text}
        </div>
      )}

      <Section title="Meta">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Slug *">
            <input
              name="slug"
              defaultValue={initial.slug}
              required
              pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Status *">
            <select name="status" defaultValue={initial.status} className="select" disabled={isPending}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </Field>
          <Field label="Industry key *" hint="lowercase, e.g. tech, banking, fmcg">
            <input
              name="industry"
              defaultValue={initial.industry}
              required
              pattern="^[a-z0-9_-]+$"
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Industry label *" hint='e.g. "Tech Unicorn", "Banking · BUMN"'>
            <input
              name="industryLabel"
              defaultValue={initial.industryLabel}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Service slug *" hint="Links back to /services/[slug]" className="md:col-span-2">
            <input
              name="serviceSlug"
              defaultValue={initial.serviceSlug}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section title="Headline">
        <Field label="Outcome headline *">
          <input
            name="outcomeHeadline"
            defaultValue={initial.outcomeHeadline}
            required
            className="input"
            disabled={isPending}
          />
        </Field>
        <Field label="Short description *">
          <textarea
            name="shortDescription"
            defaultValue={initial.shortDescription}
            required
            rows={2}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
        <Field label="Meta description *" hint="160–300 chars">
          <textarea
            name="metaDescription"
            defaultValue={initial.metaDescription}
            required
            rows={2}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
      </Section>

      <Section title="Snapshot">
        <div className="grid gap-4 md:grid-cols-4">
          <Field label="Pax *" hint='e.g. "800 pax"'>
            <input name="pax" defaultValue={initial.pax} required className="input" disabled={isPending} />
          </Field>
          <Field label="Duration *" hint='e.g. "3D2N"'>
            <input name="duration" defaultValue={initial.duration} required className="input" disabled={isPending} />
          </Field>
          <Field label="Location *" hint='e.g. "Lembang"'>
            <input name="location" defaultValue={initial.location} required className="input" disabled={isPending} />
          </Field>
          <Field label="Budget tier *" hint='Foundation / Elevated / Signature / Bespoke'>
            <input name="budgetTier" defaultValue={initial.budgetTier} required className="input" disabled={isPending} />
          </Field>
        </div>
      </Section>

      <Section title="Hero image">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Image URL" hint="Paste link Google Drive biasa atau Supabase Storage URL — otomatis dikonversi">
            <input
              type="url"
              name="heroImageUrl"
              defaultValue={initial.heroImageUrl}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Image alt text">
            <input
              name="heroImageAlt"
              defaultValue={initial.heroImageAlt}
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section
        title="Narrative — Challenge (JSON array of strings)"
        description="Each entry = one paragraph."
      >
        <textarea
          name="challenge"
          defaultValue={JSON.stringify(initial.challenge, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section title="Narrative — Approach (JSON array of strings)">
        <textarea
          name="approach"
          defaultValue={JSON.stringify(initial.approach, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section title="Narrative — Execution (JSON array of strings)">
        <textarea
          name="execution"
          defaultValue={JSON.stringify(initial.execution, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section title="Narrative — Outcome (JSON array of strings)">
        <textarea
          name="outcome"
          defaultValue={JSON.stringify(initial.outcome, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section
        title="Metrics (JSON array)"
        description='Format: [{"label": "Engagement boost", "value": "+34%"}, ...]'
      >
        <textarea
          name="metrics"
          defaultValue={JSON.stringify(initial.metrics, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section
        title="Testimonial (JSON object)"
        description='Format: {"quote": "...", "name": "Andini", "role": "HR Manager", "company": "Tech Unicorn"}'
      >
        <textarea
          name="testimonial"
          defaultValue={JSON.stringify(initial.testimonial, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section
        title="Related service slugs (JSON array)"
        description='Format: ["team-building", "company-gathering"]'
      >
        <textarea
          name="relatedServiceSlugs"
          defaultValue={JSON.stringify(initial.relatedServiceSlugs, null, 2)}
          rows={3}
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section
        title="Gallery (JSON array)"
        description='Format: [{"src": "https://...", "alt": "Image description"}, ...]'
      >
        <textarea
          name="gallery"
          defaultValue={JSON.stringify(initial.gallery, null, 2)}
          rows={6}
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <div className="sticky bottom-0 -mx-6 md:-mx-10 px-6 md:px-10 py-4 border-t border-divider bg-paper/95 backdrop-blur flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/content/case-studies"
          className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm text-slate hover:bg-cream transition"
        >
          ← Back to list
        </Link>
        <div className="flex gap-2">
          {initial.id && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isPending}
              className="inline-flex items-center justify-center rounded-full border border-error/40 bg-error/5 px-5 h-10 text-sm font-medium text-error hover:bg-error/10 transition disabled:opacity-60"
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Create case study"}
          </button>
        </div>
      </div>
    </form>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-3 border-b border-divider">
        <h2 className="font-display text-sm uppercase tracking-wider text-slate-mute">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-xs text-slate whitespace-pre-wrap">{description}</p>
        )}
      </header>
      <div className="p-5 space-y-4">{children}</div>
    </section>
  );
}

function Field({
  label,
  hint,
  className,
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-wider text-slate-mute font-medium block mb-1.5">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-mute">{hint}</p>}
    </div>
  );
}
