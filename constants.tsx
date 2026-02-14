
import React from 'react';
import { Transaction, User } from './types';

export const MOCK_USER: User = {
  name: "Fernanda",
  balance: 345756.87,
  investedAmount: 23123.49,
  availableRedemption: 12324.99,
  creditUsed: 23458.98,
  creditLimit: 102304.87,
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', description: 'METRO AV CENTRO', amount: 34.65, date: '22 DE JULIO 12:43', type: 'expense' },
  { id: '2', description: 'ESTACIÓN DE GASOLINA', amount: 60.00, date: '22 DE ENERO 13:23', type: 'expense' },
  { id: '3', description: 'TRANSFERIR GRABACIÓN', amount: 89.00, date: '22 DE ENERO 17:43', type: 'income' },
  { id: '4', description: 'LANCHONETE DA DI', amount: 20.55, date: '22 DE ENERO 18:13', type: 'expense' },
  { id: '5', description: 'METRO AV CENTRO', amount: 34.65, date: '21 DE JUNIO 12:43', type: 'expense' },
  { id: '6', description: 'SUBWAY AV CENTRO', amount: 34.65, date: '21 DE JUNIO 12:43', type: 'expense' },
];

export const INVESTMENT_CHART_DATA = [
  { name: 'JUN', value: 40 },
  { name: 'JUL', value: 30 },
  { name: 'AGO', value: 50 },
  { name: 'SET', value: 20 },
  { name: 'OCT', value: 25 },
  { name: 'NOV', value: 45 },
  { name: 'DIC', value: 35 },
  { name: 'ENE', value: 42 },
];
