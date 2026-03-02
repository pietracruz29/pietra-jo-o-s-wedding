import aquarela from "@/assets/aquarela-venue.png";
import namesLogo from "@/assets/names-logo.png";

const HeroSection = () => {
  return (
    <section id="topo" className="relative min-h-screen flex flex-col items-center justify-center bg-cream-light">
      {/* Watercolor cover */}
      <div className="w-full max-w-5xl mx-auto px-4 pt-20">
        <img
          src={aquarela}
          alt="Aquarela do local da cerimônia"
          className="w-full h-auto"
        />
      </div>

      {/* Names */}
      <div className="flex flex-col items-center -mt-4 md:-mt-8 pb-8">
        <img
          src={namesLogo}
          alt="João & Pietra"
          className="w-64 md:w-96 h-auto mb-6"
        />
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wider">
          25 de julho de 2026
        </p>
        <p className="text-base text-muted-foreground font-light mt-1">
          Florianópolis, Brasil
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
