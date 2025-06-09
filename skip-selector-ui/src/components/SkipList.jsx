// src/components/SkipList.jsx
import React from 'react';
import SkipCard from './SkipCard';

// Utility to get currency symbol
const getCurrencySymbol = (code) => {
  switch (code) {
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    default:
      return '£'; // GBP fallback
  }
};

// Static exchange rates from GBP
const exchangeRates = {
  GBP: 1,
  EUR: 1.17, // 1 GBP ≈ 1.17 EUR
  USD: 1.27, // 1 GBP ≈ 1.27 USD
};

// SkipList component with currency and VAT options
const SkipList = ({ skips, currency = 'GBP', includeVat = true, setActiveStep }) => {
  const symbol = getCurrencySymbol(currency);
  const rate = exchangeRates[currency] || 1;

  const formatPrice = (base, vatRate) => {
    const gbpTotal = includeVat ? base * (1 + vatRate / 100) : base;
    const converted = gbpTotal * rate;
    return `${symbol}${converted.toFixed(2)}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={{
            ...skip,
            formattedPrice: formatPrice(skip.price_before_vat, skip.vat),
            includeVat,
            currencySymbol: symbol,
          }}
          setActiveStep={setActiveStep} 
        />
      ))}
    </div>
  );
};

export default SkipList;
