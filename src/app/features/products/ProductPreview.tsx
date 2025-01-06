import React, { useState } from "react";
import styled from "styled-components";
import { CustomModal } from "../../components/common";
import { Product } from "../../types";
import { Input, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartService } from "../../api";

const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  // padding: 0.5rem;
  @media (max-width: 780px) {
    width: 80vw;
    .inner-container {
      flex-direction: column;
    }
  }
  .inner-container {
    display: flex;
  }
  h5 {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0.5rem;
    font-weight: bold;
    font-family: "Delius", serif;
    background-color: rgba(106, 67, 124, 0.27);
    background-image: linear-gradient(
      135deg,
      rgb(216, 247, 249),
      rgb(244, 227, 253)
    );
    border-radius: 0.5rem 0.5rem 0 0;
    max-height: 2.5rem;
    min-height: 2.5rem;
  }
  h6 {
    font-family: "Delius", serif;
    font-weight: bold;
    margin: 0;
  }
  span {
    cursor: pointer;
    &:hover {
      font-size: 1.3rem;
      text-decoration: underline;
    }
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  padding: 0.5rem;
  img {
    width: 100%;
    background-color: rgb(247, 247, 247);
    border: 1px solid rgba(217, 217, 217, 0.5);
    box-shadow: 0 2px 7px rgba(217, 217, 217, 0.65);
  }
  h3 {
    font-family: "Delius", serif;
    font-weight: bold;
    margin: 0;
  }
  p {
    color: rgb(130, 130, 130);
    margin: 0 0 1rem 0;
    padding: 0;
  }
  h6 {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 50%;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgb(240, 240, 240);
  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  p {
    margin: 0;
  }
  button {
    margin-top: auto;
    margin-bottom: 0;
    background-color: #6a437c;
    color: white;
    border: none;
    border-radius: 0.3rem;
    padding: 0.2rem;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #7d4f8b;
    }
  }
`;

interface ProductPreviewProps {
  product: Product;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({
  isModalOpen,
  setIsModalOpen,
  product,
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState("");

  const handleAddToCart = async () => {
    await CartService.addItem({ product, quantity, details, size: "S" });
    setIsModalOpen(false);
  };

  return (
    <CustomModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ProductPreviewContainer>
        <h5>
          Sold by
          <span
            style={{ color: "#6a437c", marginLeft: "0.4rem" }}
            onClick={() => navigate("/store/" + product.storeIdTmp)}
          >
            {product.storeName}
          </span>
        </h5>
        <div className="inner-container">
          <LeftColumn>
            <img src={product.imageurl} />
            <h3>{product.name}</h3>
            <Rating
              name="half-rating-read"
              // defaultValue={product.rating}
              defaultValue={4}
              precision={0.5}
              readOnly
              size="small"
            />
            <h6>${product.price}</h6>
            <p>{product.description}</p>
          </LeftColumn>
          <RightColumn>
            <h6>Total price = {quantity * product.price} $</h6>
            <Input
              placeholder="add your details …"
              style={{ fontSize: "0.9rem" }}
              onChange={(e) => setDetails(e.target.value)}
            />
            <button onClick={handleAddToCart}>Add to cart</button>
          </RightColumn>
        </div>
      </ProductPreviewContainer>
    </CustomModal>
  );
};
