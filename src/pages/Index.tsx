
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const products = [
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
    image: "https://images.unsplash.com/photo-1549852648-aa04b4af7922?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    name: "Сыр фермерский",
    description: "Домашний сыр из натурального молока",
    price: 280,
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=2560&ixlib=rb-4.0.3",
  },
];

const Index = () => {
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  
  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId 
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
      } else {
        return [...prevCart, {id: productId, quantity: 1}];
      }
    });
  };
  
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Верхняя навигационная панель */}
      <header className="bg-green-600 text-white py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <Icon name="ShoppingBasket" size={28} />
            <h1 className="text-2xl font-bold font-montserrat">Семейка</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (123) 456-78-90
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-green-700">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              <span>{getTotalItems()}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-grow">
        {/* Баннер */}
        <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">Доставка продуктов в селе Веселовка</h2>
            <p className="text-xl mb-8">Свежие продукты из магазина "Семейка" прямо к вашей двери</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Заказать доставку
            </Button>
          </div>
        </section>

        {/* Популярные товары */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center font-montserrat">Популярные товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{product.price} ₽</span>
                      <Button 
                        onClick={() => addToCart(product.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Icon name="Plus" size={16} className="mr-1" /> В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* О магазине */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=2560&ixlib=rb-4.0.3" 
                  alt="Магазин Семейка" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 font-montserrat">О магазине "Семейка"</h2>
                <p className="text-gray-700 mb-4">
                  Наш магазин работает в селе Веселовка уже более 10 лет. Мы предлагаем жителям свежие продукты от местных производителей, фермерские товары и всё необходимое для повседневной жизни.
                </p>
                <p className="text-gray-700 mb-6">
                  Теперь вы можете заказать любимые товары с доставкой прямо к вашей двери. Мы привезем всё свежее и качественное, как будто вы сами посетили наш магазин!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Icon name="Clock" className="text-green-600 mr-2" />
                    <span>Доставка в течение 2 часов</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Truck" className="text-green-600 mr-2" />
                    <span>Бесплатно от 1000 ₽</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Medal" className="text-green-600 mr-2" />
                    <span>Гарантия свежести</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CreditCard" className="text-green-600 mr-2" />
                    <span>Оплата при получении</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Форма заказа */}
        <section className="py-12 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center font-montserrat">Заказать доставку</h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Иван Иванов"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 mb-2">Адрес доставки</label>
                <input 
                  type="text" 
                  id="address" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="ул. Центральная, д. 10, кв. 5"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-700 mb-2">Комментарий к заказу</label>
                <textarea 
                  id="comment" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  placeholder="Особые пожелания к заказу..."
                ></textarea>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                Оформить заказ
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ShoppingBasket" size={24} />
                <h2 className="text-xl font-bold">Семейка</h2>
              </div>
              <p className="text-gray-400">
                с. Веселовка, Челябинская область<br />
                ул. Центральная, д. 15
              </p>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Часы работы</h3>
              <p className="mb-2">Пн-Пт: 8:00 - 20:00</p>
              <p className="mb-2">Сб-Вс: 9:00 - 18:00</p>
              <p>Доставка: 10:00 - 19:00</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <p className="flex items-center mb-2">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (123) 456-78-90
              </p>
              <p className="flex items-center mb-2">
                <Icon name="Mail" size={16} className="mr-2" />
                info@semeyka.ru
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Icon name="Vk" size={20} />
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>© 2023 Магазин "Семейка". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
