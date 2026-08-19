import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { pricingPlans } from '../data/fintechData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-velora-bg">
      {/* Background Accent Gradient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-velora-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Pricing"
          title="Predictable plans for"
          highlightText="every ambition."
          subtitle="Choose the tier that matches your wealth momentum. No surprise markups or hidden fees."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPro = plan.highlighted;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col"
              >
                <GlassCard
                  glow={isPro}
                  className={`h-full p-8 flex flex-col justify-between relative transition-all duration-300 ${isPro
                      ? 'border-velora-accent/50 bg-gradient-to-b from-velora-surface-light via-velora-surface to-velora-surface/90 shadow-2xl shadow-velora-accent/15 lg:-translate-y-2'
                      : 'border-velora-border hover:border-velora-border-bright'
                    }`}
                >
                  {/* Highlighted Badge */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-velora-accent to-velora-accent-teal text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-velora-accent/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{plan.badge || 'Most Popular'}</span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-xs text-velora-muted leading-relaxed min-h-[36px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-1 pb-8 mb-8 border-b border-velora-border/60">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-sm font-medium text-velora-muted">{plan.period}</span>
                      )}
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3.5 mb-8">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        What's Included:
                      </span>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <div className={`p-1 rounded-full shrink-0 mt-0.5 ${isPro ? 'bg-velora-accent/20 text-velora-accent' : 'bg-slate-800 text-slate-400'
                            }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={isPro ? 'primary' : 'secondary'}
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full justify-center mt-auto"
                  >
                    {plan.cta}
                  </Button>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-12 text-center text-xs text-velora-muted font-mono">
          * Fictional demo pricing for portfolio demonstration purposes only.
        </div>
      </div>
    </section>
  );
};
