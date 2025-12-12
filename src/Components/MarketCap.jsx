import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const data = [
  { name: "BTC", value: "¥ 721,882", change: "-4.06%", dir: "down" },
  { name: "BCH", value: "¥ 48,676", change: "-0.37%", dir: "down" },
  { name: "ETH", value: "¥ 22,370", change: "+0.39%", dir: "up" },
  { name: "LTC", value: "¥ 5,785.2", change: "-0.22%", dir: "down" },
  { name: "ETC", value: "¥ 1,640.7", change: "0.00%", dir: "flat" },
  { name: "XRP", value: "¥ 50,839", change: "+0.46%", dir: "up" },
  { name: "FCT", value: "¥ 53,648", change: "+0.27%", dir: "up" },
  { name: "LSK", value: "¥ 3,214", change: "+0.78%", dir: "up" },
  { name: "XEM", value: "¥ 10,604", change: "-1.07%", dir: "down" },
];

export default function MarketCap() {
  return (
    <section
      className="
      bg-white rounded-2xl shadow-soft border border-slate-100 
      p-4 sm:p-5 flex flex-col

      /* Makes height auto on small screens */
      min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]
    "
    >
      <header className="flex items-center justify-between mb-3">
        <h2 className="text-sm sm:text-base font-semibold text-slate-800">
          Market Cap
        </h2>
        <span className="text-[10px] sm:text-[11px] text-slate-400">Live</span>
      </header>

      {/* SCROLLABLE LIST WITH RESPONSIVE BEHAVIOR */}
      <div
        className="
        flex-1 overflow-y-auto pr-1 
        scrollbar-thin

        /* Improve touch scrolling */
        overscroll-contain 
      "
      >
        <ul className="space-y-1">
          {data.map((coin) => (
            <li
              key={coin.name}
              className="
              flex items-center justify-between 
              py-2 px-2 sm:px-3

              rounded-xl hover:bg-slate-50 transition

              /* Responsive text */
              text-[11px] sm:text-xs
            "
            >
              {/* LEFT SIDE */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className="
                  w-7 h-7 sm:w-8 sm:h-8 
                  rounded-full bg-slate-100 
                  flex items-center justify-center 
                  text-[10px] sm:text-[11px] font-semibold text-slate-600
                "
                >
                  {coin.name[0]}
                </div>

                <span className="font-medium text-slate-700">
                  {coin.name}
                </span>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[11px] sm:text-[12px] font-semibold">
                  {coin.value}
                </span>

                <span
                  className={`
                  inline-flex items-center gap-0.5
                  text-[10px] sm:text-[11px]

                  ${
                    coin.dir === "up"
                      ? "text-emerald-500"
                      : coin.dir === "down"
                      ? "text-rose-500"
                      : "text-slate-400"
                  }
                `}
                >
                  {coin.dir === "up" && <ArrowUpRight className="w-3 h-3" />}
                  {coin.dir === "down" && <ArrowDownRight className="w-3 h-3" />}
                  {coin.change}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
