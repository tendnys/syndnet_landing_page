export function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-1 mb-10">
          Ready to see what is hiding in your market.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/join-syndnet"
            className="px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Join Syndnet Marketplace
          </a>
          <a
            href="/join-scoutgpt-beta"
            className="px-6 py-3 text-base font-medium text-primary bg-white border-2 border-primary hover:bg-slate-50 rounded-lg transition-colors"
          >
            Join ScoutGPT Beta Waitlist
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-2">
          Or{' '}
          <a href="/demo" className="text-primary hover:underline">
            book a live demo
          </a>
        </p>
      </div>
    </section>
  );
}
