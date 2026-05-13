"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { upsertFaqQuestion, deleteFaqQuestion } from "@/lib/actions/faq-actions";

export type FaqQuestionFormInitial = {
  id?: string;
  categoryId: string;
  slug: string;
  question: string;
  answer: string;
  detail: string;
  tags: string[];
  isFeatured: boolean;
  displayOrder: number;
  status: "draft" | "published" | "archived";
};

export type CategoryOption = { id: string; slug: string; title: string };

export function FaqQuestionForm({
  initial,
  categories,
}: {
  initial: FaqQuestionFormInitial;
  categories: CategoryOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertFaqQuestion(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/faq/question/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 5000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (!confirm(`Hapus pertanyaan "${initial.question}" permanen?`)) return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteFaqQuestion(fd);
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
          <Field label="Category *">
            <select
              name="categoryId"
              defaultValue={initial.categoryId}
              required
              className="select"
              disabled={isPending}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Status *">
            <select name="status" defaultValue={initial.status} className="select" disabled={isPending}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </Field>
          <Field label="Slug *" hint="For #anchor URL — auto-generate from question kalau kosong">
            <input
              name="slug"
              defaultValue={initial.slug}
              required
              pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Display order *" hint="Lower = ditampilkan dulu di kategorinya">
            <input
              type="number"
              name="displayOrder"
              defaultValue={initial.displayOrder}
              required
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
        <Field label="Featured?" hint="Featured questions muncul di /faq index">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="isFeatured"
              defaultChecked={initial.isFeatured}
              disabled={isPending}
              className="h-4 w-4 accent-ink"
            />
            <span className="text-sm text-slate">Show on /faq landing page</span>
          </label>
        </Field>
      </Section>

      <Section title="Q & A">
        <Field label="Question *" hint="Natural question — sesuai pertanyaan HR di lapangan">
          <textarea
            name="question"
            defaultValue={initial.question}
            required
            rows={2}
            minLength={5}
            maxLength={500}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
        <Field
          label="Answer (snippet) *"
          hint="50–80 kata, langsung kasih jawaban di kalimat pertama. Untuk AEO/Google Featured Snippet."
        >
          <textarea
            name="answer"
            defaultValue={initial.answer}
            required
            rows={4}
            minLength={10}
            maxLength={2000}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
        <Field label="Detail (optional)" hint="Penjelasan lebih panjang yang muncul di bawah answer">
          <textarea
            name="detail"
            defaultValue={initial.detail}
            rows={5}
            maxLength={5000}
            className="textarea w-full"
            disabled={isPending}
          />
        </Field>
      </Section>

      <Section title="Tags (JSON array of strings)">
        <textarea
          name="tags"
          defaultValue={JSON.stringify(initial.tags, null, 2)}
          rows={3}
          className="textarea w-full font-mono text-xs"
          disabled={isPending}
          placeholder='["budget", "pricing", "tier"]'
        />
        <p className="text-xs text-slate-mute mt-1">
          Tag dipakai untuk grouping di money pages (FAQ block bisa filter by tag).
        </p>
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
              Delete
            </button>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Create question"}
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
