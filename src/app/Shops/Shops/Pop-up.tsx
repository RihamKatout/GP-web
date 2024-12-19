import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/ShopContext"; // Import your context

interface ProductDetailsProps {
  product: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
    description: string;
  } | null;
  onClose: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("ShopContextProvider is missing!");
  }

  const { addToCart } = context;

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product.id);
    onClose(); // Optionally close the pop-up after adding to the cart
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <img src={product.productImage} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p>{product.description}</p>
        <strong>Price: ${product.price}</strong>
        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
    color: #555;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #273c75;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 1px solid #ccc;
    border-radius: 20%;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background: #f8f9fa;
  }
`;

const AddToCartButton = styled.button`
  margin-top: 1.5rem;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #273c75;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e305f;
  }
`;
