export default function AdminLoading() {
  return (
    <main className="p-6 md:p-10">
      <div className="max-w-7xl animate-pulse">
        {/* Title skeleton */}
        <div className="mb-10">
          <div className="h-3 w-20 bg-cream/70 rounded mb-3" />
          <div className="h-9 w-48 bg-cream/70 rounded" />
        </div>

        {/* Stat cards skeleton */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-paper p-5">
              <div className="h-3 w-16 bg-cream/70 rounded mb-3" />
              <div className="h-8 w-20 bg-cream/70 rounded mb-3" />
              <div className="h-3 w-24 bg-cream/50 rounded" />
            </div>
          ))}
        </div>

        {/* Table skeleton */}
        <div className="rounded-2xl border border-border bg-paper overflow-hidden">
          <div className="px-6 py-5 border-b border-divider">
            <div className="h-5 w-32 bg-cream/70 rounded" />
          </div>
          <div className="divide-y divide-divider/60">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4">
                <div className="h-4 w-20 bg-cream/70 rounded" />
                <div className="h-4 flex-1 max-w-xs bg-cream/70 rounded" />
                <div className="h-4 w-20 bg-cream/50 rounded" />
                <div className="h-4 w-16 bg-cream/50 rounded" />
                <div className="h-4 w-12 bg-cream/50 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
