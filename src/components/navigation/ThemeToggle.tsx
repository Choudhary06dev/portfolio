import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { Magnetic } from '@/components/common';

/**
 * Accessible Dark / Light Mode trigger button.
 * Modern CSS: ripple press, shimmer rotate, smooth icon crossfade.
 */
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Magnetic strength={0.3} range={40}>
      <button
        onClick={toggleTheme}
        type="button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        className={[
          /* Base */
          'relative overflow-hidden cursor-pointer rounded-lg border p-2',
          'ripple-container',
          /* Colors */
          'text-muted-foreground border-border/40',
          /* Transitions — modern multi-property */
          'transition-[color,background-color,border-color,box-shadow,transform]',
          'duration-300 ease-out',
          /* Hover */
          'hover:text-foreground hover:bg-surface hover:border-border/60',
          'hover:shadow-[0_0_16px_oklch(from_var(--primary)_l_c_h_/_0.15)]',
          /* Active */
          'active:scale-90',
          /* Focus */
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        ].join(' ')}
      >
        {/* Shimmer on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 translate-x-[-120%] rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out hover:translate-x-[120%]"
        />
        {/* Icon with crossfade */}
        <span className="relative z-10 block transition-[transform,opacity] duration-300">
          {theme === 'light' ? (
            <Moon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
          ) : (
            <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
          )}
        </span>
      </button>
    </Magnetic>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
