import React from 'react';
import { cn } from '@/utils/cn';

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  /** Animate the gradient sweep continuously */
  animated?: boolean;
}

/**
 * Premium gradient text helper.
 * Uses modern OKLCH perceptual gradient interpolation for vivid color transitions.
 * Optional animated shimmer sweep via CSS animation.
 */
export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  as: Tag = 'span',
  animated = false,
}) => {
  return (
    <Tag
      className={cn(
        /* Base gradient — OKLCH interpolated for perceptually even colour steps */
        'bg-clip-text font-bold text-transparent select-none',
        animated
          ? /* Animated sweep version */
            'gradient-text-animated'
          : /* Static OKLCH gradient */
            '[background-image:linear-gradient(in_oklch_90deg,var(--color-primary),var(--color-accent))]',
        className
      )}
    >
      {children}
    </Tag>
  );
};

GradientText.displayName = 'GradientText';
