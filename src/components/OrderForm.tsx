
import { Button } from "@/components/ui/button";

const OrderForm = () => {
  return (
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
  );
};

export default OrderForm;
