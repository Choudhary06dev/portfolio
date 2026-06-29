import React from 'react';
import { Link } from 'react-router-dom';
import { type NavItemType } from '@/types/navigation';
import { cn } from '@/utils/cn';

export interface NavItemProps extends NavItemType {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

/**
 * Reusable navigation link component.
 * Supports active highlighting and resolves anchors, internal page routing, and external tabs.
 */
export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  type,
  onClick,
  className,
  isActive = false,
}) => {
  const baseClasses =
    'text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm py-1.5 px-3';

  const activeClasses = isActive
    ? 'text-primary font-semibold'
    : 'text-muted-foreground hover:text-foreground';

  if (type === 'external') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(baseClasses, activeClasses, className)}
      >
        {label}
      </a>
    );
  }

  if (type === 'anchor') {
    return (
      <a href={href} onClick={onClick} className={cn(baseClasses, activeClasses, className)}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} className={cn(baseClasses, activeClasses, className)}>
      {label}
    </Link>
  );
};

NavItem.displayName = 'NavItem';
