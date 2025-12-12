import { useState } from "react";

import {
  Repeat,
  Wallet,
  CandlestickChart,
  Download,
  Upload,
  Gift,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Home,
  Landmark,
  Sun,
} from "lucide-react";

import logo from "../assets/logo.png";

const mainItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Repeat, label: "Exchange" },
  { icon: Wallet, label: "My Wallet", hasSubMenu: true },
  { icon: CandlestickChart, label: "Tradeview" },
];

const buyAndSellItems = [
  { label: "Buy & Sell Coin" },
  { label: "Deposit Yen" },
  { label: "Withdraw Yen" },
  { label: "Send Coin" },
  { label: "Receive Coin" },
  { label: "Deposit Coin" },
];

const remainingServiceItems = [
  { icon: Gift, label: "Rewards", hasSubMenu: true },
  { icon: Sun, label: "Utility Plan", hasSubMenu: true },
];

const accountItems = [
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "FAQ" },
];

export default function Sidebar({ open, onClose }) {
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(true);

  return (
    <>
      {/* SIDEBAR PANEL */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-sidebar text-slate-200 
          shadow-2xl flex flex-col transition-transform duration-300 ease-out

          /* Desktop always visible */
          lg:static lg:translate-x-0 lg:shadow-none

          /* Mobile slide-in */
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* TOP LOGO + CLOSE BUTTON */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <img src={logo} alt="Coinspace" className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-wide text-sm text-white">
              COINSPACE
            </span>
          </div>

          {/* Close only on mobile */}
          <button
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE NAVIGATION AREA */}
        <nav
          className="
            flex-1 mt-3 flex flex-col gap-6 px-3 pb-6 text-sm 
            overflow-y-auto scrollbar-thin

            /* Prevents sticky glitch on small screens */
            overscroll-contain
          "
        >
          {/* QUICK ACCESS */}
          <Section title="Quick Access">
            {mainItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </Section>

          {/* SERVICE */}
          <Section title="Service">
            <NavItem
              icon={Landmark}
              label="Transactions"
              badge="12"
              badgeVariant="pink"
              active={isTransactionsOpen}
              hasSubMenu={true}
              isActiveParent={isTransactionsOpen}
              onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}
            />

            {/* SUB MENU */}
            {isTransactionsOpen && (
              <div className="space-y-1">
                {buyAndSellItems.map((item) => (
                  <NavItem key={item.label} {...item} isNested={true} />
                ))}
              </div>
            )}

            {remainingServiceItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </Section>

          {/* ACCOUNT */}
          <Section title="Account">
            {accountItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </Section>
        </nav>

        {/* LOGOUT */}
        <div className="px-4 py-3 border-t border-white/5">
          <button className="w-full flex items-center justify-start text-xs text-slate-300 hover:text-white py-2">
            <span className="inline-flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Log Out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <p className="text-[11px] sm:text-[12px] font-medium text-slate-400 px-2 mb-2">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active,
  badge,
  badgeVariant,
  hasSubMenu,
  isNested,
  isActiveParent,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between 
        py-2 text-xs transition rounded-xl

        ${isNested ? "pl-11 pr-4 text-slate-400 hover:bg-white/5" : "px-2.5"}

        ${isActiveParent
          ? "bg-white/5 text-white"
          : active && !isNested
            ? "bg-white/10 text-white"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }
      `}
    >
      <span className="inline-flex items-center gap-2.5">
        {!isNested && Icon && <Icon className="w-4 h-4" />}
        <span className={`${isNested ? "text-[13px]" : ""}`}>{label}</span>
      </span>

      <div className="flex items-center gap-2">
        {badge && (
          <span
            className={`
                text-[10px] font-semibold px-2 py-0.5 rounded-full
                ${badgeVariant === "pink"
                ? "bg-pink-500/10 text-pink-300"
                : "bg-blue-500/10 text-blue-300"
              }
              `}
          >
            {badge}
          </span>
        )}

        {hasSubMenu && (
          <ChevronRight
            className={`
              w-3.5 h-3.5 transition-transform
              ${isActiveParent ? "rotate-90" : ""}
            `}
          />
        )}
      </div>
    </button>
  );
}
