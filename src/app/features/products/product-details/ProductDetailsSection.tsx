import React, { useState } from "react";
import { Product, ProductSizeEnum } from "../../../types";
import styled from "styled-components";
import { ProductDetailsCard } from "./ProductDetailsCard";
import { AddToCartSection, StoreCard } from "../..";

interface ProductSectionProps {
  product: Product;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<ProductSizeEnum>(
    ProductSizeEnum.S
  );
  const [price, setPrice] = useState<number>(product.price);
  const isAvailable = product?.isAvailable && product?.stock > 0;

  return (
    <SectionContainer>
      <ProductAndReviewsContainer>
        <ProductDetailsCard
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          price={price}
          setPrice={setPrice}
          isAvailable={isAvailable}
        />
      </ProductAndReviewsContainer>
      <StoreAndCartContainer>
        <StoreCard
          storeId={product?.storeIdTmp}
          storeName={product?.storeName}
          storeLogo={product?.storeLogoUrl}
        />
        <AddToCartSection
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          price={price}
          setPrice={setPrice}
          isAvailable={isAvailable}
        />
      </StoreAndCartContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  gap: 1rem;
  width: auto;
  height: auto;
  padding: 2rem 3rem 3rem 3rem;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const StoreAndCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  width: 30%;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

const ProductAndReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 68%;
  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: 780px) {
    width: 100%;
  }
`;
