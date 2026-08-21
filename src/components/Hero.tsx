import { useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import DemoModal from './DemoModal'

/* ── Hero Dashboard preview data ─────────────────────── */
const recentTx = [
  { name: 'Salary Credit', amount: '+₹92,000', positive: true },
  { name: 'Amazon', amount: '-₹3,840', positive: false },
  { name: 'Swiggy', amount: '-₹620', positive: false },
]

const catBars = [
  { label: 'Shopping', pct: 38, opacity: 1 },
  { label: 'Food', pct: 28, opacity: 0.55 },
  { label: 'Bills', pct: 20, opacity: 0.35 },
  { label: 'Other', pct: 14, opacity: 0.2 },
]

/* ── Sparkline SVG ───────────────────────────────────── */
function Sparkline() {
  return (
    <svg
      viewBox="0 0 220 56"
      className="w-full h-10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34E99E" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#34E99E" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* area fill */}
      <path
        d="M0,48 C22,44 38,40 58,36 S82,26 104,22 S132,14 158,10 S184,5 220,2 L220,56 L0,56 Z"
        fill="url(#sg)"
      />
      {/* line */}
      <path
        d="M0,48 C22,44 38,40 58,36 S82,26 104,22 S132,14 158,10 S184,5 220,2"
        fill="none"
        stroke="#34E99E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="220" cy="2" r="3" fill="#34E99E" />
      <circle cx="220" cy="2" r="5" fill="#34E99E" opacity="0.25" />
    </svg>
  )
}

/* ── Dashboard preview card ──────────────────────────── */
function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: 'easeOut' }}
      className="relative w-full max-w-[400px] lg:max-w-[440px]"
      aria-hidden="true"
    >
      {/* ambient glow behind card */}
      <div
        className="absolute -inset-6 rounded-[40px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(52,233,158,0.09) 0%, transparent 75%)',
        }}
      />

      {/* Main card */}
      <div className="relative bg-panel border border-wire rounded-2xl p-5 shadow-2xl shadow-black/70 card-shine">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M2 3.5L9 14.5L16 3.5" stroke="#34E99E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 3.5L9 8.5L12.5 3.5" stroke="#34E99E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
            </svg>
            <span className="text-xs font-mono text-ink-3 tracking-wider">VELORA</span>
          </div>
          <span className="text-[10px] font-mono text-ink-3 bg-panel-2 border border-wire px-2 py-0.5 rounded-md">Aug 2026</span>
        </div>

        {/* Balance */}
        <div className="mb-4">
          <p className="text-[10px] font-mono text-ink-3 uppercase tracking-widest mb-1">Total Balance</p>
          <div className="flex items-end gap-2.5">
            <span
              className="font-display font-semibold text-ink leading-none"
              style={{ fontSize: '30px', letterSpacing: '-0.04em' }}
            >
              ₹8,42,190
            </span>
            <div className="flex items-center gap-1 pb-0.5 text-mint text-xs font-mono">
              <TrendingUp size={11} />
              <span>+12.4%</span>
            </div>
          </div>
        </div>

        {/* Sparkline */}
        <div className="mb-4">
          <Sparkline />
        </div>

        {/* Category bars */}
        <div className="mb-4">
          <p className="text-[10px] font-mono text-ink-3 mb-2">Spending categories</p>
          <div className="flex gap-0.5 h-1.5 rounded-full overflow-hidden">
            {catBars.map((c) => (
              <div
                key={c.label}
                style={{ width: `${c.pct}%`, background: `rgba(52,233,158,${c.opacity})` }}
              />
            ))}
          </div>
          <div className="flex gap-3 mt-1.5">
            {catBars.map((c) => (
              <div key={c.label} className="flex items-center gap-1">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: `rgba(52,233,158,${c.opacity})` }}
                />
                <span className="text-[9px] font-mono text-ink-3">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-wire mb-3" />

        {/* Transactions */}
        <p className="text-[10px] font-mono text-ink-3 uppercase tracking-widest mb-2">Recent</p>
        <div className="space-y-2 mb-4">
          {recentTx.map((t) => (
            <div key={t.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {t.positive
                  ? <ArrowUpRight size={11} className="text-mint" />
                  : <ArrowDownRight size={11} className="text-ink-3" />}
                <span className="text-xs text-ink-2">{t.name}</span>
              </div>
              <span className={`text-xs font-mono font-medium ${t.positive ? 'text-mint' : 'text-ink-2'}`}>
                {t.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Savings goal */}
        <div className="bg-panel-2 rounded-xl p-3 border border-wire">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-ink-2">Goal · MacBook Pro</span>
            <span className="text-[10px] font-mono text-mint">72%</span>
          </div>
          <div className="h-1.5 bg-wire rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '72%' }}
              transition={{ duration: 1.4, delay: 1.1, ease: 'easeOut' }}
              className="h-full bg-mint rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Floating pill — transfer confirmation */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-3 top-20 bg-panel-2 border border-wire rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse flex-shrink-0" />
        <span className="text-[11px] text-ink-2 whitespace-nowrap">Transfer sent · ₹12,500</span>
      </motion.div>

      {/* Floating pill — monthly savings */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -left-3 bottom-24 bg-panel-2 border border-wire rounded-xl px-3 py-2 shadow-xl"
      >
        <p className="text-[9px] font-mono text-ink-3 mb-0.5">Savings this month</p>
        <p className="text-sm font-mono font-medium text-mint">↑ ₹41,000</p>
      </motion.div>
    </motion.div>
  )
}

/* ── Hero section ────────────────────────────────────── */
export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const copyY = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : -36])
  const visualY = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : 52])
  const visualScale = useTransform(scrollYProgress, [0, 0.18], [1, shouldReduceMotion ? 1 : 0.96])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 0%, rgba(52,233,158,0.05) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[calc(100vh-64px)] py-16 lg:py-0">

          {/* ── Left: Copy ─────────────────────── */}
          <motion.div style={{ y: copyY }} className="flex-1 max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-mint-dim border border-mint/20 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
              <span className="text-xs font-mono text-mint tracking-wide">Now in early access</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
              className="font-display font-semibold text-ink leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(44px, 6.5vw, 82px)', letterSpacing: '-0.04em' }}
            >
              Your money.
              <br />
              <span className="text-mint">Your momentum.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-ink-2 leading-relaxed mb-10 max-w-lg"
            >
              One intelligent platform to spend smarter, save effortlessly, and stay in control of your financial life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-mint text-canvas font-semibold text-[15px] rounded-xl hover:bg-mint/92 transition-all duration-200 hover:scale-[0.98] active:scale-95 font-display"
              >
                Get Started
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <a
                href="#features"
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-wire-2 text-ink-2 hover:text-ink hover:border-ink-3 font-medium text-[15px] rounded-xl transition-all duration-200 font-display"
              >
                Explore VELORA
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 text-sm text-ink-3"
            >
              <div className="flex -space-x-1.5">
                {['AS', 'PK', 'RV', 'NM'].map((init) => (
                  <div
                    key={init}
                    className="w-6 h-6 rounded-full bg-mint-dim border border-canvas flex items-center justify-center"
                  >
                    <span className="text-[7px] font-mono text-mint">{init}</span>
                  </div>
                ))}
              </div>
              <span>Interactive Demo · Built for modern financial control</span>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard preview ────────── */}
          <motion.div style={{ y: visualY, scale: visualScale }} className="flex-1 flex justify-center lg:justify-end w-full">
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-canvas))' }}
        aria-hidden="true"
      />
      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
