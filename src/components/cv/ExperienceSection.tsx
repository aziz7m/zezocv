import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { cvData, Language } from "@/data/cvData";

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection = ({ language }: ExperienceSectionProps) => {
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
            {isArabic ? 'الخبرات العملية' : 'Professional Experience'}
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className={`max-w-4xl mx-auto ${isArabic ? 'arabic' : ''}`}>
          {cvData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`timeline-item ${isArabic ? 'pr-8 pl-0' : ''}`}
              style={isArabic ? {
                paddingLeft: 0,
                paddingRight: '2rem',
              } : undefined}
            >
              <style>
                {isArabic ? `
                  .timeline-item-ar::before {
                    left: auto !important;
                    right: 0 !important;
                  }
                  .timeline-item-ar::after {
                    left: auto !important;
                    right: 5px !important;
                  }
                ` : ''}
              </style>
              <div className={`cv-card ${isArabic ? 'timeline-item-ar' : ''}`}>
                <div className={`flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
                  <div className={isArabic ? 'text-right' : ''}>
                    <h3 className={`text-xl font-bold text-foreground ${isArabic ? 'font-arabic' : 'font-display'}`}>
                      {exp.position[language]}
                    </h3>
                    <p className={`text-primary font-semibold flex items-center gap-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                      <Briefcase className="w-4 h-4" />
                      {exp.company[language]}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    exp.current 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {exp.period[language]}
                  </span>
                </div>
                <ul className={`space-y-2 ${isArabic ? 'text-right' : ''}`}>
                  {exp.responsibilities[language].map((resp, respIndex) => (
                    <li 
                      key={respIndex}
                      className={`text-muted-foreground flex items-start gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}
                    >
                      <span className="text-accent mt-1.5 flex-shrink-0">●</span>
                      <span className={isArabic ? 'font-arabic' : ''}>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
