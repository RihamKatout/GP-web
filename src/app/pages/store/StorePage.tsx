import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { StoreService } from "../../api/StoreService";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { SectionIdEnum } from "../../types";
import {
  StoreInformationSection,
  StoreOffersSection,
  StoreProductsSection,
} from "../../features";
import styled from "styled-components";
import { OffersService } from "../../api";

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

  const {
    data: offers,
    isLoading: offersLoading,
    error: offersError,
  } = useQuery(
    ["offers", id],
    () => OffersService.getOffersForStore(Number(id)),
    {
      enabled: !!id,
      cacheTime: 0,
    }
  );

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.store}>
        {!store && <p>Not found</p>}
        {store && (
          <StoreContainer>
            <StoreInformationSection store={store} />
            <StoreOffersSection
              store={store}
              offers={offers ?? []}
              isLoading={offersLoading}
              errors={offersError}
            />
            <StoreProductsSection
              storeId={store?.id}
              productCategories={store?.productCategories ?? []}
            />
          </StoreContainer>
        )}
      </SectionContainer>
    </MainLayout>
  );
};

const StoreContainer = styled.div`
  margin: 1rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr; /* Products take 3 columns, offers take 1 column */
  grid-template-rows: auto 1fr; /* Auto height for info section, equal height for products and offers */
  grid-gap: 1rem;
  grid-template-areas:
    "storeInfo storeInfo"
    "storeProducts storeOffers";

  & > div {
    padding: 1rem;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
    border-radius: 1rem;
    background: white;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "storeInfo"
      "storeOffers"
      "storeProducts";
  }
`;
