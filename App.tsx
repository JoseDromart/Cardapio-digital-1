
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_ITEMS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const categories = Object.values(Category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <About />

        <div id="cardapio" className="bg-[#fefae0] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#d62828] font-bold uppercase tracking-[0.3em] text-xs">A Nossa Escolha</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#1b4332]">Menu de Maputo</h2>
              <div className="w-24 h-1 bg-[#fcbf49] mx-auto mt-6"></div>
            </div>

            {categories.map(cat => {
              const items = MENU_ITEMS.filter(item => item.category === cat);
              return items.length > 0 ? (
                <MenuSection key={cat} category={cat} items={items} />
              ) : null;
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
