import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { cvData, Language } from "@/data/cvData";

interface LanguagesSectionProps {
  language: Language;
}

export const LanguagesSection = ({ language }: LanguagesSectionProps) => {
  const isArabic = language === 'ar';

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mb-12 ${isArabic ? 'arabic' : ''}`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'اللغات' : 'Languages'}
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className={`max-w-2xl mx-auto flex flex-col md:flex-row gap-6 justify-center ${isArabic ? 'md:flex-row-reverse' : ''}`}>
          {cvData.languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`cv-card flex-1 text-center ${isArabic ? 'arabic' : ''}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Languages className="w-8 h-8 text-primary" />
              </div>
              <h3 className={`text-xl font-bold text-foreground mb-2 ${isArabic ? 'font-arabic' : 'font-display'}`}>
                {lang.name[language]}
              </h3>
              <p className={`text-accent font-semibold ${isArabic ? 'font-arabic' : ''}`}>
                {lang.level[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
