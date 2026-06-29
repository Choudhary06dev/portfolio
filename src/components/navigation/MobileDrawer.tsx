import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { NavList } from './NavList';
import { ThemeToggle } from './ThemeToggle';
import { CTAButton } from './CTAButton';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile drawer overlay.
 * Handles overlay clicks, focus recovery, ESC closures, and traps focus for keyboard accessibility.
 */
export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="tablet:hidden fixed inset-0 z-[100] flex" role="dialog" aria-modal="true">
      {/* Overlay backdrop */}
      <div
        className="bg-background/80 fixed inset-0 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content panel */}
      <div className="bg-card border-border shadow-modal fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col justify-between border-l p-6">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-bold">Menu</span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              type="button"
              aria-label="Close menu"
              className="text-muted-foreground hover:text-foreground hover:bg-surface hover:border-border/40 focus-visible:outline-primary cursor-pointer rounded-md border border-transparent p-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Nav List */}
          <NavList
            direction="vertical"
            className="w-full"
            itemClassName="flex w-full py-3 px-4 text-base text-muted-foreground hover:text-foreground rounded-md hover:bg-surface transition-colors"
            onItemClick={onClose}
          />
        </div>

        {/* Footer Actions */}
        <div className="border-border/40 flex flex-col gap-4 border-t pt-6">
          <div className="flex items-center justify-between px-2">
            <span className="text-muted-foreground text-sm font-medium">Appearance</span>
            <ThemeToggle />
          </div>
          <CTAButton />
        </div>
      </div>
    </div>
  );
};

MobileDrawer.displayName = 'MobileDrawer';
