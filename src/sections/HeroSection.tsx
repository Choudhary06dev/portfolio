import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GradientText, Magnetic } from '@/components/common';
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
  const headlineParts = personal.headline.split(/(Laravel & React)/);

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
      className="relative flex flex-col justify-start overflow-hidden pt-2 pb-16 md:pt-4 md:pb-24"
    >
      {/* Background Decorative Glow — slowly drifts */}
      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_45%)] opacity-[0.08]"
      />
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.05]"
      />
      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-primary)_0%,transparent_70%)] opacity-[0.06]"
      />

      {/* Subtle dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border-light)_1.5px,transparent_1.5px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] [background-size:32px_32px] opacity-25" />

      {/* Micro noise grain texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.015]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-5">
          {/* Left Column: 55% Content Space — staggered animations */}
          <motion.div
            className="flex flex-col items-start gap-5 text-left lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Badge slides from top */}
            <motion.div variants={fadeDown}>
              <Badge
                variant="primary"
                className="bg-primary/5 text-primary border-primary/15 flex items-center gap-1.5 px-2 py-0.5 text-[9px] leading-none font-semibold tracking-wider uppercase"
              >
                <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                {personal.tagline}
              </Badge>
            </motion.div>

            {/* Heading reveals line-by-line */}
            <motion.div variants={fadeUp}>
              <Heading
                as="h1"
                size="5xl"
                className="max-w-[14ch] leading-[1.08] font-extrabold tracking-tight sm:leading-[1.05]"
              >
                {headlineParts.map((part, idx) =>
                  part === 'Laravel & React' ? <GradientText key={idx}>{part}</GradientText> : part
                )}
              </Heading>
            </motion.div>

            {/* Description fades upward */}
            <motion.div variants={fadeUp}>
              <p className="text-muted-foreground mt-2.5 max-w-[52ch] text-justify text-base leading-relaxed sm:text-lg">
                {personal.description}
              </p>
            </motion.div>

            {/* CTA buttons appear one after another */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Magnetic strength={0.25} range={65}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleScrollToProjects}
                    className="font-semibold shadow-sm transition-all duration-300 ease-out hover:shadow-lg"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </motion.div>
              </Magnetic>
              <Magnetic strength={0.25} range={65}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDownloadResume}
                    className="font-semibold transition-all duration-300 ease-out hover:shadow-lg"
                  >
                    Download Resume
                    <FileDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </motion.div>
              </Magnetic>
            </motion.div>

            {/* Stats stagger individually */}
            <motion.div className="mt-[-8px] w-full" variants={fadeUp}>
              <motion.div
                className="border-border/30 grid w-full max-w-2xl grid-cols-2 gap-6 border-t pt-4 sm:grid-cols-4 sm:gap-8"
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
                      className="hover:bg-surface/30 group/item relative flex cursor-default flex-col items-center gap-2 rounded-xl p-2 text-center transition-all duration-300 ease-out sm:items-start sm:text-left"
                    >
                      {/* Vertical Divider Line */}
                      {idx > 0 && (
                        <div
                          className="bg-border/20 absolute top-4 bottom-4 left-[-16px] hidden w-[1px] sm:block"
                          aria-hidden="true"
                        />
                      )}

                      {/* Icon */}
                      <div className="bg-primary/5 text-primary border-primary/10 group-hover/item:bg-primary/10 rounded-lg border p-2 transition-colors duration-300">
                        <IconComponent className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>

                      {/* Value */}
                      <span className="text-foreground font-heading mt-1 text-2xl leading-none font-extrabold tracking-tight">
                        {stat.value}
                      </span>

                      {/* Label */}
                      <span className="text-muted-foreground/55 text-[10px] font-semibold tracking-widest uppercase">
                        {stat.label}
                      </span>

                      {/* Description */}
                      <span className="text-muted-foreground/60 max-w-[18ch] text-[11px] leading-normal">
                        {stat.description}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image — scales in and floats forever */}
          <div className="flex w-full items-center justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              className="group relative aspect-square w-full max-w-sm lg:max-w-md"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              {/* Radial backglow behind the card — radiant sky blue glow active by default */}
              <div className="from-primary/25 via-secondary/20 to-primary/10 pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr opacity-75 blur-3xl transition-opacity duration-700" />

              {/* Decorative radial border rings */}
              <div className="border-primary/20 pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border [mask-image:linear-gradient(to_bottom,black,transparent)]" />

              {/* Profile Image Card — gentle continuous float with radiant sky blue border & glow */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.02 }}
                className="border-primary/30 bg-surface/40 shadow-[0_0_35px_rgba(56,189,248,0.22)] relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border p-3 backdrop-blur-md transition-all duration-500 ease-out hover:border-primary/50 hover:shadow-[0_0_45px_rgba(56,189,248,0.30)]"
              >
                {/* Outer reflection overlay border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />

                {/* Inner Image Container */}
                <div className="bg-muted/10 relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={personal.avatar}
                    alt={personal.fullName}
                    loading="eager"
                    fetchPriority="high"
                    className="sharp-img h-full w-full object-cover brightness-100 contrast-[1.04] transition-all duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Glass refraction reflection overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-20" />
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
