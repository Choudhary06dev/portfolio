export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';

/**
 * Domain model representing professional employment history.
 */
export interface ExperienceType {
  company: string;
  position: string;
  employmentType: EmploymentType;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  companyLogo: string;
}
