import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Procedures", href: "#sop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
            <span className="font-display text-accent-foreground font-bold text-lg">H</span>
          </div>
          <div>
            <span className="font-display text-lg font-semibold text-primary-foreground tracking-wide">
              Hypia
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-light">
              Oil & Gas Limited
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body font-medium text-slate-light hover:text-gold transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-gold text-accent-foreground text-sm font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            Request FCO
          </a>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-gold/20 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-body text-slate-light hover:text-gold transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 px-5 py-2 bg-gold text-accent-foreground text-sm font-semibold rounded text-center"
          >
            Request FCO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
