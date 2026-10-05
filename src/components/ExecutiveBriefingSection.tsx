import React, { useState } from 'react';
import { Check, Calendar, ArrowRight, X, Building, Mail, User, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExecutiveBriefingProps {
  onScrollToSimulator: () => void;
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const ExecutiveBriefingSection: React.FC<ExecutiveBriefingProps> = ({
  onScrollToSimulator,
  isOpenModal,
  onCloseModal,
  onOpenModal,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [commodityType, setCommodityType] = useState('Polymers & Petrochemicals');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#10b981', '#34d399', '#ffffff'],
    });
  };

  const handleResetModal = () => {
    onCloseModal();
    setFormSubmitted(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="executive-briefing">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#181a24] via-[#0e0f14] to-[#06070a] p-8 sm:p-12 border border-amber-500/30 shadow-gold-glow">
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Pilot Ingestion Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase">
              Enterprise Pilot Ingestion Open
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Schedule an Executive Sourcing Briefing
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-xl leading-relaxed">
            See how commodity trading houses and manufacturing procurement leaders are unlocking 2.8%+
            net margin gains. We will run a tailored test blitz on your sample supplier list in under 48 hours.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <button
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm shadow-emerald-glow active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Request Private Executive Briefing
            </button>
            <button
              onClick={() => setCaseStudiesOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#161820]/90 hover:bg-[#1e202a] border border-zinc-700 text-zinc-200 font-semibold text-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Review Historical Deal Case Studies
            </button>
          </div>

          {/* Verification Checkmarks */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-emerald-400 text-[14px]">check</span>
              Zero infrastructure re-tooling
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-emerald-400 text-[14px]">check</span>
              Full SOC-2 Type II audit compliance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-emerald-400 text-[14px]">check</span>
              Guaranteed ZOPA price containment
            </span>
          </div>
        </div>
      </div>

      {/* Briefing Booking Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#0a0b0f] border border-emerald-500/40 rounded-2xl shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <h3 className="font-display text-base font-bold text-white">
                  Executive Briefing &amp; Pilot Onboarding
                </h3>
              </div>
              <button
                onClick={handleResetModal}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="my-8 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  Briefing Request Registered
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm">
                  Thank you, <strong className="text-white">{name || 'Executive'}</strong>. A VyapaarVoice
                  procurement systems architect has reserved your 48-hour pilot slot for{' '}
                  <span className="text-emerald-400 font-mono">{email}</span>.
                </p>
                <button
                  onClick={handleResetModal}
                  className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="my-4 space-y-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Your Full Name &amp; Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance, VP Procurement"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 pl-9 bg-[#050508] border border-zinc-700 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Corporate Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="e.g. mvance@glencore-commodities.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 pl-9 bg-[#050508] border border-zinc-700 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Company / Trading House Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Global Trade Corp"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3 py-2 pl-9 bg-[#050508] border border-zinc-700 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                    <Building className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Primary Raw Material Category
                  </label>
                  <select
                    value={commodityType}
                    onChange={(e) => setCommodityType(e.target.value)}
                    className="w-full px-3 py-2 bg-[#050508] border border-zinc-700 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Polymers & Petrochemicals">Polymers &amp; Petrochemicals (PP, PE, PVC)</option>
                    <option value="Steel & Non-Ferrous Metals">Steel &amp; Non-Ferrous Metals (HR Coil, Aluminium)</option>
                    <option value="Oleochemicals & Fatty Acids">Oleochemicals &amp; Industrial Fatty Acids</option>
                    <option value="Agricultural Commodities">Agricultural Bulk (Grain, Sugar, Edible Oils)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs rounded-xl shadow-emerald-glow transition-all cursor-pointer"
                  >
                    Confirm Private Briefing Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Case Studies Modal */}
      {caseStudiesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#0a0b0f] border border-zinc-800 rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="font-display text-base font-bold text-white">
                Historical Deal Execution Case Studies
              </h3>
              <button
                onClick={() => setCaseStudiesOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 space-y-3">
              <div className="p-3.5 bg-[#050508] rounded-xl border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Resin &amp; Polymer Packaging OEM</span>
                  <span className="text-zinc-400">$38M Annual Spend</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1">
                  Triggered 85-vendor voice blitz across Gulf Coast suppliers in 8 minutes. Squeezed PP homopolymer
                  from $1,220/T list to $1,145/T landed, generating <strong>$285,000 net margin savings</strong> on a single spot buy.
                </p>
              </div>

              <div className="p-3.5 bg-[#050508] rounded-xl border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-amber-400 font-bold">Industrial Fabricator (Hot Rolled Coil)</span>
                  <span className="text-zinc-400">$74M Annual Spend</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1">
                  Replaced 4 full-time buyer calling days with a 12-minute autonomous session across 40 steel service centers.
                  Locked priority railcar dispatch with 3.2% basis reduction below CRU index.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-zinc-800">
              <button
                onClick={() => setCaseStudiesOpen(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs rounded-xl"
              >
                Close Case Studies
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
