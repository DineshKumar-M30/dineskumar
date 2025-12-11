import React from "react";
import SectionHeader from "./components/SectionHeader";
import UserPanel from "./components/UserPanel";
import HeroBanner from "./components/HeroBanner";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CommunityCard from "./components/CommunityCard";

export default function Explore() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-[#1E2337]">
        <Topbar />

        <div className="p-6 overflow-y-auto space-y-10">
          <HeroBanner />

          <SectionHeader title="Featured Community" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CommunityCard
              title="Virtual Reality"
              members="345,678 Members"
              online="5,678 Online"
              image="/vr.png"
            />
            <CommunityCard
              title="Game Play"
              members="527,955 Members"
              online="28,628 Online"
              image="/game.png"
            />
          </div>

          <SectionHeader title="Popular Right Now" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CommunityCard
              title="3D Art"
              members="345,678 Members"
              image="/3d.png"
            />
            <CommunityCard
              title="NFT"
              members="887,789 Members"
              image="/nft.png"
            />
          </div>
        </div>
      </div>

      <UserPanel />
    </div>
  );
}
