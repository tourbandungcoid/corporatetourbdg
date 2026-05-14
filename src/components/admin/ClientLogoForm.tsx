"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  upsertClientLogo,
  deleteClientLogo,
} from "@/lib/actions/client-logo-actions";

export type ClientLogoFormInitial = {
  id?: string;
  name: string;
  websiteUrl: string;
  logoUrl: string;
  isActive: boolean;
  displayOrder: number;
};

const MAX_BYTES = 2 * 1024 * 1024;

export function ClientLogoForm({
  initial,
}: {
  initial: ClientLogoFormInitial;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    kind: "ok" | "error";
    text: string;
  } | null>(null);
  const [preview, setPreview] = useState<string | null>(initial.logoUrl || null);
  const [fileError, setFileError] = useState<string | null>(null);

  function handlePick(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(initial.logoUrl || null);
      return;
    }
    if (file.size > MAX_BYTES) {
      setFileError(`File terlalu besar (${Math.round(file.size / 1024)} KB). Max 2 MB.`);
      setPreview(initial.logoUrl || null);
      e.target.value = "";
      return;
    }
    setPreview(URL.createObjectURL(file));
  }

  function handle(formData: FormData) {
    if (initial.id) formData.set("id", initial.id);
    startTransition(async () => {
      const result = await upsertClientLogo(formData);
      setMessage({
        kind: result.ok ? "ok" : "error",
        text: result.message ?? "",
      });
      if (result.ok && result.id && !initial.id) {
        router.push(`/admin/content/clients/${result.id}`);
      } else if (result.ok) {
        router.refresh();
      }
      setTimeout(() => setMessage(null), 5000);
    });
  }

  function handleDelete() {
    if (!initial.id) return;
    if (!confirm(`Hapus logo "${initial.name}"? Aksi nggak bisa di-undo.`)) return;
    const fd = new FormData();
    fd.set("id", initial.id);
    startTransition(async () => {
      const result = await deleteClientLogo(fd);
      if (result.ok) router.push("/admin/content/clients");
      else
        setMessage({ kind: "error", text: result.message ?? "Delete failed" });
    });
  }

  return (
    <form action={handle} className="space-y-6" encType="multipart/form-data">
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

      <Section title="Logo file">
        <div className="grid gap-4 md:grid-cols-[160px_1fr] items-start">
          <div className="flex h-40 items-center justify-center rounded-xl border border-divider bg-cream overflow-hidden">
            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview}
                alt="Preview"
                className="max-h-full max-w-full object-contain p-3"
              />
            ) : (
              <span className="text-xs text-slate-mute px-3 text-center">
                Preview muncul setelah pilih file
              </span>
            )}
          </div>
          <div>
            <Field
              label={
                initial.id
                  ? "Ganti logo (optional)"
                  : "Logo file *"
              }
              hint="PNG / JPG / WebP / SVG / GIF. Max 2 MB. Idealnya logo transparent (PNG/SVG) supaya nyatu sama background."
            >
              <input
                type="file"
                name="logoFile"
                accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif"
                onChange={handlePick}
                required={!initial.id}
                disabled={isPending}
                className="block w-full text-sm text-slate file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-ink file:text-paper file:text-xs file:font-medium hover:file:bg-brand-deep file:cursor-pointer cursor-pointer"
              />
            </Field>
            {fileError && (
              <p className="mt-2 text-xs text-error">{fileError}</p>
            )}
          </div>
        </div>
      </Section>

      <Section title="Client details">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Client name *" hint="e.g. Tech Unicorn, BUMN Bank">
            <input
              name="name"
              defaultValue={initial.name}
              required
              minLength={1}
              maxLength={200}
              className="input"
              disabled={isPending}
            />
          </Field>
          <Field label="Website URL" hint="Optional. Akan jadi link di marquee.">
            <input
              type="url"
              name="websiteUrl"
              defaultValue={initial.websiteUrl}
              placeholder="https://example.com"
              className="input"
              disabled={isPending}
            />
          </Field>
        </div>
      </Section>

      <Section title="Display">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Active?" hint="Hanya logo aktif yang tampil di homepage">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isActive"
                defaultChecked={initial.isActive}
                disabled={isPending}
                className="h-4 w-4 accent-ink"
              />
              <span className="text-sm text-slate">Tampilkan di TrustBar marquee</span>
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

      <div className="sticky bottom-0 -mx-6 md:-mx-10 px-6 md:px-10 py-4 border-t border-divider bg-paper/95 backdrop-blur flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/content/clients"
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
            {isPending ? "Saving…" : initial.id ? "Save changes" : "Add client logo"}
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
