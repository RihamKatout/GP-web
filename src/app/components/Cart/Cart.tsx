import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("Cart must be used within a ShopContextProvider");
  }

  const { cartItems, getTotalCartAmount, checkout } = context;
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/shops")}>Continue Shopping</button>
          <button onClick={checkout}>Checkout</button>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
};