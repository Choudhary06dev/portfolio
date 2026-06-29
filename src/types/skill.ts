export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Tools'
  | 'Cloud'
  | 'Languages'
  | 'Frameworks'
  | 'Libraries';

/**
 * Domain model representing technology skills and proficiencies.
 */
export interface SkillType {
  name: string;
  icon: string;
  level: number; // e.g. 0-100 scale
  category: SkillCategory;
  featured: boolean;
}
