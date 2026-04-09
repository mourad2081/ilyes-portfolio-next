"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import ToolsSection from "@/components/sections/tools-section";
import ResumeSection from "@/components/sections/resume-section";
import ProjectsSection from "@/components/sections/projects-section";
import AchievementsSection from "@/components/sections/achievements-section";
import ResourcesSection from "@/components/sections/resources-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowScrollTop(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <ResumeSection />
      <ProjectsSection />
      <AchievementsSection />
      <ResourcesSection />
      <ContactSection />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </main>
  );
}
