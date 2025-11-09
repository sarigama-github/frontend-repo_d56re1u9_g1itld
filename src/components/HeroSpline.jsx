import React from 'react';
import Spline from '@splinetool/react-spline';
import { BrainCircuit, Leaf, Satellite, ShieldCheck } from 'lucide-react';

const HeroSpline = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-[0_0_80px_rgba(43,110,255,0.25)]">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(60% 60% at 50% 10%, rgba(43,110,255,0.25) 0%, rgba(43,110,255,0) 60%)',
      }} />

      {/* Headline content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-xs tracking-widest uppercase text-white/70">FertiChain.AI</span>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-white">
          Smart Fertilizer Supply Chain Intelligence
        </h1>
        <p className="mt-4 max-w-3xl text-sm md:text-base text-white/80">
          AI demand forecasting, IoT telemetry, satellite NDVI analytics, and blockchain traceability — unified in a
          next‑gen industrial control dashboard.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-white/80">
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full">
            <BrainCircuit className="w-4 h-4 text-[#2B6EFF]" /> AI Forecasting
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full">
            <Satellite className="w-4 h-4 text-[#2B6EFF]" /> NDVI / EO
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#2B6EFF]" /> Blockchain Traceability
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full">
            <Leaf className="w-4 h-4 text-[#2B6EFF]" /> Carbon & ESG
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
