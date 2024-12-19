import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./CartItem";
import { PRODUCTS, CAKEPRODUCTS } from "../products";
import styled from "styled-components";
import { Divider } from "antd";
import Footer from "../../components/Footer";

const CartContainer = styled.div`
  padding: 5rem;
  background-color: #f8f9fa;
  color: #343a40;
  width: 100%;
  position: relative;
  margin: 0rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CartTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary || "#333"};
  text-align: center;
  margin-bottom: 2rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #343a40;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-right: 1rem;
    width: 200px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #495057;
    }

    
  }
`;

const SweetCart = () => {
  const navigate = useNavigate(); // Initialize navigate
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("Cart must be used within a ShopContextProvider");
  }

  const { cartItems, getTotalCartAmount, checkout } = context;
  const cartKeys = Object.keys(cartItems);

  const handleContinueShopping = () => {
    navigate("/shops"); // Navigate to the shop
  };

  return (
    <>
    <CartContainer>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <CartTitle>Your Cart</CartTitle>
        </Divider>
        <CartItems>
          {cartKeys.map((key) => {
            const itemId = Number(key);
            if (cartItems[itemId] > 0) {
              const product = [...PRODUCTS, ...CAKEPRODUCTS].find((p) => p.id === itemId);
              return product && <CartItem key={itemId} data={product} />;
            }
            return null;
          })}
        </CartItems>
        <CartSummary>
          <h2>Total: ${getTotalCartAmount()}</h2>
          <button  onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button onClick={checkout}>Checkout</button>
        </CartSummary>
      </div>
    </CartContainer>
    <Footer/>
    </>
  );
};

export default SweetCart;
