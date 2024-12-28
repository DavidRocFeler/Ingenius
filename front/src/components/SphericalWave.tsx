import React from 'react';

const SphericalWave: React.FC = () => {
  return (
    <div className="flex items-center justify-center mr-[1rem] ml-[0.5rem]">
      {/* Outer container that holds all the waves */}
      <div className="relative w-5 h-5"> {/* Adjusted size to make the effect more visible */}
        
        {/* Outer wave effects */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D1CDBD] via-[#AAB3BC] to-[#D1CDBD] blur-md animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B1BFB8] via-[#D5CDD4] to-[#B1BFB8] opacity-75 animate-latido"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D1CDBD] via-[#B5B9C0] to-[#D1CDBD] opacity-50"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#AAB3BC] via-[#D5CDD4] to-[#AAB3BC] opacity-25"></div>  
        
        {/* Inner circle (white sky) */}
        <div className="absolute inset-0 m-auto w-[0.6rem] h-[0.6rem] rounded-full bg-white animate-latido"></div>
      </div>
    </div>
  );
};

export default SphericalWave;
