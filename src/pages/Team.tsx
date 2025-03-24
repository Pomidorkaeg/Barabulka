import React, { useState } from 'react';
import '../styles/animations.css';

interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  image: string;
  team: string;
  stats?: {
    matches: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  };
}

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  since: number;
  team: string;
}

const Team: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<'gudauta' | 'sport-school'>('gudauta');
  const [activeTab, setActiveTab] = useState<'players' | 'staff'>('players');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [positionFilter, setPositionFilter] = useState<string>('all');

  // Sample player data
  const players: Player[] = [
    {
      id: 1,
      name: 'Александр Иванов',
      position: 'Вратарь',
      number: 1,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      team: 'gudauta'
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      position: 'Защитник',
      number: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      team: 'gudauta'
    },
    {
      id: 3,
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      team: 'gudauta'
    },
    {
      id: 4,
      name: 'Игорь Соколов',
      position: 'Полузащитник',
      number: 8,
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      team: 'gudauta'
    },
    {
      id: 5,
      name: 'Сергей Козлов',
      position: 'Полузащитник',
      number: 10,
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      team: 'gudauta'
    },
    {
      id: 6,
      name: 'Андрей Попов',
      position: 'Нападающий',
      number: 9,
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      team: 'gudauta'
    },
    {
      id: 7,
      name: 'Михаил Соколов',
      position: 'Вратарь',
      number: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      team: 'sport-school'
    },
    {
      id: 8,
      name: 'Денис Петров',
      position: 'Защитник',
      number: 4,
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      team: 'sport-school'
    },
    {
      id: 9,
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      team: 'sport-school'
    },
    {
      id: 10,
      name: 'Игорь Кузнецов',
      position: 'Полузащитник',
      number: 8,
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      team: 'sport-school'
    },
    {
      id: 11,
      name: 'Сергей Попов',
      position: 'Полузащитник',
      number: 10,
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      team: 'sport-school'
    },
    {
      id: 12,
      name: 'Андрей Морозов',
      position: 'Нападающий',
      number: 9,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      team: 'sport-school'
    }
  ];
  
  // Sample staff data
  const staff: StaffMember[] = [
    {
      id: 1,
      name: 'Алексей Николаевич Соколов',
      role: 'Главный тренер',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      since: 2020,
      team: 'gudauta'
    },
    {
      id: 2,
      name: 'Дмитрий Александрович Петров',
      role: 'Тренер вратарей',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: 2021,
      team: 'gudauta'
    },
    {
      id: 3,
      name: 'Игорь Владимирович Смирнов',
      role: 'Тренер по физической подготовке',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: 2022,
      team: 'gudauta'
    },
    {
      id: 4,
      name: 'Алексей Николаевич Соколов',
      role: 'Тренер спортивной школы',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: 2020,
      team: 'sport-school'
    },
    {
      id: 5,
      name: 'Дмитрий Александрович Петров',
      role: 'Тренер вратарей спортивной школы',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      since: 2021,
      team: 'sport-school'
    }
  ];
  
  // Фильтрация игроков по позиции и команде
  const filteredPlayers = players.filter(player => {
    const positionMatch = positionFilter === 'all' || player.position === positionFilter;
    const teamMatch = player.team === activeTeam;
    return positionMatch && teamMatch;
  });
  
  // Фильтрация тренерского штаба по команде
  const filteredStaff = staff.filter(member => member.team === activeTeam);
  
  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Состав команды
          </span>
        </h1>

        {/* Основное меню выбора команды */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => {
              setActiveTeam('gudauta');
              setActiveTab('players');
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTeam === 'gudauta' && activeTab === 'players'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            ФК Гудаут
          </button>
          <button
            onClick={() => {
              setActiveTeam('sport-school');
              setActiveTab('players');
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTeam === 'sport-school' && activeTab === 'players'
                ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            СШ Гудаут
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'staff'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Тренерский штаб
          </button>
        </div>

        {/* Подменю для тренерского штаба */}
        {activeTab === 'staff' && (
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTeam('gudauta')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTeam === 'gudauta'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Тренерский штаб ФК Гудаут
            </button>
            <button
              onClick={() => setActiveTeam('sport-school')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTeam === 'sport-school'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Тренерский штаб СШ Гудаут
            </button>
          </div>
        )}

        {/* Фильтры по позициям для игроков */}
        {activeTab === 'players' && (
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setPositionFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                positionFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Все
            </button>
            <button
              onClick={() => setPositionFilter('goalkeeper')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                positionFilter === 'goalkeeper'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Вратари
            </button>
            <button
              onClick={() => setPositionFilter('defender')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                positionFilter === 'defender'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Защитники
            </button>
            <button
              onClick={() => setPositionFilter('midfielder')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                positionFilter === 'midfielder'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Полузащитники
            </button>
            <button
              onClick={() => setPositionFilter('forward')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                positionFilter === 'forward'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Нападающие
            </button>
          </div>
        )}

        {/* Сетка игроков/тренеров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeTab === 'players'
            ? filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
                    <p className="text-gray-400">{player.position}</p>
                    <p className="text-blue-400 font-bold">#{player.number}</p>
                  </div>
                </div>
              ))
            : filteredStaff.map((staff) => (
                <div
                  key={staff.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
                    <p className="text-gray-400">{staff.role}</p>
                    <p className="text-blue-400">В команде с {staff.since}</p>
                  </div>
                </div>
              ))}
        </div>

        {/* Модальное окно с информацией об игроке */}
        {selectedPlayer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 animate-fadeIn">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedPlayer.name}</h2>
                <button
                  onClick={() => setSelectedPlayer(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedPlayer.image}
                    alt={selectedPlayer.name}
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-xl mb-2">#{selectedPlayer.number}</p>
                  <p className="text-gray-400 mb-4">{selectedPlayer.position}</p>
                  {selectedPlayer.stats && (
                    <div className="space-y-2">
                      <p>Матчи: {selectedPlayer.stats.matches}</p>
                      <p>Голы: {selectedPlayer.stats.goals}</p>
                      <p>Передачи: {selectedPlayer.stats.assists}</p>
                      <p>Желтые карточки: {selectedPlayer.stats.yellowCards}</p>
                      <p>Красные карточки: {selectedPlayer.stats.redCards}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
