import { UseCaseTile } from './UseCaseTile';

const useCases = [
  {
    headline: 'Comprehensive Parcel Intelligence',
    description: [
      'Gain instant clarity across ownership, debt maturity, land use, and development potential.',
      'Surface hidden off market opportunities faster than traditional tools.',
    ] as [string, string],
    variant: 1 as const,
  },
  {
    headline: 'Automated Deal Pipeline',
    description: [
      'Every submitted property becomes a structured opportunity with built in workflows.',
      'Track, prioritize, and move deals through an automated CRM pipeline without manual entry.',
    ] as [string, string],
    variant: 2 as const,
  },
  {
    headline: 'Zoning Intelligence',
    description: [
      'Understand allowable uses, density, constraints, and entitlement paths in seconds.',
      'Interpret zoning overlays, height limits, setbacks, and environmental rules in one view.',
    ] as [string, string],
    variant: 3 as const,
  },
  {
    headline: 'Suitability Analysis',
    description: [
      'Find the best locations for development, acquisitions, or asset repositioning.',
      'Evaluate parcels based on infrastructure, demographics, utilities, and environmental fit.',
    ] as [string, string],
    variant: 4 as const,
  },
  {
    headline: 'Portfolio Risk Mapping',
    description: [
      'Reveal exposure to wildfire, flood, environmental constraints, and regulatory buffers.',
      'Map concentrations of risk instantly across any portfolio or target region.',
    ] as [string, string],
    variant: 5 as const,
  },
  {
    headline: 'Recommendation Engine',
    description: [
      'Identify patterns, hotspots, and opportunity zones from parcel level data.',
      'Highlight areas primed for development, redevelopment, or strategic investment.',
    ] as [string, string],
    variant: 6 as const,
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 sm:py-32 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Use Cases
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            How teams use ScoutGPT for parcel intelligence, deal flow, and spatial decision making.
          </p>
        </div>
      </div>

      <div className="space-y-24 sm:space-y-32">
        {useCases.map((useCase, index) => (
          <UseCaseTile
            key={index}
            headline={useCase.headline}
            description={useCase.description}
            variant={useCase.variant}
          />
        ))}
      </div>
    </section>
  );
}
