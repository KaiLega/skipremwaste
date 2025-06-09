import React, { useState, useEffect } from 'react';
import skipsData from '@/data/skips.json';
import SkipList from '@/components/SkipList';
import FilterBar from '@/components/FilterBar';
import ProgressNavigator from '@/components/ProgressNavigator';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import LayoutContainer from '@/components/LayoutContainer';

const HomePage = () => {
  const { theme } = useTheme();
  const [skips, setSkips] = useState(skipsData);
  const [query, setQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  // State for advanced filters
  const [filters, setFilters] = useState({
    minSize: 0,
    maxPrice: Infinity,
    hirePeriod: '',
    allowedOnRoad: false,
    allowsHeavyWaste: false,
  });

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle filters change
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter skips based on query and advanced filters
  const filteredSkips = skips.filter(skip => {
    const matchesQuery = String(skip.size).toLowerCase().includes(query.toLowerCase());
    const matchesMinSize = skip.size >= (filters.minSize || 0);
    const matchesMaxPrice = skip.price_before_vat <= (filters.maxPrice || Infinity);
    const matchesHirePeriod = !filters.hirePeriod || skip.hire_period_days === filters.hirePeriod;
    const matchesAllowedOnRoad = !filters.allowedOnRoad || skip.allowed_on_road;
    const matchesHeavyWaste = !filters.allowsHeavyWaste || skip.allows_heavy_waste;

    return (
      matchesQuery &&
      matchesMinSize &&
      matchesMaxPrice &&
      matchesHirePeriod &&
      matchesAllowedOnRoad &&
      matchesHeavyWaste
    );
  });

  return (
    <main
      className={`min-h-screen px-4 py-12 text-black dark:text-white ${
        theme === 'dark'
          ? 'bg-[#111827]'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
       <LayoutContainer>
        {/* Progress steps */}
        <ProgressNavigator />

        {/* Header + search + theme */}
        <section className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Skip</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Choose the right skip that best suits your needs.
          </p>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by yard size..."
            className="w-full md:w-1/2 px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />

          {/* Theme switcher */}
          <div className="mt-4 flex justify-center">
            <ThemeSwitcher />
          </div>
        </section>

        {/* Filter bar con props */}
        <FilterBar filters={filters} onChange={handleFiltersChange} />

        {/* Lista degli skip */}
        <SkipList skips={filteredSkips} />
      </LayoutContainer>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
};

export default HomePage;
