import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { personal } from '@/data/personal';
import { Reveal } from '@/components/common/Reveal';

/**
 * Premium About Section (Complete Rebuild v3).
 * Minimalist layout highlighting a 2-paragraph personal introduction, key focus pills,
 * and a single "Currently" role card with minimal focus metrics blocks.
 */
export const AboutSection: React.FC = () => {
  return (
    <Section
      id="about"
      variant="surface"
      className="py-12 md:py-16 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.03] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 58% Content Space */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            <div className="space-y-3">
              {/* Section Badge */}
              <Reveal direction="up" delay={0.1}>
                <Badge
                  variant="primary"
                  className="py-1 px-3 text-[10px] font-semibold leading-none uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
                >
                  About
                </Badge>
              </Reveal>

              {/* Heading Title */}
              <Reveal direction="up" delay={0.2}>
                <Heading
                  as="h2"
                  size="3xl"
                  className="tracking-tight leading-tight font-extrabold text-foreground"
                >
                  Who I Am
                </Heading>
              </Reveal>
            </div>

            {/* 2 Text-only Biography Paragraphs */}
            <Reveal direction="up" delay={0.3} className="space-y-4 w-full">
              {personal.bio.split('\n\n').map((para, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground text-base max-w-[54ch] leading-relaxed text-justify"
                >
                  {para}
                </p>
              ))}
            </Reveal>

            {/* What I Focus On Pills */}
            <Reveal direction="up" delay={0.4} className="space-y-3 w-full mt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 pl-0.5">
                What I Focus On
              </span>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {personal.focusPills.map((pill) => (
                  <Badge
                    key={pill}
                    variant="outline"
                    className="py-1 px-2.5 text-[9px] font-bold uppercase tracking-widest bg-surface/30 hover:border-primary/20 hover:text-primary transition-all duration-300 pointer-events-none"
                  >
                    {pill}
                  </Badge>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Right Column: 42% Visual Space Card & Metrics */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            
            {/* Currently Card */}
            <Reveal direction="up" delay={0.3} className="w-full">
              <div className="relative p-5 rounded-2xl border border-border/40 bg-surface/20 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-primary/15">
                <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none">
                  Currently
                </span>
                <h3 className="text-sm font-extrabold text-foreground mt-3 leading-none">
                  {personal.currentRole.position}
                </h3>
                <span className="text-[10px] text-muted-foreground/80 font-semibold mt-1.5 block">
                  {personal.currentRole.company} &bull; {personal.currentRole.period}
                </span>
                <p className="text-xs text-muted-foreground/60 leading-relaxed mt-2.5">
                  {personal.currentRole.description}
                </p>
              </div>
            </Reveal>

            {/* 4 Premium metrics blocks */}
            <Reveal direction="up" delay={0.4} className="w-full">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 p-5 rounded-2xl border border-border/20 bg-surface/10 backdrop-blur-sm">
                {personal.focusMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1 items-start">
                    <span className="text-xl font-extrabold tracking-tight text-foreground font-heading leading-none">
                      {metric.value}
                    </span>
                    <span className="text-[9px] text-muted-foreground/80 font-bold uppercase tracking-wider leading-normal">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>

        </div>
      </Container>
    </Section>
  );
};

AboutSection.displayName = 'AboutSection';
