import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-white font-bold text-2xl flex items-center gap-2 animate-float">
            <img 
              src="/placeholder.svg" 
              alt="ФК Гудаут" 
              className="w-10 h-10" 
            />
            <span className={`text-gradient-brand font-bold text-shadow`}>ФК Гудаут</span>
          </NavLink>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLinks />
          </div>

          {/* Мобильная кнопка */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`md:hidden ${isOpen ? 'block animate-fadeIn' : 'hidden'}`}>
        <div className="glass-effect px-4 pt-2 pb-4 shadow-lg staggered-fade-in">
          <div className="flex flex-col space-y-2">
            <MobileNavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/news', label: 'Новости' },
    { to: '/matches', label: 'Матчи' },
    { to: '/team', label: 'Команда' },
    { to: '/tournaments', label: 'Турниры' },
    { to: '/media', label: 'Медиа' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `
            relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${isActive 
              ? 'text-white button-glow bg-fc-green' 
              : 'text-white/80 hover:text-white hover:bg-white/10'
            }
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {link.label}
          {location.pathname === link.to && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fc-gold animate-pulse" />
          )}
        </NavLink>
      ))}
    </>
  );
};

const MobileNavLinks = () => {
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/news', label: 'Новости' },
    { to: '/matches', label: 'Матчи' },
    { to: '/team', label: 'Команда' },
    { to: '/tournaments', label: 'Турниры' },
    { to: '/media', label: 'Медиа' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `
            block px-4 py-3 rounded-lg font-medium transition-all duration-300
            ${isActive 
              ? 'bg-fc-green text-white' 
              : 'text-white/80 hover:text-white hover:bg-white/10'
            }
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;
