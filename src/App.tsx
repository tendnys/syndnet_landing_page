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
      {/* Fixed top stack: Ticker above Header */}
      <div className="fixed inset-x-0 top-0 z-50">
        <MarketTicker />
        <Navbar />
      </div>

      {/* Main content with top padding to account for fixed ticker + header */}
      <main className="pt-[88px]">
        <Hero />

        {/* City activity map background for all sections after hero */}
        <section className="bg-city-primary">
          {/* Testimonial Section */}
          <div className="founder-section">
            <div className="bg-app-saas-section">
              <TestimonialQuote />
            </div>
          </div>

          {/* Gradient transition */}
          <div className="section-divider-gradient" />

          {/* Natural Language Property Search */}
          <div className="bg-app-saas-section">
            <AISearchShowcase />
          </div>

          {/* Subtle fade transition */}
          <div className="section-divider-fade" />

          {/* Unified Property Intelligence */}
          <div className="bg-app-saas-section">
            <GISMapping />
          </div>

          {/* Gradient transition */}
          <div className="section-divider-gradient" />

          {/* Automated Site Analysis */}
          <div className="bg-app-saas-section">
            <EnvironmentalAnalysis />
          </div>

          {/* Subtle fade transition */}
          <div className="section-divider-fade" />

          {/* Benefits Grid */}
          <div className="bg-app-saas-section">
            <BenefitsGrid />
          </div>

          {/* Gradient transition */}
          <div className="section-divider-gradient" />

          {/* Scout M1 */}
          <div className="bg-app-saas-section">
            <ScoutM1 />
          </div>

          {/* Subtle fade transition */}
          <div className="section-divider-fade" />

          {/* Features List */}
          <div className="bg-app-saas-section">
            <FeaturesList />
          </div>

          {/* Gradient transition */}
          <div className="section-divider-gradient" />

          {/* Process Workflow */}
          <div className="bg-app-saas-section">
            <ProcessWorkflow />
          </div>

          {/* Subtle fade transition */}
          <div className="section-divider-fade" />

          {/* Use Cases */}
          <div className="usecase-section">
            <div className="bg-app-saas-section">
              <UseCases />
            </div>
          </div>

          {/* Gradient transition */}
          <div className="section-divider-gradient" />

          {/* Pricing */}
          <div className="bg-app-saas-section">
            <Pricing />
          </div>

          {/* Subtle fade transition */}
          <div className="section-divider-fade" />

          {/* FAQ */}
          <div className="bg-app-saas-section">
            <FAQ />
          </div>

          {/* Gradient transition */}
          <div className="section-divider-gradient" />

          {/* CTA Section */}
          <div className="bg-app-saas-section">
            <CTASection />
          </div>
        </section>

        {/* Smooth transition into footer */}
        <div className="h-12 bg-gradient-to-b from-black/0 to-black" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
