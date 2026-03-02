import PalmDivider from "./PalmDivider";
import dressCodeImg from "@/assets/dress-code.jpeg";

const DressCodeSection = () => {
  return (
    <>
      <PalmDivider />
      <section id="traje" className="py-16 bg-background">
        <div className="wedding-container text-center">
          <h2 className="section-title mb-4">Traje</h2>
          <p className="section-subtitle mb-10">Esporte Fino</p>

          <div className="max-w-2xl mx-auto">
            <img
              src={dressCodeImg}
              alt="Referência de trajes - Esporte Fino"
              className="w-full h-auto rounded-sm mb-8"
            />

            <div className="bg-card rounded-sm p-8 border border-border">
              <p className="text-foreground/80 font-light leading-relaxed mb-4">
                O nosso casamento pede um traje <strong className="font-medium text-primary">esporte fino</strong>. 
                Gostaríamos de um evento colorido e vibrante!
              </p>
              <p className="text-foreground/80 font-light leading-relaxed mb-4">
                Apostem em <strong className="font-medium text-primary">cores alegres e vibrantes</strong> — 
                tons de laranja, rosa, verde, coral, amarelo… Quanto mais cor, melhor!
              </p>
              <p className="text-foreground/70 font-light leading-relaxed text-sm">
                Pedimos gentilmente que evitem a cor preta e o branco. 
                Vamos celebrar com a energia e as cores que esse dia merece! 🌿
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DressCodeSection;
