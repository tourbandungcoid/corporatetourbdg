import type { Metadata } from "next";
import { ProposalForm } from "@/components/proposal/ProposalForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Proposal — Corporate Outing & MICE Bandung",
  description:
    "Request custom proposal untuk corporate outing, team building, MICE, atau executive offsite. Senior account director akan respon dalam 24 jam.",
  alternates: { canonical: `${SITE.url}/proposal/request` },
  robots: { index: true, follow: true },
};

export default function RequestPage() {
  return <ProposalForm />;
}
