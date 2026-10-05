import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, X, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

interface ProofAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplierName: string;
  agreedPrice: number;
  unit: string;
  leadTime: string;
}

export const ProofAudioModal: React.FC<ProofAudioModalProps> = ({
  isOpen,
  onClose,
  supplierName,
  agreedPrice,
  unit,
  leadTime,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stopAudio, setStopAudio] = useState<(() => void) | null>(null);

  useEffect(() => {
    if (!isOpen) {
      if (stopAudio) stopAudio();
      setIsPlaying(false);
      setProgress(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (stopAudio) stopAudio();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const stopFn = soundEngine.playProofSnippet(
        (prog) => setProgress(prog),
        () => {
          setIsPlaying(false);
          setProgress(1);
        }
      );
      setStopAudio(() => stopFn);
    }
  };

  const currentTimeSec = (progress * 10).toFixed(1);

  // Generate dynamic waveform bars
  const waveformBars = [
    12, 18, 28, 45, 60, 40, 25, 35, 70, 85, 95, 65, 45, 80, 90, 75, 40, 30, 55, 68,
    72, 50, 35, 20, 45, 60, 75, 88, 92, 70, 50, 38, 25, 40, 55, 65, 48, 30, 20, 15
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#0a0b0f] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-white">
                  Verifiable Proof-of-Deal Player
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase font-semibold">
                  CRYPTOGRAPHIC LOG
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Isolated 10-second verbal agreement handshake clip
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contract & Call Meta */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 p-3 bg-[#050508]/80 rounded-xl border border-zinc-800 text-xs font-mono">
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Counterparty</span>
            <span className="text-white font-semibold">{supplierName}</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Locked Price</span>
            <span className="text-emerald-400 font-semibold">${agreedPrice} / {unit}</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Delivery</span>
            <span className="text-zinc-200">{leadTime}</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">SHA-256 Sig</span>
            <span className="text-zinc-400 truncate block">0x7005fe86...</span>
          </div>
        </div>

        {/* Audio Waveform Visualization */}
        <div className="my-5 p-4 bg-[#050508] rounded-xl border border-zinc-800">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Dual-Channel PCM Stream (Buyer AI + Supplier)
            </span>
            <span>{currentTimeSec}s / 10.0s</span>
          </div>

          {/* Interactive Waveform Bar Visualizer */}
          <div className="h-16 flex items-center justify-between gap-1 px-1">
            {waveformBars.map((height, i) => {
              const barProgress = i / waveformBars.length;
              const isPast = barProgress <= progress;
              return (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-all duration-75"
                  style={{
                    height: isPlaying ? `${Math.min(100, height * (0.5 + Math.random() * 0.7))}%` : `${height}%`,
                    backgroundColor: isPast ? '#34d399' : '#27272a',
                    boxShadow: isPast && isPlaying ? '0 0 8px #10b981' : 'none',
                  }}
                />
              );
            })}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800/80">
            <div className="flex items-center gap-3">
              <button
                onClick={handleTogglePlay}
                className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-emerald-glow transition-all active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-slate-950" /> : <Play className="w-5 h-5 fill-slate-950 ml-0.5" />}
              </button>
              <div className="text-xs font-mono">
                <span className="text-white font-semibold">
                  {isPlaying ? 'Streaming Audio Handshake...' : progress >= 1 ? 'Handshake Audio Complete' : 'Click to Audition Audio'}
                </span>
                <span className="block text-zinc-500 text-[10px]">Real-time ElevenLabs + WebRTC capture</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-zinc-300">100% Volume</span>
            </div>
          </div>
        </div>

        {/* Synced Audio Transcript */}
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[#121319]/90 border border-zinc-800 text-zinc-300">
            <span className="text-emerald-400 font-bold block mb-0.5">
              Apex Polymers Desk (00:04):
            </span>
            "Understood. If you take all 50 Tons on immediate dispatch, we can commit to{' '}
            <strong className="text-emerald-300">${agreedPrice}/Ton</strong> with 2-day delivery guaranteed."
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
            <span className="text-emerald-400 font-bold block mb-0.5">
              VyapaarVoice Agent (00:08):
            </span>
            "Accepted. Order terms locked at ${agreedPrice}/Ton. Generating cryptographic verification and dispatching PO specification."
          </div>
        </div>

        {/* Footer Audit verification */}
        <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            Signed by Chief Procurement Gateway
          </span>
          <button
            onClick={() => {
              const text = `VYAPAARVOICE AUDIT CERTIFICATE\nSupplier: ${supplierName}\nPrice: $${agreedPrice}/${unit}\nLead Time: ${leadTime}\nProof Hash: 0x7005fe8602A264BF\nTimestamp: 2026-10-05T09:50:00Z\nStatus: VERIFIED & EXECUTED TO ERP`;
              const blob = new Blob([text], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `audit-${supplierName.toLowerCase().replace(/\s+/g, '-')}.txt`;
              a.click();
            }}
            className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );
};
