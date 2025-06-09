import { useState } from 'react';

const FilterBar = ({ filters, onChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (key, value) => {
    const updated = { ...localFilters, [key]: value };
    setLocalFilters(updated);
    onChange(updated);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Size filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Min Size (yards)</label>
          <input
            type="number"
            value={localFilters.minSize}
            onChange={(e) => handleChange('minSize', parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white text-black dark:bg-white/10 dark:text-white placeholder:text-gray-400"
            />
        </div>

        {/* Price filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Max Price (£)</label>
          <input
            type="number"
            value={localFilters.maxPrice}
            onChange={(e) => handleChange('maxPrice', parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white text-black dark:bg-white/10 dark:text-white placeholder:text-gray-400"
          />
        </div>

        {/* Hire period */}
        <div>
          <label className="block text-sm font-medium mb-1">Hire Period (days)</label>
          <select
            value={localFilters.hirePeriod}
            onChange={(e) => handleChange('hirePeriod', parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white text-black dark:bg-white/10 dark:text-white placeholder:text-gray-400"
          >
            <option value="">Any</option>
            <option value={7}>7 days</option>
            <option value={14}>14 days</option>
            <option value={28}>28 days</option>
          </select>
        </div>

        {/* Allowed on road */}
        <div className="col-span-1 md:col-span-3 flex items-center gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={localFilters.allowedOnRoad}
              onChange={(e) => handleChange('allowedOnRoad', e.target.checked)}
            />
            <span>Allowed on Road</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={localFilters.allowsHeavyWaste}
              onChange={(e) => handleChange('allowsHeavyWaste', e.target.checked)}
            />
            <span>Heavy Waste</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
