"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { upsertTestimonial, deleteTestimonial } from "@/lib/actions/testimonial-actions";

export type TestimonialFormInitial = {
  id?: string;
  slug: string;
  clientName: string;
  company: string;
  role: string;
  quote: string;
  eventType: string;
  industry: string;
  rating: number | null;
  photoUrl: string;
  isFeatured: boolean;
  displayOrder: number;
  caseStudySlug: string;
  status: "draft" | "published" | "archived";
};

export function TestimonialForm({ initial }: { initial: TestimonialFormInitial }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertTestimonial(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/testimonials/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 5000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (!confirm(`Hapus testimonial dari "${initial.clientName}"?`)) return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteTestimonial(fd);
      if (result.ok) router.push("/admin/content/testimonials");
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
          <Field label="Status *">
            <select name="status" defaultValue={initial.status} className="select" disabled={isPending}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </Field>
          <Field label="Display order *" hint="Lower = first">
            <input
              type="number"
              name="displayOrder"
              defaultValue={initial.displayOrder}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Featured?" hint="Show in homepage marquee" className="md:col-span-2">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isFeatured"
                defaultChecked={initial.isFeatured}
                disabled={isPending}
                className="h-4 w-4 accent-ink"
              />
              <span className="text-sm text-slate">Display di homepage testimonials section</span>
            </label>
          </Field>
        </div>
      </Section>

      <Section title="Client">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Client name *">
            <input
              name="clientName"
              defaultValue={initial.clientName}
              required
              minLength={2}
              maxLength={120}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Company *" hint="Bisa anonymize per NDA — e.g. 'Tech Unicorn'">
            <input
              name="company"
              defaultValue={initial.company}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Role" hint="e.g. HR Manager, GA Lead">
            <input
              name="role"
              defaultValue={initial.role}
              maxLength={120}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Industry" hint="lowercase key — tech, banking, fmcg, etc.">
            <input
              name="industry"
              defaultValue={initial.industry}
              maxLength={80}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Event type" hint="annual_gathering, team_building, executive_offsite, etc.">
            <input
              name="eventType"
              defaultValue={initial.eventType}
              maxLength={80}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Rating (1-5)">
            <input
              type="number"
              name="rating"
              defaultValue={initial.rating ?? ""}
              min={1}
              max={5}
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section title="Quote">
        <Field label="Quote *" hint="40-100 kata. Hindari corporate-speak — natural client language.">
          <textarea
            name="quote"
            defaultValue={initial.quote}
            required
            rows={5}
            minLength={10}
            maxLength={2000}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
      </Section>

      <Section title="Optional links">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Photo URL" hint="Avatar / portrait. Direct image URL.">
            <input
              type="url"
              name="photoUrl"
              defaultValue={initial.photoUrl}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Case study slug" hint="If linked to a case study (will display on detail page)">
            <input
              name="caseStudySlug"
              defaultValue={initial.caseStudySlug}
              maxLength={160}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Slug" hint="Optional — for anchor URL. Auto-generated if blank.">
            <input
              name="slug"
              defaultValue={initial.slug}
              maxLength={160}
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <div className="sticky bottom-0 -mx-6 md:-mx-10 px-6 md:px-10 py-4 border-t border-divider bg-paper/95 backdrop-blur flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/content/testimonials"
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
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Create testimonial"}
          </button>
        </div>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-3 border-b border-divider">
        <h2 className="font-display text-sm uppercase tracking-wider text-slate-mute">
          {title}
        </h2>
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
