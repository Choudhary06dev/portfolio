import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

/**
 * Modern CSS Button — shimmer sweeps, ripple press, glow effects.
 * Uses @property animated custom properties, ::before shimmer, ::after radial glow.
 * Fully keyboard accessible, aria-compliant, type-safe.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(
          /* ── Base — shared across all variants ── */
          'inline-flex cursor-pointer items-center justify-center rounded-md',
          'font-sans text-sm font-medium tracking-wide',
          'transition-all duration-300 ease-out select-none',
          'focus-visible:outline-2 focus-visible:outline-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          /* Ripple press effect class */
          'ripple-container',
          {
            /* ── Primary: shimmer sweep + gradient + glow ── */
            'btn-primary-modern text-white focus-visible:outline-primary shadow-sm':
              variant === 'primary',

            /* ── Secondary ── */
            'bg-secondary text-foreground hover:bg-secondary/90 focus-visible:outline-secondary shadow-sm':
              variant === 'secondary',

            /* ── Outline: border shimmer + fill reveal ── */
            'btn-outline-modern text-foreground focus-visible:outline-border':
              variant === 'outline',

            /* ── Ghost: subtle bg reveal ── */
            'btn-ghost-modern text-muted-foreground hover:text-foreground focus-visible:outline-border':
              variant === 'ghost',

            /* ── Danger ── */
            'relative overflow-hidden bg-danger text-white shadow-sm focus-visible:outline-danger':
              variant === 'danger',

            /* ── Sizes ── */
            'h-9 px-3 py-1.5 text-xs':     size === 'sm',
            'h-10 px-4 py-2':               size === 'md',
            'h-11 px-6 py-2.5 text-base':  size === 'lg',
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : null}
        {/* z-10 wrapper keeps text above ::before/::after pseudo layers */}
        <span className="relative z-10 inline-flex items-center">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
