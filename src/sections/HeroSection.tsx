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
import { User, FileDown, ArrowRight } from 'lucide-react';

/**
 * Premium Hero landing page section structure.
 * Reads content dynamically from the data layer; displays elegant skeleton placeholders if empty.
 */
export const HeroSection: React.FC = () => {
  const hasHeadline = personal.headline.trim().length > 0;
  const hasBio = personal.bio.trim().length > 0;
  const hasTagline = personal.tagline.trim().length > 0;
  const hasAvatar = personal.avatar.trim().length > 0;
  const hasStats = stats.items && stats.items.length > 0;

  // Regex to dynamically split headline around key accent terms for highlight wrapping
  const headlineParts = hasHeadline ? personal.headline.split(/(Laravel & React)/) : [];

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    if (personal.resumeUrl) {
      window.open(personal.resumeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section
      id="hero"
      variant="default"
      className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Background Decorative Grid and Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_50%)] opacity-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,var(--color-border-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-light)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-30" />
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Profile Details / Skeletons */}
          <div className="flex flex-col items-start gap-6 text-left lg:col-span-7">
            {/* Availability status tag */}
            <Reveal direction="up" delay={0.1}>
              {hasTagline ? (
                <Badge variant="primary" className="px-3 py-1">
                  {personal.tagline}
                </Badge>
              ) : (
                <div className="bg-border/40 h-6 w-44 animate-pulse rounded-full" />
              )}
            </Reveal>

            {/* Headline Header */}
            <Reveal direction="up" delay={0.2}>
              {hasHeadline ? (
                <Heading as="h1" size="5xl" className="max-w-[15ch] tracking-tight">
                  {headlineParts.map((part, idx) =>
                    part === 'Laravel & React' ? (
                      <GradientText key={idx}>{part}</GradientText>
                    ) : (
                      part
                    )
                  )}
                </Heading>
              ) : (
                <div className="w-full space-y-3">
                  <div className="bg-border/40 h-12 w-11/12 animate-pulse rounded-md" />
                  <div className="bg-border/40 h-12 w-2/3 animate-pulse rounded-md" />
                </div>
              )}
            </Reveal>

            {/* Paragraph Bio */}
            <Reveal direction="up" delay={0.3}>
              {hasBio ? (
                <p className="text-muted-foreground max-w-[60ch] text-base leading-relaxed sm:text-lg">
                  {personal.bio}
                </p>
              ) : (
                <div className="w-full max-w-[60ch] space-y-2.5">
                  <div className="bg-border/40 h-4 w-full animate-pulse rounded" />
                  <div className="bg-border/40 h-4 w-11/12 animate-pulse rounded" />
                  <div className="bg-border/40 h-4 w-3/4 animate-pulse rounded" />
                </div>
              )}
            </Reveal>

            {/* Action buttons */}
            <Reveal direction="up" delay={0.4}>
              {hasHeadline ? (
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" onClick={handleScrollToProjects}>
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button variant="outline" onClick={handleDownloadResume}>
                    Download Resume
                    <FileDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="bg-border/40 h-10 w-36 animate-pulse rounded-md" />
                  <div className="bg-border/40 h-10 w-36 animate-pulse rounded-md" />
                </div>
              )}
            </Reveal>

            {/* Statistics details row */}
            <Reveal direction="up" delay={0.5}>
              <div className="border-border/40 flex w-full flex-wrap gap-x-8 gap-y-4 border-t pt-6">
                {hasStats ? (
                  stats.items.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span className="text-foreground font-heading text-2xl font-bold tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-muted-foreground mt-0.5 text-[10px] font-semibold tracking-widest uppercase">
                        {stat.label}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex w-full gap-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="bg-border/40 h-7 w-14 animate-pulse rounded" />
                        <div className="bg-border/40 h-3 w-16 animate-pulse rounded" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Profile Avatar Graphic */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
            <Reveal direction="up" delay={0.3} className="relative">
              {/* Backglow element */}
              <div className="from-primary to-accent pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-r opacity-20 blur-3xl" />

              {/* Decorative target bounds shape */}
              <div className="border-border/30 pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border [mask-image:linear-gradient(to_bottom,black,transparent)]" />

              {/* Image box frame */}
              <div className="border-border bg-surface shadow-card relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl border sm:h-80 sm:w-80">
                {hasAvatar ? (
                  <img
                    src={personal.avatar}
                    alt={personal.fullName || 'Profile Avatar'}
                    loading="lazy"
                    className="h-full w-full object-cover contrast-110 grayscale transition-all duration-500 hover:grayscale-0"
                  />
                ) : (
                  <div className="bg-muted/20 flex h-full w-full animate-pulse items-center justify-center">
                    <User className="text-muted-foreground/30 h-16 w-16" aria-hidden="true" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = 'HeroSection';
