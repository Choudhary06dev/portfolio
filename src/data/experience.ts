import { type ExperienceType } from '@/types';

/**
 * Professional employment history data source.
 * Represents developer experience history matching actual resume.
 */
export const experience: readonly ExperienceType[] = [
  {
    company: 'Nexer Technology Solutions',
    position: 'Software Developer',
    employmentType: 'full-time',
    startDate: '2024-04',
    location: 'Pakistan',
    description: 'Architecting enterprise ERP platforms, customizable dashboard panels, and integrating intelligent AI agent microservices.',
    responsibilities: [
      'Reduced database query latency and optimized payroll ledger calculation workflows by 30%',
      'Built reactive frontend dashboards, pharmacy sales consoles, and automated invoice processors',
      'Designed high-throughput secure RESTful integration gateways and dynamic RBAC architectures',
    ],
    technologies: ['Laravel', 'React', 'PHP', 'PostgreSQL', 'Tailwind CSS'],
    companyLogo: '',
    workedOn: [
      'ERP Systems',
      'Pharmacy Management',
      'REST APIs',
      'Authentication',
      'RBAC',
      'Dashboard Development',
      'PostgreSQL',
      'React Frontend',
      'Laravel Backend',
    ],
  },
  {
    company: 'Self-Employed / Freelance',
    position: 'Laravel + React Engineer',
    employmentType: 'freelance',
    startDate: '2025-10',
    endDate: '2026-05',
    location: 'Remote',
    description: 'Engineering high-performance SaaS applications, custom ERP consoles, and AI-driven solutions.',
    responsibilities: [
      'Designed and deployed custom SaaS platforms using Laravel, React, and TypeScript',
      'Built high-performance backend APIs optimized for rapid React query states',
      'Configured PostgreSQL databases with multi-table index optimizations',
      'Standardized modular frontend component libraries using Tailwind CSS',
    ],
    technologies: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'AI Integration'],
    companyLogo: '',
    workedOn: [
      'SaaS Applications',
      'Database Optimization',
      'API Frameworks',
      'Tailwind Components',
    ],
  },
];
