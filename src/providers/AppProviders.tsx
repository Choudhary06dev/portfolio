import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { LenisProvider } from './LenisProvider';
import { MotionConfig } from 'framer-motion';

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * Root providers orchestrator wrapper.
 * Combines ThemeProvider, LenisProvider, and Framer Motion configuration config.
 */
export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LenisProvider>
        <MotionConfig transition={{ duration: 0.2, ease: 'easeInOut' }}>{children}</MotionConfig>
      </LenisProvider>
    </ThemeProvider>
  );
};
