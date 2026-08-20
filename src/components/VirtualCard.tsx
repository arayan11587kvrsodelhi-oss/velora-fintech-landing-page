import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff } from 'lucide-react'

function ChipSVG() {
  return (
    <svg viewBox="0 0 36 28" fill="none" className="w-9 h-7">
      <rect x="1" y="1" width="34" height="26" rx="4" stroke="rgba(212,175,55,0.6)" strokeWidth="1" fill="rgba(212,175,55,0.12)" />
      <rect x="6" y="1" width="1" height="26" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" />
      <rect x="29" y="1" width="1" height="26" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" />
      <rect x="1" y="8" width="34" height="1" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" />
      <rect x="1" y="19" width="34" height="1" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" />
      <rect x="13" y="8" width="10" height="12" rx="1" stroke="rgba(212,175,55,0.5)" strokeWidth="0.8" fill="rgba(212,175,55,0.06)" />
    </svg>
  )
}

function ContactlessSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 opacity-70">
      <path d="M12 19a7 7 0 0 0 0-14" stroke="rgba(224,237,232,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16a4 4 0 0 0 0-8" stroke="rgba(224,237,232,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="rgba(224,237,232,0.7)" />
    </svg>
  )
}

export default function VirtualCard() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section id="card" className="py-24 lg:py-32 border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-mono text-ink-3 uppercase tracking-[0.16em] mb-5">Virtual Card</p>
            <h2
              className="font-display font-semibold text-ink leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em' }}
            >
              Premium by default.
            </h2>
            <p className="text-base text-ink-2 leading-relaxed mb-8">
              Your VELORA card works everywhere — online and in person. Freeze it, set limits, and manage it all in seconds.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Instant virtual card', desc: 'Use it online the moment your account is ready.' },
                { title: 'Spend controls', desc: 'Set merchant restrictions and per-transaction limits.' },
                { title: 'Freeze & unfreeze', desc: 'Lock your card instantly from the app, any time.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-ink text-sm mb-0.5">{item.title}</p>
                    <p className="text-sm text-ink-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ rotateY: 4, rotateX: -3, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative w-full max-w-sm cursor-default"
              style={{ perspective: 1000 }}
            >
              <div
                className="relative rounded-3xl overflow-hidden p-6 shadow-2xl shadow-black/60"
                style={{
                  background: 'linear-gradient(135deg, #0E2419 0%, #071410 40%, #0A1E14 70%, #061009 100%)',
                  aspectRatio: '1.586',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(52,233,158,0.08) 0%, transparent 60%)',
                  }}
                />
                <div
                  className="absolute inset-0 grid-texture opacity-30"
                  style={{ backgroundSize: '24px 24px' }}
                />
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(52,233,158,0.06) 0%, transparent 70%)',
                    transform: 'translate(20%, -30%)',
                  }}
                />

                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                        <path d="M3 4L10 16L17 4" stroke="#34E99E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.5 4L10 10L13.5 4" stroke="#34E99E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                      </svg>
                      <span className="font-display font-semibold text-ink text-sm tracking-wide">VELORA</span>
                    </div>
                    <ChipSVG />
                  </div>

                  <div className="space-y-1">
                    <p className="font-mono text-ink/40 text-[10px] tracking-widest">CARD NUMBER</p>
                    <div className="flex items-center gap-1.5">
                      <p className="font-mono text-ink text-sm tracking-[0.18em]">
                        {revealed ? '4829 3741 0192 4829' : '**** **** **** 4829'}
                      </p>
                      <button
                        onClick={() => setRevealed(!revealed)}
                        className="text-ink-3 hover:text-ink-2 transition-colors p-0.5"
                        aria-label={revealed ? 'Hide card number' : 'Show card number'}
                      >
                        {revealed ? <EyeOff size={12} /> : <Eye size={12} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="space-y-0.5">
                      <p className="font-mono text-ink/40 text-[8px] tracking-widest">CARD HOLDER</p>
                      <p className="font-mono text-ink text-xs tracking-wider">ARYAN SHARMA</p>
                      <p className="font-mono text-ink/40 text-[8px] tracking-widest mt-1">VALID THRU</p>
                      <p className="font-mono text-ink text-xs tracking-wider">09 / 29</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ContactlessSVG />
                      <div className="flex items-center gap-0.5 opacity-40">
                        <div className="w-8 h-8 rounded-full border border-ink/30" style={{ background: 'rgba(235,100,35,0.5)' }} />
                        <div className="w-8 h-8 rounded-full -ml-4 border border-ink/30" style={{ background: 'rgba(255,170,0,0.4)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-5 flex items-center gap-2 text-xs text-ink-3 font-mono">
              <Lock size={11} />
              <span>Card details are encrypted and secured</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
