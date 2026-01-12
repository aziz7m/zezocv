import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { cvData, Language } from "@/data/cvData";

interface EducationSectionProps {
  language: Language;
}

export const EducationSection = ({ language }: EducationSectionProps) => {
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
            {isArabic ? 'التعليم' : 'Education'}
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`max-w-2xl mx-auto ${isArabic ? 'arabic' : ''}`}
        >
          <div className="cv-card text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-2 ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {cvData.education.degree[language]}
            </h3>
            <p className="text-2xl font-bold text-accent">{cvData.education.year}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
