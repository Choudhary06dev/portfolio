import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

/**
 * Accessible Dark / Light Mode trigger button.
 * Enforces accessibility indicators.
 */
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="text-muted-foreground hover:text-foreground hover:bg-surface hover:border-border/40 focus-visible:outline-primary cursor-pointer rounded-md border border-transparent p-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
