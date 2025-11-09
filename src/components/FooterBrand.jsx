import React from 'react';
import { Shield, Radio, Rocket, Brain } from 'lucide-react';

const FooterBrand = () => {
  return (
    <footer className="mt-10 mb-6 text-white/70">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-white/80">
          <Rocket className="w-4 h-4 text-[#2B6EFF]" />
          <span className="text-sm font-medium">FertiChain.AI • Industrial Intelligence</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1"><Brain className="w-3 h-3 text-[#2B6EFF]" /> AI</span>
          <span className="inline-flex items-center gap-1"><Shield className="w-3 h-3 text-[#2B6EFF]" /> Blockchain</span>
          <span className="inline-flex items-center gap-1"><Radio className="w-3 h-3 text-[#2B6EFF]" /> IoT</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterBrand;
