import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Target, BarChart3, ArrowRight } from 'lucide-react'
import DemoModal from './DemoModal'

const insightCards = [
  {
    icon: TrendingDown,
    label: 'Dining',
    headline: 'Down 12% this month',
    detail: 'You reduced restaurant spending from ₹8,400 to ₹7,392.',
    positive: true,
  },
  {
    icon: Target,
    label: 'Savings Goal',
    headline: '72% complete',
    detail: 'MacBook Pro fund is 4 months ahead of your original schedule.',
    positive: true,
  },
  {
    icon: BarChart3,
    label: 'Monthly Spending',
    headline: 'Trending below target',
    detail: 'You have ₹12,580 remaining in your monthly budget.',
    positive: true,
  },
]

export default function Insights() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section id="insights" className="py-24 lg:py-32 border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-mono text-ink-3 uppercase tracking-[0.16em] mb-5">Insights</p>

            <div className="mb-8">
              <div
                className="inline-flex px-2.5 py-1 bg-mint-dim border border-mint/15 rounded-lg mb-5"
              >
                <span className="text-xs font-mono text-mint">August 2026 · Summary</span>
              </div>
              <h2
                className="font-display font-semibold text-ink leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.03em' }}
              >
                You spent{' '}
                <span className="text-mint">18% less</span>
                {' '}this month.
              </h2>
              <p className="text-base text-ink-2 leading-relaxed">
                You're ahead of your monthly savings target. Every decision this month moved you closer to your goals.
              </p>
            </div>

            <div className="bg-panel border border-wire rounded-2xl p-5 mb-6">
              <div className="flex justify-between items-end mb-1">
                <span className="text-xs text-ink-3 font-mono">Budget used</span>
                <span className="text-xs font-mono text-mint">62%</span>
              </div>
              <div className="h-2 bg-wire rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '62%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  className="h-full bg-mint rounded-full"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-xl font-mono font-medium text-ink">₹38,420</p>
                  <p className="text-xs text-ink-3">of ₹62,000 budget</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-mono font-medium text-mint">₹23,580</p>
                  <p className="text-xs text-ink-3">remaining</p>
                </div>
              </div>
            </div>

            <button type="button" onClick={() => setModalOpen(true)} className="flex items-center gap-2 text-sm font-medium text-mint hover:text-mint/80 transition-colors group">
              View full report
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          <div className="lg:col-span-3 space-y-4">
            {insightCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
                  className="bg-panel border border-wire rounded-2xl p-5 hover:border-wire-2 transition-colors duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-mint-dim border border-mint/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={17} className="text-mint" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-ink-3">{card.label}</span>
                        <span className="text-xs font-mono text-mint bg-mint-dim px-2 py-0.5 rounded-md">
                          {card.positive ? '↑ Positive' : '↓ Watch'}
                        </span>
                      </div>
                      <p className="font-display font-semibold text-ink text-lg mb-1" style={{ letterSpacing: '-0.02em' }}>
                        {card.headline}
                      </p>
                      <p className="text-sm text-ink-2 leading-relaxed">{card.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} title="See the full VELORA report" description="Request access to the detailed financial report preview." />
    </section>
  )
}
