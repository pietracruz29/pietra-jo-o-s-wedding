import PalmDivider from "./PalmDivider";
import dressCodeImg from "@/assets/dress-code-watercolor.png";

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
              className="w-full h-auto mb-8"
            />

            <div className="bg-card rounded-sm p-8 border border-border">
              <p className="text-foreground/80 font-light leading-relaxed">
                O nosso casamento pede um traje <strong className="font-medium text-primary">esporte fino</strong>. 
                Apenas pedimos gentilmente que evitem as cores preto e branco, e se possível, 
                apostem em <strong className="font-medium text-primary">cores alegres e vibrantes</strong> para esse dia!
              </p>
              <p className="text-foreground/70 font-light leading-relaxed text-sm mt-4">
                OBS: não esqueçam que estaremos no inverno ❄️
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DressCodeSection;
