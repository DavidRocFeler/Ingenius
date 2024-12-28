'use client'
import React, { useState } from 'react';

const ExpandingBubble: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="hidden sm:flex sm:fixed bottom-4 left-4 z-[9922] group
      "
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="relative w-[30px] h-[30px] overflow-hidden rounded-[24px] bg-black text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.145),0_11px_40px_0_rgba(0,0,0,0.25),0_2px_10px_0_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out group-hover:w-[150px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Show IngeniusLogo when not on hover */}
          {!isHovered && (
            <img
              src="/LogoIngenius.svg"
              alt="Logo Ingenius"
              className="w-4 h-4 animate-pulseSmooth"
            />
          )}
          
          {/* Show IngeniusVector when mouse is over bubble */}
          {isHovered && (
            <img 
              src="VectorIngenius.svg" 
              alt="IngeniusVector" 
              className='h-[1.8rem] w-auto mt-[0.3rem]'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandingBubble;
