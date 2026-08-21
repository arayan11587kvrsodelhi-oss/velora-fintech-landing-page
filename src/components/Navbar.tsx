import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Product', href: '#features' },
  { label: 'Features', href: '#dashboard' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 24)
      setScrollingUp(currentScrollY <= lastScrollY || currentScrollY < 80)
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          !scrollingUp && scrolled ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-canvas/92 backdrop-blur-xl border-b border-wire'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-7 h-7 flex items-center justify-center">
              <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
                <path
                  d="M4 6L14 22L24 6"
                  stroke="var(--color-mint)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6L14 14L19 6"
                  stroke="var(--color-mint)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
            </span>
            <span
              className="text-ink font-display font-semibold text-lg tracking-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              VELORA
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-body text-ink-2 hover:text-ink transition-colors duration-200 rounded-lg hover:bg-panel"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-mint transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#dashboard" className="px-4 py-2 text-sm font-medium text-ink-2 hover:text-ink transition-colors duration-200">
              Sign In
            </a>
            <a href="#pricing" className="px-4 py-2 text-sm font-semibold bg-mint text-canvas rounded-lg hover:bg-mint/90 transition-all duration-200 hover:scale-[0.98] active:scale-95">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 text-ink-2 hover:text-ink transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-panel/98 backdrop-blur-xl border-b border-wire md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-base text-ink-2 hover:text-ink hover:bg-panel-2 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-wire flex flex-col gap-2">
                <a href="#dashboard" className="w-full px-4 py-3 text-base font-medium text-ink-2 hover:text-ink text-left transition-colors">
                  Sign In
                </a>
                <a href="#pricing" onClick={() => setMenuOpen(false)} className="w-full px-4 py-3 text-base font-semibold bg-mint text-canvas rounded-xl hover:bg-mint/90 transition-all">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
