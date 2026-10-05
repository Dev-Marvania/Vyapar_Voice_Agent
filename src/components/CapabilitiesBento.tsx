import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hub, Gavel, Speed, Scale, Forum, Verified } from './Icons';

interface CapabilitiesBentoProps {
  onOpenAudioProof: () => void;
}

export const CapabilitiesBento: React.FC<CapabilitiesBentoProps> = ({ onOpenAudioProof }) => {
  const [activeDialectTerm, setActiveDialectTerm] = useState('CIF Rotterdam');

  const dialectTerms = [
    { term: 'CIF Rotterdam', definition: 'Cost, Insurance, and Freight to discharge port' },
    { term: 'MFI 12-14 g/10min', definition: 'Melt Flow Index polymer rheology tolerance' },
    { term: 'Demurrage Free 48h', definition: 'Zero demurrage charges on prompt unloading' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="capabilities">
      {/* Section Header */}
      <div className="flex flex-col mb-7">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Board-Level Strategic Advantages
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Engineered for Gross Margin Expansion
        </h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Designed specifically for Chief Procurement Officers and commodity desk leaders managing
          high-velocity raw material commitments.
        </p>
      </div>

      {/* 6-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tile 1: Parallel Voice Outreach */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d0e13]/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-zinc-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                100x Coverage
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-1.5">
              Parallel Voice Outreach
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard procurement desks only call 3 to 5 familiar brokers. VyapaarVoice dials up to 100
              vetted vendors simultaneously, uncovering the true market clearing floor and breaking
              broker monopolies.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Liquidity Depth</span>
            <span className="text-emerald-400 font-bold">100% of vendor roster</span>
          </div>
        </motion.div>

        {/* Tile 2: Deterministic Bargaining Brain */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d0e13]/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-zinc-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">gavel</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                Zero Deviation
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-1.5">
              Deterministic Bargaining Brain
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Executive parameters are locked mathematically into the negotiation runtime. Agents cannot
              exceed your walk-away threshold or commit outside authorized volume, payment, and
              delivery specs.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Hallucination Risk</span>
            <span className="text-white font-bold">0.00% (Guaranteed Bound)</span>
          </div>
        </motion.div>

        {/* Tile 3: Real-Time Audio Latency Stack */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d0e13]/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-zinc-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">speed</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                Ultra-Low Latency
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-1.5">
              Real-Time Audio Latency Stack
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sub-800ms end-to-end latency combining Deepgram Nova-2 ASR, Groq Llama 3 inference, and
              ElevenLabs Flash TTS enables seamless conversational interruptions without synthetic delays.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Turn-Taking Latency</span>
            <span className="text-emerald-400 font-bold">&lt;800ms Average</span>
          </div>
        </motion.div>

        {/* Tile 4: Weighted Deal Scoring */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d0e13]/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-zinc-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">scale</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                Multi-Attribute
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-1.5">
              Weighted Deal Scoring
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automated scoring evaluates freight demurrage windows, supplier on-time reliability,
              packaging specs, and credit terms alongside base price to pinpoint the truly lowest
              landed risk contract.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Multi-Factor Accuracy</span>
            <span className="text-emerald-400 font-bold">99.8% Algorithmic Fit</span>
          </div>
        </motion.div>

        {/* Tile 5: Industrial Dialect Engine */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d0e13]/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-zinc-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">forum</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                Trade Fluency
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-1.5">
              Industrial Dialect Engine
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Speaks fluent commodity market vernacular—Incoterms CIF/FOB, melt-flow index tolerances,
              sulfur impurity ceilings, railcar demurrage, and regional freight premiums without stumbling.
            </p>

            {/* Interactive dialect badges */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {dialectTerms.map((item) => (
                <button
                  key={item.term}
                  onClick={() => setActiveDialectTerm(item.term)}
                  className={`text-[10px] font-mono px-2 py-1 rounded transition-colors cursor-pointer ${
                    activeDialectTerm === item.term
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-[#161820] text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  {item.term}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Call Completion</span>
            <span className="text-white font-bold">96.4% Engagement</span>
          </div>
        </motion.div>

        {/* Tile 6: Verifiable Proof-of-Deal Player */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0d0e13]/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-zinc-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-emerald-400 border border-emerald-500/20 uppercase font-semibold">
                Audit Proof
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-1.5">
              Verifiable Proof-of-Deal Player
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No need to listen to 30-minute phone recordings. Executives and auditors click straight to
              the isolated 10-second verbal handshake clip, cryptographically signed and linked to the ERP PO.
            </p>
            <div className="mt-3">
              <button
                onClick={onOpenAudioProof}
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">play_circle</span>
                <span>Sample 10s Handshake Audio</span>
              </button>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Audit Compression</span>
            <span className="text-emerald-400 font-bold">-92% Review Hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
