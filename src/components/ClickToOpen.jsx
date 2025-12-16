import React from "react";

export default function ClickToOpen() {
  return (
    <>
      {/* INSIDE CIRCLE (TABLET + DESKTOP ONLY)*/}
      <div
        className="
          hidden
          md:flex
          relative
          flex-col
          items-center
          justify-center
          pointer-events-none
        "
      >
        {/* Frame TL */}
        <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-white/80" />
        {/* Frame BR */}
        <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-white/80" />

        <p className="text-base md:text-lg font-bold neon-text tracking-widest">
          CLICK
        </p>
        <p className="text-sm neon-text opacity-90">
          TO OPEN
        </p>
      </div>

      {/* ===== MOBILE ONLY (BELOW CIRCLE) ===== */}
      <div
        className="
          flex
          md:hidden
          mt-2
          text-center
          pointer-events-none
        "
      >
        <div>
          <p className="text-sm font-bold neon-text tracking-widest">
            CLICK
          </p>
          <p className="text-xs neon-text opacity-90">
            TO OPEN
          </p>
        </div>
      </div>
    </>
  );
}
