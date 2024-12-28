import { IBubbleContextType } from '@/interfaces/types';
import React, { createContext, useState, useContext } from 'react';

const BubbleContext = createContext<IBubbleContextType | undefined>(undefined);

export const BubbleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSecondBubbleHovered, setIsSecondBubbleHovered] = useState(false);

  return (
    <BubbleContext.Provider value={{ isSecondBubbleHovered, setIsSecondBubbleHovered }}>
      {children}
    </BubbleContext.Provider>
  );
};

export const useBubbleContext = () => {
  const context = useContext(BubbleContext);
  if (!context) {
    throw new Error('useBubbleContext must be used within a BubbleProvider');
  }
  return context;
};