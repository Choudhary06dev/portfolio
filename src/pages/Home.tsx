import React from 'react';

/**
 * Placeholder component for the main Home / Landing page.
 * To be implemented by the developer.
 */
const Home: React.FC = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Amjad's Portfolio
      </h1>
      <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
        Premium Portfolio Development Environment.
      </p>
    </div>
  );
};

export default Home;
