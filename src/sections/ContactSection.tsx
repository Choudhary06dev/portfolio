import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/common/GradientText';
import { siteConfig } from '@/config/site';
import { personal } from '@/data/personal';
import { Reveal } from '@/components/common/Reveal';
import { motion } from 'framer-motion';

// --- Contact Method Card Data ---
interface ContactMethod {
  label: string;
  sublabel: string;
  href: string;
  external?: boolean;
  iconColor: string;
  hoverGlow: string;
  hoverBorder: string;
  icon: React.ReactNode;
}

// --- Motion Variants ---
const cardsStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Premium Contact Section — Final Conversion Section.
 * Linear / Raycast / Vercel / Framer quality.
 * 50/50 balanced layout, glass cards, gradient hover glows, trust indicators.
 */
export const ContactSection: React.FC = () => {
  const handleOpenLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const mailToUrl = `mailto:${personal.email}`;
  const whatsappUrl = 'https://wa.me/923052021975';

  const contactMethods: ContactMethod[] = [
    {
      label: 'Email',
      sublabel: personal.email,
      href: mailToUrl,
      external: false,
      iconColor: 'text-primary',
      hoverGlow: 'hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]',
      hoverBorder: 'hover:border-primary/30',
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-6deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      sublabel: personal.phone,
      href: whatsappUrl,
      external: true,
      iconColor: 'text-[#25D366]',
      hoverGlow: 'hover:shadow-[0_8px_30px_rgba(37,211,102,0.12)]',
      hoverBorder: 'hover:border-[#25D366]/30',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      sublabel: 'Open Source',
      href: siteConfig.github || '#',
      external: true,
      iconColor: 'text-foreground/80',
      hoverGlow: 'hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)]',
      hoverBorder: 'hover:border-foreground/25',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      sublabel: 'Professional',
      href: siteConfig.linkedin || '#',
      external: true,
      iconColor: 'text-[#0A66C2]',
      hoverGlow: 'hover:shadow-[0_8px_30px_rgba(10,102,194,0.12)]',
      hoverBorder: 'hover:border-[#0A66C2]/30',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  // Filter out cards without valid URLs
  const activeContactMethods = contactMethods.filter(
    (m) => m.href && m.href !== '#'
  );

  return (
    <Section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden flex flex-col justify-start"
    >
      {/* === Background Layer === */}
      {/* Large radial glow behind CTA card area (right side) */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04], x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] -z-10 bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_60%)] opacity-[0.06] blur-3xl pointer-events-none"
      />
      {/* Soft secondary glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] -z-10 bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_60%)] opacity-[0.03] blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-[0.02] pointer-events-none" />
      {/* Low-opacity mesh gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,var(--color-primary-hover)_0%,transparent_50%)] opacity-[0.04] pointer-events-none" />
      {/* Soft blur circle top-right */}
      <div className="absolute top-10 right-10 w-40 h-40 -z-10 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      {/* Soft blur circle bottom-left */}
      <div className="absolute bottom-10 left-10 w-32 h-32 -z-10 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ==================== LEFT COLUMN ==================== */}
          <div className="flex flex-col items-start gap-8">

            {/* Badge */}
            <Reveal direction="down" delay={0} duration={0.6}>
              <Badge
                variant="primary"
                className="py-1 px-3 text-[10px] font-semibold leading-none uppercase tracking-wider bg-primary/5 text-primary border-primary/15"
              >
                Contact
              </Badge>
            </Reveal>

            {/* Heading with GradientText */}
            <Reveal direction="up" delay={0.1} duration={0.8}>
              <Heading
                as="h2"
                size="4xl"
                className="tracking-tighter leading-[1.1] font-black text-foreground"
              >
                Let's Build Something{' '}
                <br className="hidden sm:inline" />
                <GradientText>Amazing Together.</GradientText>
              </Heading>
            </Reveal>

            {/* Body text */}
            <Reveal direction="up" delay={0.2} duration={0.7}>
              <p className="text-muted-foreground text-sm sm:text-base leading-[1.7] max-w-[550px]">
                Currently open and available for Full-Time Opportunities, Freelance Projects, and Software Consulting. Let's connect and build something exceptional.
              </p>
            </Reveal>

            {/* Availability indicator */}
            <Reveal direction="up" delay={0.25} duration={0.6}>
              <div className="flex items-center gap-3 text-xs text-muted-foreground/80 select-none">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-medium">{personal.tagline}</span>
                <span className="text-border">•</span>
                <span>{personal.location}</span>
              </div>
            </Reveal>

            {/* ===== Premium Contact Cards ===== */}
            <motion.div
              className="grid grid-cols-2 gap-3 w-full"
              variants={cardsStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {activeContactMethods.map((method) => (
                <motion.div key={method.label} variants={cardItem}>
                  <motion.a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`group relative flex items-center gap-3.5 p-3.5 rounded-xl border border-border/25 bg-surface/10 backdrop-blur-xl transition-all duration-300 ease-out ${method.hoverBorder} ${method.hoverGlow} cursor-pointer overflow-hidden`}
                    aria-label={method.label}
                  >
                    {/* Gradient border shimmer on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Icon container with gradient background */}
                    <div className={`relative flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.01] border border-border/15 ${method.iconColor} transition-all duration-300`}>
                      {method.icon}
                    </div>

                    {/* Text + arrow */}
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                      <span className="text-[10px] font-extrabold text-foreground/90 leading-none truncate">
                        {method.label}
                      </span>
                      <span className="text-[9px] text-muted-foreground/60 font-medium leading-none truncate">
                        {method.sublabel}
                      </span>
                    </div>

                    {/* Arrow appears on hover */}
                    <svg
                      className="w-3.5 h-3.5 text-muted-foreground/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out flex-shrink-0"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* ==================== RIGHT COLUMN — CTA Card ==================== */}
          <Reveal direction="right" delay={0.3} duration={0.9}>
            <motion.div
              whileHover={{ y: -8, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative group overflow-hidden rounded-2xl p-[1px] bg-gradient-to-tr from-primary/15 via-border/40 to-accent/15 hover:from-primary/35 hover:to-accent/35 transition-all duration-300 ease-out shadow-sm hover:shadow-[0_12px_50px_rgba(139,92,246,0.12)]"
            >
              {/* Back glow */}
              <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 opacity-15 blur-3xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

              <div className="relative rounded-[15px] px-6 py-7 sm:px-8 sm:py-8 bg-surface/15 backdrop-blur-2xl flex flex-col gap-5">

                {/* Label */}
                <span className="text-[8px] font-extrabold text-primary uppercase tracking-[0.2em] leading-none">
                  Let's Connect
                </span>

                {/* Heading */}
                <h3 className="text-lg font-black text-foreground tracking-tight leading-none font-heading">
                  Let's Talk
                </h3>

                {/* Description */}
                <p className="text-[11px] text-muted-foreground/70 leading-[1.7] max-w-[320px]">
                  Looking for a Laravel & React developer to build scalable web applications? Let's discuss your next project.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 w-full">

                  {/* Primary: Send Email */}
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="primary"
                      onClick={() => handleOpenLink(mailToUrl)}
                      className="w-full text-xs font-bold h-10 tracking-wider uppercase rounded-lg hover:shadow-[0_6px_24px_rgba(139,92,246,0.2)] transition-all duration-300 ease-out"
                    >
                      Send Email
                    </Button>
                  </motion.div>

                  {/* Secondary: WhatsApp */}
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => handleOpenLink(whatsappUrl)}
                      className="w-full text-xs font-bold h-10 tracking-wider uppercase rounded-lg border-border/30 hover:border-emerald-500/25 hover:text-emerald-500 hover:shadow-[0_6px_24px_rgba(37,211,102,0.1)] transition-all duration-300 ease-out"
                    >
                      Chat on WhatsApp
                    </Button>
                  </motion.div>

                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col gap-2 pt-3 border-t border-border/10">
                  {[
                    'Usually replies within 24 hours',
                    'Open for Full-Time Roles',
                    'Available for Freelance Projects',
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[9px] text-muted-foreground/55 font-medium leading-none">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
};

ContactSection.displayName = 'ContactSection';
