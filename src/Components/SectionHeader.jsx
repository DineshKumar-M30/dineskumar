import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="flex justify-between text-white items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button className="text-sm text-white/50 hover:text-white">See all</button>
    </div>
  );
}