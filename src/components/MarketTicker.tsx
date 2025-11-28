import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

// Placeholder market data items - can be replaced with API data later
const marketTickerItems = [
  '30 Yr Fixed: 6.85%',
  '5 Yr Treasury: 4.12%',
  'Sunbelt multifamily cap rates compress 15 bps QoQ',
  'Industrial vacancy: 4.2% nationwide',
  'Office sublease availability hits new high in major CBDs',
  'Single family rental starts up 9% YoY',
  'CMBS delinquency rate: 4.9%',
  'CRE Debt Spreads +12 bps WoW',
  'Class A office absorption turns positive in Sun Belt markets',
  'Multifamily rent growth moderates to 2.1% YoY',
  'Warehouse demand remains strong despite economic headwinds',
];

export function MarketTicker() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  if (isDismissed) {
    return null;
  }

  // Duplicate items to create seamless loop
  const items = [...marketTickerItems, ...marketTickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D1321] border-b border-gray-800/50 overflow-hidden">
      <div className="h-9 sm:h-10 flex items-center">
        {/* Label */}
        <div className="hidden sm:flex items-center gap-2 px-4 lg:px-6 bg-[#0A0F1E] border-r border-gray-800/50 h-full flex-shrink-0 z-10">
          <TrendingUp className="w-3.5 h-3.5 text-[#1877F2]" />
          <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
            Market Feed
          </span>
        </div>

        {/* Scrolling Content */}
        <div
          className="flex-1 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex whitespace-nowrap ${isPaused ? 'ticker-paused' : 'ticker-scroll'}`}
            style={{
              animationDuration: '120s', // Adjust speed here: higher = slower
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 lg:px-6 text-xs sm:text-sm text-gray-300"
              >
                <span>{item}</span>
                <span className="mx-4 lg:mx-6 text-gray-700">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dismiss Button (mobile) */}
        <button
          onClick={() => setIsDismissed(true)}
          className="sm:hidden flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
          aria-label="Dismiss ticker"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-scroll {
          animation: ticker linear infinite;
        }

        .ticker-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
