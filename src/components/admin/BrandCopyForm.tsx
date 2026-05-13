"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateBrandCopy } from "@/lib/actions/brand-actions";

export function BrandCopyForm({ initial }: { initial: Record<string, string> }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  function handle(formData: FormData) {
    startTransition(async () => {
      const result = await updateBrandCopy(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok) router.refresh();
      setTimeout(() => setMessage(null), 5000);
    });
  }

  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-4 border-b border-divider">
        <h2 className="font-display text-lg text-ink">
          Editable text snippets
        </h2>
        <p className="mt-1 text-xs text-slate">
          JSON object: keys = dotted path, values = custom text. Empty value =
          fallback to hardcoded.
        </p>
      </header>

      <form action={handle} className="p-5 space-y-4">
        <textarea
          name="copy_overrides"
          defaultValue={JSON.stringify(initial, null, 2)}
          rows={10}
          className="textarea w-full font-mono text-xs"
          placeholder='{\n  "hero.headline": "Custom hero text",\n  "cta.primary": "Get Started"\n}'
          disabled={isPending}
        />

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
          {isPending ? "Saving…" : "Save copy overrides"}
        </button>
      </form>
    </section>
  );
}
