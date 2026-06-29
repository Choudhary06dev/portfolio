import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { personal } from '@/data/personal';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { Reveal } from '@/components/common/Reveal';

/**
 * Premium About Section (Complete Redesign v2).
 * Focuses on editorial professional history on the left, and an interactive timeline on the right.
 */
export const AboutSection: React.FC = () => {
  // Extract only the first two paragraphs for Left Column bio
  const bioParagraphs = personal.bio.split('\n\n').slice(0, 2);

  return (
    <Section
      id="about"
      variant="surface"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background soft color glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary-hover)_0%,transparent_35%)] opacity-[0.03] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: 65% space */}
          <div className="lg:col-span-8 flex flex-col items-start gap-8">
            
            <div className="space-y-4">
              {/* Badge */}
              <Reveal direction="up" delay={0.1}>
                <Badge
                  variant="primary"
                  className="py-1 px-3 text-[10px] font-semibold leading-none uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
                >
                  About
                </Badge>
              </Reveal>

              {/* Editorial Large Heading */}
              <Reveal direction="up" delay={0.2}>
                <Heading
                  as="h2"
                  size="3xl"
                  className="tracking-tight leading-tight font-extrabold text-foreground"
                >
                  Building software that solves real business problems.
                </Heading>
              </Reveal>
            </div>

            {/* Concise Biography (2 Paragraphs) */}
            <Reveal direction="up" delay={0.3} className="space-y-4 w-full">
              {bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground text-base sm:text-lg max-w-[58ch] leading-relaxed text-justify"
                >
                  {para}
                </p>
              ))}
            </Reveal>

            {/* Journey Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-border/20 pt-8 mt-4">
              
              {/* Professional Journey Column */}
              <Reveal direction="up" delay={0.4} className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 pl-0.5">
                  Professional Journey
                </span>
                <ul className="space-y-3">
                  {experience.map((item) => (
                    <li key={item.company} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-xs leading-none">
                          {item.company}
                        </span>
                        <span className="text-[10px] text-muted-foreground/60 mt-1 leading-none">
                          {item.position}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Academic Education Column */}
              <Reveal direction="up" delay={0.4} className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 pl-0.5">
                  Education
                </span>
                <ul className="space-y-3">
                  {education.map((item) => (
                    <li key={item.institution} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-xs leading-none">
                          {item.degree}
                        </span>
                        <span className="text-[10px] text-muted-foreground/60 mt-1 leading-none">
                          {item.institution} &bull; {item.startDate}&ndash;{item.endDate}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

            </div>

            {/* Current Focus Pills */}
            <Reveal direction="up" delay={0.5} className="space-y-4 w-full border-t border-border/20 pt-8 mt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 pl-0.5">
                Current Focus
              </span>
              <div className="flex flex-wrap gap-2 max-w-2xl">
                {['Laravel', 'React', 'ERP', 'REST APIs', 'AI Solutions', 'PostgreSQL', 'Clean Architecture', 'Performance'].map((pill) => (
                  <Badge
                    key={pill}
                    variant="outline"
                    className="py-1 px-2.5 text-[9px] font-bold uppercase tracking-widest bg-surface/30 hover:border-primary/30 hover:text-primary transition-all duration-300 pointer-events-none"
                  >
                    {pill}
                  </Badge>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Right Column: 35% space (Timeline) */}
          <div className="lg:col-span-4 w-full flex flex-col gap-6">
            <Reveal direction="up" delay={0.3} className="w-full flex flex-col gap-6">
              
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 pl-1">
                Career History
              </span>
              
              {/* Premium Vertical Timeline */}
              <div className="relative pl-6 flex flex-col gap-8 w-full">
                
                {/* Timeline vertical line */}
                <div
                  className="absolute left-2.5 top-2.5 bottom-2.5 w-[1px] bg-border/40"
                  aria-hidden="true"
                />

                {experience.map((item) => {
                  const isCurrent = !item.endDate;
                  const displayYear = isCurrent ? 'Present' : item.startDate.split('-')[0];

                  return (
                    <div key={item.company} className="relative flex flex-col items-start gap-2 group">
                      
                      {/* Timeline dot */}
                      <div
                        className="absolute left-[-20px] top-1.5 w-2 h-2 rounded-full border border-primary bg-background group-hover:bg-primary transition-colors duration-300"
                        aria-hidden="true"
                      />

                      {/* Display card */}
                      <div className="w-full p-4 rounded-xl border border-border/40 bg-surface/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-primary/15 hover:bg-surface/30 hover:-translate-y-0.5">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                          {displayYear}
                        </span>
                        <h4 className="text-xs font-extrabold text-foreground mt-2 leading-none">
                          {item.position}
                        </h4>
                        <span className="text-[10px] text-muted-foreground/80 font-semibold mt-1 block">
                          {item.company}
                        </span>
                        <p className="text-[11px] text-muted-foreground/60 leading-relaxed mt-2">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
};

AboutSection.displayName = 'AboutSection';
