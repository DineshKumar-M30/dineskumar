import React from "react";

export default function BackButton({ onBack }) {
  return (
    <div className="absolute left-4 bottom-8 z-[999] flex flex-col items-center gap-3 sm:left-6 sm:bottom-10">
      <p className="text-white/70 text-xs tracking-widest sm:text-sm">PRESS BACK</p>

      <button
        className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/10 transition"
        onClick={onBack}
        aria-label="Go Back"
      >
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2">
          <path d="M15 18 L9 12 L15 6" />
        </svg>
      </button>
    </div>
  );
}
