import { CookieBannerEU } from "./components/CookieBannerEU";
import { Footer } from "./components/Footer";
import { Founders } from "./components/Founders";
import { Hero } from "./components/Hero";
import { LeadForm } from "./components/LeadForm";
import { Nav } from "./components/Nav";
import { Outcomes } from "./components/Outcomes";
import { ProofBar } from "./components/ProofBar";
import ToolkitSection from "./components/ToolkitSection";
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Nav />
      <Hero />
      <ProofBar />
      <Founders />
      <WhyUs />
      <ToolkitSection />
      <Outcomes />
      <LeadForm />
      <Footer />
      <CookieBannerEU />
    </div>
  );
}
