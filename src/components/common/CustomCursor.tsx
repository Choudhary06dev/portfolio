import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom Cursor Component.
 * Implements a modern dual-ring custom cursor with spring smoothing,
 * micro-animations on interaction (hover/click), and automatic fallback
 * on mobile/touch screen devices.
 */
export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(pointer: fine)').matches;
  });

  // Mouse Coordinates (Motion Values)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Stiffer spring for the central dot (feels responsive and fast)
  const dotX = useSpring(mouseX, { damping: 45, stiffness: 500, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 45, stiffness: 500, mass: 0.1 });

  // Soft spring for the outer circle (creates an elegant lagging trail)
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    // Check if the device has a mouse/pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    // Track coordinates on move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Fade cursor out if it leaves the viewport
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Click Animations
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Detect if hovering over clickable or interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseover', handleMouseOver);

      // Hide default browser pointer
      document.body.classList.add('custom-cursor-active');
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="border-primary pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered
            ? 'oklch(from var(--primary) l c h / 0.15)'
            : 'oklch(from var(--primary) l c h / 0)',
          borderColor: isHovered ? 'var(--accent)' : 'var(--primary)',
          boxShadow: isHovered
            ? '0 0 16px oklch(from var(--accent) l c h / 0.4)'
            : '0 0 0px rgba(0,0,0,0)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="bg-accent pointer-events-none fixed top-0 left-0 z-[10000] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? 'var(--primary)' : 'var(--accent)',
          boxShadow: isHovered ? '0 0 10px var(--primary)' : '0 0 5px var(--accent)',
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 25,
        }}
      />
    </>
  );
};

export default CustomCursor;
