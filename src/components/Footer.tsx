import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Верхняя часть футера */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О клубе */}
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/placeholder.svg" 
                alt="ФК Гудаут" 
                className="w-10 h-10" 
              />
              <h3 className="text-xl font-bold text-gradient-brand">ФК Гудаут</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Один из ведущих футбольных клубов Абхазии с богатой историей и традициями.
              Наша цель - развитие футбола и воспитание молодых талантов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fc-green transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fc-green transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fc-green transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div className="animate-fadeIn delay-100">
            <h3 className="text-lg font-bold mb-6 text-white">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-fc-green transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fc-green rounded-full mr-2"></span>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="text-gray-400 hover:text-fc-green transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fc-green rounded-full mr-2"></span>
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink to="/matches" className="text-gray-400 hover:text-fc-green transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fc-green rounded-full mr-2"></span>
                  Матчи
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-gray-400 hover:text-fc-green transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fc-green rounded-full mr-2"></span>
                  Команда
                </NavLink>
              </li>
              <li>
                <NavLink to="/tournaments" className="text-gray-400 hover:text-fc-green transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fc-green rounded-full mr-2"></span>
                  Турниры
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="animate-fadeIn delay-200">
            <h3 className="text-lg font-bold mb-6 text-white">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-fc-green mr-3 mt-0.5" />
                <span className="text-gray-400">
                  ул. Спортивная, 10, г. Гудаут, Республика Абхазия
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-fc-green mr-3" />
                <a href="tel:+78001234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-fc-green mr-3" />
                <a href="mailto:info@fcgudauta.com" className="text-gray-400 hover:text-white transition-colors">
                  info@fcgudauta.com
                </a>
              </li>
            </ul>
          </div>

          {/* Подписка */}
          <div className="animate-fadeIn delay-300">
            <h3 className="text-lg font-bold mb-6 text-white">Подписка на новости</h3>
            <p className="text-gray-400 mb-4">
              Получайте последние новости и обновления о матчах прямо на вашу почту
            </p>
            <form className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fc-green"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-fc-green text-white px-4 py-1.5 rounded-md hover:bg-fc-green/80 transition-colors"
                >
                  Подписаться
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="py-6 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ФК Гудаут. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/0 to-black/40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-fc-green opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-fc-blue opacity-10 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
