import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & {
  size?: number;
  variant?: "default" | "white" | "mono";
};

/**
 * 7Summits Travel mark — abstract triangular play-button.
 * Two-tone green facets evoke a mountain peak refracted through motion.
 */
export function LogoMark({
  size = 32,
  variant = "default",
  ...props
}: LogoProps) {
  const top =
    variant === "white" ? "#FFFFFF" : variant === "mono" ? "currentColor" : "#6BA239";
  const bottom =
    variant === "white"
      ? "rgba(255,255,255,0.7)"
      : variant === "mono"
      ? "currentColor"
      : "#4E7E2A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tour Bandung Corporate"
      {...props}
    >
      <path d="M8 8 L56 32 L8 32 Z" fill={top} />
      <path d="M8 32 L56 32 L8 56 Z" fill={bottom} />
      <path
        d="M8 8 L24 24 L24 40 L8 56 Z"
        fill={top}
        fillOpacity={variant === "default" ? 0.85 : 1}
      />
    </svg>
  );
}

export function LogoLockup({
  size = 28,
  showSubline = false,
  variant = "default",
}: {
  size?: number;
  showSubline?: boolean;
  variant?: "default" | "white";
}) {
  const textColor = variant === "white" ? "#FAFAF7" : "var(--color-ink)";
  const subColor =
    variant === "white" ? "rgba(255,255,255,0.6)" : "var(--color-slate)";

  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} variant={variant === "white" ? "white" : "default"} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display tracking-tight"
          style={{
            color: textColor,
            fontSize: `${size * 0.62}px`,
            letterSpacing: "-0.02em",
          }}
        >
          TourBandung<span className="font-display-italic"> Corporate</span>
        </span>
        {showSubline && (
          <span
            className="mt-1 text-[10px] uppercase tracking-[0.16em]"
            style={{ color: subColor }}
          >
            A unit of 7Summits Travel
          </span>
        )}
      </span>
    </span>
  );
}
