import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
