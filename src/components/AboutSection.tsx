
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
