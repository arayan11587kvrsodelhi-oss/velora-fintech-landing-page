import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { initialFinanceState } from '../data/demoData'
import type { FinanceOperationResult, FinanceState, Transaction } from '../types/finance'

const STORAGE_KEY = 'velora-demo-finance-v1'

interface FinanceContextValue extends FinanceState {
  addIncome: (amount: number, source: string) => FinanceOperationResult
  makePayment: (amount: number, category: string, payee: string) => FinanceOperationResult
  transferMoney: (amount: number, recipient: string, description: string) => FinanceOperationResult
  addSavings: (amount: number) => FinanceOperationResult
  withdrawSavings: (amount: number) => FinanceOperationResult
  toggleCard: () => FinanceOperationResult
  setNotificationsEnabled: (enabled: boolean) => void
  resetDemoData: () => void
}

const FinanceContext = createContext<FinanceContextValue | null>(null)

function readStoredState(): FinanceState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return initialFinanceState
    return { ...initialFinanceState, ...JSON.parse(stored) }
  } catch {
    return initialFinanceState
  }
}

function validAmount(amount: number) {
  return Number.isFinite(amount) && amount > 0
}

function createTransaction(title: string, category: string, amount: number, type: Transaction['type'], counterparty?: string): Transaction {
  return {
    id: `VL-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`,
    title,
    category,
    amount,
    type,
    date: 'Today',
    status: 'completed',
    counterparty,
  }
}

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FinanceState>(readStoredState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const updateWithTransaction = (nextState: FinanceState, transaction: Transaction, message: string): FinanceOperationResult => {
    setState({ ...nextState, transactions: [transaction, ...nextState.transactions] })
    return { success: true, transaction, message }
  }

  const value = useMemo<FinanceContextValue>(() => ({
    ...state,
    addIncome: (amount, source) => {
      if (!validAmount(amount)) return { success: false, message: 'Enter a valid amount.' }
      const transaction = createTransaction(source || 'Money added', 'Income', amount, 'income')
      return updateWithTransaction({ ...state, balance: state.balance + amount, income: state.income + amount }, transaction, 'Money added successfully')
    },
    makePayment: (amount, category, payee) => {
      if (!validAmount(amount)) return { success: false, message: 'Enter a valid amount.' }
      if (amount > state.balance) return { success: false, message: 'Insufficient balance.' }
      const transaction = createTransaction(payee || category, category, -amount, 'expense', payee)
      return updateWithTransaction({ ...state, balance: state.balance - amount, expenses: state.expenses + amount }, transaction, 'Payment completed')
    },
    transferMoney: (amount, recipient, description) => {
      if (!validAmount(amount)) return { success: false, message: 'Enter a valid amount.' }
      if (amount > state.balance) return { success: false, message: 'Insufficient balance.' }
      const transaction = createTransaction(description || 'Transfer', 'Transfer', -amount, 'expense', recipient)
      return updateWithTransaction({ ...state, balance: state.balance - amount, expenses: state.expenses + amount }, transaction, `Transfer successful: ₹${amount.toLocaleString('en-IN')} sent to ${recipient}`)
    },
    addSavings: (amount) => {
      if (!validAmount(amount)) return { success: false, message: 'Enter a valid amount.' }
      if (amount > state.balance) return { success: false, message: 'Insufficient balance.' }
      const transaction = createTransaction('Added to savings', 'Savings', -amount, 'savings')
      return updateWithTransaction({ ...state, balance: state.balance - amount, savings: state.savings + amount }, transaction, 'Savings updated')
    },
    withdrawSavings: (amount) => {
      if (!validAmount(amount)) return { success: false, message: 'Enter a valid amount.' }
      if (amount > state.savings) return { success: false, message: 'Insufficient savings.' }
      const transaction = createTransaction('Savings withdrawal', 'Savings', amount, 'savings')
      return updateWithTransaction({ ...state, balance: state.balance + amount, savings: state.savings - amount }, transaction, 'Savings withdrawn')
    },
    toggleCard: () => {
      const cardFrozen = !state.cardFrozen
      setState({ ...state, cardFrozen })
      return { success: true, message: cardFrozen ? 'Card frozen' : 'Card unfrozen' }
    },
    setNotificationsEnabled: (enabled) => setState({ ...state, notificationsEnabled: enabled }),
    resetDemoData: () => setState(initialFinanceState),
  }), [state])

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
}

export function useFinance() {
  const context = useContext(FinanceContext)
  if (!context) throw new Error('useFinance must be used within FinanceProvider')
  return context
}

export function formatINR(amount: number) {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`
}
