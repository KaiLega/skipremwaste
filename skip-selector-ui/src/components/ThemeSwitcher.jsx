import { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

// ThemeSwitcher component to toggle between light and dark themes
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-4 py-2 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm transition"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
};

export default ThemeSwitcher;