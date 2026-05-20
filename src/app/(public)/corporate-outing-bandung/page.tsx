import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Outing Bandung — TourBandung Corporate",
  description:
    "Corporate outing Bandung specialist B2B. 400+ events delivered · ⭐ 4.9/5 · Proposal 24 jam.",
  alternates: {
    canonical: `${SITE.url}/outing-kantor-bandung`,
  },
  robots: { index: false, follow: true },
};

export default function CorporateOutingBandungPage() {
  redirect("/outing-kantor-bandung");
}
