import { type PersonalInfoType } from '@/types';

/**
 * Personal profile details data source.
 */
export const personal: PersonalInfoType = {
  fullName: 'Muhammad Amjad Subhani',
  headline: 'Full Stack Laravel & React Developer',
  tagline: 'Available for Full-Time Opportunities',
  bio: 'I engineer robust, high-performance web applications that streamline operations and drive business growth. Specializing in Laravel and React, I transform complex business specifications into clean, scalable software frameworks.\n\nFrom comprehensive ERP consoles to intelligent AI integrations, my focus is always on modular architecture, optimal performance, and delivering intuitive, user-centric interfaces.',
  description: 'Full-stack software developer specializing in building scalable Laravel backends, interactive React frontends, and robust REST APIs. Experienced in engineering comprehensive ERP systems and integrating AI-powered solutions to optimize business workflows. Focused on delivering premium, high-performance user experiences and clean architected code.',
  location: 'Punjab, Pakistan',
  email: 'amjad.softdev@gmail.com',
  phone: '0305 2021975',
  avatar: '/src/assets/Amjad.png',
  resumeUrl: '/Amjad_Resume.pdf',
  currentRole: {
    position: 'Software Developer',
    company: 'Nexer Technology Solutions',
    period: 'Apr 2024 — Present',
    description: 'Architecting enterprise ERP platforms, customizable dashboard panels, and integrating intelligent AI agent microservices.',
    highlights: [
      'Enterprise ERP Development',
      'Laravel REST APIs',
      'React Dashboards',
      'AI Integrations',
    ],
  },
  focusMetrics: [
    { value: '2+ Years', label: 'Professional Experience' },
    { value: 'Laravel', label: 'Backend Development' },
    { value: 'React', label: 'Frontend Development' },
    { value: 'AI', label: 'Business Solutions' },
  ],
  focusPills: [
    'Laravel',
    'React',
    'PHP',
    'TypeScript',
    'PostgreSQL',
    'MySQL',
    'REST APIs',
    'ERP Systems',
    'AI Integration',
    'Clean Architecture',
    'Performance',
    'Responsive UI',
  ],
};
