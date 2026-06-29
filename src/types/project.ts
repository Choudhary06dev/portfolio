export type ProjectStatus = 'planning' | 'in-progress' | 'completed' | 'maintained';

/**
 * Scalable domain model for portfolio projects.
 * Supports features like slugs, categories, feature flags, and roles.
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
}
