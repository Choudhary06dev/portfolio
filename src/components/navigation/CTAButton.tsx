import React from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

/**
 * Global Navigation CTA Action.
 * Resolves target location to the resumeUrl defined in siteConfig.
 */
export const CTAButton: React.FC = () => {
  const handleClick = () => {
    window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button variant="outline" size="sm" onClick={handleClick}>
      Resume
    </Button>
  );
};

CTAButton.displayName = 'CTAButton';
