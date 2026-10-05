import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface StickyNavProps {
  onLaunchBlitz: () => void;
  onOpenBriefing: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({ onLaunchBlitz, onOpenBriefing }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Live Deal Matrix', href: '#simulator' },
    { name: 'Strategic Advantage', href: '#capabilities' },
    { name: 'The 4-Step Cycle', href: '#execution' },
    { name: 'EBITDA Calculator', href: '#roi-calculator' },
    { name: 'Governance & ERP', href: '#governance' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-3 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto h-16 px-5 bg-[#0a0b0f]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex items-center justify-between pointer-events-auto transition-all">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-emerald-glow group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-white text-[20px]">record_voice_over</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              VyapaarVoice
              <span className="text-[11px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono font-medium tracking-wide">
                VOICE BLITZ
              </span>
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase font-mono">
              AUTONOMOUS COMMODITY SOURCING
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#050508]/80 px-2 py-1 rounded-xl border border-white/5 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="px-3.5 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('#roi-calculator')}
            className="hidden sm:inline-flex text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1.5 rounded-md items-center gap-1.5 hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Avg 2.8% Cost Alpha
          </button>

          <button
            onClick={onLaunchBlitz}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs rounded-xl shadow-emerald-glow active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Launch Demo Blitz</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 p-4 bg-[#0a0b0f]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl pointer-events-auto flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-left px-4 py-2.5 rounded-xl text-zinc-200 hover:bg-zinc-800/80 font-medium text-sm transition-all"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBriefing();
              }}
              className="w-full py-2.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl font-semibold"
            >
              Schedule Executive Briefing
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
