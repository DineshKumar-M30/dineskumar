import React from "react";

export default function IntroHeader() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 pt-12 text-center">
      <div className="mx-auto max-w-3xl">
        
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-24 md:w-40 header-accent"></div>
          <h2 className="neon-text text-xs md:text-sm uppercase tracking-widest">
            A MESSAGE FROM EARTH
          </h2>
          <div className="w-24 md:w-40 header-accent"></div>
        </div>

        <h1 className="neon-text text-xl sm:text-2xl md:text-3xl font-extrabold outlined mb-4">
          HELLO FELLOW GALAXY MEMBER
        </h1>

        <p className="neon-text text-sm md:text-base opacity-70 mb-8">
          I AM JAY
        </p>
      </div>
    </div>
  );
}