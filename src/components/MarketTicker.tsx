import React, { useState, useEffect } from 'react';
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
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Quick fade: transparent after scrolling just 100px
      const fadeDistance = 100;
      const opacity = Math.max(0, 1 - (scrollPosition / fadeDistance));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) {
    return null;
  }

  // Duplicate items to create seamless loop
  const items = [...marketTickerItems, ...marketTickerItems];

  return (
    <div
      className="w-full overflow-hidden backdrop-blur-lg border-b border-white/10 transition-all duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${0.6 * scrollOpacity})`
      }}
    >
      <div className="h-9 flex items-center">
        {/* Label */}
        <div className="hidden sm:flex items-center gap-2 px-4 lg:px-6 bg-transparent h-full flex-shrink-0 z-10">
          <TrendingUp className="w-3.5 h-3.5 text-[#1877F2]" />
          <span className="text-[11px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
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
            className={`flex items-center whitespace-nowrap ${isPaused ? 'ticker-paused' : 'ticker-scroll'}`}
            style={{
              animationDuration: '60s',
            }}
          >
            {items.map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                {index > 0 && (
                  <span className="inline-block h-3 w-2 bg-slate-100/90 mx-4 lg:mx-6" />
                )}
                <span className="text-[11px] tracking-[0.2em] uppercase text-slate-100/80">
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Dismiss Button (mobile) */}
        <button
          onClick={() => setIsDismissed(true)}
          className="sm:hidden flex items-center justify-center w-9 h-9 text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
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
