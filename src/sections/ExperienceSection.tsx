import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

/**
 * Placeholder component for the Experience Section.
 */
export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" variant="default" size="lg">
      <Container>
        <SectionTitle>Experience Section</SectionTitle>
      </Container>
    </Section>
  );
};

ExperienceSection.displayName = 'ExperienceSection';
