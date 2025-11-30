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
    <div className="py-24 lg:py-40">
      {/* Centered ~90vw container with max width */}
      <div className="w-[90vw] max-w-7xl mx-auto">
        {/* Flex layout: ~63% screenshot, ~37% text */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Column - ~37% width */}
          <div
            className={`${isScreenshotLeft ? 'lg:order-2' : 'lg:order-1'} flex-shrink-0 lg:basis-[37%]`}
            style={{ maxWidth: isScreenshotLeft ? undefined : '37%' }}
          >
            <div className="space-y-5">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
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
              <div className="pt-2">
                <button className="px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-lg hover:bg-[#3489FF] transition-all duration-200 shadow-lg hover:shadow-xl">
                  {ctaLabel}
                </button>
              </div>
            </div>
          </div>

          {/* Screenshot Column - ~63% width, Large and dominant */}
          <div
            className={`${isScreenshotLeft ? 'lg:order-1' : 'lg:order-2'} flex-shrink-0 lg:basis-[63%] w-full`}
          >
            <div className="h-[400px] sm:h-[480px] lg:h-[520px] w-full">
              <UseCaseScreenshotCard variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
