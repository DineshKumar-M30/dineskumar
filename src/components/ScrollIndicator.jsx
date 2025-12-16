import React from "react";

export default function ScrollIndicator({ onScrollClick }) {
  return (
    <div 
      className="absolute right-4 bottom-8 z-40 flex flex-col items-center gap-2 cursor-pointer sm:right-6 sm:bottom-10 md:right-6 md:bottom-12"
      onClick={onScrollClick}
    >
      <div className="neon-text text-xs">SCROLL</div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-white/80 animate-bounce sm:w-7 sm:h-7 md:w-8 md:h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}