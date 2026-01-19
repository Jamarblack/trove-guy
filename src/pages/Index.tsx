import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import HowToBuySection from "@/components/HowToBuySection";
import CommunitySection from "@/components/CommunitySection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import FloatingBuyButton from "@/components/FloatingBuyButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <HowToBuySection />
        <CommunitySection />
        <RoadmapSection />
      </main>
      <Footer />
      <FloatingBuyButton />
    </div>
  );
};

export default Index;
