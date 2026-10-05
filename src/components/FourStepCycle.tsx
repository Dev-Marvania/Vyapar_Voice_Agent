import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, BarChart2, ArrowRightLeft } from 'lucide-react';

export const FourStepCycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      tag: 'Input',
      title: 'Define Mandate & Bounds',
      desc: 'Input procurement targets ($P_T$), walkaway ceiling ($P_W$), volume specs, and import existing supplier roster via ERP connector or CSV.',
      icon: <Check className="w-3.5 h-3.5 text-amber-400" />,
      footer: 'Zero hallucination limits',
      color: 'border-zinc-800 hover:border-zinc-700',
    },
    {
      num: '02',
      tag: 'Outreach',
      title: '100-Channel Voice Blitz',
      desc: 'VyapaarVoice triggers concurrent outbound phone calls across all suppliers, negotiating dynamically in trade vernacular with human cadence.',
      icon: <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />,
      footer: '100 simultaneous calls',
      color: 'border-emerald-500/40 bg-emerald-500/5',
      isHighlight: true,
    },
    {
      num: '03',
      tag: 'Analysis',
      title: 'Matrix Deal Synthesis',
      desc: 'Transcripts are synthesized into structured terms. Multi-factor algorithms rank proposals by total landed cost, credit terms, and delivery certainty.',
      icon: <BarChart2 className="w-3.5 h-3.5 text-white" />,
      footer: 'Instant normalized ranking',
      color: 'border-zinc-800 hover:border-zinc-700',
    },
    {
      num: '04',
      tag: 'Commitment',
      title: '1-Click PO Execution',
      desc: 'The procurement director reviews the top 3 deals, auditions the verbal handshake audio proof, and executes the contract straight to SAP or Oracle.',
      icon: <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-400" />,
      footer: 'Direct ERP PO dispatch',
      color: 'border-emerald-500/30 bg-emerald-500/5',
      isHighlight: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="execution">
      <div className="bg-[#07080c]/85 rounded-2xl border border-white/10 p-6 sm:p-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Autonomous Execution Protocol
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The 4-Step Sourcing Cycle
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap self-start md:self-auto">
            Total Settle Time: Under 10 Minutes
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className={`p-4 rounded-xl border bg-[#0d0e13]/80 flex flex-col justify-between transition-all cursor-pointer ${
                activeStep === idx ? 'ring-1 ring-emerald-500/60 shadow-emerald-glow' : ''
              } ${step.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center border ${
                      step.isHighlight
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        : 'bg-[#161820] text-white border-zinc-700'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase ${
                      step.isHighlight ? 'text-emerald-400 font-semibold' : 'text-zinc-400'
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-zinc-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                {step.icon}
                <span>{step.footer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
