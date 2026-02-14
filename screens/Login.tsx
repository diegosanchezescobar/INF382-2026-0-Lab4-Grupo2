
import React from 'react';
import { User as UserIcon } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="h-screen w-full custom-gradient flex flex-col items-center justify-center px-8">
      <div className="mb-12 flex flex-col items-center animate-fadeIn">
        <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <UserIcon size={64} className="text-white opacity-80" />
        </div>
        <h1 className="text-white text-2xl font-medium mb-12">Buen día, Fernanda</h1>
        
        <button 
          onClick={onLogin}
          className="w-full max-w-xs h-16 rounded-2xl btn-gradient text-white text-xl font-semibold shadow-xl active:scale-95 transition-all"
        >
          Ingresar
        </button>

        <button className="mt-8 flex items-center gap-2 text-white/80 font-medium">
          <UserIcon size={20} />
          Entrar con otra cuenta
        </button>
      </div>
    </div>
  );
};

export default Login;
