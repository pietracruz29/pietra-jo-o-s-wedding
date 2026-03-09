import aquarela from "@/assets/aquarela-venue.png";
import namesLogo from "@/assets/names-logo.png";
import monogram from "@/assets/monogram.png";
import CountdownSection from "./CountdownSection";

const HeroSection = () => {
  return (
    <section id="topo" className="relative min-h-screen flex flex-col items-center bg-cream-light">
      {/* Monogram top */}
      <div className="pt-24 pb-4">
        <img src={monogram} alt="J&P" className="h-20 md:h-28 w-auto mx-auto" />
      </div>

      {/* Names */}
      <div className="flex flex-col items-center pb-4">
        <img
          src={namesLogo}
          alt="João & Pietra"
          className="w-56 md:w-80 h-auto mb-3"
        />
        <p className="text-base md:text-lg text-muted-foreground font-light tracking-wider">
          25 de julho de 2026
        </p>
        <p className="text-sm text-muted-foreground font-light mt-1">
          Florianópolis, Brasil
        </p>
      </div>

      {/* Countdown */}
      <CountdownSection />

      {/* Watercolor cover */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-4">
        <img
          src={aquarela}
          alt="Aquarela do local da cerimônia"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
