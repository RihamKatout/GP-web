import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CustomModal } from "../../components/common";
import { Configuration, Product } from "../../types";
import { Divider, Input } from "@mui/material";
import { useAuth } from "../../context";
import { PleaseLoginModal } from "../../pages";

interface ProductPreviewProps {
  product: Product;
  configurations?: Configuration[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddToCartPreview: React.FC<ProductPreviewProps> = ({
  product,
  isModalOpen,
  configurations,
  setIsModalOpen,
}) => {
  const { isLoggedIn } = useAuth();
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState<number>(0);

  // TODO: show success message
  // show error message if there is an error
  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      return;
    }
    try {
      // await CartService.addItem({
      //   product,
      //   quantity,
      //   details,
      // });
    } catch (e: any) {
      console.error(e?.response?.data?.errors?.[0]);
    }
    setIsModalOpen(false);
  };
  const handleQuantityChange = async (value: number) => {
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      setDetails("");
      setQuantity(1);
      // if (product.colors?.length !== 0) setSelectedColor(product.colors?.[0]);
      // const availableSizes = Object.keys(product.sizePrices) as Array<
      //   keyof typeof product.sizePrices
      // >;
      // setSelectedSize(availableSizes[0]);
      // setPrice(product.sizePrices[availableSizes[0]]);
    }
  }, [isModalOpen, product]);

  return (
    <CustomModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      {isLoggedIn ? (
        <ProductPreviewContainer>
          <h4>{product?.name}</h4>
          <Divider
            style={{
              border: "1px solid rgb(140, 140, 140)",
              margin: "0.4rem 0",
            }}
          />
          {/* <img src={product?.imageurl} alt={product?.name} /> */}
          <div className="product-info">
            <p style={{ marginTop: "1rem" }}>add your details</p>
            <Input
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              style={{ width: "100%", marginTop: "-0.5rem" }}
            />
            <SummarySection>
              <div className="summary-section" style={{ gap: "0.8rem" }}>
                <p style={{ fontSize: "0.85rem" }}>Qty</p>
                <QuantityButtonsContainer>
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => handleQuantityChange(quantity + 1)}>
                    +
                  </button>
                  {quantity >= product.stock ? (
                    <span>Max stock reached</span>
                  ) : (
                    <></>
                  )}
                </QuantityButtonsContainer>
              </div>
              <div className="summary-section">
                <p style={{ fontSize: "0.85rem" }}>Total</p>
                <p style={{ fontSize: "1.2rem" }}>{price * quantity}$</p>
              </div>
              <button className="add-button" onClick={handleAddToCart}>
                add
              </button>
            </SummarySection>
          </div>
        </ProductPreviewContainer>
      ) : (
        <PleaseLoginModal
          message="Please login to add this product to your cart!"
          hasBackground={true}
        />
      )}
    </CustomModal>
  );
};

const ProductPreviewContainer = styled.div`
  padding: 1rem;
  display: flex;
  width: 25vw;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.tan};
  p {
    margin: 0;
  }
  h4 {
    margin: 0.5rem 0;
    font-family: ${({ theme }) => theme.fonts.family};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
  img {
    width: 100%;
  }
  .product-info {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
    margin-top: 1rem;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
    .options {
      gap: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      margin-top: -0.7rem;
      text-align: center;
    }
  }
  @media (max-width: 1000px) {
    width: 35vw;
  }
  @media (max-width: 780px) {
    width: 45vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
`;

const QuantityButtonsContainer = styled.button`
  padding: 0;
  width: auto;
  margin-top: -0.5rem;
  border: none;
  color: black;
  display: flex;
  align-items: center;
  background-color: transparent;
  p {
    height: 25px;
    width: 30px;
    font-size: 0.9rem;
    align-content: center;
  }
  span {
    color: red;
    font-size: 0.8rem;
    margin: 0;
    margin-left: 0.5rem;
  }
  button {
    width: 25px;
    height: 25px;
    border: none;
    font-weight: bold;
    border-radius: 99px;
    transition: background-color 0.5s;
    background-color: ${({ theme }) => theme.colors.white};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.tan};
    }
  }
`;

const SummarySection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  .add-button {
    margin-right: 0;
    margin-left: auto;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Delius", serif;
  }
  .summary-section {
    width: 30%;
    display: flex;
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    flex-direction: column;
    margin: 0.5rem 0.5rem 0 0;
    background-color: ${({ theme }) => theme.colors.gray_light};
  }
`;
