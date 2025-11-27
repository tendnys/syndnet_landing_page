export function WorkflowSection() {
  const steps = [
    {
      number: '01',
      title: 'Ask',
      description: 'Start with a question. Our AI understands property criteria, zoning requirements, and market conditions.',
    },
    {
      number: '02',
      title: 'Explore',
      description: 'Review results on an interactive map. Click any parcel for deep property intelligence and ownership data.',
    },
    {
      number: '03',
      title: 'Act',
      description: 'Save leads, reach out to owners, and track opportunities through your entire pipeline.',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-1 mb-16 text-center max-w-3xl mx-auto">
          From question to opportunity in one flow.
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-accent/30 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-gray-1 mb-4">
                {step.title}
              </h3>
              <p className="text-base text-gray-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
