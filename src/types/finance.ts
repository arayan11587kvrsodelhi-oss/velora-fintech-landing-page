export type TransactionType = 'income' | 'expense' | 'savings'
export type TransactionStatus = 'completed' | 'pending'

export interface Transaction {
  id: string
  title: string
  category: string
  amount: number
  type: TransactionType
  date: string
  status: TransactionStatus
  counterparty?: string
}

export interface FinanceState {
  balance: number
  income: number
  expenses: number
  savings: number
  transactions: Transaction[]
  cardFrozen: boolean
  savingsGoal: {
    name: string
    target: number
  }
  notificationsEnabled: boolean
}

export type FinanceOperationResult =
  | { success: true; transaction?: Transaction; message: string }
  | { success: false; message: string }
