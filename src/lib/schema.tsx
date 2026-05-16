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
      contactType: "Sales",
      telephone: `+${CONTACT.whatsapp}`,
      email: CONTACT.email,
      availableLanguage: ["Indonesian", "English"],
      contactOption: "https://schema.org/TollFree",
    },
    numberOfEmployees: { "@type": "QuantitativeValue", value: 6, minValue: 6, maxValue: 15 },
    knowsAbout: [
      "Corporate outing Bandung",
      "Team building Bandung",
      "Corporate gathering Bandung",
      "Executive offsite Jawa Barat",
      "Incentive trip Bandung",
      "MICE organizer Bandung",
      "Company retreat Jawa Barat",
      "Glamping corporate Bandung",
      "B2B corporate event planning",
      "Corporate event budgeting Indonesia",
      "Venue gathering Bandung",
      "Outbound perusahaan Bandung",
      "5-Pillar Corporate Outing Design",
      "Bandung Outing Tier System",
      "Corporate event ROI measurement Indonesia",
    ],
    knowsLanguage: ["id-ID", "en-US"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate Event Services",
      url: `${SITE.url}/services`,
      numberOfItems: 10,
    },
    subjectOf: [
      { "@type": "WebPage", url: `${SITE.url}/methodology`, name: "3 Named Framework Corporate Outing Design" },
      { "@type": "WebPage", url: `${SITE.url}/specialist-vs-generic-eo`, name: "Specialist vs Generic EO — 12 Dimensi Comparison" },
      { "@type": "WebPage", url: `${SITE.url}/panduan-corporate-outing-bandung`, name: "Panduan Lengkap Corporate Outing Bandung" },
      { "@type": "WebPage", url: `${SITE.url}/about`, name: "Tentang TourBandung Corporate — Sejak 2018" },
      { "@type": "WebPage", url: `${SITE.url}/team`, name: "Senior Planner Team — 6 Specialist Corporate Event" },
      { "@type": "WebPage", url: `${SITE.url}/pricing`, name: "Pricing Transparent 4-Tier Corporate Outing Bandung" },
      { "@type": "WebPage", url: `${SITE.url}/case-studies`, name: "Case Studies — Real Events, Real Outcomes" },
      { "@type": "WebPage", url: `${SITE.url}/glossary`, name: "Glossary Istilah Corporate Event Indonesia" },
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Bandung, Jawa Barat, Indonesia",
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.address.city,
        addressRegion: CONTACT.address.region,
        addressCountry: CONTACT.address.country,
      },
    },
    areaServed: [
      { "@type": "City", name: "Bandung" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
    ],
    employee: [
      { "@type": "Person", name: "Andre Pratama", jobTitle: "Founder & Lead Corporate Strategist", url: `${SITE.url}/team#andre-pratama` },
      { "@type": "Person", name: "Sinta Rahmadhani", jobTitle: "Head of Client Strategy", url: `${SITE.url}/team#sinta-rahmadhani` },
      { "@type": "Person", name: "Raden Bagus Wicaksono", jobTitle: "Head of Operations & Risk", url: `${SITE.url}/team#raden-bagus` },
      { "@type": "Person", name: "Amelia Chandra", jobTitle: "Senior Program Designer", url: `${SITE.url}/team#amelia-chandra` },
      { "@type": "Person", name: "Tio Mahesa", jobTitle: "Lead Field Operations Manager", url: `${SITE.url}/team#tio-mahesa` },
      { "@type": "Person", name: "Putri Anggraeni", jobTitle: "Post-Event Closure & Reporting Lead", url: `${SITE.url}/team#putri-anggraeni` },
    ],
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
    naics: "561599",
    isicV4: "7911",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    hasMap: SITE.googleMapsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.936249,
      longitude: 107.626469,
    },
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
    potentialAction: {
      "@type": "ReserveAction",
      name: "Request Free Proposal",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/proposal/request`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Discovery Brief", value: true },
      { "@type": "LocationFeatureSpecification", name: "Line-Item Proposal Transparent", value: true },
      { "@type": "LocationFeatureSpecification", name: "Risk Register Terdokumentasi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Post-Event Report", value: true },
      { "@type": "LocationFeatureSpecification", name: "NDA-Ready Confidentiality Protocol", value: true },
    ],
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "Andini Pratama" },
        reviewBody: "Senior planner dedicated dari briefing sampai event — bukan rotating freelancer. Komunikasi clean, accountability ada nama. Ini yang gw cari dari corporate event vendor.",
        datePublished: "2026-04-15",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "Bagas Wicaksono" },
        reviewBody: "Proposal detailed breakdown — finance team gw approval cepet karena gak ada hidden cost yang muncul belakangan. Transparent pricing is rare di vendor corporate event.",
        datePublished: "2026-03-22",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "Citra Sari" },
        reviewBody: "Custom 100%. Brief soal cross-team bonding pasca-merger, mereka kasih program yang bener-bener address itu — bukan template outing biasa.",
        datePublished: "2026-02-10",
      },
    ],
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
  aboutService,
  keywords,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  author?: { name: string; role: string };
  aboutService?: string;
  keywords?: string[];
}) {
  const AUTHOR_SLUGS: Record<string, string> = {
    "Andre Pratama": "andre-pratama",
    "Sinta Rahmadhani": "sinta-rahmadhani",
    "Raden Bagus Wicaksono": "raden-bagus",
    "Amelia Chandra": "amelia-chandra",
    "Tio Mahesa": "tio-mahesa",
    "Putri Anggraeni": "putri-anggraeni",
  };
  const authorEntity = author
    ? {
        "@type": "Person",
        "@id": `${SITE.url}/team#${AUTHOR_SLUGS[author.name] ?? author.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: author.name,
        jobTitle: author.role,
        worksFor: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.legalName, url: SITE.url },
        url: `${SITE.url}/team#${AUTHOR_SLUGS[author.name] ?? author.name.toLowerCase().replace(/\s+/g, "-")}`,
      }
    : { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.name, url: SITE.url };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    inLanguage: "id-ID",
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
      isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url, name: SITE.name },
    },
    about: {
      "@type": "Service",
      name: aboutService ?? "Corporate Outing Bandung",
      provider: {
        "@type": "Organization",
        name: SITE.name,
      },
      areaServed: {
        "@type": "City",
        name: "Bandung",
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".quick-answer", ".tldr-box"],
    },
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
  };
}

export function serviceSchema({
  name,
  description,
  priceRange,
  url,
}: {
  name: string;
  description: string;
  priceRange: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    ...(url ? { "@id": `${url}#service`, url } : {}),
    name,
    description,
    provider: {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
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
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/proposal/request`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: { "@type": "Reservation", name: "Corporate Event Proposal Request" },
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
  knowsAbout,
  hasCredential,
}: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  slug: string;
  sameAs?: string[];
  knowsAbout?: string[];
  hasCredential?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}${slug}`,
    name,
    jobTitle,
    description,
    ...(image ? { image } : {}),
    url: `${SITE.url}${slug}`,
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
      name: SITE.legalName,
      url: SITE.url,
    },
    ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
    ...(knowsAbout && knowsAbout.length > 0 ? { knowsAbout } : {}),
    ...(hasCredential && hasCredential.length > 0
      ? { hasCredential: hasCredential.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c })) }
      : {}),
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
    inLanguage: "id-ID",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
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
      "@id": `${SITE.url}#organization`,
      name: SITE.name,
      url: SITE.url,
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

export function itemListSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; description?: string; image?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name,
    description,
    url,
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url },
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: item.url,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.image ? { image: item.image } : {}),
    })),
  };
}

export function definedTermSetSchema({
  name,
  description,
  url,
  terms,
}: {
  name: string;
  description: string;
  url: string;
  terms: { name: string; description: string; slug: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#termset`,
    name,
    description,
    url,
    inLanguage: "id-ID",
    publisher: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.name, url: SITE.url },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
      url: `${url}#${t.slug}`,
      inDefinedTermSet: `${url}#termset`,
    })),
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
