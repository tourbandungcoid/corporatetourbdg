import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICE_DATA } from "@/lib/service-data";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(SERVICE_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) return {};
  const title = `${data.title} Bandung — ${data.titleEn} untuk Enterprise Indonesia`;
  const description = data.description.slice(0, 158);
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) notFound();
  return <ServiceTemplate data={data} />;
}
