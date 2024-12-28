'use client'
import { IControlProps } from '@/interfaces/types';
import React, { useState, useRef, useEffect } from 'react';

const Control: React.FC<IControlProps> = ({ 
  handleOpenSlideBar, onStudioCourseClick, initialPosition, minimizedPositionClass, onInitialPositionChange, isSlideBarOpen
}) => {

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [showAccountTooltip, setShowAccountTooltip] = useState(false);
  const [showStudioCourse, setShowStudioCourse] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [showApi, setShowApi] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controlRef = useRef<HTMLDivElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isDragMode, setIsDragMode] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [currentInitialPosition, setCurrentInitialPosition] = useState(initialPosition);

  // Manages the minimize functionality, hiding the content and setting the minimized state after a delay.
  const handleMinimize = () => {
    setIsContentVisible(false);
    setTimeout(() => {
      setIsMinimized(true);
    }, 300);
  };

  // Restores the control to its full size by resetting the minimized state and showing the content 
  const handleRestore = () => {
    setIsMinimized(false);
    setTimeout(() => {
      setIsContentVisible(true);
      setIsRestoring(false);
    }, 800);
  };

  // Handles the tooltip visibility when the mouse enters the control.
  const handleMouseEnter = () => {
    if (!isDragging) setShowTooltip(true);
  };

  // Hides the tooltip when the mouse leaves the control.
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  // Updates the mouse position when the mouse moves over the control.
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleAccountMouseEnter = () => {
    setShowAccountTooltip(true);
  };

  const handleAccountMouseLeave = () => {
    setShowAccountTooltip(false);
  };

  const handleStudioCourseMouseEnter = () => {
    setShowStudioCourse(true);
  };

  const handleStudioCourseMouseLeave = () => {
    setShowStudioCourse(false);
  };

  const handleReportsMouseEnter = () => {
    setShowReports(true);
  }

  const handleReportMouseLeave = () => {
    setShowReports(false);
  }

  const handleProgramsMouseEnter = () => {
    setShowPrograms(true);
  }

  const handleProgramsMouseLeave = () => {
    setShowPrograms(false)
  }

  const handleUsersMouseEnter = () => {
    setShowUsers(true);
  }

  const handleUsersMouseLeave = () => {
    setShowUsers(false);
  }

  const handleUpgradeMouseEnter = () => {
    setShowUpgrade(true);
  }

  const handleUpgradeMouseLeave = () => {
    setShowUpgrade(false);
  }

  const handleApiMouseEnter = () => {
    setShowApi(true);
  }

  const handleApiMouseLeave = () => {
    setShowApi(false);
  }

  const handleHelpMouseEnter = () => {
    setShowHelp(true);
  }

  const handleHelpMouseLeave = () => {
    setShowHelp(false);
  }

  // Handles dragging behavior by recalculating and updating the control's position based on mouse movement.
  const handleDragMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const parentRect = controlRef.current?.parentElement?.getBoundingClientRect();
    const controlRect = controlRef.current?.getBoundingClientRect();
  
    if (parentRect && controlRect) {
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;
  
      // const minX = parentRect.left;
      // const maxX = parentRect.right - controlRect.width;
      // const minY = parentRect.top;
      // const maxY = parentRect.bottom - controlRect.height;
  
      newX = Math.max(0, Math.min(newX - parentRect.left, parentRect.width - controlRect.width));
      newY = Math.max(0, Math.min(newY - parentRect.top, parentRect.height - controlRect.height));
  
      setPosition({ x: newX, y: newY });
    }
  };

  // Activates drag mode when the user presses the mouse down over the control's logo.
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLImageElement && e.target.alt === "LogoIngenius") {
      e.preventDefault();
      setIsDragging(true);
      setIsDragMode(true);
      setShowTooltip(false);
      const rect = controlRef.current?.getBoundingClientRect();
      if (rect) {
        setOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    }
  };

  // Deactivates drag mode when the mouse is released.
  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setIsDragMode(false);
    }, 0);
  };

  // Updates event listeners for drag functionality whenever the dragging state changes.
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleDragMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset, handleDragMouseMove]);

  // Sets the position of the control to the initial position when the `currentInitialPosition` changes.
  useEffect(() => {
    setPosition(currentInitialPosition);
  }, [currentInitialPosition]);

  // Resets the control's position to the initial position when it is minimized.
   useEffect(() => {
    if (isMinimized) {
      setPosition(currentInitialPosition);
    }
  }, [currentInitialPosition, isMinimized]);

  useEffect(() => {
    if (controlRef.current) {
      const rect = controlRef.current.getBoundingClientRect();
      setPosition({ x: rect.left, y: rect.top });
    }
  }, []);

  // Calculates and updates the control's position based on the viewport size and slide bar state.
  useEffect(() => {
    const updatePositions = () => {
      const viewportWidth = window.innerWidth;
      let newPosition;

      if (viewportWidth <= 400) {
        newPosition = isSlideBarOpen ? { x: 115, y: 205 } : { x: 280, y: 200 }
      } else if (viewportWidth <= 600) {
        newPosition = isSlideBarOpen ? { x: 115, y: 205 } : { x: 400, y: 200 }
      } else if (viewportWidth <= 744) {
        newPosition = isSlideBarOpen ? { x: 115, y: 305 } : { x: 500, y: 300 }
      } else {
        newPosition = initialPosition;
      }

      setCurrentInitialPosition(newPosition);
      setPosition(newPosition);
      onInitialPositionChange?.(newPosition);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [initialPosition, onInitialPositionChange, isSlideBarOpen]);

  return (
    <>
      <div
       ref={controlRef}
       className={`absolute z-[9933] ${isRestoring ? 'transition-none' : !isDragMode ? 'transition-all duration-700 ease-in-out' : 'transition-none'}
       ${isMinimized ?
         `cursor-pointer w-[2rem] h-[2rem] bg-gradient-to-r from-[#F8E8BD] via-[#f7efd7] to-[#F8E8BD] animate-pulse rounded-full shadow-none fixed ${minimizedPositionClass}` :
         'w-[90px] h-[245px] rounded-[15px] bg-white flex flex-col shadow-control items-center justify-center'
       }`}
      style={{
        left: isMinimized ? '0' : `${position.x}px`,
        top: isMinimized ? '0' : `${position.y}px`,
      }}
        onClick={isMinimized ? handleRestore : undefined}
      >

      { !isMinimized && (
        <div className={`w-full h-full ${isContentVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out`}>
          <div className="relative flex justify-center mt-1">
            <button
              onClick={handleMinimize} 
              id='ButtonMinimize' className='absolute z-[88889] left-[0.7rem] top-[0.3rem] h-4 w-4 bg-[#AF9B76] rounded-full border-solid border-[#968B78] border-[1px] flex flex-row justify-center items-center'>
              <span className='text-black py-1 px-2 '> - </span>
            </button>
            <img
              src="GlassControl.jpg"
              alt="GlassControl"
              className="w-[90%] relative z-[88888] mb-1"
            />
            <img
              src="LogoIngenius.svg"
              alt="LogoIngenius"
              className="absolute z-[88889] mt-[2rem] cursor-pointer w-8 h-8"
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            />
            {showTooltip && (
              <div
                className="mt-[-2.2rem] ml-[8rem] absolute bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out"
              >
                <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                  Drag the control
                </span>
              </div>
            )}
          </div>
        
          <div className="grid grid-cols-2 grid-rows-4 gap-1 m-auto w-[90%]"> 
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onClick={handleOpenSlideBar}
              onMouseEnter={handleAccountMouseEnter}
              onMouseLeave={handleAccountMouseLeave}
            >
              <img src="ButtonGold.jpg" alt="Vector" className="w-[2.7rem] z-[88888]" />
              <img
                src="Account.svg"
                alt="Account"
                className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]"
              />            
            </button>
              {showAccountTooltip && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Account
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleStudioCourseMouseEnter}
              onMouseLeave={handleStudioCourseMouseLeave}
              onClick={onStudioCourseClick}
            >
              <img src="ButtonGold.jpg" alt="Vector" className="w-[2.7rem]  z-[88888]" />
              <img src="StudioCourse.svg" alt="StudioCourse" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showStudioCourse && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Studio Course
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleReportsMouseEnter}
              onMouseLeave={handleReportMouseLeave}
            >
              <img src="Button.jpg" alt="Button" className="w-[2.7rem] z-[88888]"  />
              <img src="Reports.svg" alt="Reports" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showReports && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Reports
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleProgramsMouseEnter}
              onMouseLeave={handleProgramsMouseLeave}
            >
              <img src="Button.jpg" alt="Button" className="w-[2.7rem] z-[88888]" />
              <img src="Programs.svg" alt="Programs" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showPrograms && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Programs
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleUsersMouseEnter}
              onMouseLeave={handleUsersMouseLeave}
            >
              <img src="Button.jpg" alt="Button" className="w-[2.7rem] z-[88888]" />
              <img src="Users.svg" alt="Users" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showUsers && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Users
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleUpgradeMouseEnter}
              onMouseLeave={handleUpgradeMouseLeave}
            >
              <img src="Button.jpg" alt="Button" className="w-[2.7rem] z-[88888]" />
              <img src="Upgrade.svg" alt="Upgrade" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showUpgrade && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Upgrade
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleApiMouseEnter}
              onMouseLeave={handleApiMouseLeave}
            >
              <img src="ButtonLeft.jpg" alt="Button" className="w-[2.7rem] z-[88888]" />
              <img src="Api.svg" alt="Api" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showApi && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Api
                  </span>
                </div>
              )}
            <button
              className='transition transform active:scale-95 active:shadow-sm'
              onMouseEnter={handleHelpMouseEnter}
              onMouseLeave={handleHelpMouseLeave}
            >
              <img src="ButtonRight.jpg" alt="Button" className="w-[2.7rem] z-[88888]" />
              <img src="Help.svg" alt="Help" className="absolute z-[88889] w-[1.2rem] h-[1.2rem] top-2 ml-[0.6rem]" />
            </button>
              {showHelp && (
                <div className="absolute ml-[3rem] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[99999] px-4 py-2 transition-all duration-200 ease-out top-[-2rem] left-[50%] translate-x-[-50%]">
                  <span className="text-[#888888] text-sm whitespace-nowrap font-roboto">
                    Help
                  </span>
                </div>
              )}
          </div>
        </div>
      )}
      </div>
      
    </>
  );
};

export default Control;


