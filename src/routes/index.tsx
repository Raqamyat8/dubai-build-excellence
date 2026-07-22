import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { IMG, PROJECTS, REVIEWS, GOOGLE_REVIEW_URL } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "High Beam Contracting | Building & Construction Company in Dubai" },
      { name: "description", content: "Dubai-based building contracting and construction company delivering residential, villa, commercial and building projects with quality and precision." },
      { property: "og:title", content: "High Beam Contracting | Dubai" },
      { property: "og:description", content: "Building excellence. Delivering distinction. Villa, residential, commercial construction across the UAE." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useLang();
  const services = [
    { en: "Luxury Villa Construction", ar: "بناء الفلل الفاخرة", num: "01" },
    { en: "Residential Buildings", ar: "المباني السكنية", num: "02" },
    { en: "Commercial Buildings", ar: "المباني التجارية", num: "03" },
    { en: "Building Contracting", ar: "المقاولات العامة", num: "04" },
    { en: "Engineering & Project Execution", ar: "الهندسة وتنفيذ المشاريع", num: "05" },
    { en: "High-End Finishing Works", ar: "أعمال التشطيبات الراقية", num: "06" },
  ];

  const values = [
    { en: "Quality", ar: "الجودة", desc: { en: "Uncompromising standards across every project phase.", ar: "معايير لا تقبل التنازل عبر كل مرحلة من المشروع." } },
    { en: "Client Focus", ar: "التركيز على العميل", desc: { en: "Long-term relationships built on trust and transparency.", ar: "علاقات طويلة الأمد مبنية على الثقة والشفافية." } },
    { en: "Integrity", ar: "النزاهة", desc: { en: "Honest, principled decisions from concept to handover.", ar: "قرارات صادقة ومبدئية من التصور حتى التسليم." } },
    { en: "Safety", ar: "السلامة", desc: { en: "Rigorous on-site safety culture and controlled execution.", ar: "ثقافة سلامة صارمة في الموقع وتنفيذ منضبط." } },
    { en: "Timely Delivery", ar: "التسليم في الوقت", desc: { en: "Disciplined planning that respects agreed milestones.", ar: "تخطيط منضبط يحترم المعالم المتفق عليها." } },
    { en: "Craftsmanship", ar: "الحرفية", desc: { en: "Attention to material, detail and finishing quality.", ar: "الاهتمام بالمواد والتفاصيل وجودة التشطيب." } },
  ];

  const process = [
    { n: "01", en: "Consultation", ar: "الاستشارة" },
    { n: "02", en: "Planning & Coordination", ar: "التخطيط والتنسيق" },
    { n: "03", en: "Execution", ar: "التنفيذ" },
    { n: "04", en: "Quality Control", ar: "مراقبة الجودة" },
    { n: "05", en: "Handover", ar: "التسليم" },
  ];

  const featured = PROJECTS.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-white">
        <img
          src={IMG.hero}
          alt="Contemporary villa built by High Beam Contracting"
          className="absolute inset-0 h-full w-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        <div className="relative z-10 container-x flex h-full flex-col justify-end pb-20 md:pb-28">
          <Reveal>
            <div className="text-[11px] font-semibold tracking-[0.32em] opacity-90">
              {t("HIGH BEAM CONTRACTING · DUBAI, UAE", "هاي بيم للمقاولات · دبي، الإمارات")}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] font-light tracking-tight">
              {t("Building Excellence.", "نبني التميّز.")}
              <br />
              <span className="italic font-extralight opacity-90">{t("Delivering Distinction.", "نحقق التفرّد.")}</span>
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/80">
              {t(
                "Building contracting and construction expertise shaped by quality, precision and a commitment to delivering exceptional spaces.",
                "خبرة في المقاولات والإنشاءات مبنية على الجودة والدقة والالتزام بتنفيذ مساحات استثنائية."
              )}
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 bg-white text-ink px-6 py-4 text-[12px] font-semibold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors">
                {t("Explore Our Projects", "استكشف مشاريعنا")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link to="/consultation" className="inline-flex items-center gap-2 border border-white/50 px-6 py-4 text-[12px] font-semibold tracking-widest uppercase hover:bg-white hover:text-ink transition-colors">
                {t("Start Your Project", "ابدأ مشروعك")}
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] tracking-[0.3em] uppercase">{t("Scroll", "مرّر")}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="container-x py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="eyebrow">{t("Company Snapshot", "لمحة عن الشركة")}</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-light leading-tight tracking-tight">
              {t("Built on Quality.", "مبنية على الجودة.")}
              <br />
              <span className="italic font-extralight">{t("Driven by Excellence.", "مدفوعة بالتميّز.")}</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:pt-6" delay={150}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(
                "Established in 2017 and headquartered in Dubai, High Beam Contracting is a building contracting and construction company delivering luxury villas, residential and commercial buildings across the UAE.",
                "تأسست عام 2017 ومقرها دبي، هاي بيم للمقاولات شركة متخصصة في المقاولات والإنشاءات، تنفّذ فلل فاخرة ومبانٍ سكنية وتجارية في مختلف أنحاء الإمارات."
              )}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t(
                "Every project is executed with a disciplined focus on craftsmanship, safety and timely delivery — the foundation of the long-term relationships we build with our clients and consultants.",
                "يُنفَّذ كل مشروع بتركيز منضبط على الحرفية والسلامة والتسليم في الوقت المحدد — وهي أساس العلاقات طويلة الأمد التي نبنيها مع عملائنا ومستشارينا."
              )}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-light">2017</div>
                <div className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">{t("Established", "تأسست")}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light">Dubai</div>
                <div className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">{t("Headquarters", "المقر")}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light">UAE</div>
                <div className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">{t("Coverage", "التغطية")}</div>
              </div>
            </div>

            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
              {t("Discover Our Story", "اكتشف قصتنا")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-secondary">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <div className="eyebrow">{t("Expertise", "الخبرات")}</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight max-w-2xl">
                {t("Disciplines shaped by architectural rigor.", "تخصصات صاغتها الدقة المعمارية.")}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <Link to="/expertise" className="text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 inline-flex items-center gap-2 hover:text-accent hover:border-accent">
                {t("All Expertise", "جميع الخبرات")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 60} className="bg-secondary">
                <div className="group p-8 md:p-10 min-h-[220px] flex flex-col justify-between hover:bg-background transition-colors cursor-default">
                  <div className="text-xs tracking-widest text-accent">{s.num}</div>
                  <div>
                    <h3 className="text-2xl font-light leading-snug">{t(s.en, s.ar)}</h3>
                    <div className="mt-4 text-xs tracking-widest uppercase text-muted-foreground group-hover:text-accent transition-colors inline-flex items-center gap-2">
                      {t("Learn more", "اعرف المزيد")} <ArrowRight className="h-3 w-3 rtl:rotate-180" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-x py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div className="eyebrow">{t("Featured Projects", "مشاريع مختارة")}</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight max-w-2xl">
              {t("Selected work across the UAE.", "أعمال مختارة عبر الإمارات.")}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/projects" className="text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 inline-flex items-center gap-2 hover:text-accent hover:border-accent">
              {t("View All Projects", "جميع المشاريع")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <Link to="/projects/$id" params={{ id: p.id }} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={p.image}
                    alt={p.title[lang]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 start-4 bg-background/90 text-[10px] tracking-widest uppercase px-3 py-1.5">
                    {p.typeLabel[lang]}
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight">{p.title[lang]}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{p.location[lang]}</div>
                  </div>
                  <div className="mt-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground max-w-lg">{p.summary[lang]}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink text-bone">
        <div className="container-x py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <div className="eyebrow text-bone/50">{t("Why HBC", "لماذا HBC")}</div>
              <h2 className="mt-5 text-4xl md:text-5xl font-light leading-tight">
                {t("A partner defined by principles.", "شريك تحكمه المبادئ.")}
              </h2>
            </Reveal>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {values.map((v, i) => (
                <Reveal key={v.en} delay={i * 80}>
                  <div className="text-xs tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-2xl font-light">{t(v.en, v.ar)}</h3>
                  <p className="mt-3 text-bone/70 leading-relaxed">{t(v.desc.en, v.desc.ar)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24 md:py-36">
        <Reveal>
          <div className="eyebrow">{t("Our Process", "منهجيتنا")}</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight max-w-3xl">
            {t("Five disciplined stages, from concept to keys.", "خمس مراحل منضبطة، من الفكرة حتى تسليم المفاتيح.")}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="bg-background">
              <div className="p-8 md:p-8 min-h-[200px] flex flex-col justify-between">
                <div className="text-accent text-sm tracking-widest">{step.n}</div>
                <h3 className="text-xl font-light mt-8">{t(step.en, step.ar)}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <div className="eyebrow">{t("Client Voices", "آراء العملاء")}</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight max-w-2xl">
                {t("Trusted by clients across Dubai.", "موثوقون من قِبَل عملاء في دبي.")}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 inline-flex items-center gap-2 hover:text-accent hover:border-accent">
                {t("Review us on Google", "قيّمنا على Google")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <figure className="bg-background p-8 md:p-10 border border-border">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-xl md:text-2xl font-light leading-relaxed">
                    "{t(r.text.en, r.text.ar)}"
                  </blockquote>
                  <figcaption className="mt-8 text-sm tracking-wider">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-muted-foreground"> · Google Review</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
