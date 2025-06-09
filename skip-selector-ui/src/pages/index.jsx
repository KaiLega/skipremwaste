import React, { useState, useEffect } from 'react';
import skipsData from '@/data/skips.json';
import SkipList from '@/components/SkipList';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useTheme } from 'next-themes';


const HomePage = () => {
  const { theme } = useTheme();
  const [skips, setSkips] = useState(skipsData);
  const [query, setQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSkips = skips.filter(skip =>
    String(skip.size).toLowerCase().includes(query.toLowerCase())
  );

  return (
<main
  className={`min-h-screen px-4 py-12 text-black dark:text-white ${
    theme === 'dark'
      ? 'bg-[#111827]'
      : 'bg-gradient-to-b from-gray-50 to-white'
  }`}
><section className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Find Your Perfect Skip</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Choose the right skip size for your project.
        </p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by yard size..."
          className="w-full md:w-1/2 px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <div className="mt-4 flex justify-center">
          <ThemeSwitcher />
        </div>
      </section>
      <SkipList skips={filteredSkips} />

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