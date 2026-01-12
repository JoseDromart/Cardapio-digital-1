
export enum Category {
  TRADICIONAIS = 'Pratos Tradicionais',
  BEBIDAS = 'Bebidas Tradicionais',
  SOBREMESAS = 'Sobremesas'
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  ingredients: string[];
  badge?: 'Popular' | 'Mais Pedido';
}
