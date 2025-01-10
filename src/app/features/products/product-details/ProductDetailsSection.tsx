import React from "react";
import { Product } from "../../../types";
import styled from "styled-components";
import { ProductDetailsCard } from "./ProductDetailsCard";
import { StoreCard } from "./StoreCard";

interface ProductSectionProps {
  product: Product;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  return (
    <>
      <SectionContainer>
        <div className="product-details">
          <ProductDetailsCard product={product} />
          <StoreCard
            storeId={product?.storeIdTmp}
            storeName={product?.storeName}
            storeLogoUrl={product?.storeLogoUrl}
          />
        </div>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 100vw;
  margin: 3rem 0;
  flex-direction: column;
  h2 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  .product-details {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 780px) {
    .product-details {
      flex-direction: column;
    }
  }
`;
