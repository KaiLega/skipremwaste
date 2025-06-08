import React from 'react';

// SkipCard component to display individual skip details
const SkipCard = ({ skip }) => {
  const finalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0);

  // Construct the image URL based on the skip size
  const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`;

  return (
    <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {skip.size} Yards
        </div>
        {!skip.allowed_on_road && (
          <div className="absolute bottom-3 left-2 z-20 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
            <span className="text-xs font-medium text-yellow-500">Not Allowed On The Road</span>
          </div>
        )}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2">{skip.size} Yard Skip</h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">{skip.hire_period_days} day hire period</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl md:text-2xl font-bold text-[#0037C1]">£{finalPrice}</span>
      </div>
      <button className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]">
        <span>Select This Skip</span>
      </button>
    </div>
  );
};

export default SkipCard;