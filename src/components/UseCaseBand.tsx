import { UseCaseScreenshotCard } from './UseCaseScreenshotCard';

interface UseCaseBandProps {
  headline: string;
  description: [string, string];
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  index: number;
  ctaLabel: string;
}

export function UseCaseBand({ headline, description, variant, index, ctaLabel }: UseCaseBandProps) {
  // Determine layout: indices 0, 2, 4 = screenshot left, text right; indices 1, 3, 5 = screenshot right, text left
  const isScreenshotLeft = index % 2 === 0;

  return (
    <div className="py-20 lg:py-32 bg-[#0A0F1E]">
      {/* Centered 80vw container */}
      <div className="w-[80vw] mx-auto">
        {/* Custom grid: ~65-70% for screenshot, ~30-35% for text */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Text Column - ~33% width */}
          <div className={`${isScreenshotLeft ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {headline}
            </h3>
            <div className="space-y-3">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                {description[0]}
              </p>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                {description[1]}
              </p>
            </div>
            {/* CTA Button */}
            <button className="mt-6 px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-lg hover:bg-[#3489FF] transition-all duration-200 shadow-lg hover:shadow-xl">
              {ctaLabel}
            </button>
          </div>

          {/* Screenshot Column - ~67% width, Large and dominant */}
          <div className={`${isScreenshotLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="aspect-[16/11] w-full">
              <UseCaseScreenshotCard variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
