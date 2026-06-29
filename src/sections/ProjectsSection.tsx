import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

/**
 * Placeholder component for the Projects Section.
 */
export const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" variant="surface" size="lg">
      <Container>
        <SectionTitle>Projects Section</SectionTitle>
      </Container>
    </Section>
  );
};

ProjectsSection.displayName = 'ProjectsSection';
