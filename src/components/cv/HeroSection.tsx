import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Download, Globe } from "lucide-react";
import { cvData, Language } from "@/data/cvData";
import profileImage from "@/assets/profile.jpg";

interface HeroSectionProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const HeroSection = ({ language, onLanguageChange }: HeroSectionProps) => {
  const isArabic = language === 'ar';
  const data = cvData.personal;

  const handleDownload = () => {
    window.print();
  };

  return (
    <section className="hero-section min-h-[60vh] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Language Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end gap-2 mb-8 no-print"
        >
          <button
            onClick={() => onLanguageChange('en')}
            className={`lang-toggle flex items-center gap-2 ${language === 'en' ? 'active' : ''}`}
          >
            <Globe className="w-4 h-4" />
            English
          </button>
          <button
            onClick={() => onLanguageChange('ar')}
            className={`lang-toggle flex items-center gap-2 ${language === 'ar' ? 'active' : ''}`}
          >
            <Globe className="w-4 h-4" />
            العربية
          </button>
        </motion.div>

        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="profile-image w-48 h-48 md:w-56 md:h-56">
              <img 
                src={profileImage} 
                alt={data.name[language]}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex-grow text-center lg:text-left ${isArabic ? 'lg:text-right arabic' : ''}`}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {data.name[language]}
            </h1>
            <p className={`text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-2xl ${isArabic ? 'font-arabic' : ''}`}>
              {data.title[language]}
            </p>

            {/* Contact Info */}
            <div className={`flex flex-wrap justify-center gap-4 ${isArabic ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <a 
                href={`tel:${data.phone}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{data.phone}</span>
              </a>
              <a 
                href={`mailto:${data.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                {data.email}
              </a>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                {data.location[language]}
              </span>
              <a 
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Download Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={handleDownload}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl no-print"
            >
              <Download className="w-5 h-5" />
              {isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
