import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSkipImageUrl, getFormattedPrice } from '@/utils/skipHelpers';

const ConfirmModal = ({ isOpen, onClose, onConfirm, skip }) => {
  if (!skip) return null;

  const {
    size,
    hire_period_days,
    formattedPrice,
    price_before_vat,
    vat,
    includeVat = true,
    currencySymbol = '£',
  } = skip;

  const imageUrl = getSkipImageUrl(size);
  const fallbackPrice = getFormattedPrice({ price_before_vat, vat, includeVat, currencySymbol });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg max-w-md w-full p-0 overflow-hidden shadow-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={imageUrl} alt="Skip preview" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Confirm Selection</h3>
              <p className="mb-3">
                <strong>{size} Yard Skip</strong> – {hire_period_days} day hire<br />
                Price: <strong>{formattedPrice || `${currencySymbol}${fallbackPrice}`}</strong>{' '}
                {includeVat ? '(incl. VAT)' : '(excl. VAT)'}
              </p>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded border dark:border-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
