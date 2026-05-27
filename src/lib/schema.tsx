import { SITE, CONTACT, SOCIAL, STATS, REVIEWS } from "./site";

/**
 * Schema.org JSON-LD helpers for SEO and GEO (LLM citation).
 * Output via <script type="application/ld+json"> in page heads.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.legalName,
    alternateName: ["TourBandung Corporate", "Tour Bandung Corporate", "7Summits Corporate"],
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo/logo.png`,
      width: 200,
      height: 60,
    },
    description:
      "Tour Bandung Corporate adalah unit specialized dari 7Summits Travel yang fokus 100% pada B2B corporate event organizer untuk outing kantor, team building, corporate gathering, incentive trip, leadership retreat, dan executive offsite di Bandung & Jawa Barat. Operating sejak 2018 dengan 400+ corporate events delivered, 92% repeat booking rate, 60+ venue partnership direct, dan tim senior (tenure 4+ tahun) dedicated per client.",
    foundingDate: "2018",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 15 },
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
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: CONTACT.officeHoursStructured.days,
        opens: CONTACT.officeHoursStructured.opens,
        closes: CONTACT.officeHoursStructured.closes,
      },
    },
    knowsAbout: [
      "Corporate Outing",
      "Team Building",
      "MICE",
      "Incentive Trip",
      "Corporate Gathering",
      "Executive Offsite",
      "Leadership Retreat",
      "Event Management",
      "Corporate Travel Indonesia",
    ],
    sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.youtube, SITE.googleMapsUrl],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency", "EventPlanner", "ProfessionalService"],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.9306,
      longitude: 107.619,
    },
    hasMap: SITE.googleMapsUrl,
    areaServed: [
      { "@type": "City", name: "Bandung" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
      { "@type": "Country", name: "Indonesia" },
    ],
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
  authorName,
  authorJobTitle,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  authorName?: string;
  authorJobTitle?: string;
}) {
  const author = authorName
    ? {
        "@type": "Person",
        name: authorName,
        ...(authorJobTitle ? { jobTitle: authorJobTitle } : {}),
        worksFor: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
      }
    : { "@type": "Organization", name: SITE.legalName, url: SITE.url };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    inLanguage: "id-ID",
    author,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
      name: SITE.legalName,
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
        name: SITE.legalName,
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

export function reviewSchema({
  reviewRating,
  reviewBody,
  reviewerName,
  reviewerJobTitle,
}: {
  reviewRating: number;
  reviewBody: string;
  reviewerName: string;
  reviewerJobTitle: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody,
    author: {
      "@type": "Person",
      name: reviewerName,
      jobTitle: reviewerJobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function eventSchema({
  name,
  description,
  startDate,
  endDate,
  eventLocation,
  organizer,
  image,
}: {
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  eventLocation?: string;
  organizer?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
    ...(eventLocation ? { location: { "@type": "Place", name: eventLocation } } : {}),
    organizer: {
      "@type": "Organization",
      name: organizer || SITE.name,
      url: SITE.url,
    },
    ...(image ? { image } : {}),
  };
}

export function offerSchema({
  name,
  priceLow,
  priceHigh,
  priceCurrency = "IDR",
  description,
}: {
  name: string;
  priceLow: string;
  priceHigh: string;
  priceCurrency?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name,
    priceCurrency,
    price: `${priceLow} - ${priceHigh}`,
    priceRange: `${priceLow} - ${priceHigh}`,
    ...(description ? { description } : {}),
    seller: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

/**
 * SpeakableSpecification — marks page sections as AI/voice extractable.
 * Helps Google AI Overview and voice search identify key content.
 */
export function speakableSchema(cssSelectors: string[], xPaths?: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      ...(cssSelectors.length > 0 ? { cssSelector: cssSelectors } : {}),
      ...(xPaths && xPaths.length > 0 ? { xpath: xPaths } : {}),
    },
  };
}

/**
 * DefinedTerm schema for glossary entries — entity-level semantic clarity.
 */
export function definedTermSchema({ term, description, url }: { term: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Corporate Event Glossary Indonesia",
      url: `${SITE.url}/glossary`,
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
