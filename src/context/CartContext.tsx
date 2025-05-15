
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
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
    <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
