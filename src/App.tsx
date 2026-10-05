/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { StickyNav } from './components/StickyNav';
import { HeroSection } from './components/HeroSection';
import { SimulatorSection } from './components/SimulatorSection';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { FourStepCycle } from './components/FourStepCycle';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { GovernanceSection } from './components/GovernanceSection';
import { ExecutiveBriefingSection } from './components/ExecutiveBriefingSection';
import { ExecutiveFooter } from './components/ExecutiveFooter';
import { ProofAudioModal } from './components/ProofAudioModal';

export default function App() {
  const [blitzTriggerCount, setBlitzTriggerCount] = useState(0);
  const [briefingModalOpen, setBriefingModalOpen] = useState(false);
  const [sampleAudioOpen, setSampleAudioOpen] = useState(false);

  const handleLaunchBlitz = () => {
    setBlitzTriggerCount((prev) => prev + 1);
    const element = document.getElementById('simulator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCalculator = () => {
    const element = document.getElementById('roi-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-zinc-100 relative selection:bg-emerald-500/30 selection:text-white">
      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Ambient Light Mesh Background - Zero Blue Carbon Obsidian */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="mesh-gradient absolute inset-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-20"></div>
      </div>

      {/* Sticky Executive Navigation */}
      <StickyNav
        onLaunchBlitz={handleLaunchBlitz}
        onOpenBriefing={() => setBriefingModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 w-full pt-24 pb-16">
        {/* Section 1: Hero Section */}
        <HeroSection
          onStartBlitz={handleLaunchBlitz}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Section 2: Interactive Sourcing Matrix & Live Voice Blitz Simulator */}
        <SimulatorSection blitzTriggerCount={blitzTriggerCount} />

        {/* Section 3: Strategic Enterprise Advantages (Bento Grid) */}
        <CapabilitiesBento onOpenAudioProof={() => setSampleAudioOpen(true)} />

        {/* Section 4: The 4-Step Sourcing Cycle */}
        <FourStepCycle />

        {/* Section 5: Procurement ROI & Margin Calculator */}
        <RoiCalculatorSection />

        {/* Section 6: Governance & ERP Integration */}
        <GovernanceSection />

        {/* Section 7: Executive Briefing CTA */}
        <ExecutiveBriefingSection
          onScrollToSimulator={handleLaunchBlitz}
          isOpenModal={briefingModalOpen}
          onCloseModal={() => setBriefingModalOpen(false)}
          onOpenModal={() => setBriefingModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <ExecutiveFooter />

      {/* Global Sample Audio Proof Modal */}
      <ProofAudioModal
        isOpen={sampleAudioOpen}
        onClose={() => setSampleAudioOpen(false)}
        supplierName="Apex Polymers Corp"
        agreedPrice={1138}
        unit="Ton"
        leadTime="2-Day Priority Delivery"
      />
    </div>
  );
}
