import React from 'react';

export const ExecutiveFooter: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050508] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px]">
                  record_voice_over
                </span>
              </div>
              <span className="font-display font-bold text-white text-base">
                VyapaarVoice AI
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Institutional autonomous voice intelligence for commodity procurement. Maximizing sourcing alpha,
              compressing negotiation cycle time, and delivering deterministic ERP contracts.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              99.98% High-Volume Procurement Network Uptime
            </div>
          </div>

          {/* Strategic Products */}
          <div className="flex flex-col gap-2 text-xs">
            <span className="font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Strategic Products
            </span>
            <button
              onClick={() => scrollTo('#simulator')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Tactical Sourcing Matrix
            </button>
            <button
              onClick={() => scrollTo('#capabilities')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              100-Channel Voice Blitz
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Deterministic ZOPA Engine
            </button>
            <button
              onClick={() => scrollTo('#simulator')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Proof-of-Deal Verification
            </button>
          </div>

          {/* Enterprise Governance */}
          <div className="flex flex-col gap-2 text-xs">
            <span className="font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Enterprise Governance
            </span>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              SOC-2 Type II Certification
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Two-Party Consent Architecture
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Cryptographic Audit Logs
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Risk &amp; Reliability Scoring
            </button>
          </div>

          {/* ERP Ecosystem */}
          <div className="flex flex-col gap-2 text-xs">
            <span className="font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              ERP Ecosystem
            </span>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              SAP S/4HANA Connector
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Oracle Fusion Cloud SCM
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Workday Procurement API
            </button>
            <button
              onClick={() => scrollTo('#governance')}
              className="text-left text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              NetSuite SuiteTalk REST
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <span>© 2025 VyapaarVoice AI Systems Inc. Enterprise Commodity Sourcing &amp; Execution.</span>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-zinc-400">LATENCY: &lt;140MS</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ALL ENTERPRISE NODES ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
