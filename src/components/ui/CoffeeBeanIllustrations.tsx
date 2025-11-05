import React from 'react';

interface ContinentColorProps {
  className?: string;
  size?: number;
}

// Coffee bean illustration component
const CoffeeBeanIllustration: React.FC<ContinentColorProps> = ({ 
  className = '', 
  size = 60 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse
      cx="30"
      cy="30"
      rx="12"
      ry="18"
      fill="#8B4513"
      opacity="0.8"
    />
    <path
      d="M30 15 C30 15, 30 25, 30 30 C30 35, 30 45, 30 45"
      stroke="#654321"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Function to get coffee bean illustration based on coffee name and country
export const getCoffeeBeanIllustration = () => {
  // Return the coffee bean illustration component
  return CoffeeBeanIllustration;
};