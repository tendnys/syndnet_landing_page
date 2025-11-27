export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-900/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-semibold text-primary">
              Syndnet
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#marketplace" className="text-sm text-gray-2 hover:text-primary transition-colors">
                Marketplace
              </a>
              <a href="#scoutgpt" className="text-sm text-gray-2 hover:text-primary transition-colors">
                ScoutGPT
              </a>
              <a href="#capabilities" className="text-sm text-gray-2 hover:text-primary transition-colors">
                Capabilities
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/demo"
              className="text-sm text-gray-2 hover:text-primary transition-colors"
            >
              Book demo
            </a>
            <a
              href="/join-syndnet"
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
