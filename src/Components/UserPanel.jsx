import React from "react";
import NewMemberCard from "./NewMemberCard";

export default function UserPanel() {
  return (
    <div className="w-72 bg-[#1B2033] p-6 flex flex-col">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img src="/avatar.png" />
        </div>
        <h3 className="text-white text-lg mt-3">Sophie Fortune</h3>
        <p className="text-white/40 text-sm">@sophiefortune</p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-white/60 text-sm mb-3">
          <span>New Members</span>
          <span>See all</span>
        </div>

        <div className="space-y-3">
          <NewMemberCard name="Anne Couture" time="5 min ago" />
          <NewMemberCard name="Miriam Soleil" time="20 min ago" />
          <NewMemberCard name="Marie Laval" time="35 min ago" />
          <NewMemberCard name="Mark Morain" time="40 min ago" />
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <div className="bg-[#2A314A] px-4 py-3 rounded-lg text-white flex items-center space-x-3">
          <span>📷</span>
          <span>@aksondesign</span>
        </div>

        <div className="bg-[#2A314A] px-4 py-3 rounded-lg text-white flex items-center space-x-3">
          <span>🐦</span>
          <span>@aksonvady</span>
        </div>
      </div>
    </div>
  );
}