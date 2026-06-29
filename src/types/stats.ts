export interface StatItemType {
  icon: string; // Icon identifier key mapping to Lucide component
  value: string;
  label: string;
  description: string;
}

/**
 * Domain model representing stats or focus metrics on the Hero page.
 */
export interface StatsType {
  yearsExperience: number;
  projectsCompleted: number;
  clientsServed: number;
  repositoriesCount: number;
  technologiesMastered: number;
  items: readonly StatItemType[];
}
