
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 px-4 md:px-8 bg-[#fefae0] overflow-hidden">
      <div className="absolute inset-0 african-pattern pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-[#d62828] font-semibold uppercase tracking-[0.2em] text-sm">Nossa Herança</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-[#1b4332]">Cultura, Sabor e Tradição</h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            No coração de Maputo, o <strong className="text-[#1b4332]">Sabores de Maputo</strong> nasce para honrar a riqueza gastronómica das nossas terras. Cada prato é uma viagem sensorial que atravessa as dunas da Zambézia até às águas azuis da nossa costa.
          </p>
          <p>
            Valorizamos a identidade e a autenticidade, utilizando ingredientes locais frescos e técnicas ancestrais que definem a alma moçambicana. Aqui, a tradição encontra a modernidade num ambiente premium desenhado para celebrar o melhor de Moçambique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
