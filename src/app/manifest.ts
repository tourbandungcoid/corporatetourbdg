import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TourBandung Corporate",
    short_name: "TBC",
    description:
      "Specialist B2B corporate outing, team building, and executive offsite di Bandung & Jawa Barat. 7Summits Travel, since 2018.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FAFAF7",
    theme_color: "#0F1F1A",
    lang: "id-ID",
    categories: ["business", "travel", "events"],
    // Note: icon.tsx + apple-icon.tsx auto-inject <link rel="icon"> tags
    // for browser tabs / iOS bookmarks. PWA manifest icons would need
    // static files in public/ which we don't ship — skipping here to
    // avoid 404 fetch loops.
  };
}
