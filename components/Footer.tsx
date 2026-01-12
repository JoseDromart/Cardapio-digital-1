
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#1b4332] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-[#fcbf49] mb-4 uppercase tracking-tighter">Sabores de Maputo</h3>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            A celebração da cultura e gastronomia moçambicana no coração da capital. Autenticidade em cada detalhe.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#fcbf49]">Localização</h4>
          <address className="not-italic text-sm opacity-80 space-y-2">
            <p>Avenida Marginal, 1234</p>
            <p>Maputo, Moçambique</p>
            <p>Tel: +258 84 000 0000</p>
          </address>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#fcbf49]">Horário</h4>
          <div className="text-sm opacity-80 space-y-1">
            <p>Segunda - Quinta: 11:30 - 22:00</p>
            <p>Sexta - Sábado: 11:30 - 00:00</p>
            <p>Domingo: 12:00 - 21:00</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} Sabores de Maputo. Todos os direitos reservados.</p>
        <p className="mt-2">Inspirado pela força e beleza da Pérola do Índico.</p>
      </div>
    </footer>
  );
};

export default Footer;
