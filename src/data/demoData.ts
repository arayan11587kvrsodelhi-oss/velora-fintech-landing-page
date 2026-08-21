import type { FinanceState } from '../types/finance'

export const initialFinanceState: FinanceState = {
  balance: 124580,
  income: 65000,
  expenses: 28450,
  savings: 42000,
  cardFrozen: false,
  savingsGoal: { name: 'Emergency Fund', target: 100000 },
  notificationsEnabled: true,
  transactions: [
    { id: 'demo-1', title: 'Netflix', category: 'Entertainment', amount: -649, type: 'expense', date: 'Today', status: 'completed' },
    { id: 'demo-2', title: 'Amazon', category: 'Shopping', amount: -2499, type: 'expense', date: 'Yesterday', status: 'completed' },
    { id: 'demo-3', title: 'Salary', category: 'Income', amount: 65000, type: 'income', date: '18 Aug', status: 'completed' },
    { id: 'demo-4', title: 'Swiggy', category: 'Food', amount: -580, type: 'expense', date: '17 Aug', status: 'completed' },
    { id: 'demo-5', title: 'Electricity Bill', category: 'Bills', amount: -2340, type: 'expense', date: '15 Aug', status: 'completed' },
  ],
}
