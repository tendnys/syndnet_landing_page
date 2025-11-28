import { useState } from 'react';
import { TrendingUp, X } from 'lucide-react';

interface TickerItem {
  id: number;
  text: string;
}

const marketTickerItems: TickerItem[] = [
  { id: 1, text: '30 Yr Fixed: 6.85%' },
  { id: 2, text: '5 Yr Treasury: 4.12%' },
  { id: 3, text: 'Sunbelt multifamily cap rates compress 15 bps QoQ' },
  { id: 4, text: 'Industrial vacancy: 4.2% nationwide' },
  { id: 5, text: 'Office sublease availability hits new high in major CBDs' },
  { id: 6, text: 'Single family rental starts up 9% YoY' },
  { id: 7, text: 'CMBS delinquency rate: 4.9%' },
  { id: 8, text: 'CRE Debt Spreads +12 bps WoW' },
  { id: 9, text: 'Sunbelt Industrial Vacancy 4.2%' },
  { id: 10, text: 'Cap rates stabilize across major metros' },
];

export function MarketTicker() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  if (isDismissed) {
    return null;
  }

  // Duplicate items for seamless looping
  const duplicatedItems = [...marketTickerItems, ...marketTickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700/50 h-9">
      <div className="relative h-full overflow-hidden">
        <div className="flex items-center h-full">
          {/* Label */}
          <div className="hidden md:flex items-center gap-1.5 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 h-full border-r border-gray-700/50 flex-shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300 uppercase tracking-wide">
              Market Feed
            </span>
          </div>

          {/* Scrolling ticker content */}
          <div
            className="flex-1 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex items-center h-full gap-8 ${
                isPaused ? '[animation-play-state:paused]' : ''
              }`}
              style={{
                animation: 'scroll 90s linear infinite',
                width: 'max-content',
              }}
            >
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-xs md:text-sm text-gray-300 font-medium">
                    {item.text}
                  </span>
                  {index < duplicatedItems.length - 1 && (
                    <span className="text-blue-400/50">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="md:hidden flex-shrink-0 px-3 h-full hover:bg-gray-800/50 transition-colors group"
            aria-label="Dismiss ticker"
          >
            <X className="w-4 h-4 text-gray-400 group-hover:text-gray-200" />
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
