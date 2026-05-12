import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const baseProps = (size: number = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const Whatsapp = ({ size = 24, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...rest}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const ArrowRight = ({ size = 16, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const Check = ({ size = 16, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Sparkle = ({ size = 16, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);

export const Menu = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const Close = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ChevronDown = ({ size = 16, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Service icons (simple geometric, custom — not from generic library)
export const IconGathering = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="2.5" />
    <path d="M3 21c0-3.5 2.5-6 6-6s6 2.5 6 6M14.5 14.5c1 .3 2.5 1 3 2.5" />
  </svg>
);

export const IconTeamBuilding = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export const IconEmployee = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
  </svg>
);

export const IconRetreat = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M3 20h18M5 20V9l4-2 3 2 3-2 4 2v11M9 20v-5h6v5" />
  </svg>
);

export const IconLeadership = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-6h4v6" />
    <path d="M12 11h.01" />
  </svg>
);

export const IconExecutive = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
);

export const IconIncentive = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="m12 2 3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5 2 9.5l7-1z" />
  </svg>
);

export const IconAnnual = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

export const IconMice = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <rect x="3" y="6" width="18" height="11" rx="1.5" />
    <path d="M8 22h8M12 17v5M8 11h8" />
  </svg>
);

export const IconGlamping = ({ size = 24, ...rest }: IconProps) => (
  <svg {...baseProps(size)} aria-hidden="true" {...rest}>
    <path d="M3 20 12 4l9 16M7 20h10M10 20v-5h4v5" />
  </svg>
);
