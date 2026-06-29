import React from 'react';
import { NavList } from './NavList';
import { ThemeToggle } from './ThemeToggle';
import { CTAButton } from './CTAButton';

/**
 * Desktop navbar controls wrapper.
 * Displays only above tablet breakpoints.
 */
export const DesktopMenu: React.FC = () => {
  return (
    <div className="tablet:flex hidden items-center gap-6">
      <NavList className="flex items-center" />
      <div className="bg-border/40 h-5 w-[1px]" aria-hidden="true" />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <CTAButton />
      </div>
    </div>
  );
};

DesktopMenu.displayName = 'DesktopMenu';
