import React from "react";
import styled from "styled-components";

interface StoreCardProps {
  storeId: number;
  storeName: string;
  storeLogoUrl?: string;
}
export const StoreCard: React.FC<StoreCardProps> = ({
  storeId,
  storeName,
  storeLogoUrl,
}) => {
  return (
    <ProductStoreContainer>
      {storeName}
      {storeLogoUrl}
      {storeId}
    </ProductStoreContainer>
  );
};

const ProductStoreContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 1rem;
  width: 30%;
  @media (max-width: 780px) {
    width: 100%;
  }
`;
