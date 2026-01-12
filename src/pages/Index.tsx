import { useState } from "react";
import { HeroSection } from "@/components/cv/HeroSection";
import { SummarySection } from "@/components/cv/SummarySection";
import { ExperienceSection } from "@/components/cv/ExperienceSection";
import { EducationSection } from "@/components/cv/EducationSection";
import { SkillsSection } from "@/components/cv/SkillsSection";
import { LanguagesSection } from "@/components/cv/LanguagesSection";
import { ObjectivesSection } from "@/components/cv/ObjectivesSection";
import { FooterSection } from "@/components/cv/FooterSection";
import { Language } from "@/data/cvData";

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <HeroSection language={language} onLanguageChange={setLanguage} />
      <SummarySection language={language} />
      <ExperienceSection language={language} />
      <EducationSection language={language} />
      <SkillsSection language={language} />
      <LanguagesSection language={language} />
      <ObjectivesSection language={language} />
      <FooterSection language={language} />
    </div>
  );
};

export default Index;
