import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CeremonySection from "@/components/CeremonySection";
import DressCodeSection from "@/components/DressCodeSection";
import GiftsSection from "@/components/GiftsSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CeremonySection />
      <DressCodeSection />
      <GiftsSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
