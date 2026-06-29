import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
}

/**
 * Micro tag indicator.
 * Displays statuses, categorizations, or tags using semantic token backgrounds.
 */
export const Badge: React.FC<BadgeProps> = ({ className, variant = 'default', ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors select-none',
        {
          /* Variant colors mappings */
          'bg-muted text-muted-foreground border-transparent': variant === 'default',
          'bg-primary/10 text-primary border-primary/20': variant === 'primary',
          'bg-secondary/15 text-secondary border-secondary/30': variant === 'secondary',
          'bg-success/10 text-success border-success/20': variant === 'success',
          'bg-warning/10 text-warning border-warning/20': variant === 'warning',
          'bg-danger/10 text-danger border-danger/20': variant === 'danger',
          'border-border text-muted-foreground bg-transparent': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
};

Badge.displayName = 'Badge';
