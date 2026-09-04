import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { FileDown } from 'lucide-react';
import { Magnetic } from '@/components/common';

/**
 * Navigation CTA Action button.
 * Consumes resumeUrl from siteConfig and resolves routing based on internal/external states.
 */
export const CTAButton: React.FC = () => {
  const { resumeUrl } = siteConfig;

  // Checks if target link points outside the single page router scope
  const isExternal = resumeUrl.startsWith('http') || resumeUrl.endsWith('.pdf');

  if (isExternal) {
    return (
      <Magnetic strength={0.25} range={50}>
        <Button
          variant="primary"
          size="sm"
          onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}
          className="rounded-none border border-black/90 shadow-sm shadow-primary/25 hover:shadow-glow dark:border-black"
        >
          <FileDown className="mr-2 h-4 w-4" aria-hidden="true" />
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
          className="rounded-none border border-black/90 shadow-sm shadow-primary/25 hover:shadow-glow dark:border-black"
        >
          <FileDown className="mr-2 h-4 w-4" aria-hidden="true" />
          Resume
        </Button>
      </Link>
    </Magnetic>
  );
};

CTAButton.displayName = 'CTAButton';
