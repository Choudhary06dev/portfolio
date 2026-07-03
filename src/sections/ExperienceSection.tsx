import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { experience } from '@/data/experience';
import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/utils/cn';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'Software Developer',
  'Laravel Architect',
  'React UI Engineer',
  'ERP Suite Designer',
];

/**
 * Animated vertical rolling/sliding text component using Framer Motion.
 */
const RollingText: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.25em] min-w-[220px] overflow-hidden align-bottom select-none sm:min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="from-primary via-primary-hover to-accent absolute top-0 left-0 w-full bg-gradient-to-r bg-clip-text font-black text-transparent"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/**
 * Interactive Count-Up component that fires exactly when scrolling into viewport.
 */
const CountUp: React.FC<{ to: number; duration?: number; suffix?: string }> = ({
  to,
  duration = 800,
  suffix = '',
}) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  React.useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = to;
    if (start === end) {
      setTimeout(() => {
        setCount(end);
      }, 0);
      return;
    }

    const totalSteps = end;
    const stepTime = Math.max(Math.floor(duration / totalSteps), 50);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/**
 * Timeline line that grows from top to bottom when in viewport.
 */
const TimelineGrowLine: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className="bg-border/20 absolute top-0 bottom-0 left-1/2 hidden w-[2px] -translate-x-1/2 overflow-hidden md:block"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="from-primary via-accent h-full w-full origin-top bg-gradient-to-b to-transparent"
      />
    </div>
  );
};

// --- Motion Variants ---
const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const cardRevealVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Premium Experience Section (Horizontal Grid Layout).
 * Features a top split header (Heading on Left, Summary & Stats on Right)
 * followed by a 2-column layout displaying the two experience blocks side-by-side.
 */
export const ExperienceSection: React.FC = () => {
  const currentRole = experience.find((exp) => !exp.endDate) || experience[0];

  return (
    <Section id="experience" className="relative overflow-hidden py-16 md:py-24">
      {/* Background Decorative Mesh & Grids */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary-hover)_0%,transparent_35%)] opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-accent-hover)_0%,transparent_35%)] opacity-[0.02]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.01]" />

      <Container>
        <div className="flex w-full flex-col gap-10">
          {/* Top Panel Card Wrapper (Visual upgrade to avoid simple layouts) */}
          <Reveal direction="up" delay={0.1} duration={0.8} className="w-full">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="group from-primary/10 via-border/50 to-accent/10 hover:from-primary/25 hover:to-accent/25 relative w-full overflow-hidden rounded-xl bg-gradient-to-r p-[1px] shadow-sm transition-all duration-300 ease-out"
            >
              {/* Inner Glass Container with subtle grid */}
              <div className="bg-surface/10 relative grid grid-cols-1 items-center gap-8 rounded-[11px] p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-12">
                {/* Tech grid overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] bg-[size:3rem_3rem] opacity-[0.02]" />
                <div className="from-primary/5 to-accent/5 pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />

                {/* Left Column: Heading & Sliding Words */}
                <div className="relative flex flex-col items-start gap-3.5 lg:col-span-5">
                  <Badge
                    variant="primary"
                    className="bg-primary/5 text-primary border-primary/15 px-3 py-1 text-[10px] leading-none font-semibold tracking-wider uppercase"
                  >
                    Experience
                  </Badge>

                  <Heading
                    as="h2"
                    size="3xl"
                    className="text-foreground flex flex-col items-start gap-1 leading-[1.12] font-black tracking-tighter"
                  >
                    <span>Engineering as a</span>
                    <RollingText />
                  </Heading>
                </div>

                {/* Right Column: Description & Metric Cards */}
                <div className="relative flex flex-col gap-6 lg:col-span-7">
                  <p className="text-muted-foreground max-w-[58ch] text-justify text-sm leading-relaxed sm:text-base">
                    A record of engineering enterprise ERP platforms, microservices, and reactive
                    frontend dashboards. Focused on turning complex specifications into clean,
                    scalable software frameworks.
                  </p>

                  {/* Horizontal stats widgets */}
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                    {/* Stat 1: Years of Experience */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="border-border/30 bg-surface/20 hover:border-primary/25 group flex cursor-default flex-col gap-1.5 rounded-lg border p-4 shadow-xs backdrop-blur-md transition-all duration-300 ease-out hover:shadow-md"
                    >
                      <span className="text-foreground group-hover:text-primary text-2xl leading-none font-black tracking-tight transition-colors duration-300">
                        <CountUp to={2} suffix="+" />
                      </span>
                      <span className="text-muted-foreground/80 mt-1 text-[9px] leading-none font-bold tracking-widest uppercase">
                        Years Experience
                      </span>
                    </motion.div>

                    {/* Stat 2: Projects Built */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="border-border/30 bg-surface/20 hover:border-primary/25 group flex cursor-default flex-col gap-1.5 rounded-lg border p-4 shadow-xs backdrop-blur-md transition-all duration-300 ease-out hover:shadow-md"
                    >
                      <span className="text-foreground group-hover:text-primary text-2xl leading-none font-black tracking-tight transition-colors duration-300">
                        <CountUp to={10} suffix="+" />
                      </span>
                      <span className="text-muted-foreground/80 mt-1 text-[9px] leading-none font-bold tracking-widest uppercase">
                        Projects Built
                      </span>
                    </motion.div>

                    {/* Stat 3: Current Role — pulse indicator */}
                    {currentRole && (
                      <motion.div
                        whileHover={{ y: -4, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="border-border/30 bg-surface/20 flex cursor-default flex-col items-start justify-center rounded-lg border p-4 shadow-xs backdrop-blur-md transition-all duration-300 ease-out hover:border-emerald-500/25 hover:shadow-md"
                      >
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                          </span>
                          <span className="text-foreground text-[10px] leading-none font-extrabold tracking-wider uppercase">
                            Active Developer
                          </span>
                        </div>
                        <span className="text-muted-foreground/85 mt-2.5 text-[9px] leading-none font-semibold">
                          At {currentRole.company}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Bottom Row: Experience cards with timeline grow */}
          <div className="relative mt-4">
            {/* Timeline line that grows from top */}
            <TimelineGrowLine />

            <motion.div
              className="grid w-full grid-cols-1 gap-8 md:grid-cols-2"
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {experience.length === 0 && (
                <div className="border-border/40 bg-surface/10 col-span-2 rounded-xl border py-12 text-center">
                  <span className="text-muted-foreground text-xs font-semibold">
                    No employment history available.
                  </span>
                </div>
              )}

              {experience.map((item) => {
                const isCurrent = !item.endDate;

                // Format period label
                const startYearMonth = item.startDate.replace('-', '/');
                const endYearMonth = isCurrent ? 'Present' : item.endDate?.replace('-', '/') || '';
                const periodString = `${startYearMonth} — ${endYearMonth}`;

                return (
                  <motion.div
                    key={`${item.company}-${item.position}`}
                    variants={cardRevealVariant}
                    className="group relative w-full"
                  >
                    {/* Gradient Border Glassmorphic Wrapper */}
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className={cn(
                        'h-full rounded-xl p-[1px] shadow-sm transition-all duration-300 ease-out',
                        isCurrent
                          ? 'via-border/50 to-primary/15 hover:to-primary/40 bg-gradient-to-tr from-emerald-500/15 hover:from-emerald-500/40 hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]'
                          : 'from-primary/10 via-border/50 to-accent/10 hover:from-primary/30 hover:to-accent/30 bg-gradient-to-tr hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                      )}
                    >
                      {/* Inner Card Container */}
                      <div className="bg-surface/20 flex h-full flex-col gap-4 rounded-[11px] p-5 backdrop-blur-xl sm:p-6">
                        {/* Card Header details */}
                        <div className="relative flex w-full flex-col gap-1.5">
                          <div className="flex w-full flex-wrap items-center justify-between gap-2">
                            <span className="text-primary text-[9px] leading-none font-extrabold tracking-widest uppercase">
                              {item.employmentType}
                            </span>

                            {isCurrent ? (
                              <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[7px] font-bold tracking-widest text-emerald-500 uppercase select-none">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                Present
                              </span>
                            ) : (
                              <span className="text-muted-foreground/60 flex items-center gap-1 text-[9px] font-semibold select-none">
                                <Calendar className="mr-1 h-3.5 w-3.5" />
                                {periodString}
                              </span>
                            )}
                          </div>

                          {/* Job Title & Company details */}
                          <h3 className="text-foreground font-heading mt-2 text-sm leading-none font-extrabold">
                            {item.position}
                          </h3>

                          <div className="text-muted-foreground/80 flex flex-wrap items-center gap-2 text-[10px] leading-none font-semibold">
                            <span>{item.company}</span>
                            {item.location && (
                              <>
                                <span>&bull;</span>
                                <span className="flex items-center gap-0.5">
                                  <MapPin className="h-3 w-3" />
                                  {item.location}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Summary description */}
                        <p className="text-muted-foreground/75 border-border/20 border-t pt-3 text-xs leading-relaxed">
                          {item.description}
                        </p>

                        {/* What I Worked On (Premium tag pills) */}
                        {item.workedOn && item.workedOn.length > 0 && (
                          <div className="border-border/10 mt-1 flex flex-col gap-2 border-t pt-3">
                            <span className="text-primary text-[9px] leading-none font-extrabold tracking-widest uppercase">
                              What I Worked On
                            </span>
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {item.workedOn.map((mod, i) => (
                                <span
                                  key={i}
                                  className="bg-foreground/[0.02] border-border/40 text-muted-foreground/90 inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-[9px] font-medium select-none"
                                >
                                  <span className="h-1 w-1 rounded-full bg-emerald-500/70" />
                                  {mod}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements (Minimalist List) */}
                        {item.responsibilities && item.responsibilities.length > 0 && (
                          <div className="border-border/10 mt-1 flex flex-col gap-2 border-t pt-3">
                            <span className="text-primary text-[9px] leading-none font-extrabold tracking-widest uppercase">
                              Achievements
                            </span>
                            <ul className="mt-1 space-y-2">
                              {item.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="text-muted-foreground/85 flex items-start gap-2.5 text-[10px] leading-relaxed"
                                >
                                  <Sparkles
                                    className="text-primary/80 mt-0.5 h-3 w-3 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies Tags */}
                        <div className="border-border/10 mt-auto flex flex-wrap gap-1.5 border-t pt-3">
                          {item.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-surface/30 border-border/40 text-muted-foreground/80 hover:border-primary/20 hover:text-primary px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase transition-colors duration-300 select-none"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

ExperienceSection.displayName = 'ExperienceSection';
