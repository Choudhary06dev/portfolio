import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/utils/cn';
import { useSEO } from '@/hooks/useSEO';

// Inline vector SVG icon maps
const Icons = {
  ArrowLeft: (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  ArrowRight: (
    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  Github: (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  ExternalLink: (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Home: (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find active project from slug parameters
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Dynamic SEO configuration for active project case study
  useSEO({
    title: project ? `${project.title} | Case Study` : 'Project Detail | Muhammad Amjad Subhani',
    description: project ? project.description : 'Detailed project case study for Muhammad Amjad Subhani portfolio.',
    canonicalPath: `/projects/${slug}`,
    keywords: project ? `${project.title}, case study, ${project.technologies.join(', ')}, Laravel Developer, React Developer, Full Stack Developer, Pakistan` : 'Laravel, React, Full Stack Developer, PHP, JavaScript, TypeScript',
  });

  // Scroll viewport to top on page mount/transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Section className="py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <Container className="flex flex-col items-center gap-6">
          <Heading as="h1" size="2xl" className="tracking-tight text-foreground font-extrabold">
            Case Study Not Found
          </Heading>
          <p className="text-muted-foreground text-sm max-w-[40ch]">
            The case study page you are looking for does not exist or has been relocated.
          </p>
          <Button variant="primary" onClick={() => navigate('/')} className="rounded-md">
            {Icons.Home}
            Back to Home
          </Button>
        </Container>
      </Section>
    );
  }

  // Round-robin circular navigation links
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <Section className="py-16 md:py-24 relative overflow-hidden flex flex-col gap-16">
      {/* Decorative glows */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_35%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-hover)_0%,transparent_35%)] opacity-[0.02] pointer-events-none" />

      <Container className="flex flex-col gap-12">
        {/* Breadcrumb Back Button */}
        <Reveal direction="up" delay={0.05}>
          <Link
            to="/#projects"
            className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm py-1"
          >
            {Icons.ArrowLeft}
            Back to Projects
          </Link>
        </Reveal>

        {/* HERO SECTION */}
        <div className="flex flex-col gap-6 w-full border-b border-border/20 pb-10">
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.badgeLabel && (
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest leading-none bg-primary/5 px-3 py-1.5 rounded border border-primary/15 select-none">
                {project.badgeLabel}
              </span>
            )}
            <span className="text-[10px] font-extrabold text-muted-foreground/80 uppercase tracking-widest leading-none bg-foreground/[0.02] px-3 py-1.5 rounded border border-border/40 select-none">
              {project.category}
            </span>
            <span className={cn(
              "text-[8px] font-bold uppercase tracking-wider leading-none px-2.5 py-1 rounded-full border select-none",
              {
                "bg-emerald-500/10 text-emerald-500 border-emerald-500/20": project.status === 'completed' || project.status === 'maintained',
                "bg-amber-500/10 text-amber-500 border-amber-500/20": project.status === 'in-progress',
                "bg-blue-500/10 text-blue-500 border-blue-500/20": project.status === 'planning',
              }
            )}>
              {project.status}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
            <div className="space-y-3">
              <Heading
                as="h1"
                size="4xl"
                className="tracking-tighter leading-none font-black text-foreground"
              >
                {project.title}
              </Heading>
              <p className="text-muted-foreground text-sm font-semibold leading-none select-none">
                {project.role} &bull; {project.year}
              </p>
            </div>

            {/* Actions link buttons */}
            {(project.githubUrl || project.demoUrl) && (
              <div className="flex items-center gap-3.5 flex-wrap">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    className="hover:border-primary/30 hover:text-primary transition-colors text-xs font-semibold flex items-center h-9 rounded-md"
                  >
                    {Icons.Github}
                    View Code
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                    className="hover:opacity-90 transition-opacity text-xs font-semibold flex items-center h-9 rounded-md"
                  >
                    {Icons.ExternalLink}
                    Live Demo
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Tech Stack Badge chips */}
          <div className="flex flex-wrap gap-1.5 pt-4">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="py-1 px-2.5 text-[9px] font-bold uppercase tracking-widest bg-surface/30 border-border/40 select-none text-muted-foreground/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* DETAILS GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">

          {/* Main Case Study Information Column (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col gap-10">

            {/* 1. Overview */}
            {project.overview && (
              <Reveal direction="up" delay={0.1} className="space-y-4">
                <Heading as="h3" size="lg" className="tracking-tight text-foreground font-extrabold border-l-2 border-primary pl-3">
                  Overview
                </Heading>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                  {project.overview}
                </p>
              </Reveal>
            )}

            {/* 2. Problem Statement */}
            {project.problem && (
              <Reveal direction="up" delay={0.15} className="space-y-4">
                <Heading as="h3" size="lg" className="tracking-tight text-foreground font-extrabold border-l-2 border-primary pl-3">
                  The Problem
                </Heading>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                  {project.problem}
                </p>
              </Reveal>
            )}

            {/* 3. Solution Architected */}
            {project.solution && (
              <Reveal direction="up" delay={0.2} className="space-y-4">
                <Heading as="h3" size="lg" className="tracking-tight text-foreground font-extrabold border-l-2 border-primary pl-3">
                  The Solution
                </Heading>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                  {project.solution}
                </p>
              </Reveal>
            )}

            {/* 4. Software Architecture */}
            {project.architecture && (
              <Reveal direction="up" delay={0.25} className="space-y-4">
                <Heading as="h3" size="lg" className="tracking-tight text-foreground font-extrabold border-l-2 border-primary pl-3">
                  Software Architecture
                </Heading>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                  {project.architecture}
                </p>
              </Reveal>
            )}

            {/* 5. Key Challenges Solved */}
            {project.challenges && (
              <Reveal direction="up" delay={0.3} className="space-y-4">
                <Heading as="h3" size="lg" className="tracking-tight text-foreground font-extrabold border-l-2 border-primary pl-3">
                  Key Challenges & Solutions
                </Heading>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                  {project.challenges}
                </p>
              </Reveal>
            )}

            {/* 6. Outcome Impact */}
            {project.results && (
              <Reveal direction="up" delay={0.35} className="space-y-4">
                <Heading as="h3" size="lg" className="tracking-tight text-foreground font-extrabold border-l-2 border-primary pl-3">
                  Outcome & Results
                </Heading>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                  {project.results}
                </p>
              </Reveal>
            )}

          </div>

          {/* Sidebar / Highlights & Gallery Column (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:sticky lg:top-24">

            {/* Key Features widget list */}
            {project.features && project.features.length > 0 && (
              <Reveal direction="up" delay={0.2}>
                <div className="rounded-xl border border-border/40 bg-surface/20 backdrop-blur-md p-5 sm:p-6 flex flex-col gap-4">
                  <Heading as="h4" size="sm" className="tracking-tight text-foreground font-bold leading-none border-b border-border/10 pb-3">
                    Key Features
                  </Heading>
                  <ul className="space-y-3.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Gallery Screenshots Showcase */}
            {project.gallery && project.gallery.length > 0 && (
              <Reveal direction="up" delay={0.3} className="space-y-4">
                <Heading as="h4" size="sm" className="tracking-tight text-foreground font-bold leading-none">
                  Project Gallery
                </Heading>
                <div className="grid grid-cols-1 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-[16/10] overflow-hidden rounded-md border border-border/40 bg-muted/10 relative select-none group/img cursor-zoom-in"
                    >
                      <img
                        src={img}
                        alt={`${project.title} Interface Screenshot ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.02] sharp-img"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

          </div>

        </div>

        {/* BOTTOM CIRCULAR NAVIGATION FOOTER */}
        <div className="flex items-center justify-between border-t border-border/20 pt-10 mt-6 flex-wrap gap-6 w-full">
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start gap-1 p-2 rounded-lg hover:bg-surface/30 transition-all duration-300"
            >
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                Previous Project
              </span>
              <span className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors flex items-center">
                {Icons.ArrowLeft}
                {prevProject.title}
              </span>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-1 p-2 rounded-lg hover:bg-surface/30 transition-all duration-300"
            >
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                Next Project
              </span>
              <span className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors flex items-center">
                {nextProject.title}
                {Icons.ArrowRight}
              </span>
            </Link>
          )}
        </div>

      </Container>
    </Section>
  );
};

ProjectDetail.displayName = 'ProjectDetail';
