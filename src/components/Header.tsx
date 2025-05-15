
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { getTotalItems } = useCart();

  return (
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
  );
};

export default Header;
