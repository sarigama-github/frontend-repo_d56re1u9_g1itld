import React from 'react';
import HeroSpline from './components/HeroSpline';
import TraceabilityMap from './components/TraceabilityMap';
import AnalyticsGrid from './components/AnalyticsGrid';
import FooterBrand from './components/FooterBrand';
import { Hexagon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Subtle circuit background */}
      <div className="fixed inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage:
          'radial-gradient(800px 400px at 10% 10%, rgba(43,110,255,0.35), transparent 60%), radial-gradient(600px 300px at 90% 30%, rgba(43,110,255,0.25), transparent 60%), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: 'auto, auto, 24px 24px, 24px 24px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(43,110,255,0.3)]">
              <Hexagon className="w-5 h-5 text-[#2B6EFF]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60">FertiChain.AI</div>
              <div className="text-sm text-white/80">Futuristic Supply Chain Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">Overview</button>
            <button className="text-xs px-3 py-2 rounded-lg bg-[#2B6EFF] text-white shadow-[0_0_20px_rgba(43,110,255,0.6)]">Launch Control</button>
          </div>
        </header>

        {/* Hero Spline */}
        <HeroSpline />

        {/* Content grid */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-white/90 text-lg font-semibold">Traceability Map</h2>
                <span className="text-xs text-white/60">Factory → Distributor → Kiosk → Farmer → Field</span>
              </div>
              <div className="mt-3"><TraceabilityMap /></div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
              <h2 className="text-white/90 text-lg font-semibold">Blockchain Smart Contract Panel</h2>
              <p className="text-xs text-white/60 mt-1">Nutrient Passport NFT • Proof of Use • Yield‑Backed Settlement</p>
              <div className="mt-3"><AnalyticsGrid /></div>
            </div>
          </div>
        </section>

        {/* Lower analytics grid */}
        <div className="mt-6">
          <AnalyticsGrid />
        </div>

        <FooterBrand />
      </div>
    </div>
  );
}

export default App;
