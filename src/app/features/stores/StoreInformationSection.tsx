import React from "react";
import { Store } from "../../types";
import styled from "styled-components";

interface StoreInformationSectionProps {
  store: Store;
}
export const StoreInformationSection: React.FC<
  StoreInformationSectionProps
> = ({ store }) => {
  return (
    <Container>
      <p>{store?.name}</p>
      <p>{store?.description}</p>
      <p>{store?.logoURL}</p>
      <p>{store?.coverURL}</p>
      <p>{store?.rating}</p>
      <p>{store?.numberOfReviews}</p>
      {/* social links are not added in back */}
    </Container>
  );
};

const Container = styled.div`
  grid-area: storeInfo;
  background-color: yellow;
`;
