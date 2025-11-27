export function MarketplaceSection() {
  const features = [
    'Post off market deals',
    'Find buyers',
    'Build pipeline',
    'Integrated CRM',
    'Private or group listings',
    'Save and track opportunities',
  ];

  return (
    <section id="marketplace" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-1 mb-8">
              An off market marketplace built for real operators.
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base text-gray-2">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/join-syndnet"
                className="px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors text-center"
              >
                Join the marketplace
              </a>
              <a
                href="/demo"
                className="px-6 py-3 text-base font-medium text-primary bg-white border-2 border-primary hover:bg-slate-50 rounded-lg transition-colors text-center"
              >
                Book a demo
              </a>
            </div>
          </div>
          <div className="bg-slate-900/5 rounded-2xl h-96 flex items-center justify-center border border-slate-900/10">
            <span className="text-sm text-slate-500">Marketplace interface preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}
