import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
}

/**
 * Micro tag indicator — modern CSS.
 * Uses color-mix() for consistent alpha blending. Smooth color transitions.
 * Displays statuses, categorizations, or tags using semantic token backgrounds.
 */
export const Badge: React.FC<BadgeProps> = ({ className, variant = 'default', ...props }) => {
  return (
    <span
      className={cn(
        /* Base */
        'inline-flex items-center rounded-full border px-2.5 py-0.5',
        'text-xs font-semibold tracking-wide select-none',
        /* Modern transition — multi-property */
        'transition-[color,background-color,border-color,box-shadow] duration-200 ease-out',
        {
          /* Default */
          'bg-muted text-muted-foreground border-transparent': variant === 'default',
          /* Primary — color-mix for consistent alpha */
          'bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:border-primary/30':
            variant === 'primary',
          /* Secondary */
          'bg-secondary/15 text-secondary border-secondary/30 hover:bg-secondary/20':
            variant === 'secondary',
          /* Success */
          'bg-success/10 text-success border-success/20 hover:bg-success/15':
            variant === 'success',
          /* Warning */
          'bg-warning/10 text-warning border-warning/20 hover:bg-warning/15':
            variant === 'warning',
          /* Danger */
          'bg-danger/10 text-danger border-danger/20 hover:bg-danger/15':
            variant === 'danger',
          /* Outline */
          'border-border text-muted-foreground bg-transparent hover:bg-surface/40 hover:border-border/70':
            variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
};

Badge.displayName = 'Badge';
