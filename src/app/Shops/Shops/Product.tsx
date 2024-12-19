import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/ShopContext";


interface ProductProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
    description: string;
  };
  category: "PRODUCTS" | "CAKEPRODUCTS";
  onClick: () => void; // Add a prop for the click handler
}

export const Product: React.FC<ProductProps> = ({ data, onClick }) => {
  const { id, productName, price, productImage } = data;
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("ShopContextProvider is missing!");
  }

  const { addToCart } = context;

  return (
    <ProductItem onClick={onClick}> {/* Trigger the click handler */}
      <ProductImage>
        <img src={productImage} alt={productName} />
      </ProductImage>
      <ProductBody>
        <ProductTitle>{productName}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
        <ButtonRow>
          <button onClick={(e) => { e.stopPropagation(); addToCart(id); }}>
            Add to Cart
          </button>
        </ButtonRow>
      </ProductBody>
      
    </ProductItem>
  );
};

// Styled Components for Buttons
const ButtonRow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  button {
    padding: 5px 10px;
    font-size: 0.9rem;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #c3b8c0;

    &:hover {
      background-color: #eaeaea;
    }
  }
`;

// Styled Components

// Other styled components remain unchanged...


// Styled Components
const ProductItem = styled.div`
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
  padding: 18px;
  border-radius: 4px;
  transition: all 0.3s;
  background:linear-gradient(to bottom, #52C6C6, #f9f9f9);

  &:hover {
    box-shadow: rgba(58, 57, 57, 0.532) 4px 4px 8px 0px;
  }
`;

const ProductImage = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;


const ProductBody = styled.div`
  padding: 12px 0;
`;

const ProductTitle = styled.h6`
  padding: 8px 0;
  opacity: 0.8;
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary}; /* Pine green */
`;

const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #262424; /* Regal blue */
`;
