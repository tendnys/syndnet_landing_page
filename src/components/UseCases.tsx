import { UseCaseBand } from './UseCaseBand';
import { useScrollProgress } from '../hooks/useScrollProgress';

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
  const { activeIndex, containerRef } = useScrollProgress({ totalSteps: useCases.length });

  return (
    <section id="use-cases" className="bg-[#0A0F1E]">
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

      {/* Desktop: Pinned Storytelling Section */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className="relative"
          style={{
            height: `${useCases.length * 100}vh`,
          }}
        >
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            {useCases.map((useCase, index) => (
              <UseCaseBand
                key={index}
                headline={useCase.headline}
                description={useCase.description}
                variant={useCase.variant}
                isActive={activeIndex === index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Simple Stacked Layout */}
      <div className="lg:hidden pb-24 space-y-24">
        {useCases.map((useCase, index) => (
          <div key={index} className="px-6">
            {/* Screenshot on top - larger for mobile */}
            <div className="mb-10">
              <div className="aspect-[16/11] w-full max-w-lg mx-auto">
                <div className="relative w-full h-full">
                  <div
                    className="relative w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 overflow-hidden"
                    style={{
                      transform: 'perspective(1200px) rotateY(-2deg) rotateX(2deg)',
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 40px -10px rgba(24, 119, 242, 0.08)',
                    }}
                  >
                    <div className="absolute inset-5 bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-lg border border-gray-700/40 overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-8"
                        style={{
                          backgroundImage: 'linear-gradient(#1877F2 1px, transparent 1px), linear-gradient(90deg, #1877F2 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-gray-900/50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/5 via-transparent to-purple-500/5" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#1877F2]/8 via-transparent to-purple-500/8 rounded-xl blur-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text below */}
            <div className="text-center space-y-5">
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {useCase.headline}
              </h3>
              <div className="space-y-3">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {useCase.description[0]}
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {useCase.description[1]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
