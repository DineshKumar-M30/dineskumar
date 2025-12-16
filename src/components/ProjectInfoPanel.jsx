// src/components/ProjectInfoPanel.jsx
import React from "react";

export default function ProjectInfoPanel() {
  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="
          w-full
          max-w-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-2xl
          p-6
          sm:p-8
          text-white
          shadow-xl
          max-h-[80vh]
          overflow-y-auto
        "
      >
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <img
            src="/assets/icon-github.png"
            alt="GitHub"
            className="w-8 h-8 opacity-90"
          />
        </div>

        {/* CONTENT */}
        <p className="text-center text-sm sm:text-base leading-relaxed px-2 sm:px-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it.
        </p>
      </div>
    </div>
  );
}
