import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

interface CartItemProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
  };
}

export const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const { id, productName, price, productImage } = props.data;
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("CartItem must be used within a ShopContextProvider");
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;
  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="number"
            value={cartItemCount}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};