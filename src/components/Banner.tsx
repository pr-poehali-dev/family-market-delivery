
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">Доставка продуктов в селе Веселовка</h2>
        <p className="text-xl mb-8">Свежие продукты из магазина "Семейка" прямо к вашей двери</p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
          Заказать доставку
        </Button>
      </div>
    </section>
  );
};

export default Banner;
