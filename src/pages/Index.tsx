import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Trophy, Calendar, Clock, Users } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-brand">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className={`max-w-2xl ${loaded ? 'animate-fadeIn' : ''}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-6 animate-float">
                Футбольный клуб <span className="text-gradient-brand">Гудаут</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Один из ведущих футбольных клубов Абхазии с богатой историей и традициями. 
                Присоединяйтесь к нашей футбольной семье!
              </p>
              <div className="flex flex-wrap gap-4">
                <NavLink to="/team" className="button-fancy bg-fc-green text-white">
                  Наша команда
                  <ChevronRight className="w-4 h-4 ml-2 inline-block" />
                </NavLink>
                <NavLink to="/matches" className="button-fancy bg-white/10 text-white hover:bg-white/20">
                  Расписание матчей
                </NavLink>
              </div>
            </div>
            <div className={`relative ${loaded ? 'animate-fadeIn delay-200' : ''}`}>
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="ФК Гудаут" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-lg text-white animate-pulse">
                <Trophy className="w-6 h-6 text-fc-gold mb-2" />
                <p className="font-bold">Чемпион Абхазии</p>
                <p className="text-sm text-white/70">2023</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-fc-blue opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-fc-green opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-120 rounded-full bg-fc-gold opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>
      
      {/* Ближайшие матчи */}
      <section className="py-16 bg-gray-900/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
              <Calendar className="w-6 h-6 inline-block mr-2 text-fc-gold" />
              Ближайшие матчи
            </h2>
            <NavLink to="/matches" className="text-white flex items-center hover:text-fc-gold transition-colors">
              Все матчи <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 staggered-fade-in">
            {[1, 2, 3].map((match) => (
              <div key={match} className="glass-effect rounded-xl overflow-hidden hover-lift">
                <div className="p-4 bg-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-fc-gold font-medium">Чемпионат Абхазии</span>
                    <span className="text-white/70 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      12 Июня, 19:00
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center mr-3">
                        <img src="/placeholder.svg" alt="ФК Гудаут" className="w-8 h-8" />
                      </div>
                      <span className="text-white font-bold">ФК Гудаут</span>
                    </div>
                    <span className="text-white text-xl font-bold">VS</span>
                    <div className="flex items-center">
                      <span className="text-white font-bold">ФК Соперник</span>
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center ml-3">
                        <img src="/placeholder.svg" alt="ФК Соперник" className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 flex justify-between items-center">
                  <span className="text-white/70">Стадион "Арена Гудаут"</span>
                  <button className="px-4 py-2 bg-fc-green text-white text-sm rounded-full hover:bg-fc-green/80 transition-colors">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Новости */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white text-shadow">Последние новости</h2>
            <NavLink to="/news" className="text-white flex items-center hover:text-fc-gold transition-colors">
              Все новости <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-fade-in">
            {[1, 2, 3].map((news) => (
              <div key={news} className="glass-effect rounded-xl overflow-hidden hover-lift">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/600x400?football&sig=${news}`} 
                    alt="Новость" 
                    className="w-full h-full object-cover hover-scale"
                  />
                  <div className="absolute top-4 left-4 bg-fc-green text-white px-3 py-1 rounded-full text-sm">
                    Новость
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    10 Июня 2023
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 hover:text-fc-gold transition-colors">
                    Победа в важном матче чемпионата
                  </h3>
                  <p className="text-white/70 mb-4">
                    Футбольный клуб "Гудаут" одержал важную победу в матче чемпионата Абхазии...
                  </p>
                  <button className="text-fc-gold flex items-center hover:text-fc-gold/80 transition-colors">
                    Читать далее <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* О клубе */}
      <section className="py-16 bg-gray-900/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1508098682722-e99c643e7f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Стадион ФК Гудаут" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="md:w-1/2 animate-fadeIn delay-200">
              <h2 className="text-3xl font-bold text-white text-shadow mb-6">
                <Users className="w-7 h-7 inline-block mr-2 text-fc-gold" />
                О нашем клубе
              </h2>
              <p className="text-white/80 mb-6">
                Футбольный клуб "Гудаут" был основан в 1995 году группой энтузиастов футбола. 
                За годы существования клуб стал одним из лидеров абхазского футбола, воспитал 
                множество талантливых игроков и завоевал несколько титулов.
              </p>
              <p className="text-white/80 mb-6">
                Наша миссия — развитие футбола в Абхазии, воспитание молодых талантов и 
                достижение высоких спортивных результатов на национальном и международном уровне.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-effect rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-fc-gold mb-2">25+</p>
                  <p className="text-white/70 text-sm">лет истории</p>
                </div>
                <div className="glass-effect rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-fc-gold mb-2">5</p>
                  <p className="text-white/70 text-sm">титулов</p>
                </div>
                <div className="glass-effect rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-fc-gold mb-2">100+</p>
                  <p className="text-white/70 text-sm">воспитанников</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Спонсоры */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white text-shadow mb-12">Наши партнеры</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((sponsor) => (
              <div key={sponsor} className="w-32 h-32 glass-effect rounded-xl flex items-center justify-center p-4 hover-lift">
                <img src="/placeholder.svg" alt="Спонсор" className="max-w-full max-h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
