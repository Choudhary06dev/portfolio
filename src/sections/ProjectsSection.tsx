import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

// Inline premium vector SVGs matching Feather Icons to resolve module export discrepancies
const Icons = {
  Github: (
    <svg
      className="mr-1 h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  ExternalLink: (
    <svg
      className="mr-1 h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  BookOpen: (
    <svg
      className="mr-1 h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  ArrowRight: (
    <svg
      className="ml-1 h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

// --- Motion Variants ---
const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Premium Featured Projects Showcase section.
 * Renders a horizontal grid containing all projects on a single row for desktop screens.
 */
export const ProjectsSection: React.FC = () => {
  const handleOpenLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section id="projects" className="relative overflow-hidden py-16 md:py-24">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_40%)] opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-hover)_0%,transparent_40%)] opacity-[0.03]" />

      <Container>
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Section Header */}
          <div className="mx-auto mb-4 flex max-w-2xl flex-col items-center gap-4 text-center">
            <Reveal direction="down" delay={0} duration={0.6}>
              <Badge
                variant="primary"
                className="bg-primary/5 text-primary border-primary/15 px-3 py-1 text-[10px] leading-none font-semibold tracking-wider uppercase"
              >
                Projects
              </Badge>
            </Reveal>
            <Reveal direction="up" delay={0.1} duration={0.8}>
              <Heading
                as="h2"
                size="4xl"
                className="text-foreground leading-tight font-extrabold tracking-tight"
              >
                Featured Projects
              </Heading>
            </Reveal>
            <Reveal direction="up" delay={0.2} duration={0.7}>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                A curated selection of robust, enterprise-grade applications, custom ERP consoles,
                and AI solutions.
              </p>
            </Reveal>
          </div>

          {/* Horizontal 3-Column Grid — cards reveal sequentially */}
          {projects.length === 0 ? (
            <div className="border-border/40 bg-surface/20 w-full rounded-md border py-16 text-center backdrop-blur-md">
              <span className="text-muted-foreground text-sm font-semibold">
                No featured projects listed at the moment.
              </span>
            </div>
          ) : (
            <motion.div
              className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {projects.map((project) => {
                const isFlagship = project.id === 'project-primepharm';
                return (
                  <motion.div
                    key={project.id}
                    variants={cardVariant}
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className={cn(
                      'group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-md border shadow-sm transition-all duration-300 ease-out',
                      isFlagship
                        ? 'border-primary/25 bg-primary/[0.01] hover:border-primary/50 hover:shadow-[0_8px_40px_rgba(56,189,248,0.20)]'
                        : 'border-border/40 bg-surface/20 hover:border-primary/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                    )}
                  >
                    {/* Image Preview Container — zooms on hover */}
                    <div className="border-border/30 relative aspect-[16/10] w-full overflow-hidden border-b select-none">
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} Interface Mockup`}
                        loading="lazy"
                        className="sharp-img h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Content Details Block */}
                    <div className="flex flex-1 flex-col items-start gap-4 p-5 sm:p-6">
                      {/* Category & Status tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.featured && (
                          <span className="text-primary bg-primary/5 border-primary/15 rounded border px-2 py-1.5 text-[8px] leading-none font-extrabold tracking-widest uppercase select-none">
                            Flagship
                          </span>
                        )}
                        <span className="text-muted-foreground/80 bg-foreground/[0.02] border-border/40 rounded border px-2 py-1.5 text-[8px] leading-none font-extrabold tracking-widest uppercase select-none">
                          {project.category}
                        </span>
                        <span
                          className={cn(
                            'rounded-full border px-2 py-0.5 text-[7px] leading-none font-bold tracking-wider uppercase select-none',
                            {
                              'border-emerald-500/20 bg-emerald-500/10 text-emerald-500':
                                project.status === 'completed' || project.status === 'maintained',
                              'border-amber-500/20 bg-amber-500/10 text-amber-500':
                                project.status === 'in-progress',
                              'border-blue-500/20 bg-blue-500/10 text-blue-500':
                                project.status === 'planning',
                            }
                          )}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Title and Short Biography */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-foreground group-hover:text-primary text-base font-extrabold tracking-tight transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-muted-foreground/60 text-[10px] leading-none font-semibold">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-justify text-xs leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Bullets lists achievements */}
                      {project.highlights && (
                        <ul className="border-border/10 w-full space-y-1.5 border-t pt-3">
                          {project.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="text-muted-foreground/90 flex items-start gap-2 text-[10px] leading-tight"
                            >
                              <span className="bg-primary mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech stack Badge chips */}
                      <div className="border-border/10 mt-auto flex w-full flex-wrap gap-1 border-t pt-3">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-surface/30 border-border/40 text-muted-foreground/80 px-1.5 py-0.5 text-[8px] font-bold tracking-wider uppercase select-none"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions link buttons — arrow slides on hover */}
                      {(project.githubUrl || project.demoUrl || project.caseStudyUrl) && (
                        <div className="mt-2 flex w-full flex-wrap items-center gap-2">
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenLink(project.githubUrl)}
                              className="hover:border-primary/30 hover:text-primary flex h-7 items-center px-2.5 py-1 text-[10px] font-semibold transition-all duration-300 ease-out"
                            >
                              {Icons.Github}
                              Code
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenLink(project.demoUrl)}
                              className="hover:border-primary/30 hover:text-primary flex h-7 items-center px-2.5 py-1 text-[10px] font-semibold transition-all duration-300 ease-out"
                            >
                              {Icons.ExternalLink}
                              Live Demo
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:border-primary/30 hover:text-primary group flex h-7 items-center px-2.5 py-1 text-[10px] font-semibold transition-all duration-300 ease-out"
                          >
                            {Icons.BookOpen}
                            Case Study
                            {Icons.ArrowRight}
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
};

ProjectsSection.displayName = 'ProjectsSection';
