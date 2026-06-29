import React from 'react';
import { cn } from '@/utils/cn';

export interface SectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Standardized Section Subtitle description helper.
 * Restricts line widths to optimize visual layout blocks.
 */
export const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  children,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'text-muted-foreground max-w-2xl font-sans leading-relaxed',
        {
          /* Sizing options */
          'text-sm': size === 'sm',
          'text-base sm:text-lg': size === 'md',
          'text-lg sm:text-xl': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

SectionSubtitle.displayName = 'SectionSubtitle';
