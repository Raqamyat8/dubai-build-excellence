import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { IMG } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | High Beam Contracting" },
      { name: "description", content: "Dubai-based building contracting and construction company established in 2017." },
      { property: "og:title", content: "About High Beam Contracting" },
      { property: "og:description", content: "A Dubai-based construction company delivering excellence since 2017." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("About HBC", "عن HBC")}
        title={t("A construction partner built for the UAE.", "شريك إنشائي مصمم لدولة الإمارات.")}
        image={IMG.heroAlt}
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow">{t("Our Story", "قصتنا")}</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-light leading-tight">
              {t("Rooted in Dubai. Building across the UAE.", "متجذّرون في دبي. نبني في كل أنحاء الإمارات.")}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:pt-6" delay={150}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(
                "Established in 2017, High Beam Contracting is a building contracting and construction company headquartered in Dubai. We deliver luxury villas, residential buildings and commercial projects with a disciplined focus on quality and execution.",
                "تأسست عام 2017، هاي بيم للمقاولات شركة مقاولات وإنشاءات مقرّها دبي. نُنفّذ فللاً فاخرة ومبانٍ سكنية ومشاريع تجارية بتركيز منضبط على الجودة والتنفيذ."
              )}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t(
                "Our approach combines architectural rigor, engineering discipline and hands-on site management — ensuring every project reflects the ambition of the client and the standards of the UAE market.",
                "يجمع نهجنا بين الدقة المعمارية والانضباط الهندسي والإدارة الميدانية المباشرة — لضمان أن يعكس كل مشروع طموح العميل ومعايير السوق الإماراتي."
              )}
            </p>

            <Link to="/projects" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent">
              {t("See Our Projects", "شاهد مشاريعنا")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative h-[70svh] min-h-[500px] w-full overflow-hidden text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover slow-zoom" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 container-x flex h-full flex-col justify-end pb-16 md:pb-20 pt-32">
        <Reveal>
          <div className="text-[11px] font-semibold tracking-[0.32em] opacity-90">{eyebrow}</div>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-6 max-w-4xl text-[clamp(2rem,5.5vw,5rem)] leading-[1.02] font-light tracking-tight">{title}</h1>
        </Reveal>
      </div>
    </section>
  );
}
