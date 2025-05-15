
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Свежий хлеб",
    description: "Домашний хлеб из пекарни",
    price: 50,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=2562&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Молоко фермерское",
    description: "Натуральное молоко с местной фермы",
    price: 90,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=2565&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Набор овощей",
    description: "Свежие овощи с грядки",
    price: 250,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=2768&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    name: "Яйца деревенские",
    description: "Десяток свежих яиц от домашних кур",
    price: 120,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=2573&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    name: "Колбаса домашняя",
    description: "Натуральная колбаса без добавок",
    price: 340,
    image: "https://images.unsplash.com/photo-1549852648-aa04a4af7922?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    name: "Сыр фермерский",
    description: "Домашний сыр из натурального молока",
    price: 280,
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=2560&ixlib=rb-4.0.3",
  },
];
