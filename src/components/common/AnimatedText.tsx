import React from 'react';
import { motion } from 'framer-motion';

export interface AnimatedTextProps {
  text: string;
  variant?: 'fade' | 'slide';
  stagger?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

// Declare static motion elements outside render to prevent state resets
const motionElements = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
};

/**
 * Premium text presentation animator.
 * Breaks down content into staggering word layers or standard fading triggers.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  variant = 'fade',
  stagger = false,
  className,
  as: Tag = 'span',
}) => {
  const words = text.split(' ');

  // Stagger wrapper transition properties
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Word transition parameters
  const childVariants = {
    hidden: {
      opacity: 0,
      y: variant === 'slide' ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as const, // cubic-bezier tuple type
      },
    },
  };

  const MotionComponent = motionElements[Tag];

  if (stagger) {
    return (
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className={className}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={childVariants}
            className="inline-block mr-[0.25em] whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  // Simple non-staggered fallback variants
  const simpleVariants = {
    hidden: {
      opacity: 0,
      y: variant === 'slide' ? 16 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const, // ease-curve string literal
      },
    },
  };

  return (
    <MotionComponent
      variants={simpleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={className}
    >
      {text}
    </MotionComponent>
  );
};

AnimatedText.displayName = 'AnimatedText';
