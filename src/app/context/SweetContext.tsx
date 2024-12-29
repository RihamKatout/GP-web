import React, { createContext, useState, ReactNode } from "react";
import { PRODUCTS, CAKE } from "../SweetTouches/products";

interface CartItems {
  [key: number]: number;
}

interface ShopContextValue {
  cartItems: CartItems;
  cakeImages: { image: string; size: string; price: number }[]; // New state for 3D Cake images
  addToCart: (itemId: number, category?: "PRODUCTS" | "CAKE") => void;
  removeFromCart: (itemId: number, category?: "PRODUCTS" | "CAKE") => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
  getTotal: () => number;
  addCakeImage: (image: string ,size: string, price: number) => void; // Add method to handle 3D Cake images
}

export const ShopContext = createContext<ShopContextValue | undefined>(
  undefined
);

const getDefaultCart = (): CartItems => {
  const cart: CartItems = {};
  [...PRODUCTS, ...CAKE].forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const SweetContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());
  const [cakeImages, setCakeImages] = useState<{ image: string; size: string; price: number }[]>([]); // State to store 3D Cake images

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        updatedCart[itemId] = 0;
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;

    const allProducts = [...PRODUCTS, ...CAKE];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    
   // Add the price of 3D cake images
    totalAmount += cakeImages.reduce((acc, cake) => acc + cake.price, 0);
    return totalAmount;
  };

  const getTotal = (): number => {
    let total = 0;

    // Count the total quantity of PRODUCTS and CAKE items
    const allProducts = [...PRODUCTS, ...CAKE];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          total += cartItems[item];
        }
      }
    }

    // Add the number of 3D cake images
    total += cakeImages.length;

    return total;
  };
  const addCakeImage = (image: string , cakeSize: string, cakePrice: number): void => {
    setCakeImages((prev) => [...prev, { image, size: cakeSize, price: cakePrice }]);
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
    setCakeImages([]); // Clear cake images on checkout
  };

  const contextValue: ShopContextValue = {
    cartItems,
    cakeImages, // Provide cake images
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    getTotal,
    addCakeImage, // Provide the addCakeImage method
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};