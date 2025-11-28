import { UseCaseBand } from './UseCaseBand';
import { UseCaseScreenshotCard } from './UseCaseScreenshotCard';

const useCases = [
  {
    headline: 'Comprehensive Parcel Intelligence',
    description: [
      'Gain instant clarity across ownership, debt maturity, land use, and development potential.',
      'Surface hidden off market opportunities faster than traditional tools.',
    ] as [string, string],
    variant: 1 as const,
    ctaLabel: 'Explore Parcel Intelligence',
  },
  {
    headline: 'Automated Deal Pipeline',
    description: [
      'Every submitted property becomes a structured opportunity with built in workflows.',
      'Track, prioritize, and move deals through an automated CRM pipeline without manual entry.',
    ] as [string, string],
    variant: 2 as const,
    ctaLabel: 'View Deal Pipeline',
  },
  {
    headline: 'Zoning Intelligence',
    description: [
      'Understand allowable uses, density, constraints, and entitlement paths in seconds.',
      'Interpret zoning overlays, height limits, setbacks, and environmental rules in one view.',
    ] as [string, string],
    variant: 3 as const,
    ctaLabel: 'Explore Zoning Intelligence',
  },
  {
    headline: 'Suitability Analysis',
    description: [
      'Find the best locations for development, acquisitions, or asset repositioning.',
      'Evaluate parcels based on infrastructure, demographics, utilities, and environmental fit.',
    ] as [string, string],
    variant: 4 as const,
    ctaLabel: 'Run Suitability Analysis',
  },
  {
    headline: 'Portfolio Risk Mapping',
    description: [
      'Reveal exposure to wildfire, flood, environmental constraints, and regulatory buffers.',
      'Map concentrations of risk instantly across any portfolio or target region.',
    ] as [string, string],
    variant: 5 as const,
    ctaLabel: 'Map Portfolio Risk',
  },
  {
    headline: 'Recommendation Engine',
    description: [
      'Identify patterns, hotspots, and opportunity zones from parcel level data.',
      'Highlight areas primed for development, redevelopment, or strategic investment.',
    ] as [string, string],
    variant: 6 as const,
    ctaLabel: 'Discover Opportunities',
  },
];

export function UseCases() {
  return (
    <section id="use-cases">
      {/* Header Section */}
      <div className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Uncovers Opportunities Behind Every Parcel
            </h2>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              How teams use ScoutGPT for parcel intelligence, deal flow, and spatial decision making.
            </p>
          </div>
        </div>
      </div>

      {/* Stacked Hero Bands - Desktop & Tablet */}
      <div className="hidden lg:block pb-32">
        {useCases.map((useCase, index) => (
          <UseCaseBand
            key={index}
            headline={useCase.headline}
            description={useCase.description}
            variant={useCase.variant}
            index={index}
            ctaLabel={useCase.ctaLabel}
          />
        ))}
      </div>

      {/* Mobile: Simple Stacked Layout */}
      <div className="lg:hidden pb-24 space-y-20">
        {useCases.map((useCase, index) => (
          <div key={index} className="px-6">
            {/* Screenshot on top - full width and large */}
            <div className="mb-8">
              <div className="h-[320px] sm:h-[400px] w-full max-w-2xl mx-auto">
                <UseCaseScreenshotCard variant={useCase.variant} />
              </div>
            </div>

            {/* Text below - center aligned with CTA */}
            <div className="text-center space-y-4 max-w-lg mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {useCase.headline}
              </h3>
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {useCase.description[0]}
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {useCase.description[1]}
                </p>
              </div>
              {/* CTA Button - center aligned */}
              <div className="pt-2">
                <button className="px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-lg hover:bg-[#3489FF] transition-all duration-200 shadow-lg hover:shadow-xl">
                  {useCase.ctaLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
