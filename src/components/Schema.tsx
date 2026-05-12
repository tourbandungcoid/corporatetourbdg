import { SITE } from "@/lib/site";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency", "ProfessionalService"],
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
      email: SITE.email,
    },
    sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.social.youtube],
    parentOrganization: {
      "@type": "Organization",
      name: SITE.parent,
    },
    memberOf: [
      { "@type": "Organization", name: "ASITA" },
      { "@type": "Organization", name: "IATA" },
    ],
    foundingDate: `${SITE.established}-01-01`,
    knowsAbout: [
      "Corporate Outing",
      "Team Building",
      "MICE",
      "Corporate Retreat",
      "Executive Offsite",
      "Incentive Travel",
      "Leadership Development",
    ],
    areaServed: [
      { "@type": "City", name: "Bandung" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
      { "@type": "Country", name: "Indonesia" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  slug,
  priceFrom,
}: {
  name: string;
  description: string;
  slug: string;
  priceFrom: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} — ${SITE.name}`,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
    },
    areaServed: { "@type": "City", name: "Bandung" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "HR Department, Corporate Procurement, C-Suite",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: priceFrom.replace(/\D/g, ""),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "IDR",
        description: `Starting from ${priceFrom} per person`,
      },
      url: `${SITE.url}/services/${slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${SITE.url}${item.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
