export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';

/**
 * Domain model representing professional employment history.
 * Supports summaries, achievements, technologies, and specific modules worked on.
 */
export interface ExperienceType {
  company: string;
  position: string;
  employmentType: EmploymentType;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  responsibilities: readonly string[]; // Achievements bullets
  technologies: readonly string[]; // Tech Stack chips
  companyLogo: string;
  workedOn?: readonly string[]; // Modules worked on (✔ ERP Systems, etc)
}
