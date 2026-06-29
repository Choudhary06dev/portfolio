import React from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  cleanPadding?: boolean;
}

/**
 * Centered responsive layout boundary.
 * Standardizes max-widths and page padding parameters.
 */
export const Container: React.FC<ContainerProps> = ({
  className,
  size = 'lg',
  cleanPadding = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        {
          /* Side Padding Default */
          'px-4 sm:px-6 lg:px-8': !cleanPadding,

          /* Sizing boundary mappings */
          'max-w-3xl': size === 'sm',
          'max-w-5xl': size === 'md',
          'max-w-7xl': size === 'lg',
          'max-w-[1440px]': size === 'xl',
          'max-w-full': size === 'full',
        },
        className
      )}
      {...props}
    />
  );
};

Container.displayName = 'Container';
