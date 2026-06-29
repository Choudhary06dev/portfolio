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
import { Briefcase, Code, Atom, Sparkles, FileDown, ArrowRight } from 'lucide-react';

// Maps data-layer string identifiers directly to Lucide icons components
const iconMap: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: string }>> = {
  Briefcase,
  Code,
  Atom,
  Sparkles,
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
      className="pt-6 pb-16 md:pt-10 md:pb-24 relative overflow-hidden flex flex-col justify-start"
    >
      {/* Background Decorative Glow, Grid & Micro-texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_45%)] opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-primary)_0%,transparent_70%)] opacity-[0.06] pointer-events-none" />
      
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border-light)_1.5px,transparent_1.5px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-25 pointer-events-none" />
      
      {/* Micro noise grain texture */}
      <div className="absolute inset-0 -z-10 h-full w-full opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: 55% Content Space */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-8">
            
            {/* Availability status tag */}
            <Reveal direction="up" delay={0.1}>
              <Badge
                variant="primary"
                className="py-1 px-3 text-[10px] font-semibold leading-none flex items-center gap-1.5 uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {personal.tagline}
              </Badge>
            </Reveal>

            {/* Premium Headline Header */}
            <Reveal direction="up" delay={0.2}>
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
            </Reveal>

            {/* Recruiter-focused Description */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-muted-foreground text-base sm:text-lg max-w-[58ch] leading-relaxed">
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
                  className="hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md transition-all duration-300 font-semibold shadow-sm"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md transition-all duration-300 font-semibold"
                >
                  Download Resume
                  <FileDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            {/* Statistics row with dynamic icons and description labels */}
            <Reveal direction="up" delay={0.5} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/30 w-full mt-4">
                {stats.items.map((stat, idx) => {
                  const IconComponent = iconMap[stat.icon] || Code;
                  return (
                    <div
                      key={stat.label}
                      className="relative flex flex-col items-center sm:items-start text-center sm:text-left gap-2 p-2 hover:bg-surface/30 rounded-xl transition-all duration-300 group/item"
                    >
                      {/* Vertical Divider Line */}
                      {idx > 0 && (
                        <div
                          className="hidden sm:block absolute left-[-12px] top-4 bottom-4 w-[1px] bg-border/20"
                          aria-hidden="true"
                        />
                      )}
                      
                      {/* Icon */}
                      <div className="p-2 rounded-lg bg-primary/5 text-primary border border-primary/10 transition-colors group-hover/item:bg-primary/10">
                        <IconComponent className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>

                      {/* Value */}
                      <span className="text-2xl font-extrabold tracking-tight text-foreground font-heading leading-none mt-1">
                        {stat.value}
                      </span>
                      
                      {/* Label */}
                      <span className="text-[10px] text-muted-foreground/90 uppercase tracking-widest font-semibold">
                        {stat.label}
                      </span>

                      {/* Description */}
                      <span className="text-[11px] text-muted-foreground/60 leading-normal max-w-[18ch]">
                        {stat.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

          </div>

          {/* Right Column: 45% Visual Space Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">
            <Reveal direction="up" delay={0.3} className="relative w-full max-w-sm lg:max-w-md aspect-square">
              
              {/* Radial backglow behind the card */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 opacity-30 blur-3xl pointer-events-none" />

              {/* Decorative radial border rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-border/20 rounded-full [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />
              
              {/* Profile Image Card Shell with Premium Glassmorphism */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-border/60 bg-surface/30 backdrop-blur-md shadow-modal flex items-center justify-center p-3 transition-all duration-500 hover:border-primary/20 hover:shadow-card group">
                
                {/* Outer reflection overlay border */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-muted/10">
                  <img
                    src={personal.avatar}
                    alt={personal.fullName}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.98] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.01] group-hover:brightness-100"
                  />
                  {/* Glass refraction reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-20 pointer-events-none" />
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
