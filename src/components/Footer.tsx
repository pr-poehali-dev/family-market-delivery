
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
