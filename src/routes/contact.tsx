import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACT, IMG } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "./about";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | High Beam Contracting" },
      { name: "description", content: "Contact High Beam Contracting in Dubai — phone, WhatsApp, email or in person at our Business Bay office." },
      { property: "og:title", content: "Contact HBC" },
      { property: "og:description", content: "Get in touch with our team in Dubai to discuss your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("Contact", "اتصل بنا")}
        title={t("Let's start a conversation.", "لنبدأ حواراً.")}
        image={IMG.heroAlt}
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow">{t("Reach Us", "تواصل معنا")}</div>
            <h2 className="mt-5 text-3xl md:text-4xl font-light">{t("Speak with our team directly.", "تواصل مع فريقنا مباشرة.")}</h2>

            <ul className="mt-10 space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">{t("Dubai Office", "مكتب دبي")}</div>
                  <div className="text-muted-foreground">{t(CONTACT.address.en, CONTACT.address.ar)}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} className="hover:text-accent">{CONTACT.phone}</a>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp {CONTACT.whatsapp}</a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <a href={`https://${CONTACT.website}`} className="hover:text-accent">{CONTACT.website}</a>
              </li>
            </ul>

            <div className="mt-10 aspect-[4/3] w-full bg-muted overflow-hidden">
              <iframe
                title="HBC Dubai Location"
                src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
                className="h-full w-full grayscale contrast-110"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function ContactForm() {
  const { t } = useLang();
  return (
    <form
      className="bg-background border border-border p-8 md:p-10 space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert(t("Thank you — we'll be in touch shortly.", "شكراً لك — سنتواصل معك قريباً."));
        (e.target as HTMLFormElement).reset();
      }}
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label={t("Full Name", "الاسم الكامل")} name="name" required />
        <Field label={t("Email", "البريد الإلكتروني")} name="email" type="email" required />
        <Field label={t("Phone", "الهاتف")} name="phone" type="tel" />
        <Field label={t("Project Location", "موقع المشروع")} name="location" />
      </div>

      <div>
        <label className="eyebrow block mb-2">{t("Project Type", "نوع المشروع")}</label>
        <select name="type" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent">
          <option>{t("Luxury Villa", "فيلا فاخرة")}</option>
          <option>{t("Residential Building", "مبنى سكني")}</option>
          <option>{t("Commercial Building", "مبنى تجاري")}</option>
          <option>{t("Other", "أخرى")}</option>
        </select>
      </div>

      <div>
        <label className="eyebrow block mb-2">{t("Message", "رسالتك")}</label>
        <textarea name="message" rows={5} className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent resize-none" />
      </div>

      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 text-[12px] font-semibold tracking-widest uppercase hover:bg-ink hover:text-bone transition-colors">
        {t("Send Inquiry", "أرسل الاستفسار")}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent"
      />
    </div>
  );
}
