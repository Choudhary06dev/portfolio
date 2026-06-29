import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { LenisProvider } from '@/context/LenisContext';
import RootLayout from '@/components/layout/RootLayout';
import Home from '@/pages/Home';

/**
 * Main Application Component.
 * Integrates Context Providers (Theme, Scroll) and Router configurations.
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LenisProvider>
        <BrowserRouter>
          <Routes>
            {/* Main Application Routes inside RootLayout */}
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              {/* Future sub-pages or details routes can be added here */}
            </Route>
          </Routes>
        </BrowserRouter>
      </LenisProvider>
    </ThemeProvider>
  );
};

export default App;
