import React from 'react';
import { Link } from 'react-router-dom';
import { type NavItemType } from '@/types/navigation';
import { cn } from '@/utils/cn';

export interface NavItemProps extends NavItemType {
  onClick?: () => void;
  className?: string;
}

/**
 * Reusable navigation link component.
 * Decides whether to render a standard anchor, React Router Link, or external jump tab based on item type.
 */
export const NavItem: React.FC<NavItemProps> = ({ label, href, type, onClick, className }) => {
  const baseClasses =
    'text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm py-1.5 px-3';

  if (type === 'external') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(baseClasses, className)}
      >
        {label}
      </a>
    );
  }

  if (type === 'anchor') {
    return (
      <a href={href} onClick={onClick} className={cn(baseClasses, className)}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} className={cn(baseClasses, className)}>
      {label}
    </Link>
  );
};

NavItem.displayName = 'NavItem';
