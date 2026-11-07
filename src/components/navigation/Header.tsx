import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/utils/cn';

/**
 * Top horizontal layout header element.
 * Modern CSS: transparent-to-glass scroll transition, animated gradient bottom border,
 * backdrop-filter saturate, smooth multi-property transitions.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full',
        /* Modern multi-property transition */
        'transition-[background-color,border-color,box-shadow,padding,backdrop-filter] duration-300 ease-out',
        {
          /* Scrolled: glass morphism surface */
          'py-4 border-b bg-surface/80 backdrop-blur-xl border-border/40 shadow-[0_1px_32px_oklch(from_var(--primary)_l_c_h_/_0.06)]': isScrolled,

          /* Initial: fully transparent */
          'py-5 border-b border-transparent bg-transparent': !isScrolled,
        }
      )}
    >
      {/* Animated gradient underline — appears when scrolled */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-px',
          'bg-gradient-to-r from-transparent via-primary/40 to-transparent',
          'transition-opacity duration-500 ease-out',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
