import { useState } from "react";
import PalmDivider from "./PalmDivider";

interface Child {
  name: string;
  age: string;
}

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [hasPartner, setHasPartner] = useState(false);
  const [hasChildren, setHasChildren] = useState(false);
  const [children, setChildren] = useState<Child[]>([{ name: "", age: "" }]);
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const addChild = () => setChildren([...children, { name: "", age: "" }]);
  const removeChild = (i: number) => setChildren(children.filter((_, idx) => idx !== i));
  const updateChild = (i: number, field: keyof Child, value: string) => {
    const updated = [...children];
    updated[i][field] = value;
    setChildren(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PalmDivider />
        <section id="confirmacao" className="py-16 bg-background">
          <div className="wedding-container text-center">
            <h2 className="section-title mb-4">Obrigado!</h2>
            <p className="section-subtitle">
              {attending === "yes"
                ? "Estamos ansiosos para celebrar com você! 💛"
                : "Sentiremos sua falta, mas agradecemos o carinho! 🤍"}
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PalmDivider />
      <section id="confirmacao" className="py-16 bg-background">
        <div className="wedding-container text-center">
          <h2 className="section-title mb-4">Confirmação de Presença</h2>
          <p className="section-subtitle mb-10">
            Por favor, confirme até 25 de junho de 2026
          </p>

          <form onSubmit={handleSubmit} className="bg-card rounded-sm p-8 md:p-12 border border-border max-w-2xl mx-auto text-left">
            {/* Attendance */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-3 font-medium">
                Você poderá comparecer?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setAttending("yes")}
                  className={`flex-1 py-3 rounded-sm border text-sm tracking-wider uppercase transition-all ${
                    attending === "yes"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary"
                  }`}
                >
                  Confirmo presença
                </button>
                <button
                  type="button"
                  onClick={() => setAttending("no")}
                  className={`flex-1 py-3 rounded-sm border text-sm tracking-wider uppercase transition-all ${
                    attending === "no"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary"
                  }`}
                >
                  Não poderei comparecer
                </button>
              </div>
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2 font-medium">
                Seu nome completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-light focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Nome completo"
              />
            </div>

            {attending === "yes" && (
              <>
                {/* Partner */}
                <div className="mb-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPartner}
                      onChange={(e) => setHasPartner(e.target.checked)}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-foreground/80 font-light">Irei com meu parceiro(a)</span>
                  </label>
                  {hasPartner && (
                    <input
                      type="text"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      className="w-full mt-3 px-4 py-3 bg-background border border-border rounded-sm text-foreground font-light focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Nome completo do(a) parceiro(a)"
                    />
                  )}
                </div>

                {/* Children */}
                <div className="mb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasChildren}
                      onChange={(e) => setHasChildren(e.target.checked)}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-foreground/80 font-light">Levarei criança(s)</span>
                  </label>
                  {hasChildren && (
                    <div className="mt-4 space-y-3">
                      {children.map((child, i) => (
                        <div key={i} className="flex gap-3 items-end">
                          <div className="flex-1">
                            <input
                              type="text"
                              value={child.name}
                              onChange={(e) => updateChild(i, "name", e.target.value)}
                              className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-light focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="Nome da criança"
                            />
                          </div>
                          <div className="w-28">
                            <input
                              type="text"
                              value={child.age}
                              onChange={(e) => updateChild(i, "age", e.target.value)}
                              className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-light focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="Idade"
                            />
                          </div>
                          {children.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeChild(i)}
                              className="px-3 py-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addChild}
                        className="text-sm text-primary hover:text-burgundy-light transition-colors font-light tracking-wider"
                      >
                        + Adicionar outra criança
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!attending || !name.trim()}
              className="btn-wedding-filled w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Enviar Confirmação
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RSVPSection;
