// Web Audio API synthesizer for realistic enterprise telephony & deal proof audition

class AudioEngine {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Telephony dial tone burst
  playDialTone() {
    const ctx = this.initCtx();
    if (!ctx) return;
    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.frequency.value = 350;
      osc2.frequency.value = 440;

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.35);
      osc2.stop(ctx.currentTime + 0.35);
    } catch {
      // AudioContext policy fallback
    }
  }

  // Affirmative deal locked chime
  playDealConfirmed() {
    const ctx = this.initCtx();
    if (!ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.45);
      });
    } catch {
      // fallback
    }
  }

  // Realistic human verbal cadence simulation for proof snippet
  playProofSnippet(onProgress?: (progress: number) => void, onComplete?: () => void) {
    const ctx = this.initCtx();
    if (!ctx) {
      if (onComplete) onComplete();
      return () => {};
    }

    let isCancelled = false;
    const duration = 10; // 10 seconds proof audio
    const startTime = ctx.currentTime;

    // Generate modulated harmonic vocal formants simulation
    const carrier = ctx.createOscillator();
    const modulator = ctx.createOscillator();
    const modGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    const masterGain = ctx.createGain();

    carrier.type = 'sawtooth';
    carrier.frequency.setValueAtTime(140, startTime);

    modulator.type = 'sine';
    modulator.frequency.setValueAtTime(4.5, startTime); // Speech syllabic rate ~4.5Hz
    modGain.gain.setValueAtTime(25, startTime);

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, startTime);
    filter.Q.setValueAtTime(3.5, startTime);

    // Formant movements matching the dialogue
    filter.frequency.linearRampToValueAtTime(1400, startTime + 2.5);
    filter.frequency.linearRampToValueAtTime(650, startTime + 5.0);
    filter.frequency.linearRampToValueAtTime(1200, startTime + 7.5);
    filter.frequency.linearRampToValueAtTime(900, startTime + 10.0);

    masterGain.gain.setValueAtTime(0.05, startTime);
    masterGain.gain.linearRampToValueAtTime(0.05, startTime + 9.5);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 10.0);

    carrier.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    carrier.start(startTime);
    modulator.start(startTime);
    carrier.stop(startTime + duration);
    modulator.stop(startTime + duration);

    // Progress interval
    const interval = setInterval(() => {
      if (isCancelled || !ctx) {
        clearInterval(interval);
        return;
      }
      const elapsed = ctx.currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      if (onProgress) onProgress(progress);
      if (progress >= 1) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 100);

    return () => {
      isCancelled = true;
      clearInterval(interval);
      try {
        carrier.stop();
        modulator.stop();
      } catch {
        // already stopped
      }
    };
  }
}

export const soundEngine = new AudioEngine();
