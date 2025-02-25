import React from "react";
import styled from "styled-components";
import { DefaultStoreImg, StripedAwningsImg } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import { StoreBasicInfoDto } from "../../../types";

interface StoreCardProps {
  storeInfo: StoreBasicInfoDto;
}

export const StoreCard: React.FC<StoreCardProps> = ({ storeInfo }) => {
  const navigate = useNavigate();
  return (
    <ProductStoreContainer>
      <img
        style={{ width: "100%", zIndex: "2", marginTop: "-9%" }}
        src={StripedAwningsImg}
        alt={storeInfo.storeName}
      />
      <StoreInfo onClick={() => navigate(`/store/${storeInfo.storeId}`)}>
        <div className="store-logo">
          <img
            src={storeInfo.storeLogoURL || DefaultStoreImg}
            alt={storeInfo.storeName}
          />
          <h4>{storeInfo.storeName}</h4>
        </div>
        <p>{storeInfo.description}</p>
        <button>Visit Store</button>
      </StoreInfo>
    </ProductStoreContainer>
  );
};

const ProductStoreContainer = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  border-radius: 2rem;
  flex-direction: column;
  margin-top: 2.5rem;
  background-color: transparent;
  justify-content: space-between;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  @media (max-width: 780px) {
    display: none;
  }
`;

const StoreInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  h4 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
    font-family: "Delius Swash Caps", serif;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    margin-bottom: auto;
    font-size: 1.1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
  }
  button {
    border: none;
    width: 100%;
    background-color: rgba(210, 110, 126, 0.9);

    padding: 0.4rem 1rem;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 1.5rem;
    font-family: "Delius", serif;
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      2px 0.5rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(212, 170, 185, 0.36) inset;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary_light};
    }
  }
  .store-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
`;
