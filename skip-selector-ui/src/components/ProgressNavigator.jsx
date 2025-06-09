import { useEffect, useState } from 'react';
import { steps } from '@/constants/steps';
import { ChevronDown } from 'lucide-react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const ProgressNavigator = ({ activeStep, setActiveStep }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="mb-0 md:mb-8">
      {/* Mobile dropdown */}
      {isMobile && (
        <div className="relative w-full">
          <select
            value={activeStep}
            onChange={(e) => setActiveStep(Number(e.target.value))}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            {steps.map((step, index) => (
              <option key={index} value={index} disabled={index > activeStep}>
                {step.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute top-3 right-3 text-gray-400 pointer-events-none" />
        </div>
      )}

      {/* Desktop step bar */}
      {!isMobile && (
        <div className="flex justify-center overflow-x-auto">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isEnabled = index <= activeStep;
              const isLast = index === steps.length - 1;

              return (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    disabled={!isEnabled}
                    className={cx(
                      'flex items-center transition-colors',
                      isActive
                        ? 'text-[#0037C1] hover:text-[#0037C1]'
                        : 'text-gray-400 cursor-not-allowed'
                    )}
                  >
                    <Icon
                      className={cx(
                        'w-6 h-6',
                        isActive
                          ? 'text-blue-600'
                          : 'text-gray-400 dark:text-gray-500'
                      )}
                    />
                    <span
                      className={cx(
                        'ml-2 text-sm',
                        isActive
                          ? 'font-semibold text-blue-600'
                          : 'text-gray-400 dark:text-gray-500'
                      )}
                    >
                      {step.label}
                    </span>
                  </button>
                  {!isLast && (
                    <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressNavigator;
