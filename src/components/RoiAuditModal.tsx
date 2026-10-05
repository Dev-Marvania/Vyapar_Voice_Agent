import React, { useState } from 'react';
import { ShieldCheck, Download, X, CheckCircle } from 'lucide-react';

interface RoiAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  spendMillion: number;
  callsMonth: number;
  annualSavings: number;
  totalHours: number;
  roiMultiple: string;
}

export const RoiAuditModal: React.FC<RoiAuditModalProps> = ({
  isOpen,
  onClose,
  spendMillion,
  callsMonth,
  annualSavings,
  totalHours,
  roiMultiple,
}) => {
  const [companyName, setCompanyName] = useState('Global Commodity Trading House');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const report = `=====================================================
VYAPAARVOICE AI - EXECUTIVE PROCUREMENT ROI AUDIT
=====================================================
Target Organization: ${companyName}
Date of Calibration: ${new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}
Audit Grade: Institutional Board-Level Assessment

FINANCIAL JUSTIFICATION SUMMARY:
-----------------------------------------------------
1. Annual Baseline Procurement Volume: $${spendMillion}M / Year
2. Monthly Outbound Negotiations:     ${callsMonth.toLocaleString()} Calls / Month
3. Benchmark Alpha Capture Rate:      2.5% Net Margin Yield
4. Projected Annual EBITDA Addition:  +$${Math.round(annualSavings).toLocaleString('en-US')}
5. Sourcing Cycle Hours Reallocated:  +${totalHours.toLocaleString('en-US')} Hours / Year
6. Full-Time Trader Equivalency:      ~${(totalHours / 1920).toFixed(1)} Senior Commodity Buyers
7. Software Cost ROI Multiple:        ${roiMultiple}

GOVERNANCE & AUDIT ASSURANCES:
-----------------------------------------------------
- Zero-Hallucination Walk-away Price Containment ($P_W$)
- SOC-2 Type II Certified Voice Encryption (AES-256)
- 10-Second Verbal Handshake Cryptographic Audio Proof
- Direct Bi-Directional Synchronization to SAP / Oracle ERP

Sign-off Authority: VyapaarVoice AI Corporate Treasury
=====================================================`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VyapaarVoice-ROI-Audit-${spendMillion}M.txt`;
    a.click();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#0a0b0f] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Executive Sourcing ROI Audit
              </h3>
              <p className="text-xs text-zinc-400">Board-level financial justification model</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Company Identifier */}
        <div className="my-4">
          <label className="block text-xs font-mono text-zinc-400 mb-1">
            Enterprise Desk / Trading Entity
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-3 py-2 bg-[#050508] border border-zinc-700 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Audit Metrics Breakdown */}
        <div className="space-y-2.5 my-4 p-4 bg-[#050508] rounded-xl border border-zinc-800 text-xs font-mono">
          <div className="flex justify-between items-center py-1 border-b border-zinc-800">
            <span className="text-zinc-400">Annual Procurement Spend:</span>
            <span className="text-white font-bold">${spendMillion}M / Year</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-zinc-800">
            <span className="text-zinc-400">Monthly Sourcing Calls:</span>
            <span className="text-white font-bold">{callsMonth.toLocaleString()} Calls / Mo</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-zinc-800">
            <span className="text-zinc-400">Target Net Savings (2.5%):</span>
            <span className="text-emerald-400 font-bold">+${Math.round(annualSavings).toLocaleString('en-US')}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-zinc-800">
            <span className="text-zinc-400">Trader Capacity Reclaimed:</span>
            <span className="text-white font-bold">+{totalHours.toLocaleString('en-US')} Hours (~{(totalHours / 1920).toFixed(1)} FTEs)</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-zinc-400">Platform ROI Multiple:</span>
            <span className="text-amber-400 font-bold">{roiMultiple}</span>
          </div>
        </div>

        {/* Download Action */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <span className="text-[11px] font-mono text-zinc-500">
            Calibrated on verified commodity indexes
          </span>
          <button
            onClick={handleDownload}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95"
          >
            {downloaded ? (
              <>
                <CheckCircle className="w-4 h-4 text-slate-950" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Executive Briefing Audit</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
