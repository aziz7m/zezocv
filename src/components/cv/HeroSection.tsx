import { motion } from "framer-motion";
import { ArrowDownRight, Download, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cvData, Language } from "@/data/cvData";
import profileImage from "@/assets/profile.jpg";

interface HeroSectionProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const HeroSection = ({ language, onLanguageChange }: HeroSectionProps) => {
  const isArabic = language === "ar";
  const data = cvData.personal;

  return (
    <section className="hero-section relative overflow-hidden">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container mx-auto px-5 py-6 md:px-8 md:py-8 relative z-10">
        <div className="hero-topbar no-print">
          <span className="brand-mark">Z7Z<span>.</span></span>
          <div className="lang-switcher" role="group" aria-label="Language">
            <button onClick={() => onLanguageChange("en")} className={language === "en" ? "active" : ""}>EN</button>
            <button onClick={() => onLanguageChange("ar")} className={language === "ar" ? "active" : ""}>عربي</button>
          </div>
        </div>

        <div className={`hero-layout ${isArabic ? "hero-layout-ar" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="hero-copy"
          >
            <p className={`eyebrow ${isArabic ? "font-arabic" : ""}`}>
              <span className="eyebrow-dot" />
              {isArabic ? "ملف مهني · 2024 — حتى الآن" : "Technical profile · 2024 — Present"}
            </p>
            <h1 className={isArabic ? "font-arabic" : ""}>{data.name[language]}</h1>
            <p className={`hero-role ${isArabic ? "font-arabic" : ""}`}>{data.title[language]}</p>
            <p className={`hero-intro ${isArabic ? "font-arabic" : ""}`}>
              {isArabic
                ? "أبني تطبيقات متكاملة من الفكرة الأولى إلى النشر والدعم، مع تركيز عملي على ASP.NET Core والأنظمة الموثوقة."
                : "I build complete digital systems from first idea to deployment, with a practical focus on ASP.NET Core and reliable technology."}
            </p>

            <div className={`hero-actions no-print ${isArabic ? "hero-actions-ar" : ""}`}>
              <button onClick={() => window.print()} className="primary-action">
                <Download className="w-4 h-4" />
                {isArabic ? "تحميل السيرة الذاتية" : "Download CV"}
              </button>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-action">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <div className={`hero-contact ${isArabic ? "hero-contact-ar" : ""}`}>
              <a href={`mailto:${data.email}`}><Mail className="w-4 h-4" />{data.email}</a>
              <a href={`tel:${data.phone}`}><Phone className="w-4 h-4" /><span dir="ltr">{data.phone}</span></a>
              <span><MapPin className="w-4 h-4" />{data.location[language]}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="hero-side"
          >
            <div className="portrait-frame">
              <img src={profileImage} alt={data.name[language]} />
              <span className="portrait-tag">FULL-STACK / IT</span>
            </div>
            <div className="hero-stats">
              <div><strong>25+</strong><span>{isArabic ? "سنة خبرة" : "years experience"}</span></div>
              <div><strong>200K+</strong><span>{isArabic ? "مستخدم وسجل" : "users & records"}</span></div>
              <div><strong>.NET</strong><span>{isArabic ? "التقنية الأساسية" : "core stack"}</span></div>
            </div>
          </motion.div>
        </div>

        <div className={`hero-stack ${isArabic ? "font-arabic" : ""}`}>
          <span>{isArabic ? "المجموعة التقنية" : "TECH STACK"}</span>
          {['ASP.NET Core', 'C#', 'React', 'JavaScript', 'SQL', 'REST APIs', 'CCTV'].map((item) => <b key={item}>{item}</b>)}
          <ArrowDownRight className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
