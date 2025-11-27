import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductOverview } from './components/ProductOverview';
import { MarketplaceSection } from './components/MarketplaceSection';
import { AIScoutSection } from './components/AIScoutSection';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { WorkflowSection } from './components/WorkflowSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />
        <MarketplaceSection />
        <AIScoutSection />
        <CapabilitiesGrid />
        <WorkflowSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
