import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/SweetContext"; // Import your context

interface CakeReviewPopupProps {
  onClose: () => void; // Function to close the pop-up
  onConfirm: () => void; // Function to confirm and add the cake to the cart
  cardMessage: string; // Message from CardWriting
  cakeSize: string; // Selected size
  cakePrice: number; // Selected price
}

export const ReviewCake : React.FC<CakeReviewPopupProps> = ({
  onClose,
  onConfirm,
  cardMessage,
  cakeSize,
  cakePrice
}) => {
  const context = useContext(ShopContext);

  if (!context) {
    console.error("CakeReviewPopup must be used within a ShopContextProvider");
    return null; // Render nothing if context is missing
  }

  const { cakeImages } = context;

  if (cakeImages.length === 0) {
    console.warn("No cake images available in context.");
    return null; // Render nothing if no cake images are available
  }

  const latestCakeImage = cakeImages[cakeImages.length - 1]; // Use the most recent cake image

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Your 3D Cake Preview</h2>
        <CakeImage src={latestCakeImage.image} alt="3D Cake Preview" />
        <p>Does this look good to you?</p>
        <p>{cardMessage ? cardMessage : "No message added."}</p>
        <p>Size: {cakeSize}</p>
        <p>Price: ${cakePrice}</p>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Add to Cart</ConfirmButton>
        </ButtonContainer>
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
  z-index: 10000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;

  h2 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: #273c75;
  }

  p {
    margin: 1rem 0;
    color: #555;
  }
`;

const CakeImage = styled.img`
  width: 300px;
    height: 370px;
    object-fit: cover;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #273c75;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e305f;
  }
`;