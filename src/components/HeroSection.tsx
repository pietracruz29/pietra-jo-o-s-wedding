import aquarela from "@/assets/aquarela-venue.png";
import namesLogo from "@/assets/names-logo.png";
import monogram from "@/assets/monogram.png";
import CountdownSection from "./CountdownSection";

const HeroSection = () => {
  return (
    <section id="topo" className="relative flex flex-col items-center bg-cream-light overflow-hidden">
      {/* Aquarela at the top */}
      <div className="relative w-full flex justify-center">
        <img
          src={aquarela}
          alt=""
          className="w-full max-w-5xl h-auto opacity-70"
          aria-hidden="true"
        />
        {/* Bottom fade into content */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream-light to-transparent" />
        {/* Side fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-cream-light to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-cream-light to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream-light to-transparent" />
      </div>

      {/* Content below aquarela */}
      <div className="relative z-10 flex flex-col items-center w-full -mt-20">
        {/* Monogram */}
        <div className="pb-6">
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

        {/* Spacer */}
        <div className="h-16" />
      </div>
    </section>
  );
};

export default HeroSection;
