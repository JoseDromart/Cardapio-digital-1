
import React, { useState } from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {item.badge && (
          <div className="absolute top-4 right-4 bg-[#d62828] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg z-10">
            {item.badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-xl font-bold text-[#1b4332] group-hover:text-[#d62828] transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-[#1b4332] whitespace-nowrap">
            {item.price}
          </span>
        </div>
        
        <div className="relative overflow-hidden flex-grow min-h-[80px]">
          <div className={`transition-all duration-500 ${showIngredients ? 'opacity-0 -translate-y-4 pointer-events-none absolute' : 'opacity-100 translate-y-0'}`}>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
          </div>
          
          <div className={`transition-all duration-500 ${showIngredients ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
            <h4 className="text-[#d62828] text-xs font-bold uppercase tracking-widest mb-2">Ingredientes Principais:</h4>
            <ul className="text-gray-700 text-sm space-y-1 mb-4">
              {item.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#fcbf49] rounded-full mr-2"></span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-50 flex justify-end mt-auto">
            <button 
              onClick={() => setShowIngredients(!showIngredients)}
              aria-label={showIngredients ? `Ocultar ingredientes de ${item.name}` : `Ver ingredientes de ${item.name}`}
              className="text-[#1b4332] hover:text-[#d62828] font-bold text-xs uppercase tracking-widest flex items-center group/btn py-2 transition-colors duration-300"
            >
                {showIngredients ? 'Ocultar ingredientes' : 'Ver ingredientes'}
                <svg 
                  className={`w-4 h-4 ml-1 transform transition-transform ${showIngredients ? 'rotate-180' : 'group-hover/btn:translate-x-1'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showIngredients ? "M5 15l7-7 7 7" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                </svg>
            </button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
