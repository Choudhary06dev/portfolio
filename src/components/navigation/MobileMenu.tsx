import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { MobileDrawer } from './MobileDrawer';

/**
 * Mobile-only hamburger trigger.
 * Handles open/close state of the mobile drawer.
 */
export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tablet:hidden flex">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        aria-expanded={isOpen}
        aria-label="Open main menu"
        className="text-muted-foreground hover:text-foreground hover:bg-surface hover:border-border/40 focus-visible:outline-primary cursor-pointer rounded-md border border-transparent p-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

MobileMenu.displayName = 'MobileMenu';
