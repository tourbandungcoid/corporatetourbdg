"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { upsertInsight, deleteInsight } from "@/lib/actions/content-actions";

export type InsightFormInitial = {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  metaDescription: string;
  heroImageUrl: string;
  heroImageAlt: string;
  publishDate: string;
  readTimeMin: number;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  status: "draft" | "published" | "archived";
  tldr: string[];
  sections: unknown[];
  relatedSlugs: string[];
};

const EMPTY_SECTION = {
  heading: "",
  paragraphs: [""],
};

export function InsightForm({ initial }: { initial: InsightFormInitial }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertInsight(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/insights/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 6000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (!confirm(`Hapus insight "${initial.title}" permanen?`)) return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteInsight(fd);
      if (result.ok) router.push("/admin/content/insights");
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
          <Field label="Slug *" hint="URL path: a-z, 0-9, dashes only. Cannot change after publish.">
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
          <Field label="Publish date *" className="md:col-span-1">
            <input
              type="date"
              name="publishDate"
              defaultValue={initial.publishDate}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Read time (minutes) *" className="md:col-span-1">
            <input
              type="number"
              name="readTimeMin"
              defaultValue={initial.readTimeMin}
              required
              min={1}
              max={120}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Category *" className="md:col-span-2">
            <input
              name="category"
              defaultValue={initial.category}
              required
              placeholder="Framework / HR Tactics / Team Design / Strategic Event / Risk Management / Format Design / Program Design"
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section title="Headline">
        <Field label="Title *">
          <input
            name="title"
            defaultValue={initial.title}
            required
            minLength={3}
            maxLength={200}
            className="input"
            disabled={isPending}
          />
        </Field>
        <Field label="Excerpt *" hint="1–2 sentences shown on the index card.">
          <textarea
            name="excerpt"
            defaultValue={initial.excerpt}
            required
            minLength={10}
            maxLength={500}
            rows={2}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
        <Field label="Meta description *" hint="160–300 chars. Used for SEO.">
          <textarea
            name="metaDescription"
            defaultValue={initial.metaDescription}
            required
            minLength={20}
            maxLength={300}
            rows={2}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
      </Section>

      <Section title="Hero image">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Image URL" hint="Paste link Google Drive biasa atau Supabase Storage URL — otomatis dikonversi">
            <input
              type="url"
              name="heroImageUrl"
              defaultValue={initial.heroImageUrl}
              placeholder="https://…"
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

      <Section title="Author">
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Name *">
            <input
              name="authorName"
              defaultValue={initial.authorName}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Role *">
            <input
              name="authorRole"
              defaultValue={initial.authorRole}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Initials *" hint="2–3 char e.g. TC, SR">
            <input
              name="authorInitials"
              defaultValue={initial.authorInitials}
              required
              minLength={1}
              maxLength={6}
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section
        title="TLDR (JSON array of strings)"
        description='Bullet list shown above the article. Format: ["First takeaway", "Second takeaway"]'
      >
        <textarea
          name="tldr"
          defaultValue={JSON.stringify(initial.tldr, null, 2)}
          rows={6}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section
        title="Sections (JSON array)"
        description={`Each section: { heading?: string, paragraphs: string[], bullets?: string[], numbered?: string[], callout?: { label, text } }. Example template:\n${JSON.stringify([EMPTY_SECTION], null, 2)}`}
      >
        <textarea
          name="sections"
          defaultValue={JSON.stringify(initial.sections, null, 2)}
          rows={20}
          required
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <Section
        title="Related slugs (JSON array of strings)"
        description='Slug list of related articles. Format: ["other-slug-1", "other-slug-2"]'
      >
        <textarea
          name="relatedSlugs"
          defaultValue={JSON.stringify(initial.relatedSlugs, null, 2)}
          rows={3}
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
        />
      </Section>

      <div className="sticky bottom-0 -mx-6 md:-mx-10 px-6 md:px-10 py-4 border-t border-divider bg-paper/95 backdrop-blur flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/content/insights"
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
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Create insight"}
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
