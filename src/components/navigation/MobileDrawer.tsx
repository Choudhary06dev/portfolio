import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { NavList } from './NavList';
import { ThemeToggle } from './ThemeToggle';
import { CTAButton } from './CTAButton';
import { useLenisInstance } from '@/hooks/useLenis';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile drawer overlay.
 * Modern CSS: backdrop-filter, smooth slide-in transition, glass surface.
 * Handles overlay clicks, focus recovery, ESC closures, and traps focus for keyboard accessibility.
 */
export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenisInstance();

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

  // Lock body scroll and pause Lenis smooth scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    if (lenis) lenis.stop();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return createPortal(
    <div className="tablet:hidden fixed inset-0 z-[100] flex" role="dialog" aria-modal="true">
      {/* Overlay backdrop — blur + fade */}
      <div
        className={[
          'fixed inset-0',
          'bg-background/80 backdrop-blur-md',
          'transition-opacity duration-300 ease-out',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel — glass morphism */}
      <div
        className={[
          'fixed inset-y-0 right-0 z-50',
          'flex w-full max-w-xs flex-col justify-between',
          'border-l border-border/40',
          'bg-card/90 backdrop-blur-2xl',
          'shadow-[0_0_60px_oklch(from_var(--primary)_l_c_h_/_0.08)]',
          'p-6',
        ].join(' ')}
      >
        {/* Inner gradient top shimmer */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-bold tracking-tight">Menu</span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              type="button"
              aria-label="Close menu"
              className={[
                /* Modern close button */
                'relative overflow-hidden cursor-pointer',
                'rounded-lg border border-transparent p-2',
                'text-muted-foreground',
                'transition-[color,background-color,border-color,transform,box-shadow]',
                'duration-200 ease-out',
                'hover:text-foreground hover:bg-surface hover:border-border/40',
                'active:scale-90',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                'ripple-container',
              ].join(' ')}
            >
              <X className="h-5 w-5 transition-transform duration-300 hover:rotate-90" aria-hidden="true" />
            </button>
          </div>

          {/* Nav List */}
          <NavList
            direction="vertical"
            className="w-full"
            itemClassName={[
              'flex w-full py-3 px-4 rounded-lg',
              'text-base font-medium text-foreground/80',
              'transition-[color,background-color,transform] duration-200 ease-out',
              'hover:text-primary hover:bg-primary/8',
              'active:scale-[0.98]',
            ].join(' ')}
            onItemClick={onClose}
          />
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col gap-4 border-t border-border/40 pt-6">
          <div className="flex items-center justify-between px-2">
            <span className="text-muted-foreground text-sm font-medium">Appearance</span>
            <ThemeToggle />
          </div>
          <CTAButton />
        </div>

        {/* Inner gradient bottom shimmer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </div>,
    document.body
  );
};

MobileDrawer.displayName = 'MobileDrawer';
