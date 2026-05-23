"use client";

import { useState, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";
import { updateLogoCarousel } from "@/lib/actions/brand-actions";

export function LogoCarouselSettingsForm({
  speed,
  swipe,
}: {
  speed: number;
  swipe: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const formRef = useRef<HTMLFormElement>(null);

  function handle(formData: FormData) {
    startTransition(async () => {
      const result = await updateLogoCarousel(formData);
      setMessage({ kind: result.ok ? "ok" : "error", text: result.message ?? "" });
      if (result.ok) router.refresh();
      setTimeout(() => setMessage(null), 4000);
    });
  }

  return (
    <section className="rounded-2xl border border-border bg-paper overflow-hidden">
      <header className="px-5 py-4 border-b border-divider">
        <h2 className="font-display text-lg text-ink">Pengaturan carousel</h2>
        <p className="mt-1 text-xs text-slate">
          Kontrol kecepatan scroll dan apakah visitor bisa swipe manual.
        </p>
      </header>

      <form ref={formRef} action={handle} className="p-5 space-y-5">
        {/* Speed slider */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Kecepatan scroll
            <span className="ml-2 tabular text-brand font-mono">{currentSpeed}s per siklus</span>
          </label>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate shrink-0">Cepat</span>
            <input
              type="range"
              name="logo_carousel_speed"
              min="10"
              max="120"
              step="5"
              value={currentSpeed}
              onChange={(e) => setCurrentSpeed(Number(e.target.value))}
              disabled={isPending}
              className="flex-1 accent-brand"
            />
            <span className="text-xs text-slate shrink-0">Lambat</span>
          </div>
          <p className="mt-1.5 text-xs text-slate-mute">
            Nilai kecil = scroll lebih cepat. Default: 35s.
          </p>
        </div>

        {/* Swipe toggle */}
        <div className="flex items-start gap-3 pt-2 border-t border-divider">
          <input
            type="checkbox"
            id="logo_carousel_swipe"
            name="logo_carousel_swipe"
            defaultChecked={swipe}
            disabled={isPending}
            className="mt-0.5 accent-brand w-4 h-4"
          />
          <div>
            <label htmlFor="logo_carousel_swipe" className="text-sm font-medium text-ink cursor-pointer">
              Aktifkan swipe manual oleh visitor
            </label>
            <p className="text-xs text-slate-mute mt-0.5">
              Visitor bisa drag/swipe carousel secara manual. Auto-scroll tetap berjalan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full bg-brand text-paper px-5 h-9 text-sm font-medium hover:bg-brand-deep transition disabled:opacity-60"
          >
            {isPending ? "Menyimpan…" : "Simpan"}
          </button>
          {message && (
            <p className={`text-sm ${message.kind === "ok" ? "text-success" : "text-error"}`}>
              {message.text}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
