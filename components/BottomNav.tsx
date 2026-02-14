
import React from 'react';
import { Home, BarChart2, FileText, User as UserIcon, ScanLine } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#E0E0E0] h-20 flex items-center justify-between px-6 z-50 rounded-t-xl border-t border-gray-300">
      <button 
        onClick={() => onNavigate('DASHBOARD')}
        className={`flex flex-col items-center gap-1 ${activeScreen === 'DASHBOARD' ? 'text-black' : 'text-gray-500'}`}
      >
        <Home size={24} />
      </button>

      <button 
        onClick={() => onNavigate('DASHBOARD')} // Simulation for investments
        className={`flex flex-col items-center gap-1 ${activeScreen === 'DASHBOARD' ? 'text-black' : 'text-gray-500'}`}
      >
        <BarChart2 size={24} />
      </button>

      {/* Center Scan Button */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <button className="w-20 h-20 rounded-full bg-gradient-to-b from-[#C06020] to-[#904010] flex items-center justify-center text-white border-[6px] border-[#E0E0E0] shadow-lg active:scale-95 transition-transform">
          <ScanLine size={32} />
        </button>
      </div>

      <button 
        onClick={() => onNavigate('TRANSACTIONS')}
        className={`flex flex-col items-center gap-1 ${activeScreen === 'TRANSACTIONS' ? 'text-black' : 'text-gray-500'}`}
      >
        <FileText size={24} />
      </button>

      <button 
        onClick={() => onNavigate('PROFILE')}
        className={`flex flex-col items-center gap-1 ${activeScreen === 'PROFILE' ? 'text-black' : 'text-gray-500'}`}
      >
        <UserIcon size={24} />
      </button>
    </div>
  );
};

export default BottomNav;
