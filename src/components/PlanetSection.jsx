import React from "react";
import ClickToOpen from "./ClickToOpen";

export default function PlanetSection({ setOpen }) {
  return (
    <div className="relative w-full max-w-4xl -mb-10 transition-all duration-500">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0">

        {/* CIRCLE */}
        <button
          onClick={() => setOpen(true)}
          className="
  relative
  flex
  items-center
  justify-center
  w-28 h-28
  sm:w-36 sm:h-36
  md:w-40 md:h-40
  lg:w-48 lg:h-48
  rounded-full
  border-2
  border-white/30
  hover:bg-white/10
  transition
"

        >
          {/* CENTERED CLICK TEXT */}
          <ClickToOpen />
        </button>

      </div>
    </div>
  );
}
