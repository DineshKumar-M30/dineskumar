const activities = [
  {
    date: "2018/10/02 10:57:46",
    detail: "Deposit Japanese Yen",
    price: "+10,000 JPY",
    type: "plus",
  },
  {
    date: "2018/10/10 17:57:46",
    detail: "Bought Bitcoin",
    price: "+ 0.0001847 BTC",
    type: "plus",
  },
  {
    date: "2018/10/10 17:57:46",
    detail: "Service fee",
    price: "- 500 JPY",
    type: "minus",
  },
];

const tabs = ["ALL", "BTC", "ETH", "XRP", "XEM", "LTC", "ETC", "JPY"];

export default function ActivitiesTable() {
  return (
    <section className="bg-white rounded-2xl shadow-soft border border-slate-100 p-4 sm:p-5 flex flex-col">
      
      {/* HEADER */}
      <header className="flex items-center justify-between mb-3">
        <h2 className="text-sm sm:text-base font-semibold text-slate-800">
          Latest Activities
        </h2>
      </header>

      {/* TABS */}
      <div className="flex flex-wrap gap-1 mb-3 text-[10px] sm:text-[11px]">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-2.5 py-1 rounded-full border transition ${
              index === 0
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MOBILE CARD VIEW (visible only on mobile) */}
      <div className="space-y-3 sm:hidden">
        {activities.map((row, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl border border-slate-100 bg-slate-50/50"
          >
            <div className="flex justify-between text-[11px] text-slate-500 mb-1">
              <span>{row.date}</span>
              <span
                className={`font-semibold ${
                  row.type === "plus" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {row.price}
              </span>
            </div>

            <p className="text-xs font-medium text-slate-700">{row.detail}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE VIEW (hidden on mobile) */}
      <div className="hidden sm:block overflow-x-auto scrollbar-thin -mx-2 sm:mx-0">
        <table className="min-w-full text-[11px] text-left">
          <thead>
            <tr className="text-slate-400 border-b border-slate-100">
              <th className="py-2 px-2 font-medium">Date</th>
              <th className="py-2 px-2 font-medium">Detail</th>
              <th className="py-2 px-2 font-medium text-right">Price</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-50 hover:bg-slate-50/60"
              >
                <td className="py-2.5 px-2 text-slate-500">{row.date}</td>

                <td className="py-2.5 px-2 text-slate-700">{row.detail}</td>

                <td
                  className={`py-2.5 px-2 text-right font-semibold ${
                    row.type === "plus"
                      ? "text-emerald-500"
                      : "text-rose-500"
                  }`}
                >
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}
