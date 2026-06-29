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
    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  ExternalLink: (
    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  BookOpen: (
    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  ArrowRight: (
    <svg className="w-3.5 h-3.5 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <Section id="projects" className="pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_40%)] opacity-[0.04] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-hover)_0%,transparent_40%)] opacity-[0.03] pointer-events-none" />

      <Container>
        <div className="flex flex-col gap-12 md:gap-16">

          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto mb-4">
            <Reveal direction="down" delay={0} duration={0.6}>
              <Badge
                variant="primary"
                className="py-1 px-3 text-[10px] font-semibold leading-none uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
              >
                Projects
              </Badge>
            </Reveal>
            <Reveal direction="up" delay={0.1} duration={0.8}>
              <Heading
                as="h2"
                size="4xl"
                className="tracking-tight leading-tight font-extrabold text-foreground"
              >
                Featured Projects
              </Heading>
            </Reveal>
            <Reveal direction="up" delay={0.2} duration={0.7}>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                A curated selection of robust, enterprise-grade applications, custom ERP consoles, and AI solutions.
              </p>
            </Reveal>
          </div>

          {/* Horizontal 3-Column Grid — cards reveal sequentially */}
          {projects.length === 0 ? (
            <div className="w-full text-center py-16 rounded-md border border-border/40 bg-surface/20 backdrop-blur-md">
              <span className="text-muted-foreground text-sm font-semibold">
                No featured projects listed at the moment.
              </span>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
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
                      "flex flex-col w-full h-full rounded-md border shadow-sm transition-all duration-300 ease-out overflow-hidden group cursor-pointer",
                      isFlagship
                        ? "border-primary/25 bg-primary/[0.01] hover:border-primary/50 hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]"
                        : "border-border/40 bg-surface/20 hover:border-primary/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                    )}
                  >

                    {/* Image Preview Container — zooms on hover */}
                    <div className="w-full aspect-[16/10] overflow-hidden border-b border-border/30 relative select-none">
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} Interface Mockup`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                      {/* Soft visual shadow vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                    </div>

                    {/* Content Details Block */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1 items-start gap-4">
                      {/* Category & Status tags */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.featured && (
                          <span className="text-[8px] font-extrabold text-primary uppercase tracking-widest leading-none bg-primary/5 px-2 py-1.5 rounded border border-primary/15 select-none">
                            Flagship
                          </span>
                        )}
                        <span className="text-[8px] font-extrabold text-muted-foreground/80 uppercase tracking-widest leading-none bg-foreground/[0.02] px-2 py-1.5 rounded border border-border/40 select-none">
                          {project.category}
                        </span>
                        <span className={cn(
                          "text-[7px] font-bold uppercase tracking-wider leading-none px-2 py-0.5 rounded-full border select-none",
                          {
                            "bg-emerald-500/10 text-emerald-500 border-emerald-500/20": project.status === 'completed' || project.status === 'maintained',
                            "bg-amber-500/10 text-amber-500 border-amber-500/20": project.status === 'in-progress',
                            "bg-blue-500/10 text-blue-500 border-blue-500/20": project.status === 'planning',
                          }
                        )}>
                          {project.status}
                        </span>
                      </div>

                      {/* Title and Short Biography */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-muted-foreground/60 leading-none">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed text-justify">
                          {project.description}
                        </p>
                      </div>

                      {/* Bullets lists achievements */}
                      {project.highlights && (
                        <ul className="space-y-1.5 border-t border-border/10 pt-3 w-full">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-[10px] text-muted-foreground/90 leading-tight">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech stack Badge chips */}
                      <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-border/10 w-full">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="py-0.5 px-1.5 text-[8px] font-bold uppercase tracking-wider bg-surface/30 border-border/40 select-none text-muted-foreground/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions link buttons — arrow slides on hover */}
                      {(project.githubUrl || project.demoUrl || project.caseStudyUrl) && (
                        <div className="flex items-center gap-2 mt-2 w-full flex-wrap">
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenLink(project.githubUrl)}
                              className="hover:border-primary/30 hover:text-primary transition-all duration-300 ease-out text-[10px] py-1 px-2.5 font-semibold flex items-center h-7"
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
                              className="hover:border-primary/30 hover:text-primary transition-all duration-300 ease-out text-[10px] py-1 px-2.5 font-semibold flex items-center h-7"
                            >
                              {Icons.ExternalLink}
                              Live Demo
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:border-primary/30 hover:text-primary transition-all duration-300 ease-out text-[10px] py-1 px-2.5 font-semibold flex items-center h-7 group"
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
