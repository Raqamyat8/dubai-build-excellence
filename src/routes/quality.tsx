import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { IMG } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { PageHero } from "./about";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Safety | High Beam Contracting" },
      { name: "description", content: "Our commitment to quality standards, on-site safety and disciplined project execution." },
      { property: "og:title", content: "Quality & Safety | HBC" },
      { property: "og:description", content: "Disciplined execution, safety-first culture and quality control at every stage." },
    ],
  }),
  component: Quality,
});

function Quality() {
  const { t } = useLang();
  const pillars = [
    { en: "Quality Standards", ar: "معايير الجودة", desc: { en: "Documented specifications, inspections and material controls across every project stage.", ar: "مواصفات موثقة وعمليات تفتيش ومراقبة للمواد في كل مرحلة من المشروع." } },
    { en: "Site Safety", ar: "السلامة في الموقع", desc: { en: "Structured HSE practices, PPE compliance and daily site briefings.", ar: "ممارسات صحة وسلامة منظمة والالتزام بمعدات الوقاية وجلسات إحاطة يومية." } },
    { en: "Project Management", ar: "إدارة المشاريع", desc: { en: "Milestone-driven planning with transparent reporting to clients and consultants.", ar: "تخطيط قائم على المعالم مع تقارير شفافة للعملاء والاستشاريين." } },
    { en: "Attention to Detail", ar: "الدقة في التفاصيل", desc: { en: "Rigorous finishing standards and hand-off quality reviews before handover.", ar: "معايير تشطيب صارمة ومراجعات جودة قبل التسليم." } },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("Quality & Safety", "الجودة والسلامة")}
        title={t("Discipline is our default.", "الانضباط هو معيارنا.")}
        image={IMG.hero}
      />
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {pillars.map((p, i) => (
            <Reveal key={p.en} delay={i * 80}>
              <div className="text-accent text-xs tracking-widest">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 text-3xl font-light">{t(p.en, p.ar)}</h3>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{t(p.desc.en, p.desc.ar)}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
