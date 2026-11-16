import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./Brand";

const navItems = [
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "Méthode", href: "#methode" },
  { label: "L’agence", href: "#agence" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      setHidden(y > 280 && y > lastScroll.current && !menuOpen);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const pageRegions = document.querySelectorAll<HTMLElement>("main, .site-footer, .site-header");
    pageRegions.forEach(region => {
      if (menuOpen) region.setAttribute("inert", "");
      else region.removeAttribute("inert");
    });
    if (menuOpen) requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>("button")?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      }
      if (event.key === "Tab" && menuOpen && menuRef.current) {
        const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter(item => item.tabIndex !== -1);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      pageRegions.forEach(region => region.removeAttribute("inert"));
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
        <div className="nav-shell">
          <a className="brand-link" href="#accueil" aria-label="Desertcom — retour à l’accueil"><Brand /></a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-cta wipe-button" href="#contact"><span>Parlons de votre projet</span><ArrowUpRight size={17} aria-hidden="true" /></a>
          <button ref={triggerRef} className="menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}><Menu size={23} aria-hidden="true" /></button>
        </div>
      </header>
      <div ref={menuRef} className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <Brand />
          <button type="button" onClick={closeMenu} aria-label="Fermer le menu" tabIndex={menuOpen ? 0 : -1} autoFocus={menuOpen}><X size={25} aria-hidden="true" /></button>
        </div>
        <nav aria-label="Navigation mobile">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{index + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" /></a>
          ))}
        </nav>
        <a className="mobile-menu-cta" href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>Démarrer un projet <ArrowUpRight aria-hidden="true" /></a>
        <p>TECHNOLOGIE × MARKETING<br />DES IDÉES AU MOUVEMENT.</p>
      </div>
    </>
  );
}
