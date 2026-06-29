import { useContext } from 'react';
import { ThemeContext, type ThemeContextType } from '@/providers/ThemeProvider';

/**
 * Custom hook to access current theme state and toggler.
 * Can only be used inside components wrapped by ThemeProvider.
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
