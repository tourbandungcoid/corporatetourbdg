import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicePillars } from "@/components/home/ServicePillars";
import { SignaturePrograms } from "@/components/home/SignaturePrograms";
import { Methodology } from "@/components/home/Methodology";
import { CaseStudies } from "@/components/home/CaseStudies";
import { IndustryGrid } from "@/components/home/IndustryGrid";
import { Destinations } from "@/components/home/Destinations";
import { Testimonials } from "@/components/home/Testimonials";
import { SafetyStandards } from "@/components/home/SafetyStandards";
import { Awards } from "@/components/home/Awards";
import { FAQ } from "@/components/home/FAQ";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSchema } from "@/components/Schema";
import { FAQ_HOME } from "@/lib/site";

export default function Home() {
  return (
    <>
      <FAQSchema items={FAQ_HOME} />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <ServicePillars />
      <SignaturePrograms />
      <Methodology />
      <CaseStudies />
      <IndustryGrid />
      <Destinations />
      <Testimonials />
      <SafetyStandards />
      <Awards />
      <FAQ />
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
