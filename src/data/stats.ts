import { type StatsType } from '@/types';

/**
 * Metric stats and focus tags data source.
 */
export const stats: StatsType = {
  yearsExperience: 2,
  projectsCompleted: 0,
  clientsServed: 0,
  repositoriesCount: 0,
  technologiesMastered: 0,
  items: [
    {
      icon: 'Briefcase',
      value: '2+ Years',
      label: 'Experience',
      description: 'Years of hands-on dev work',
    },
    {
      icon: 'Code',
      value: 'Laravel',
      label: 'Primary Stack',
      description: 'Backend core and REST APIs',
    },
    {
      icon: 'Atom',
      value: 'React',
      label: 'Frontend',
      description: 'Single page app UI libraries',
    },
    {
      icon: 'Sparkles',
      value: 'AI Solutions',
      label: 'Specialization',
      description: 'Agentic workflows and integrations',
    },
  ],
};
