import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowUp, Zap, Calculator } from 'lucide-react';

interface HeroSectionProps {
  onStartBlitz: () => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartBlitz,
  onScrollToCalculator,
}) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-12 flex flex-col items-center text-center">
      {/* Top Protocol Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a0b0f]/90 border border-emerald-500/30 mb-5 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wide uppercase">
          VyapaarVoice AI • Autonomous Voice Blitz Engine
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]"
        style={{ textWrap: 'balance' }}
      >
        Turn 100 Phone Calls into 1 Optimal Deal{' '}
        <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
          in 10 Minutes.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl mt-4 leading-relaxed"
      >
        An autonomous voice-intelligence layer that calls, negotiates, and synthesizes the best
        possible raw material prices for high-volume commodity traders.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-3.5 mt-7"
      >
        <button
          onClick={onStartBlitz}
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-emerald-glow active:scale-95 transition-all cursor-pointer group"
        >
          <Zap className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
          <span>Start Outbound Demo Blitz</span>
          <ArrowUpRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
        </button>

        <button
          onClick={onScrollToCalculator}
          className="px-6 py-3.5 rounded-xl bg-[#0f1015]/90 hover:bg-[#181a22] border border-zinc-800 hover:border-zinc-600 text-zinc-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm"
        >
          <Calculator className="w-4 h-4 text-emerald-400" />
          <span>Calculate Savings</span>
        </button>
      </motion.div>

      {/* Executive KPI Benchmark Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full max-w-6xl mt-10 bg-[#07080c]/90 backdrop-blur-md rounded-2xl border border-zinc-800/90 p-4 sm:p-5 shadow-executive"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80 text-left">
          {/* Card 1 */}
          <div className="flex flex-col px-3 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Procurement Volume Processed
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
                $142.8M
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center">
                <ArrowUp className="w-3 h-3 stroke-[3]" />
                +34% MoM
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">Across resins, metals & chemicals</span>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col px-3 py-1 pt-3 sm:pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Voice Pipeline Latency
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display text-2xl lg:text-3xl font-bold text-emerald-400 tracking-tight">
                &lt;800ms
              </span>
              <span className="text-xs font-mono text-zinc-400">End-to-End</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">ASR + Groq Llama + ElevenLabs</span>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col px-3 py-1 pt-3 sm:pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Average Cost Reduction
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display text-2xl lg:text-3xl font-bold text-emerald-400 tracking-tight">
                2.8%
              </span>
              <span className="text-xs font-mono text-zinc-400">Net Yield</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">Across 1,200+ raw materials</span>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col px-3 py-1 pt-3 sm:pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Deterministic Reliability
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
                0.0%
              </span>
              <span className="text-xs font-mono text-emerald-400">Hallucination</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">Strict ZOPA Guardrails & Audio Proof</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
