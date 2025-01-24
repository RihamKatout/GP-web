import React from "react";
import { Product, ProductDetail } from "../../../types";
import styled from "styled-components";
import { ProductDetailsCard } from "./ProductDetailsCard";
import { CustomizableProduct, ReviewSection, StoreCard } from "../..";

//TODO: fix responsive
interface ProductSectionProps {
  productDto: ProductDetail;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  productDto,
}) => {
  const product: Product = productDto.product;
  const storeInfo = productDto.store;

  return (
    <SectionContainer>
      <ProductContainer>
        <CustomizableProduct isCustomizable={product?.is3dCustomizable} />
        <ProductDetailsCard productDto={productDto} />
      </ProductContainer>
      <StoreAndReviewsContainer>
        <StoreCard storeInfo={storeInfo} />
        <ReviewSection />
      </StoreAndReviewsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  gap: 1rem;
  width: auto;
  height: auto;
  padding: 2rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
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

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 73%;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

const StoreAndReviewsContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 24vw;
  border-radius: 1rem;
  @media (max-width: 780px) {
    width: 100%;
  }
`;
