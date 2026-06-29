import React from 'react';
import { Header } from './Header';

/**
 * Global Navigation System Root wrapper.
 * Embeds semantic Header elements.
 */
export const Navigation: React.FC = () => {
  return <Header />;
};

Navigation.displayName = 'Navigation';
