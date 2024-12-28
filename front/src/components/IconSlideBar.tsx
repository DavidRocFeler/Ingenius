'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IIconSlideBarProps } from '@/interfaces/types';

const IconSlideBar: React.FC<IIconSlideBarProps> = ({ onSlideBarOpen, onSlideBarToggle }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    onSlideBarOpen(true);
    onSlideBarToggle(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    onSlideBarOpen(false);
    onSlideBarToggle(false);
  };

  return (
    <div className="fixed top-4 right-4 z-20">
      <button
        className="cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/SlideBarButton.svg"
          alt="SlidebarButton"
          width={27}
          height={27}
        />
      </button>
    </div>
  );
};

export default IconSlideBar;
