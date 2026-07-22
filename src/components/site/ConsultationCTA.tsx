import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { CONTACT } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function ConsultationCTA() {
  const { t } = useLang();
  return (
    <section className="bg-ink text-bone">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <div className="eyebrow text-bone/50">{t("Start a Project", "ابدأ مشروعاً")}</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] max-w-4xl">
            {t("Have a project in mind?", "هل لديك مشروع في ذهنك؟")}
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 max-w-xl text-lg text-bone/70 leading-relaxed">
            {t(
              "Let's discuss how High Beam Contracting can help bring your vision to life.",
              "دعنا نناقش كيف يمكن لهاي بيم للمقاولات المساهمة في تحقيق رؤيتك."
            )}
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/consultation" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-[12px] font-semibold tracking-widest uppercase hover:bg-bone hover:text-ink transition-colors">
              {t("Request a Consultation", "اطلب استشارة")}
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-bone/30 px-7 py-4 text-[12px] font-semibold tracking-widest uppercase hover:bg-bone hover:text-ink transition-colors">
              {t("Contact Us", "اتصل بنا")}
            </Link>
            <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-bone/30 px-7 py-4 text-[12px] font-semibold tracking-widest uppercase hover:bg-[#25D366] hover:border-[#25D366] transition-colors">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
