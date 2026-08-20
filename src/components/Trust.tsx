import { motion } from 'framer-motion'

const partners = [
  { name: 'KORRA', sub: 'Finance' },
  { name: 'LUMIO', sub: 'Capital' },
  { name: 'STRIDE', sub: 'Payments' },
  { name: 'ARVO', sub: 'Banking' },
  { name: 'CALIX', sub: 'Wealth' },
  { name: 'FENIX', sub: 'Ventures' },
]

export default function Trust() {
  return (
    <section className="relative border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-mono text-ink-3 uppercase tracking-[0.22em] mb-10"
        >
          Built for the way modern money moves
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 lg:gap-x-16"
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 * i }}
              className="flex items-baseline gap-1.5 cursor-default group"
            >
              <span
                className="font-display font-semibold text-ink-3 group-hover:text-ink-2 transition-colors duration-200"
                style={{ fontSize: '15px', letterSpacing: '0.1em' }}
              >
                {p.name}
              </span>
              <span className="text-[10px] font-mono text-ink-3/50 group-hover:text-ink-3 transition-colors duration-200">
                {p.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
