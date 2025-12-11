import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-20 bg-[#2A2F45] flex flex-col justify-between py-4 items-center">
      <div className="space-y-4">
        <SidebarItem icon="🏠" active />
        <SidebarItem icon="🎵" />
        <SidebarItem icon="🎮" />
        <SidebarItem icon="📘" />
        <SidebarItem icon="🔬" />
        <SidebarItem icon="🎬" />
        <SidebarItem icon="🏫" />
      </div>

      <div className="text-white text-3xl">➕</div>
    </div>
  );
}
