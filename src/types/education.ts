/**
 * Domain model representing academic credentials.
 */
export interface EducationType {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  grade?: string;
  description?: string;
}
