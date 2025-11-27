import { VideoPlaceholder } from './VideoPlaceholder';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-1 leading-tight mb-6">
              The future of real estate is conversational.
            </h1>
            <p className="text-lg text-gray-2 leading-relaxed mb-10 max-w-2xl">
              Automating property analysis with nationwide property data, advanced GIS mapping, and AI powered analytics.
              <br />
              <br />
              So you can find, evaluate, and act faster than ever before. Everything begins with a question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="/join-syndnet"
                className="px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors text-center"
              >
                Join Syndnet Marketplace
              </a>
              <a
                href="/join-scoutgpt-beta"
                className="px-6 py-3 text-base font-medium text-primary bg-white border-2 border-primary hover:bg-slate-50 rounded-lg transition-colors text-center"
              >
                Join ScoutGPT Beta Waitlist
              </a>
            </div>
            <a
              href="/demo"
              className="text-sm text-gray-2 hover:text-primary transition-colors underline"
            >
              Book a demo
            </a>
            <p className="text-xs text-gray-3 mt-8">
              Coverage varies by market. ScoutGPT beta launches in Texas first.
            </p>
          </div>
          <div className="fade-in">
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
