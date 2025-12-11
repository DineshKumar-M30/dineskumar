import React from "react";

export default function Topbar() {
  return (
    <div className="w-full h-14 bg-[#242A3E] flex items-center px-6 justify-between">
      <input
        placeholder="Search"
        className="bg-[#1B2033] px-4 py-2 rounded-lg w-72 text-sm outline-none"
      />

      <div className="flex items-center space-x-6 text-xl text-white/70">
        <span>🔔</span>
        <span>📩</span>
        <span>⚙</span>
      </div>
    </div>
  );
}