import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/common/GradientText';
import { personal } from '@/data/personal';
import { stats } from '@/data/stats';
import { Briefcase, Code, Atom, Sparkles, FileDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Maps data-layer string identifiers directly to Lucide icons components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Code,
  Atom,
  Sparkles,
};

// --- Motion Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const statItemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Premium SaaS-style Hero Section component.
 * Elevates visual layout typography, image cards, and spacing to high premium standards.
 */
export const HeroSection: React.FC = () => {
  // Regex to dynamically split headline around key accent terms for highlight wrapping
  const headlineParts = personal.headline.split(/(Laravel \& React)/);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open(personal.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      id="hero"
      variant="default"
      className="pt-2 pb-16 md:pt-4 md:pb-24 relative overflow-hidden flex flex-col justify-start"
    >
      {/* Background Decorative Glow — slowly drifts */}
      <motion.div 
        animate={{ 
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_45%)] opacity-[0.08] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.05] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.04, 0.09, 0.04],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-primary)_0%,transparent_70%)] opacity-[0.06] pointer-events-none" 
      />

      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border-light)_1.5px,transparent_1.5px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Micro noise grain texture */}
      <div className="absolute inset-0 -z-10 h-full w-full opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-5 items-center">

          {/* Left Column: 55% Content Space — staggered animations */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >

            {/* Badge slides from top */}
            <motion.div variants={fadeDown}>
              <Badge
                variant="primary"
                className="py-0.5 px-2 text-[9px] font-semibold leading-none flex items-center gap-1.5 uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {personal.tagline}
              </Badge>
            </motion.div>

            {/* Heading reveals line-by-line */}
            <motion.div variants={fadeUp}>
              <Heading
                as="h1"
                size="5xl"
                className="tracking-tight leading-[1.08] sm:leading-[1.05] font-extrabold max-w-[14ch]"
              >
                {headlineParts.map((part, idx) =>
                  part === 'Laravel & React' ? (
                    <GradientText key={idx}>{part}</GradientText>
                  ) : (
                    part
                  )
                )}
              </Heading>
            </motion.div>

            {/* Description fades upward */}
            <motion.div variants={fadeUp}>
              <p className="text-muted-foreground text-base sm:text-lg max-w-[52ch] leading-relaxed mt-2.5 text-justify">
                {personal.description}
              </p>
            </motion.div>

            {/* CTA buttons appear one after another */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <motion.div
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleScrollToProjects}
                  className="hover:shadow-lg transition-all duration-300 ease-out font-semibold shadow-sm"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="hover:shadow-lg transition-all duration-300 ease-out font-semibold"
                >
                  Download Resume
                  <FileDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats stagger individually */}
            <motion.div 
              className="w-full mt-[-8px]"
              variants={fadeUp}
            >
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-4 border-t border-border/30 w-full max-w-2xl"
                variants={statsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {stats.items.map((stat, idx) => {
                  const IconComponent = iconMap[stat.icon] || Code;
                  return (
                    <motion.div
                      key={stat.label}
                      variants={statItemVariant}
                      whileHover={{ y: -4, scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative flex flex-col items-center sm:items-start text-center sm:text-left gap-2 p-2 hover:bg-surface/30 rounded-xl transition-all duration-300 ease-out group/item cursor-default"
                    >
                      {/* Vertical Divider Line */}
                      {idx > 0 && (
                        <div
                          className="hidden sm:block absolute left-[-16px] top-4 bottom-4 w-[1px] bg-border/20"
                          aria-hidden="true"
                        />
                      )}

                      {/* Icon */}
                      <div className="p-2 rounded-lg bg-primary/5 text-primary border border-primary/10 transition-colors duration-300 group-hover/item:bg-primary/10">
                        <IconComponent className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>

                      {/* Value */}
                      <span className="text-2xl font-extrabold tracking-tight text-foreground font-heading leading-none mt-1">
                        {stat.value}
                      </span>

                      {/* Label */}
                      <span className="text-[10px] text-muted-foreground/55 uppercase tracking-widest font-semibold">
                        {stat.label}
                      </span>

                      {/* Description */}
                      <span className="text-[11px] text-muted-foreground/60 leading-normal max-w-[18ch]">
                        {stat.description}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Profile Image — scales in and floats forever */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">
            <motion.div
              className="relative w-full max-w-sm lg:max-w-md aspect-square"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >

              {/* Radial backglow behind the card */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 opacity-20 blur-3xl pointer-events-none" />

              {/* Decorative radial border rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-border/20 rounded-full [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

              {/* Profile Image Card — gentle continuous float */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03 }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-border/60 bg-surface/30 backdrop-blur-md shadow-modal flex items-center justify-center p-3 transition-all duration-300 ease-out hover:border-primary/25 hover:shadow-card group"
              >

                {/* Outer reflection overlay border */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted/10">
                  <img
                    src={personal.avatar}
                    alt={personal.fullName}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.98] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.04] group-hover:brightness-100"
                  />
                  {/* Glass refraction reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-20 pointer-events-none" />
                </div>

              </motion.div>

            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = 'HeroSection';
