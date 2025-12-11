import React from "react";

export default function SidebarItem({ icon, active }) {
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer
      ${active ? "bg-white/20" : "bg-white/10"} hover:bg-white/20 transition`}
    >
      <span className="text-xl">{icon}</span>
    </div>
  );
}