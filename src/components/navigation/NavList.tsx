import React from 'react';
import { NavItem } from './NavItem';
import { navigationItems } from '@/config/navigation';
import { cn } from '@/utils/cn';

export interface NavListProps {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
  direction?: 'horizontal' | 'vertical';
}

/**
 * Navigation lists builder.
 * Maps configuration array items dynamically to NavItem elements.
 */
export const NavList: React.FC<NavListProps> = ({
  className,
  itemClassName,
  onItemClick,
  direction = 'horizontal',
}) => {
  return (
    <nav aria-label="Main Navigation" className={className}>
      <ul
        className={cn('flex gap-2', {
          'flex-row items-center': direction === 'horizontal',
          'w-full flex-col items-stretch': direction === 'vertical',
        })}
      >
        {navigationItems.map((item) => (
          <li key={item.id} className={direction === 'vertical' ? 'w-full' : undefined}>
            <NavItem
              id={item.id}
              label={item.label}
              href={item.href}
              type={item.type}
              onClick={onItemClick}
              className={cn(itemClassName, {
                'block w-full': direction === 'vertical',
              })}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavList.displayName = 'NavList';
