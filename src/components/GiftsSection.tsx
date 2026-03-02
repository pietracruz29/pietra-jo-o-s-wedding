import PalmDivider from "./PalmDivider";

const GiftsSection = () => {
  return (
    <>
      <PalmDivider />
      <section id="presentes" className="py-16 bg-background">
        <div className="wedding-container text-center">
          <h2 className="section-title mb-4">Lista de Presentes</h2>
          <p className="section-subtitle mb-10">
            A sua presença é o nosso maior presente, mas se desejar nos presentear...
          </p>

          <div className="bg-card rounded-sm p-8 md:p-12 border border-border max-w-2xl mx-auto">
            <p className="text-foreground/80 font-light leading-relaxed mb-8">
              Preparamos uma lista de presentes com muito carinho. 
              Clique no botão abaixo para acessar e escolher o seu.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wedding-filled"
            >
              Ver Lista de Presentes
            </a>

            <p className="text-muted-foreground text-xs mt-6 font-light">
              Você será redirecionado para o site da lista
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftsSection;
