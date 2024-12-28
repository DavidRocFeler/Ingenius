export interface IMessageProps {
    id?: number;
    message?: string;
}

export interface ISelectLearnersProps {
    id?: number;
    number?: string;
    title?: string; 
    paragraph?: string;
}

export interface ICourseSize {
    id?: number;
    size?: string; 
    tokens?: string;
    featureOne?: string;
    featureTwo?: string;
    featureThree?: string;
    featureFour?: string;
}

export interface IControlProps {
    handleOpenSlideBar: () => void;
    onStudioCourseClick: () => void;
    initialPosition: { x: number; y: number };
    minimizedPositionClass: string; 
    onInitialPositionChange?: (newPosition: { x: number; y: number }) => void;
    isSlideBarOpen: boolean; 
}

export interface IIconSlideBarProps {
  onSlideBarOpen: (isOpen: boolean) => void;
  onSlideBarToggle: (isOpen: boolean) => void;
}

export interface ISlideBarProps {
    isVisible: boolean;
    onVisibilityChange: (isVisible: boolean) => void;
    showStudioCourse: boolean;  
    children?: React.ReactNode; 
    showLandingPage: boolean; 
    renderControl: () => React.ReactNode; 
}

export interface ISphericalWaveBiggerProps {
    isSlideBarOpen: boolean;
}

export interface IBubbleContextType {
    isSecondBubbleHovered: boolean;
    setIsSecondBubbleHovered: (value: boolean) => void;
}