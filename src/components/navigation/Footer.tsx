import React from 'react';
import { siteConfig } from '@/config/site';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

const Icons = {
  Github: (
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
  Whatsapp: (
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border-border/40 text-foreground/80 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 hover:shadow-[0_0_16px_rgba(255,255,255,0.12)] rounded-full border p-2.5 shadow-xs transition-all duration-300"
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
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border-border/40 text-[#0A66C2] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_16px_rgba(10,102,194,0.25)] rounded-full border p-2.5 shadow-xs transition-all duration-300"
              >
                {Icons.Linkedin}
              </motion.a>
            )}
            <motion.a
              href="https://wa.me/923052021975"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border-border/40 text-[#25D366] hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_16px_rgba(37,211,102,0.25)] rounded-full border p-2.5 shadow-xs transition-all duration-300"
            >
              {Icons.Whatsapp}
            </motion.a>
            {siteConfig.email && (
              <motion.a
                href={`mailto:${siteConfig.email}`}
                aria-label="Send Email"
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border-border/40 text-[#EA4335] hover:text-[#EA4335] hover:border-[#EA4335]/40 hover:bg-[#EA4335]/10 hover:shadow-[0_0_16px_rgba(234,67,53,0.25)] rounded-full border p-2.5 shadow-xs transition-all duration-300"
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
