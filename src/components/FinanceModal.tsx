import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import type { FinanceOperationResult } from '../types/finance'

export type FinanceModalMode = 'transfer' | 'payment' | 'income' | 'savings' | 'withdraw'

interface FinanceModalProps {
  mode: FinanceModalMode | null
  onClose: () => void
  onSubmit: (amount: number, fields: Record<string, string>) => FinanceOperationResult
}

const copy = {
  transfer: { title: 'Transfer money', action: 'Transfer Money', amount: 'Amount', first: 'Recipient', second: 'Description', firstPlaceholder: 'Rahul Sharma', secondPlaceholder: 'Dinner' },
  payment: { title: 'Make a payment', action: 'Pay now', amount: 'Amount', first: 'Pay to', second: 'Category', firstPlaceholder: 'Merchant name', secondPlaceholder: 'Food' },
  income: { title: 'Add money', action: 'Add money', amount: 'Amount', first: 'Source', second: '', firstPlaceholder: 'Cash Deposit', secondPlaceholder: '' },
  savings: { title: 'Add to savings', action: 'Update savings', amount: 'Amount', first: '', second: '', firstPlaceholder: '', secondPlaceholder: '' },
  withdraw: { title: 'Withdraw savings', action: 'Withdraw', amount: 'Amount', first: '', second: '', firstPlaceholder: '', secondPlaceholder: '' },
} as const

export default function FinanceModal({ mode, onClose, onSubmit }: FinanceModalProps) {
  const [amount, setAmount] = useState('')
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [error, setError] = useState('')
  const config = mode ? copy[mode] : null

  const close = () => {
    setAmount('')
    setFirst('')
    setSecond('')
    setError('')
    onClose()
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = onSubmit(Number(amount), { first, second })
    if (!result.success) {
      setError(result.message)
      return
    }
    close()
  }

  return (
    <AnimatePresence>
      {config && (
        <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-canvas/75 p-5 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && close()}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="finance-modal-title" className="relative w-full max-w-md rounded-2xl border border-wire bg-panel p-6 shadow-2xl shadow-black/50 sm:p-8" initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }}>
            <button type="button" onClick={close} className="absolute right-4 top-4 rounded-lg p-2 text-ink-3 hover:bg-panel-2 hover:text-ink" aria-label="Close dialog"><X size={16} /></button>
            <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-mint">Demo transaction</p>
            <h2 id="finance-modal-title" className="mb-6 pr-8 font-display text-2xl font-semibold text-ink">{config.title}</h2>
            <form onSubmit={submit} className="space-y-4">
              {config.first && <label className="block text-xs text-ink-2">{config.first}<input value={first} onChange={(event) => setFirst(event.target.value)} placeholder={config.firstPlaceholder} required className="mt-2 w-full rounded-xl border border-wire bg-panel-2 px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-3 focus:border-mint" /></label>}
              <label className="block text-xs text-ink-2">{config.amount}<input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" min="0.01" step="0.01" placeholder="2,500" required className="mt-2 w-full rounded-xl border border-wire bg-panel-2 px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-3 focus:border-mint" /></label>
              {config.second && (mode === 'payment' ? <label className="block text-xs text-ink-2">{config.second}<select value={second} onChange={(event) => setSecond(event.target.value)} required className="mt-2 w-full rounded-xl border border-wire bg-panel-2 px-4 py-3 text-sm text-ink outline-none focus:border-mint"><option value="">Choose category</option>{['Food', 'Shopping', 'Bills', 'Entertainment', 'Transport', 'Other'].map((item) => <option key={item}>{item}</option>)}</select></label> : <label className="block text-xs text-ink-2">{config.second}<input value={second} onChange={(event) => setSecond(event.target.value)} placeholder={config.secondPlaceholder} required className="mt-2 w-full rounded-xl border border-wire bg-panel-2 px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-3 focus:border-mint" /></label>)}
              {error && <p role="alert" className="text-xs text-error">{error}</p>}
              <div className="flex gap-3 pt-2"><button type="button" onClick={close} className="flex-1 rounded-xl border border-wire px-4 py-3 text-sm text-ink-2 hover:border-wire-2 hover:text-ink">Cancel</button><button type="submit" className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-mint px-4 py-3 text-sm font-semibold text-canvas hover:bg-mint/90">{config.action}<ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" /></button></div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
