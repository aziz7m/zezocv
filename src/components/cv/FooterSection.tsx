import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Heart } from "lucide-react";
import { cvData, Language } from "@/data/cvData";

interface FooterSectionProps {
  language: Language;
}

export const FooterSection = ({ language }: FooterSectionProps) => {
  const isArabic = language === 'ar';
  const data = cvData.personal;

  return (
    <footer className="hero-section py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${isArabic ? 'arabic' : ''}`}
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-primary-foreground mb-6 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'تواصل معي' : "Let's Connect"}
          </h3>
          
          <div className={`flex flex-wrap justify-center gap-6 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <a 
              href={`tel:${data.phone}`}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">{data.phone}</span>
            </a>
            <a 
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              {data.email}
            </a>
            <a 
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <span className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-5 h-5" />
              {data.location[language]}
            </span>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <p className={`text-primary-foreground/60 text-sm flex items-center justify-center gap-2 ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}>
              {isArabic ? (
                <>
                  <span>صنع بـ</span>
                  <Heart className="w-4 h-4 text-accent" />
                  <span>© {new Date().getFullYear()} {data.name.ar}</span>
                </>
              ) : (
                <>
                  <span>© {new Date().getFullYear()} {data.name.en}</span>
                  <span>•</span>
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-accent" />
                </>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
