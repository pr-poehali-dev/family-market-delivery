
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
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
  );
};

export default ProductCard;
