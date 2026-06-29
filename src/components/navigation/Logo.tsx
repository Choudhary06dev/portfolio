import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { useLenisInstance } from '@/hooks/useLenis';

/**
 * Global application logo link.
 * Reads site configuration dynamically.
 */
export const Logo: React.FC = () => {
  const location = useLocation();
  const lenis = useLenisInstance();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to="/"
      onClick={handleLogoClick}
      className="font-heading from-primary to-accent focus-visible:outline-primary rounded-sm bg-gradient-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {siteConfig.logoText}
    </Link>
  );
};

Logo.displayName = 'Logo';
