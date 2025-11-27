export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light border-t border-slate-900/10 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-1 mb-4">
              Syndnet / ScoutGPT
            </h3>
            <p className="text-sm text-gray-2 max-w-md">
              The future of commercial real estate. Find, evaluate, and act faster with AI powered analysis and off market opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-1 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-sm text-gray-2 hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-gray-2 hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-1 mb-3">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-sm text-gray-2 hover:text-primary transition-colors">
                    Get in touch
                  </a>
                </li>
                <li>
                  <a href="/demo" className="text-sm text-gray-2 hover:text-primary transition-colors">
                    Book a demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-gray-3">
              © {currentYear} Syndnet / ScoutGPT. All rights reserved.
            </p>
            <div className="text-xs text-gray-3 space-y-1 md:text-right">
              <p>Not a broker dealer.</p>
              <p>Information not investment advice.</p>
              <p>Coverage varies by market.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
