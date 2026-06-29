import React from 'react';
import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

/**
 * Top horizontal layout header element.
 * Arranges structural navigation parts.
 */
export const Header: React.FC = () => {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
