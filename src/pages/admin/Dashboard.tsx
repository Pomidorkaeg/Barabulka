import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, Trophy, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-fc-darkGreen shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">ФК Гудаут Админ</span>
            </div>
            <div>
              <Link 
                to="/" 
                className="text-white hover:text-gray-200 text-sm flex items-center"
              >
                <span>Вернуться на сайт</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-[calc(100vh-64px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin"
                  className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Панель управления
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/players"
                  className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Игроки
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/tournaments"
                  className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Турниры
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200 mt-4">
                <button 
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center"
                  onClick={() => { alert('Выход из системы'); window.location.href = '/'; }}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
