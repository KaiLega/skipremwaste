import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfirmModal from './ConfirmModal';
import { getSkipImageUrl, getFormattedPrice } from '@/utils/skipHelpers';

const SkipCard = ({ skip, setActiveStep }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); 

  const {
    size,
    hire_period_days,
    allowed_on_road,
    formattedPrice,
    price_before_vat,
    vat,
    includeVat = true,
    currencySymbol = '£',
  } = skip;

  const imageUrl = getSkipImageUrl(size);
  const fallbackPrice = getFormattedPrice({ price_before_vat, vat, includeVat, currencySymbol });

  const handleContinue = () => {
    setShowConfirm(false);
    setActiveStep(3);
    // Next Step Logic
    if (typeof window !== 'undefined') {
      document.getElementById('permit-check')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 dark:bg-[#1F2937] rounded-xl overflow-hidden shadow hover:shadow-xl transition"
      >
        <div className="relative cursor-zoom-in" onClick={() => setIsZoomed(true)}>
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
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Select
            </button>
          </div>
        </div>
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={imageUrl}
              alt="Zoomed Skip"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-3xl max-h-[80vh] rounded shadow-lg"
            />
          </motion.div>
        )}
        {/* Confirmation Modal */}
        <ConfirmModal
          isOpen={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleContinue}
          skip={skip}
        />
      </AnimatePresence>
    </>
  );
};

export default SkipCard;
