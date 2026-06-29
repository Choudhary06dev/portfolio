export type SocialPlatform =
  'GitHub' | 'LinkedIn' | 'Email' | 'Portfolio' | 'Twitter' | 'YouTube' | 'Medium' | 'Custom';

/**
 * Domain model representing social media links and URLs.
 */
export interface SocialType {
  platform: SocialPlatform;
  url: string;
  label: string;
  icon?: string;
}
