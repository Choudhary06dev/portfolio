import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

/**
 * Reusable Magnetic component.
 * Attracts the child element towards the mouse cursor when hovered.
 * Automatically disables itself on devices without a fine pointer (e.g. mobile/touch screens).
 */
export const Magnetic: React.FC<MagneticProps> = ({ children, range = 50, strength = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });

  // Coordinates using motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for magnetic attraction
  const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 });
  const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 });

  useEffect(() => {
    // Check if the device has a mouse/pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      // Drag element toward cursor based on hover strength
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      // Revert if outside hover threshold
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!isFinePointer) {
    return children;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
