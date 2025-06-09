import React from 'react';
import { motion } from 'framer-motion';

// SkipCard component to display individual skip details
const SkipCard = ({ skip }) => {
  const finalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0);
  
  // Construct the image URL based on the skip size
  const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-100 dark:bg-[#1F2937] rounded-xl overflow-hidden shadow hover:shadow-xl transition"
    >
      <div className="relative">
        <img src={imageUrl} alt={`${skip.size} Yard Skip`} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
          {skip.size} Yards
        </div>
        {!skip.allowed_on_road && (
          <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Not Allowed On Road
          </div>
        )}
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold mb-1">{skip.size} Yard Skip</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{skip.hire_period_days} day hire</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">£{finalPrice}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Select
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SkipCard;