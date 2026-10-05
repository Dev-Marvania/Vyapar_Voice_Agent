import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RoiAuditModal } from './RoiAuditModal';

export const RoiCalculatorSection: React.FC = () => {
  const [spendMillion, setSpendMillion] = useState(25);
  const [callsMonth, setCallsMonth] = useState(450);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calibrated formulas matching the screenshot and reference doc
  const annualSavings = spendMillion * 1_000_000 * 0.025;
  const totalHours = Math.round(callsMonth * 0.5 * 12);
  const estimatedPlatformCost = 18_000 + spendMillion * 400;
  const roiMultiple = (annualSavings / estimatedPlatformCost).toFixed(1) + 'x Multiple';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="roi-calculator">
      <div className="bg-[#0a0b0f]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-executive">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Financial Justification Model
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Procurement ROI &amp; Margin Calculator
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Quantify bottom-line EBITDA addition and annual buyer hours reallocated to high-value
            strategic vendor relationships.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Slider 1: Procurement Volume */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-semibold text-white">
                  Annual Raw Material Procurement Volume
                </label>
                <span className="font-display text-lg font-bold text-amber-400">
                  ${spendMillion}M / Year
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="100"
                step="1"
                value={spendMillion}
                onChange={(e) => setSpendMillion(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>$2M (Specialty Trader)</span>
                <span>$50M</span>
                <span>$100M+ (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Calls */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-semibold text-white">
                  Monthly Supplier Outreach Negotiations
                </label>
                <span className="font-display text-lg font-bold text-emerald-400">
                  {callsMonth.toLocaleString()} Calls / Mo
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="25"
                value={callsMonth}
                onChange={(e) => setCallsMonth(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>50 / Month</span>
                <span>1,000 / Month</span>
                <span>2,000 / Month</span>
              </div>
            </div>

            {/* Benchmark Note */}
            <div className="p-3 rounded-xl bg-[#050508]/80 border border-zinc-800 flex items-center gap-2.5 text-xs text-zinc-400">
              <span className="material-symbols-outlined text-amber-400 text-[18px]">verified</span>
              <span>
                Model assumptions calibrated on 2.5% verified pricing capture and 30-minute average
                trader negotiation time.
              </span>
            </div>
          </div>

          {/* Dynamic Output Card (5 cols) */}
          <motion.div
            layout
            className="lg:col-span-5 bg-[#050508]/95 rounded-2xl p-6 border border-amber-500/30 shadow-gold-glow flex flex-col gap-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Metric 1 */}
            <div className="pb-3 border-b border-zinc-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Projected Annual EBITDA Addition
              </span>
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                +${Math.round(annualSavings).toLocaleString('en-US')}
              </span>
              <span className="text-xs text-zinc-400 block mt-0.5">
                Direct margin saved against baseline list pricing
              </span>
            </div>

            {/* Metric 2 */}
            <div className="pb-3 border-b border-zinc-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Trader Hours Reallocated to Strategy
              </span>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                +{totalHours.toLocaleString('en-US')} Hours
              </span>
              <span className="text-xs text-zinc-400 block mt-0.5">
                Equivalent to ~{(totalHours / 1920).toFixed(1)} full-time senior commodity buyers
              </span>
            </div>

            {/* Metric 3 & CTA */}
            <div className="flex items-center justify-between pt-1">
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                  Expected ROI Multiple
                </span>
                <span className="font-mono text-base font-bold text-amber-400">
                  {roiMultiple}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Get Tailored ROI Audit
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ROI Audit Download Modal */}
      <RoiAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        spendMillion={spendMillion}
        callsMonth={callsMonth}
        annualSavings={annualSavings}
        totalHours={totalHours}
        roiMultiple={roiMultiple}
      />
    </section>
  );
};
