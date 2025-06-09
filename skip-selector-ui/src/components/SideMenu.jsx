import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const SideMenu = ({ isOpen, onClose, config, onUpdate }) => {
  const handleUpdate = (key, value) => {
    onUpdate({ [key]: value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Side Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 p-6 z-50 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold dark:text-white">Settings</h2>
              <button onClick={onClose} className="text-gray-700 dark:text-gray-300" aria-label="Close settings menu">
                <X />
              </button>
            </div>

            <div className="space-y-5">
              {/* Currency Selector */}
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Currency</label>
                <select
                  value={config.currency}
                  onChange={(e) => handleUpdate('currency', e.target.value)}
                  className="w-full p-2 rounded border dark:bg-gray-800 dark:border-gray-600"
                >
                  <option value="GBP">GBP (£)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>

              {/* VAT Toggle */}
              <label className="flex items-center gap-2 dark:text-white">
                <input
                  type="checkbox"
                  checked={config.includeVat}
                  onChange={(e) => handleUpdate('includeVat', e.target.checked)}
                />
                Include VAT
              </label>

              {/* Filters Toggle */}
              <label className="flex items-center gap-2 dark:text-white">
                <input
                  type="checkbox"
                  checked={config.filtersVisible}
                  onChange={(e) => handleUpdate('filtersVisible', e.target.checked)}
                />
                Show Filters
              </label>
            </div>

            {/* Theme switcher */}
            <div className="mt-4 flex justify-center">
                <ThemeSwitcher />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
