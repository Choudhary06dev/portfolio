import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProviders } from '@/providers';
import { AppLayout } from '@/layouts';
import { Home, ProjectDetail } from '@/pages';

/**
 * Root Application Router & Component Layouts.
 * Integrates global layout wrapper and route endpoints within AppProviders wrapper.
 */
const App: React.FC = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
