import React, { createContext, useState, ReactNode } from "react";

interface ShopContextValue {
  cakeImages: { image: string; size: string; price: number }[]; // New state for 3D Cake images
  getTotalCartAmount: () => number;
  checkout: () => void;
  addCakeImage: (image: string ,size: string, price: number ,description: string) => void; // Add method to handle 3D Cake images
}

export const ShopContext = createContext<ShopContextValue | undefined>(
  undefined
);


export const SweetContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  
  const [cakeImages, setCakeImages] = useState<{ image: string; size: string; price: number ,description: string }[]>([]); // State to store 3D Cake images

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
   // Add the price of 3D cake images
    totalAmount += cakeImages.reduce((acc, cake) => acc + cake.price, 0);
    return totalAmount;
  };

  
  const addCakeImage = (image: string , cakeSize: string, cakePrice: number, cakeDescription: string): void => {
    setCakeImages((prev) => [...prev, { image, size: cakeSize, price: cakePrice , description: cakeDescription }]);
  };

  const checkout = (): void => {
    setCakeImages([]); // Clear cake images on checkout
  };

  const contextValue: ShopContextValue = {
    cakeImages, // Provide cake images
    getTotalCartAmount,
    checkout,
    addCakeImage, // Provide the addCakeImage method
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};