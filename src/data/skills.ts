import { type SkillType } from '@/types';

/**
 * Technology skills data source.
 */
export const skills: readonly SkillType[] = [
  { name: 'Laravel', icon: 'Code', level: 90, category: 'Backend', featured: true },
  { name: 'React', icon: 'Atom', level: 85, category: 'Frontend', featured: true },
  { name: 'PHP', icon: 'FileCode', level: 88, category: 'Backend', featured: false },
  { name: 'TypeScript', icon: 'FileJson', level: 82, category: 'Frontend', featured: false },
  { name: 'PostgreSQL', icon: 'Database', level: 80, category: 'Database', featured: true },
  { name: 'Tailwind CSS', icon: 'Layers', level: 92, category: 'Frontend', featured: false },
  { name: 'Git', icon: 'GitBranch', level: 85, category: 'Tools', featured: false },
  { name: 'REST API', icon: 'Cpu', level: 90, category: 'Backend', featured: true },
];
