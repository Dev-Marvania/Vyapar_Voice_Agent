import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PhoneCall, Check, Play, RefreshCw, Volume2, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ProofAudioModal } from './ProofAudioModal';
import { soundEngine } from '../utils/soundEffects';

interface SimulatorProps {
  blitzTriggerCount: number;
}

export const SimulatorSection: React.FC<SimulatorProps> = ({ blitzTriggerCount }) => {
  // Commodity & specs
  const commodities = [
    { name: 'Grade A Polypropylene', unit: 'Ton', defaultQty: 50, defaultTarget: 1100, defaultWalkaway: 1250, min: 1000, max: 1400 },
    { name: 'HR Coil Steel 2.0mm', unit: 'Ton', defaultQty: 100, defaultTarget: 780, defaultWalkaway: 890, min: 700, max: 1000 },
    { name: 'Tallow Fatty Acid', unit: 'MT', defaultQty: 25, defaultTarget: 1320, defaultWalkaway: 1480, min: 1200, max: 1600 },
    { name: 'Aluminium Ingot 99.7%', unit: 'Ton', defaultQty: 40, defaultTarget: 2350, defaultWalkaway: 2550, min: 2100, max: 2800 },
  ];

  const [selectedCommodityIndex, setSelectedCommodityIndex] = useState(0);
  const commodity = commodities[selectedCommodityIndex];

  const [targetPrice, setTargetPrice] = useState(commodity.defaultTarget);
  const [walkawayPrice, setWalkawayPrice] = useState(commodity.defaultWalkaway);
  const [quantity, setQuantity] = useState(commodity.defaultQty);

  // When commodity changes, update prices
  const handleSelectCommodity = (idx: number) => {
    setSelectedCommodityIndex(idx);
    const item = commodities[idx];
    setTargetPrice(item.defaultTarget);
    setWalkawayPrice(item.defaultWalkaway);
    setQuantity(item.defaultQty);
  };

  // Blitz simulation state
  const [isSimulating, setIsSimulating] = useState(false);
  const [simPhase, setSimPhase] = useState<'idle' | 'dialing' | 'negotiating' | 'closed'>('closed');
  const [activeCallTimer, setActiveCallTimer] = useState('00:24');
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const [confirmedDealId, setConfirmedDealId] = useState<string>('apex');
  const [showSyncSuccess, setShowSyncSuccess] = useState(false);

  // Real-time acoustic waveform height fluctuations
  const [waveformBars, setWaveformBars] = useState([8, 14, 22, 16, 28, 36, 24, 18, 12, 26, 32, 19, 14, 24]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveformBars((prev) =>
        prev.map(() => Math.floor(Math.random() * (isSimulating ? 36 : 20)) + 6)
      );
    }, 150);
    return () => clearInterval(interval);
  }, [isSimulating]);

  // Handle external blitz triggers from Header or Hero
  useEffect(() => {
    if (blitzTriggerCount > 0) {
      handleTriggerBlitz();
    }
  }, [blitzTriggerCount]);

  const handleTriggerBlitz = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimPhase('dialing');
    setActiveCallTimer('00:02');
    soundEngine.playDialTone();

    // Phase 1: Dialing (0 - 1.2s)
    setTimeout(() => {
      setSimPhase('negotiating');
      setActiveCallTimer('00:12');
    }, 1200);

    // Phase 2: Finalizing offers (1.2s - 2.6s)
    setTimeout(() => {
      setSimPhase('closed');
      setActiveCallTimer('00:24');
      setIsSimulating(false);
      soundEngine.playDealConfirmed();
    }, 2600);
  };

  // Calculated dynamic financial values
  const apexUnitPrice = targetPrice + Math.round((walkawayPrice - targetPrice) * 0.25);
  const polychemUnitPrice = targetPrice + Math.round((walkawayPrice - targetPrice) * 0.6);
  const globalResinUnitPrice = targetPrice + Math.round((walkawayPrice - targetPrice) * 0.8);

  const totalContractValue = apexUnitPrice * quantity;
  const negotiatedSavings = (walkawayPrice - apexUnitPrice) * quantity;

  // Confirm Deal Action
  const handleConfirmDeal = (supplierId: string, supplierName: string) => {
    setConfirmedDealId(supplierId);
    soundEngine.playDealConfirmed();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#f59e0b', '#ffffff'],
    });
    setShowSyncSuccess(true);
    setTimeout(() => setShowSyncSuccess(false), 4000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8" id="simulator">
      <div className="bg-[#08090d]/95 backdrop-blur-xl rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-executive flex flex-col gap-6">
        
        {/* A. TOP CONTROL BAR */}
        <div className="flex flex-col gap-4 pb-5 border-b border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
                VyapaarVoice AI
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Voice Blitz Engine
              </span>
            </div>

            {/* Commodity & Quantity Config Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative inline-block">
                <select
                  value={selectedCommodityIndex}
                  onChange={(e) => handleSelectCommodity(Number(e.target.value))}
                  className="appearance-none text-xs font-mono text-zinc-300 bg-[#161820] hover:bg-[#1e202a] px-3 py-1.5 pr-8 rounded-lg border border-zinc-700 cursor-pointer focus:outline-none focus:border-emerald-500"
                >
                  {commodities.map((c, i) => (
                    <option key={c.name} value={i} className="bg-[#0d0e12] text-white">
                      Commodity: {c.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-[#161820] px-3 py-1.5 rounded-lg border border-zinc-700">
                <span>Qty:</span>
                <input
                  type="number"
                  min="5"
                  max="500"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-12 bg-transparent text-white font-bold focus:outline-none text-center border-b border-zinc-600"
                />
                <span>{commodity.unit}s</span>
              </div>
            </div>
          </div>

          {/* Interactive Pricing Bound Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#0d0e13]/90 p-4 rounded-xl border border-zinc-800">
            {/* Target Price Slider */}
            <div className="md:col-span-4 flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Target Price (${commodity.unit}):</span>
                <span className="text-emerald-400 font-bold">${targetPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={commodity.min}
                max={commodity.defaultWalkaway}
                step="5"
                value={targetPrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setTargetPrice(val);
                  if (val >= walkawayPrice) setWalkawayPrice(val + 50);
                }}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
              />
              <span className="text-[10px] font-mono text-zinc-500">Floor limit for optimal deal</span>
            </div>

            {/* Walk-away Price Slider */}
            <div className="md:col-span-4 flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Walk-away Price (${commodity.unit}):</span>
                <span className="text-zinc-200 font-bold">${walkawayPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={targetPrice + 10}
                max={commodity.max}
                step="5"
                value={walkawayPrice}
                onChange={(e) => setWalkawayPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <span className="text-[10px] font-mono text-zinc-500">
                Deal Box Target Range: ${targetPrice} – ${walkawayPrice} / {commodity.unit}
              </span>
            </div>

            {/* Start Blitz Action */}
            <div className="md:col-span-4 flex items-center justify-end">
              <button
                onClick={handleTriggerBlitz}
                disabled={isSimulating}
                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-75 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-emerald-glow active:scale-95 transition-all cursor-pointer"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Dialing 100 Channels...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px]">phone_in_talk</span>
                    <span>Start Voice Blitz</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* B. LIVE CONCURRENT VOICE BLITZ MONITORING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left AI Acoustic Core */}
          <div className="lg:col-span-4 bg-[#0d0e13]/80 rounded-xl p-4 border border-zinc-800 flex flex-col justify-between items-center text-center">
            <div className="w-full flex items-center justify-between pb-2 border-b border-zinc-800">
              <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-emerald-400 text-[16px]">multiline_chart</span>
                AI Acoustic Core
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-semibold ${
                isSimulating
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 animate-pulse'
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              }`}>
                {isSimulating ? 'TRANSMITTING' : 'COMPLETED'}
              </span>
            </div>

            {/* Geometric Radar Wireframe - Zero Blue (Emerald & Neutral Charcoal) */}
            <div className="relative w-44 h-44 my-4 flex items-center justify-center">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20"></div>
              <div className="absolute inset-4 rounded-full border border-zinc-700/60"></div>
              <div className="absolute inset-8 rounded-full border border-emerald-500/30"></div>
              <div className="absolute inset-12 rounded-full border border-zinc-700/40"></div>

              {/* Crosshair lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-zinc-800"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-full w-[1px] bg-zinc-800"></div>
              </div>

              {/* Rotating radar sweep */}
              <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden animate-radar-sweep opacity-75">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/25 to-transparent origin-bottom-right"></div>
              </div>

              {/* Dynamic waveform visualizer core */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-400 flex items-center justify-center shadow-emerald-glow">
                <div className="flex items-center gap-0.5 h-6">
                  {waveformBars.slice(0, 5).map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-emerald-400 rounded-full transition-all duration-100"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-400">Acoustic Channels</span>
              <span className="text-emerald-400 font-semibold">
                {isSimulating ? '3 Active Streams Dialing' : '3 Active Streams Closed'}
              </span>
            </div>
          </div>

          {/* Right Column: 3 Parallel Call Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {/* Card 1: PolyChem */}
            <div className="p-3.5 rounded-xl bg-[#0d0e13]/80 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
                  <span className="text-xs font-bold text-white">PolyChem Industries</span>
                  <span className="text-[10px] font-mono text-zinc-400">(Timer: {activeCallTimer})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-zinc-300 border border-zinc-700">
                    {simPhase === 'dialing' ? 'Status: Dialing...' : simPhase === 'negotiating' ? 'Status: Countering' : 'Status: Closed'}
                  </span>
                  <span className="font-mono font-bold text-white text-xs">
                    Offer: ${polychemUnitPrice}/T
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-300 font-mono bg-[#050508]/80 p-2 rounded-lg border border-zinc-800">
                {simPhase === 'dialing'
                  ? 'VyapaarVoice: Initiating encrypted SIP trunk to PolyChem sales desk...'
                  : simPhase === 'negotiating'
                  ? 'VyapaarVoice: Proposing Net 30 payment if base rate lowered to $' + polychemUnitPrice + '/T.'
                  : `VyapaarVoice: Offer locked at $${polychemUnitPrice}/Ton. Net 30 payment terms accepted.`}
              </p>
            </div>

            {/* Card 2: Apex Polymers (Best Offer Highlighted) */}
            <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/40 shadow-sm flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-300">Apex Polymers</span>
                  <span className="text-[10px] font-mono text-emerald-400/80">(Timer: {activeCallTimer})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                    {simPhase === 'dialing' ? 'Status: Ringing...' : simPhase === 'negotiating' ? 'Status: Optimal Match' : 'Status: Closed'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 text-xs">
                    Offer: ${apexUnitPrice}/T
                  </span>
                </div>
              </div>
              <p className="text-xs text-emerald-200/90 font-mono bg-[#050508]/90 p-2 rounded-lg border border-emerald-500/20">
                {simPhase === 'dialing'
                  ? 'VyapaarVoice: Outbound voice agent connected to Apex Polymers regional head...'
                  : simPhase === 'negotiating'
                  ? `VyapaarVoice: Pushing for $${apexUnitPrice}/Ton target anchor with 2-day delivery guarantee.`
                  : `VyapaarVoice: Offer locked at $${apexUnitPrice}/Ton. Expedited 2-day delivery guarantee signed.`}
              </p>
            </div>

            {/* Card 3: Global Resin */}
            <div className="p-3.5 rounded-xl bg-[#0d0e13]/80 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
                  <span className="text-xs font-bold text-zinc-300">Global Resin Corp</span>
                  <span className="text-[10px] font-mono text-zinc-400">(Timer: {activeCallTimer})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161820] text-zinc-400 border border-zinc-700">
                    Status: Closed
                  </span>
                  <span className="font-mono font-bold text-zinc-300 text-xs">
                    Offer: ${globalResinUnitPrice}/T
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-mono bg-[#050508]/80 p-2 rounded-lg border border-zinc-800">
                VyapaarVoice: Offer locked at ${globalResinUnitPrice}/Ton. Standard warehouse dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* C. SYNTHESIZED DEAL LEADERBOARD */}
        <div className="flex flex-col gap-3 pt-3 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <span>Synthesized Deal Leaderboard</span>
              {showSyncSuccess && (
                <span className="text-xs font-mono text-emerald-400 font-normal flex items-center gap-1 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ERP PO Dispatched to SAP S/4HANA
                </span>
              )}
            </h3>
            <span className="text-xs text-zinc-400 font-sans italic">
              Sorted by Weighted Score (Price 70% + Lead Time 30%)
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-[#050508]/90">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-[10px] font-mono uppercase text-zinc-400 bg-[#121319]/80">
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Supplier</th>
                  <th className="py-2.5 px-3">Offer Price</th>
                  <th className="py-2.5 px-3">Lead Time</th>
                  <th className="py-2.5 px-3">Weighted Score</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {/* Rank 1: Apex Polymers */}
                <tr className="bg-emerald-500/10 font-medium transition-colors">
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold shadow-emerald-glow">
                      #1
                    </span>
                  </td>
                  <td className="py-3 px-3 font-semibold text-white">Apex Polymers</td>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-400">
                    ${apexUnitPrice} / {commodity.unit}
                  </td>
                  <td className="py-3 px-3 text-zinc-200">2 Days</td>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-400 text-sm">86.9</td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => handleConfirmDeal('apex', 'Apex Polymers')}
                      className="px-3 py-1 rounded-lg bg-[#161820] hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 border border-emerald-500/40 font-mono text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      {confirmedDealId === 'apex' ? 'Deal Finalized' : 'Confirm Deal'}
                    </button>
                  </td>
                </tr>

                {/* Rank 2: PolyChem */}
                <tr className="hover:bg-[#121319]/50 transition-colors">
                  <td className="py-3 px-3 font-mono text-zinc-400 font-bold">#2</td>
                  <td className="py-3 px-3 text-zinc-200">PolyChem Industries</td>
                  <td className="py-3 px-3 font-mono text-zinc-200">
                    ${polychemUnitPrice} / {commodity.unit}
                  </td>
                  <td className="py-3 px-3 text-zinc-400">4 Days</td>
                  <td className="py-3 px-3 font-mono text-zinc-300">71.2</td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => handleConfirmDeal('polychem', 'PolyChem Industries')}
                      className="px-3 py-1 rounded-lg bg-[#161820] hover:bg-zinc-700 text-zinc-400 hover:text-white border border-zinc-700 font-mono text-[11px] transition-all cursor-pointer"
                    >
                      {confirmedDealId === 'polychem' ? 'Deal Finalized' : 'Confirm Deal'}
                    </button>
                  </td>
                </tr>

                {/* Rank 3: Global Resin */}
                <tr className="hover:bg-[#121319]/50 transition-colors">
                  <td className="py-3 px-3 font-mono text-zinc-400 font-bold">#3</td>
                  <td className="py-3 px-3 text-zinc-300">Global Resin Corp</td>
                  <td className="py-3 px-3 font-mono text-zinc-300">
                    ${globalResinUnitPrice} / {commodity.unit}
                  </td>
                  <td className="py-3 px-3 text-zinc-400">6 Days</td>
                  <td className="py-3 px-3 font-mono text-zinc-400">59.6</td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => handleConfirmDeal('global', 'Global Resin Corp')}
                      className="px-3 py-1 rounded-lg bg-[#161820] hover:bg-zinc-700 text-zinc-400 hover:text-white border border-zinc-700 font-mono text-[11px] transition-all cursor-pointer"
                    >
                      {confirmedDealId === 'global' ? 'Deal Finalized' : 'Confirm Deal'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* D. CONFIRMED TRANSACTION AUDIT CARD */}
        <div className="rounded-xl bg-[#0d0e13]/90 border border-emerald-500/40 p-4 shadow-emerald-glow flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Confirmed Transaction Audit
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
              VERIFIED
            </span>
          </div>

          <p className="text-sm text-zinc-200">
            Final Agreement with <span className="font-bold text-white">Apex Polymers</span> at{' '}
            <span className="font-bold text-emerald-400">${apexUnitPrice}/{commodity.unit}</span> (2-Day Priority Delivery).
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-400">Total Contract Value:</span>
              <span className="font-mono font-bold text-white">${totalContractValue.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-400">Negotiated Savings vs Walk-away:</span>
              <span className="font-mono font-bold text-emerald-400">${negotiatedSavings.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-2">
            <span>PROOF-HASH: 0x7005fe8602A264BF</span>
            <button
              onClick={() => setAudioModalOpen(true)}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>VOICE-LOG: AUDIO-BLITZ-APEX-VERIFIED [Play Audio]</span>
            </button>
          </div>
        </div>

      </div>

      {/* Proof Audio Player Modal */}
      <ProofAudioModal
        isOpen={audioModalOpen}
        onClose={() => setAudioModalOpen(false)}
        supplierName="Apex Polymers"
        agreedPrice={apexUnitPrice}
        unit={commodity.unit}
        leadTime="2-Day Priority"
      />
    </section>
  );
};
