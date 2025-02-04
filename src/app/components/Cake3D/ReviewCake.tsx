import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/SweetContext";
import share from "../../../assets/cake/CardIcon/share.png";
interface CakeReviewPopupProps {
  onClose: () => void; 
  onConfirm: () => void; 
  cardMessage: string; 
  cakeSize: string; 
  cakePrice: number; 
  cakeDescription: string;
}

export const ReviewCake: React.FC<CakeReviewPopupProps> = ({
  onClose,
  onConfirm,
  cardMessage,
  cakeSize,
  cakePrice,
  cakeDescription
}) => {
  const context = useContext(ShopContext);

  if (!context) {
    console.error("CakeReviewPopup must be used within a ShopContextProvider");
    return null;
  }

  const { cakeImages } = context;
  
  if (cakeImages.length === 0) {
    console.warn("No cake images available in context.");
    return null;
  }

  const latestCakeImage = cakeImages[cakeImages.length - 1];

  const handleShare = async () => {
    try {
      if (!latestCakeImage.image) {
        alert("No image available to share.");
        return;
      }
  
      const response = await fetch(latestCakeImage.image);
      const blob = await response.blob();
  
      if (navigator.share) {
        await navigator.share({
          title: "Check out this amazing cake!",
          text: "Here's a preview of the 3D cake I'm considering.",
          files: [new File([blob], "cake-preview.png", { type: "image/png" })],
        });
        console.log("Content shared successfully!");
      } else {
        alert("Sharing is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing the image:", error);
      alert("Failed to share the image.");
    }
  };
  
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Your 3D Cake Preview</h2>
        <ImageWrapper>
          <CakeImage src={latestCakeImage.image} alt="3D Cake Preview" />
          <ShareButton onClick={handleShare}><img src={share} alt="Share" style={{ width: '40px', height: '20px' }}/> Share</ShareButton>
        </ImageWrapper>
        <p>{cakeDescription}</p>
        <CardMessageWrapper>
          {cardMessage ? cardMessage : "No message added."}
        </CardMessageWrapper>
        <p>Size: {cakeSize}</p>
        <p>Price: ${cakePrice}</p>
       
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Add to Cart</ConfirmButton>
        </ButtonContainer>
        {/* <EnhanceCakeImage/> */}
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ShareButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({theme})=> theme.colors.primary_light};
  color: #322e2e;
  padding: 5px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: 'overlock', serif;
  border: 2px solid rgba(217, 217, 217, 0.5);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.176) inset;

  &:hover {
    background-color: ${({theme})=> theme.colors.secondary_light};
  }
`;

// ... (existing styled components)
const CardMessageWrapper = styled.div`
  max-height: 130px; /* Adjust the height based on your design */
  overflow-y: auto; /* Adds vertical scrolling */
  overflow-x: hidden; /* Prevents horizontal scrolling */
  white-space: pre-wrap; /* Preserves formatting and wraps text */
  word-wrap: break-word; /* Ensures long words break */
  padding: 10px; /* Adds spacing inside the container */
  border: 1px solid rgb(135, 133, 133);
  border-radius: 15px;
  margin: 10px 0;
`;


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
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  text-align: center;

  h2 {
    //margin: 0.5rem 0;
    font-size: 1.5rem;
    color: #273c75;
  }

  p {
    //margin: 1rem 0;
    color: #555;
  }
`;

const CakeImage = styled.img`
  width: 300px;
    height: 370px;
    object-fit: cover;
  border-radius: 15px;
  margin: 0.2rem 0;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: 1px solid #fb7b7b;
  border-radius: 20%;
  font-size: 1.5rem;
  z-index: 10000;
  cursor: pointer;
  background: #fb7b7b;
  border: 2px solid rgba(217, 217, 217, 0.5);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.176) inset;
  &:hover {
    background: #f8f9fa;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid rgba(217, 217, 217, 0.5);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.176) inset;
  &:hover {
    transform: translateY(-2px);
    //background: #fb7b7b;
  }
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #273c75;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({theme})=> theme.colors.secondary};
  border: 2px solid rgba(217, 217, 217, 0.5);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.176) inset;
  &:hover {
    transform: translateY(-2px);
    background: #fb7b7b;
  }
`;