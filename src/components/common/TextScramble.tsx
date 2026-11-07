import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

interface RollingLetterProps {
  char: string;
  index: number;
  inView: boolean;
  baseDelay: number;
}

// Generates a sequence of clean random letters that ends precisely with the target letter
const generateReel = (target: string): string[] => {
  if (target === ' ') return [' '];

  const isUpper = target === target.toUpperCase() && target !== target.toLowerCase();
  const pool = isUpper
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    : 'abcdefghijklmnopqrstuvwxyz';

  // 6 to 8 intermediate letters
  const steps = 6 + (target.charCodeAt(0) % 4);
  const reel: string[] = [];

  for (let i = 0; i < steps; i++) {
    const randomChar = pool[Math.floor(Math.random() * pool.length)];
    reel.push(randomChar);
  }

  // Final landing letter
  reel.push(target);
  return reel;
};

const RollingLetter: React.FC<RollingLetterProps> = ({ char, index, inView, baseDelay }) => {
  const reelRef = useRef<string[]>(generateReel(char));
  const [isComplete, setIsComplete] = useState(false);

  if (char === ' ') {
    return <span className="inline-block w-[0.28em]">&nbsp;</span>;
  }

  // Once the animation lands, render clean single letter (eliminates any subpixel overflow lines)
  if (isComplete) {
    return (
      <span className="relative inline-block select-none leading-none">
        {char}
      </span>
    );
  }

  const reel = reelRef.current;
  const targetIndex = reel.length - 1;
  const charDelay = baseDelay + index * 0.04;
  const duration = 0.85 + (index % 4) * 0.12;

  return (
    <span
      className="relative inline-block overflow-hidden align-baseline leading-none h-[1.25em]"
      style={{ verticalAlign: 'baseline' }}
    >
      <motion.span
        className="flex flex-col items-center select-none"
        initial={{ y: '0%' }}
        animate={inView ? { y: `-${(targetIndex / reel.length) * 100}%` } : { y: '0%' }}
        transition={{
          duration: duration,
          delay: charDelay,
          ease: [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={() => {
          setIsComplete(true);
        }}
        style={{ willChange: 'transform' }}
      >
        {reel.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center justify-center h-[1.25em] leading-none"
          >
            {item}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

/**
 * TextScramble — Vertical letter reel.
 * Automatically cleans up on completion so no subpixel lines/artifacts remain above characters.
 */
export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className,
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  return (
    <span
      ref={containerRef}
      className={cn('inline-flex flex-wrap items-center justify-center font-heading', className)}
      aria-label={text}
    >
      {text.split('').map((char, index) => (
        <RollingLetter
          key={`${char}-${index}`}
          char={char}
          index={index}
          inView={isInView}
          baseDelay={delay}
        />
      ))}
    </span>
  );
};

TextScramble.displayName = 'TextScramble';
