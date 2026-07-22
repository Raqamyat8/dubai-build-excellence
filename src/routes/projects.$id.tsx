import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title.en} | HBC Projects` },
        { name: "description", content: p.summary.en },
        { property: "og:title", content: `${p.title.en} | High Beam Contracting` },
        { property: "og:description", content: p.summary.en },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 pb-24 container-x">
      <h1 className="text-3xl">Project not found</h1>
      <Link to="/projects" className="mt-4 inline-block underline">Back to projects</Link>
    </div>
  ),
  component: Detail,
});

function Detail() {
  const { project } = Route.useLoaderData();
  const { t, lang } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const related = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden text-white">
        <img src={project.image} alt={project.title[lang]} className="absolute inset-0 h-full w-full object-cover slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
        <div className="relative z-10 container-x flex h-full flex-col justify-end pb-16 pt-32">
          <Reveal>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase opacity-80 hover:opacity-100">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("All Projects", "جميع المشاريع")}
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] font-light">{project.title[lang]}</h1>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div><span className="opacity-60 uppercase tracking-widest text-[10px]">{t("Location", "الموقع")}</span><div className="mt-1">{project.location[lang]}</div></div>
              <div><span className="opacity-60 uppercase tracking-widest text-[10px]">{t("Type", "النوع")}</span><div className="mt-1">{project.typeLabel[lang]}</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="eyebrow">{t("Overview", "نظرة عامة")}</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={120}>
            <p className="text-2xl md:text-3xl font-light leading-snug">{project.summary[lang]}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="eyebrow">{t("Scope of Work", "نطاق العمل")}</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={120}>
            <ul className="divide-y divide-border border-y border-border">
              {project.scope[lang].map((s, i) => (
                <li key={i} className="py-5 flex items-baseline gap-6">
                  <span className="text-accent text-xs tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-x py-24">
          <Reveal>
            <div className="eyebrow">{t("Gallery", "معرض الصور")}</div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={i} delay={i * 80}>
                <button onClick={() => setLightbox(src)} className="block w-full aspect-[4/3] overflow-hidden bg-muted">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-x py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-light">{t("Related Projects", "مشاريع ذات صلة")}</h2>
          <Link to="/projects" className="text-sm tracking-widest uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent">
            {t("All Projects", "جميع المشاريع")}
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {related.map((p) => (
            <Link to="/projects/$id" params={{ id: p.id }} key={p.id} className="group block">
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <img src={p.image} alt={p.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl font-light">{p.title[lang]}</h3>
              <div className="text-sm text-muted-foreground">{p.location[lang]}</div>
            </Link>
          ))}
        </div>
      </section>

      <ConsultationCTA />

      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute top-6 end-6 text-white h-10 w-10 flex items-center justify-center border border-white/30 hover:bg-white/10" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </>
  );
}

// Direction icon helper for RTL
void ArrowRight;
