import aquarela from "@/assets/aquarela-venue.png";
import namesLogo from "@/assets/names-logo.png";
import monogram from "@/assets/monogram.png";
import CountdownSection from "./CountdownSection";

const HeroSection = () => {
  return (
    <section id="topo" className="relative min-h-screen flex flex-col items-center bg-cream-light overflow-hidden">
      {/* Watercolor as background layer */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img
          src={aquarela}
          alt="Aquarela do local da cerimônia"
          className="w-full h-auto"
        />
        {/* Gradient fade from top into the watercolor */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light via-cream-light/80 to-transparent" style={{ height: "50%" }} />
      </div>

      {/* Content floating over the watercolor */}
      <div className="relative z-10 flex flex-col items-center pt-24 pb-32 flex-1 justify-center">
        {/* Monogram */}
        <img src={monogram} alt="J&P" className="h-24 md:h-32 w-auto mx-auto mb-6 drop-shadow-sm" />

        {/* Names */}
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

        {/* Countdown blending in */}
        <div className="mt-8">
          <CountdownSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
