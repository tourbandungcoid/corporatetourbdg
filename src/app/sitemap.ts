import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_DATA } from "@/lib/service-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceSlugs = Object.keys(SERVICE_DATA);

  const staticRoutes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/proposal/request", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/proposal/quick-quote", priority: 0.8, changeFrequency: "monthly" as const },
    {
      url: "/proposal/book-consultation",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { url: "/proposal/sample", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((r) => ({
    ...r,
    url: `${SITE.url}${r.url}`,
    lastModified: now,
  }));
}
