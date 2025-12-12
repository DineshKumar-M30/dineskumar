export default function NewsFeed() {
  return (
    <section className="bg-white rounded-2xl shadow-soft border border-slate-100 
      p-4 sm:p-5 flex flex-col
      min-h-[340px] sm:min-h-[380px] lg:min-h-[420px]
    ">
      
      {/* HEADER */}
      <header className="flex items-center justify-between mb-3">
        <h2 className="text-sm sm:text-base font-semibold text-slate-800">
          Crypto Newsfeed
        </h2>

        <button 
          className="
            text-[10px] sm:text-[11px]
            px-3 py-1.5 rounded-full 
            border border-blue-500 text-blue-600 bg-blue-50 
            hover:bg-blue-100 transition
          "
        >
          Subscribe
        </button>
      </header>

      {/* LIST */}
      <div 
        className="
          space-y-4 text-xs overflow-y-auto 
          scrollbar-thin pr-1

          /* Smooth scrolling */
          overscroll-contain
        "
      >
        <NewsItem
          label="Today"
          time="11:36"
          title="Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users"
          summary="Cryptocurrency mining malware is not the only threat— cybercriminals have resorted to sophisticated phishing, ransom attacks, and exchange account takeovers."
        />

        <NewsItem
          label="Yesterday"
          time="09:14"
          title="Ripple News Today: Ripple is planning to upgrade the technology stack"
          summary="The update aims to support faster institutional payments and new on-chain products, potentially boosting long-term liquidity."
        />

        <NewsItem
          label="This Week"
          time="Tue 18:20"
          title="Bitcoin price dips after sharp rally"
          summary="Analysts suggest the correction may be temporary as long-term holders keep accumulating despite short-term volatility."
        />
      </div>

      {/* RESPONSIVE BANNER CARD */}
      <div
        className="
          mt-4 rounded-2xl border border-indigo-100 
          bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-500
          text-white p-4 sm:p-5 relative overflow-hidden
        "
      >
        <div className="absolute -right-6 -bottom-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10" />

        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-indigo-100 mb-1">
          Security
        </p>

        <p className="text-sm sm:text-base font-semibold mb-1">Account Protection</p>

        <p className="text-[10px] sm:text-[11px] text-indigo-100 max-w-xs leading-snug">
          Enable two-factor authentication and withdrawal limits to secure your assets against unauthorized access.
        </p>
      </div>
    </section>
  );
}


function NewsItem({ label, time, title, summary }) {
  return (
    <article className="border-b border-slate-100 pb-3 last:border-none last:pb-0">

      {/* LABEL + TIME */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-400">
          <span className="font-semibold text-slate-500">{label}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-[11px] sm:text-xs font-semibold text-slate-800 mb-1 leading-snug">
        {title}
      </h3>

      {/* SUMMARY */}
      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">
        {summary}
      </p>
    </article>
  );
}

