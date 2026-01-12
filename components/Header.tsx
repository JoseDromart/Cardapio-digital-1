
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1b4332] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#fcbf49]">
            Sabores de Maputo
          </h1>
          <p className="text-xs md:text-sm italic opacity-90 text-[#fefae0]">
            “A alma de Moçambique no seu prato”
          </p>
        </div>
        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex space-x-8 text-sm font-medium uppercase tracking-widest">
            <li><a href="#sobre" aria-label="Ir para seção sobre nós" className="hover:text-[#fcbf49] transition-colors">Sobre</a></li>
            <li><a href="#cardapio" aria-label="Ver nosso cardápio completo" className="hover:text-[#fcbf49] transition-colors">Cardápio</a></li>
            <li><a href="#contato" aria-label="Ir para informações de contato" className="hover:text-[#fcbf49] transition-colors">Contato</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
            <button 
              className="text-[#fcbf49] p-2" 
              aria-label="Abrir menu de navegação"
              aria-expanded="false"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-[#d62828] via-[#fcbf49] to-[#1b4332]"></div>
    </header>
  );
};

export default Header;
