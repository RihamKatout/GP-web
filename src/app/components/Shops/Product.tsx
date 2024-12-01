import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

interface ProductProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
  };
}

export const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { id, productName, price, productImage } = props.data;
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("Product must be used within a ShopContextProvider");
  }

  const { addToCart, cartItems } = context;
  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};