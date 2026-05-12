import { REVIEWS } from "@/lib/site";

type Props = {
  variant?: "compact" | "expanded";
  className?: string;
};

/**
 * Google Reviews trust badge — displays rating + review count from REVIEWS constants.
 * "Compact" = small inline pill, "expanded" = section-style with G logo.
 */
export function GoogleReviewsBadge({ variant = "compact", className }: Props) {
  const rating = REVIEWS.googleRating;
  const count = REVIEWS.googleReviewCount;
  const stars = Math.round(rating);

  if (variant === "compact") {
    return (
      <a
        href={REVIEWS.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "inline-flex items-center gap-3 rounded-full bg-paper border border-border px-4 py-2 hover:border-ink-soft transition",
          className ?? "",
        ].join(" ")}
        aria-label={`Google review: ${rating} stars from ${count} reviews`}
      >
        <GoogleLogo size={18} />
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-medium text-ink tabular">{rating}</span>
          <span className="flex text-warm" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < stars ? "★" : "☆"}</span>
            ))}
          </span>
          <span className="text-slate text-xs">({count} review)</span>
        </div>
      </a>
    );
  }

  // expanded variant
  return (
    <a
      href={REVIEWS.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group rounded-2xl border border-border bg-paper p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-ink-soft hover:shadow-[0_16px_40px_rgba(15,31,26,0.06)] transition-all",
        className ?? "",
      ].join(" ")}
    >
      <GoogleLogo size={48} />

      <div className="flex-1 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <span className="font-display text-4xl text-ink tabular leading-none">
            {rating}
          </span>
          <span className="text-warm text-2xl leading-none" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < stars ? "★" : "☆"}</span>
            ))}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate">
          Based on <strong className="text-ink">{count} Google reviews</strong>{" "}
          dari klien corporate Indonesia
        </p>
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-brand-deep transition-colors">
        Lihat di Google Maps →
      </span>
    </a>
  );
}

function GoogleLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}
