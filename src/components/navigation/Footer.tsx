import React from 'react';
import { siteConfig } from '@/config/site';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

const Icons = {
  Github: (
    <svg
      className="h-4.5 w-4.5 animate-[pulse_3s_infinite]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Linkedin: (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Mail: (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

/**
 * Premium accessible Footer component.
 * Features a Vercel-style grid layout with social ghost buttons and dynamic copyright items.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-background/50 relative z-10 mt-auto w-full py-8 backdrop-blur-md">
      {/* Premium gradient separation line (sliding train animation) */}
      <div className="footer-border-train absolute top-0 right-0 left-0 h-[2px]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:px-8">
        {/* Top Panel: Logo & Social Links */}
        <div className="border-border/10 flex flex-col justify-between gap-6 border-b pb-3 sm:flex-row sm:items-center">
          {/* Logo */}
          <Logo />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {siteConfig.github && (
              <motion.a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-border/30 hover:border-primary/30 text-muted-foreground hover:text-primary hover:bg-primary/[0.04] rounded-full border p-2.5 shadow-xs transition-all duration-300"
              >
                {Icons.Github}
              </motion.a>
            )}
            {siteConfig.linkedin && (
              <motion.a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-border/30 hover:border-primary/30 text-muted-foreground hover:text-primary hover:bg-primary/[0.04] rounded-full border p-2.5 shadow-xs transition-all duration-300"
              >
                {Icons.Linkedin}
              </motion.a>
            )}
            {siteConfig.email && (
              <motion.a
                href={`mailto:${siteConfig.email}`}
                aria-label="Send Email"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-border/30 hover:border-primary/30 text-muted-foreground hover:text-primary hover:bg-primary/[0.04] rounded-full border p-2.5 shadow-xs transition-all duration-300"
              >
                {Icons.Mail}
              </motion.a>
            )}
          </div>
        </div>

        {/* Bottom Panel: Copyright and Info */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-xs select-none">{siteConfig.copyright}</p>
          <p className="text-muted-foreground/60 text-[10px] tracking-wide select-none">
            Designed & Built with ❤️ in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
