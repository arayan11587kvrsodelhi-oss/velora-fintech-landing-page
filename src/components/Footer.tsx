const navCols = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Dashboard', href: '#dashboard' },
      { label: 'Security', href: '#security' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
]

function VeloraWordmark() {
  return (
    <a href="#" className="flex items-center gap-2.5 mb-4 w-fit" aria-label="VELORA home">
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M3 4.5L12 19L21 4.5" stroke="#34E99E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 4.5L12 12L16.5 4.5" stroke="#34E99E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      </svg>
      <span
        className="font-display font-semibold text-ink tracking-tight"
        style={{ fontSize: '17px', letterSpacing: '-0.025em' }}
      >
        VELORA
      </span>
    </a>
  )
}

function SocialButton({ label, initials }: { label: string; initials: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-8 h-8 rounded-lg bg-panel-2 border border-wire flex items-center justify-center text-[10px] font-mono text-ink-3 hover:text-ink-2 hover:border-wire-2 transition-all duration-200"
    >
      {initials}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-wire bg-panel/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <VeloraWordmark />
            <p className="text-sm text-ink-3 mb-5 max-w-xs leading-relaxed">
              Your money. Your momentum. A modern financial control platform for people who want clarity over their finances.
            </p>
            <div className="flex gap-2.5" role="list" aria-label="Social links">
              <div role="listitem"><SocialButton label="Follow on X" initials="𝕏" /></div>
              <div role="listitem"><SocialButton label="View on GitHub" initials="GH" /></div>
              <div role="listitem"><SocialButton label="Connect on LinkedIn" initials="in" /></div>
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] font-mono text-ink-3 uppercase tracking-[0.16em] mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-2 hover:text-ink transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-wire/70 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-ink-3 font-mono order-2 sm:order-1">
            © 2026 VELORA · Demo project · Not a regulated financial service
          </p>
          <div className="flex gap-5 order-1 sm:order-2">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-ink-3 hover:text-ink-2 transition-colors font-mono"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
