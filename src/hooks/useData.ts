import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { Coach } from '../types/coach';
import { v4 as uuidv4 } from 'uuid';

// Ключи для хранения данных
const STORAGE_KEYS = {
  PLAYERS: 'tournament_players',
  COACHES: 'tournament_coaches',
};

// Создаем глобальные переменные для хранения данных между перезагрузками компонентов
let globalPlayers: Player[] = [];
let globalCoaches: Coach[] = [];

// Начальные данные для игроков, если в хранилище ничего нет
const initialPlayers: Player[] = [
  {
    id: uuidv4(),
    name: 'Иван Петров',
    position: 'Нападающий',
    number: 9,
    age: 25,
    height: 184,
    weight: 78,
    nationality: 'Россия',
    photo: 'https://placehold.co/300x300/orange/white?text=Иван+Петров',
    stats: {
      games: 30,
      goals: 15,
      assists: 7,
      yellowCards: 4,
      redCards: 0
    },
    biography: 'Талантливый нападающий с хорошим чувством гола.',
    achievements: ['Лучший бомбардир сезона 2021', 'Игрок месяца (март 2022)'],
    socialLinks: {
      instagram: 'https://instagram.com/ivpetrov',
      twitter: '',
      vk: 'https://vk.com/ivpetrov'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: true
  },
  {
    id: uuidv4(),
    name: 'Александр Иванов',
    position: 'Полузащитник',
    number: 8,
    age: 27,
    height: 179,
    weight: 72,
    nationality: 'Россия',
    photo: 'https://placehold.co/300x300/orange/white?text=Александр+Иванов',
    stats: {
      games: 32,
      goals: 5,
      assists: 12,
      yellowCards: 6,
      redCards: 1
    },
    biography: 'Опытный полузащитник с отличным видением поля.',
    achievements: ['Чемпион России 2020', 'Обладатель Кубка России 2022'],
    socialLinks: {
      instagram: 'https://instagram.com/aivanov',
      twitter: 'https://twitter.com/aivanov',
      vk: 'https://vk.com/aivanov'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: true
  }
];

// Начальные данные для тренеров, если в хранилище ничего нет
const initialCoaches: Coach[] = [
  {
    id: uuidv4(),
    name: 'Сергей Михайлов',
    position: 'Главный тренер',
    age: 50,
    experience: 15,
    nationality: 'Россия',
    photo: 'https://placehold.co/300x300/blue/white?text=Сергей+Михайлов',
    specializations: ['Тактика', 'Физическая подготовка'],
    biography: 'Опытный тренер с международным опытом работы.',
    achievements: ['Чемпион России 2020', 'Финалист Кубка России 2021'],
    socialLinks: {
      instagram: 'https://instagram.com/smikhailov',
      twitter: 'https://twitter.com/smikhailov',
      vk: ''
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: true
  }
];

// Функция для загрузки данных из хранилища
const loadDataFromStorage = <T>(storageKey: string, initialData: T[]): T[] => {
  console.log(`Загрузка данных из хранилища по ключу ${storageKey}`);
  try {
    // Сначала пытаемся получить из localStorage
    const localData = localStorage.getItem(storageKey);
    if (localData) {
      console.log(`Данные найдены в localStorage: ${localData.substring(0, 100)}...`);
      return JSON.parse(localData);
    }
    
    // Затем пытаемся получить из sessionStorage
    const sessionData = sessionStorage.getItem(storageKey);
    if (sessionData) {
      console.log(`Данные найдены в sessionStorage: ${sessionData.substring(0, 100)}...`);
      return JSON.parse(sessionData);
    }
    
    console.log(`Данные не найдены, используем начальные данные`);
    
    // Если данных нет ни в одном хранилище, сохраняем начальные данные
    saveDataToStorage(storageKey, initialData);
    return initialData;
  } catch (error) {
    console.error(`Ошибка при загрузке данных из хранилища (${storageKey}):`, error);
    // В случае ошибки также сохраняем начальные данные
    saveDataToStorage(storageKey, initialData);
    return initialData;
  }
};

// Функция для сохранения данных в хранилище
const saveDataToStorage = <T>(storageKey: string, data: T[]): void => {
  console.log(`Сохранение данных в хранилище по ключу ${storageKey}`);
  try {
    const serializedData = JSON.stringify(data);
    
    // Сохраняем в оба хранилища для надежности
    localStorage.setItem(storageKey, serializedData);
    sessionStorage.setItem(storageKey, serializedData);
    
    // Для синхронизации между вкладками отправляем событие
    const eventName = storageKey === STORAGE_KEYS.PLAYERS ? 'playersUpdated' : 'coachesUpdated';
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
    
    console.log(`Данные успешно сохранены в хранилище (${storageKey})`);
  } catch (error) {
    console.error(`Ошибка при сохранении данных в хранилище (${storageKey}):`, error);
  }
};

// Инициализация данных при загрузке модуля
(function initializeData() {
  console.log('Инициализация данных при загрузке модуля useData');
  globalPlayers = loadDataFromStorage<Player>(STORAGE_KEYS.PLAYERS, initialPlayers);
  globalCoaches = loadDataFromStorage<Coach>(STORAGE_KEYS.COACHES, initialCoaches);
})();

// Хук для работы с игроками
export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(globalPlayers);
  
  // При первой загрузке обновляем глобальные данные
  useEffect(() => {
    console.log('usePlayers: инициализация хука');
    
    // Обновляем состояние из глобальных данных
    setPlayers(globalPlayers);
    
    // Слушаем события обновления игроков
    const handlePlayersUpdate = (e: CustomEvent) => {
      console.log('usePlayers: получено событие обновления игроков', e.detail);
      setPlayers(e.detail);
      globalPlayers = e.detail;
    };
    
    // Слушаем события изменения localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.PLAYERS && e.newValue) {
        const updatedPlayers = JSON.parse(e.newValue);
        setPlayers(updatedPlayers);
        globalPlayers = updatedPlayers;
      }
    };
    
    window.addEventListener('playersUpdated', handlePlayersUpdate as EventListener);
    window.addEventListener('storage', handleStorageChange);
    
    // Функция очистки при размонтировании
    return () => {
      window.removeEventListener('playersUpdated', handlePlayersUpdate as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  // Функция для добавления нового игрока
  const addPlayer = (player: Omit<Player, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPlayer: Player = {
      ...player,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: player.isActive === undefined ? true : player.isActive
    };
    
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    globalPlayers = updatedPlayers;
    saveDataToStorage(STORAGE_KEYS.PLAYERS, updatedPlayers);
    
    return newPlayer;
  };
  
  // Функция для обновления игрока
  const updatePlayer = (id: string, playerData: Partial<Player>) => {
    const updatedPlayers = players.map(player => 
      player.id === id 
        ? { 
            ...player, 
            ...playerData, 
            updatedAt: new Date().toISOString() 
          } 
        : player
    );
    
    setPlayers(updatedPlayers);
    globalPlayers = updatedPlayers;
    saveDataToStorage(STORAGE_KEYS.PLAYERS, updatedPlayers);
  };
  
  // Функция для удаления игрока
  const deletePlayer = (id: string) => {
    const updatedPlayers = players.filter(player => player.id !== id);
    setPlayers(updatedPlayers);
    globalPlayers = updatedPlayers;
    saveDataToStorage(STORAGE_KEYS.PLAYERS, updatedPlayers);
  };
  
  // Функция для форсированного обновления данных из хранилища
  const refreshPlayers = () => {
    const refreshedPlayers = loadDataFromStorage<Player>(STORAGE_KEYS.PLAYERS, initialPlayers);
    setPlayers(refreshedPlayers);
    globalPlayers = refreshedPlayers;
    return refreshedPlayers;
  };
  
  return { players, addPlayer, updatePlayer, deletePlayer, refreshPlayers };
};

// Хук для работы с тренерами
export const useCoaches = () => {
  const [coaches, setCoaches] = useState<Coach[]>(globalCoaches);
  
  // При первой загрузке обновляем глобальные данные
  useEffect(() => {
    console.log('useCoaches: инициализация хука');
    
    // Обновляем состояние из глобальных данных
    setCoaches(globalCoaches);
    
    // Слушаем события обновления тренеров
    const handleCoachesUpdate = (e: CustomEvent) => {
      console.log('useCoaches: получено событие обновления тренеров', e.detail);
      setCoaches(e.detail);
      globalCoaches = e.detail;
    };
    
    // Слушаем события изменения localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.COACHES && e.newValue) {
        const updatedCoaches = JSON.parse(e.newValue);
        setCoaches(updatedCoaches);
        globalCoaches = updatedCoaches;
      }
    };
    
    window.addEventListener('coachesUpdated', handleCoachesUpdate as EventListener);
    window.addEventListener('storage', handleStorageChange);
    
    // Функция очистки при размонтировании
    return () => {
      window.removeEventListener('coachesUpdated', handleCoachesUpdate as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  // Функция для добавления нового тренера
  const addCoach = (coach: Omit<Coach, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCoach: Coach = {
      ...coach,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: coach.isActive === undefined ? true : coach.isActive
    };
    
    const updatedCoaches = [...coaches, newCoach];
    setCoaches(updatedCoaches);
    globalCoaches = updatedCoaches;
    saveDataToStorage(STORAGE_KEYS.COACHES, updatedCoaches);
    
    return newCoach;
  };
  
  // Функция для обновления тренера
  const updateCoach = (id: string, coachData: Partial<Coach>) => {
    const updatedCoaches = coaches.map(coach => 
      coach.id === id 
        ? { 
            ...coach, 
            ...coachData, 
            updatedAt: new Date().toISOString() 
          } 
        : coach
    );
    
    setCoaches(updatedCoaches);
    globalCoaches = updatedCoaches;
    saveDataToStorage(STORAGE_KEYS.COACHES, updatedCoaches);
  };
  
  // Функция для удаления тренера
  const deleteCoach = (id: string) => {
    const updatedCoaches = coaches.filter(coach => coach.id !== id);
    setCoaches(updatedCoaches);
    globalCoaches = updatedCoaches;
    saveDataToStorage(STORAGE_KEYS.COACHES, updatedCoaches);
  };
  
  // Функция для форсированного обновления данных из хранилища
  const refreshCoaches = () => {
    const refreshedCoaches = loadDataFromStorage<Coach>(STORAGE_KEYS.COACHES, initialCoaches);
    setCoaches(refreshedCoaches);
    globalCoaches = refreshedCoaches;
    return refreshedCoaches;
  };
  
  return { coaches, addCoach, updateCoach, deleteCoach, refreshCoaches };
}; 