import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { TEAM } from '@/lib/team-data';
import { getAllFaqCategorySlugsStatic } from '@/lib/faq-data-static';

const BASE_URL = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  // Money pages
  const moneyPages = [
    '/outing-kantor-bandung',
    '/team-building-bandung',
    '/corporate-gathering-bandung',
    '/employee-gathering-bandung',
    '/event-organizer-corporate-bandung',
    '/incentive-trip-bandung',
    '/glamping-corporate-bandung',
    '/villa-gathering-bandung',
    '/company-retreat-bandung',
    '/mice-organizer-bandung',
    '/outbound-perusahaan-bandung',
    '/executive-offsite-bandung',
    '/leadership-retreat-jawa-barat',
    '/specialist-vs-generic-eo',
    '/venue-gathering-bandung',
    '/b2b-corporate-event-specialist-bandung',
  ];

  // Hub pages
  const hubPages = [
    '/',
    '/about',
    '/services',
    '/packages',
    '/case-studies',
    '/insights',
    '/faq',
    '/team',
    '/clients',
    '/contact',
    '/pricing',
    '/methodology',
    '/glossary',
  ];

  // Proposal funnel pages
  const proposalPages = [
    '/proposal',
    '/proposal/request',
    '/proposal/quick-quote',
    '/proposal/book-consultation',
    '/proposal/sample',
  ];

  // Legal pages
  const legalPages = [
    '/legal/privacy',
    '/legal/terms',
  ];

  // Team member pages
  const teamMemberPages = TEAM.map((member) => ({
    url: `${BASE_URL}/team/${member.slug}`,
    lastModified: new Date('2026-05-24'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // FAQ category pages
  const faqCategories = getAllFaqCategorySlugsStatic();
  const faqCategoryPages = faqCategories.map((category) => ({
    url: `${BASE_URL}/faq/${category}`,
    lastModified: new Date('2026-05-24'),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Combine all pages
  const allPages = [
    ...moneyPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...hubPages.map((path) => ({
      url: `${BASE_URL}${path === '/' ? '' : path}`,
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1.0 : 0.8,
    })),
    ...proposalPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...legalPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...teamMemberPages,
    ...faqCategoryPages,
  ];

  return allPages;
}
