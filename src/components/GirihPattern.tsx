import React, { useId } from 'react';

interface GirihPatternProps {
  className?: string;
  opacityClass?: string;
}

/**
 * Single reusable 8-point star / girih geometric SVG tile.
 * Used sparingly (Hero, Download, Footer) at 4–6% opacity.
 */
export const GirihPattern: React.FC<GirihPatternProps> = ({
  className = '',
  opacityClass = 'opacity-[0.05] dark:opacity-[0.06]',
}) => {
  const patternId = useId();

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${opacityClass} ${className}`}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="96"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <polygon points="48,8 58,38 88,48 58,58 48,88 38,58 8,48 38,38" />
              <rect
                x="24"
                y="24"
                width="48"
                height="48"
                transform="rotate(45 48 48)"
              />
              <circle cx="48" cy="48" r="6" />
              <path d="M0 0 L16 16 M96 0 L80 16 M0 96 L16 80 M96 96 L80 80" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};
