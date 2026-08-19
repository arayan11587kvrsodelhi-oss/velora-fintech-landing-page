import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CreditCard, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { AnimatedNumber } from './ui/AnimatedNumber';
import { heroStats } from '../data/fintechData';

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center">
      {/* Background Radial Lights & Grid Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-velora-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-velora-accent-teal/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Text & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 text-center lg:text-left z-10"
          >
            {/* Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-velora-surface border border-velora-accent/30 text-xs font-medium text-slate-200 shadow-inner mb-6">
              <span className="flex h-2 w-2 rounded-full bg-velora-accent animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-velora-accent" />
              <span>Next-Gen Intelligent Banking Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Your money.{' '}
              <span className="text-accent-gradient block sm:inline">Your momentum.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="mt-6 text-lg sm:text-xl text-velora-muted font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              One intelligent platform to spend smarter, save effortlessly, and stay in total control of your financial life with real-time AI guidance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto glow-accent">
                Get Started Free
              </Button>
              <Button size="lg" variant="secondary" icon={<ArrowUpRight className="w-5 h-5 text-velora-accent" />} className="w-full sm:w-auto">
                Explore VELORA
              </Button>
            </motion.div>

            {/* Social Trust Highlights */}
            <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-velora-border/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-velora-muted font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-velora-accent" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-velora-accent" />
                <span>256-Bit Bank Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-velora-accent" />
                <span>Instant Setup</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Floating Financial Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Main Floating Dashboard Card */}
              <GlassCard glow className="relative z-20 shadow-2xl shadow-black/80 border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-2xl">

                {/* Header Row */}
                <div className="flex items-center justify-between pb-6 border-b border-velora-border">
                  <div>
                    <span className="text-xs font-semibold text-velora-muted uppercase tracking-wider">Total Portfolio Balance</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 flex items-baseline gap-1">
                      <AnimatedNumber value={heroStats.totalBalance} prefix="₹" decimals={2} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-velora-accent/10 border border-velora-accent/30 text-velora-accent text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+14.8% this month</span>
                  </div>
                </div>

                {/* Middle Grid Stats */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="p-4 rounded-xl bg-velora-surface-light/60 border border-velora-border">
                    <span className="text-xs text-velora-muted">Monthly Spending</span>
                    <div className="text-lg font-bold text-white mt-1">
                      <AnimatedNumber value={heroStats.monthlySpending} prefix="₹" decimals={2} />
                    </div>
                    <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-velora-accent h-full rounded-full" style={{ width: '42%' }} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-velora-surface-light/60 border border-velora-border">
                    <span className="text-xs text-velora-muted">Savings Goal</span>
                    <div className="text-lg font-bold text-white mt-1">
                      <AnimatedNumber value={heroStats.currentSavings} prefix="₹" decimals={0} />
                    </div>
                    <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-velora-accent-teal h-full rounded-full" style={{ width: `${heroStats.savingsProgress}%` }} />
                    </div>
                  </div>
                </div>

                {/* Mini Graph Sparkline Visual */}
                <div className="pt-2">
                  <div className="flex justify-between items-center text-xs text-velora-muted mb-2">
                    <span>6-Month Momentum Trend</span>
                    <span className="text-velora-accent font-semibold">Active Vault</span>
                  </div>
                  <div className="h-16 flex items-end gap-2 px-1">
                    {[35, 48, 40, 62, 55, 85, 78, 92].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                        className={`flex-1 rounded-t-sm ${i === 7 ? 'bg-gradient-to-t from-velora-accent to-velora-accent-teal shadow-lg shadow-velora-accent/50' : 'bg-slate-700/60'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Floating Metallic Card Badge (Bottom Floating Visual) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -left-4 sm:-left-8 z-30 hidden sm:block w-64 p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-velora-surface/90 border border-velora-accent/30 shadow-2xl backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-velora-accent/20 border border-velora-accent/40 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-velora-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">VELORA Metal</div>
                      <div className="text-[10px] text-velora-muted">Virtual Debit</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-velora-accent font-semibold">•••• 4829</span>
                </div>
                <div className="flex justify-between items-end text-[10px] text-slate-400 font-mono">
                  <span>ARYAN SHARMA</span>
                  <span>EXP 09/29</span>
                </div>
              </motion.div>

              {/* Floating Shield Status Badge (Top Right Floating Visual) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-4 sm:-right-6 z-30 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 border border-velora-border shadow-2xl backdrop-blur-xl"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Encrypted & Active</div>
                  <div className="text-[11px] text-emerald-400 font-medium">Real-time fraud guard</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
