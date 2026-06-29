import type { Variants } from 'framer-motion';

/**
 * Premium Framer Motion Transition Presets
 */
export const transitions = {
  springComfortable: { type: 'spring', stiffness: 100, damping: 15 },
  springStiff: { type: 'spring', stiffness: 200, damping: 20 },
  smoothEase: { type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.6 },
  pageTransition: { type: 'tween', ease: 'easeInOut', duration: 0.3 },
} as const;

/**
 * Common Animation Variants for Sections & Components
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...transitions.smoothEase,
      delay: customDelay,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: customDelay,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...transitions.springComfortable,
      delay: customDelay,
    },
  }),
};
