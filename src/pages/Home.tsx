import React, { useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisInstance } from '@/hooks/useLenis';
import { useSEO } from '@/hooks/useSEO';
import { siteConfig } from '@/config/site';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';

// Lazy load heavy below-the-fold sections from their specific bundles
const ExperienceSection = React.lazy(() =>
  import('@/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
);
const ProjectsSection = React.lazy(() =>
  import('@/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const ContactSection = React.lazy(() =>
  import('@/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

/**
 * Lightweight, high-performance loading skeleton placeholder.
 * Prevents layout shifts (CLS) and matches portfolio design systems.
 */
const SectionLoader: React.FC = () => (
  <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6 lg:px-8 flex flex-col gap-6 animate-pulse select-none pointer-events-none">
    <div className="h-5 w-24 bg-border/20 rounded-md" />
    <div className="h-10 w-2/3 bg-border/10 rounded-lg" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="h-44 bg-surface/10 rounded-2xl border border-border/10" />
      <div className="h-44 bg-surface/10 rounded-2xl border border-border/10" />
    </div>
  </div>
);

/**
 * Main Composed Landing Viewport.
 * Groups and renders page content blocks in sequence.
 */
const Home: React.FC = () => {
  const location = useLocation();
  const lenis = useLenisInstance();

  // Configure production SEO metadata & structured data
  useSEO({
    title: 'Muhammad Amjad Subhani | Full Stack Laravel & React Developer',
    description: 'Full Stack Developer specializing in Laravel, React, ERP Systems, REST APIs, and AI Solutions. Architecting premium, high-performance web applications.',
    keywords: 'Laravel Developer, React Developer, Full Stack Developer, PHP, TypeScript, PostgreSQL, MySQL, REST API, ERP Development, AI Solutions, Software Engineer, Portfolio, Pakistan',
    canonicalPath: '',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Muhammad Amjad Subhani',
      'jobTitle': 'Full Stack Laravel & React Developer',
      'url': siteConfig.siteUrl || 'https://amjad.dev',
      'sameAs': [
        siteConfig.github,
        siteConfig.linkedin
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Punjab',
        'addressCountry': 'Pakistan'
      },
      'description': siteConfig.description
    }
  });

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
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Home;
