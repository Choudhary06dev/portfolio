import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisInstance } from '@/hooks/useLenis';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from '@/sections';

/**
 * Main Composed Landing Viewport.
 * Groups and renders page content blocks in sequence.
 */
const Home: React.FC = () => {
  const location = useLocation();
  const lenis = useLenisInstance();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Wait minor duration for rendering components
        const timer = setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(targetElement, { offset: -20 });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, lenis]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
