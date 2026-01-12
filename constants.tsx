
import { Category, MenuItem } from './types';

export const COLORS = {
  primary: '#1b4332', // Verde Floresta Profundo
  secondary: '#d62828', // Vermelho Vibrante
  accent: '#fcbf49', // Amarelo Mostarda Quente
  earth: '#b35c44', // Terracota Terroso
  bg: '#fefae0' // Branco Creme
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Matapa Tradicional',
    description: 'Folhas de mandioquinha piladas com amendoim e leite de coco, acompanhado por arroz branco ou xima.',
    ingredients: ['Folhas de Mandioquinha', 'Amendoim Pilado', 'Leite de Coco', 'Alho', 'Sal'],
    price: '450 MT',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800', // Prato de folhas verdes piladas (típico Matapa)
    category: Category.TRADICIONAIS,
    badge: 'Mais Pedido'
  },
  {
    id: 2,
    name: 'Galinha à Zambeziana',
    description: 'Frango grelhado na brasa marinado com leite de coco, limão e especiarias da Zambézia.',
    ingredients: ['Frango do Campo', 'Leite de Coco', 'Limão', 'Alho', 'Pimenta de Cheiro'],
    price: '650 MT',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=800', // Frango assado/grelhado suculento
    category: Category.TRADICIONAIS,
    badge: 'Popular'
  },
  {
    id: 3,
    name: 'Peixe Grelhado com Piripíri',
    description: 'Peixe fresco do dia (Serra ou Garoupa) grelhado com molho artesanal de piripíri moçambicano.',
    ingredients: ['Peixe Fresco', 'Piripíri Artesanal', 'Limão', 'Azeite de Oliva', 'Salsa'],
    price: '780 MT',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800', // Peixe inteiro grelhado com guarnição
    category: Category.TRADICIONAIS,
    badge: 'Popular'
  },
  {
    id: 4,
    name: 'Caril de Amendoim',
    description: 'Um clássico cremoso de vegetais da época ou carne, cozido lentamente em molho de amendoim torrado.',
    ingredients: ['Carne ou Vegetais', 'Amendoim Torrado', 'Cebola', 'Tomate', 'Especiarias'],
    price: '520 MT',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800', // Curry cremoso em tom amendoado
    category: Category.TRADICIONAIS
  },
  {
    id: 5,
    name: 'Sumo de Cajú',
    description: 'Suco natural extraído do fruto do caju moçambicano, refrescante e autêntico.',
    ingredients: ['Frutos de Caju', 'Água Mineral', 'Gelo'],
    price: '150 MT',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800', // Suco tropical amarelo refrescante
    category: Category.BEBIDAS,
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Maheu Gelado',
    description: 'Bebida tradicional fermentada à base de milho branco moído, ideal para acompanhar qualquer refeição.',
    ingredients: ['Milho Branco', 'Água', 'Açúcar (opcional)'],
    price: '120 MT',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800', // Bebida branca leitosa rústica
    category: Category.BEBIDAS
  },
  {
    id: 7,
    name: 'Bolo de Mandioca',
    description: 'Bolo denso e húmido feito com mandioca fresca ralada e coco, servido com calda de melaço.',
    ingredients: ['Mandioca Fresca', 'Coco Ralado', 'Ovos', 'Leite', 'Melaço'],
    price: '280 MT',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800', // Sobremesa rústica de textura densa
    category: Category.SOBREMESAS,
    badge: 'Mais Pedido'
  }
];
