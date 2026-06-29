import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Premium moving blur blobs background.
 * Uses GPU-accelerated transforms to animate floating glass glows.
 * Automatically disables if prefers-reduced-motion is active.
 */
export const FloatingBlobs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 select-none">
      {/* Blob 1: Violet/Primary */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-primary/10 blur-[120px]"
      />

      {/* Blob 2: Cyan/Accent */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[20%] right-[15%] w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-[140px]"
      />

      {/* Blob 3: Pink/Glow */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[40%] right-[30%] w-[25rem] h-[25rem] rounded-full bg-[#ec4899]/5 blur-[100px]"
      />
    </div>
  );
};
