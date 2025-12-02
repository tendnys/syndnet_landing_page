import { UseCaseBand } from './UseCaseBand';
import { UseCaseScreenshotCard } from './UseCaseScreenshotCard';

const useCases = [
  {
    headline: 'Comprehensive parcel insight',
    description: [
      'Ownership, land use, zoning overlays, and site context.',
      'Organized visually so you can understand any property at a glance.',
    ] as [string, string],
    variant: 1 as const,
    ctaLabel: 'Explore Parcel Intelligence',
  },
  {
    headline: 'Deal pipeline',
    description: [
      'Every property saved becomes a trackable opportunity.',
      'Notes, stages, and context stay synced across your workflow.',
    ] as [string, string],
    variant: 2 as const,
    ctaLabel: 'View Deal Pipeline',
  },
  {
    headline: 'Zoning clarity',
    description: [
      'Color-coded overlays show allowed uses and constraints.',
      'A simple, visual way to navigate regulatory complexity.',
    ] as [string, string],
    variant: 3 as const,
    ctaLabel: 'Explore Zoning Intelligence',
  },
  {
    headline: 'Site suitability. Coming soon.',
    description: [
      'Evaluate parcels by infrastructure, surrounding conditions, and environmental factors.',
      'Automated feasibility reports arrive with ScoutGPT.',
    ] as [string, string],
    variant: 4 as const,
    ctaLabel: 'Run Suitability Analysis',
  },
  {
    headline: 'Portfolio view. Coming in Phase 3.',
    description: [
      'Visualize exposure across markets.',
      'Flood zones, fire risk, or regulatory overlays mapped across your portfolio.',
    ] as [string, string],
    variant: 5 as const,
    ctaLabel: 'Map Portfolio Risk',
  },
  {
    headline: 'Recommendation engine. Coming in Phase 2.',
    description: [
      'Set your criteria once.',
      'Syndnet surfaces opportunities that match, powered by ScoutGPT intelligence.',
    ] as [string, string],
    variant: 6 as const,
    ctaLabel: 'Discover Opportunities',
  },
];

export function UseCases() {
  return (
    <section id="use-cases">
      {/* Stacked Hero Bands - Desktop & Tablet */}
      <div className="hidden lg:block pt-32 pb-32">
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
      <div className="lg:hidden pt-24 pb-24 space-y-20">
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
