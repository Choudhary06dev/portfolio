import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

/**
 * Placeholder component for the About Section.
 */
export const AboutSection: React.FC = () => {
  return (
    <Section id="about" variant="surface" size="lg">
      <Container>
        <SectionTitle>About Section</SectionTitle>
      </Container>
    </Section>
  );
};

AboutSection.displayName = 'AboutSection';
