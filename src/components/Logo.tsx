import Image from "next/image";
import type { SVGProps } from "react";

// Official logo files in Google Drive (folder must be set to "Anyone with link can view")
const LOGO_ON_LIGHT_BG =
  "https://drive.google.com/thumbnail?id=1iUgnxGAJCNl0x0IIvAi-D0M-kwYAgON9&sz=w800";
const LOGO_ON_DARK_BG =
  "https://drive.google.com/thumbnail?id=1UPHvGeHBbwehMfTFikRX5xF7KkPLeGRu&sz=w800";

type LogoProps = SVGProps<SVGSVGElement> & {
  size?: number;
  variant?: "default" | "white" | "mono";
};

/**
 * Inline SVG triangle mark — used as fallback / icon-only contexts.
 * Approximates the official 7Summits Travel mark.
 */
export function LogoMark({
  size = 32,
  variant = "default",
  ...props
}: LogoProps) {
  const top =
    variant === "white"
      ? "#FFFFFF"
      : variant === "mono"
      ? "currentColor"
      : "#6BA239";
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
      aria-label="7Summits Travel"
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

/**
 * Official logo image (PNG from Drive). Use for nav, footer, hero — anywhere
 * the full brand lockup should appear.
 *
 * Variants:
 * - "light": colored logo for use on light backgrounds (default)
 * - "dark": white logo for use on dark backgrounds
 */
type LogoImageProps = {
  variant?: "light" | "dark";
  height?: number;
  className?: string;
  priority?: boolean;
};

export function LogoImage({
  variant = "light",
  height = 40,
  className,
  priority = false,
}: LogoImageProps) {
  const src = variant === "dark" ? LOGO_ON_DARK_BG : LOGO_ON_LIGHT_BG;
  return (
    <Image
      src={src}
      alt="TourBandung Corporate"
      width={height * 6}
      height={height}
      priority={priority}
      className={className}
      style={{ width: "auto", height: `${height}px` }}
      unoptimized
    />
  );
}

/**
 * Brand lockup with sublabel — used in navigation to indicate the
 * "Corporate" division of 7Summits Travel.
 */
type LockupProps = {
  height?: number;
  variant?: "light" | "dark";
  showCorporateLabel?: boolean;
};

export function LogoLockup({
  height = 40,
  variant = "light",
  showCorporateLabel = true,
}: LockupProps) {
  const labelColor =
    variant === "dark" ? "rgba(255,255,255,0.65)" : "var(--color-brand-deep)";

  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoImage variant={variant} height={height} />
      {showCorporateLabel && (
        <span
          className="hidden sm:inline-block text-[11px] tracking-[0.16em] uppercase font-semibold px-2.5 py-1 rounded-md border"
          style={{
            color: labelColor,
            borderColor:
              variant === "dark"
                ? "rgba(255,255,255,0.22)"
                : "var(--color-divider)",
          }}
        >
          Corporate
        </span>
      )}
    </span>
  );
}
