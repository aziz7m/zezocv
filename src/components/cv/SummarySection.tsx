import { motion } from "framer-motion";
import { cvData, Language } from "@/data/cvData";

interface SummarySectionProps {
  language: Language;
}

export const SummarySection = ({ language }: SummarySectionProps) => {
  const isArabic = language === 'ar';

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`max-w-4xl mx-auto text-center ${isArabic ? 'arabic' : ''}`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'نبذة مختصرة' : 'Professional Summary'}
          </h2>
          <div className="section-divider mx-auto mb-8" />
          <p className={`text-lg text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
            {cvData.summary[language]}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
