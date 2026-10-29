import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TEMPORARY: ~146 pre-existing lint errors (mostly react/no-unescaped-entities)
  // broke every production build since #49. Lint still runs via `npm run lint`;
  // remove this once those are cleaned up.
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "*.supabase.in" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 31,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,
  productionBrowserSourceMaps: false,

  // Merged/retired insight articles → the stronger article on the same topic.
  async redirects() {
    return [
      ["bagaimana-memilih-antara-corporate-gathering-atau-outing-kantor", "corporate-gathering-vs-outing-kantor"],
      ["checklist-vendor-event-organizer-corporate", "cara-memilih-vendor-corporate-event-bandung"],
      ["annual-company-trip-vs-incentive-trip", "incentive-trip-perusahaan-panduan-lengkap"],
      ["how-to-measure-roi-corporate-event", "justify-outing-budget-to-finance"],
      ["corporate-event-budget-breakdown", "biaya-team-building-bandung"],
    ].map(([from, to]) => ({
      source: `/insights/${from}`,
      destination: `/insights/${to}`,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/opengraph-image",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
