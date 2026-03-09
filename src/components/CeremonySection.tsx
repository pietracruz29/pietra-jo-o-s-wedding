import PalmDivider from "./PalmDivider";

const CeremonySection = () => {
  return (
    <>
      <PalmDivider />
      <section id="cerimonia" className="py-16 bg-background">
        <div className="wedding-container text-center">
          <h2 className="section-title mb-2">Localização</h2>
          <p className="section-subtitle mb-10">Cerimônia e Recepção</p>

          <div className="bg-card rounded-sm p-8 md:p-12 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Frida Haus
            </h3>
            <p className="text-muted-foreground font-light mb-1">
              São José, Santa Catarina
            </p>
            <p className="text-muted-foreground font-light mb-6">
              Sábado, 25 de julho de 2026 — às 15h
            </p>

            <div className="w-16 h-px bg-secondary mx-auto mb-6" />

            <a
              href="https://maps.app.goo.gl/12Jws5f44iz87QNq8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wedding"
            >
              Como Chegar
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CeremonySection;
