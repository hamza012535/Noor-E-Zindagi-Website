import React from 'react';

interface BrandMarkProps {
  className?: string;
}

/**
 * Placeholder SVG brand mark (8-point geometric star & lantern core in gold on emerald).
 * Replace with final vector logo before store release if desired.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#0D3B2E" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="8.5"
        stroke="#C99A3B"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <polygon
        points="20,6 23.6,16.4 34,20 23.6,23.6 20,34 16.4,23.6 6,20 16.4,16.4"
        stroke="#C99A3B"
        strokeWidth="1.4"
        fill="none"
      />
      <rect
        x="12.5"
        y="12.5"
        width="15"
        height="15"
        transform="rotate(45 20 20)"
        stroke="#F3E4BE"
        strokeOpacity="0.85"
        strokeWidth="1.1"
        fill="none"
      />
      <circle cx="20" cy="20" r="2.6" fill="#C99A3B" />
    </svg>
  );
};
