import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PleaseLoginModal } from "../../../pages";
import { useAuth } from "../../../context";
import { Product, ProductSizeEnum } from "../../../types";
import { CartService } from "../../../api";
import { ProductColors, ProductSizes } from "../..";
interface AddToCartSectionProps {
  product: Product;
  setSelectedSize: React.Dispatch<React.SetStateAction<ProductSizeEnum>>;
  selectedSize: ProductSizeEnum;
  price: number;
  setPrice: (price: number) => void;
  isAvailable: boolean;
}
export const AddToCartSection: React.FC<AddToCartSectionProps> = ({
  product,
  setSelectedSize,
  selectedSize,
  price,
  setPrice,
  isAvailable,
}) => {
  const { isLoggedIn } = useAuth();
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>();

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      return;
    }
    if (!isAvailable) {
      // TODO: show error message
      return;
    }
    try {
      await CartService.addItem({
        product,
        size: selectedSize,
        quantity,
        details,
      });
    } catch (e: any) {
      console.error(e?.response?.data?.errors?.[0]);
    }
  };
  const handleQuantityChange = async (value: number) => {
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  useEffect(() => {
    setDetails("");
    setQuantity(1);
    if (product.colors?.length !== 0) setSelectedColor(product.colors?.[0]);
    const availableSizes = Object.keys(product.sizePrices) as Array<
      keyof typeof product.sizePrices
    >;
    setSelectedSize(availableSizes[0]);
    setPrice(product.sizePrices[availableSizes[0]]);
  }, [product]);

  return (
    <AddToCartContainer>
      <h5>Add to cart</h5>

      <SectionContent>
        {isLoggedIn ? (
          <>
            <div className="product-info">
              <ProductColors
                colors={product?.colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
              <ProductSizes
                sizes={product?.sizePrices}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                setPrice={setPrice}
              />
              <Input
                placeholder="Add your details here"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                style={{ width: "100%", marginTop: "0.5rem" }}
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
          </>
        ) : (
          <PleaseLoginModal
            message="Please login to add this product to your cart!"
            fontSize="1.2rem"
            darkFont={true}
            maxWidth="100%"
          />
        )}
      </SectionContent>
    </AddToCartContainer>
  );
};

const AddToCartContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  background-color: ${({ theme }) => theme.colors.white};
  h5 {
    font-family: "Delius", serif;
    font-weight: bold;
    width: auto;
    padding-bottom: 0.5rem;
    margin: 1rem 1rem;
    color: ${({ theme }) => theme.colors.secondary_dark};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary_dark};
  }
  @media (max-width: 780px) {
    margin-top: 1rem;
  }
`;

const SectionContent = styled.div`
  gap: 1rem;
  height: auto;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  .product-info {
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: flex-start;
  }
  @media (max-width: 780px) {
    width: 100%;
    .product-info {
      width: 100%;
    }
  }
  & > div {
    width: auto;
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
