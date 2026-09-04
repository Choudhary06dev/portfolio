import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header, Footer } from '@/components/navigation';
import { FloatingBlobs /*, CustomCursor */ } from '@/components/common';

/**
 * Structural Application Shell Layout.
 * Wraps dynamic child routes with Header and Footer components.
 */
const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col transition-colors duration-300">
      {/* <CustomCursor /> -- Commented out to use native cursor pointer */}
      <FloatingBlobs />
      <Header />
      <main className="relative z-10 flex-1 pt-[72px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'none' }}
            exit={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
