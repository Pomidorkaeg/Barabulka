import React, { useState } from 'react';
import PlayerManagement from './PlayerManagement';
import CoachManagement from './CoachManagement';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'players' | 'coaches'>('players');
  const [lastLoginTime] = useState(() => {
    const time = localStorage.getItem('lastLoginTime');
    return time || new Date().toLocaleString();
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Панель администратора</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab('players')}
                  className={`${
                    activeTab === 'players'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Игроки
                </button>
                <button
                  onClick={() => setActiveTab('coaches')}
                  className={`${
                    activeTab === 'coaches'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Тренеры
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">
                Последний вход: {lastLoginTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'players' ? <PlayerManagement /> : <CoachManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard; 