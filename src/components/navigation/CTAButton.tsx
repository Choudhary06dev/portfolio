import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { FileDown } from 'lucide-react';
import { Magnetic } from '@/components/common';

/**
 * Navigation CTA Action button — Resume download.
 * Modern: shimmer sweep, glow on hover, animated icon.
 */
export const CTAButton: React.FC = () => {
  const { resumeUrl } = siteConfig;

  // Checks if target link points outside the single page router scope
  const isExternal = resumeUrl.startsWith('http') || resumeUrl.endsWith('.pdf');

  const sharedClassName = [
    'rounded-sm',
    'border border-black/80 dark:border-primary/30',
    'shadow-[0_2px_8px_oklch(from_var(--primary)_l_c_h_/_0.2)]',
    'hover:shadow-[0_4px_20px_oklch(from_var(--primary)_l_c_h_/_0.35)]',
    'transition-shadow duration-300 ease-out',
    'group',
  ].join(' ');

  if (isExternal) {
    return (
      <Magnetic strength={0.25} range={50}>
        <Button
          variant="primary"
          size="sm"
          onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}
          className={sharedClassName}
        >
          <FileDown
            className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
          Resume
        </Button>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.25} range={50}>
      <Link to={resumeUrl} tabIndex={-1} className="focus-visible:outline-none">
        <Button
          variant="primary"
          size="sm"
          className={sharedClassName}
        >
          <FileDown
            className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
          Resume
        </Button>
      </Link>
    </Magnetic>
  );
};

CTAButton.displayName = 'CTAButton';
