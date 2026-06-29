import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

/**
 * Hero landing page section.
 * Dominates the viewport and centers content vertically.
 */
export const HeroSection: React.FC = () => {
  return (
    <Section
      id="hero"
      variant="default"
      className="flex min-h-[calc(100vh-4.5rem)] flex-col justify-center py-16 md:py-24"
    >
      <Container className="flex flex-1 flex-col justify-center">
        <div className="space-y-6">
          <SectionTitle>Hero Section</SectionTitle>
          {/* Reserved space placeholder for future cta buttons/illustration */}
          <div className="h-10 opacity-0" aria-hidden="true" />
        </div>
      </Container>
    </Section>
  );
};

HeroSection.displayName = 'HeroSection';
