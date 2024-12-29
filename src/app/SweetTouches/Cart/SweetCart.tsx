import { useContext } from "react";
import { ShopContext } from "../../context/SweetContext";
import { CartItem } from "./CartItem";
import { PRODUCTS, CAKE } from "../products";
import styled from "styled-components";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CakeCart from "./CakeCart";

const CartContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  color: #343a40;
  width: 100%; /* Ensure it spans the container */
  //top : 65px;
  height: 100%;
  position: relative;
  margin: 0rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -1000;

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
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 1rem;
    width: 200px;

    &:hover {
      background-color: #495057;
    }
  }
`;

const SweetCart = () => {
  const context = useContext(ShopContext);
  const navigate = useNavigate();
 
  const handleContinueShopping = () => {
    navigate("/sweettouches");
  };
  if (!context) {
    throw new Error("Cart must be used within a ShopContextProvider");
  }

  const { cartItems, getTotalCartAmount, checkout ,cakeImages } = context;
  const cartKeys = Object.keys(cartItems);
  const handleNavigate = () => {
    navigate("/shops");
  };
  
  console.log("Navigated Cake Images:", cakeImages);
  
  console.log("Context Cake Images:", context.cakeImages);

  return (
    <>
    <CartContainer>
      <div style={{ width:'80%', margin:'3rem auto'}}>
      <Divider style={{  borderColor: '#1a1a19b3' }}><CartTitle>Your Cart</CartTitle></Divider>
      <CartItems>
        {cartKeys.map((key) => {
          const itemId = Number(key);
          if (cartItems[itemId] > 0) {
            const product = [...PRODUCTS, ...CAKE].find((p) => p.id === itemId);
            return (
              product && <CartItem key={itemId} data={product} />
            );
          }
          return null;
        })}
        <CakeCart/>
      </CartItems>
      
      <CartSummary>
        <h2>Total: ${getTotalCartAmount()}</h2>

        <button  onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        <button onClick={checkout}>Checkout</button>
      </CartSummary>
      
    </div>
      <div style={{ width:'100%' ,background: "#f9f9f9"  ,margin:'0 auto' ,paddingTop:'5rem' }}>
        <div style={{ width:'85%' ,background: "#f9f9f9" ,margin:'0 auto' }}>
        <Divider style={{  borderColor: '#1a1a19b3' }}><CartTitle>Sweet Accessories</CartTitle></Divider>
        <HeroContainer>
        <div className="content">
          <div className="text-section" data-aos="zoom-out">
            <h1>
              GO TO <span>Shop Accessories </span> !!
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio.
            </p>
            <button style={{ borderRadius: "10px" , width: "200px" }} onClick={handleNavigate}>
             Shop Now!
            </button>
          </div>
          <div className="video-section" data-aos="zoom-in">
            <DotLottieReact
              src="https://lottie.host/a3fa31fe-eda4-41d0-8e86-e40326692d5d/x0bd0RmZeI.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </HeroContainer>
    
    
      </div>
    
    </div >
       
    </CartContainer>
    
  </>
  );
};

export default SweetCart;

const HeroContainer = styled.div`
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;///f9f9f9
  color: ${({ theme }) => theme.colors.text || "#000"};
  transition: 0.2s;

  .content {
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr;
    

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    

    @media (min-width: 640px) {
      text-align: left;
    }

    h1 {
      
      color: #343a40;

      @media (min-width: 768px) {
        font-size: 4rem;
      }

      span {
        background: linear-gradient(to bottom, #000, #afdddd);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      font-size: 1rem;
      opacity: 0.8;
    }

    button {
      background: linear-gradient( to left, #f9d9d9, #C47B83);
      color: #fff;
      width: 400px;
      height: 70px;
      padding: 0.5rem 1.5rem;
      border-radius: 999px;
      transition: transform 0.2s ease;
      font-weight: 600;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .video-section {
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      height: 350px;
      width: 100%;
      max-width:550px;
      object-fit:fill;
      border-radius: 25px;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);

      @media (min-width: 640px) {
        height: 450px;
        width: 450px;
      }
    }
  }
`;