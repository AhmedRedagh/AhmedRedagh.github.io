import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import CursorGlow from "@/components/CursorGlow";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative">
      {/* Intro animation */}
      <IntroAnimation onComplete={() => setIntroComplete(true)} />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Main content */}
      {introComplete && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
