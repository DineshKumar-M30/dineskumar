import { useEffect } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const coins = [
  {
    name: "BTC",
    label: "Bitcoin",
    value: "¥ 721,882",
    change: "-4.66%",
    trend: "down",
    color: "#fbbf24",
    points: [
      [0.0, 0.70], [0.10, 0.55], [0.22, 0.62], [0.34, 0.52],
      [0.48, 0.60], [0.64, 0.40], [0.80, 0.66], [0.92, 0.55], [1.0, 0.60],
    ],
  },
  {
    name: "ETH",
    label: "Ethereum",
    value: "¥ 22,370",
    change: "+0.45%",
    trend: "up",
    color: "#6366f1",
    points: [
      [0.0, 0.65], [0.10, 0.55], [0.22, 0.60], [0.34, 0.48],
      [0.46, 0.56], [0.60, 0.50], [0.74, 0.60], [0.86, 0.72], [1.0, 0.52],
    ],
  },
  {
    name: "XEM",
    label: "NEM",
    value: "¥ 10,604",
    change: "-1.07%",
    trend: "down",
    color: "#14b8a6",
    points: [
      [0.0, 0.40], [0.12, 0.38], [0.26, 0.42], [0.40, 0.38],
      [0.54, 0.42], [0.68, 0.46], [0.78, 0.55], [0.88, 0.72], [1.0, 0.70],
    ],
  },
  {
    name: "XRP",
    label: "Ripple",
    value: "¥ 50,839",
    change: "+0.66%",
    trend: "up",
    color: "#0ea5e9",
    points: [
      [0.0, 0.70], [0.12, 0.60], [0.24, 0.55], [0.38, 0.45],
      [0.52, 0.56], [0.66, 0.50], [0.80, 0.60], [0.92, 0.58], [1.0, 0.62],
    ],
  },
];

const mapPoints = (points, width, height, topPad = 8, bottomPad = 8) => {
  const innerH = height - topPad - bottomPad;
  return points.map(([nx, ny]) => ({
    x: nx * width,
    y: topPad + ny * innerH,
  }));
};

const buildPaths = (normPoints, width = 260, height = 80) => {
  const pts = mapPoints(normPoints, width, height);
  if (pts.length < 2) return { linePath: "", areaPath: "" };

  let d = `M ${pts[0].x} ${pts[0].y}`;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i === 0 ? pts[0] : pts[i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || pts[pts.length - 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  const first = pts[0];
  const last = pts[pts.length - 1];

  return {
    linePath: d,
    areaPath: `${d} L ${last.x} ${height} L ${first.x} ${height} Z`,
  };
};

export default function StatCards() {
  useEffect(() => {
    document.querySelectorAll(".draw-line").forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      requestAnimationFrame(() => {
        path.style.transition = "stroke-dashoffset 1.4s ease-out";
        path.style.strokeDashoffset = "0";
      });
    });
  }, []);

  return (
    <section
      className="
      grid gap-4

      /* Mobile 1 card */
      grid-cols-1

      /* Tablets 2 cards */
      sm:grid-cols-2

      /* Medium screens 3 cards */
      lg:grid-cols-3

      /* Large desktop 4 cards */
      xl:grid-cols-4
    "
    >
      {coins.map((coin) => {
        const { linePath, areaPath } = buildPaths(coin.points);

        return (
          <article
            key={coin.name}
            className="
              relative overflow-hidden rounded-[22px]
              border border-[#e4ebff]
              bg-white px-4 py-5
              shadow-[0_18px_40px_rgba(15,23,42,0.05)]
              transition-all
              hover:-translate-y-[3px]

              /* Responsive padding */
              sm:px-5 sm:py-6
              lg:px-6 lg:py-6
            "
          >
            <header className="relative z-10 mb-3 sm:mb-4 flex items-start justify-between">
              <div>
                <p className="text-[16px] sm:text-[17px] font-semibold tracking-tight text-slate-900">
                  {coin.name}
                </p>
                <p className="text-[12px] sm:text-[13px] text-slate-400">
                  {coin.label}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[17px] sm:text-[19px] font-semibold tracking-tight text-slate-900">
                  {coin.value}
                </p>
                <p
                  className={`mt-1 inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-medium ${
                    coin.trend === "up" ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {coin.trend === "up" ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {coin.change}
                </p>
              </div>
            </header>

            {/* GRAPH */}
            <div className="relative z-10 h-[66px] sm:h-[72px] -mb-1">
              <svg
                viewBox="0 0 260 80"
                className="h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`fill-${coin.name}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={coin.color} stopOpacity="0.35" />
                    <stop offset="55%" stopColor={coin.color} stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id={`stroke-${coin.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={coin.color} stopOpacity="0.8" />
                    <stop offset="55%" stopColor={coin.color} stopOpacity="1" />
                    <stop offset="100%" stopColor={coin.color} stopOpacity="0.85" />
                  </linearGradient>

                  <linearGradient id={`glow-${coin.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={coin.color} stopOpacity="0" />
                    <stop offset="45%" stopColor={coin.color} stopOpacity="0.45" />
                    <stop offset="100%" stopColor={coin.color} stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* FILL AREA */}
                <path d={areaPath} fill={`url(#fill-${coin.name})`} />

                {/* GLOW */}
                <path
                  d={linePath}
                  fill="none"
                  stroke={`url(#glow-${coin.name})`}
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* MAIN LINE */}
                <path
                  d={linePath}
                  fill="none"
                  stroke={`url(#stroke-${coin.name})`}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  className="draw-line"
                />
              </svg>
            </div>
          </article>
        );
      })}
    </section>
  );
}
