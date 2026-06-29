import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { FileDown } from 'lucide-react';

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
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}
      >
        <FileDown className="mr-2 h-4 w-4" aria-hidden="true" />
        Resume
      </Button>
    );
  }

  return (
    <Link to={resumeUrl} tabIndex={-1} className="focus-visible:outline-none">
      <Button variant="outline" size="sm">
        <FileDown className="mr-2 h-4 w-4" aria-hidden="true" />
        Resume
      </Button>
    </Link>
  );
};

CTAButton.displayName = 'CTAButton';
