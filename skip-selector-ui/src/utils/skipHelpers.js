export const getSkipImageUrl = (size) => {
    return `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`;
  };
  
  export const getFormattedPrice = ({
    price_before_vat,
    vat,
    includeVat = true,
    currencySymbol = '£',
  }) => {
    const value = includeVat
      ? price_before_vat * (1 + vat / 100)
      : price_before_vat;
  
    return `${currencySymbol}${value.toFixed(2)}`;
  };
  