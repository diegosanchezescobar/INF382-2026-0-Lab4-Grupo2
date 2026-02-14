
import React, { useState } from 'react';
import { Screen, User, Transaction } from './types';
import { MOCK_USER, MOCK_TRANSACTIONS } from './constants';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import TransactionsScreen from './screens/Transactions';
import TransferScreen from './screens/Transfer';
import CreditCardScreen from './screens/CreditCard';
import SuccessScreen from './screens/Success';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
  const [user, setUser] = useState<User>(MOCK_USER);
  const [history, setHistory] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [lastTransfer, setLastTransfer] = useState<{ amount: number; dest: string; isPlin: boolean } | null>(null);
  const [isPlinFlow, setIsPlinFlow] = useState(false);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const startTransfer = (isPlin: boolean) => {
    setIsPlinFlow(isPlin);
    navigateTo('TRANSFER');
  };

  const handleTransfer = (amount: number, dest: string) => {
    setLastTransfer({ amount, dest, isPlin: isPlinFlow });
    setUser(prev => ({ ...prev, balance: prev.balance - amount }));
    setHistory(prev => [
      {
        id: Math.random().toString(),
        description: isPlinFlow ? `PLIN A ${dest}` : `TRANSFERENCIA A ${dest}`,
        amount,
        date: new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' }).toUpperCase(),
        type: 'expense'
      },
      ...prev
    ]);
    navigateTo('SUCCESS');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <Login onLogin={() => navigateTo('DASHBOARD')} />;
      case 'DASHBOARD':
        return <Dashboard user={user} onNavigate={navigateTo} onStartTransfer={startTransfer} />;
      case 'TRANSACTIONS':
        return <TransactionsScreen history={history} onBack={() => navigateTo('DASHBOARD')} />;
      case 'TRANSFER':
        return <TransferScreen balance={user.balance} onTransfer={handleTransfer} onBack={() => navigateTo('DASHBOARD')} isPlin={isPlinFlow} />;
      case 'CREDIT_CARD':
        return <CreditCardScreen user={user} history={history} onBack={() => navigateTo('DASHBOARD')} />;
      case 'SUCCESS':
        return <SuccessScreen transfer={lastTransfer} onDone={() => navigateTo('DASHBOARD')} />;
      default:
        return <Dashboard user={user} onNavigate={navigateTo} onStartTransfer={startTransfer} />;
    }
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gray-50 flex flex-col relative overflow-hidden shadow-2xl">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderScreen()}
      </div>
      
      {currentScreen !== 'LOGIN' && currentScreen !== 'SUCCESS' && (
        <BottomNav activeScreen={currentScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;
