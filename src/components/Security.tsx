import { motion } from 'framer-motion'
import { Fingerprint, Bell, EyeOff, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Fingerprint,
    title: 'Secure Authentication',
    desc: 'Biometric and multi-factor authentication keep your account accessible only to you.',
  },
  {
    icon: Bell,
    title: 'Transaction Monitoring',
    desc: 'Real-time alerts and anomaly detection flag unusual activity the moment it happens.',
  },
  {
    icon: EyeOff,
    title: 'Privacy-First Design',
    desc: 'Your financial data is never sold or shared. You control what you share and when.',
  },
  {
    icon: ShieldCheck,
    title: 'Account Protection',
    desc: 'Automatic session timeouts, login history, and remote sign-out keep you in control.',
  },
]

function ShieldIcon() {
  return (
    <svg viewBox="0 0 120 140" fill="none" className="w-24 h-28">
      <motion.path
        d="M60 8L16 26V66C16 93 36 118 60 126C84 118 104 93 104 66V26L60 8Z"
        stroke="rgba(52,233,158,0.25)"
        strokeWidth="1.5"
        fill="rgba(52,233,158,0.04)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.path
        d="M60 20L26 34V66C26 88 41 109 60 116C79 109 94 88 94 66V34L60 20Z"
        stroke="rgba(52,233,158,0.4)"
        strokeWidth="1.5"
        fill="rgba(52,233,158,0.06)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
      />
      <motion.path
        d="M48 67L57 76L73 58"
        stroke="#34E99E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      />
    </svg>
  )
}

export default function Security() {
  return (
    <section id="security" className="py-24 lg:py-32 bg-panel/30 border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-mono text-ink-3 uppercase tracking-[0.16em] mb-5">Security</p>
            <h2
              className="font-display font-semibold text-ink leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em' }}
            >
              Your money deserves serious protection.
            </h2>
            <p className="text-base text-ink-2 leading-relaxed mb-10">
              Security isn't a feature — it's the foundation. Every layer of VELORA is built with your financial safety in mind.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 * i }}
                    className="bg-panel border border-wire rounded-2xl p-4 hover:border-wire-2 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-mint-dim border border-mint/15 flex items-center justify-center mb-3">
                      <Icon size={15} className="text-mint" />
                    </div>
                    <h3 className="font-display font-semibold text-ink text-sm mb-1.5" style={{ letterSpacing: '-0.01em' }}>
                      {p.title}
                    </h3>
                    <p className="text-xs text-ink-2 leading-relaxed">{p.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="grid-texture absolute inset-0 rounded-3xl opacity-60" />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(52,233,158,0.06) 0%, transparent 70%)' }}
              />
              <div className="relative bg-panel border border-wire rounded-3xl p-10 flex flex-col items-center gap-6">
                <ShieldIcon />
                <div className="text-center">
                  <p className="font-display font-semibold text-ink text-lg mb-1" style={{ letterSpacing: '-0.02em' }}>
                    End-to-end protected
                  </p>
                  <p className="text-sm text-ink-2">All data is encrypted at rest and in transit</p>
                </div>
                <div className="w-full space-y-2">
                  {['AES-256 Encryption', 'Zero-knowledge architecture', 'Independent security reviews'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-ink-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="w-full border-t border-wire pt-4">
                  <p className="text-xs text-ink-3 text-center font-mono">Demo project · Not a regulated financial service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
