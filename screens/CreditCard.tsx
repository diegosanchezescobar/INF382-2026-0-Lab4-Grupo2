
import React from 'react';
import { ChevronLeft, Bell, Menu, EyeOff, Plus, Search, ArrowUp } from 'lucide-react';
import { User, Transaction } from '../types';

interface CreditCardScreenProps {
  user: User;
  history: Transaction[];
  onBack: () => void;
}

const CreditCardScreen: React.FC<CreditCardScreenProps> = ({ user, history, onBack }) => {
  return (
    <div className="min-h-full custom-gradient">
      <div className="px-6 pt-12 pb-8 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button onClick={onBack}><ChevronLeft size={28} /></button>
          <span className="text-xl font-medium">Tarjeta de crédito</span>
        </div>
        <div className="flex items-center gap-5">
          <Bell size={24} />
          <Menu size={24} />
        </div>
      </div>

      <div className="px-6 mb-8 relative">
        {/* Visa Card Visualization */}
        <div className="w-full aspect-[1.6/1] rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden relative" 
             style={{ background: 'linear-gradient(135deg, #f0b48f 0%, #b35b2a 100%)' }}>
          <div className="flex justify-between items-start">
            <span className="text-4xl italic font-black">VISA</span>
            <EyeOff size={24} />
          </div>
          
          <div className="text-right">
            <p className="text-sm opacity-80">03/2034</p>
          </div>

          <div>
            <p className="text-lg font-medium tracking-widest uppercase mb-1">{user.name} BASTOS QUEIROZ</p>
            <p className="text-xl font-bold tracking-[0.3em]">•••• •••• •••• 1234</p>
          </div>
          
          {/* Shine effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="bg-white rounded-t-[45px] p-8 min-h-[600px]">
        {/* Add Card Button */}
        <button className="w-full h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-between px-6 mb-10 active:bg-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-900">
              <Plus size={20} />
            </div>
            <span className="font-semibold text-gray-800">Añadir nueva tarjeta</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            <Plus size={16} />
          </div>
        </button>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-700 font-semibold">Mi crédito actual</p>
            <EyeOff size={20} className="text-gray-400" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">S/ {user.creditUsed.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</h3>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-gray-300" 
              style={{ width: `${(user.creditUsed / user.creditLimit) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-gray-700 font-medium">
            Saldo Disponible: <span className="font-bold">S/ {user.creditLimit.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-gray-800 font-bold text-lg">Últimas transacciones</h4>
            <Search size={24} className="text-gray-900" />
          </div>
          
          <div className="space-y-6">
            {history.slice(0, 2).map(tx => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                    <ArrowUp size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm uppercase">{tx.description}</p>
                    <p className="text-gray-400 text-[10px] font-bold uppercase">{tx.date}</p>
                  </div>
                </div>
                <span className="font-bold text-gray-800">S/ {tx.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardScreen;
