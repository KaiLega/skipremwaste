import {
    MapPin,
    Trash2,
    Truck,
    Shield,
    Calendar,
    CreditCard,
  } from 'lucide-react';
  import { useState } from 'react';
  
  const cx = (...classes) => classes.filter(Boolean).join(' ');
  
  const steps = [
    { label: 'Postcode', icon: MapPin, active: true },
    { label: 'Waste Type', icon: Trash2, active: true },
    { label: 'Select Skip', icon: Truck, active: true },
    { label: 'Permit Check', icon: Shield, active: false },
    { label: 'Choose Date', icon: Calendar, active: false },
    { label: 'Payment', icon: CreditCard, active: false },
  ];
  
  const ProgressNavigator = () => {
    return (
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="flex items-center">
                <button
                  disabled={!step.active}
                  className={cx(
                    'flex items-center whitespace-nowrap transition-colors',
                    step.active ? 'text-[#0037C1] hover:text-[#0037C1] cursor-pointer' : 'text-white/60 cursor-not-allowed opacity-50'
                  )}
                >
                  <Icon
                    className={cx(
                        'w-6 h-6',
                        step.active ? 'text-black dark:text-blue-600' : 'text-black/60 dark:text-white/60'
                    )}
                  />
                  <span
                    className={cx(
                        'ml-2',
                        step.active
                        ? 'text-black dark:text-blue-600'
                        : 'text-black/60 dark:text-white/60'
                    )}
                    >
                    {step.label}
                  </span>
                </button>
                {!isLast && (
                    <div className="w-16 h-px bg-gray-300 dark:bg-gray-700 mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default ProgressNavigator;
  