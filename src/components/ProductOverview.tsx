export function ProductOverview() {
  const features = [
    {
      title: 'Off market marketplace',
      description: 'Access exclusive off market deals and connect directly with buyers and sellers in your market.',
    },
    {
      title: 'AI powered analysis',
      description: 'Get instant insights on properties, zoning, ownership, and market trends through natural conversation.',
    },
    {
      title: 'End to end deal flow',
      description: 'From discovery to closing, manage your entire pipeline in one integrated platform.',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-1 text-center mb-16 max-w-4xl mx-auto">
          One platform for modern commercial real estate teams.
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="fade-in">
              <h3 className="text-xl font-semibold text-gray-1 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
