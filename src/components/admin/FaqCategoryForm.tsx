"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { upsertFaqCategory, deleteFaqCategory } from "@/lib/actions/faq-actions";

export type FaqCategoryFormInitial = {
  id?: string;
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaDescription: string;
  displayOrder: number;
  status: "draft" | "published" | "archived";
};

export function FaqCategoryForm({ initial }: { initial: FaqCategoryFormInitial }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertFaqCategory(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/faq/category/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 5000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (
      !confirm(
        `Hapus kategori "${initial.title}" permanen? Semua pertanyaan di dalamnya juga akan terhapus.`
      )
    )
      return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteFaqCategory(fd);
      if (result.ok) router.push("/admin/content/faq");
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
          <Field label="Slug *" hint="URL path: /faq/[slug] — lowercase + dashes only">
            <input
              name="slug"
              defaultValue={initial.slug}
              required
              pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Display order *" hint="Lower = ditampilkan dulu (0, 10, 20…)">
            <input
              type="number"
              name="displayOrder"
              defaultValue={initial.displayOrder}
              required
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
          <Field label="Eyebrow *" hint='Short label e.g. "Budget & Investment"'>
            <input
              name="eyebrow"
              defaultValue={initial.eyebrow}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section title="Content">
        <Field label="Title *" hint="Used as <h1> on /faq/[slug] page">
          <input
            name="title"
            defaultValue={initial.title}
            required
            minLength={5}
            maxLength={200}
            className="input"
            disabled={isPending}
          />
        </Field>
        <Field label="Intro *" hint="Paragraph shown below the title">
          <textarea
            name="intro"
            defaultValue={initial.intro}
            required
            minLength={20}
            maxLength={1000}
            rows={3}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
        <Field label="Meta description *" hint="160–300 chars · used for SEO">
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

      <div className="sticky bottom-0 -mx-6 md:-mx-10 px-6 md:px-10 py-4 border-t border-divider bg-paper/95 backdrop-blur flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/content/faq"
          className="inline-flex items-center justify-center rounded-full border border-border bg-paper px-5 h-10 text-sm text-slate hover:bg-cream transition"
        >
          ← Back to FAQ
        </Link>
        <div className="flex gap-2">
          {initial.id && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isPending}
              className="inline-flex items-center justify-center rounded-full border border-error/40 bg-error/5 px-5 h-10 text-sm font-medium text-error hover:bg-error/10 transition disabled:opacity-60"
            >
              Delete category
            </button>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Create category"}
          </button>
        </div>
      </div>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-slate-mute font-medium block mb-1.5">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-mute">{hint}</p>}
    </div>
  );
}
