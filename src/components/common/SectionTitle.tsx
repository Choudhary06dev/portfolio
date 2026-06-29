import React from 'react';
import { Heading } from '@/components/ui/Heading';
import { cn } from '@/utils/cn';

export interface SectionTitleProps extends React.ComponentProps<typeof Heading> {
  highlightText?: string;
}

/**
 * Global standardized section title component.
 * Implements accessible Heading structures.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  highlightText,
  className,
  ...props
}) => {
  return (
    <Heading
      as="h2"
      size="3xl"
      className={cn('text-foreground font-heading tracking-tight', className)}
      {...props}
    >
      {children}
      {highlightText && (
        <span className="from-primary to-accent ml-2 bg-gradient-to-r bg-clip-text text-transparent select-none">
          {highlightText}
        </span>
      )}
    </Heading>
  );
};

SectionTitle.displayName = 'SectionTitle';
