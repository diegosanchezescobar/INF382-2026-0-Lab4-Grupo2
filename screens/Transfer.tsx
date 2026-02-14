
import React, { useState, useRef } from 'react';
import { ChevronLeft, Bell, Menu, EyeOff, Edit3 } from 'lucide-react';

interface TransferScreenProps {
  balance: number;
  onTransfer: (amount: number, dest: string) => void;
  onBack: () => void;
  isPlin?: boolean;
}

const TransferScreen: React.FC<TransferScreenProps> = ({ balance, onTransfer, onBack, isPlin = false }) => {
  const [amount, setAmount] = useState('0.00');
  const [destName] = useState('MIGUEL PIRES DOS SANTOS');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic formatting: only numbers and one decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) return;
    if (parts[1] && parts[1].length > 2) return;
    setAmount(value || '0.00');
  };

  const handleFocus = () => {
    if (amount === '0.00') setAmount('');
  };

  const handleBlur = () => {
    if (amount === '' || amount === '.') setAmount('0.00');
    else {
      const parsed = parseFloat(amount);
      setAmount(parsed.toFixed(2));
    }
  };

  const executeTransfer = () => {
    const val = parseFloat(amount);
    if (val > 0 && val <= balance) {
      onTransfer(val, destName);
    } else if (val > balance) {
      alert("Saldo insuficiente");
    }
  };

  return (
    <div className="min-h-full custom-gradient">
      <div className="px-6 pt-12 pb-8 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button onClick={onBack}><ChevronLeft size={28} /></button>
          <span className="text-xl font-medium">{isPlin ? 'Plin' : 'Transferencia'}</span>
        </div>
        <div className="flex items-center gap-5">
          <Bell size={24} />
          <Menu size={24} />
        </div>
      </div>

      <div className="bg-white rounded-t-[45px] p-8 min-h-[calc(100vh-140px)] flex flex-col">
        <div className="flex items-center justify-between mb-12">
          <span className="text-gray-900 font-bold text-lg">Saldo disponible:</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-bold text-lg">S/ {balance.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
            <EyeOff size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-16 pt-10">
          <div className="relative flex items-center justify-center group">
            <span className="text-5xl font-bold text-gray-900 mr-2">S/</span>
            <input 
              ref={inputRef}
              type="text" 
              inputMode="decimal"
              className="text-6xl font-bold text-gray-900 bg-transparent border-none outline-none w-48 text-left focus:ring-0 placeholder-gray-200"
              value={amount}
              onChange={handleAmountChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoFocus
            />
            <button onClick={() => inputRef.current?.focus()} className="ml-2">
              <Edit3 size={24} className="text-gray-400" />
            </button>
          </div>
          <p className="text-gray-500 font-bold text-lg mt-8 mb-1">Transfiriendo a:</p>
          <p className="text-gray-900 font-bold text-xl uppercase tracking-tight">{destName}</p>
        </div>

        <div className="space-y-4 mt-auto">
          <button 
            onClick={executeTransfer}
            className={`w-full h-16 rounded-2xl ${isPlin ? 'bg-[#00E5FF] text-white' : 'btn-gradient text-white'} text-lg font-bold shadow-xl active:scale-[0.98] transition-all`}
          >
            {isPlin ? 'Enviar por Plin' : 'Realizar Transferencia'}
          </button>
          <button className="w-full h-16 rounded-2xl border border-gray-200 text-gray-400 text-lg font-bold">
            Programar Transferencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferScreen;
