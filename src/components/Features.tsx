import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { PieChart, PiggyBank, Zap, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { spendingCategories } from '../data/fintechData';

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent Lights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-velora-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-velora-accent-teal/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Capabilities"
          title="Everything you need."
          highlightText="Nothing you don't."
          subtitle="Designed with precision for modern high-performers who demand speed, clarity, and absolute security over their wealth."
        />

        {/* Features Grid - Asymmetric Distinct Card Designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Smart Spending (Interactive Category Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 border-velora-border hover:border-velora-accent/40 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-velora-accent/10 border border-velora-accent/30 flex items-center justify-center text-velora-accent group-hover:scale-110 transition-transform">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-velora-accent border border-velora-accent/20">
                    Real-time
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Smart Spending</h3>
                <p className="text-velora-muted leading-relaxed mb-6">
                  Understand where your money goes with instant categorize tags, automated receipts, and real-time spending insights.
                </p>
              </div>

              {/* Unique Visual for Card 1 */}
              <div className="mt-4 p-5 rounded-xl bg-velora-surface-light/80 border border-velora-border/80 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Top Categories</span>
                  <span className="text-velora-accent">Active Sync</span>
                </div>
                {spendingCategories.slice(0, 3).map((cat) => (
                  <div key={cat.name} className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>{cat.name}</span>
                      <span className="font-mono text-white font-medium">₹{cat.amount.toLocaleString('en-IN')} ({cat.percentage}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Automated Savings (Goal Gauge Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 border-velora-border hover:border-velora-accent/40 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <PiggyBank className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/20">
                    Auto-Stash
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Automated Savings</h3>
                <p className="text-velora-muted leading-relaxed mb-6">
                  Set dynamic goals and let VELORA’s automated round-ups and smart rules build better saving habits effortlessly.
                </p>
              </div>

              {/* Unique Visual for Card 2 */}
              <div className="mt-4 p-5 rounded-xl bg-velora-surface-light/80 border border-velora-border/80">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs text-velora-muted">Tokyo Travel Vault</div>
                    <div className="text-xl font-extrabold text-white font-mono">₹4,10,000 / ₹5,00,000</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-emerald-400 font-mono">82%</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '82%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-velora-accent rounded-full"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-velora-muted">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Round-ups active (+₹420 today)
                  </span>
                  <span className="text-velora-accent font-semibold hover:underline cursor-pointer">Adjust Rule</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Instant Transfers (Lightning Timeline Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 border-velora-border hover:border-velora-accent/40 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-cyan-400 border border-cyan-500/20">
                    0.1s Settlement
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Instant Transfers</h3>
                <p className="text-velora-muted leading-relaxed mb-6">
                  Move money globally and locally with zero friction, instant notifications, and bank-grade encryption rails.
                </p>
              </div>

              {/* Unique Visual for Card 3 */}
              <div className="mt-4 p-5 rounded-xl bg-velora-surface-light/80 border border-velora-border/80">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-velora-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                      AS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Aryan Sharma</div>
                      <div className="text-[10px] text-slate-400">UPI / IMPS Rail Active</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-emerald-400 font-mono">₹85,000.00</div>
                    <div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Settled
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 4: Financial Intelligence (AI Insight Widget Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 border-velora-border hover:border-velora-accent/40 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-purple-400 border border-purple-500/20">
                    VELORA AI
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Financial Intelligence</h3>
                <p className="text-velora-muted leading-relaxed mb-6">
                  Turn raw transaction streams into actionable, high-value financial recommendations and budget optimizations.
                </p>
              </div>

              {/* Unique Visual for Card 4 */}
              <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-purple-950/40 to-velora-surface-light border border-purple-500/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-200">Smart Alert</div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      "You spent 18% less on subscriptions this month. You're ₹8,400 ahead of your goal."
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-velora-accent cursor-pointer hover:underline">
                      <span>Apply recommended re-investment</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
