export type LinkType = 'anchor' | 'internal' | 'external';

export interface NavItemType {
  id: string;
  label: string;
  href: string;
  type: LinkType;
}

export interface SiteConfigType {
  siteName: string;
  shortName: string;
  description: string;
  author: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  copyright: string;
  logoText: string;
}
