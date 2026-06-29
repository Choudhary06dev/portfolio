import React from 'react';
import { cn } from '@/utils/cn';

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

/**
 * Premium text helper.
 * Clips standard design primary-to-accent gradients to custom text selectors.
 */
export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  as: Tag = 'span',
}) => {
  return (
    <Tag
      className={cn(
        'from-primary to-accent bg-gradient-to-r bg-clip-text font-bold text-transparent select-none',
        className
      )}
    >
      {children}
    </Tag>
  );
};

GradientText.displayName = 'GradientText';
