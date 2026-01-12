
import React from 'react';
import { Category, MenuItem } from '../types';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  category: Category;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, items }) => {
  return (
    <section className="mb-20">
      <div className="flex items-center mb-10">
        <h2 className="text-3xl font-bold text-[#1b4332] flex-shrink-0 pr-6">
          {category}
        </h2>
        <div className="flex-grow h-px bg-[#fcbf49]/30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
