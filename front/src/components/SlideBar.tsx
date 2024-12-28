'use client'
import React, { useState, useEffect } from 'react';
import Login from './Login';
import ProgressBar from './ProgressBar';
import { ISlideBarProps } from '@/interfaces/types';

const SlideBar: React.FC<ISlideBarProps> = ({ 
  isVisible, 
  onVisibilityChange, 
  showStudioCourse,
  children,
  showLandingPage,
  renderControl
}) => {
  const [keepOpen, setKeepOpen] = useState(false);

  useEffect(() => {
    setKeepOpen(isVisible);
  }, [isVisible]);

  useEffect(() => {
    onVisibilityChange(keepOpen);
  }, [keepOpen]);

  return (
    <div
      className={`z-[9944] fixed top-0 right-0 h-full w-[20rem] bg-white/10 backdrop-blur-lg border-l border-white/20 text-white transition-transform duration-300 ease-in-out transform ${
        keepOpen ? 'translate-x-0 ' : 'translate-x-full'
      }`}
      onMouseEnter={() => setKeepOpen(true)}
      onMouseLeave={() => setKeepOpen(false)}
    >
      {showStudioCourse ? <ProgressBar /> : <Login />}
      <div className="relative h-full w-full">
        {children}
        {!showLandingPage && renderControl()} 
      </div>
    </div>
  );
};

export default SlideBar;
