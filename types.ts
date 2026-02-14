
export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  category?: string;
}

export interface User {
  name: string;
  balance: number;
  investedAmount: number;
  availableRedemption: number;
  creditUsed: number;
  creditLimit: number;
}

export interface AccountDetail {
  cci: string;
  number: string;
  owner: string;
}

export type Screen = 'LOGIN' | 'DASHBOARD' | 'TRANSACTIONS' | 'TRANSFER' | 'CREDIT_CARD' | 'SUCCESS' | 'PROFILE';
