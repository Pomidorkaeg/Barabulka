import React, { useState, useEffect } from 'react';
import { Coach } from '../../types/coach';
import { useCoaches } from '../../hooks/useData';

const CoachManagement: React.FC = () => {
  const { coaches, addCoach, updateCoach, deleteCoach } = useCoaches();
  const [editingCoach, setEditingCoach] = useState<Coach | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Обновляем localStorage после каждого изменения данных
  const syncWithLocalStorage = () => {
    console.log('CoachManagement: синхронизация с localStorage');
    localStorage.setItem('coaches', JSON.stringify(coaches));
    // Генерируем событие для обновления данных в других компонентах
    window.dispatchEvent(new CustomEvent('coachesUpdated', { detail: coaches }));
    // Для гарантированного обновления
    setRefreshTrigger(prev => prev + 1);
  };

  // Сохраняем данные в localStorage при каждом изменении
  useEffect(() => {
    syncWithLocalStorage();
  }, [coaches]);

  const handleSave = (coach: Coach) => {
    try {
      console.log('CoachManagement: сохранение тренера', coach);
      if (editingCoach) {
        updateCoach(coach.id, coach);
      } else {
        addCoach(coach);
      }
      setIsModalOpen(false);
      setEditingCoach(null);
      syncWithLocalStorage();
    } catch (error) {
      console.error('Ошибка при сохранении тренера:', error);
      alert('Произошла ошибка при сохранении данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleDelete = (id: string) => {
    try {
      console.log('CoachManagement: удаление тренера', id);
      if (confirm('Вы действительно хотите удалить этого тренера?')) {
        deleteCoach(id);
        syncWithLocalStorage();
      }
    } catch (error) {
      console.error('Ошибка при удалении тренера:', error);
      alert('Произошла ошибка при удалении данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  console.log('CoachManagement: рендеринг', { coaches, refreshTrigger });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Управление тренерами</h2>
        <button
          onClick={() => {
            setEditingCoach(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить тренера
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaches.map(coach => (
          <div key={coach.id} className="border rounded-lg p-4">
            <img
              src={coach.photo}
              alt={coach.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{coach.name}</h3>
            <p>{coach.position}</p>
            <p>Возраст: {coach.age}</p>
            <p>Опыт: {coach.experience} лет</p>
            <p>Национальность: {coach.nationality}</p>
            <p>Биография: {coach.biography}</p>
            <p>Достижения: {coach.achievements.join(', ')}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => {
                  setEditingCoach(coach);
                  setIsModalOpen(true);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDelete(coach.id)}
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
            <h2 className="text-xl font-bold mb-4">{editingCoach ? 'Редактировать тренера' : 'Добавить тренера'}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingCoach) {
                  handleSave(editingCoach);
                }
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Имя</label>
                <input
                  type="text"
                  value={editingCoach?.name || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Позиция</label>
                <input
                  type="text"
                  value={editingCoach?.position || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, position: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Возраст</label>
                <input
                  type="number"
                  value={editingCoach?.age || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, age: parseInt(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Опыт (лет)</label>
                <input
                  type="number"
                  value={editingCoach?.experience || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, experience: parseInt(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Национальность</label>
                <input
                  type="text"
                  value={editingCoach?.nationality || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, nationality: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Биография</label>
                <textarea
                  value={editingCoach?.biography || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, biography: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Достижения</label>
                <input
                  type="text"
                  value={editingCoach?.achievements.join(', ') || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, achievements: e.target.value.split(',').map(a => a.trim()) })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Ссылки на соцсети</label>
                <input
                  type="text"
                  placeholder="Instagram"
                  value={editingCoach?.socialLinks.instagram || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, socialLinks: { ...editingCoach!.socialLinks, instagram: e.target.value } })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  placeholder="Twitter"
                  value={editingCoach?.socialLinks.twitter || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, socialLinks: { ...editingCoach!.socialLinks, twitter: e.target.value } })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  placeholder="VK"
                  value={editingCoach?.socialLinks.vk || ''}
                  onChange={(e) => setEditingCoach({ ...editingCoach!, socialLinks: { ...editingCoach!.socialLinks, vk: e.target.value } })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingCoach(null);
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

export default CoachManagement; 