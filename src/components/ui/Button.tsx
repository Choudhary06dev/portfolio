import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

/**
 * Reusable UI Button.
 * Fully typesafe, keyboard accessible, and supports visual design states.
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
          'inline-flex cursor-pointer items-center justify-center rounded-md font-sans text-sm font-medium tracking-wide transition-all select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            /* Variants mapping */
            'bg-primary hover:bg-primary-hover focus-visible:outline-primary text-white shadow-sm':
              variant === 'primary',
            'bg-secondary text-foreground hover:bg-secondary/90 focus-visible:outline-secondary shadow-sm':
              variant === 'secondary',
            'border-border hover:bg-surface hover:text-foreground focus-visible:outline-border border bg-transparent':
              variant === 'outline',
            'text-muted-foreground hover:bg-surface hover:text-foreground focus-visible:outline-border':
              variant === 'ghost',
            'bg-danger hover:bg-danger/90 focus-visible:outline-danger text-white shadow-sm':
              variant === 'danger',

            /* Sizes mapping */
            'h-9 px-3 py-1.5 text-xs': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-11 px-6 py-2.5 text-base': size === 'lg',
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
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
