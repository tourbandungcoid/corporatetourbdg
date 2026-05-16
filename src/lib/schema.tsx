import { SITE, CONTACT, SOCIAL, STATS, REVIEWS } from "./site";

/**
 * Schema.org JSON-LD helpers for SEO and GEO (LLM citation).
 * Output via <script type="application/ld+json"> in page heads.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: ["TourBandung Corporate", "Tour Bandung Corporate", "7Summits Corporate"],
    url: SITE.url,
    logo: `${SITE.url}/logo/logo.png`,
    description:
      "Specialist B2B corporate outing, team building, dan executive offsite di Bandung & Jawa Barat. 7Summits Travel beroperasi sejak 2018 dengan 400+ corporate events delivered.",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: `+${CONTACT.whatsapp}`,
      email: CONTACT.email,
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.youtube, SITE.googleMapsUrl],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "@id": `${SITE.url}#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    image: `${SITE.url}/logo/logo.png`,
    url: SITE.url,
    telephone: `+${CONTACT.whatsapp}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    hasMap: SITE.googleMapsUrl,
    areaServed: ["Bandung", "Lembang", "Ciwidey", "Pangalengan", "Subang", "Jawa Barat"],
    priceRange: "Rp 1.500.000 - Rp 10.000.000 / pax",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: CONTACT.officeHoursStructured.days,
        opens: CONTACT.officeHoursStructured.opens,
        closes: CONTACT.officeHoursStructured.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.googleRating,
      reviewCount: REVIEWS.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.youtube, SITE.googleMapsUrl],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  slug,
  author,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  author?: { name: string; role: string };
}) {
  const authorEntity = author
    ? {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        worksFor: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
        url: `${SITE.url}/team`,
      }
    : { "@type": "Organization", name: SITE.name, url: SITE.url };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: authorEntity,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}${slug}`,
    },
    about: {
      "@type": "Service",
      name: "Corporate Outing Bandung",
      provider: {
        "@type": "Organization",
        name: SITE.name,
      },
      areaServed: {
        "@type": "City",
        name: "Bandung",
      },
    },
  };
}

export function serviceSchema({
  name,
  description,
  priceRange,
}: {
  name: string;
  description: string;
  priceRange: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: [
      { "@type": "City", name: "Bandung" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
    ],
    offers: {
      "@type": "Offer",
      priceRange,
      priceCurrency: "IDR",
    },
    serviceType: "Corporate Event Planning",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Corporate B2B",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.googleRating,
      reviewCount: REVIEWS.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function personSchema({
  name,
  jobTitle,
  description,
  image,
  slug,
  sameAs,
}: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  slug: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    ...(image ? { image } : {}),
    url: `${SITE.url}${slug}`,
    worksFor: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
    },
    ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function videoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl ? { contentUrl } : {}),
    ...(embedUrl ? { embedUrl } : {}),
    ...(duration ? { duration } : {}),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo/logo.png` },
    },
  };
}

/**
 * Render multiple schemas as a single @graph for performance + cleanliness.
 */
export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((s) => {
      // Strip nested @context — already in parent
      const copy = { ...s } as Record<string, unknown>;
      delete copy["@context"];
      return copy;
    }),
  };
}

/**
 * JSON-LD <script> component for App Router server components.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Re-export stats reference (avoid unused import warning)
export const _STATS_REF = STATS;
