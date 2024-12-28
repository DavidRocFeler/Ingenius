'use client'
import { useState } from "react";

const ProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleButtonClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className={`h-[0.1rem] w-[2.2rem] transition-colors duration-300 ${
              index < activeStep ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="ont-roboto font-medium text-[1rem] text-black mr-1">Set up</div>

      <div className="flex gap-2 text-[0.9rem] opacity-0">
        {[1, 2, 3, 4, 5].map((step) => (
          <button
            key={step}
            onClick={() => handleButtonClick(step)}
            className={`px-[0.8rem] py-[0.3rem] rounded-lg text-white transition-colors duration-300 ${
              step <= activeStep ? "bg-[#888888]" : "bg-gray-400"
            }`}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
