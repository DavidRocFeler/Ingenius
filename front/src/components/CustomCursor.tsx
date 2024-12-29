'use client'
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Listen to mouse movements
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the listener when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hide the default cursor */}
      <div
        className="hidden sm:block fixed w-[40px] h-[40px] bg-white bg-opacity-70 rounded-full pointer-events-none backdrop-brightness-75 border border-white z-[9999]"
        style={{
          top: `${position.y - 20}px`, // Adjust to center cursor
          left: `${position.x - 20}px`, // Adjust to center cursor
        }}
      />
    </>
  );
};

export default CustomCursor;

