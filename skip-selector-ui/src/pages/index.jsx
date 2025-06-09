import React, { useState, useEffect } from 'react';
import skipsData from '@/data/skips.json';
import SkipList from '@/components/SkipList';
import FilterBar from '@/components/FilterBar';
import ProgressNavigator from '@/components/ProgressNavigator';
import { ArrowUp, Menu } from 'lucide-react';
import LayoutContainer from '@/components/LayoutContainer';
import SideMenu from '@/components/SideMenu';
import MenuButton from '@/components/MenuButton';
import { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [skips, setSkips] = useState(skipsData);
  const [query, setQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [config, setConfig] = useState({
    currency: 'GBP',
    includeVat: true,
    filtersVisible: true,
  });
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
  
  // Handle theme change
  const handleConfigUpdate = (newConfig) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };  

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
      {/* Side Menu */}
      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        config={config}
        onUpdate={(newConfig) => setConfig(prev => ({ ...prev, ...newConfig }))}
      />

      {/* Menu Icon */}
      <MenuButton onClick={() => setMenuOpen(true)} visible={!menuOpen} />

      {/* Main content */}
      <LayoutContainer>
        {/* ProgressNavigator */}
        <div className="mt-4">
          <ProgressNavigator />
        </div>

        {/* Header + search + theme */}
        <section className="max-w-3xl mx-auto text-center py-10">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Skip</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Choose the right skip that best suits your needs.
          </p>
        </section>

        {/* Conditionally render FilterBar */}
        {config.filtersVisible && (
          <FilterBar filters={filters} onChange={handleFiltersChange} />
        )}

        {/* Skip List */}
        <SkipList
          skips={filteredSkips}
          currency={config.currency}
          includeVat={config.includeVat}
        />
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
