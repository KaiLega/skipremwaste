import React from 'react';
import SkipCard from './SkipCard';

// SkipList component to display a list of skips
const SkipList = ({ skips }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
  );
};

export default SkipList;
