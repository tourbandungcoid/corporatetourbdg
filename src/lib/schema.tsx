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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        telephone: `+${CONTACT.whatsapp}`,
        email: CONTACT.email,
        availableLanguage: ["Indonesian", "English"],
        contactOption: "https://schema.org/TollFree",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: CONTACT.officeHoursStructured.days,
          opens: CONTACT.officeHoursStructured.opens,
          closes: CONTACT.officeHoursStructured.closes,
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: `+${CONTACT.whatsapp}`,
        email: CONTACT.email,
        availableLanguage: ["Indonesian", "English"],
        url: `${SITE.url}/proposal/request`,
      },
      {
        "@type": "ContactPoint",
        contactType: "Reservations",
        telephone: `+${CONTACT.whatsapp}`,
        url: `${SITE.url}/proposal/book-consultation`,
        availableLanguage: ["Indonesian", "English"],
      },
    ],
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
      "5-Pillar Corporate Outing Design™",
      "Bandung Outing Tier System™ (BOTS)",
      "Outcome ROI Framework corporate event",
      "Discovery briefing corporate event",
      "Line-item transparent pricing corporate event",
      "Post-event report dan ROI measurement",
      "Corporate event risk management Indonesia",
      "Family day corporate Bandung",
      "Annual company trip Jawa Barat",
      "Villa gathering Lembang Bandung",
      "Cross-generational team building",
      "Post-merger cultural bonding event",
      "Leadership retreat Jawa Barat",
      "Employee engagement measurement NPS",
      "Corporate procurement event Indonesia",
      "NDA-ready corporate event contract",
    ],
    knowsLanguage: ["id-ID", "en-US"],
    slogan: "Corporate Seru — Specialist B2B Corporate Event Bandung",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "ASITA certified — Bandung chapter" },
      { "@type": "EducationalOccupationalCredential", name: "K3 Safety Training — Disnaker Jabar" },
      { "@type": "EducationalOccupationalCredential", name: "Certified MICE Professional — Kemenparekraf RI" },
      { "@type": "EducationalOccupationalCredential", name: "Indonesia MICE Network — founding member" },
    ],
    memberOf: [
      { "@type": "Organization", name: "ASITA — Asosiasi Pelaku Pariwisata Indonesia", url: "https://asita.or.id" },
      { "@type": "Organization", name: "Indonesia MICE Network" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${SITE.url}/services#catalog`,
      name: "Corporate Event Services",
      url: `${SITE.url}/services`,
      numberOfItems: 10,
      itemListElement: [
        { "@type": "Offer", name: "Company Gathering", url: `${SITE.url}/services/company-gathering` },
        { "@type": "Offer", name: "Team Building", url: `${SITE.url}/services/team-building` },
        { "@type": "Offer", name: "Employee Gathering", url: `${SITE.url}/services/employee-gathering` },
        { "@type": "Offer", name: "Corporate Retreat", url: `${SITE.url}/services/corporate-retreat` },
        { "@type": "Offer", name: "Leadership Camp", url: `${SITE.url}/services/leadership-camp` },
        { "@type": "Offer", name: "Executive Offsite", url: `${SITE.url}/services/executive-offsite` },
        { "@type": "Offer", name: "Incentive Trip", url: `${SITE.url}/services/incentive-trip` },
        { "@type": "Offer", name: "Annual Company Trip", url: `${SITE.url}/services/annual-company-trip` },
        { "@type": "Offer", name: "MICE", url: `${SITE.url}/services/mice` },
        { "@type": "Offer", name: "Glamping Corporate", url: `${SITE.url}/services/glamping-corporate` },
      ],
    },
    subjectOf: [
      { "@type": "WebPage", "@id": `${SITE.url}/methodology`, url: `${SITE.url}/methodology`, name: "3 Named Framework Corporate Outing Design" },
      { "@type": "WebPage", "@id": `${SITE.url}/specialist-vs-generic-eo`, url: `${SITE.url}/specialist-vs-generic-eo`, name: "Specialist vs Generic EO — 12 Dimensi Comparison" },
      { "@type": "WebPage", "@id": `${SITE.url}/panduan-corporate-outing-bandung`, url: `${SITE.url}/panduan-corporate-outing-bandung`, name: "Panduan Lengkap Corporate Outing Bandung" },
      { "@type": "WebPage", "@id": `${SITE.url}/about`, url: `${SITE.url}/about`, name: "Tentang TourBandung Corporate — Sejak 2018" },
      { "@type": "WebPage", "@id": `${SITE.url}/team`, url: `${SITE.url}/team`, name: "Senior Planner Team — 6 Specialist Corporate Event" },
      { "@type": "WebPage", "@id": `${SITE.url}/pricing`, url: `${SITE.url}/pricing`, name: "Pricing Transparent 4-Tier Corporate Outing Bandung" },
      { "@type": "WebPage", "@id": `${SITE.url}/case-studies`, url: `${SITE.url}/case-studies`, name: "Case Studies — Real Events, Real Outcomes" },
      { "@type": "WebPage", "@id": `${SITE.url}/glossary`, url: `${SITE.url}/glossary`, name: "Glossary Istilah Corporate Event Indonesia" },
      { "@type": "WebPage", "@id": `${SITE.url}/outing-kantor-bandung`, url: `${SITE.url}/outing-kantor-bandung`, name: "Outing Kantor Bandung — Panduan Budget & Itinerary" },
      { "@type": "WebPage", "@id": `${SITE.url}/team-building-bandung`, url: `${SITE.url}/team-building-bandung`, name: "Team Building Bandung — Methodology & Activity Catalog" },
      { "@type": "WebPage", "@id": `${SITE.url}/corporate-gathering-bandung`, url: `${SITE.url}/corporate-gathering-bandung`, name: "Corporate Gathering Bandung — Annual Event Production" },
      { "@type": "WebPage", "@id": `${SITE.url}/event-organizer-corporate-bandung`, url: `${SITE.url}/event-organizer-corporate-bandung`, name: "Event Organizer Corporate Bandung — Specialist B2B" },
      { "@type": "WebPage", "@id": `${SITE.url}/b2b-corporate-event-specialist-bandung`, url: `${SITE.url}/b2b-corporate-event-specialist-bandung`, name: "B2B Corporate Event Specialist Bandung" },
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
      { "@type": "City", name: "Bandung", sameAs: "https://www.wikidata.org/wiki/Q1440" },
      { "@type": "AdministrativeArea", name: "Jawa Barat", sameAs: "https://www.wikidata.org/wiki/Q3812" },
      { "@type": "City", name: "Lembang" },
      { "@type": "City", name: "Ciwidey" },
      { "@type": "City", name: "Pangalengan" },
      { "@type": "City", name: "Subang" },
      { "@type": "Country", name: "Indonesia", sameAs: "https://www.wikidata.org/wiki/Q252" },
    ],
    employee: [
      { "@type": "Person", "@id": `${SITE.url}/team#andre-pratama`, name: "Andre Pratama", jobTitle: "Founder & Lead Corporate Strategist", url: `${SITE.url}/team#andre-pratama` },
      { "@type": "Person", "@id": `${SITE.url}/team#sinta-rahmadhani`, name: "Sinta Rahmadhani", jobTitle: "Head of Client Strategy", url: `${SITE.url}/team#sinta-rahmadhani` },
      { "@type": "Person", "@id": `${SITE.url}/team#raden-bagus`, name: "Raden Bagus Wicaksono", jobTitle: "Head of Operations & Risk", url: `${SITE.url}/team#raden-bagus` },
      { "@type": "Person", "@id": `${SITE.url}/team#amelia-chandra`, name: "Amelia Chandra", jobTitle: "Senior Program Designer", url: `${SITE.url}/team#amelia-chandra` },
      { "@type": "Person", "@id": `${SITE.url}/team#tio-mahesa`, name: "Tio Mahesa", jobTitle: "Lead Field Operations Manager", url: `${SITE.url}/team#tio-mahesa` },
      { "@type": "Person", "@id": `${SITE.url}/team#putri-anggraeni`, name: "Putri Anggraeni", jobTitle: "Post-Event Closure & Reporting Lead", url: `${SITE.url}/team#putri-anggraeni` },
    ],
    sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.youtube, SITE.googleMapsUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.googleRating,
      reviewCount: REVIEWS.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
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
    parentOrganization: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.legalName, url: SITE.url },
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

export function faqPageSchema(items: { question: string; answer: string }[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": `${pageUrl}#faqpage`, url: pageUrl, isPartOf: { "@type": "WebSite", "@id": `${SITE.url}#website`, url: SITE.url } } : {}),
    mainEntity: items.map((item, i) => ({
      "@type": "Question",
      ...(pageUrl ? { "@id": `${pageUrl}#faq-${i + 1}` } : {}),
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
  mentions,
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
  mentions?: { type: string; name: string; url?: string; id?: string | undefined }[];
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
    "@id": `${SITE.url}${slug}#article`,
    headline,
    description,
    image,
    datePublished,
    dateModified,
    inLanguage: "id-ID",
    author: authorEntity,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
      name: SITE.name,
      url: SITE.url,
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
        "@id": `${SITE.url}#organization`,
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
    ...(mentions && mentions.length > 0
      ? {
          mentions: mentions.map((m) => ({
            "@type": m.type,
            ...(m.id ? { "@id": m.id } : {}),
            name: m.name,
            ...(m.url ? { url: m.url } : {}),
          })),
        }
      : {}),
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
      "@id": `${url}#${t.slug}`,
      name: t.name,
      description: t.description,
      url: `${url}#${t.slug}`,
      inDefinedTermSet: { "@id": `${url}#termset` },
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
