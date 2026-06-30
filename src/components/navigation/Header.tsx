import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/utils/cn';

/**
 * Top horizontal layout header element.
 * Manages transparent-to-opaque scroll transitions, backdrop filters, and dynamic borders.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style transition on scroll offset
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn('fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out', {
        /* Scrolled state aesthetics (opaque surface + border) */
        'bg-surface/90 border-border border-b py-4 shadow-sm backdrop-blur-md': isScrolled,

        /* Initial top transparent state */
        'border-b border-transparent bg-transparent py-5': !isScrolled,
      })}
    >
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
