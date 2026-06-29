import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and merges Tailwind CSS classes safely
 * preventing style conflicts (e.g., margins, colors).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
