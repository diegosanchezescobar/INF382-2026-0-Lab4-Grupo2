
import React from 'react';
import { ChevronLeft, Bell, EyeOff, Menu, Search, ArrowUp, ArrowDown } from 'lucide-react';
import { Transaction } from '../types';

interface TransactionsScreenProps {
  history: Transaction[];
  onBack: () => void;
}

const TransactionsScreen: React.FC<TransactionsScreenProps> = ({ history, onBack }) => {
  return (
    <div className="min-h-full custom-gradient">
      <div className="px-6 pt-12 pb-8 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button onClick={onBack}><ChevronLeft size={28} /></button>
          <span className="text-xl font-medium tracking-wide">DETALLE</span>
        </div>
        <div className="flex items-center gap-5">
          <Bell size={24} />
          <EyeOff size={24} />
          <Menu size={24} />
        </div>
      </div>

      <div className="bg-white rounded-t-[45px] p-8 min-h-[calc(100vh-140px)]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#333]">TRANSACCIONES</h2>
          <button className="text-gray-900"><Search size={28} /></button>
        </div>

        {/* Hardcoded grouping based on Figma */}
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-400 text-sm font-bold mb-6 tracking-wider">22 DE JULIO DE 2023</h3>
            <div className="space-y-6">
              {history.slice(0, 4).map(tx => (
                <TransactionItem key={tx.id} tx={tx} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gray-400 text-sm font-bold mb-6 tracking-wider">21 DE JUNIO DE 2026</h3>
            <div className="space-y-6">
              {history.slice(4, 8).map(tx => (
                <TransactionItem key={tx.id} tx={tx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionItem: React.FC<{ tx: Transaction }> = ({ tx }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${tx.type === 'income' ? 'bg-gray-100' : 'bg-gray-100'}`}>
        {tx.type === 'income' ? <ArrowDown className="text-gray-400" size={24} /> : <ArrowUp className="text-gray-400" size={24} />}
      </div>
      <div>
        <p className="font-bold text-gray-800 tracking-tight leading-tight">{tx.description}</p>
        <p className="text-gray-400 text-[10px] font-bold uppercase mt-1">{tx.date}</p>
      </div>
    </div>
    <span className="font-bold text-gray-800 text-lg">S/ {tx.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
  </div>
);

export default TransactionsScreen;
