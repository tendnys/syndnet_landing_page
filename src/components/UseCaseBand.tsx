import { UseCaseScreenshotCard } from './UseCaseScreenshotCard';

interface UseCaseBandProps {
  headline: string;
  description: [string, string];
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  index: number;
}

export function UseCaseBand({ headline, description, variant, index }: UseCaseBandProps) {
  // Determine layout: indices 0, 2, 4 = screenshot left, text right; indices 1, 3, 5 = screenshot right, text left
  const isScreenshotLeft = index % 2 === 0;

  return (
    <div className="py-20 lg:py-32 bg-[#0A0F1E]">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <div className={`${isScreenshotLeft ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {headline}
            </h3>
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                {description[0]}
              </p>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                {description[1]}
              </p>
            </div>
          </div>

          {/* Screenshot Column - Large and dominant */}
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
