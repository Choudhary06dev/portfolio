import React from 'react';
import { cn } from '@/utils/cn';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

/**
 * Accessible header typography orchestrator.
 * Separates visual sizing classes from HTML tags to enforce correct semantic SEO outlines.
 */
export const Heading: React.FC<HeadingProps> = ({ className, as: Tag = 'h2', size, ...props }) => {
  // Map hierarchy tags to default scales if no explicit override size is given
  const defaultSizeMap = {
    h1: '4xl' as const,
    h2: '3xl' as const,
    h3: '2xl' as const,
    h4: 'xl' as const,
    h5: 'lg' as const,
    h6: 'base' as const,
  };

  const selectedSize = size || defaultSizeMap[Tag];

  return (
    <Tag
      className={cn(
        'font-heading text-foreground leading-tight font-bold tracking-tight',
        {
          'text-xs': selectedSize === 'xs',
          'text-sm': selectedSize === 'sm',
          'text-base': selectedSize === 'base',
          'text-lg': selectedSize === 'lg',
          'text-xl': selectedSize === 'xl',
          'text-2xl': selectedSize === '2xl',
          'text-3xl': selectedSize === '3xl',
          'text-4xl': selectedSize === '4xl',
          'text-5xl': selectedSize === '5xl',
          'text-6xl': selectedSize === '6xl',
        },
        className
      )}
      {...props}
    />
  );
};

Heading.displayName = 'Heading';
