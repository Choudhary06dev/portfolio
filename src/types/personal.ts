export interface FocusMetricType {
  value: string;
  label: string;
}

export interface CurrentRoleType {
  position: string;
  company: string;
  period: string;
  description: string;
  highlights: readonly string[];
}

/**
 * Strongly typed interface for primary developer profile details.
 */
export interface PersonalInfoType {
  fullName: string;
  headline: string;
  tagline: string;
  bio: string; // Biography paragraphs for About section
  description: string; // Short description for Hero section
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  currentRole: CurrentRoleType;
  focusMetrics: readonly FocusMetricType[];
  focusPills: readonly string[];
}
