import { motion, type MotionProps } from 'framer-motion'
import { Zap, Target, ArrowUpRight, BarChart3 } from 'lucide-react'

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut' },
}

function SpendingVisual() {
  const bars = [
    { label: 'Food', pct: 28, active: false },
    { label: 'Shopping', pct: 62, active: true },
    { label: 'Transport', pct: 18, active: false },
    { label: 'Bills', pct: 41, active: false },
    { label: 'Entmt.', pct: 22, active: false },
  ]
  return (
    <div className="mt-6 space-y-2.5">
      {bars.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between mb-1">
            <span className="text-xs text-ink-3">{b.label}</span>
            <span className="text-xs font-mono text-ink-2">{b.pct}%</span>
          </div>
          <div className="h-1.5 bg-wire rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${b.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ background: b.active ? '#34E99E' : 'rgba(52,233,158,0.28)' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function SavingsVisual() {
  return (
    <div className="mt-6">
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-xs text-ink-3 mb-0.5">Emergency Fund</p>
          <p className="text-xl font-mono font-medium text-ink">₹1,40,000</p>
        </div>
        <span className="text-xs font-mono text-mint bg-mint-dim px-2 py-1 rounded-lg">On track</span>
      </div>
      <div className="h-2 bg-wire rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '58%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="h-full bg-mint rounded-full"
        />
      </div>
      <p className="text-xs text-ink-3">₹1,00,000 remaining · 4 months ahead</p>
      <div className="mt-4 space-y-2">
        {['MacBook Pro', 'Vacation Fund', 'Retirement'].map((goal, i) => (
          <div key={goal} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: `rgba(52,233,158,${1 - i * 0.25})` }} />
              <span className="text-ink-2">{goal}</span>
            </div>
            <span className="font-mono text-ink-3">{[72, 45, 31][i]}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TransferVisual() {
  return (
    <div className="mt-6">
      <div className="space-y-3">
        <div className="bg-panel-3 rounded-xl p-3 border border-wire">
          <p className="text-xs text-ink-3 mb-1">From</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink">VELORA · 4829</span>
            <span className="text-sm font-mono text-ink">₹12,500</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-7 h-7 rounded-full bg-mint-dim border border-mint/20 flex items-center justify-center">
            <ArrowUpRight size={12} className="text-mint" />
          </div>
        </div>
        <div className="bg-panel-3 rounded-xl p-3 border border-wire">
          <p className="text-xs text-ink-3 mb-1">To</p>
          <span className="text-sm text-ink">Priya Sharma · HDFC ****2201</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
          <span className="text-xs text-ink-3">Instant · Usually within seconds</span>
        </div>
      </div>
    </div>
  )
}

function IntelligenceVisual() {
  const insights = [
    { label: 'Dining down', value: '12%', dir: '↓', good: true },
    { label: 'Savings ahead', value: '₹8,200', dir: '↑', good: true },
    { label: 'Subscriptions', value: '₹1,298', dir: '↑', good: false },
  ]
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {insights.map((ins) => (
        <div key={ins.label} className="bg-panel-3 rounded-xl p-3 border border-wire">
          <p className="text-[10px] text-ink-3 mb-2 leading-tight">{ins.label}</p>
          <p className={`text-base font-mono font-medium ${ins.good ? 'text-mint' : 'text-warning'}`}>
            {ins.dir} {ins.value}
          </p>
        </div>
      ))}
      <div className="col-span-3 bg-mint-dim border border-mint/15 rounded-xl p-3">
        <p className="text-xs text-ink-2 leading-relaxed">
          You're spending <span className="text-mint font-medium">18% less</span> this month than your 3-month average.
          Your savings are trending ahead of target.
        </p>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp} className="mb-14 max-w-xl">
          <p className="text-xs font-mono text-ink-3 uppercase tracking-[0.16em] mb-4">Features</p>
          <h2
            className="font-display font-semibold text-ink leading-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em' }}
          >
            Financial tools that actually work for you.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="lg:col-span-2 bg-panel border border-wire rounded-2xl p-7 hover:border-wire-2 transition-colors duration-300 group card-shine"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-mint-dim flex items-center justify-center border border-mint/15">
                <BarChart3 size={17} className="text-mint" />
              </div>
              <span className="text-xs font-mono text-ink-3 bg-panel-2 px-2 py-1 rounded-lg border border-wire" aria-hidden="true">01</span>
            </div>
            <h3 className="font-display font-semibold text-ink text-xl mt-4 mb-1" style={{ letterSpacing: '-0.02em' }}>
              Smart Spending
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed">
              Understand where your money goes with real-time spending insights across every category.
            </p>
            <SpendingVisual />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="bg-panel border border-wire rounded-2xl p-7 hover:border-wire-2 transition-colors duration-300 group card-shine"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-mint-dim flex items-center justify-center border border-mint/15">
                <Target size={17} className="text-mint" />
              </div>
              <span className="text-xs font-mono text-ink-3 bg-panel-2 px-2 py-1 rounded-lg border border-wire" aria-hidden="true">02</span>
            </div>
            <h3 className="font-display font-semibold text-ink text-xl mt-4 mb-1" style={{ letterSpacing: '-0.02em' }}>
              Automated Savings
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed">
              Set goals and build better saving habits automatically.
            </p>
            <SavingsVisual />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="bg-panel border border-wire rounded-2xl p-7 hover:border-wire-2 transition-colors duration-300 group card-shine"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-mint-dim flex items-center justify-center border border-mint/15">
                <ArrowUpRight size={17} className="text-mint" />
              </div>
              <span className="text-xs font-mono text-ink-3 bg-panel-2 px-2 py-1 rounded-lg border border-wire" aria-hidden="true">03</span>
            </div>
            <h3 className="font-display font-semibold text-ink text-xl mt-4 mb-1" style={{ letterSpacing: '-0.02em' }}>
              Instant Transfers
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed">
              Move money quickly and securely whenever you need it.
            </p>
            <TransferVisual />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 bg-panel border border-wire rounded-2xl p-7 hover:border-wire-2 transition-colors duration-300 group card-shine"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-mint-dim flex items-center justify-center border border-mint/15">
                <Zap size={17} className="text-mint" />
              </div>
              <span className="text-xs font-mono text-ink-3 bg-panel-2 px-2 py-1 rounded-lg border border-wire" aria-hidden="true">04</span>
            </div>
            <h3 className="font-display font-semibold text-ink text-xl mt-4 mb-1" style={{ letterSpacing: '-0.02em' }}>
              Financial Intelligence
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed">
              Turn your financial activity into insights you can actually use — not just numbers to ignore.
            </p>
            <IntelligenceVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
