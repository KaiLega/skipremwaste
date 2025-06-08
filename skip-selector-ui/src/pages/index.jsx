import React from 'react';
import skips from '@/data/skips.json';
import SkipList from '@/components/SkipList';

// HomePage component to display the main content
const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Choose Your Skip Size</h2>
      <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
      <SkipList skips={skips} />
    </main>
  );
};

export default HomePage;