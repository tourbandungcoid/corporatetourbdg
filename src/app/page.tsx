import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <FeaturedPackages />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <LeadMagnet />
      <FinalCTA />
    </main>
  );
}
