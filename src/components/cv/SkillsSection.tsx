import { motion } from "framer-motion";
import { cvData, Language } from "@/data/cvData";

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection = ({ language }: SkillsSectionProps) => {
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
            {isArabic ? 'المهارات' : 'Skills & Expertise'}
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isArabic ? 'arabic' : ''}
          >
            <h3 className={`text-xl font-bold text-foreground mb-6 ${isArabic ? 'font-arabic text-right' : 'font-display'}`}>
              {isArabic ? 'المهارات التقنية' : 'Technical Skills'}
            </h3>
            <div className="space-y-5">
              {cvData.skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex justify-between mb-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <span className={`font-medium text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                      {skill.name[language]}
                    </span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="skill-bar-fill"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isArabic ? 'arabic' : ''}
          >
            <h3 className={`text-xl font-bold text-foreground mb-6 ${isArabic ? 'font-arabic text-right' : 'font-display'}`}>
              {isArabic ? 'المهارات الشخصية' : 'Professional Skills'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cvData.skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cv-card text-center py-4"
                >
                  <span className={`font-medium text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                    {skill[language]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
