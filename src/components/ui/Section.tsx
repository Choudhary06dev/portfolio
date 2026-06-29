import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'surface';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Standard semantic landing page section block.
 * Manages spacing grids and backdrops values.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden',
          {
            /* Backdrop selections */
            'bg-background text-foreground': variant === 'default',
            'bg-muted text-foreground': variant === 'muted',
            'bg-surface text-foreground': variant === 'surface',

            /* Sizing height padding */
            'py-8 md:py-12': size === 'sm',
            'py-16 md:py-24': size === 'md',
            'py-24 md:py-32': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';
