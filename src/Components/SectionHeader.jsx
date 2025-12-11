import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      {/* Decorative header with lines */}
      <div className="flex items-center justify-center w-full max-w-2xl gap-4">
        {/* Left line */}
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-400/50"></div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider whitespace-nowrap px-4">
          {title}
        </h2>

        {/* Right line */}
        <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-400/50"></div>
      </div>
    </div>
  );
}