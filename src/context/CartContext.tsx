import React, {
  createContext,
  useState,
} from 'react';
import { Product } from '../types/Product';


export const CartContext = createContext<any>(null);


const CartProvider = ({
  children,
}: any) => {

  const [cartItems, setCartItems] = useState<Product[]>([]);


  // Add To Cart
  const addToCart = (product: any) => {

    setCartItems(prev => [...prev, product]);
  };


  // Remove From Cart
  const removeFromCart = (id: number) => {

    const updatedCart = cartItems.filter(
      (item: any) => item.id !== id,
    );

    setCartItems(updatedCart);
  };


  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );
};

export default CartProvider;