import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCards from "./components/StatCards";
import ChartSection from "./components/ChartSection";
import MarketCap from "./components/MarketCap";
import ActivitiesTable from "./components/ActivitiesTable";
import NewsFeed from "./components/NewsFeed";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
        flex h-screen overflow-hidden bg-bg

        /* Ensure smooth layout on tiny screens */
        min-h-[100dvh]
      "
    >

      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* MOBILE BACKDROP */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN AREA */}
      <div
        className="
          flex-1 flex flex-col min-w-0

          /* Fix Safari mobile height issues */
          max-h-screen
        "
      >
        {/* TOPBAR */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        {/* CONTENT AREA */}
        <main
          className="
            flex-1 overflow-y-auto 
            px-3 sm:px-6 lg:px-8 
            pb-6

            /* Prevent horizontal overflow */
            no-scrollbar
          "
        >
          <div className="mt-4 space-y-6">

            {/* TOP STAT CARDS – RESPONSIVE GRID */}
            <StatCards />

            {/* CHART + MARKET CAP */}
            <div
              className="
                grid gap-6

                /* Mobile: Single column */
                grid-cols-1

                /* Desktop: 2 column layout */
                xl:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]
              "
            >
              <ChartSection />
              <MarketCap />
            </div>

            {/* ACTIVITIES + NEWS */}
            <div
              className="
                grid gap-6

                /* Mobile: stack */
                grid-cols-1

                /* Tablet: 2 column */
                lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]
              "
            >
              <ActivitiesTable />
              <NewsFeed />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
