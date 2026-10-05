import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, FileCode, CheckCircle2, X } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  const [selectedErp, setSelectedErp] = useState<string | null>(null);

  const pillars = [
    {
      icon: 'verified_user',
      title: 'SOC-2 Type II Certified',
      desc: 'Continuous 3rd-party audited controls across all voice synthesis, storage, and processing clusters.',
      color: 'text-emerald-400',
    },
    {
      icon: 'gavel',
      title: 'Two-Party Consent Automation',
      desc: 'Jurisdiction-aware legal consent prompts dynamically injected to adhere to all US & cross-border telephonic laws.',
      color: 'text-amber-400',
    },
    {
      icon: 'lock',
      title: 'AES-256 & TLS 1.3 Transport',
      desc: 'Full end-to-end cryptographic encryption for all real-time voice packets and stored executive transcripts.',
      color: 'text-amber-400',
    },
    {
      icon: 'history_edu',
      title: 'Immutable Audit Trail',
      desc: 'Cryptographically signed logs linking verbal confirmation audio snippets directly to ERP PO records.',
      color: 'text-emerald-400',
    },
  ];

  const erpSystems = [
    { name: 'SAP', version: 'S/4HANA', api: 'OData v4 PO Interface', endpoint: '/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV' },
    { name: 'ORACLE', version: 'Fusion SCM', api: 'REST Procurement Gateway', endpoint: '/fscmRestApi/resources/11.13.18.05/purchaseOrders' },
    { name: 'WORKDAY', version: 'Procure', api: 'Enterprise Interface Builder', endpoint: '/api/v1/workday/procurement/contracts' },
    { name: 'NETSUITE', version: 'SuiteTalk', api: 'SuiteTalk REST Web Services', endpoint: '/services/rest/record/v1/purchaseOrder' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="governance">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Institutional Infrastructure
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Board-Level Governance &amp; Seamless ERP Integration
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Engineered for Fortune 500 security standards, lawful two-party recording compliance, and
          native ERP procurement pipelines.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {pillars.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -2 }}
            className="bg-[#0d0e13]/80 rounded-xl p-4 border border-white/10 hover:border-zinc-700 transition-all flex flex-col gap-1.5"
          >
            <span className={`material-symbols-outlined text-[24px] ${item.color}`}>
              {item.icon}
            </span>
            <h4 className="font-display text-sm font-bold text-white">{item.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Certified ERP Connectors Strip */}
      <div className="bg-[#07080c]/90 rounded-2xl p-5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
            Certified Bi-Directional Connectors
          </span>
          <span className="text-sm font-bold text-white">
            Direct synchronization to your existing procurement workflows:
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
          {erpSystems.map((erp) => (
            <button
              key={erp.name}
              onClick={() => setSelectedErp(erp.name)}
              className="px-4 py-2.5 rounded-xl bg-[#161820] hover:bg-[#1e202a] border border-zinc-700/60 flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              <span className="font-display font-extrabold text-white text-xs group-hover:text-emerald-400 transition-colors">
                {erp.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">{erp.version}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ERP Connector Modal */}
      {selectedErp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#0a0b0f] border border-emerald-500/40 rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <FileCode className="w-5 h-5 text-emerald-400" />
                <h3 className="font-display text-base font-bold text-white">
                  {selectedErp} Connector Telemetry
                </h3>
              </div>
              <button
                onClick={() => setSelectedErp(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 text-xs font-mono bg-[#050508] p-4 rounded-xl border border-zinc-800 text-zinc-300 space-y-2">
              <div className="text-emerald-400 font-semibold">// Live Bi-Directional Webhook Payload</div>
              <div>
                <span className="text-zinc-500">POST</span>{' '}
                <span className="text-white">
                  {erpSystems.find((e) => e.name === selectedErp)?.endpoint}
                </span>
              </div>
              <pre className="text-[11px] text-zinc-400 pt-2 border-t border-zinc-800 overflow-x-auto">
{`{
  "contract_id": "VV-2026-APEX-092",
  "supplier": "Apex Polymers Inc",
  "commodity": "Polypropylene Grade A",
  "quantity": 50,
  "unit_price": 1138.00,
  "currency": "USD",
  "proof_hash": "0x7005fe8602A264BF",
  "audio_proof_status": "VERIFIED_EXECUTIVE",
  "auto_dispatch_po": true
}`}
              </pre>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedErp(null)}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
