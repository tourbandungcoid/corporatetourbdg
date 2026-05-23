"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { upsertPackage } from "@/lib/actions/packages-actions";

export type PackageFormInitial = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  paxRange: string;
  duration: string;
  vibeTags: string[];
  startingPrice: string;
  priceNumeric: number;
  inclusions: string[];
  featured: boolean;
  serviceSlug: string;
  heroImageUrl: string;
  heroImageAlt: string;
};

export function PackageForm({ initial }: { initial: PackageFormInitial }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(fd: FormData) {
    startTransition(async () => {
      const result = await upsertPackage(fd);
      setMsg({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok) router.refresh();
      setTimeout(() => setMsg(null), 5000);
    });
  }

  return (
    <form action={handle} className="space-y-6">
      <input type="hidden" name="slug" value={initial.slug} />

      {/* Hero image */}
      <Section title="Foto hero">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Image URL" hint="Paste link Google Drive atau Supabase Storage — otomatis dikonversi">
            <input type="url" name="heroImageUrl" defaultValue={initial.heroImageUrl}
              placeholder="https://drive.google.com/file/d/…" className="input" disabled={isPending} />
          </Field>
          <Field label="Alt text">
            <input name="heroImageAlt" defaultValue={initial.heroImageAlt}
              placeholder="Deskripsi singkat foto" className="input" disabled={isPending} />
          </Field>
        </div>
        {initial.heroImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={initial.heroImageUrl} alt={initial.heroImageAlt}
            className="mt-3 h-32 w-auto rounded-xl object-cover border border-divider" />
        )}
      </Section>

      {/* Core copy */}
      <Section title="Copywriting utama">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Title">
            <input name="title" defaultValue={initial.title} className="input" disabled={isPending} />
          </Field>
          <Field label="Subtitle">
            <input name="subtitle" defaultValue={initial.subtitle} className="input" disabled={isPending} />
          </Field>
        </div>
        <Field label="Description">
          <textarea name="description" defaultValue={initial.description} rows={4}
            className="input resize-y" disabled={isPending} />
        </Field>
      </Section>

      {/* Specs */}
      <Section title="Spesifikasi">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Field label="Pax range">
            <input name="paxRange" defaultValue={initial.paxRange} className="input" disabled={isPending} />
          </Field>
          <Field label="Duration">
            <input name="duration" defaultValue={initial.duration} className="input" disabled={isPending} />
          </Field>
          <Field label="Starting price (text)" hint="e.g. Rp 1.8 jt/pax">
            <input name="startingPrice" defaultValue={initial.startingPrice} className="input" disabled={isPending} />
          </Field>
          <Field label="Price numeric" hint="Angka saja, untuk sorting">
            <input type="number" step="0.1" name="priceNumeric" defaultValue={initial.priceNumeric}
              className="input" disabled={isPending} />
          </Field>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Vibe tags" hint="Satu per baris">
            <textarea name="vibeTags" defaultValue={initial.vibeTags.join("\n")} rows={3}
              className="input resize-y font-mono text-sm" disabled={isPending} />
          </Field>
          <Field label="Service slug" hint="Slug dari services-data (jangan diubah kecuali diperlukan)">
            <input name="serviceSlug" defaultValue={initial.serviceSlug} className="input font-mono text-sm" disabled={isPending} />
          </Field>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input type="checkbox" id="featured" name="featured" defaultChecked={initial.featured}
            className="accent-brand w-4 h-4" disabled={isPending} />
          <label htmlFor="featured" className="text-sm text-ink">Tampilkan di Featured packages</label>
        </div>
      </Section>

      {/* Inclusions */}
      <Section title="Apa yang termasuk (inclusions)">
        <Field label="Inclusions" hint="Satu item per baris">
          <textarea name="inclusions" defaultValue={initial.inclusions.join("\n")} rows={8}
            className="input resize-y font-mono text-sm" disabled={isPending} />
        </Field>
      </Section>

      {/* Submit */}
      <div className="flex items-center gap-3">
        <button type="submit" disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-6 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60">
          {isPending ? "Menyimpan…" : "Simpan perubahan"}
        </button>
        {msg && (
          <p className={`text-sm ${msg.kind === "ok" ? "text-success" : "text-error"}`}>
            {msg.text}
          </p>
        )}
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-4 border-b border-divider">
        <h2 className="font-display text-base text-ink">{title}</h2>
      </header>
      <div className="p-5 space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1.5">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-mute">{hint}</p>}
    </div>
  );
}
