import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import {
  Wifi,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';

export const VirtualCard = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showCvv, setShowCvv] = useState(false);
  const [copied, setCopied] = useState(false);

  // Parallax Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopyCard = () => {
    navigator.clipboard.writeText('4829 8812 3901 4829');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-velora-bg/80 border-t border-velora-border/40">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-velora-accent/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Metal Virtual Card"
          title="Physical elegance."
          highlightText="Digital velocity."
          subtitle="Issue instant virtual metallic cards with dynamic controls, multi-currency routing, and hardware-level encryption."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive 3D Parallax Metallic Virtual Card */}
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center perspective-1000 py-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-md aspect-[1.586/1] rounded-3xl p-6 sm:p-8 cursor-grab active:cursor-grabbing shadow-2xl transition-all duration-300 select-none group"
            >
              {/* Metallic Card Surface & Shimmer */}
              <div
                className={`absolute inset-0 rounded-3xl border transition-colors duration-500 ${isFrozen
                    ? 'bg-slate-900/90 border-slate-700/80 shadow-slate-900/50'
                    : 'bg-gradient-to-tr from-slate-950 via-velora-surface-light to-slate-900 border-velora-accent/40 shadow-velora-accent/20'
                  }`}
              />

              {/* Metallic Grain & Gradient Highlight Lines */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(0,229,163,0.18),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)] pointer-events-none" />

              {/* Frozen Overlay Badge */}
              {isFrozen && (
                <div className="absolute inset-0 rounded-3xl bg-slate-950/75 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-2">
                  <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300">
                    <Lock className="w-8 h-8 text-amber-400" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-amber-400 uppercase font-mono">
                    Card Temporarily Frozen
                  </span>
                </div>
              )}

              {/* Card Content Container */}
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                {/* Top Row: Brand & Contactless Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-velora-accent to-velora-accent-teal p-0.5 flex items-center justify-center">
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-velora-accent" />
                      </div>
                    </div>
                    <span className="text-xl font-black tracking-widest text-white font-mono">
                      VELORA
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 border border-white/10 uppercase tracking-widest">
                      Black Metal
                    </span>
                    <Wifi className="w-6 h-6 text-slate-300 rotate-90" />
                  </div>
                </div>

                {/* EMV Chip & Contactless Visual */}
                <div className="my-2 flex items-center justify-between">
                  <div className="w-12 h-9 rounded-lg bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-100 p-0.5 border border-amber-300/40 shadow-inner flex flex-col justify-between overflow-hidden">
                    <div className="w-full h-1/2 border-b border-amber-600/30 grid grid-cols-2" />
                    <div className="w-full h-1/2 grid grid-cols-3" />
                  </div>
                  <div className="text-xs font-mono text-velora-accent font-semibold tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>NFC Active</span>
                  </div>
                </div>

                {/* Card Number Row */}
                <div>
                  <div className="text-xs text-velora-muted font-mono uppercase tracking-widest mb-1">
                    Virtual Card Number
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold tracking-[0.22em] font-mono text-white flex items-center justify-between">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span className="text-velora-accent">4829</span>
                  </div>
                </div>

                {/* Card Holder & Expiry Row */}
                <div className="flex items-end justify-between pt-2">
                  <div>
                    <div className="text-[10px] text-velora-muted font-mono uppercase tracking-wider">
                      Card Holder
                    </div>
                    <div className="text-sm font-bold font-mono tracking-widest text-slate-100">
                      ARYAN SHARMA
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div>
                      <div className="text-[10px] text-velora-muted font-mono uppercase tracking-wider">
                        Expires
                      </div>
                      <div className="text-sm font-bold font-mono text-slate-100">
                        09/29
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-velora-muted font-mono uppercase tracking-wider">
                        CVV
                      </div>
                      <div className="text-sm font-bold font-mono text-velora-accent">
                        {showCvv ? '842' : '•••'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Card Controls & Features */}
          <div className="lg:col-span-6 space-y-6">
            <GlassCard className="p-6 md:p-8 border-velora-border">
              <h3 className="text-xl font-bold text-white mb-2">Live Card Controls</h3>
              <p className="text-sm text-velora-muted mb-6">
                Manage your virtual card state instantly with real-time hardware toggles.
              </p>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  variant={isFrozen ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setIsFrozen(!isFrozen)}
                  icon={isFrozen ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  {isFrozen ? 'Unfreeze' : 'Freeze Card'}
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowCvv(!showCvv)}
                  icon={showCvv ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  {showCvv ? 'Hide CVV' : 'Reveal CVV'}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyCard}
                  icon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  {copied ? 'Copied!' : 'Copy Number'}
                </Button>
              </div>
            </GlassCard>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-velora-surface/60 border border-velora-border flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-velora-accent/10 border border-velora-accent/20 text-velora-accent shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Disposable Numbers</div>
                  <div className="text-xs text-velora-muted mt-1 leading-relaxed">
                    Auto-generate one-time virtual numbers for safe online merchant trials.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-velora-surface/60 border border-velora-border flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Instant Apple/Google Pay</div>
                  <div className="text-xs text-velora-muted mt-1 leading-relaxed">
                    Push your card to digital wallets in under 2 seconds without physical waiting.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
