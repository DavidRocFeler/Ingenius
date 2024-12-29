// This file uses React's client-side rendering.
'use client'
import React from "react";
import { useBubbleContext } from "@/context/BubbleContext";

const BubbleOne: React.FC = () => {
  // Extracting the `isSecondBubbleHovered` state from the `BubbleContext`.
  const { isSecondBubbleHovered } = useBubbleContext();
  
   // Function to handle the click event and redirect to the pricing page.
  const handleClick = () => {
    window.location.href = 'https://www.ingenius.ai/pricing';
  };

  return (
    // Container with responsive position settings and hidden on small screens.
    <div className="relative z-30 left-[8rem] bottom-[1rem] hidden sm:flex">
       {/* Bubble element with conditional size based on `isSecondBubbleHovered`. */}
      <div
        className={`
          transition-all duration-500 ease-in-out
          bg-[radial-gradient(circle,_#EEEEEE_10%,_#F0F0F0_100%)] rounded-full shadow-xl
          ${isSecondBubbleHovered ? 'w-[190px] h-[190px]' : 'w-[360px] h-[360px]'}
        `}
      >
        {/* Content inside the bubble with conditional opacity based on hover state. */}
        <div className={`
          transition-opacity duration-300
          ${isSecondBubbleHovered ? 'opacity-0' : 'opacity-100 delay-500'} // Añadimos el delay
        `}>
          {/* Heading text with responsive styles and transitions. */}
          <p className="relative top-[5rem] leading-tight font-roboto text-[1.5rem] text-black font-extrabold w-[15rem] ml-[4rem] transform transition-all duration-500">
            Use the Course Studio for blazing fast course creation
          </p>
          <p className="relative top-[6rem] w-[15rem] ml-[4rem] font-roboto text-[1rem] text-[#919191] font-light transform transition-all duration-500">
            You&#39;ve never created a high-quality course this fast before.
          </p>
          {/* Button with hover and active styles for redirection. */}
          <button
            onClick={handleClick}
            className="relative ml-[4rem] top-[7rem] hover:bg-black duration-500 bg-custom-blue-gradient rounded-[40px] shadow-button transition transform active:scale-95 active:shadow-sm"
          >
            {/* Button text with padding and light font style. */}
            <p className="font-roboto font-light text-white text-[0.7rem] pt-[0.3rem] pb-[0.3rem] pl-[1rem] pr-[1rem]">
              Learn More
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BubbleOne;
