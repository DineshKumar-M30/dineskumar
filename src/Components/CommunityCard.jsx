import React from "react";

export default function CommunityCard({ image, title, members, online }) {
  return (
    <div className="bg-[#2A314A] rounded-xl p-4 flex flex-col">
      <img src={image} className="rounded-lg h-48 w-full object-cover" />
      <div className="mt-3">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-white/50">{members}</p>
        {online && <p className="text-xs text-white/40">{online}</p>}
      </div>
    </div>
  );
}