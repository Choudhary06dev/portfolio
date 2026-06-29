import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { personal } from '@/data/personal';
import { Reveal } from '@/components/common/Reveal';
import { GradientText } from '@/components/common/GradientText';
import { motion } from 'framer-motion';

// Official SVG brand logos and micro-tech icons
const techIcons: Record<string, React.ReactNode> = {
  Laravel: (
    <svg className="h-4.5 w-4.5 text-[#FF2D20] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.03 2.58h-6.73a1 1 0 00-.9.56L9.62 9.17l-1.92-3.32a1 1 0 00-.86-.5H3.1a1 1 0 00-.87 1.5l4.58 7.93a1 1 0 00.87 5h3.4a1 1 0 00.87-.5l3.22-5.58 1.94 3.36a1 1 0 00.87.5h3.41a1 1 0 00.87-1.5l-4.59-7.95a1 1 0 00-.87-.5zm-4.7 7.93L13.4 7l1.93-3.34 1.93 3.34z" />
    </svg>
  ),
  React: (
    <svg className="h-4.5 w-4.5 text-[#61DAFB] flex-shrink-0 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
    </svg>
  ),
  PHP: (
    <svg className="h-4.5 w-4.5 text-[#777BB4] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5H8.3v-9h1.9c1.4 0 2.2.7 2.2 1.9 0 .8-.4 1.4-1.1 1.7.9.3 1.3 1 1.3 1.9 0 1.5-1 2.5-2.4 2.5zm4.8 0h-1.9v-9h1.9c1.7 0 2.7.9 2.7 2.5 0 1.7-1 2.5-2.7 2.5h-1v4zM10.2 9.2H9.3v1.8h.9c.7 0 1-.3 1-.9 0-.5-.3-.9-1-.9zm.2 3.3H9.3v2h1.1c.6 0 1-.3 1-1 0-.6-.4-1-1-1z" />
    </svg>
  ),
  TypeScript: (
    <svg className="h-4.5 w-4.5 text-[#3178C6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M2 2h20v20H2V2zm14.36 10.3c0-1.86-1.07-2.9-2.93-2.9-1.63 0-2.65.98-2.65 2.52 0 2.27 3.2 2.53 3.2 3.93 0 .68-.44 1.05-1.16 1.05-.88 0-1.38-.53-1.47-1.3H8.1c.14 1.97 1.32 3.1 3.2 3.1 2.06 0 3.24-.95 3.24-2.85 0-2.4-3.23-2.66-3.23-4.05 0-.57.36-.88.94-.88.66 0 .97.4.97 1.02h3.14zm4.64-.17h-2.18V8.34h-3.08v3.79h-2.18v2.18h2.18v3.79h3.08v-3.79h2.18v-2.18z" />
    </svg>
  ),
  PostgreSQL: (
    <svg className="h-4.5 w-4.5 text-[#4169E1] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.29 14.29c-.39.39-1.02.39-1.41 0L12 14.41l-1.88 1.88c-.39.39-1.02.39-1.41 0a.996.996 0 010-1.41L10.59 13l-1.88-1.88a.996.996 0 111.41-1.41L12 11.59l1.88-1.88a.996.996 0 111.41 1.41L13.41 13l1.88 1.88c.38.39.38 1.03 0 1.41z" />
    </svg>
  ),
  MySQL: (
    <svg className="h-4.5 w-4.5 text-[#00758F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-2h2v2h-2zm0-4v-5h2v5h-2z" />
    </svg>
  ),
  'REST APIs': (
    <svg className="h-4.5 w-4.5 text-[#10B981] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  'ERP Systems': (
    <svg className="h-4.5 w-4.5 text-[#8B5CF6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  'AI Integration': (
    <svg className="h-4.5 w-4.5 text-[#F59E0B] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  'Clean Architecture': (
    <svg className="h-4.5 w-4.5 text-[#EC4899] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Performance: (
    <svg className="h-4.5 w-4.5 text-[#14B8A6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  'Responsive UI': (
    <svg className="h-4.5 w-4.5 text-[#3B82F6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
};

// --- Motion Variants ---
const skillGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const skillItemVariant = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Premium About Section (Production Ready v10.3).
 * Refined split layout: Editorial Heading & Biography on Left, Glowing Current Position Card with highlights on Right,
 * followed by a full-width Core Expertise grid with brand SVG cards at the bottom.
 */
export const AboutSection: React.FC = () => {
  // Extract two paragraphs for biography description
  const bioParagraphs = personal.bio.split('\n\n').slice(0, 2);

  return (
    <Section
      id="about"
      variant="surface"
      className="py-16 md:py-24 relative overflow-hidden flex flex-col justify-start"
    >
      {/* Background Decorative Glow, Grid & Micro-texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,var(--color-primary-hover)_0%,transparent_50%)] opacity-[0.05] pointer-events-none" />
      {/* Editorial subtle grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none" />

      <Container>
        {/* Section Badge rendered on top full-width, aligning grid items exactly opposite */}
        <div className="mb-6">
          <Reveal direction="down" delay={0} duration={0.6}>
            <Badge
              variant="primary"
              className="py-1 px-3 text-[10px] font-semibold leading-none uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
            >
              About
            </Badge>
          </Reveal>
        </div>

        {/* Top Split Layout: Bio (60%) vs Current Position (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: 60% Content Space */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">

            {/* Heading Title (Editorial 2-line layout) */}
            <Reveal direction="up" delay={0.1} duration={0.8}>
              <Heading
                as="h2"
                size="3xl"
                className="tracking-tight leading-tight font-extrabold text-foreground max-w-[30ch]"
              >
                Building software that <br className="hidden sm:inline" />
                <GradientText>solves real business problems.</GradientText>
              </Heading>
            </Reveal>

            {/* 2 Text-only Biography Paragraphs — stagger */}
            <Reveal direction="up" delay={0.2} stagger staggerInterval={0.15} className="space-y-4 w-full">
              {bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground text-base sm:text-lg max-w-[54ch] leading-relaxed text-justify"
                >
                  {para}
                </p>
              ))}
            </Reveal>

          </div>

          {/* Right Column: 40% Visual Card Space */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 lg:mt-4">

            {/* CARD 1: Current Position — slides from right */}
            <Reveal direction="right" delay={0.3} duration={0.9} className="w-full">
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative group overflow-hidden rounded-xl p-[1px] bg-gradient-to-tr from-primary/25 via-border/50 to-purple-500/10 hover:from-primary/40 hover:to-purple-500/35 transition-all duration-300 ease-out shadow-xs hover:shadow-[0_0_32px_rgba(139,92,246,0.15)] cursor-pointer"
              >
                {/* Soft backdrop blur and radial glow */}
                <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-primary/5 to-purple-500/5 opacity-20 blur-2xl group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                <div className="relative rounded-[11px] p-5 bg-surface/20 backdrop-blur-xl flex flex-col gap-4">
                  {/* Top Header line with Logo and Status Badge */}
                  <div className="flex items-center justify-between w-full">
                    {/* Company logo placeholder */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-primary font-bold text-xs select-none">
                      N
                    </div>

                    {/* Active Status Badge */}
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[8px] font-bold uppercase tracking-wider border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Present
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none">
                      Current Position
                    </span>
                    <h3 className="text-sm font-extrabold text-foreground mt-2 leading-none font-heading">
                      {personal.currentRole.position}
                    </h3>
                    <span className="text-[10px] text-muted-foreground/80 font-semibold mt-1 leading-none">
                      {personal.currentRole.company} &bull; {personal.currentRole.period}
                    </span>
                  </div>

                  <p className="text-[11px] text-muted-foreground/75 leading-relaxed border-t border-border/20 pt-3">
                    {personal.currentRole.description}
                  </p>

                  {/* 4 bullet highlights */}
                  <ul className="space-y-2 mt-1">
                    {personal.currentRole.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[10px] text-muted-foreground/85 leading-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="font-semibold">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>

          </div>

        </div>

        {/* BOTTOM FULL-WIDTH CONTAINER: Core Expertise — skills stagger in rows */}
        <Reveal direction="up" delay={0.2} duration={0.7} className="w-full mt-12 border-t border-border/20 pt-8">
          <div className="flex flex-col gap-5 w-full">
            <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none text-center sm:text-left">
              Core Expertise
            </span>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 w-full"
              variants={skillGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {personal.focusPills.map((pill) => {
                const iconElement = techIcons[pill] || (
                  <svg className="h-4.5 w-4.5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                );
                return (
                  <motion.div
                    key={pill}
                    variants={skillItemVariant}
                    whileHover={{ y: -6, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg border border-border/30 bg-surface/20 backdrop-blur-md shadow-xs transition-all duration-300 ease-out hover:border-primary/25 hover:bg-surface/40 hover:shadow-md group cursor-default"
                  >
                    <div className="p-1 rounded bg-foreground/[0.02] text-foreground/80 border border-border/10 flex items-center justify-center">
                      {iconElement}
                    </div>
                    <span className="text-[10px] font-extrabold text-foreground/90 transition-colors duration-300 group-hover:text-foreground">
                      {pill}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Reveal>

      </Container>
    </Section>
  );
};

AboutSection.displayName = 'AboutSection';
