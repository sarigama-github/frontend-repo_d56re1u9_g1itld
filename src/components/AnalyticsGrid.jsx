import React from 'react';
import { LineChart, BarChart3, Cpu, Lock, ArrowRight, Gauge, Thermometer, Droplets, Leaf } from 'lucide-react';

const Card = ({ title, children, icon: Icon }) => (
  <div className="relative rounded-xl p-4 bg-white/5 backdrop-blur-md border border-white/10 text-white">
    <div className="absolute inset-0 pointer-events-none" style={{
      background:
        'linear-gradient(120deg, rgba(43,110,255,0.15), transparent 60%), radial-gradient(40% 60% at 0% 0%, rgba(255,255,255,0.06), transparent 60%)',
    }} />
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[#2B6EFF]" />}
        <h3 className="text-sm font-medium text-white/90">{title}</h3>
      </div>
      <ArrowRight className="w-4 h-4 text-white/40" />
    </div>
    <div className="relative z-10 mt-3">{children}</div>
  </div>
);

const MiniChart = () => (
  <svg viewBox="0 0 100 40" className="w-full h-20">
    <defs>
      <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#2B6EFF" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#2B6EFF" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <polyline fill="none" stroke="url(#grad)" strokeWidth="2" points="0,30 15,28 30,25 45,26 60,20 75,18 90,10 100,12" />
    <polyline fill="rgba(43,110,255,0.12)" stroke="none" points="0,40 0,30 15,28 30,25 45,26 60,20 75,18 90,10 100,12 100,40" />
  </svg>
);

const BarLineCombo = () => (
  <svg viewBox="0 0 120 50" className="w-full h-24">
    {Array.from({ length: 8 }).map((_, i) => (
      <rect key={i} x={i * 14 + 4} y={50 - (i % 3 + 1) * 8} width="10" height={(i % 3 + 1) * 8} fill="rgba(43,110,255,0.4)" />
    ))}
    <polyline fill="none" stroke="#2B6EFF" strokeWidth="2" points="0,40 15,38 30,34 45,36 60,28 75,26 90,18 110,20" />
  </svg>
);

const GaugeRow = () => (
  <div className="grid grid-cols-3 gap-3">
    <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3">
      <Droplets className="w-5 h-5 text-[#2B6EFF]" />
      <div className="flex-1">
        <div className="text-xs text-white/60">Humidity</div>
        <div className="w-full h-2 rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-[#2B6EFF]" style={{ width: '62%' }} />
        </div>
      </div>
      <span className="text-sm text-white/80">62%</span>
    </div>
    <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3">
      <Thermometer className="w-5 h-5 text-[#2B6EFF]" />
      <div className="flex-1">
        <div className="text-xs text-white/60">Temperature</div>
        <div className="w-full h-2 rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-[#2B6EFF]" style={{ width: '48%' }} />
        </div>
      </div>
      <span className="text-sm text-white/80">24°C</span>
    </div>
    <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3">
      <Gauge className="w-5 h-5 text-[#2B6EFF]" />
      <div className="flex-1">
        <div className="text-xs text-white/60">Stock Level</div>
        <div className="w-full h-2 rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-[#2B6EFF]" style={{ width: '74%' }} />
        </div>
      </div>
      <span className="text-sm text-white/80">74%</span>
    </div>
  </div>
);

const Contracts = () => (
  <div className="grid grid-cols-3 gap-3">
    {[
      { title: 'Nutrient Passport NFT', icon: Lock },
      { title: 'Proof of Use', icon: Lock },
      { title: 'Yield-Backed Settlement', icon: Lock },
    ].map((c) => (
      <div key={c.title} className="rounded-lg p-3 bg-white/5 border border-white/10">
        <div className="flex items-center gap-2 text-white/80">
          <c.icon className="w-4 h-4 text-[#2B6EFF]" />
          <span className="text-xs">{c.title}</span>
        </div>
        <div className="mt-2 h-1.5 rounded bg-[#2B6EFF]/30">
          <div className="h-full w-3/4 rounded bg-[#2B6EFF]" />
        </div>
      </div>
    ))}
  </div>
);

const NDVI = () => (
  <div className="relative w-full h-24 rounded-lg overflow-hidden border border-white/10">
    <div className="absolute inset-0" style={{
      background:
        'linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), linear-gradient(90deg, #ff4d4d, #ffcc00, #66cc33)',
      filter: 'saturate(1.1) contrast(1.1)'
    }} />
    <div className="relative z-10 p-2 text-[10px] text-white/90">NDVI • Yield Estimate: 3.2 t/ha</div>
  </div>
);

const ESG = () => (
  <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 p-3">
    <div>
      <div className="text-xs text-white/60">Carbon Intensity (per lot)</div>
      <div className="text-sm text-white/90">0.42 kg CO₂e/kg</div>
    </div>
    <div className="text-xs text-white/70">MRV Report • Compliant</div>
  </div>
);

const AnalyticsGrid = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card title="Traceability Map" icon={BarChart3}>
        <div className="h-24">
          <MiniChart />
        </div>
      </Card>
      <Card title="Blockchain Smart Contracts" icon={Lock}>
        <Contracts />
      </Card>
      <Card title="AI Demand Sensing (District)" icon={Cpu}>
        <BarLineCombo />
      </Card>

      <Card title="NDVI / EO Satellite" icon={LineChart}>
        <NDVI />
      </Card>
      <Card title="IoT Sensor Telemetry" icon={Gauge}>
        <GaugeRow />
      </Card>
      <Card title="Carbon & ESG Tracker" icon={Leaf}>
        <ESG />
      </Card>
    </section>
  );
};

export default AnalyticsGrid;
