import { MapPlaceholder } from './MapPlaceholder';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface UseCaseTileProps {
  headline: string;
  description: [string, string];
  variant: 1 | 2 | 3 | 4 | 5 | 6;
}

export function UseCaseTile({ headline, description, variant }: UseCaseTileProps) {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-full max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {headline}
          </h3>
          <div className="space-y-1">
            <p className="text-gray-400 text-base sm:text-lg">
              {description[0]}
            </p>
            <p className="text-gray-400 text-base sm:text-lg">
              {description[1]}
            </p>
          </div>
        </div>
        <MapPlaceholder variant={variant} />
      </div>
    </div>
  );
}
