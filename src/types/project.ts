export type ProjectStatus = 'planning' | 'in-progress' | 'completed' | 'maintained';

/**
 * Scalable domain model for portfolio projects.
 * Supports features like slugs, categories, feature flags, roles, key highlights, and complete case study fields.
 */
export interface ProjectType {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: readonly string[];
  category: string;
  featured: boolean;
  status: ProjectStatus;
  thumbnail: string;
  images: readonly string[];
  demoUrl: string;
  githubUrl: string;
  caseStudyUrl?: string;
  year: number;
  role: string;
  company?: string;
  highlights?: readonly string[];
  
  // Case Study specific fields
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: readonly string[];
  gallery?: readonly string[];
  challenges?: string;
  results?: string;
  badgeLabel?: string; // e.g. "⭐ Featured", "🤖 AI Powered", etc.
}
