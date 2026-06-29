import React from 'react';
import { siteConfig } from '@/config/site';

/**
 * Global accessible Footer component.
 * Consumes copyright configuration properties dynamically.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-border bg-background w-full border-t py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">{siteConfig.copyright}</p>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
