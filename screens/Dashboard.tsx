
import React, { useState } from 'react';
import { Bell, EyeOff, Menu, ChevronRight, FileText, CreditCard, SendHorizontal } from 'lucide-react';
import { User, Screen } from '../types';
import { INVESTMENT_CHART_DATA } from '../constants';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

interface DashboardProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  onStartTransfer: (isPlin: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onNavigate, onStartTransfer }) => {
  const [activeTab, setActiveTab] = useState<'PRINCIPAL' | 'INVERSIONES' | 'SERVICIOS'>('INVERSIONES');

  return (
    <div className="min-h-full custom-gradient">
      {/* Header */}
      <div className="px-6 pt-12 pb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#CD5C2C] rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-[#E88E5E] rounded-full overflow-hidden">
               <img src="https://picsum.photos/seed/fernanda/100" alt="Avatar" />
            </div>
          </div>
          <span className="text-white text-lg font-medium">Hola, Fernanda</span>
        </div>
        <div className="flex items-center gap-5 text-white">
          <Bell size={24} />
          <EyeOff size={24} />
          <Menu size={24} />
        </div>
      </div>

      {/* Balance Card Section */}
      <div className="px-6">
        <div className="mb-8">
          <p className="text-white/80 text-lg mb-1">Saldo disponible</p>
          <div className="flex items-center justify-between">
            <h2 className="text-white text-4xl font-semibold">S/ {user.balance.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</h2>
            <ChevronRight className="text-white opacity-80" size={32} />
          </div>
          <button className="text-white/60 text-sm mt-2 font-semibold tracking-wider">VER DETALLE</button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2 mb-10">
          <QuickAction icon={<SendHorizontal />} label="TRANSF." onClick={() => onStartTransfer(false)} />
          <QuickAction icon={<FileText />} label="DETALLE" onClick={() => onNavigate('TRANSACTIONS')} />
          <QuickAction icon={<CreditCard />} label="CRÉDITO" onClick={() => onNavigate('CREDIT_CARD')} />
          <QuickAction icon={<PlinIcon />} label="PLIN" onClick={() => onStartTransfer(true)} />
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-white/20 mb-6">
          <Tab active={activeTab === 'PRINCIPAL'} onClick={() => setActiveTab('PRINCIPAL')} label="PRINCIPAL" />
          <Tab active={activeTab === 'INVERSIONES'} onClick={() => setActiveTab('INVERSIONES')} label="INVERSIONES" />
          <Tab active={activeTab === 'SERVICIOS'} onClick={() => setActiveTab('SERVICIOS')} label="SERVICIOS" />
        </div>
      </div>

      {/* Content White Sheet */}
      <div className="bg-white rounded-t-[45px] p-8 min-h-[400px]">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-gray-700 font-medium">Total invertido</p>
              <h3 className="text-3xl font-bold text-gray-900">S/ {user.investedAmount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</h3>
            </div>
            <button className="border border-[#D14D14] text-[#D14D14] px-6 py-2 rounded-xl font-semibold active:bg-[#D14D14]/5">
              Redimir
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-lg font-medium">Disponible para canje</span>
            <span className="text-gray-900 text-lg font-bold">S/ {user.availableRedemption.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <hr className="mb-8 opacity-50" />

        <div>
          <h4 className="text-gray-900 font-semibold text-lg mb-6">Rendimiento</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={INVESTMENT_CHART_DATA}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4B5563', fontSize: 10, fontWeight: 500 }}
                  interval={0}
                />
                <Bar 
                  dataKey="value" 
                  fill="#CB9E94" 
                  radius={[4, 4, 0, 0]} 
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickAction: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#D14D14] shadow-lg group-active:scale-95 transition-transform">
      {/* Fix: casting icon to React.ReactElement<any> to resolve type mismatch on 'size' property */}
      {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
    </div>
    <span className="text-white text-[10px] font-bold tracking-wider">{label}</span>
  </button>
);

const Tab: React.FC<{ active: boolean; label: string; onClick: () => void }> = ({ active, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`pb-2 px-1 text-[12px] font-bold tracking-widest transition-all border-b-2 ${active ? 'text-white border-white' : 'text-white/40 border-transparent'}`}
  >
    {label}
  </button>
);

const PlinIcon = () => (
  <div className="relative flex items-center justify-center">
    <div className="w-7 h-7 bg-[#00E5FF] rounded-full flex items-center justify-center overflow-hidden shadow-sm">
      <span className="text-[10px] font-black text-white italic">plin</span>
    </div>
  </div>
);

export default Dashboard;
