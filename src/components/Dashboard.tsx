import { useEffect, useMemo, useState } from 'react'
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
  Plus,
  Send,
  WalletCards,
  RotateCcw,
} from 'lucide-react'
import { useFinance, formatINR } from '../hooks/useFinance'
import FinanceModal, { type FinanceModalMode } from './FinanceModal'
import type { FinanceOperationResult } from '../types/finance'

/* ── Data ─────────────────────────────────────────────── */
const chartData = [
  { month: 'Mar', income: 92, expenses: 51 },
  { month: 'Apr', income: 92, expenses: 48 },
  { month: 'May', income: 98, expenses: 56 },
  { month: 'Jun', income: 92, expenses: 44 },
  { month: 'Jul', income: 92, expenses: 50 },
  { month: 'Aug', income: 92, expenses: 38 },
]

const navItems = [
  { icon: LayoutDashboard, label: 'Overview'  },
  { icon: Activity,        label: 'Activity'  },
  { icon: CreditCard,      label: 'Cards'     },
  { icon: PiggyBank,       label: 'Savings'   },
  { icon: Lightbulb,       label: 'Insights'  },
  { icon: Settings,        label: 'Settings'  },
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
  const [modalMode, setModalMode] = useState<FinanceModalMode | null>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [toast, setToast] = useState('')
  const finance = useFinance()
  const categoryTotals = useMemo(() => {
    const totals = new Map<string, number>()
    finance.transactions.filter((transaction) => transaction.type === 'expense').forEach((transaction) => {
      totals.set(transaction.category, (totals.get(transaction.category) || 0) + Math.abs(transaction.amount))
    })
    const total = [...totals.values()].reduce((sum, amount) => sum + amount, 0) || 1
    return [...totals.entries()].map(([name, amount]) => ({ name, amount, pct: Math.round((amount / total) * 100) })).sort((a, b) => b.amount - a.amount)
  }, [finance.transactions])
  const visibleTransactions = finance.transactions.filter((transaction) => activeFilter === 'All' || (activeFilter === 'Income' ? transaction.type === 'income' : transaction.type === 'expense'))

  const runOperation = (operation: FinanceOperationResult) => {
    if (operation.success) {
      setModalMode(null)
      setToast(operation.message)
    } else {
      setToast(operation.message)
    }
  }

  useEffect(() => {
    if (!toast) return
    const timeout = window.setTimeout(() => setToast(''), 2600)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const handleOperation = (amount: number, fields: Record<string, string>): FinanceOperationResult => {
    if (modalMode === 'income') return finance.addIncome(amount, fields.first)
    if (modalMode === 'payment') return finance.makePayment(amount, fields.second, fields.first)
    if (modalMode === 'savings') return finance.addSavings(amount)
    if (modalMode === 'withdraw') return finance.withdrawSavings(amount)
    return finance.transferMoney(amount, fields.first, fields.second)
  }

  const displayStats = [
    { label: 'Total Balance', value: finance.balance, change: 'Live demo balance', up: true, large: true },
    { label: 'Monthly Income', value: finance.income, change: 'All sources', up: true, large: false },
    { label: 'Monthly Expenses', value: finance.expenses, change: 'Payments + transfers', up: false, large: false },
    { label: 'Savings', value: finance.savings, change: `${Math.min(100, Math.round((finance.savings / finance.savingsGoal.target) * 100))}% of goal`, up: true, large: false },
  ]
  const savingsProgress = Math.min(100, Math.round((finance.savings / finance.savingsGoal.target) * 100))

  return (
    <section id="dashboard" className="story-section py-24 lg:py-32 bg-panel/30 border-t border-wire">
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
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display font-semibold text-ink text-sm lg:text-base">{activeNav}</h3>
                  <p className="text-[10px] text-ink-3 font-mono">August 2026</p>
                </div>
                <div className="flex flex-wrap items-center gap-2"><span className="text-[10px] text-mint bg-mint-dim border border-mint/20 px-2.5 py-1.5 rounded-lg font-mono">DEMO MODE</span><span className="text-[11px] text-ink-3 bg-panel-2 border border-wire px-3 py-1.5 rounded-lg font-mono">This month</span></div>
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

              {activeNav === 'Activity' && <div className="mb-5 flex flex-wrap items-center gap-1"><span className="mr-2 text-[10px] font-mono uppercase tracking-wider text-ink-3">Filter</span>{['All', 'Income', 'Expenses'].map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-lg px-3 py-1.5 text-[10px] font-mono ${activeFilter === filter ? 'bg-mint-dim text-mint' : 'text-ink-3 hover:bg-panel-2 hover:text-ink-2'}`}>{filter}</button>)}</div>}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {[{ label: 'Add Money', mode: 'income', Icon: Plus }, { label: 'Pay', mode: 'payment', Icon: WalletCards }, { label: 'Transfer', mode: 'transfer', Icon: Send }, { label: 'Savings', mode: 'savings', Icon: PiggyBank }].map(({ label, mode, Icon }) => (
                  <button key={label} type="button" onClick={() => setModalMode(mode as FinanceModalMode)} className="flex items-center justify-center gap-1.5 rounded-xl border border-wire bg-panel-2 px-3 py-2.5 text-[11px] text-ink-2 transition-colors hover:border-wire-2 hover:text-ink"><Icon size={13} className="text-mint" />{label}</button>
                ))}
              </div>

              {activeNav === 'Savings' && <div className="mb-5 rounded-xl border border-wire bg-panel-2 p-4"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-mono uppercase tracking-wider text-ink-3">{finance.savingsGoal.name}</p><p className="mt-1 font-mono text-xl text-ink">{formatINR(finance.savings)} <span className="text-xs text-ink-3">of {formatINR(finance.savingsGoal.target)}</span></p></div><span className="text-sm font-mono text-mint">{savingsProgress}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-wire"><motion.div className="h-full rounded-full bg-mint" animate={{ width: `${savingsProgress}%` }} transition={{ duration: 0.5 }} /></div><div className="mt-3 flex gap-2"><button type="button" onClick={() => setModalMode('savings')} className="rounded-lg bg-mint px-3 py-2 text-[11px] font-semibold text-canvas">Add to Savings</button><button type="button" onClick={() => setModalMode('withdraw')} className="rounded-lg border border-wire px-3 py-2 text-[11px] text-ink-2 hover:border-wire-2 hover:text-ink">Withdraw</button></div></div>}

              {activeNav === 'Cards' && <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-wire bg-panel-2 p-4"><div><p className="text-[10px] font-mono uppercase tracking-wider text-ink-3">VELORA virtual card</p><p className="mt-1 font-mono text-sm text-ink">•••• 4829 <span className="ml-2 text-xs text-ink-3">Available {formatINR(finance.balance)}</span></p></div><button type="button" onClick={() => runOperation(finance.toggleCard())} className={`rounded-lg px-3 py-2 text-[11px] font-semibold ${finance.cardFrozen ? 'bg-warning text-canvas' : 'bg-mint text-canvas'}`}>{finance.cardFrozen ? 'Unfreeze Card' : 'Freeze Card'}</button></div>}

              {activeNav === 'Settings' && <div className="mb-5 rounded-xl border border-wire bg-panel-2 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs text-ink">Demo preferences</p><p className="text-[10px] font-mono text-ink-3">Currency: INR (₹) · Card: {finance.cardFrozen ? 'Frozen' : 'Active'}</p></div><label className="flex items-center gap-2 text-[11px] text-ink-2"><input type="checkbox" checked={finance.notificationsEnabled} onChange={(event) => finance.setNotificationsEnabled(event.target.checked)} className="accent-mint" /> Notifications</label></div><button type="button" onClick={() => { if (window.confirm('Reset all demo data?')) { finance.resetDemoData(); setToast('Demo data reset') } }} className="mt-4 flex items-center gap-2 text-[11px] text-warning hover:text-warning/80"><RotateCcw size={13} /> Reset Demo Data</button></div>}

              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
                {displayStats.map((s) => (
                  <motion.div key={s.label} whileHover={{ y: -2 }} transition={{ duration: 0.18 }} className="bg-panel-2 rounded-xl p-3 border border-wire">
                    <p className="text-[9px] font-mono text-ink-3 mb-1.5 uppercase tracking-wider">{s.label}</p>
                    <p
                      className="font-mono font-medium text-ink leading-none mb-1.5"
                      style={{ fontSize: s.large ? '16px' : '13px' }}
                    >
                      {formatINR(s.value)}
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
                  {visibleTransactions.slice(0, activeNav === 'Activity' ? undefined : 6).map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-panel-3 transition-colors duration-100 border-b border-wire/60 last:border-b-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-panel-3 border border-wire flex items-center justify-center flex-shrink-0">
                          <span className="text-[8px] font-mono text-ink-3">{t.title.slice(0, 2).toUpperCase()}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-ink truncate">{t.title}</p>
                          <p className="text-[10px] text-ink-3 font-mono">{t.category} · {t.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 ml-3 flex-shrink-0">
                        {t.amount > 0
                          ? <ArrowUpRight size={10} className="text-mint" aria-hidden="true" />
                          : <ArrowDownRight size={10} className="text-ink-3" aria-hidden="true" />}
                        <span className={`text-xs font-mono font-medium ${t.amount > 0 ? 'text-mint' : 'text-ink-2'}`}>
                          {t.amount > 0 ? '+' : ''}{formatINR(t.amount)}
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
                    {categoryTotals.map((c) => (
                      <div key={c.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-ink-2">{c.name}</span>
                          <span className="text-[11px] font-mono text-ink-3">{formatINR(c.amount)}</span>
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
      <FinanceModal mode={modalMode} onClose={() => setModalMode(null)} onSubmit={handleOperation} />
      <AnimatePresence>{toast && finance.notificationsEnabled && <motion.div role="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 rounded-xl border border-mint/25 bg-panel-2 px-4 py-3 text-xs text-ink shadow-xl shadow-black/40">{toast}</motion.div>}</AnimatePresence>
    </section>
  )
}
