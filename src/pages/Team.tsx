import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Trophy, ChevronDown, Flag } from 'lucide-react';
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

const TeamButtons = ({ activeTeam, activeTab, setActiveTeam, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 staggered-fade-in">
      <button
        onClick={() => {
          setActiveTeam('gudauta');
          setActiveTab('players');
        }}
        className={cn(
          "button-fancy",
          activeTeam === 'gudauta' && activeTab === 'players'
            ? "bg-fc-green text-white button-glow"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        <Flag className="w-4 h-4 mr-2 inline-block" />
        ФК Гудаут
      </button>
      
      <button
        onClick={() => {
          setActiveTeam('sport-school');
          setActiveTab('players');
        }}
        className={cn(
          "button-fancy",
          activeTeam === 'sport-school' && activeTab === 'players'
            ? "bg-fc-blue text-white button-glow"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        <Users className="w-4 h-4 mr-2 inline-block" />
        СШ Гудаут
      </button>

      <button
        onClick={() => {
          setActiveTab('staff');
          setActiveTeam('gudauta');
        }}
        className={cn(
          "button-fancy",
          activeTab === 'staff' && activeTeam === 'gudauta'
            ? "bg-fc-gold text-gray-900 button-glow"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        <Trophy className="w-4 h-4 mr-2 inline-block" />
        Тренерский штаб ФК Гудаут
      </button>
      
      <button
        onClick={() => {
          setActiveTab('staff');
          setActiveTeam('sport-school');
        }}
        className={cn(
          "button-fancy",
          activeTab === 'staff' && activeTeam === 'sport-school'
            ? "bg-fc-gold text-gray-900 button-glow"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        <Trophy className="w-4 h-4 mr-2 inline-block" />
        Тренерский штаб СШ Гудаут
      </button>
    </div>
  );
};

const Team = () => {
  const [activeTab, setActiveTab] = useState<'players' | 'staff'>('players');
  const [activePosition, setActivePosition] = useState('all');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [activeTeam, setActiveTeam] = useState<'gudauta' | 'sport-school'>('gudauta');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample player data
  const players: Player[] = [
    {
      id: '1',
      name: 'Александр Иванов',
      position: 'Вратарь',
      number: 1,
      birthDate: '01.01.1990',
      height: 185,
      weight: 80,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 30,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '2',
      name: 'Дмитрий Петров',
      position: 'Защитник',
      number: 4,
      birthDate: '01.01.1995',
      height: 180,
      weight: 75,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 25,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '3',
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      birthDate: '01.01.1993',
      height: 182,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 20,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '4',
      name: 'Игорь Соколов',
      position: 'Полузащитник',
      number: 8,
      birthDate: '01.01.1992',
      height: 178,
      weight: 72,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 20,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '5',
      name: 'Сергей Козлов',
      position: 'Полузащитник',
      number: 10,
      birthDate: '01.01.1994',
      height: 175,
      weight: 70,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 15,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '6',
      name: 'Андрей Попов',
      position: 'Нападающий',
      number: 9,
      birthDate: '01.01.1991',
      height: 180,
      weight: 75,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      matches: 10,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'gudauta'
    },
    {
      id: '7',
      name: 'Михаил Соколов',
      position: 'Вратарь',
      number: 1,
      birthDate: '01.01.1990',
      height: 185,
      weight: 80,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 30,
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
      birthDate: '01.01.1995',
      height: 180,
      weight: 75,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 25,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '9',
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      birthDate: '01.01.1993',
      height: 182,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 20,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '10',
      name: 'Игорь Кузнецов',
      position: 'Полузащитник',
      number: 8,
      birthDate: '01.01.1992',
      height: 178,
      weight: 72,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 20,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '11',
      name: 'Сергей Попов',
      position: 'Полузащитник',
      number: 10,
      birthDate: '01.01.1994',
      height: 175,
      weight: 70,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      matches: 15,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      team: 'sport-school'
    },
    {
      id: '12',
      name: 'Андрей Морозов',
      position: 'Нападающий',
      number: 9,
      birthDate: '01.01.1991',
      height: 180,
      weight: 75,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 10,
      goals: 0,
      assists: 0,
      yellowCards: 0,
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
    const positionMatch = activePosition === 'all' || player.position.toLowerCase().includes(getPositionKey(activePosition).toLowerCase());
    const teamMatch = player.team === activeTeam;
    return positionMatch && teamMatch;
  });
  
  // Фильтрация персонала по команде
  const filteredStaff = staff.filter(member => member.team === activeTeam);
  
  // Преобразование названия позиции
  function getPositionKey(position: string) {
    switch(position) {
      case 'Вратари': return 'вратарь';
      case 'Защитники': return 'защитник';
      case 'Полузащитники': return 'полузащитник';
      case 'Нападающие': return 'нападающий';
      default: return '';
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-brand">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Наша команда</h1>
        
        {/* Основные кнопки выбора команды */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTeam('gudauta')}
            className={cn(
              "px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300",
              activeTeam === 'gudauta'
                ? "bg-fc-green text-white shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            ФК Гудаута
          </button>
          <button
            onClick={() => setActiveTeam('sport-school')}
            className={cn(
              "px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300",
              activeTeam === 'sport-school'
                ? "bg-fc-blue text-white shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            СШ Гудаута
          </button>
        </div>

        {/* Кнопки выбора между игроками и персоналом */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('players')}
            className={cn(
              "px-6 py-2 rounded-full transition-all duration-300",
              activeTab === 'players'
                ? "bg-white text-fc-green"
                : "text-white hover:bg-white/10"
            )}
          >
            Игроки
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={cn(
              "px-6 py-2 rounded-full transition-all duration-300",
              activeTab === 'staff'
                ? "bg-white text-fc-green"
                : "text-white hover:bg-white/10"
            )}
          >
            Тренерский штаб
          </button>
        </div>

        {/* Фильтры по позициям для игроков */}
        {activeTab === 'players' && (
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1 bg-white/10 backdrop-blur-sm rounded-full mb-10 glass-effect animate-fadeIn">
            {['Все', 'Вратари', 'Защитники', 'Полузащитники', 'Нападающие'].map((pos) => (
              <button
                key={pos}
                onClick={() => setActivePosition(pos === 'Все' ? 'all' : pos)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activePosition === (pos === 'Все' ? 'all' : pos)
                    ? "bg-white text-fc-green"
                    : "text-white hover:bg-white/10"
                )}
              >
                {pos}
              </button>
            ))}
          </div>
        )}

        {/* Сетка игроков */}
        {activeTab === 'players' && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isLoaded ? 'staggered-fade-in' : ''}`}>
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                className="glass-effect rounded-xl overflow-hidden hover-lift"
                onClick={() => setSelectedPlayer(player)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name} 
                    className="w-full h-full object-cover hover-scale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold text-xl">{player.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-white/70">{player.position}</p>
                      <p className="text-fc-gold font-bold text-xl">#{player.number}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <p className="text-white/60 text-xs">Матчи</p>
                      <p className="text-white font-bold">{player.matches}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Голы</p>
                      <p className="text-white font-bold">{player.goals}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Пас</p>
                      <p className="text-white font-bold">{player.assists}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">ЖК/КК</p>
                      <p className="text-white font-bold">{player.yellowCards}/{player.redCards}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Сетка персонала */}
        {activeTab === 'staff' && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isLoaded ? 'staggered-fade-in' : ''}`}>
            {filteredStaff.map((member) => (
              <div
                key={member.id}
                className="glass-effect rounded-xl overflow-hidden p-6 hover-lift"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <p className="text-fc-gold">{member.role}</p>
                    <p className="text-white/60 text-sm">В команде с {member.since} г.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Модальное окно с информацией об игроке */}
        {selectedPlayer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="glass-effect rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gradient-brand">{selectedPlayer.name}</h2>
                <button
                  onClick={() => setSelectedPlayer(null)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={selectedPlayer.image}
                      alt={selectedPlayer.name}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/60">Дата рождения</p>
                        <p className="text-white font-medium">{selectedPlayer.birthDate}</p>
                      </div>
                      <div>
                        <p className="text-white/60">Гражданство</p>
                        <p className="text-white font-medium">{selectedPlayer.nationality}</p>
                      </div>
                      <div>
                        <p className="text-white/60">Рост</p>
                        <p className="text-white font-medium">{selectedPlayer.height} см</p>
                      </div>
                      <div>
                        <p className="text-white/60">Вес</p>
                        <p className="text-white font-medium">{selectedPlayer.weight} кг</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-4 mb-6">
                    <p className="text-5xl font-bold text-fc-gold">#{selectedPlayer.number}</p>
                    <p className="text-2xl text-white">{selectedPlayer.position}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Статистика</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <p className="text-4xl font-bold text-white mb-1">{selectedPlayer.matches}</p>
                        <p className="text-white/60">Матчей</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <p className="text-4xl font-bold text-fc-green mb-1">{selectedPlayer.goals}</p>
                        <p className="text-white/60">Голов</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <p className="text-4xl font-bold text-fc-blue mb-1">{selectedPlayer.assists}</p>
                        <p className="text-white/60">Передач</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <p className="text-4xl font-bold mb-1">
                          <span className="text-fc-gold">{selectedPlayer.yellowCards}</span>
                          <span className="text-white/40 mx-2">/</span>
                          <span className="text-fc-red">{selectedPlayer.redCards}</span>
                        </p>
                        <p className="text-white/60">ЖК / КК</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
