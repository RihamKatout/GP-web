import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import { OffersService } from "../../api";
import { Loader, ProductCard } from "../../components/common";
import { Offer } from "../../types";
import { Divider } from "antd";
import { Theme } from "../../utils/Theme";

export const OfferDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<Offer | undefined>(undefined);

  const { data, isLoading, error } = useQuery<Offer>(
    ["offer", id],
    () => OffersService.getOfferById(Number(id)),
    {
      enabled: !!id,
      cacheTime: 0,
      onSuccess: (data) => setOffer(data),
    }
  );

  return (
    <Container>
      <ContentWrapper>
        <Divider>
          <Title>Offer Details</Title>
        </Divider>
        {isLoading ? (
          <Loader type="bouncing" />
        ) : error ? (
          <Message>Error loading offer details.</Message>
        ) : (
          offer && (
            <>
              <OfferInfo>
                <OfferImage src={offer?.offer?.imageurl} alt={offer?.offer?.title} />
                <h2>{offer?.offer?.title}</h2>
                <p>{offer?.offer?.description}</p>
                <p>Discount: {offer?.offer?.discount}%</p>
                <p className="end">
  <span className="remaining-time">
    {(() => {
      const timeRemaining = new Date(offer?.offer?.endDate).getTime() - new Date().getTime();
      const daysRemaining = Math.max(0, Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      const hoursRemaining = Math.max(0, Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      return timeRemaining > 0 ? `${daysRemaining} days, ${hoursRemaining} hours remaining` : "Ended";
    })()}
  </span>
  <span className="end-label">
     {new Date(offer?.offer?.endDate).toLocaleString()}
  </span>
</p>
                
              </OfferInfo>
              {offer?.products?.length ? (
                <ProductsGrid>
                  {offer.products.map((productDto, index) =>
                    productDto?.product ? (
                      <ProductCard key={productDto.product.id} {...productDto} />
                    ) : (
                      <Message key={index}>Invalid product</Message>
                    )
                  )}
                </ProductsGrid>
              ) : (
                <Message>No products available for this offer.</Message>
              )}
            </>
          )
        )}
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 1150px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 60px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Theme.colors.secondary_dark};
  text-align: center;
`;

const OfferInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  p {
    font-size: 1rem;
    color: #6c757d;
  }
`;

const OfferImage = styled.img`
  width: 200px;
  border-radius: 8px;
  margin-top: 10px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 20px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #6c757d;
`;