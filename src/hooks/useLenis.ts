import { useContext, useEffect, useRef } from 'react';
import { LenisContext } from '@/providers/LenisProvider';
import Lenis from 'lenis';

/**
 * Custom hook to retrieve the active Lenis instance.
 * Can be used anywhere inside the LenisProvider hierarchy.
 */
export function useLenisInstance(): Lenis | null {
  const context = useContext(LenisContext);
  if (!context) return null;
  return context.current;
}

/**
 * Custom hook to register a callback on Lenis scroll events.
 * Handles automatic subscription cleanup and prevents callback listener churn.
 *
 * @param callback Function to trigger on scrolling
 */
export function useLenis(callback?: (lenis: Lenis) => void): Lenis | null {
  const lenis = useLenisInstance();
  const callbackRef = useRef(callback);

  // Keep the callback reference updated without triggering re-effects
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!lenis || !callback) return;

    const handleScroll = (instance: unknown) => {
      if (callbackRef.current) {
        callbackRef.current(instance as Lenis);
      }
    };

    // Attach scroll listener
    lenis.on('scroll', handleScroll);

    return () => {
      // Clean up scroll listener
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, callback]);

  return lenis;
}
