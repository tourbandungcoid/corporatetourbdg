import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllCaseStudySlugs } from "@/lib/case-studies-data";
import { getAllInsightSlugs } from "@/lib/insights-data";
import { getAllFaqCategorySlugs } from "@/lib/faq-data";

const PUBLIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  // SEO money pages (top-level — max ranking power)
  { path: "/outing-kantor-bandung", priority: 0.95, changeFrequency: "monthly" },
  { path: "/team-building-bandung", priority: 0.95, changeFrequency: "monthly" },
  { path: "/corporate-gathering-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/employee-gathering-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/outbound-perusahaan-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/company-retreat-bandung", priority: 0.85, changeFrequency: "monthly" },
  { path: "/villa-gathering-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/glamping-corporate-bandung", priority: 0.85, changeFrequency: "monthly" },
  { path: "/leadership-retreat-jawa-barat", priority: 0.8, changeFrequency: "monthly" },
  { path: "/executive-offsite-bandung", priority: 0.85, changeFrequency: "monthly" },
  { path: "/b2b-corporate-event-specialist-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/event-organizer-corporate-bandung", priority: 0.95, changeFrequency: "monthly" },
  { path: "/mice-organizer-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/incentive-trip-bandung", priority: 0.9, changeFrequency: "monthly" },
  { path: "/venue-gathering-bandung", priority: 0.85, changeFrequency: "monthly" },
  // Hub / topical authority
  { path: "/panduan-corporate-outing-bandung", priority: 0.95, changeFrequency: "monthly" },
  // Hubs
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/packages", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/methodology", priority: 0.85, changeFrequency: "monthly" },
  { path: "/glossary", priority: 0.7, changeFrequency: "monthly" },
  { path: "/specialist-vs-generic-eo", priority: 0.75, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  // Company
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/clients", priority: 0.6, changeFrequency: "monthly" },
  // Proposal funnel (lower priority — internal CTAs not search-targeted)
  { path: "/proposal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/proposal/request", priority: 0.5, changeFrequency: "monthly" },
  { path: "/proposal/sample", priority: 0.5, changeFrequency: "monthly" },
  { path: "/proposal/book-consultation", priority: 0.5, changeFrequency: "monthly" },
  { path: "/proposal/quick-quote", priority: 0.5, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const baseRoutes = PUBLIC_ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const [caseStudySlugs, insightSlugs, faqCategorySlugs] = await Promise.all([
    getAllCaseStudySlugs(),
    getAllInsightSlugs(),
    getAllFaqCategorySlugs(),
  ]);

  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: `${SITE.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${SITE.url}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = insightSlugs.map((slug) => ({
    url: `${SITE.url}/insights/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const faqCategoryRoutes = faqCategorySlugs.map((slug) => ({
    url: `${SITE.url}/faq/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...baseRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
    ...faqCategoryRoutes,
  ];
}
