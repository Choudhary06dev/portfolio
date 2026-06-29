export interface StatItemType {
  value: string;
  label: string;
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
