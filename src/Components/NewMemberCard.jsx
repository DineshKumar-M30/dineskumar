import React from "react";

export default function NewMemberCard({ name, time }) {
  return (
    <div className="bg-[#242A3E] p-3 rounded-lg flex items-center space-x-3 text-white">
      <div className="w-10 h-10 rounded-full bg-white/20"></div>
      <div>
        <p className="text-sm">{name}</p>
        <p className="text-xs text-white/40">{time}</p>
      </div>
    </div>
  );
}