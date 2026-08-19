

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { Insights } from './components/Insights';
import { Security } from './components/Security';
import { VirtualCard } from './components/VirtualCard';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-velora-bg text-white selection:bg-velora-accent/20 selection:text-velora-accent overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <Dashboard />
        <Insights />
        <Security />
        <VirtualCard />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
