import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Insights from './components/Insights'
import Security from './components/Security'
import VirtualCard from './components/VirtualCard'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <SmoothScroll>
      <div className="bg-canvas text-ink font-body min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Trust />
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
    </SmoothScroll>
  )
}
