import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { IMG } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { PageHero } from "./about";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise | High Beam Contracting" },
      { name: "description", content: "Our disciplines: luxury villas, residential and commercial buildings, engineering and project execution." },
      { property: "og:title", content: "Expertise | HBC" },
      { property: "og:description", content: "Luxury villas, residential and commercial construction across the UAE." },
    ],
  }),
  component: Expertise,
});

function Expertise() {
  const { t } = useLang();
  const items = [
    { en: "Luxury Villa Construction", ar: "بناء الفلل الفاخرة", desc: { en: "Bespoke residences designed and delivered with architectural precision.", ar: "مساكن مُصمَّمة خصيصاً ومُنفَّذة بدقة معمارية." } },
    { en: "Residential Buildings", ar: "المباني السكنية", desc: { en: "Contemporary residential buildings and mid-rise developments.", ar: "مبانٍ سكنية معاصرة وتطويرات متوسطة الارتفاع." } },
    { en: "Commercial Buildings", ar: "المباني التجارية", desc: { en: "Offices, showrooms and mixed-use developments engineered to last.", ar: "مكاتب وصالات عرض ومشاريع متعددة الاستخدامات مصممة لتدوم." } },
    { en: "Building Contracting", ar: "المقاولات العامة", desc: { en: "Main contracting services from mobilization through handover.", ar: "خدمات المقاولات الرئيسية من التعبئة حتى التسليم." } },
    { en: "Engineering & Project Execution", ar: "الهندسة وتنفيذ المشاريع", desc: { en: "Structural, MEP and site coordination executed to specification.", ar: "التنسيق الإنشائي والكهروميكانيكي والميداني حسب المواصفات." } },
    { en: "High-End Finishing Works", ar: "أعمال التشطيبات الراقية", desc: { en: "Interior finishing, joinery, stonework and architectural detailing.", ar: "التشطيبات الداخلية والنجارة والأحجار والتفاصيل المعمارية." } },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("Expertise", "الخبرات")}
        title={t("Disciplines shaped by architectural rigor.", "تخصصات صاغتها الدقة المعمارية.")}
        image={IMG.hero}
      />
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.en} delay={i * 60} className="bg-background">
              <div className="p-10 min-h-[280px] flex flex-col justify-between hover:bg-secondary transition-colors">
                <div className="text-accent text-xs tracking-widest">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-2xl font-light">{t(s.en, s.ar)}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{t(s.desc.en, s.desc.ar)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
