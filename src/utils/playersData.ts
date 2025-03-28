
import { Player } from '@/types/player';

// In a production environment, this would be fetched from a database
// For now, we'll use a local array to simulate storage
let players: Player[] = [
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
    redCards: 0
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
    redCards: 0
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
    redCards: 1
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
    redCards: 0
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
    redCards: 0
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
    redCards: 0
  },
];

// Get all players
export const getPlayersData = (): Player[] => {
  return [...players];
};

// Get a specific player by ID
export const getPlayerById = (id: string): Player | undefined => {
  return players.find(player => player.id === id);
};

// Update a player
export const updatePlayer = (updatedPlayer: Player): void => {
  players = players.map(player => 
    player.id === updatedPlayer.id ? updatedPlayer : player
  );
};

// Delete a player
export const deletePlayer = (id: string): void => {
  players = players.filter(player => player.id !== id);
};

// Create a new player
export const createPlayer = (newPlayer: Player): void => {
  // Ensure we don't duplicate IDs
  if (players.some(player => player.id === newPlayer.id)) {
    throw new Error('Player with this ID already exists');
  }
  players.push(newPlayer);
};
