import React, { createContext, useState, ReactNode } from 'react';
import { PRODUCTS } from '../../../products';

// Define the shape of the product
interface Product {
  id: number;
  name: string;
  price: number;
}

// Define the shape of the cart items
interface CartItems {
  [key: number]: number;
}

// Define the shape of the context value
interface ShopContextValue {
  cartItems: CartItems;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}

// Create the context with a default value
export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

// Define the default cart items
const getDefaultCart = (): CartItems => {
  const cart: CartItems = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Define the provider component
export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ShopContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};