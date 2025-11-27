export function CapabilitiesGrid() {
  const capabilities = [
    {
      title: 'Off market discovery',
      description: 'Access deals before they hit the market.',
    },
    {
      title: 'Integrated CRM',
      description: 'Track relationships and opportunities in one place.',
    },
    {
      title: 'Deep parcel intelligence',
      description: 'Ownership, zoning, utilities, and valuation data.',
    },
    {
      title: 'AI powered ranking',
      description: 'Automatically prioritize properties by your criteria.',
    },
    {
      title: 'Skip tracing',
      description: 'Find contact information for hard to reach owners.',
    },
    {
      title: 'Interactive GIS',
      description: 'Explore properties on a live geospatial map.',
    },
    {
      title: 'Deal rooms',
      description: 'Collaborate with partners on opportunities.',
    },
    {
      title: 'Automated summaries and packets',
      description: 'Generate investment memos instantly.',
    },
    {
      title: 'Transparent pricing',
      description: 'Simple, predictable pricing with no hidden fees.',
    },
  ];

  return (
    <section id="capabilities" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-1 mb-16 text-center">
          Everything you need in one platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-slate-900/10 rounded-xl hover:border-accent/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-1 mb-2">
                {capability.title}
              </h3>
              <p className="text-sm text-gray-2 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
