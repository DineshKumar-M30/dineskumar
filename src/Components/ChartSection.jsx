import { useState, useMemo } from "react";
import { ArrowDownRight } from "lucide-react";

const ranges = ["1min", "5min", "15min", "1hr", "4hr", "1day"];

const generateCandles = () => {
  let price = 723000;
  const data = [];

  for (let i = 0; i < 120; i++) {
    const high = price + Math.random() * 900;
    const low = price - Math.random() * 900;
    const open = price;
    const close = low + Math.random() * (high - low);

    price = close;
    data.push({ open, close, high, low });
  }
  return data;
};

export default function ChartSection() {
  const [activeRange, setActiveRange] = useState("1min");

  const candles = useMemo(() => generateCandles(), []);
  const visibleCandles = candles.slice(0, 96);

  const rawMax = Math.max(...visibleCandles.map((c) => c.high));
  const rawMin = Math.min(...visibleCandles.map((c) => c.low));

  const maxPrice = rawMax + 300;
  const minPrice = rawMin - 300;

  const steps = 6;
  const priceLabels = Array.from({ length: steps + 1 }, (_, i) => {
    const raw = maxPrice - ((maxPrice - minPrice) / steps) * i;
    return Math.round(raw / 1000) * 1000;
  });

  return (
    <section className="bg-white rounded-2xl shadow-soft border border-slate-100 p-4 sm:p-5 flex flex-col">

      {/* HEADER */}
      <header className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs sm:text-sm font-semibold">BTC</span>
          <span className="text-[10px] sm:text-[11px] text-slate-400">/ JPY</span>

          <div className="flex items-center gap-1 text-xs text-rose-500">
            <ArrowDownRight className="w-3 h-3" />
            <span>-4.06%</span>
          </div>

          <span className="text-sm sm:text-base font-semibold">721,882</span>
        </div>

        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-500 flex-wrap">
          <Stat label="High" value="725,974" />
          <Stat label="Low" value="718,000" />
          <Stat label="24h Volume" value="677.2 BTC" />
        </div>
      </header>

      {/* RANGE BUTTONS */}
      <div className="flex justify-between items-center mb-3 flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1 rounded-full text-xs border transition 
                ${activeRange === range
                  ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-white"
                }`}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] border border-blue-500 text-blue-600 bg-blue-50">
            BUY
          </button>
          <button className="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] border border-slate-200 text-slate-500 hover:bg-slate-50">
            Price Alert
          </button>
        </div>
      </div>

      {/* RESPONSIVE CHART */}
      <div className="relative bg-gradient-to-b from-blue-50/50 via-white to-slate-50 rounded-xl border border-slate-100 overflow-hidden pr-4 sm:pr-6">

        {/* GRID LINES */}
        {priceLabels.map((_, i) => (
          <div
            key={i}
            className="absolute inset-x-0 border-t border-slate-200/40"
            style={{ top: `${(i / steps) * 100}%` }}
          />
        ))}

        {/* PRICE LABELS */}
        <div className="absolute right-1 sm:right-2 top-0 bottom-8 flex flex-col justify-between py-2 text-[9px] sm:text-[10px] text-slate-400">
          {priceLabels.map((p) => (
            <span key={p}>{p.toLocaleString()}</span>
          ))}
        </div>

        {/* RESPONSIVE SVG */}
        <svg
          viewBox={`0 0 ${(96 * 2.4) + 12} 100`}
          className="w-full h-[260px] sm:h-[300px] md:h-[330px]"
          preserveAspectRatio="none"
        >
          {visibleCandles.map((c, i) => {
            const scale = (v) =>
              ((maxPrice - v) / (maxPrice - minPrice)) * 80 + 10;

            const yHigh = scale(c.high);
            const yLow = scale(c.low);
            const yOpen = scale(c.open);
            const yClose = scale(c.close);
            const isBull = c.close > c.open;

            const candleWidth = 1.2;
            const gap = 1.2;
            const x = i * (candleWidth + gap);

            return (
              <g key={i}>
                {/* WICK */}
                <line
                  x1={x + candleWidth / 2}
                  y1={yHigh}
                  x2={x + candleWidth / 2}
                  y2={yLow}
                  stroke={isBull ? "#10d4ff" : "#a855f7"}
                  strokeWidth="0.45"
                  strokeLinecap="round"
                />

                {/* BODY */}
                <rect
                  x={x}
                  y={Math.min(yOpen, yClose)}
                  width={candleWidth}
                  height={Math.abs(yOpen - yClose) || 0.7}
                  fill={isBull ? "#10d4ff" : "#a855f7"}
                  rx="0.4"
                />
              </g>
            );
          })}

          {/* VOLUME BARS */}
          {visibleCandles.map((_, i) => {
            const candleWidth = 1.2;
            const gap = 1.2;
            const x = i * (candleWidth + gap);

            return (
              <rect
                key={i}
                x={x}
                y={95}
                width={candleWidth}
                height={Math.random() * 6}
                fill={i % 2 === 0 ? "#10d4ff22" : "#a855f722"}
              />
            );
          })}
        </svg>

        {/* TIMELINE */}
        <div className="absolute bottom-0 inset-x-0 h-8 flex items-center justify-between px-3 sm:px-4 border-t border-slate-200/40 bg-white/60 backdrop-blur text-[9px] sm:text-[10px] text-slate-500">
          <span>00:00</span>
          <span>02:00</span>
          <span>04:00</span>
          <span>06:00</span>
          <span>08:00</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[9px] sm:text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700">
        {value}
      </span>
    </div>
  );
}

