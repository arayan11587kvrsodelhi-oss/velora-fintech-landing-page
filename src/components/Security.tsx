import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { ShieldCheck, Lock, Cpu, Eye, Activity, Fingerprint } from 'lucide-react';

export const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Protection',
      description: '256-bit encryption protocols secure every transaction payload in transit and at rest.',
    },
    {
      icon: Fingerprint,
      title: 'Secure Authentication',
      description: 'Biometric multi-factor authentication with hardware security keys and session tokens.',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Instant anomaly detection engines analyze account activity for automated threat isolation.',
    },
    {
      icon: Eye,
      title: 'Privacy-First Architecture',
      description: 'Zero third-party telemetry or ad-tracking. Your financial data is strictly confidential.',
    },
  ];

  return (
    <section id="security" className="py-24 md:py-32 relative overflow-hidden bg-velora-bg">
      {/* Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Bank-Grade Security"
          title="Your money deserves"
          highlightText="serious protection."
          subtitle="Engineered with defense-in-depth architecture to keep your capital and private identity safe round the clock."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Glowing Security Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-velora-surface via-slate-900 to-velora-surface-light border border-velora-border/80 p-8 flex flex-col items-center justify-center shadow-2xl shadow-emerald-950/30 overflow-hidden">
              {/* Radar Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,163,0.12)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-emerald-500/20 animate-ping opacity-25 pointer-events-none" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-velora-accent/30 pointer-events-none" />
              <div className="absolute w-[40%] h-[40%] rounded-full border border-emerald-500/20 pointer-events-none" />

              {/* Central Glowing Shield Icon */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-28 h-28 rounded-3xl bg-gradient-to-tr from-emerald-500 to-velora-accent p-0.5 shadow-2xl shadow-velora-accent/40 flex items-center justify-center"
              >
                <div className="w-full h-full bg-velora-bg rounded-[22px] flex items-center justify-center">
                  <ShieldCheck className="w-14 h-14 text-velora-accent" />
                </div>
              </motion.div>

              {/* Status Bar Pills */}
              <div className="mt-8 z-10 space-y-2 text-center w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real-Time Fraud Guard Active</span>
                </div>
                <div className="text-[11px] text-velora-muted font-mono">
                  AES-256 GCM • Hardware Enclave
                </div>
              </div>

              {/* Corner Live Status Indicators */}
              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/80 border border-velora-border text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-velora-accent" />
                <span>SSL/TLS 1.3</span>
              </div>
              <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/80 border border-velora-border text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-emerald-400" />
                <span>Zero Trust Engine</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Security Features */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="h-full p-6 border-velora-border hover:border-emerald-500/40 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-sm text-velora-muted leading-relaxed">{feat.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
