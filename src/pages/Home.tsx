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
  <div className="pointer-events-none mx-auto flex max-w-7xl animate-pulse flex-col gap-6 px-4 py-16 select-none sm:px-6 md:py-24 lg:px-8">
    <div className="bg-border/20 h-5 w-24 rounded-md" />
    <div className="bg-border/10 h-10 w-2/3 rounded-lg" />
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="bg-surface/10 border-border/10 h-44 rounded-2xl border" />
      <div className="bg-surface/10 border-border/10 h-44 rounded-2xl border" />
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
    description:
      'Full Stack Developer specializing in Laravel, React, ERP Systems, REST APIs, and AI Solutions. 2+ years building scalable web applications in Pakistan.',
    keywords:
      'Muhammad Amjad Subhani, Laravel Developer, React Developer, Full Stack Developer, PHP Developer, TypeScript, PostgreSQL, MySQL, REST API, ERP Development, AI Solutions, Software Engineer, Web Developer Pakistan, Portfolio',
    canonicalPath: '',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Muhammad Amjad Subhani',
      jobTitle: 'Full Stack Laravel & React Developer',
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/Amjad.png`,
      email: 'amjad.softdev@gmail.com',
      sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Punjab',
        addressCountry: 'PK',
      },
      description:
        'Full Stack Developer specializing in Laravel, React, ERP Systems, REST APIs, and AI Solutions with 2+ years of professional experience.',
      knowsAbout: [
        'Laravel', 'React', 'PHP', 'TypeScript', 'PostgreSQL',
        'MySQL', 'REST APIs', 'ERP Systems', 'AI Integration',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Nexer Technology Solutions',
      },
    },
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
