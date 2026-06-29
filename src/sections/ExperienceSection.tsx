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
    <span className="inline-block relative overflow-hidden h-[1.25em] min-w-[220px] sm:min-w-[280px] align-bottom select-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 w-full font-black bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent"
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
      setCount(end);
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

  return <span ref={ref}>{count}{suffix}</span>;
};

/**
 * Timeline line that grows from top to bottom when in viewport.
 */
const TimelineGrowLine: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/20 overflow-hidden hidden md:block">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full bg-gradient-to-b from-primary via-accent to-transparent origin-top"
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
    <Section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decorative Mesh & Grids */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary-hover)_0%,transparent_35%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-accent-hover)_0%,transparent_35%)] opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.01] pointer-events-none" />

      <Container>
        <div className="flex flex-col gap-10 w-full">
          
          {/* Top Panel Card Wrapper (Visual upgrade to avoid simple layouts) */}
          <Reveal direction="up" delay={0.1} duration={0.8} className="w-full">
            <motion.div 
              whileHover={{ scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="relative group overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-primary/10 via-border/50 to-accent/10 hover:from-primary/25 hover:to-accent/25 transition-all duration-300 ease-out shadow-sm w-full"
            >
              
              {/* Inner Glass Container with subtle grid */}
              <div className="relative rounded-[11px] p-6 sm:p-8 bg-surface/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-[0.02] pointer-events-none" />
                <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

                {/* Left Column: Heading & Sliding Words */}
                <div className="lg:col-span-5 flex flex-col items-start gap-3.5 relative">
                  <Badge
                    variant="primary"
                    className="py-1 px-3 text-[10px] font-semibold leading-none uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
                  >
                    Experience
                  </Badge>
                  
                  <Heading
                    as="h2"
                    size="3xl"
                    className="tracking-tighter leading-[1.12] font-black text-foreground flex flex-col gap-1 items-start"
                  >
                    <span>Engineering as a</span>
                    <RollingText />
                  </Heading>
                </div>

                {/* Right Column: Description & Metric Cards */}
                <div className="lg:col-span-7 flex flex-col gap-6 relative">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify max-w-[58ch]">
                    A record of engineering enterprise ERP platforms, microservices, and reactive frontend dashboards. Focused on turning complex specifications into clean, scalable software frameworks.
                  </p>

                  {/* Horizontal stats widgets */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                    
                    {/* Stat 1: Years of Experience */}
                    <motion.div 
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-4 rounded-lg border border-border/30 bg-surface/20 backdrop-blur-md flex flex-col gap-1.5 shadow-xs hover:border-primary/25 hover:shadow-md transition-all duration-300 ease-out group cursor-default"
                    >
                      <span className="text-2xl font-black text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary leading-none">
                        <CountUp to={2} suffix="+" />
                      </span>
                      <span className="text-[9px] text-muted-foreground/80 font-bold uppercase tracking-widest leading-none mt-1">
                        Years Experience
                      </span>
                    </motion.div>

                    {/* Stat 2: Projects Built */}
                    <motion.div 
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-4 rounded-lg border border-border/30 bg-surface/20 backdrop-blur-md flex flex-col gap-1.5 shadow-xs hover:border-primary/25 hover:shadow-md transition-all duration-300 ease-out group cursor-default"
                    >
                      <span className="text-2xl font-black text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary leading-none">
                        <CountUp to={10} suffix="+" />
                      </span>
                      <span className="text-[9px] text-muted-foreground/80 font-bold uppercase tracking-widest leading-none mt-1">
                        Projects Built
                      </span>
                    </motion.div>

                    {/* Stat 3: Current Role — pulse indicator */}
                    {currentRole && (
                      <motion.div 
                        whileHover={{ y: -4, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="p-4 rounded-lg border border-border/30 bg-surface/20 backdrop-blur-md flex flex-col justify-center items-start shadow-xs hover:border-emerald-500/25 hover:shadow-md transition-all duration-300 ease-out cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                          </span>
                          <span className="text-[10px] font-extrabold text-foreground uppercase tracking-wider leading-none">
                            Active Developer
                          </span>
                        </div>
                        <span className="text-[9px] text-muted-foreground/85 font-semibold mt-2.5 leading-none">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {experience.length === 0 && (
                <div className="col-span-2 text-center py-12 rounded-xl border border-border/40 bg-surface/10">
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
                    className="w-full relative group"
                  >
                    {/* Gradient Border Glassmorphic Wrapper */}
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className={cn(
                        "rounded-xl p-[1px] transition-all duration-300 ease-out shadow-sm h-full",
                        isCurrent
                          ? "bg-gradient-to-tr from-emerald-500/15 via-border/50 to-primary/15 hover:from-emerald-500/40 hover:to-primary/40 hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]"
                          : "bg-gradient-to-tr from-primary/10 via-border/50 to-accent/10 hover:from-primary/30 hover:to-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                      )}
                    >
                      {/* Inner Card Container */}
                      <div className="rounded-[11px] p-5 sm:p-6 bg-surface/20 backdrop-blur-xl flex flex-col gap-4 h-full">
                        
                        {/* Card Header details */}
                        <div className="flex flex-col gap-1.5 w-full relative">
                          <div className="flex items-center justify-between w-full flex-wrap gap-2">
                            <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none">
                              {item.employmentType}
                            </span>
                            
                            {isCurrent ? (
                              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[7px] font-bold uppercase tracking-widest border border-emerald-500/20 select-none">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                Present
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60 font-semibold select-none">
                                <Calendar className="w-3.5 h-3.5 mr-1" />
                                {periodString}
                              </span>
                            )}
                          </div>

                          {/* Job Title & Company details */}
                          <h3 className="text-sm font-extrabold text-foreground mt-2 leading-none font-heading">
                            {item.position}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-[10px] text-muted-foreground/80 font-semibold leading-none flex-wrap">
                            <span>{item.company}</span>
                            {item.location && (
                              <>
                                <span>&bull;</span>
                                <span className="flex items-center gap-0.5">
                                  <MapPin className="w-3 h-3" />
                                  {item.location}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Summary description */}
                        <p className="text-xs text-muted-foreground/75 leading-relaxed border-t border-border/20 pt-3">
                          {item.description}
                        </p>

                        {/* What I Worked On (Premium tag pills) */}
                        {item.workedOn && item.workedOn.length > 0 && (
                          <div className="flex flex-col gap-2 mt-1 border-t border-border/10 pt-3">
                            <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none">
                              What I Worked On
                            </span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {item.workedOn.map((mod, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-foreground/[0.02] border border-border/40 text-[9px] text-muted-foreground/90 font-medium select-none"
                                >
                                  <span className="w-1 h-1 rounded-full bg-emerald-500/70" />
                                    {mod}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements (Minimalist List) */}
                        {item.responsibilities && item.responsibilities.length > 0 && (
                          <div className="flex flex-col gap-2 mt-1 border-t border-border/10 pt-3">
                            <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none">
                              Achievements
                            </span>
                            <ul className="space-y-2 mt-1">
                              {item.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-[10px] text-muted-foreground/85 leading-relaxed"
                                >
                                  <Sparkles className="w-3 h-3 text-primary/80 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/10">
                          {item.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="py-0.5 px-2 text-[9px] font-bold uppercase tracking-widest bg-surface/30 border-border/40 select-none text-muted-foreground/80 hover:border-primary/20 hover:text-primary transition-colors duration-300"
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
