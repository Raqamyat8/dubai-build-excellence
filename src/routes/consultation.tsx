import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { IMG } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "./about";
import { ContactForm } from "./contact";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Request a Consultation | High Beam Contracting" },
      { name: "description", content: "Request a construction consultation with our Dubai-based team." },
      { property: "og:title", content: "Request a Consultation | HBC" },
      { property: "og:description", content: "Share your project brief with our team and we'll be in touch." },
    ],
  }),
  component: Consult,
});

function Consult() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("Consultation", "استشارة")}
        title={t("Tell us about your project.", "أخبرنا عن مشروعك.")}
        image={IMG.hero}
      />
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow">{t("How it works", "كيف تعمل")}</div>
            <h2 className="mt-5 text-3xl md:text-4xl font-light leading-tight">
              {t("From first conversation to construction handover.", "من الحوار الأول حتى تسليم البناء.")}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t(
                "Share a brief description of your project and preferred location. Our team will follow up to discuss scope, feasibility and next steps.",
                "شارك وصفاً موجزاً لمشروعك والموقع المفضّل. سيتواصل معك فريقنا لمناقشة النطاق والجدوى والخطوات التالية."
              )}
            </p>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
