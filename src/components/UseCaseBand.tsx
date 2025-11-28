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
  // Determine layout: indices 0, 2, 4 = text left, image right; indices 1, 3, 5 = image left, text right
  const isTextLeft = index % 2 === 0;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#0A0F1E]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : (isTextLeft ? -40 : 40),
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
          {/* Text Column */}
          <div className={`${!isTextLeft ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {headline}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                {description[0]}
              </p>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                {description[1]}
              </p>
            </motion.div>
          </div>

          {/* Screenshot Column - Much larger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 0.95,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className={`${!isTextLeft ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="aspect-[16/11] w-full">
              <UseCaseScreenshotCard variant={variant} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
