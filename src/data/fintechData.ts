export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  type: 'expense' | 'income' | 'transfer';
  date: string;
  iconName: string;
}

export interface SpendingCategory {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface ChartPoint {
  month: string;
  spending: number;
  income: number;
  savings: number;
}

export const heroStats = {
  totalBalance: 248950.00,
  monthlySpending: 34200.00,
  savingsProgress: 82,
  savingsGoal: 500000.00,
  currentSavings: 410000.00,
};

export const monthlyChartData: ChartPoint[] = [
  { month: 'Jan', spending: 28400, income: 65000, savings: 36600 },
  { month: 'Feb', spending: 31200, income: 68000, savings: 36800 },
  { month: 'Mar', spending: 26900, income: 72000, savings: 45100 },
  { month: 'Apr', spending: 38500, income: 70000, savings: 31500 },
  { month: 'May', spending: 29800, income: 78000, savings: 48200 },
  { month: 'Jun', spending: 34200, income: 82000, savings: 47800 },
];

export const spendingCategories: SpendingCategory[] = [
  { name: 'Investments & Stocks', amount: 14200, percentage: 41.5, color: '#00E5A3' },
  { name: 'Lifestyle & Travel', amount: 8500, percentage: 24.8, color: '#00D2C2' },
  { name: 'Tech & Gadgets', amount: 6200, percentage: 18.1, color: '#6366F1' },
  { name: 'Subscriptions', amount: 3100, percentage: 9.0, color: '#A855F7' },
  { name: 'Dining & Essentials', amount: 2200, percentage: 6.6, color: '#F59E0B' },
];

export const recentTransactions: Transaction[] = [
  {
    id: 'tx-1',
    name: 'Apple Store India',
    category: 'Hardware',
    amount: 129900,
    type: 'expense',
    date: 'Today, 2:45 PM',
    iconName: 'Laptop',
  },
  {
    id: 'tx-2',
    name: 'Stripe Payout - Client X',
    category: 'Income',
    amount: 85000,
    type: 'income',
    date: 'Yesterday',
    iconName: 'ArrowDownLeft',
  },
  {
    id: 'tx-3',
    name: 'Mutual Fund SIP',
    category: 'Investment',
    amount: 25000,
    type: 'transfer',
    date: '12 Oct',
    iconName: 'TrendingUp',
  },
  {
    id: 'tx-4',
    name: 'Figma Annual Pro',
    category: 'Subscription',
    amount: 14400,
    type: 'expense',
    date: '10 Oct',
    iconName: 'CreditCard',
  },
];

export const trustCompanies = [
  { name: 'NEXUS LABS', label: 'FINTECH ENGINES' },
  { name: 'AURA CAPITAL', label: 'VENTURE GROUP' },
  { name: 'VERITAS TRUST', label: 'PAYMENTS NETWORK' },
  { name: 'SYNAPSE PROTOCOL', label: 'DEFI SYNDICATE' },
  { name: 'QUANTUM PAY', label: 'GLOBAL RAIL' },
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    description: 'Essential financial tracking & smart controls for individuals getting started.',
    features: [
      'Basic financial tracking & analytics',
      'Spending insights & monthly budget',
      'Up to 2 active savings goals',
      'Standard debit card access',
      'Community support',
    ],
    highlighted: false,
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '₹299',
    period: '/month',
    description: 'Advanced financial intelligence, unlimited goals, and premium card perks.',
    features: [
      'Advanced real-time analytics & charts',
      'AI Smart Insights & spending forecasts',
      'Unlimited savings goals & auto-stashing',
      'Exclusive Metallic Virtual Debit Card',
      'Zero international markup on transfers',
      '24/7 Priority concierge support',
    ],
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Start Pro Trial',
  },
  {
    name: 'Business',
    price: 'Custom',
    period: '',
    description: 'Custom team controls, enterprise reporting, and dedicated liquidity rails.',
    features: [
      'Multi-user team management & permissions',
      'Automated expense reporting & tax tags',
      'Custom API access & Webhook triggers',
      'Dedicated account director',
      'Custom SLAs & security controls',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];
