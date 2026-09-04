import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { type NavItemType } from '@/types/navigation';
import { cn } from '@/utils/cn';
import { useLenisInstance } from '@/hooks/useLenis';
import { Magnetic } from '@/components/common';

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
    'text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md py-1.5 px-3.5 cursor-pointer';

  const activeClasses = isActive
    ? 'text-primary font-bold'
    : 'text-foreground/80 hover:text-primary';

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
          className="bg-primary/15 border-primary/30 absolute inset-0 -z-10 rounded-md border shadow-[0_0_16px_rgba(56,189,248,0.22)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      {/* Hover background pill — slides smoothly behind links */}
      {isHovered && !isActive && (
        <motion.span
          layoutId="hoverNavPill"
          className="bg-primary/[0.08] border-primary/20 absolute inset-0 -z-10 rounded-md border"
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        />
      )}
    </>
  );

  if (type === 'external') {
    return (
      <Magnetic strength={0.2} range={35}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={cn('group relative', baseClasses, activeClasses, className)}
        >
          <span className="relative z-10">{label}</span>
          {renderDecorations()}
        </a>
      </Magnetic>
    );
  }

  if (type === 'anchor') {
    return (
      <Magnetic strength={0.2} range={35}>
        <a
          href={href}
          onClick={handleAnchorClick}
          className={cn('group relative', baseClasses, activeClasses, className)}
        >
          <span className="relative z-10">{label}</span>
          {renderDecorations()}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.2} range={35}>
      <Link
        to={href}
        onClick={onClick}
        className={cn('group relative', baseClasses, activeClasses, className)}
      >
        <span className="relative z-10">{label}</span>
        {renderDecorations()}
      </Link>
    </Magnetic>
  );
};

NavItem.displayName = 'NavItem';
