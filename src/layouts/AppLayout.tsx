import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Structural Application Shell Layout.
 * Renders nested routes through react-router Outlet.
 */
const AppLayout: React.FC = () => {
  return <Outlet />;
};

export default AppLayout;
