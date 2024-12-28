import { ISphericalWaveBiggerProps } from '@/interfaces/types';
import React from 'react';

const SphericalWaveBigger: React.FC<ISphericalWaveBiggerProps>  = ({isSlideBarOpen}) => {

  return (
    <div className={`fixed bottom-[1rem]  ${
      isSlideBarOpen ? 'right-[7.5rem]' : 'right-[1rem]'
      }`}>
      {/* Outer container that holds all the waves */}
      <div className="relative w-[4rem] h-[4rem]"> {/* Adjusted size to make the effect more visible */}    
        {/* Outer wave effects */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D1CDBD] via-[#AAB3BC] to-[#D1CDBD] blur-md animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B1BFB8] via-[#D5CDD4] to-[#B1BFB8] opacity-75 animate-latido"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D1CDBD] via-[#B5B9C0] to-[#D1CDBD] opacity-50"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#AAB3BC] via-[#D5CDD4] to-[#AAB3BC] opacity-25"></div>  
        {/* Inner circle (white sky) */}
        <div className="absolute inset-0 m-auto w-[2rem] h-[2rem] rounded-full bg-white blur-sm animate-latido"></div>
      </div>
    </div>
  );
};

export default SphericalWaveBigger;
