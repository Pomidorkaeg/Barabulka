
import React, { useState } from 'react';
import { Plus, Search, Pencil, Trash, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PlayerEditor from './PlayerEditor';
import { getPlayersData, updatePlayer, deletePlayer, createPlayer } from '@/utils/playersData';
import { Player } from '@/types/player';
import { toast } from '@/components/ui/use-toast';

const PlayersManagement = () => {
  const [players, setPlayers] = useState<Player[]>(getPlayersData());
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (player: Player) => {
    setCurrentPlayer(player);
    setEditMode(true);
  };

  const handleDelete = (playerId: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этого игрока?')) {
      try {
        deletePlayer(playerId);
        setPlayers(players.filter(p => p.id !== playerId));
        toast({
          title: "Игрок удален",
          description: "Игрок был успешно удален из системы",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Ошибка",
          description: "Не удалось удалить игрока",
        });
      }
    }
  };

  const handleAddNew = () => {
    const newPlayer: Player = {
      id: `player-${Date.now()}`,
      name: '',
      position: 'Нападающий',
      number: players.length + 1,
      birthDate: '',
      height: 180,
      weight: 75,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 0,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    };
    setCurrentPlayer(newPlayer);
    setEditMode(true);
  };

  const handleSave = (updatedPlayer: Player) => {
    try {
      if (players.some(p => p.id === updatedPlayer.id)) {
        // Update existing player
        updatePlayer(updatedPlayer);
        setPlayers(players.map(p => p.id === updatedPlayer.id ? updatedPlayer : p));
        toast({
          title: "Игрок обновлен",
          description: "Информация об игроке успешно обновлена",
        });
      } else {
        // Create new player
        createPlayer(updatedPlayer);
        setPlayers([...players, updatedPlayer]);
        toast({
          title: "Игрок добавлен",
          description: "Новый игрок успешно добавлен в систему",
        });
      }
      setEditMode(false);
      setCurrentPlayer(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось сохранить изменения",
      });
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setCurrentPlayer(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Управление игроками</h1>
        <Button onClick={handleAddNew} className="bg-fc-green hover:bg-fc-darkGreen">
          <Plus className="mr-2 h-4 w-4" /> Добавить игрока
        </Button>
      </div>
      
      {editMode && currentPlayer ? (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {currentPlayer.id.includes('player-') && !players.some(p => p.id === currentPlayer.id) 
                ? 'Добавить нового игрока' 
                : 'Редактировать игрока'
              }
            </h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleCancel}>
                <X className="mr-2 h-4 w-4" /> Отмена
              </Button>
            </div>
          </div>
          
          <PlayerEditor 
            player={currentPlayer} 
            onSave={handleSave} 
            onCancel={handleCancel} 
          />
        </div>
      ) : (
        <>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Поиск игроков по имени или позиции..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    №
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Игрок
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Позиция
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Характеристики
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статистика
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPlayers.map((player) => (
                  <tr key={player.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{player.number}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={player.image} alt={player.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{player.name}</div>
                          <div className="text-sm text-gray-500">{player.nationality}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {player.position}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.height} см, {player.weight} кг
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">{player.matches} матчей</span>
                        <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">{player.goals} голов</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEdit(player)}
                        className="text-blue-600 hover:text-blue-900 mr-2"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(player.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayersManagement;
