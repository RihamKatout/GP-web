import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { StoreService } from "../../api/StoreService";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { SectionIdEnum, Store } from "../../types";
import {
  StoreInformationSection,
  StoreOffersSection,
  StoreProductsSection,
} from "../../features";
import styled from "styled-components";

export const StorePage = () => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const {
    data: store,
    isLoading,
    error,
  } = useQuery(["store", id], () => StoreService.getStoreById(Number(id)), {
    enabled: !!id,
    cacheTime: 0,
  });
  console.log("store", store);
  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.store}>
        {!store && <p>not found</p>}
        {store && (
          <StoreContainer>
            <StoreInformationSection store={store} />
            <StoreOffersSection />
            <StoreProductsSection
              storeId={store?.id}
              productCategories={store?.productCategories}
            />
          </StoreContainer>
        )}
      </SectionContainer>
    </MainLayout>
  );
};

const StoreContainer = styled.div`
  margin: 2rem;
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas:
    "storeInfo storeInfo storeInfo storeOffers"
    "storeInfo storeInfo storeInfo storeOffers"
    "storeProducts storeProducts storeProducts storeOffers"
    "storeProducts storeProducts storeProducts storeOffers"
    "storeProducts storeProducts storeProducts storeOffers";

  & > div {
    padding: 1rem;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
    border-radius: 1rem;
  }
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-row: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "storeInfo"
      "storeOffers"
      "storeProducts"
      "storeProducts";
  }
`;
