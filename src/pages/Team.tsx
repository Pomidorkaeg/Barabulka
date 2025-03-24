import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, User, Trophy, ChevronDown, Shield, Award, Calendar, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import '../styles/animations.css';

interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  birthDate: string;
  height: number;
  weight: number;
  nationality: string;
  image: string;
  matches: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  team: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  since: string;
  team: string;
}

const Team = () => {
  const [activeTab, setActiveTab] = useState('players');
  const [activePosition, setActivePosition] = useState('all');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [activeTeam, setActiveTeam] = useState('gudauta');
  
  // Sample player data
  const players: Player[] = [
    {
      id: '1',
      name: 'Александр Иванов',
      position: 'Вратарь',
      number: 1,
      birthDate: '15.05.1992',
      height: 192,
      weight: 87,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 24,
      goals: 0,
      assists: 1,
      yellowCards: 1,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '2',
      name: 'Дмитрий Петров',
      position: 'Защитник',
      number: 4,
      birthDate: '23.09.1994',
      height: 186,
      weight: 82,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 22,
      goals: 2,
      assists: 3,
      yellowCards: 4,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '3',
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      birthDate: '07.12.1995',
      height: 184,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 26,
      goals: 0,
      assists: 1,
      yellowCards: 5,
      redCards: 1,
      team: 'gudauta'
    },
    {
      id: '4',
      name: 'Игорь Соколов',
      position: 'Полузащитник',
      number: 8,
      birthDate: '18.03.1993',
      height: 177,
      weight: 72,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 28,
      goals: 5,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '5',
      name: 'Сергей Козлов',
      position: 'Полузащитник',
      number: 10,
      birthDate: '05.07.1996',
      height: 179,
      weight: 74,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 25,
      goals: 8,
      assists: 10,
      yellowCards: 2,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '6',
      name: 'Андрей Попов',
      position: 'Нападающий',
      number: 9,
      birthDate: '12.02.1994',
      height: 183,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      matches: 27,
      goals: 15,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '7',
      name: 'Михаил Соколов',
      position: 'Вратарь',
      number: 1,
      birthDate: '10.03.2005',
      height: 185,
      weight: 75,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 15,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '8',
      name: 'Денис Петров',
      position: 'Защитник',
      number: 4,
      birthDate: '23.09.2006',
      height: 178,
      weight: 70,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 18,
      goals: 1,
      assists: 2,
      yellowCards: 2,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '9',
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      birthDate: '07.12.2005',
      height: 180,
      weight: 72,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 16,
      goals: 0,
      assists: 1,
      yellowCards: 3,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '10',
      name: 'Игорь Кузнецов',
      position: 'Полузащитник',
      number: 8,
      birthDate: '18.03.2006',
      height: 175,
      weight: 68,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 20,
      goals: 3,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '11',
      name: 'Сергей Попов',
      position: 'Полузащитник',
      number: 10,
      birthDate: '05.07.2005',
      height: 177,
      weight: 70,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      matches: 19,
      goals: 5,
      assists: 7,
      yellowCards: 1,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '12',
      name: 'Андрей Морозов',
      position: 'Нападающий',
      number: 9,
      birthDate: '12.02.2006',
      height: 182,
      weight: 74,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 21,
      goals: 12,
      assists: 4,
      yellowCards: 1,
      redCards: 0,
      team: 'sport-school'
    }
  ];
  
  // Sample staff data
  const staff: StaffMember[] = [
    {
      id: '1',
      name: 'Алексей Николаевич Соколов',
      role: 'Главный тренер',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      since: '2020',
      team: 'gudauta'
    },
    {
      id: '2',
      name: 'Дмитрий Александрович Петров',
      role: 'Тренер вратарей',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: '2021',
      team: 'gudauta'
    },
    {
      id: '3',
      name: 'Игорь Владимирович Смирнов',
      role: 'Тренер по физической подготовке',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: '2022',
      team: 'gudauta'
    },
    {
      id: '4',
      name: 'Алексей Николаевич Соколов',
      role: 'Тренер спортивной школы',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: '2020',
      team: 'sport-school'
    },
    {
      id: '5',
      name: 'Дмитрий Александрович Петров',
      role: 'Тренер вратарей спортивной школы',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      since: '2021',
      team: 'sport-school'
    }
  ];
  
  // Фильтрация игроков по позиции и команде
  const filteredPlayers = players.filter(player => {
    const positionMatch = activePosition === 'all' || player.position === activePosition;
    const teamMatch = player.team === activeTeam;
    return positionMatch && teamMatch;
  });
  
  // Фильтрация тренерского штаба по команде
  const filteredStaff = staff.filter(member => member.team === activeTeam);
  
  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient animate-fade-in">
          Наша Команда
        </h1>

        {/* Основное меню выбора */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in">
          <button
            onClick={() => {
              setActiveTeam('gudauta');
              setActiveTab('players');
            }}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTeam === 'gudauta' && activeTab === 'players'
                ? 'bg-blue-500 text-white shadow-glow'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            ФК Гудаут
          </button>
          <button
            onClick={() => {
              setActiveTeam('sport-school');
              setActiveTab('players');
            }}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTeam === 'sport-school' && activeTab === 'players'
                ? 'bg-green-500 text-white shadow-glow'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            СШ Гудаут
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
        </div>

        {/* Кнопки переключения между игроками и тренерским штабом */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in">
          <button
            onClick={() => setActiveTab('players')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'players'
                ? 'bg-blue-500 text-white shadow-glow'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Игроки
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'staff'
                ? 'bg-green-500 text-white shadow-glow'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Тренерский штаб
          </button>
        </div>

        {activeTab === 'players' && (
          <>
            {/* Фильтры по позициям */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
              {['Все', 'Вратари', 'Защитники', 'Полузащитники', 'Нападающие'].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setActivePosition(pos === 'Все' ? 'all' : pos)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activePosition === (pos === 'Все' ? 'all' : pos)
                      ? 'bg-blue-500 text-white shadow-glow'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>

            {/* Сетка игроков */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  className="glass-effect rounded-xl p-6 hover-lift transition-all duration-300"
                  onClick={() => setSelectedPlayer(player)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient">{player.name}</h3>
                      <p className="text-gray-300">{player.position}</p>
                      <p className="text-blue-400">#{player.number}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Матчи</p>
                      <p className="font-bold">{player.matches}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Голы</p>
                      <p className="font-bold text-green-400">{player.goals}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Передачи</p>
                      <p className="font-bold text-blue-400">{player.assists}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">ЖК</p>
                      <p className="font-bold text-yellow-400">{player.yellowCards}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'staff' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((member) => (
              <div
                key={member.id}
                className="glass-effect rounded-xl p-6 hover-lift transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gradient">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                    <p className="text-sm text-gray-400">В команде с {member.since}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedPlayer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
            <div className="glass-effect rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gradient">{selectedPlayer.name}</h2>
                <button
                  onClick={() => setSelectedPlayer(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedPlayer.image}
                    alt={selectedPlayer.name}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <p><span className="text-gray-400">Позиция:</span> {selectedPlayer.position}</p>
                    <p><span className="text-gray-400">Номер:</span> #{selectedPlayer.number}</p>
                    <p><span className="text-gray-400">Дата рождения:</span> {selectedPlayer.birthDate}</p>
                    <p><span className="text-gray-400">Рост:</span> {selectedPlayer.height} см</p>
                    <p><span className="text-gray-400">Вес:</span> {selectedPlayer.weight} кг</p>
                    <p><span className="text-gray-400">Гражданство:</span> {selectedPlayer.nationality}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-effect p-4 rounded-lg text-center">
                      <p className="text-gray-400">Матчи</p>
                      <p className="text-2xl font-bold">{selectedPlayer.matches}</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg text-center">
                      <p className="text-gray-400">Голы</p>
                      <p className="text-2xl font-bold text-green-400">{selectedPlayer.goals}</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg text-center">
                      <p className="text-gray-400">Передачи</p>
                      <p className="text-2xl font-bold text-blue-400">{selectedPlayer.assists}</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg text-center">
                      <p className="text-gray-400">ЖК</p>
                      <p className="text-2xl font-bold text-yellow-400">{selectedPlayer.yellowCards}</p>
                    </div>
                  </div>
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
