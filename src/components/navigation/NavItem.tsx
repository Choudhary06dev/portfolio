import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { type NavItemType } from '@/types/navigation';
import { cn } from '@/utils/cn';
import { useLenisInstance } from '@/hooks/useLenis';

export interface NavItemProps extends NavItemType {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
  isHovered?: boolean;
}

/**
 * Reusable navigation link component.
 * Supports active highlighting, sliding hover capsules, and smooth scroll via Lenis.
 */
export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  type,
  onClick,
  className,
  isActive = false,
  isHovered = false,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenisInstance();

  const baseClasses =
    'text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm py-1.5 px-3 cursor-pointer';

  const activeClasses = isActive
    ? 'text-primary font-semibold'
    : 'text-muted-foreground hover:text-foreground';

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    if (type === 'anchor') {
      e.preventDefault();
      const targetId = href.replace('#', '');

      if (location.pathname === '/') {
        // Homepage: Smooth scroll using Lenis
        const targetElement = document.getElementById(targetId);
        if (targetElement && lenis) {
          lenis.scrollTo(targetElement, { offset: -20 });
        } else if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Subpage: Navigate to Home + hash segment
        navigate(`/${href}`);
      }
    }
  };

  /** Shared underline + active pill */
  const renderDecorations = () => (
    <>
      {/* Active background pill — slides between nav items */}
      {isActive && (
        <motion.span
          layoutId="activeNavPill"
          className="absolute inset-0 rounded-md bg-primary/[0.08] border border-primary/15 -z-10"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      {/* Hover background pill — slides smoothly behind links */}
      {isHovered && !isActive && (
        <motion.span
          layoutId="hoverNavPill"
          className="absolute inset-0 rounded-md bg-foreground/[0.04] dark:bg-white/[0.04] border border-foreground/[0.03] dark:border-white/[0.03] -z-10"
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        />
      )}
    </>
  );

  if (type === 'external') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn('relative group', baseClasses, activeClasses, className)}
      >
        <span className="relative z-10">{label}</span>
        {renderDecorations()}
      </a>
    );
  }

  if (type === 'anchor') {
    return (
      <a
        href={href}
        onClick={handleAnchorClick}
        className={cn('relative group', baseClasses, activeClasses, className)}
      >
        <span className="relative z-10">{label}</span>
        {renderDecorations()}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} className={cn('relative group', baseClasses, activeClasses, className)}>
      <span className="relative z-10">{label}</span>
      {renderDecorations()}
    </Link>
  );
};

NavItem.displayName = 'NavItem';
