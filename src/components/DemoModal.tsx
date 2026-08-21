import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface DemoModalProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
}

export default function DemoModal({
  open,
  onClose,
  title = 'Get early access to VELORA',
  description = 'Leave your email and we will keep you close to the launch.',
}: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-canvas/75 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) handleClose()
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            className="relative w-full max-w-md rounded-2xl border border-wire bg-panel p-6 shadow-2xl shadow-black/50 sm:p-8"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-ink-3 transition-colors hover:bg-panel-2 hover:text-ink"
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>
            {submitted ? (
              <div className="py-5 text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-mint-dim text-mint">
                  <Check size={18} />
                </div>
                <h2 id="demo-modal-title" className="mb-2 font-display text-xl font-semibold text-ink">You're on the list.</h2>
                <p className="text-sm leading-relaxed text-ink-2">We will send a quiet note when your VELORA preview is ready.</p>
              </div>
            ) : (
              <>
                <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.18em] text-mint">VELORA early access</p>
                <h2 id="demo-modal-title" className="mb-3 pr-8 font-display text-2xl font-semibold leading-tight text-ink">{title}</h2>
                <p className="mb-6 text-sm leading-relaxed text-ink-2">{description}</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label className="sr-only" htmlFor="demo-email">Email address</label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-wire bg-panel-2 px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-3 focus:border-mint"
                  />
                  <button type="submit" className="flex w-full items-center justify-center rounded-xl bg-mint px-4 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-[0.99] active:scale-95">
                    Request access
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
