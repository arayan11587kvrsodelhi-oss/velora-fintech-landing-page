import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import DemoModal from './DemoModal'

const plans = [
  {
    name: 'Free',
    monthly: '₹0',
    annual: '₹0',
    period: 'forever',
    desc: 'Start tracking your finances with no commitment.',
    features: [
      'Basic spending tracking',
      'Up to 2 savings goals',
      'Monthly spending insights',
      'Standard virtual card',
      'Email support',
    ],
    cta: 'Get started free',
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro',
    monthly: '₹299',
    annual: '₹249',
    period: 'per month',
    desc: 'For people serious about their financial momentum.',
    features: [
      'Real-time spending insights',
      'Unlimited savings goals',
      'Advanced financial analytics',
      'Smart monthly summaries',
      'Premium virtual card',
      'Priority support',
    ],
    cta: 'Start Pro',
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Business',
    monthly: 'Custom',
    annual: 'Custom',
    period: 'tailored pricing',
    desc: 'For teams managing complex financial workflows.',
    features: [
      'Everything in Pro',
      'Team member access',
      'Advanced reporting',
      'Custom categories',
      'Dedicated account manager',
      'API access',
    ],
    cta: 'Contact sales',
    highlight: false,
    badge: null,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-panel/30 border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-mono text-ink-3 uppercase tracking-[0.18em] mb-4">Pricing</p>
          <h2
            className="font-display font-semibold text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em' }}
          >
            Simple, honest pricing.
          </h2>
          <p className="text-base text-ink-2 max-w-sm mx-auto mb-8 leading-relaxed">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-panel border border-wire rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                !annual ? 'bg-panel-3 text-ink shadow-sm' : 'text-ink-3 hover:text-ink-2'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-panel-3 text-ink shadow-sm' : 'text-ink-3 hover:text-ink-2'
              }`}
            >
              Annual
              <span className="text-[10px] font-mono text-mint bg-mint-dim border border-mint/15 px-1.5 py-0.5 rounded-md">
                −17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`relative rounded-2xl p-6 flex flex-col border transition-colors duration-300 ${
                plan.highlight
                  ? 'bg-panel-2 border-mint/22 shadow-xl shadow-mint/4'
                  : 'bg-panel border-wire hover:border-wire-2'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-mono font-semibold text-canvas bg-mint px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + indicator */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-semibold text-ink text-base">{plan.name}</span>
                {plan.highlight && <div className="w-1.5 h-1.5 rounded-full bg-mint" />}
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="font-mono font-medium text-ink"
                      style={{ fontSize: plan.monthly === 'Custom' ? '22px' : '30px', letterSpacing: '-0.03em' }}
                    >
                      {annual ? plan.annual : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                  {plan.monthly !== 'Custom' && (
                    <span className="text-xs text-ink-3 font-mono">{plan.period}</span>
                  )}
                </div>
                {plan.monthly === 'Custom' && (
                  <span className="text-xs text-ink-3 font-mono">{plan.period}</span>
                )}
                <p className="text-xs text-ink-2 mt-2 leading-relaxed">{plan.desc}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? 'bg-mint-dim' : 'bg-panel-2'
                      }`}
                    >
                      <Check
                        size={9}
                        className={plan.highlight ? 'text-mint' : 'text-ink-3'}
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm text-ink-2">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full py-3 text-sm font-semibold font-display rounded-xl transition-all duration-200 hover:scale-[0.98] active:scale-95 flex items-center justify-center gap-2 group ${
                  plan.highlight
                    ? 'bg-mint text-canvas hover:bg-mint/90'
                    : 'bg-panel-3 border border-wire text-ink hover:border-wire-2'
                }`}
              >
                {plan.cta}
                {plan.highlight && (
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[11px] text-ink-3 mt-8 font-mono">
          VELORA is a fictional demo project · All pricing is illustrative only
        </p>
        <DemoModal
          open={selectedPlan !== null}
          onClose={() => setSelectedPlan(null)}
          title={selectedPlan ? `Start with ${selectedPlan}` : undefined}
          description="Request early access and we will help you choose the right VELORA plan."
        />
      </div>
    </section>
  )
}
