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
    <svg
      className="mr-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  ArrowRight: (
    <svg
      className="ml-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  Github: (
    <svg
      className="mr-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  ExternalLink: (
    <svg
      className="mr-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Home: (
    <svg
      className="mr-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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
    description: project
      ? project.description
      : 'Detailed project case study for Muhammad Amjad Subhani portfolio.',
    canonicalPath: `/projects/${slug}`,
    keywords: project
      ? `${project.title}, case study, ${project.technologies.join(', ')}, Laravel Developer, React Developer, Full Stack Developer, Pakistan`
      : 'Laravel, React, Full Stack Developer, PHP, JavaScript, TypeScript',
  });

  // Scroll viewport to top on page mount/transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Section className="flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
        <Container className="flex flex-col items-center gap-6">
          <Heading as="h1" size="2xl" className="text-foreground font-extrabold tracking-tight">
            Case Study Not Found
          </Heading>
          <p className="text-muted-foreground max-w-[40ch] text-sm">
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
    <Section className="relative flex flex-col gap-16 overflow-hidden py-16 md:py-24">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-hover)_0%,transparent_35%)] opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-hover)_0%,transparent_35%)] opacity-[0.02]" />

      <Container className="flex flex-col gap-12">
        {/* Breadcrumb Back Button */}
        <Reveal direction="up" delay={0.05}>
          <Link
            to="/#projects"
            className="text-muted-foreground hover:text-primary focus-visible:outline-primary inline-flex items-center rounded-sm py-1 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {Icons.ArrowLeft}
            Back to Projects
          </Link>
        </Reveal>

        {/* HERO SECTION */}
        <div className="border-border/20 flex w-full flex-col gap-6 border-b pb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.badgeLabel && (
              <span className="text-primary bg-primary/5 border-primary/15 rounded border px-3 py-1.5 text-[10px] leading-none font-extrabold tracking-widest uppercase select-none">
                {project.badgeLabel}
              </span>
            )}
            <span className="text-muted-foreground/80 bg-foreground/[0.02] border-border/40 rounded border px-3 py-1.5 text-[10px] leading-none font-extrabold tracking-widest uppercase select-none">
              {project.category}
            </span>
            <span
              className={cn(
                'rounded-full border px-2.5 py-1 text-[8px] leading-none font-bold tracking-wider uppercase select-none',
                {
                  'border-emerald-500/20 bg-emerald-500/10 text-emerald-500':
                    project.status === 'completed' || project.status === 'maintained',
                  'border-amber-500/20 bg-amber-500/10 text-amber-500':
                    project.status === 'in-progress',
                  'border-blue-500/20 bg-blue-500/10 text-blue-500': project.status === 'planning',
                }
              )}
            >
              {project.status}
            </span>
          </div>

          <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              <Heading
                as="h1"
                size="4xl"
                className="text-foreground leading-none font-black tracking-tighter"
              >
                {project.title}
              </Heading>
              <p className="text-muted-foreground text-sm leading-none font-semibold select-none">
                {project.role} &bull; {project.year}
              </p>
            </div>

            {/* Actions link buttons */}
            {(project.githubUrl || project.demoUrl) && (
              <div className="flex flex-wrap items-center gap-3.5">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    className="hover:border-primary/30 hover:text-primary flex h-9 items-center rounded-md text-xs font-semibold transition-colors"
                  >
                    {Icons.Github}
                    View Code
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                    className="flex h-9 items-center rounded-md text-xs font-semibold transition-opacity hover:opacity-90"
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
                className="bg-surface/30 border-border/40 text-muted-foreground/80 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase select-none"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* DETAILS GRID LAYOUT */}
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Main Case Study Information Column (lg:col-span-8) */}
          <div className="flex flex-col gap-10 lg:col-span-8">
            {/* 1. Overview */}
            {project.overview && (
              <Reveal direction="up" delay={0.1} className="space-y-4">
                <Heading
                  as="h3"
                  size="lg"
                  className="text-foreground border-primary border-l-2 pl-3 font-extrabold tracking-tight"
                >
                  Overview
                </Heading>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed sm:text-base">
                  {project.overview}
                </p>
              </Reveal>
            )}

            {/* 2. Problem Statement */}
            {project.problem && (
              <Reveal direction="up" delay={0.15} className="space-y-4">
                <Heading
                  as="h3"
                  size="lg"
                  className="text-foreground border-primary border-l-2 pl-3 font-extrabold tracking-tight"
                >
                  The Problem
                </Heading>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed sm:text-base">
                  {project.problem}
                </p>
              </Reveal>
            )}

            {/* 3. Solution Architected */}
            {project.solution && (
              <Reveal direction="up" delay={0.2} className="space-y-4">
                <Heading
                  as="h3"
                  size="lg"
                  className="text-foreground border-primary border-l-2 pl-3 font-extrabold tracking-tight"
                >
                  The Solution
                </Heading>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed sm:text-base">
                  {project.solution}
                </p>
              </Reveal>
            )}

            {/* 4. Software Architecture */}
            {project.architecture && (
              <Reveal direction="up" delay={0.25} className="space-y-4">
                <Heading
                  as="h3"
                  size="lg"
                  className="text-foreground border-primary border-l-2 pl-3 font-extrabold tracking-tight"
                >
                  Software Architecture
                </Heading>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed sm:text-base">
                  {project.architecture}
                </p>
              </Reveal>
            )}

            {/* 5. Key Challenges Solved */}
            {project.challenges && (
              <Reveal direction="up" delay={0.3} className="space-y-4">
                <Heading
                  as="h3"
                  size="lg"
                  className="text-foreground border-primary border-l-2 pl-3 font-extrabold tracking-tight"
                >
                  Key Challenges & Solutions
                </Heading>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed sm:text-base">
                  {project.challenges}
                </p>
              </Reveal>
            )}

            {/* 6. Outcome Impact */}
            {project.results && (
              <Reveal direction="up" delay={0.35} className="space-y-4">
                <Heading
                  as="h3"
                  size="lg"
                  className="text-foreground border-primary border-l-2 pl-3 font-extrabold tracking-tight"
                >
                  Outcome & Results
                </Heading>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed sm:text-base">
                  {project.results}
                </p>
              </Reveal>
            )}
          </div>

          {/* Sidebar / Highlights & Gallery Column (lg:col-span-4) */}
          <div className="flex flex-col gap-10 lg:sticky lg:top-24 lg:col-span-4">
            {/* Key Features widget list */}
            {project.features && project.features.length > 0 && (
              <Reveal direction="up" delay={0.2}>
                <div className="border-border/40 bg-surface/20 flex flex-col gap-4 rounded-xl border p-5 backdrop-blur-md sm:p-6">
                  <Heading
                    as="h4"
                    size="sm"
                    className="text-foreground border-border/10 border-b pb-3 leading-none font-bold tracking-tight"
                  >
                    Key Features
                  </Heading>
                  <ul className="space-y-3.5">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground/90 flex items-start gap-2.5 text-xs leading-tight"
                      >
                        <span className="bg-primary mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
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
                <Heading
                  as="h4"
                  size="sm"
                  className="text-foreground leading-none font-bold tracking-tight"
                >
                  Project Gallery
                </Heading>
                <div className="grid grid-cols-1 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="border-border/40 bg-muted/10 group/img relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-md border select-none"
                    >
                      <img
                        src={img}
                        alt={`${project.title} Interface Screenshot ${idx + 1}`}
                        loading="lazy"
                        className="sharp-img h-full w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* BOTTOM CIRCULAR NAVIGATION FOOTER */}
        <div className="border-border/20 mt-6 flex w-full flex-wrap items-center justify-between gap-6 border-t pt-10">
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group hover:bg-surface/30 flex flex-col items-start gap-1 rounded-lg p-2 transition-all duration-300"
            >
              <span className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase">
                Previous Project
              </span>
              <span className="text-foreground group-hover:text-primary flex items-center text-sm font-extrabold transition-colors">
                {Icons.ArrowLeft}
                {prevProject.title}
              </span>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group hover:bg-surface/30 flex flex-col items-end gap-1 rounded-lg p-2 transition-all duration-300"
            >
              <span className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase">
                Next Project
              </span>
              <span className="text-foreground group-hover:text-primary flex items-center text-sm font-extrabold transition-colors">
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
