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
 * Modern CSS: active sliding pill, hover shimmer overlay, smooth spring transitions.
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

  const baseClasses = [
    /* Layout & typography */
    'relative inline-flex items-center justify-center',
    'rounded-md py-1.5 px-3.5',
    'text-sm font-medium cursor-pointer',
    /* Transitions — multi-property smooth */
    'transition-[color,background-color,box-shadow] duration-200 ease-out',
    /* Focus ring */
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  ].join(' ');

  const activeClasses = isActive
    ? 'text-primary font-bold'
    : 'text-foreground/80 hover:text-primary';

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    if (type === 'anchor') {
      e.preventDefault();
      const targetId = href.replace('#', '');

      if (location.pathname === '/') {
        const targetElement = document.getElementById(targetId);
        if (targetElement && lenis) {
          lenis.scrollTo(targetElement, { offset: -20 });
        } else if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${href}`);
      }
    }
  };

  /** Active pill + hover pill decorations */
  const renderDecorations = () => (
    <>
      {/* Active background pill — slides between nav items with spring */}
      {isActive && (
        <motion.span
          layoutId="activeNavPill"
          className={[
            'absolute inset-0 -z-10 rounded-md',
            'bg-primary/12 border border-primary/25',
            'shadow-[0_0_16px_oklch(from_var(--primary)_l_c_h_/_0.20)]',
          ].join(' ')}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      {/* Hover background pill — slides smoothly */}
      {isHovered && !isActive && (
        <motion.span
          layoutId="hoverNavPill"
          className={[
            'absolute inset-0 -z-10 rounded-md',
            'bg-primary/[0.07] border border-primary/15',
          ].join(' ')}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        />
      )}
      {/* Shimmer sweep overlay — always rendered, animates on hover via CSS */}
      <span
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-0 rounded-md overflow-hidden',
          'before:absolute before:inset-0',
          'before:translate-x-[-120%] hover:before:translate-x-[120%]',
          'before:transition-transform before:duration-500 before:ease-out',
          'before:bg-gradient-to-r before:from-transparent before:via-primary/8 before:to-transparent',
        ].join(' ')}
      />
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
          className={cn('group', baseClasses, activeClasses, className)}
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
          className={cn('group', baseClasses, activeClasses, className)}
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
        className={cn('group', baseClasses, activeClasses, className)}
      >
        <span className="relative z-10">{label}</span>
        {renderDecorations()}
      </Link>
    </Magnetic>
  );
};

NavItem.displayName = 'NavItem';
