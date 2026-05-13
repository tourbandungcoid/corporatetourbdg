"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

type Action = (formData: FormData) => Promise<{ ok: boolean; message?: string }>;

export type FieldSpec = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "number" | "textarea";
  placeholder?: string;
  hint?: string;
  default: string | number;
};

export function AppSettingsForm({
  title,
  description,
  fields,
  action,
}: {
  title: string;
  description?: string;
  fields: FieldSpec[];
  action: Action;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    startTransition(async () => {
      const result = await action(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok) router.refresh();
      setTimeout(() => setMessage(null), 5000);
    });
  }

  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-4 border-b border-divider">
        <h2 className="font-display text-lg text-ink">{title}</h2>
        {description && <p className="mt-1 text-xs text-slate">{description}</p>}
      </header>

      <form action={handle} className="p-5 space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="text-xs uppercase tracking-wider text-slate-mute font-medium block mb-1.5">
              {f.label}
            </label>
            {f.type === "textarea" ? (
              <textarea
                name={f.name}
                defaultValue={f.default as string}
                placeholder={f.placeholder}
                rows={3}
                className="textarea w-full"
                disabled={isPending}
              />
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                defaultValue={f.default}
                placeholder={f.placeholder}
                className="input"
                disabled={isPending}
              />
            )}
            {f.hint && <p className="mt-1 text-xs text-slate-mute">{f.hint}</p>}
          </div>
        ))}

        {message && (
          <div
            className={`rounded-xl border p-3 text-sm ${
              message.kind === "ok"
                ? "border-success/30 bg-success/5 text-success"
                : "border-error/30 bg-error/5 text-error"
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
        >
          {isPending ? "Saving…" : "Save changes"}
        </button>
      </form>
    </section>
  );
}
