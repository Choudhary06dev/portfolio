import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  /** If true, uses staggerChildren on the container and each direct child animates */
  stagger?: boolean;
  staggerInterval?: number;
}

/**
 * Viewport entry presentation wrapper.
 * Reveals wrapped children on scroll with directional easing and generous travel distances.
 * Apple / Linear / Vercel quality: 40–60px travel, 0.7s duration, smooth cubic-bezier.
 * Respects system prefers-reduced-motion setting.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  stagger = false,
  staggerInterval = 0.12,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const directionsMap = {
    up: { y: shouldReduceMotion ? 0 : 50, x: 0 },
    down: { y: shouldReduceMotion ? 0 : -50, x: 0 },
    left: { x: shouldReduceMotion ? 0 : 60, y: 0 },
    right: { x: shouldReduceMotion ? 0 : -60, y: 0 },
  };

  const selectedDirection = directionsMap[direction];

  // Stagger container variant
  if (stagger) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: staggerInterval,
        },
      },
    };

    const childVariants = {
      hidden: {
        opacity: 0,
        ...selectedDirection,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.25 : duration,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-60px' }}
        className={className}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </motion.div>
    );
  }

  // Single item reveal
  const variants = {
    hidden: {
      opacity: 0,
      ...selectedDirection,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.25 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Reveal.displayName = 'Reveal';
