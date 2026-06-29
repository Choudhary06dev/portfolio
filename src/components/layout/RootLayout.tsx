import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Root Layout wrapper for the portfolio.
 * Includes semantic structure, Framer Motion page transition hooks, and Lenis scroll alignments.
 */
const RootLayout: React.FC = () => {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col transition-colors duration-300">
      {/* Premium subtle background glow effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />

      {/* Scaffold Navbar (to be implemented) */}
      <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-heading from-brand-500 bg-gradient-to-r to-pink-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              Amjad.dev
            </span>
          </div>
          <nav className="text-muted-foreground hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area with Page Transitions */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Scaffold Footer */}
      <footer className="border-border bg-card text-card-foreground border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-muted-foreground text-center text-xs leading-5">
              &copy; {new Date().getFullYear()} Amjad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
