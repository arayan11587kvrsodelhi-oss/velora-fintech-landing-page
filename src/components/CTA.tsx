import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import DemoModal from './DemoModal'

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section className="py-24 lg:py-32 border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden border border-mint/18 p-10 sm:p-14 lg:p-20"
          style={{
            background: 'linear-gradient(145deg, #0F3A22 0%, #071410 45%, #0C1F17 100%)',
          }}
        >
          {/* Background layers */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(52,233,158,0.11) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="grid-texture absolute inset-0 opacity-[0.15]" aria-hidden="true" />

          {/* Content */}
          <div className="relative max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-mint/10 border border-mint/18 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mint" aria-hidden="true" />
              <span className="text-[11px] font-mono text-mint tracking-wider">Your money. Your momentum.</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
              className="font-display font-semibold text-ink leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 66px)', letterSpacing: '-0.04em' }}
            >
              Take control of<br />your money.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-lg text-ink-2 mb-10 leading-relaxed"
            >
              Build better financial habits with a platform designed around you — not the other way around.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.36 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button type="button" onClick={() => setModalOpen(true)} className="group flex items-center justify-center gap-2 px-8 py-4 bg-mint text-canvas font-semibold text-base rounded-xl hover:bg-mint/92 transition-all duration-200 hover:scale-[0.98] active:scale-95 font-display">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
              </button>
              <a
                href="#features"
                className="flex items-center justify-center px-8 py-4 border border-ink/18 text-ink-2 hover:text-ink hover:border-ink/35 font-medium text-base rounded-xl transition-all duration-200 font-display"
              >
                Explore VELORA
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
