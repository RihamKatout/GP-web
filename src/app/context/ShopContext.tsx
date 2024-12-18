import React, { createContext, useState, ReactNode } from "react";
import { PRODUCTS, CAKEPRODUCTS } from "../Shops/products";

interface CartItems {
  [key: number]: number;
}


interface ShopContextValue {
  cartItems: CartItems;
  addToCart: (itemId: number, category?: "PRODUCTS" | "CAKEPRODUCTS") => void;
  removeFromCart: (itemId: number, category?: "PRODUCTS" | "CAKEPRODUCTS") => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
  getTotal: () => number;
  
}

export const ShopContext = createContext<ShopContextValue | undefined>(
  undefined
);

const getDefaultCart = (): CartItems => {
  const cart: CartItems = {};
  [...PRODUCTS, ...CAKEPRODUCTS].forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());

  const addToCart = (itemId: number): void => {
    // Optionally use `category` for any specific logic
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        updatedCart[itemId] = 0; // Retain the item in the cart with a count of 0
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    
    const allProducts = [...PRODUCTS, ...CAKEPRODUCTS];
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
    return totalAmount;
  };


  const getTotal = (): number => {
    let total = 0;
  
    const allProducts = [...PRODUCTS, ...CAKEPRODUCTS];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          total += cartItems[item]; // Add the quantity of the item to the total
        }
      }
    }
    return total;
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
    getTotal
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
