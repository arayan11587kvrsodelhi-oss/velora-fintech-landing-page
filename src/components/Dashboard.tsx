import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  LayoutDashboard,
  Activity,
  CreditCard,
  PiggyBank,
  Lightbulb,
  Settings,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

/* ── Data ─────────────────────────────────────────────── */
const chartData = [
  { month: 'Mar', income: 92, expenses: 51 },
  { month: 'Apr', income: 92, expenses: 48 },
  { month: 'May', income: 98, expenses: 56 },
  { month: 'Jun', income: 92, expenses: 44 },
  { month: 'Jul', income: 92, expenses: 50 },
  { month: 'Aug', income: 92, expenses: 38 },
]

const transactions = [
  { id: 1, name: 'Salary Credit',   cat: 'Income',        amount: '+₹92,000', positive: true,  date: 'Aug 1',  initials: 'SC' },
  { id: 2, name: 'Amazon',          cat: 'Shopping',       amount: '-₹3,840',  positive: false, date: 'Aug 3',  initials: 'AM' },
  { id: 3, name: 'Swiggy',          cat: 'Food',           amount: '-₹620',    positive: false, date: 'Aug 4',  initials: 'SW' },
  { id: 4, name: 'Spotify',         cat: 'Entertainment',  amount: '-₹199',    positive: false, date: 'Aug 5',  initials: 'SP' },
  { id: 5, name: 'Electricity Bill',cat: 'Bills',          amount: '-₹1,840',  positive: false, date: 'Aug 6',  initials: 'EB' },
  { id: 6, name: 'Uber',            cat: 'Transport',      amount: '-₹340',    positive: false, date: 'Aug 7',  initials: 'UB' },
]

const categories = [
  { name: 'Shopping',      pct: 38, amount: '₹14,600' },
  { name: 'Food',          pct: 28, amount: '₹10,760' },
  { name: 'Bills',         pct: 20, amount: '₹7,684'  },
  { name: 'Transport',     pct: 8,  amount: '₹3,074'  },
  { name: 'Entertainment', pct: 6,  amount: '₹2,302'  },
]

const navItems = [
  { icon: LayoutDashboard, label: 'Overview'  },
  { icon: Activity,        label: 'Activity'  },
  { icon: CreditCard,      label: 'Cards'     },
  { icon: PiggyBank,       label: 'Savings'   },
  { icon: Lightbulb,       label: 'Insights'  },
  { icon: Settings,        label: 'Settings'  },
]

const stats = [
  { label: 'Total Balance',    value: '₹8,42,190', change: '+12.4%', up: true,  large: true  },
  { label: 'Monthly Income',   value: '₹92,000',   change: '+0%',    up: true,  large: false },
  { label: 'Monthly Expenses', value: '₹38,420',   change: '-18.2%', up: false, large: false },
  { label: 'Savings',          value: '₹2,14,800', change: '+41.6%', up: true,  large: false },
]

interface TooltipPayloadItem {
  dataKey: string
  color: string
  value: number
}

interface ChartTooltipProps {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string
}

function AnimatedValue({ value }: { value: string }) {
  const target = Number(value.replace(/[^0-9]/g, ''))
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let frameId = 0
    let startTime: number | null = null

    const animate = (time: number) => {
      if (startTime === null) startTime = time
      const progress = Math.min((time - startTime) / 900, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(target * eased))
      if (progress < 1) frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [target])

  return <>₹{current.toLocaleString('en-IN')}</>
}

/* ── Custom chart tooltip ──────────────────────────────── */
function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-panel-3 border border-wire rounded-xl p-3 shadow-xl text-xs">
      <p className="font-mono text-ink-3 mb-2">{label} 2026</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2 mb-1 last:mb-0">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
          <span className="text-ink-2 capitalize">{p.dataKey}</span>
          <span className="font-mono text-ink ml-auto pl-4">₹{p.value}k</span>
        </div>
      ))}
    </div>
  )
}

function DashboardContext({ activeNav }: { activeNav: string }) {
  const content = {
    Activity: {
      label: 'Recent movement',
      title: 'Every transaction, in context.',
      body: 'Track income and spending as it happens, with a clear record of where your money goes.',
      metric: '24 transactions',
    },
    Cards: {
      label: 'Your cards',
      title: 'Control every way you pay.',
      body: 'Manage your physical and virtual cards, limits, and payment preferences from one place.',
      metric: '2 active cards',
    },
    Savings: {
      label: 'Goals',
      title: 'Make progress feel tangible.',
      body: 'Keep your short and long-term goals moving with simple targets and visible momentum.',
      metric: '72% on track',
    },
    Insights: {
      label: 'Signals',
      title: 'A sharper view of your habits.',
      body: 'Turn your financial patterns into useful decisions with calm, readable signals.',
      metric: '+18.6% efficiency',
    },
    Settings: {
      label: 'Preferences',
      title: 'Your money, your rules.',
      body: 'Tune notifications, security, and account preferences without leaving your financial home.',
      metric: 'All systems normal',
    },
  }[activeNav as 'Activity' | 'Cards' | 'Savings' | 'Insights' | 'Settings']

  if (!content) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeNav}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="mb-5 grid gap-3 sm:grid-cols-[1fr_auto] items-end bg-panel-2 border border-wire rounded-xl p-4"
      >
        <div>
          <p className="text-[9px] font-mono text-mint uppercase tracking-[0.16em] mb-2">{content.label}</p>
          <p className="font-display text-lg font-semibold text-ink mb-1">{content.title}</p>
          <p className="text-xs leading-relaxed text-ink-3 max-w-xl">{content.body}</p>
        </div>
        <span className="text-[10px] font-mono text-ink-2 border border-wire rounded-lg px-3 py-2 whitespace-nowrap">{content.metric}</span>
      </motion.div>
    </AnimatePresence>
  )
}

/* ── Component ─────────────────────────────────────────── */
export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Overview')

  return (
    <section id="dashboard" className="py-24 lg:py-32 bg-panel/30 border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-mono text-ink-3 uppercase tracking-[0.18em] mb-4">Product</p>
          <h2
            className="font-display font-semibold text-ink leading-tight max-w-lg"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em' }}
          >
            See your financial world clearly.
          </h2>
        </motion.div>

        {/* Dashboard shell */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="bg-panel border border-wire rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="flex min-h-0">

            {/* Sidebar — hidden on mobile */}
            <aside className="hidden lg:flex flex-col w-52 border-r border-wire py-5 px-3 shrink-0">
              <div className="flex items-center gap-2.5 px-3 mb-8">
                <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M2 3L9 14L16 3" stroke="#34E99E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 3L9 8L12.5 3" stroke="#34E99E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                </svg>
                <span className="font-display font-semibold text-sm text-ink" style={{ letterSpacing: '-0.02em' }}>
                  VELORA
                </span>
              </div>

              <nav className="space-y-0.5 flex-1" aria-label="Dashboard navigation">
                {navItems.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => setActiveNav(label)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                      activeNav === label
                        ? 'bg-mint-dim text-mint'
                        : 'text-ink-3 hover:text-ink-2 hover:bg-panel-2'
                    }`}
                    aria-current={activeNav === label ? 'page' : undefined}
                  >
                    <Icon size={14} aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </nav>

              {/* User row */}
              <div className="px-3 pt-4 border-t border-wire">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-mint-dim border border-mint/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-mono text-mint font-medium">AS</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-ink truncate">Aryan Sharma</p>
                    <p className="text-[10px] text-ink-3 font-mono">Pro Plan</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 p-4 lg:p-6 min-w-0 overflow-hidden">

              {/* Topbar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-display font-semibold text-ink text-sm lg:text-base">{activeNav}</h3>
                  <p className="text-[10px] text-ink-3 font-mono">August 2026</p>
                </div>
                <span className="text-[11px] text-ink-3 bg-panel-2 border border-wire px-3 py-1.5 rounded-lg font-mono">
                  This month
                </span>
              </div>

              <nav className="flex lg:hidden gap-1 overflow-x-auto -mx-1 px-1 pb-3 mb-2" aria-label="Dashboard navigation">
                {navItems.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => setActiveNav(label)}
                    className={`flex items-center gap-1.5 shrink-0 px-2.5 py-2 rounded-lg text-[10px] transition-colors duration-150 ${
                      activeNav === label ? 'bg-mint-dim text-mint' : 'text-ink-3 hover:text-ink-2 hover:bg-panel-3'
                    }`}
                    aria-current={activeNav === label ? 'page' : undefined}
                  >
                    <Icon size={12} aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </nav>

              <DashboardContext activeNav={activeNav} />

              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
                {stats.map((s) => (
                  <motion.div key={s.label} whileHover={{ y: -2 }} transition={{ duration: 0.18 }} className="bg-panel-2 rounded-xl p-3 border border-wire">
                    <p className="text-[9px] font-mono text-ink-3 mb-1.5 uppercase tracking-wider">{s.label}</p>
                    <p
                      className="font-mono font-medium text-ink leading-none mb-1.5"
                      style={{ fontSize: s.large ? '16px' : '13px' }}
                    >
                      <AnimatedValue value={s.value} />
                    </p>
                    <div className={`flex items-center gap-1 text-[9px] font-mono ${s.up ? 'text-mint' : 'text-warning'}`}>
                      {s.up ? <TrendingUp size={9} aria-hidden="true" /> : <TrendingDown size={9} aria-hidden="true" />}
                      <span>{s.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Area chart */}
              <div className="bg-panel-2 rounded-xl p-4 border border-wire mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <p className="text-[11px] font-mono text-ink-2">Income vs Expenses · 6 months (₹k)</p>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-ink-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-mint inline-block" aria-hidden="true" />
                      Income
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F59E0B' }} aria-hidden="true" />
                      Expenses
                    </span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={chartData} margin={{ top: 4, right: 2, left: -34, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#34E99E" stopOpacity={0.18} />
                        <stop offset="100%" stopColor="#34E99E" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.12} />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 4" stroke="#1C2E27" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: '#4B6A5D', fontSize: 10, fontFamily: 'DM Mono' }}
                      axisLine={false}
                      tickLine={false}
                      tickMargin={6}
                    />
                    <YAxis
                      tick={{ fill: '#4B6A5D', fontSize: 10, fontFamily: 'DM Mono' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#243A32', strokeWidth: 1 }} />
                    <Area
                      type="monotone"
                      dataKey="income"
                      stroke="#34E99E"
                      strokeWidth={1.8}
                      fill="url(#gIncome)"
                      dot={false}
                      activeDot={{ r: 3, fill: '#34E99E', strokeWidth: 0 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stroke="#F59E0B"
                      strokeWidth={1.8}
                      fill="url(#gExpense)"
                      dot={false}
                      activeDot={{ r: 3, fill: '#F59E0B', strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Transactions + Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
                <div className="lg:col-span-3 bg-panel-2 rounded-xl border border-wire overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-wire">
                    <p className="text-[11px] font-mono text-ink-2 uppercase tracking-wider">Transactions</p>
                  </div>
                  {transactions.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-panel-3 transition-colors duration-100 border-b border-wire/60 last:border-b-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-panel-3 border border-wire flex items-center justify-center flex-shrink-0">
                          <span className="text-[8px] font-mono text-ink-3">{t.initials}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-ink truncate">{t.name}</p>
                          <p className="text-[10px] text-ink-3 font-mono">{t.cat} · {t.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 ml-3 flex-shrink-0">
                        {t.positive
                          ? <ArrowUpRight size={10} className="text-mint" aria-hidden="true" />
                          : <ArrowDownRight size={10} className="text-ink-3" aria-hidden="true" />}
                        <span className={`text-xs font-mono font-medium ${t.positive ? 'text-mint' : 'text-ink-2'}`}>
                          {t.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-2 bg-panel-2 rounded-xl border border-wire overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-wire">
                    <p className="text-[11px] font-mono text-ink-2 uppercase tracking-wider">Categories</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {categories.map((c) => (
                      <div key={c.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-ink-2">{c.name}</span>
                          <span className="text-[11px] font-mono text-ink-3">{c.amount}</span>
                        </div>
                        <div className="h-1 bg-wire rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${c.pct}%`, background: 'rgba(52,233,158,0.5)' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
