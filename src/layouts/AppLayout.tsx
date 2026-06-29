import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components/navigation';

/**
 * Structural Application Shell Layout.
 * Wraps dynamic child routes with Header and Footer components.
 */
const AppLayout: React.FC = () => {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
