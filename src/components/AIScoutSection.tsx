import { VideoPlaceholder } from './VideoPlaceholder';

export function AIScoutSection() {
  const queries = [
    'Find 50 acre parcels with absentee owners inside this polygon',
    'Show undeveloped land with by right zoning',
    'List multifamily with loans maturing in next 24 months',
  ];

  return (
    <section id="scoutgpt" className="py-20 px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-1 mb-16 max-w-3xl">
          AI that understands land, zoning, and deals.
        </h2>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-1 mb-6">
              Ask anything
            </h3>
            <div className="space-y-4">
              {queries.map((query, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-slate-900/10 text-gray-2"
                >
                  <p className="text-sm leading-relaxed">{query}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-1 mb-6">
              Interactive GIS platform
            </h3>
            <p className="text-base text-gray-2 leading-relaxed mb-8">
              Explore a live geospatial map where every parcel is clickable. See zoning, floodplain, utilities, ownership, and valuation instantly.
            </p>
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
