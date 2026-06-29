import { useEffect, useState } from 'react';

/**
 * Custom hook to track which viewport section is currently active/intersecting.
 *
 * @param sectionIds Array of section element HTML IDs to observe.
 * @param options IntersectionObserver options override.
 */
export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Intersection triggers when a section occupies the center of the viewport
    const observer = new IntersectionObserver(callback, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0.1,
      ...options,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
}
