import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin/", "/api/", "/auth/", "/proposal/thank-you/", "/proposal/track/"];
  const aiCrawlers = [
    "GPTBot", "ChatGPT-User", "OAI-SearchBot",
    "anthropic-ai", "ClaudeBot",
    "PerplexityBot",
    "Googlebot-Extended",
    "cohere-ai",
    "meta-externalagent",
    "Amazonbot",
    "Applebot-Extended",
    "Bytespider",
    "DuckAssistBot",
    "YouBot",
    "Diffbot",
    "CCBot",
    "FacebookBot",
    "ImagesiftBot",
    "TimpiBot",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
