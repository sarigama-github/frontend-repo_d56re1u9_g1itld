import React from 'react';
import { QrCode, Radio, Package, Building2, ShoppingBag, Truck, Route } from 'lucide-react';

const Step = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2">
    <div className="p-2 rounded-lg bg-white/10 border border-white/10 shadow-inner">
      <Icon className="w-4 h-4 text-[#2B6EFF]" />
    </div>
    <span className="text-sm text-white/80">{label}</span>
  </div>
);

const TraceabilityMap = () => {
  return (
    <div className="relative w-full h-72 md:h-80 rounded-xl p-4 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
      {/* Faint circuit lines background */}
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{
        backgroundImage:
          'radial-gradient(circle at 10% 20%, rgba(43,110,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(43,110,255,0.2) 0, transparent 40%), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: 'auto, auto, 24px 24px, 24px 24px',
      }} />

      <div className="relative z-10 grid grid-cols-5 items-center h-full gap-2">
        <Step icon={Package} label="Factory" />
        <div className="flex items-center justify-center text-white/60">
          <Route className="w-5 h-5" />
        </div>
        <Step icon={Building2} label="Distributor" />
        <div className="flex items-center justify-center text-white/60">
          <Route className="w-5 h-5" />
        </div>
        <Step icon={ShoppingBag} label="Kiosk" />
      </div>

      <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <QrCode className="w-4 h-4 text-white/80" />
          <span className="text-xs text-white/70">QR/NFC attached per bag</span>
        </div>
        <div className="flex items-center gap-3">
          <Truck className="w-4 h-4 text-white/80" />
          <span className="text-xs text-white/70">Farmer → Field delivery tracked</span>
        </div>
        <div className="flex items-center gap-3">
          <Radio className="w-4 h-4 text-white/80" />
          <span className="text-xs text-white/70">IoT route beacons</span>
        </div>
      </div>

      {/* Path line */}
      <svg className="absolute inset-0" width="100%" height="100%">
        <defs>
          <linearGradient id="pathGlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#2B6EFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2B6EFF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M 60 120 C 180 60, 300 180, 420 120 S 660 120, 780 120" stroke="url(#pathGlow)" strokeWidth="3" fill="none" />
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
    </div>
  );
};

export default TraceabilityMap;
