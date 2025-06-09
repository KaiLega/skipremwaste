import React from 'react';
import { motion } from 'framer-motion';

const SkipCard = ({ skip }) => {
  const {
    size,
    hire_period_days,
    allowed_on_road,
    formattedPrice,
    price_before_vat,
    vat,
    includeVat = true, // fallback default
    currencySymbol = '£', // fallback default
  } = skip;

  const fallbackPrice = includeVat
    ? (price_before_vat * (1 + vat / 100)).toFixed(2)
    : price_before_vat.toFixed(2);

  const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-100 dark:bg-[#1F2937] rounded-xl overflow-hidden shadow hover:shadow-xl transition"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
          {size} Yards
        </div>
        {!allowed_on_road && (
          <div className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            Not Allowed On Road
          </div>
        )}
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold mb-1">{size} Yard Skip</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {hire_period_days} day hire
        </p>
        <div className="flex justify-between items-center">
          <div className="text-blue-600 dark:text-blue-400">
            <span className="text-xl font-semibold">
              {formattedPrice || `${currencySymbol}${fallbackPrice}`}
            </span>
            <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">
              {includeVat ? 'inc. VAT' : 'ex. VAT'}
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Select
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SkipCard;
