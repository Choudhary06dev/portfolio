/**
 * Domain model representing commercial services offered (e.g. freelancing).
 */
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon?: string;
  pricing?: string;
  deliverables?: readonly string[];
}
