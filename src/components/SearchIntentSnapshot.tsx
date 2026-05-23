interface Intent {
  percentage: number;
  description: string;
}

interface SearchIntentSnapshotProps {
  pageName: string;
  intents: Intent[];
  cta?: string;
}

export function SearchIntentSnapshot({
  pageName,
  intents,
  cta = "Langsung chat dengan kami →",
}: SearchIntentSnapshotProps) {
  return (
    <aside className="rounded-2xl border border-brand/20 bg-brand-light/10 p-5 md:p-6">
      <h3 className="font-display text-lg text-ink mb-4">
        Orang cari {pageName}
        <br />
        karena...
      </h3>
      <div className="space-y-3">
        {intents.map((intent, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12">
              <div className="h-4 bg-brand/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand rounded-full transition-all"
                  style={{ width: `${intent.percentage}%` }}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-ink">
                <strong>{intent.percentage}%</strong>{" "}
                <span className="text-slate">{intent.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-5 border-t border-brand/20">
        <p className="text-xs text-slate-mute mb-3">
          Masih ada pertanyaan lain?
        </p>
        <a
          href="#proposal-form"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep transition"
        >
          {cta}
        </a>
      </div>
    </aside>
  );
}
