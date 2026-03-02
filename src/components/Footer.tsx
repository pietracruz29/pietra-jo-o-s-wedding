import monogram from "@/assets/monogram.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background text-center">
      <img src={monogram} alt="J&P" className="h-16 w-auto mx-auto mb-4 opacity-60" />
      <p className="text-muted-foreground font-light text-sm tracking-wider">
        João & Pietra — 25.07.2026
      </p>
    </footer>
  );
};

export default Footer;
