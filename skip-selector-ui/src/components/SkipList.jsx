import React from 'react';
import SkipCard from '@/components/SkipCard';

// SkipList component to display a list of skips
const SkipList = ({ skips }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skips.map(skip => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
  );
};

export default SkipList;