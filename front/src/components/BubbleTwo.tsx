'use client'
import React from 'react';
import { useBubbleContext } from '@/context/BubbleContext';

const BubbleTwo: React.FC = () => {
  const { isSecondBubbleHovered, setIsSecondBubbleHovered } = useBubbleContext();

  return (
    <div 
      className={`
        hidden sm:flex relative z-40 bottom-[14rem] left-[26rem] 
        rounded-full bg-[radial-gradient(circle,_#FFFFFF_1%,_#ECE9E9__100%)] 
        shadow-xl cursor-none overflow-hidden
        transition-all duration-500 ease-in-out origin-center
        ${isSecondBubbleHovered 
          ? 'w-[360px] h-[360px] transform -translate-x-[250px] -translate-y-[-50px]' 
          : 'w-[190px] h-[190px]'
        }
      `}
      onMouseEnter={() => setIsSecondBubbleHovered(true)}
      onMouseLeave={() => setIsSecondBubbleHovered(false)}
    >
      <div 
        className={`
          ${isSecondBubbleHovered 
            ? 'opacity-100 delay-500' 
            : 'opacity-0 delay-0'
          }
        `}
      >
        <p 
          className="relative top-[4rem] leading-tight font-roboto text-[1.5rem] text-black font-extrabold w-[15rem] ml-[4rem] transition-transform duration-500 delay-700 transform ${
            isSecondBubbleHovered ? 'translate-y-0 opacity-100' : 'opacity-0'
          }"
        >
          Manage learners intuitively with our integrated LMS features
        </p>
        <p 
          className="relative top-[5rem] w-[18rem] ml-[4rem] font-roboto text-[1rem] text-[#919191] font-light transition-transform duration-500 delay-800 transform ${
            isSecondBubbleHovered ? 'translate-y-0 opacity-100' : 'opacity-0'
          }"
        >
          The first L&D tool that works like the canvas tools you’re familiar with.
        </p>
        <button
          className={`relative ml-[4rem] top-[6rem] bg-custom-green-gradient rounded-[40px] shadow-button transition transform duration-500 delay-900 hover:bg-gray-800 active:scale-95 active:shadow-sm ${
            isSecondBubbleHovered ? 'translate-y-0 opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-roboto font-light text-white text-[0.7rem] pt-[0.3rem] pb-[0.3rem] pl-[1rem] pr-[1rem]">
            Learn More
          </p>
        </button>
      </div>
    </div>
  );
};

export default BubbleTwo;

