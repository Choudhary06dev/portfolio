import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';

/**
 * Global application logo link.
 * Reads site configuration dynamically.
 */
export const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="font-heading from-primary to-accent focus-visible:outline-primary rounded-sm bg-gradient-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {siteConfig.logoText}
    </Link>
  );
};

Logo.displayName = 'Logo';
