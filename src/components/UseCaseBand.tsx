import { motion } from 'framer-motion';
import { UseCaseScreenshotCard } from './UseCaseScreenshotCard';

interface UseCaseBandProps {
  headline: string;
  description: [string, string];
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  isActive: boolean;
  index: number;
}

export function UseCaseBand({ headline, description, variant, isActive, index }: UseCaseBandProps) {
  // Determine layout: odd indices (1, 3, 5) = text left, even indices (2, 4, 6) = image left
  // Since index is 0-based, we need to check: 0, 2, 4 = text left; 1, 3, 5 = image left
  const isTextLeft = index % 2 === 0;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : (isTextLeft ? -20 : 20),
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isTextLeft ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Column */}
          <div className={`${!isTextLeft ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {headline}
            </h3>
            <div className="space-y-3">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {description[0]}
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {description[1]}
              </p>
            </div>
          </div>

          {/* Screenshot Column */}
          <div className={`${!isTextLeft ? 'lg:order-1' : 'lg:order-2'} lg:block hidden`}>
            <div className="aspect-[4/3] w-full">
              <UseCaseScreenshotCard variant={variant} />
            </div>
          </div>

          {/* Mobile: Screenshot on top */}
          <div className="lg:hidden">
            <div className="aspect-[4/3] w-full mb-8">
              <UseCaseScreenshotCard variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
