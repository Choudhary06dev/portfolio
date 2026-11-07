import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

interface RollingLetterProps {
  char: string;
  index: number;
  inView: boolean;
  baseDelay: number;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Pick 6-8 random letters that end with the target letter
const generateReel = (target: string): string[] => {
  if (target === ' ') return [' '];
  
  const isUpper = target === target.toUpperCase() && target !== target.toLowerCase();
  const pool = isUpper
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    : 'abcdefghijklmnopqrstuvwxyz';

  const steps = 7 + (target.charCodeAt(0) % 5);
  const reel: string[] = [];

  for (let i = 0; i < steps; i++) {
    const randomChar = pool[Math.floor(Math.random() * pool.length)];
    reel.push(randomChar);
  }
  // Ensure the final landing character is the actual target
  reel.push(target);
  return reel;
};

const RollingLetter: React.FC<RollingLetterProps> = ({ char, index, inView, baseDelay }) => {
  const reelRef = useRef<string[]>(generateReel(char));

  if (char === ' ') {
    return <span className="inline-block w-[0.28em]">&nbsp;</span>;
  }

  const reel = reelRef.current;
  const targetIndex = reel.length - 1;
  const charDelay = baseDelay + index * 0.045;
  const duration = 0.9 + (index % 4) * 0.15;

  return (
    <span
      className="relative inline-block overflow-hidden align-top leading-none h-[1.12em]"
      style={{ verticalAlign: 'top' }}
    >
      <motion.span
        className="flex flex-col items-center select-none"
        initial={{ y: '0%' }}
        animate={inView ? { y: `-${(targetIndex / reel.length) * 100}%` } : { y: '0%' }}
        transition={{
          duration: duration,
          delay: charDelay,
          ease: [0.16, 1, 0.3, 1], // Smooth exponential deceleration (luxury slot reel)
        }}
        style={{ willChange: 'transform' }}
      >
        {reel.map((item, idx) => (
          <span
            key={idx}
            className={cn(
              'flex items-center justify-center h-[1.12em] leading-none',
              idx === targetIndex ? 'opacity-100' : 'opacity-70'
            )}
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
 * TextScramble (Alphabet Scroll / Slot Reel Effect).
 * Each character scrolls vertically through real alphabets (no weird symbols)
 * smoothly landing on the final word, just like premium SaaS reels (Linear / Stripe).
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
