import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/common/GradientText';
import { personal } from '@/data/personal';
import { stats } from '@/data/stats';
import { Reveal } from '@/components/common/Reveal';
import { FileDown, ArrowRight } from 'lucide-react';

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
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32"
    >
      {/* Background Decorative Glow, Grid & Micro-texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_45%)] opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-primary)_0%,transparent_70%)] opacity-[0.06]" />

      {/* Subtle dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border-light)_1.5px,transparent_1.5px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] [background-size:32px_32px] opacity-25" />

      {/* Micro noise grain texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.015]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: 55% Content Space */}
          <div className="flex flex-col items-start gap-8 text-left lg:col-span-7">
            {/* Availability status tag */}
            <Reveal direction="up" delay={0.1}>
              <Badge
                variant="primary"
                className="bg-primary/5 text-primary border-primary/15 flex items-center gap-1.5 px-3 py-1 text-[10px] leading-none font-semibold tracking-wider uppercase"
              >
                <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                {personal.tagline}
              </Badge>
            </Reveal>

            {/* Premium Headline Header */}
            <Reveal direction="up" delay={0.2}>
              <Heading
                as="h1"
                size="5xl"
                className="max-w-[14ch] leading-[1.08] font-extrabold tracking-tight sm:leading-[1.05]"
              >
                {headlineParts.map((part, idx) =>
                  part === 'Laravel & React' ? <GradientText key={idx}>{part}</GradientText> : part
                )}
              </Heading>
            </Reveal>

            {/* Recruiter-focused Description */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-muted-foreground max-w-[58ch] text-base leading-relaxed sm:text-lg">
                {personal.bio}
              </p>
            </Reveal>

            {/* Interactive Action Buttons */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleScrollToProjects}
                  className="font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                >
                  Download Resume
                  <FileDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            {/* Statistics row with subtle dividers */}
            <Reveal direction="up" delay={0.5} className="w-full">
              <div className="border-border/30 mt-4 grid w-full grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4">
                {stats.items.map((stat, idx) => (
                  <div key={stat.label} className="relative flex flex-col items-start gap-1">
                    {/* Vertical Divider Line */}
                    {idx > 0 && (
                      <div
                        className="bg-border/20 absolute top-1 bottom-1 left-[-12px] hidden w-[1px] sm:block"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-foreground font-heading text-3xl leading-none font-extrabold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground/75 mt-0.5 text-[10px] font-semibold tracking-widest uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: 45% Visual Space Card */}
          <div className="flex w-full items-center justify-center lg:col-span-5 lg:justify-end">
            <Reveal
              direction="up"
              delay={0.3}
              className="relative aspect-square w-full max-w-sm lg:max-w-md"
            >
              {/* Radial backglow behind the card */}
              <div className="from-primary/10 to-accent/10 pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr opacity-30 blur-3xl" />

              {/* Decorative radial border rings */}
              <div className="border-border/20 pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border [mask-image:linear-gradient(to_bottom,black,transparent)]" />

              {/* Profile Image Card Shell with Premium Glassmorphism */}
              <div className="border-border/60 bg-surface/30 shadow-modal hover:border-primary/20 hover:shadow-card group relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border p-3 backdrop-blur-md transition-all duration-500">
                {/* Outer reflection overlay border */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/5" />

                {/* Inner Image Container */}
                <div className="bg-muted/10 relative h-full w-full overflow-hidden rounded-[2rem]">
                  <img
                    src={personal.avatar}
                    alt={personal.fullName}
                    loading="lazy"
                    className="h-full w-full object-cover brightness-[0.98] contrast-[1.08] grayscale transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:brightness-100 group-hover:grayscale-0"
                  />
                  {/* Glass refraction reflection overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-20" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = 'HeroSection';
