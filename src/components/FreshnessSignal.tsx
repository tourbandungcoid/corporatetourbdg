/**
 * FreshnessSignal — Shows "Updated/Verified" date + optional review count
 * Used in money pages for freshness signal (ranking + trust)
 */

interface FreshnessSignalProps {
  dateUpdated: string; // ISO date: "2026-05-22"
  googleReviewCount?: number; // Optional: e.g., 105
  showVerifiedBadge?: boolean; // Default: true
}

export function FreshnessSignal({
  dateUpdated,
  googleReviewCount,
  showVerifiedBadge = true,
}: FreshnessSignalProps) {
  // Format date as "May 2026" format
  const dateObj = new Date(dateUpdated);
  const monthYear = new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
  }).format(dateObj);

  return (
    <p className="text-xs text-slate-mute flex items-center gap-1.5 mt-4">
      {showVerifiedBadge && <span className="text-green-600">✓</span>}
      <span>Verified {monthYear}</span>
      {googleReviewCount && (
        <>
          <span>·</span>
          <span>Based on {googleReviewCount} Google reviews</span>
        </>
      )}
    </p>
  );
}
