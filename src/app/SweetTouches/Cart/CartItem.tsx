import React, { useContext } from "react";
import { ShopContext } from "../../context/SweetContext";
import styled from "styled-components";

interface CartItemProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
  };
}

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #fff3e6;
  border: 1px solid #ffe0b3;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;

const Description = styled.div`
  flex-grow: 1;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #4d2600;
  }

  p b {
    font-size: 1.2rem;
  }
`;

const CountHandler = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background-color: #ff6600;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e65c00;
    }
  }

  input {
    width: 50px;
    text-align: center;
    padding: 0.3rem;
    border: 1px solid #ffa366;
    border-radius: 4px;

    &:focus {
      border-color: #ff6600;
      outline: none;
    }
  }

  @media (max-width: 768px) {
    input {
      width: 40px;
    }
  }
`;

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const context = useContext(ShopContext);

  if (!context) {
    console.error("CartItem must be used within a ShopContextProvider");
    throw new Error("CartItem must be used within a ShopContextProvider");
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;
  const cartItemCount = cartItems[id] || 0;

  return (
    <CartItemContainer>
      <img src={productImage} alt={productName} />
      <Description>
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <CountHandler>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="number"
            value={cartItemCount}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </CountHandler>
      </Description>
    </CartItemContainer>
  );
};
