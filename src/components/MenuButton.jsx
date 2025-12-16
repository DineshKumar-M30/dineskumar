import React from "react";

export default function MenuButton({ onClick, open }) {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition flex flex-col justify-center items-center h-10 w-10 md:h-12 md:w-12"
      aria-label={open ? "Close Menu" : "Open Menu"}
    >
      <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></div>
      <div className={`w-5 h-0.5 bg-white my-1 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
    </button>
  );
}