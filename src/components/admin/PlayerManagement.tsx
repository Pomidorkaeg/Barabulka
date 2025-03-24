import React, { useState, useEffect } from 'react';
import { Player } from '../../types/player';
import { usePlayers } from '../../hooks/useData';

const PlayerManagement: React.FC = () => {
  const { players, addPlayer, updatePlayer, deletePlayer } = usePlayers();
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Обновляем localStorage после каждого изменения данных
  const syncWithLocalStorage = () => {
    console.log('PlayerManagement: синхронизация с localStorage');
    localStorage.setItem('players', JSON.stringify(players));
    // Генерируем событие для обновления данных в других компонентах
    window.dispatchEvent(new CustomEvent('playersUpdated', { detail: players }));
    // Для гарантированного обновления
    setRefreshTrigger(prev => prev + 1);
  };

  // Сохраняем данные в localStorage при каждом изменении
  useEffect(() => {
    syncWithLocalStorage();
  }, [players]);

  const handleSave = (player: Player) => {
    try {
      console.log('PlayerManagement: сохранение игрока', player);
      if (editingPlayer) {
        updatePlayer(player.id, player);
      } else {
        addPlayer(player);
      }
      setIsModalOpen(false);
      setEditingPlayer(null);
      syncWithLocalStorage();
    } catch (error) {
      console.error('Ошибка при сохранении игрока:', error);
      alert('Произошла ошибка при сохранении данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleDelete = (id: string) => {
    try {
      console.log('PlayerManagement: удаление игрока', id);
      if (confirm('Вы действительно хотите удалить этого игрока?')) {
        deletePlayer(id);
        syncWithLocalStorage();
      }
    } catch (error) {
      console.error('Ошибка при удалении игрока:', error);
      alert('Произошла ошибка при удалении данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  console.log('PlayerManagement: рендеринг', { players, refreshTrigger });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Управление игроками</h2>
        <button
          onClick={() => {
            setEditingPlayer(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить игрока
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map(player => (
          <div key={player.id} className="border rounded-lg p-4">
            <img
              src={player.photo}
              alt={player.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{player.name}</h3>
            <p>{player.position} #{player.number}</p>
            <p>Возраст: {player.age}</p>
            <p>Рост: {player.height} см</p>
            <p>Вес: {player.weight} кг</p>
            <p>Национальность: {player.nationality}</p>
            <p>Биография: {player.biography}</p>
            <p>Достижения: {player.achievements.join(', ')}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => {
                  setEditingPlayer(player);
                  setIsModalOpen(true);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDelete(player.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{editingPlayer ? 'Редактировать игрока' : 'Добавить игрока'}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingPlayer) {
                  handleSave(editingPlayer);
                }
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Имя</label>
                <input
                  type="text"
                  value={editingPlayer?.name || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Позиция</label>
                <input
                  type="text"
                  value={editingPlayer?.position || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, position: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Номер</label>
                <input
                  type="number"
                  value={editingPlayer?.number || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, number: parseInt(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Возраст</label>
                <input
                  type="number"
                  value={editingPlayer?.age || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, age: parseInt(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Рост (см)</label>
                <input
                  type="number"
                  value={editingPlayer?.height || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, height: parseInt(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Вес (кг)</label>
                <input
                  type="number"
                  value={editingPlayer?.weight || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, weight: parseInt(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Национальность</label>
                <input
                  type="text"
                  value={editingPlayer?.nationality || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, nationality: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Биография</label>
                <textarea
                  value={editingPlayer?.biography || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, biography: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Достижения</label>
                <input
                  type="text"
                  value={editingPlayer?.achievements.join(', ') || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, achievements: e.target.value.split(',').map(a => a.trim()) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Ссылки на соцсети</label>
                <input
                  type="text"
                  placeholder="Instagram"
                  value={editingPlayer?.socialLinks.instagram || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, socialLinks: { ...editingPlayer!.socialLinks, instagram: e.target.value } })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  placeholder="Twitter"
                  value={editingPlayer?.socialLinks.twitter || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, socialLinks: { ...editingPlayer!.socialLinks, twitter: e.target.value } })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  placeholder="VK"
                  value={editingPlayer?.socialLinks.vk || ''}
                  onChange={(e) => setEditingPlayer({ ...editingPlayer!, socialLinks: { ...editingPlayer!.socialLinks, vk: e.target.value } })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingPlayer(null);
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerManagement; 