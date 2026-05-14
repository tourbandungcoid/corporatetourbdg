"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  upsertYouTubeVideo,
  deleteYouTubeVideo,
} from "@/lib/actions/youtube-video-actions";

export type YouTubeVideoFormInitial = {
  id?: string;
  youtubeUrl: string;
  title: string;
  description: string;
  isActive: boolean;
  displayOrder: number;
};

export function YouTubeVideoForm({
  initial,
}: {
  initial: YouTubeVideoFormInitial;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    kind: "ok" | "error";
    text: string;
  } | null>(null);

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertYouTubeVideo(formData);
      setMessage({
        kind: result.ok ? "ok" : "error",
        text: result.message ?? "",
      });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/videos/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 5000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (!confirm("Hapus video ini? Aksi nggak bisa di-undo.")) return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteYouTubeVideo(fd);
      if (result.ok) router.push("/admin/content/videos");
      else
        setMessage({ kind: "error", text: result.message ?? "Delete failed" });
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

      <Section title="Video link">
        <Field
          label="YouTube URL *"
          hint="Paste URL dari address bar atau Share. Format yang didukung: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/shorts/ID, atau embed/ID."
        >
          <input
            name="youtubeUrl"
            defaultValue={initial.youtubeUrl}
            required
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="input"
            disabled={isPending}
          />
        </Field>
      </Section>

      <Section title="Display">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Active?" hint="Hanya video aktif yang tampil di homepage">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isActive"
                defaultChecked={initial.isActive}
                disabled={isPending}
                className="h-4 w-4 accent-ink"
              />
              <span className="text-sm text-slate">Tampilkan di homepage</span>
            </label>
          </Field>
          <Field label="Display order *" hint="Angka kecil = tampil duluan">
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
      </Section>

      <Section title="Optional metadata">
        <div className="space-y-4">
          <Field
            label="Title"
            hint="Optional. Kalau dikasih, akan tampil di bawah thumbnail. Kosongin biar judul aslinya YouTube yang dipakai."
          >
            <input
              name="title"
              defaultValue={initial.title}
              maxLength={200}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field
            label="Description"
            hint="Optional. Catatan internal — tidak ditampilkan di homepage."
          >
            <textarea
              name="description"
              defaultValue={initial.description}
              rows={3}
              maxLength={1000}
              className="textarea w-full"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <div className="sticky bottom-0 -mx-6 md:-mx-10 px-6 md:px-10 py-4 border-t border-divider bg-paper/95 backdrop-blur flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/content/videos"
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
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Add video"}
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
