import hero1 from "@/assets/IMG_8840.jpeg.asset.json";
import hero2 from "@/assets/IMG_8862.png.asset.json";
import p1 from "@/assets/IMG_8839.jpeg.asset.json";
import p2 from "@/assets/IMG_8840.jpeg.asset.json";
import p3 from "@/assets/IMG_8841.jpeg.asset.json";
import p4 from "@/assets/IMG_8845.jpeg.asset.json";
import p5 from "@/assets/IMG_8850.jpeg.asset.json";
import p6 from "@/assets/IMG_8861.png.asset.json";
import p7 from "@/assets/IMG_8862.png.asset.json";
import p8 from "@/assets/IMG_8864.png.asset.json";
import p9 from "@/assets/IMG_8865.png.asset.json";
import logo from "@/assets/IMG_8859.jpeg.asset.json";

export const IMG = {
  hero: hero1.url,
  heroAlt: hero2.url,
  logo: logo.url,
};

export type Project = {
  id: string;
  title: { en: string; ar: string };
  location: { en: string; ar: string };
  type: "residential" | "villas" | "commercial" | "other";
  typeLabel: { en: string; ar: string };
  summary: { en: string; ar: string };
  image: string;
  gallery: string[];
  scope: { en: string[]; ar: string[] };
};

export const PROJECTS: Project[] = [
  {
    id: "contemporary-villa-nad-al-sheba",
    title: { en: "Contemporary Villa", ar: "فيلا معاصرة" },
    location: { en: "Nad Al Sheba, Dubai", ar: "ند الشبا، دبي" },
    type: "villas",
    typeLabel: { en: "Luxury Villa", ar: "فيلا فاخرة" },
    summary: {
      en: "A precision-built modern residence blending white volumes, timber screens and full-height glazing.",
      ar: "مسكن حديث بُني بدقة يجمع بين الكتل البيضاء والشاشات الخشبية والزجاج الممتد من الأرض إلى السقف.",
    },
    image: p2.url,
    gallery: [p2.url, p3.url, p9.url, p7.url],
    scope: {
      en: ["Main contracting", "Structural works", "Facade & cladding", "MEP coordination", "Finishing & handover"],
      ar: ["المقاولات الرئيسية", "الأعمال الإنشائية", "الواجهات والكسوة", "تنسيق الأعمال الكهروميكانيكية", "التشطيبات والتسليم"],
    },
  },
  {
    id: "garden-residence-al-barsha",
    title: { en: "Garden Residence", ar: "المسكن الحديقة" },
    location: { en: "Al Barsha, Dubai", ar: "البرشاء، دبي" },
    type: "villas",
    typeLabel: { en: "Private Villa", ar: "فيلا خاصة" },
    summary: {
      en: "A serene family villa with landscaped gardens, wide glazing and warm timber accents.",
      ar: "فيلا عائلية هادئة بحدائق منسقة وواجهات زجاجية واسعة ولمسات خشبية دافئة.",
    },
    image: p1.url,
    gallery: [p1.url, p3.url, p9.url],
    scope: {
      en: ["Main contracting", "Landscape coordination", "Finishing works"],
      ar: ["المقاولات الرئيسية", "تنسيق الحدائق", "أعمال التشطيبات"],
    },
  },
  {
    id: "signature-villa-jumeirah",
    title: { en: "Signature Villa", ar: "فيلا سيغنتشر" },
    location: { en: "Jumeirah, Dubai", ar: "جميرا، دبي" },
    type: "villas",
    typeLabel: { en: "Luxury Villa", ar: "فيلا فاخرة" },
    summary: {
      en: "An evening-lit residence with double-height entry, curated stonework and sculpted lighting.",
      ar: "مسكن مضاء ليلاً بمدخل مزدوج الارتفاع وأعمال حجرية منتقاة وإضاءة منحوتة.",
    },
    image: p4.url,
    gallery: [p4.url, p2.url, p9.url],
    scope: {
      en: ["Main contracting", "Stone & marble works", "Architectural lighting"],
      ar: ["المقاولات الرئيسية", "أعمال الحجر والرخام", "الإضاءة المعمارية"],
    },
  },
  {
    id: "residential-building-al-furjan",
    title: { en: "Residential Building", ar: "مبنى سكني" },
    location: { en: "Al Furjan, Dubai", ar: "الفرجان، دبي" },
    type: "residential",
    typeLabel: { en: "Residential Building", ar: "مبنى سكني" },
    summary: {
      en: "A contemporary apartment building with rhythmic balconies and refined material palette.",
      ar: "مبنى سكني معاصر بشرفات متناغمة ولوحة مواد راقية.",
    },
    image: p5.url,
    gallery: [p5.url, p6.url],
    scope: {
      en: ["Main contracting", "Facade works", "MEP installation"],
      ar: ["المقاولات الرئيسية", "أعمال الواجهات", "تركيبات الأعمال الكهروميكانيكية"],
    },
  },
  {
    id: "urban-residences-al-wasl",
    title: { en: "Urban Residences", ar: "مساكن حضرية" },
    location: { en: "Al Wasl, Dubai", ar: "الوصل، دبي" },
    type: "residential",
    typeLabel: { en: "Residential Building", ar: "مبنى سكني" },
    summary: {
      en: "Layered volumes, deep balconies and a refined stone-and-metal facade language.",
      ar: "كتل متدرجة وشرفات عميقة ولغة واجهة راقية من الحجر والمعدن.",
    },
    image: p7.url,
    gallery: [p7.url, p5.url, p6.url],
    scope: {
      en: ["Main contracting", "Structural works", "Finishing"],
      ar: ["المقاولات الرئيسية", "الأعمال الإنشائية", "التشطيبات"],
    },
  },
  {
    id: "clinic-building-umm-al-sheif",
    title: { en: "Healthcare Building", ar: "مبنى رعاية صحية" },
    location: { en: "Umm Al Sheif, Dubai", ar: "أم الشيف، دبي" },
    type: "commercial",
    typeLabel: { en: "Healthcare / Commercial", ar: "رعاية صحية / تجاري" },
    summary: {
      en: "A distinctive commercial building with timber-clad volumes and sculptural entry.",
      ar: "مبنى تجاري مميز بكتل مكسوة بالخشب ومدخل نحتي.",
    },
    image: p8.url,
    gallery: [p8.url, p6.url, p7.url],
    scope: {
      en: ["Main contracting", "Facade & cladding", "Interior fit-out"],
      ar: ["المقاولات الرئيسية", "الواجهات والكسوة", "التشطيبات الداخلية"],
    },
  },
  {
    id: "glass-house-jumeirah-park",
    title: { en: "Glass House", ar: "البيت الزجاجي" },
    location: { en: "Jumeirah Park, Dubai", ar: "جميرا بارك، دبي" },
    type: "villas",
    typeLabel: { en: "Luxury Villa", ar: "فيلا فاخرة" },
    summary: {
      en: "A sculptural villa defined by cantilevered glass volumes and a monolithic white base.",
      ar: "فيلا نحتية تتميز بكتل زجاجية بارزة وقاعدة بيضاء متجانسة.",
    },
    image: p7.url,
    gallery: [p7.url, p9.url, p2.url],
    scope: {
      en: ["Main contracting", "Structural works", "Glazing & finishing"],
      ar: ["المقاولات الرئيسية", "الأعمال الإنشائية", "الزجاج والتشطيبات"],
    },
  },
  {
    id: "palm-villa-al-khawaneej",
    title: { en: "Palm Villa", ar: "فيلا النخيل" },
    location: { en: "Al Khawaneej, Dubai", ar: "الخوانيج، دبي" },
    type: "villas",
    typeLabel: { en: "Private Villa", ar: "فيلا خاصة" },
    summary: {
      en: "A grounded family compound in warm neutrals, framed by mature landscaping.",
      ar: "مجمّع عائلي بألوان محايدة دافئة، محاط بمناظر طبيعية ناضجة.",
    },
    image: p9.url,
    gallery: [p9.url, p2.url, p1.url],
    scope: {
      en: ["Main contracting", "Landscape works", "Finishing"],
      ar: ["المقاولات الرئيسية", "أعمال المناظر الطبيعية", "التشطيبات"],
    },
  },
];

export const REVIEWS = [
  {
    name: "Jaffar Behzad",
    rating: 5,
    text: {
      en: "One of the best companies in Dubai, very cooperative and professional team, high quality works.",
      ar: "من أفضل الشركات في دبي، فريق متعاون ومحترف جداً، أعمال عالية الجودة.",
    },
  },
  {
    name: "Mohamed Al-Mansoor",
    rating: 5,
    text: {
      en: "They built my villa in Jumeirah Park. Their work is very precise and the final delivery is as per the drawings precisely.",
      ar: "قاموا ببناء فيلتي في جميرا بارك. عملهم دقيق جداً والتسليم النهائي مطابق للمخططات تماماً.",
    },
  },
];

export const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/RL9XyXSKJ9XXFG5d7?g_st=ic";

export const CONTACT = {
  phone: "+971 4 514 9348",
  whatsapp: "+971 4 514 9348",
  whatsappLink: "https://wa.me/97145149348",
  website: "highbeamcontracting.ae",
  address: {
    en: "International Business Tower, Business Bay, Dubai, UAE",
    ar: "برج الأعمال الدولي، الخليج التجاري، دبي، الإمارات العربية المتحدة",
  },
};
