import React from 'react';
import { motion } from 'framer-motion';

export interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Viewport entry presentation wrapper.
 * Revels wrapped children on scroll with directional easing options.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
}) => {
  const directionsMap = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  const selectedDirection = directionsMap[direction];

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
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1] as const, // cubic-bezier tuple type
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Reveal.displayName = 'Reveal';
