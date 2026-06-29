import React from 'react';
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
