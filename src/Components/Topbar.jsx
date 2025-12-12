import { Menu, Search, Bell, ChevronDown, Globe2 } from "lucide-react";
import avatar from "../assets/avatar.png";

export default function Topbar({ onMenuClick }) {
  return (
    <header
      className="
        border-b border-slate-200 
        bg-white/70 backdrop-blur 
        sticky top-0 z-10
      "
    >
      <div
        className="
          flex items-center justify-between 
          px-3 sm:px-4 lg:px-8 
          py-2.5 sm:py-3
        "
      >
        {/* LEFT: MENU + WELCOME */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU BUTTON */}
          <button
            className="
              inline-flex items-center justify-center 
              rounded-full border border-slate-200 
              w-9 h-9 lg:hidden
            "
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>

          {/* WELCOME TEXT (desktop only) */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[11px] text-slate-400">Welcome</span>

            <span className="text-sm font-medium text-slate-700">
              Dashboard <span className="text-blue-500 ml-1">●</span>
            </span>
          </div>
        </div>

        {/* CENTER SEARCH — hidden on mobile */}
        <div className="flex-1 max-w-xl px-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              className="
                w-full pl-9 pr-3 py-2 
                rounded-full text-xs
                border border-slate-200 bg-slate-50
                focus:outline-none focus:ring-2 focus:ring-blue-400/50
                focus:border-transparent
              "
              placeholder="Type any cryptocurrency..."
            />
          </div>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* LANGUAGE SELECTOR — hide on very small screens */}
          <button
            className="
              hidden sm:inline-flex items-center gap-1 
              text-[11px] border border-slate-200 
              rounded-full px-2.5 sm:px-3 py-1.5 
              bg-white hover:bg-slate-50 transition
            "
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>EN</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* NOTIFICATION BUTTON */}
          <button
            className="
              relative inline-flex items-center justify-center
              w-9 h-9 rounded-full 
              border border-slate-200 bg-white 
              hover:bg-slate-50 transition
            "
          >
            <Bell className="w-4 h-4 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500" />
          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-2">
            {/* Avatar */}
            <div
              className="
                w-8 h-8 sm:w-9 sm:h-9 
                rounded-full border border-blue-100 overflow-hidden
              "
            >
              <img
                src={avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile name — hidden on small screens */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-medium">Dinesh Kumar M</span>
              {/* <span className="text-[10px] text-slate-400">Premium</span> */}
            </div>

            {/* Dropdown icon (desktop only) */}
            <ChevronDown className="hidden sm:block w-3 h-3 text-slate-500" />
          </div>

        </div>
      </div>
    </header>
  );
}
