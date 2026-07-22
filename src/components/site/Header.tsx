import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { IMG } from "@/lib/site-data";

const NAV = [
  { to: "/", en: "Home", ar: "الرئيسية" },
  { to: "/about", en: "About", ar: "من نحن" },
  { to: "/expertise", en: "Expertise", ar: "الخبرات" },
  { to: "/projects", en: "Projects", ar: "المشاريع" },
  { to: "/quality", en: "Quality & Safety", ar: "الجودة والسلامة" },
  { to: "/contact", en: "Contact", ar: "اتصل بنا" },
] as const;

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={IMG.logo} alt="High Beam Contracting" className="h-11 w-11 object-contain rounded-sm bg-white/95 p-1" />
          <div className={`hidden sm:flex flex-col leading-none ${solid ? "text-foreground" : "text-white"}`}>
            <span className="text-[13px] font-semibold tracking-[0.18em]">HIGH BEAM</span>
            <span className="text-[10px] tracking-[0.28em] opacity-70">CONTRACTING</span>
          </div>
        </Link>

        <nav className={`hidden lg:flex items-center gap-9 text-[13px] tracking-wide ${solid ? "text-foreground" : "text-white"}`}>
          {NAV.map((n) => {
            const active = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className="relative py-1 transition-opacity hover:opacity-70"
              >
                {t(n.en, n.ar)}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all ${active ? "w-full" : "w-0"}`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className={`hidden md:flex items-center text-[12px] tracking-widest ${solid ? "text-foreground" : "text-white"}`}>
            <button onClick={() => setLang("en")} className={`px-2 py-1 transition-opacity ${lang === "en" ? "opacity-100 font-semibold" : "opacity-50 hover:opacity-80"}`}>EN</button>
            <span className="opacity-30">|</span>
            <button onClick={() => setLang("ar")} className={`px-2 py-1 transition-opacity ${lang === "ar" ? "opacity-100 font-semibold" : "opacity-50 hover:opacity-80"}`}>AR</button>
          </div>

          <Link
            to="/consultation"
            className="hidden md:inline-flex items-center gap-2 rounded-sm bg-accent text-accent-foreground px-4 py-2.5 text-[12px] font-semibold tracking-wider uppercase transition-all hover:bg-ink hover:text-bone"
          >
            {t("Start Your Project", "ابدأ مشروعك")}
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center ${solid ? "text-foreground" : "text-white"}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out bg-background ${
          open ? "max-h-[100vh] opacity-100 border-t border-border" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x py-8">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-2xl font-medium tracking-tight py-3 border-b border-border/60"
              >
                {t(n.en, n.ar)}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-2 text-sm tracking-widest">
            <button onClick={() => setLang("en")} className={`px-3 py-2 border ${lang === "en" ? "border-ink" : "border-border opacity-60"}`}>EN</button>
            <button onClick={() => setLang("ar")} className={`px-3 py-2 border ${lang === "ar" ? "border-ink" : "border-border opacity-60"}`}>AR</button>
          </div>
          <Link
            to="/consultation"
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-accent text-accent-foreground px-6 py-4 text-sm font-semibold tracking-wider uppercase"
          >
            {t("Start Your Project", "ابدأ مشروعك")}
          </Link>
        </div>
      </div>
    </header>
  );
}
