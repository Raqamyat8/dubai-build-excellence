import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { IMG, PROJECTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { PageHero } from "./about";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | High Beam Contracting" },
      { name: "description", content: "Selected residential, villa and commercial construction projects delivered by High Beam Contracting across the UAE." },
      { property: "og:title", content: "Projects | HBC" },
      { property: "og:description", content: "A curated portfolio of villa, residential and commercial construction across Dubai." },
    ],
  }),
  component: Projects,
});

const FILTERS = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "residential", en: "Residential", ar: "سكني" },
  { key: "villas", en: "Villas", ar: "فلل" },
  { key: "commercial", en: "Commercial", ar: "تجاري" },
  { key: "other", en: "Other", ar: "أخرى" },
] as const;

function Projects() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const items = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow={t("Projects", "المشاريع")}
        title={t("A portfolio of considered work.", "مجموعة أعمال مدروسة.")}
        image={IMG.heroAlt}
      />

      <section className="container-x py-16 md:py-24">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-[12px] tracking-widest uppercase transition-colors ${
                filter === f.key ? "bg-ink text-bone" : "hover:bg-secondary"
              }`}
            >
              {t(f.en, f.ar)}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <Link to="/projects/$id" params={{ id: p.id }} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <img src={p.image} alt={p.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                  <div className="absolute top-4 start-4 bg-background/90 text-[10px] tracking-widest uppercase px-3 py-1.5">
                    {p.typeLabel[lang]}
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight">{p.title[lang]}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{p.location[lang]}</div>
                  </div>
                  <ArrowRight className="mt-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
