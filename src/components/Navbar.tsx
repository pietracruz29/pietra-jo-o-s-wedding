import { useState, useEffect } from "react";
import monogram from "@/assets/monogram.png";

const navItems = [
  { label: "Localização", href: "#cerimonia" },
  { label: "Traje", href: "#traje" },
  { label: "Presentes", href: "#presentes" },
  { label: "Confirmação", href: "#confirmacao" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="wedding-container flex items-center justify-between py-3">
        <a href="#topo">
          <img src={monogram} alt="J&P" className="h-10 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile: simple horizontal scroll */}
        <ul className="flex md:hidden items-center gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[10px] tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
