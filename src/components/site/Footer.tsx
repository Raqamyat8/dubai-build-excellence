import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { CONTACT, IMG } from "@/lib/site-data";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink text-bone">
      <div className="container-x py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={IMG.logo} alt="HBC" className="h-12 w-12 rounded-sm bg-white p-1 object-contain" />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-[0.2em]">HIGH BEAM</div>
                <div className="text-[10px] tracking-[0.28em] opacity-60">CONTRACTING</div>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-bone/70 max-w-md">
              {t(
                "Building contracting and construction expertise, delivering exceptional residential, villa and commercial projects across the UAE.",
                "خبرة في المقاولات العامة والإنشاءات، وتنفيذ مشاريع سكنية وفيلات وتجارية استثنائية في دولة الإمارات."
              )}
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-bone/50">{t("Explore", "استكشف")}</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li><Link to="/about" className="hover:text-accent transition-colors">{t("About", "من نحن")}</Link></li>
              <li><Link to="/expertise" className="hover:text-accent transition-colors">{t("Expertise", "الخبرات")}</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">{t("Projects", "المشاريع")}</Link></li>
              <li><Link to="/quality" className="hover:text-accent transition-colors">{t("Quality & Safety", "الجودة والسلامة")}</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t("Contact", "اتصل بنا")}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-bone/50">{t("Contact", "تواصل")}</div>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/80">
              <li>{t(CONTACT.address.en, CONTACT.address.ar)}</li>
              <li><a href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} className="hover:text-accent">{CONTACT.phone}</a></li>
              <li><a href={CONTACT.whatsappLink} className="hover:text-accent">WhatsApp {CONTACT.whatsapp}</a></li>
              <li><a href={`https://${CONTACT.website}`} className="hover:text-accent">{CONTACT.website}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-bone/10 pt-6 text-[12px] text-bone/50">
          <div>© {new Date().getFullYear()} High Beam Contracting. {t("All rights reserved.", "جميع الحقوق محفوظة.")}</div>
          <div className="tracking-[0.2em] uppercase">{t("Building Excellence · Delivering Distinction", "نبني التميز · نحقق التفرد")}</div>
        </div>
      </div>
    </footer>
  );
}
