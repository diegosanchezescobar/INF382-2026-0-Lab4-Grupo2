
import React from 'react';
import { ChevronLeft, Menu, Check } from 'lucide-react';

interface SuccessScreenProps {
  transfer: { amount: number; dest: string; isPlin: boolean } | null;
  onDone: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ transfer, onDone }) => {
  return (
    <div className="min-h-screen custom-gradient flex flex-col">
      <div className="px-6 pt-12 pb-24 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button onClick={onDone}><ChevronLeft size={28} /></button>
          <span className="text-xl font-medium">Comprobante</span>
        </div>
        <Menu size={24} />
      </div>

      <div className="flex-1 bg-white rounded-t-[45px] p-8 mt-[-40px] relative flex flex-col items-center">
        {/* Success Icon or Plin Logo */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[#fce8de] border-[12px] border-white/20 flex items-center justify-center">
           <div className={`w-32 h-32 rounded-full flex items-center justify-center text-white shadow-2xl ${transfer?.isPlin ? 'bg-[#00E5FF]' : 'bg-gradient-to-b from-[#e8631b] to-[#b35b2a]'}`}>
             {transfer?.isPlin ? (
               <span className="text-4xl font-black italic">plin</span>
             ) : (
               <Check size={64} strokeWidth={4} />
             )}
           </div>
        </div>

        <div className="mt-32 text-center w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {transfer?.isPlin ? '¡Envío exitoso!' : '¡Transferencia exitosa!'}
          </h2>
          <h3 className="text-5xl font-bold text-gray-900 mb-12">
            S/ {transfer?.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 }) || '0.00'}
          </h3>

          <div className="space-y-10">
            <div className="text-center">
              <p className="text-gray-900 font-bold tracking-widest text-sm mb-2">ORIGEN</p>
              <p className="text-gray-800 font-medium text-lg uppercase">FERNANDA BASTOS QUEIROZ</p>
              <p className="text-gray-600">CCI: 123.456.789-0</p>
              <p className="text-gray-600">AG 0001 C/C 12345-6</p>
            </div>

            <div className="text-center">
              <p className="text-gray-900 font-bold tracking-widest text-sm mb-2">DESTINO</p>
              <p className="text-gray-800 font-medium text-lg uppercase">{transfer?.dest || 'MIGUEL PIRES DOS SANTOS'}</p>
              <p className="text-gray-600">CCI: 123.456.789-0</p>
              <p className="text-gray-600">AG 0001 C/C 12345-6</p>
            </div>
          </div>

          <div className="mt-16 w-full px-4">
            <button 
              onClick={onDone}
              className={`w-full h-16 rounded-2xl ${transfer?.isPlin ? 'bg-[#00E5FF]' : 'btn-gradient'} text-white text-lg font-bold shadow-xl active:scale-95 transition-transform`}
            >
              COMPARTIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
