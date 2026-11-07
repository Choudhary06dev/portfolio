import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TextScrambleProps {
  text: string;
  className?: string;
  /** Delay before scramble starts (ms) */
  delay?: number;
  /** How fast each character resolves (ms per char) */
  speed?: number;
  /** Characters used for scrambling */
  chars?: string;
  /** Trigger on hover instead of on scroll-into-view */
  triggerOnHover?: boolean;
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>';

/**
 * TextScramble — reveals text by cycling through random chars, resolving left-to-right.
 * Triggers when the element scrolls into view (or on hover if triggerOnHover=true).
 */
export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className,
  delay = 0,
  speed = 40,
  chars = DEFAULT_CHARS,
  triggerOnHover = false,
}) => {
  const [displayed, setDisplayed] = useState<string>(
    triggerOnHover ? text : text.replace(/\S/g, chars[0])
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const length = text.length;
    // Track how many chars are "resolved" (locked in)
    let resolved = 0;
    // Each char has an independent scramble counter
    const iterCounts = Array.from({ length }, () =>
      Math.floor(Math.random() * 8) + 4
    );
    const iters = Array(length).fill(0);

    const tick = () => {
      let output = '';

      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          output += ' ';
          continue;
        }

        if (i < resolved) {
          // Already resolved — show real char
          output += text[i];
        } else if (iters[i] < iterCounts[i]) {
          // Still scrambling this position
          output += chars[Math.floor(Math.random() * chars.length)];
          iters[i]++;
        } else {
          // This char just resolved
          output += text[i];
          if (i === resolved) resolved++;
        }
      }

      setDisplayed(output);

      if (resolved < length) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(text);
        setIsAnimating(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      frameRef.current = requestAnimationFrame(tick);
    }, delay);
  };

  // Trigger on scroll into view
  useEffect(() => {
    if (!triggerOnHover && isInView) {
      scramble();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const hoverProps = triggerOnHover
    ? { onMouseEnter: scramble }
    : {};

  return (
    <span
      ref={ref}
      className={cn('font-mono tracking-wider', className)}
      aria-label={text}
      {...hoverProps}
    >
      {displayed}
    </span>
  );
};

TextScramble.displayName = 'TextScramble';
