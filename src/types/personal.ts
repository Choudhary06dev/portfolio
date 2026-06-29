export interface HighlightItemType {
  icon: string; // Icon identifier mapping to Lucide component
  title: string;
  description: string;
}

/**
 * Strongly typed interface for primary developer profile details.
 */
export interface PersonalInfoType {
  fullName: string;
  headline: string;
  tagline: string;
  bio: string; // Detailed biography blocks for About section
  description: string; // Short recruiter-focused description for Hero section
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  highlights: readonly HighlightItemType[];
  quoteText: string;
  quoteAuthor: string;
}
