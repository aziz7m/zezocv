import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { cvData, Language } from "@/data/cvData";

interface ObjectivesSectionProps {
  language: Language;
}

export const ObjectivesSection = ({ language }: ObjectivesSectionProps) => {
  const isArabic = language === 'ar';

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mb-12 ${isArabic ? 'arabic' : ''}`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'الأهداف المهنية' : 'Career Objectives'}
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-6 ${isArabic ? 'arabic' : ''}`}>
          {cvData.objectives[language].map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`cv-card flex items-start gap-4 ${isArabic ? 'flex-row-reverse text-right' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                {objective}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
