import React, { useEffect, useState } from 'react';
import { usePlayers } from '../hooks/useData';
import { useCoaches } from '../hooks/useData';
import { Player } from '../types/player';
import { Coach } from '../types/coach';
import { useNavigate } from 'react-router-dom';

// Ключи для хранения данных
const STORAGE_KEYS = {
  PLAYERS: 'tournament_players',
  COACHES: 'tournament_coaches',
};

const HomePage: React.FC = () => {
  // Получаем данные из хуков
  const { players: hookPlayers } = usePlayers();
  const { coaches: hookCoaches } = useCoaches();
  
  // Локальное состояние для отображения
  const [players, setPlayers] = useState<Player[]>(hookPlayers);
  const [coaches, setCoaches] = useState<Coach[]>(hookCoaches);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Обновляем состояние при изменении данных из хуков
  useEffect(() => {
    console.log('HomePage: обновляю игроков из хука', hookPlayers);
    setPlayers(hookPlayers);
  }, [hookPlayers]);

  useEffect(() => {
    console.log('HomePage: обновляю тренеров из хука', hookCoaches);
    setCoaches(hookCoaches);
  }, [hookCoaches]);

  // Слушаем кастомные события обновления
  useEffect(() => {
    const handlePlayersUpdate = (e: CustomEvent) => {
      console.log('HomePage: получено событие обновления игроков', e.detail);
      setPlayers(e.detail);
    };

    const handleCoachesUpdate = (e: CustomEvent) => {
      console.log('HomePage: получено событие обновления тренеров', e.detail);
      setCoaches(e.detail);
    };

    window.addEventListener('playersUpdated', handlePlayersUpdate as EventListener);
    window.addEventListener('coachesUpdated', handleCoachesUpdate as EventListener);

    return () => {
      window.removeEventListener('playersUpdated', handlePlayersUpdate as EventListener);
      window.removeEventListener('coachesUpdated', handleCoachesUpdate as EventListener);
    };
  }, []);

  // Обработчик события storage для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      console.log('HomePage: обнаружено изменение в localStorage', e.key, e.newValue);
      if (e.key === STORAGE_KEYS.PLAYERS && e.newValue) {
        const parsedPlayers = JSON.parse(e.newValue);
        setPlayers(parsedPlayers);
      }
      if (e.key === STORAGE_KEYS.COACHES && e.newValue) {
        const parsedCoaches = JSON.parse(e.newValue);
        setCoaches(parsedCoaches);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Загрузка данных при первом рендере
  useEffect(() => {
    const loadData = () => {
      try {
        // Проверяем localStorage
        const localPlayers = localStorage.getItem(STORAGE_KEYS.PLAYERS);
        const localCoaches = localStorage.getItem(STORAGE_KEYS.COACHES);
        
        // Проверяем sessionStorage
        const sessionPlayers = sessionStorage.getItem(STORAGE_KEYS.PLAYERS);
        const sessionCoaches = sessionStorage.getItem(STORAGE_KEYS.COACHES);
        
        // Используем данные из localStorage, если они есть
        if (localPlayers) {
          const parsedPlayers = JSON.parse(localPlayers);
          setPlayers(parsedPlayers);
        } 
        // Иначе из sessionStorage
        else if (sessionPlayers) {
          const parsedPlayers = JSON.parse(sessionPlayers);
          setPlayers(parsedPlayers);
        }
        
        // То же самое для тренеров
        if (localCoaches) {
          const parsedCoaches = JSON.parse(localCoaches);
          setCoaches(parsedCoaches);
        } else if (sessionCoaches) {
          const parsedCoaches = JSON.parse(sessionCoaches);
          setCoaches(parsedCoaches);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
    
    // Также загружаем данные при событии загрузки страницы
    window.addEventListener('load', loadData);
    return () => window.removeEventListener('load', loadData);
  }, []);

  console.log('HomePage: рендеринг', { players, coaches, loading });

  // Если данные загружаются, показываем индикатор загрузки
  if (loading && players.length === 0 && coaches.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Загрузка данных...</h2>
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent mx-auto"></div>
        </div>
      </div>
    );
  }

  const tournaments = [
    {
      id: 1,
      name: 'Чемпионат Абхазии 2024',
      matches: [
        {
          id: 1,
          date: '15 марта 2024',
          time: '15:00',
          homeTeam: 'ФК Гудаут',
          awayTeam: 'Нарт Сухум',
          link: '#'
        },
        {
          id: 2,
          date: '22 марта 2024',
          time: '16:30',
          homeTeam: 'Динамо Сухум',
          awayTeam: 'ФК Гудаут',
          link: '#'
        },
        {
          id: 3,
          date: '29 марта 2024',
          time: '14:00',
          homeTeam: 'ФК Гудаут',
          awayTeam: 'Афон',
          link: '#'
        }
      ],
      link: '#'
    },
    {
      id: 2,
      name: 'Кубок Абхазии 2024',
      matches: [
        {
          id: 4,
          date: '5 апреля 2024',
          time: '15:30',
          homeTeam: 'ФК Гудаут',
          awayTeam: 'Рица',
          link: '#'
        },
        {
          id: 5,
          date: '12 апреля 2024',
          time: '16:00',
          homeTeam: 'Гагра',
          awayTeam: 'ФК Гудаут',
          link: '#'
        }
      ],
      link: '#'
    },
    {
      id: 3,
      name: 'Товарищеские матчи',
      matches: [
        {
          id: 6,
          date: '19 апреля 2024',
          time: '17:00',
          homeTeam: 'ФК Гудаут',
          awayTeam: 'Сборная Гудаутского района',
          link: '#'
        },
        {
          id: 7,
          date: '26 апреля 2024',
          time: '15:30',
          homeTeam: 'ФК Гудаут',
          awayTeam: 'Сборная ветеранов',
          link: '#'
        }
      ],
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">ФК Гудаут</h1>
        <p className="text-2xl text-gray-600 mb-8">Профессиональная футбольная команда</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center">Турнирные таблицы</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{tournament.name}</h3>
            <div className="space-y-4">
              {tournament.matches.map((match) => (
                <div key={match.id} className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{match.date}</span>
                    <span className="text-sm text-gray-500">{match.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{match.homeTeam}</span>
                    <span className="text-gray-500">vs</span>
                    <span className="font-medium text-gray-900">{match.awayTeam}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => window.open(tournament.link, '_blank')}
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Игроки</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {players.map((player) => (
              <div key={player.id} className="text-center">
                <img
                  src={player.photo}
                  alt={player.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                />
                <p className="font-medium text-gray-900">{player.name}</p>
                <p className="text-sm text-gray-600">{player.position}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/players')}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Все игроки
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Тренеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coaches.map((coach) => (
              <div key={coach.id} className="text-center">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                />
                <p className="font-medium text-gray-900">{coach.name}</p>
                <p className="text-sm text-gray-600">{coach.position}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/coaches')}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Все тренеры
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 