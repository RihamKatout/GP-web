import React from "react";
import { VerticalContainer } from "../StyledComponents";
import { Product } from "../../../../types";

interface LowStockProps {
  lowStock?: Product[];
}
const lowStockData: Product[] = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Cotton T-Shirt",
    price: 29.99,
    stock: 3,
    imageurl: "/images/tshirt.jpg",
    createdDate: "2024-01-15",
    rating: 4.5,
    isAvailable: true,
    isCustomizable: true,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "red", "black"],
    sizePrices: {
      S: 29.99,
      M: 29.99,
      L: 32.99,
      XL: 34.99,
      XXL: 36.99,
    },
    inWishlist: false,
    numberOfReviews: 25,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Denim Jeans",
    price: 49.99,
    stock: 2,
    imageurl: "/images/jeans.jpg",
    createdDate: "2024-01-10",
    rating: 4.2,
    isAvailable: true,
    isCustomizable: false,
    storeName: "Fashion Store",
    storeIdTmp: 1,
    colors: ["blue", "black"],
    sizePrices: {
      S: 49.99,
      M: 49.99,
      L: 52.99,
      XL: 54.99,
      XXL: 56.99,
    },
    inWishlist: false,
    numberOfReviews: 15,
  },
];
export const LowStock: React.FC<LowStockProps> = ({ lowStock }) => {
  lowStock = lowStock || lowStockData;
  return (
    <VerticalContainer
      style={{
        gridArea: "lowStock",
        maxHeight: "250px",
        overflowY: "scroll",
      }}
    >
      <p>Low stock</p>
      <div
        className="lowStock"
        style={{
          fontSize: "0.9rem",
          backgroundColor: "rgba(255, 140, 0, 0.3)",
          padding: "0.2rem",
        }}
      >
        <p>Name</p>
        <p>ID</p>
        <p>Stock</p>
      </div>
      {lowStock.map((product) => (
        <div key={product.id} className="lowStock">
          <p>{product.name}</p>
          <p>{product.id}</p>
          <p>{product.stock}</p>
        </div>
      ))}
    </VerticalContainer>
  );
};
