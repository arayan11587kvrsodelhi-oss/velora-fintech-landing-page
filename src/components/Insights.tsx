import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import {
  Sparkles,
  TrendingDown,
  Target,
  Zap,
  Lightbulb,
} from 'lucide-react';

export const Insights = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-velora-bg/60 border-t border-velora-border/40">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-velora-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AI Financial Intelligence"
          title="Intelligent insights."
          highlightText="Zero guesswork."
          subtitle="VELORA analyzes thousands of signal data points to give you actionable financial advice without complex spreadsheets."
        />

        {/* Editorial Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Editorial Insight Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <GlassCard
              glow
              className="h-full p-8 md:p-10 flex flex-col justify-between border-velora-accent/20 bg-gradient-to-br from-velora-surface/90 via-velora-surface/70 to-velora-surface-light/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-velora-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-velora-accent/10 border border-velora-accent/30 text-velora-accent text-xs font-bold font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MONTHLY AI SUMMARY</span>
                  </div>
                  <span className="text-xs font-mono text-velora-muted">Demo UI • Active Sync</span>
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4" /> Optimization Milestone
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    "You spent <span className="text-accent-gradient">18% less</span> this month."
                  </h3>
                  <p className="text-lg text-velora-muted leading-relaxed font-normal">
                    You're currently <strong className="text-white">₹8,400 ahead</strong> of your monthly savings target. Keep going to unlock your Q3 vault milestone early.
                  </p>
                </div>
              </div>

              {/* Progress Visual Indicators */}
              <div className="mt-10 pt-8 border-t border-velora-border/60 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-velora-border">
                  <div className="flex items-center justify-between text-xs text-velora-muted mb-2">
                    <span>Monthly Target Achieved</span>
                    <span className="text-velora-accent font-mono font-bold">118%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-velora-accent to-velora-accent-teal"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-velora-border">
                  <div className="flex items-center justify-between text-xs text-velora-muted mb-2">
                    <span>Forecasted Annual Surplus</span>
                    <span className="text-emerald-400 font-mono font-bold">+₹1,00,800</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                      className="h-full bg-emerald-400"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: AI Insight Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <GlassCard className="p-6 border-velora-border hover:border-velora-accent/40 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-velora-accent/10 border border-velora-accent/20 text-velora-accent shrink-0 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Subscription Audit</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">Actionable</span>
                    </div>
                    <p className="text-sm text-velora-muted leading-relaxed">
                      2 unused cloud subscriptions detected totaling <strong className="text-white font-mono">₹1,850/mo</strong>. Auto-cancel recommendations available.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="p-6 border-velora-border hover:border-velora-accent/40 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Smart Re-Investment</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">Optimized</span>
                    </div>
                    <p className="text-sm text-velora-muted leading-relaxed">
                      Re-routing <strong className="text-white font-mono">₹5,000</strong> from cash reserves into high-yield vault will yield <strong className="text-emerald-400 font-mono">+₹4,200</strong> in 12 months.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <GlassCard className="p-6 border-velora-border hover:border-velora-accent/40 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Dynamic Cash Flow Guard</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">Live</span>
                    </div>
                    <p className="text-sm text-velora-muted leading-relaxed">
                      Predictive liquidity check confirms zero overdraft risk for upcoming fixed utility renewals.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
