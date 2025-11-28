import { MarketTicker } from './components/MarketTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UseCases } from './components/UseCases';
import { AISearchShowcase } from './components/AISearchShowcase';
import { GISMapping } from './components/GISMapping';
import { EnvironmentalAnalysis } from './components/EnvironmentalAnalysis';
import { TestimonialQuote } from './components/TestimonialQuote';
import { BenefitsGrid } from './components/BenefitsGrid';
import { ScoutM1 } from './components/ScoutM1';
import { FeaturesList } from './components/FeaturesList';
import { ProcessWorkflow } from './components/ProcessWorkflow';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] overflow-x-hidden">
      <MarketTicker />
      <Navbar />
      <main>
        <Hero />
        <TestimonialQuote />
        <AISearchShowcase />
        <GISMapping />
        <EnvironmentalAnalysis />
        <BenefitsGrid />
        <ScoutM1 />
        <FeaturesList />
        <ProcessWorkflow />
        <UseCases />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
