import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { AnimatedNumber } from './ui/AnimatedNumber';
import {
  monthlyChartData,
  spendingCategories,
  recentTransactions,
  heroStats,
} from '../data/fintechData';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  ArrowDownLeft,
  Laptop,
  CreditCard,
  Filter,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop: Laptop,
  ArrowDownLeft: ArrowDownLeft,
  TrendingUp: TrendingUp,
  CreditCard: CreditCard,
};

export const Dashboard = () => {
  const [activeRange, setActiveRange] = useState<'1M' | '6M' | '1Y'>('6M');

  return (
    <section id="product" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-velora-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Showcase"
          title="See your financial world clearly."
          subtitle="A unified, high-performance financial command center designed to give you instant clarity over every rupee."
        />

        {/* Realistic Interactive Dashboard Shell */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-velora-surface/90 border border-velora-border/90 p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden"
        >
          {/* Top Window Bar (Mac style buttons + Status) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-velora-border/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-velora-muted hidden sm:inline-block">
                app.velora.finance/dashboard
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync Enabled
              </span>
            </div>
          </div>

          {/* Quick Metrics Cards Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <GlassCard hoverEffect={false} className="p-5 border-velora-border/60">
              <div className="flex items-center justify-between text-velora-muted text-xs">
                <span>Net Portfolio</span>
                <Wallet className="w-4 h-4 text-velora-accent" />
              </div>
              <div className="text-2xl font-extrabold text-white mt-2 font-mono">
                <AnimatedNumber value={heroStats.totalBalance} prefix="₹" decimals={2} />
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+14.8% vs last month</span>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-5 border-velora-border/60">
              <div className="flex items-center justify-between text-velora-muted text-xs">
                <span>Monthly Income</span>
                <ArrowDownLeft className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-white mt-2 font-mono">
                ₹82,000.00
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+8.2% on target</span>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-5 border-velora-border/60">
              <div className="flex items-center justify-between text-velora-muted text-xs">
                <span>Monthly Expenses</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-extrabold text-white mt-2 font-mono">
                <AnimatedNumber value={heroStats.monthlySpending} prefix="₹" decimals={2} />
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-2">
                <ArrowDownRight className="w-3.5 h-3.5" />
                <span>-18% under budget</span>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-5 border-velora-border/60">
              <div className="flex items-center justify-between text-velora-muted text-xs">
                <span>Active Vault Savings</span>
                <TrendingUp className="w-4 h-4 text-velora-accent-teal" />
              </div>
              <div className="text-2xl font-extrabold text-white mt-2 font-mono">
                <AnimatedNumber value={heroStats.currentSavings} prefix="₹" decimals={0} />
              </div>
              <div className="flex items-center gap-1 text-[11px] text-velora-accent font-medium mt-2">
                <span>Goal progress: 82%</span>
              </div>
            </GlassCard>
          </div>

          {/* Main Content Grid: Chart + Category Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">

            {/* Main Recharts Financial Graph */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-velora-surface-light/40 border border-velora-border/80">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Cash Flow & Momentum</h3>
                  <p className="text-xs text-velora-muted">Monthly comparison between total income and expenses</p>
                </div>

                {/* Chart Controls */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <div className="flex bg-slate-900/80 p-1 rounded-lg border border-velora-border">
                    {(['1M', '6M', '1Y'] as const).map((range) => (
                      <button
                        key={range}
                        onClick={() => setActiveRange(range)}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${activeRange === range
                          ? 'bg-velora-accent text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recharts Area Container */}
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00E5A3" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#00E5A3" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="spendingGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" vertical={false} />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} />
                    <YAxis
                      stroke="#64748B"
                      fontSize={11}
                      tickLine={false}
                      tickFormatter={(value) => `₹${value / 1000}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#10141D',
                        borderColor: 'rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        color: '#FFF',
                        fontSize: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)',
                      }}
                      formatter={(value: number | string) => [`₹${Number(value).toLocaleString('en-IN')}`, '']}
                    />
                    <Area
                      type="monotone"
                      dataKey="income"
                      name="Income"
                      stroke="#00E5A3"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#incomeGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="spending"
                      name="Spending"
                      stroke="#6366F1"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#spendingGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-velora-border/40 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-velora-accent" />
                  <span className="text-slate-300">Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="text-slate-300">Spending</span>
                </div>
              </div>
            </div>

            {/* Side Column: Category Distribution */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-velora-surface-light/40 border border-velora-border/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Expense Distribution</h3>
                  <Filter className="w-4 h-4 text-velora-muted" />
                </div>
                <p className="text-xs text-velora-muted mb-6">Categorized allocation for June 2026</p>

                <div className="space-y-4">
                  {spendingCategories.map((cat) => (
                    <div key={cat.name} className="group cursor-pointer">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-200 group-hover:text-velora-accent transition-colors">
                          {cat.name}
                        </span>
                        <span className="font-mono text-white font-medium">
                          ₹{cat.amount.toLocaleString('en-IN')} ({cat.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-velora-border/40 flex items-center justify-between text-xs text-velora-muted">
                <span>Total Tracked</span>
                <span className="font-mono text-white font-bold">₹34,200.00</span>
              </div>
            </div>

          </div>

          {/* Bottom Table: Recent Transactions */}
          <div className="p-6 rounded-2xl bg-velora-surface-light/30 border border-velora-border/80">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                <p className="text-xs text-velora-muted">Live ledger of real-time transactions</p>
              </div>
              <button className="text-xs font-semibold text-velora-accent hover:underline flex items-center gap-1">
                View All Activity <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {recentTransactions.map((tx) => {
                const IconComponent = iconMap[tx.iconName] || Laptop;
                const isExpense = tx.type === 'expense';
                return (
                  <div
                    key={tx.id}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-velora-border/60 hover:border-velora-accent/30 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${isExpense
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{tx.name}</div>
                        <div className="text-xs text-velora-muted flex items-center gap-2 mt-0.5">
                          <span>{tx.category}</span>
                          <span>•</span>
                          <span>{tx.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-sm font-bold font-mono ${isExpense ? 'text-slate-200' : 'text-emerald-400'
                          }`}
                      >
                        {isExpense ? '-' : '+'}₹{tx.amount.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-emerald-400/80 font-mono">Completed</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
