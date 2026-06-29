import { type NavItemType } from '@/types/navigation';

/**
 * Array of main website navigation links.
 * Dictates link types for proper dynamic rendering in NavItem.
 */
export const navigationItems: NavItemType[] = [
  { id: 'about', label: 'About', href: '#about', type: 'anchor' },
  { id: 'projects', label: 'Projects', href: '#projects', type: 'anchor' },
  { id: 'experience', label: 'Experience', href: '#experience', type: 'anchor' },
  { id: 'contact', label: 'Contact', href: '#contact', type: 'anchor' },
];
