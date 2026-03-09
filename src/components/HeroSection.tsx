import aquarela from "@/assets/aquarela-venue.png";
import namesLogo from "@/assets/names-logo.png";
import monogram from "@/assets/monogram.png";
import CountdownSection from "./CountdownSection";

const HeroSection = () => {
  return (
    <section id="topo" className="relative min-h-screen flex flex-col items-center bg-cream-light">
      {/* Monogram */}
      <div className="pt-24 pb-6">
        <img src={monogram} alt="J&P" className="h-24 md:h-32 w-auto mx-auto drop-shadow-sm" />
      </div>

      {/* Names */}
      <div className="flex flex-col items-center mb-2">
        <img
          src={namesLogo}
          alt="João & Pietra"
          className="w-60 md:w-96 h-auto mb-4"
        />
        <p className="text-base md:text-lg text-muted-foreground font-light tracking-[0.25em] uppercase">
          25 de julho de 2026
        </p>
        <p className="text-sm text-muted-foreground font-light mt-1 tracking-wider">
          Florianópolis, Brasil
        </p>
      </div>

      {/* Countdown */}
      <div className="my-6">
        <CountdownSection />
      </div>

      {/* Watercolor — organic, fading into background */}
      <div className="w-full max-w-5xl mx-auto px-4 relative">
        <div className="relative">
          <img
            src={aquarela}
            alt="Aquarela do local da cerimônia"
            className="w-full h-auto opacity-85"
          />
          {/* Soft fade on top edge */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream-light to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
