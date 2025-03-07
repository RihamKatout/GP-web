import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Theme } from "../../utils/Theme";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mess from "../../../assets/Icons/message (2).png";
import { Divider } from "antd";
import { OfferDto, Review, Store } from "../../types";
import { useState } from "react";
import { Loader } from "../../components/common";
import { DefaultProfilePicture } from "../../../assets";

interface StoreOffersSectionProps {
  store: Store;
  offers: OfferDto[] | undefined;
  isLoading: boolean;
  errors: any;
  reviews?: Review[];
}

export const StoreOffersSection: React.FC<StoreOffersSectionProps> = ({
  store,
  offers,
  isLoading,
  errors,
  reviews,
}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chat navigation
  const goToChat = () => {
    navigate("/chat", { state: { storeName: store?.name } });
  };

  // Next & Previous Slide Handlers
  const handleNext = () => {
    if (offers) {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }
  };
  const handlePrev = () => {
    if (offers) {
      setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
    }
  };

  return (
    <Container>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <Title>Exclusive Offers</Title>
        </Divider>
      </div>

      {/* Circular Chat Button */}
      <ChatButton onClick={goToChat}>
        <img src={mess} alt="Chat" style={{ width: "70px", height: "35px" }} />
      </ChatButton>

      {isLoading || errors ? (
        <Loader type="fading" />
      ) : offers && offers.length > 0 ? (
        <Slider>
          <Button onClick={handlePrev}>{"<"}</Button>
          <OfferCard>
            <img
              src={offers[currentIndex].imageurl}
              alt={offers[currentIndex].title}
            />
            <h3>{offers[currentIndex]?.title}</h3>
            <p>{offers[currentIndex]?.description}</p>
          </OfferCard>
          <Button onClick={handleNext}>{">"}</Button>
        </Slider>
      ) : (
        <>
          <p>We don't have offers now!</p>
        </>
      )}

      {/* Dots for slider navigation */}
      <Dots>
        {offers &&
          offers.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
      </Dots>

      {/* Customer Reviews */}
      <ReviewsSection>
        <div style={{ width: "100%", margin: "0 auto" }}>
          <Title>Customer Reviews</Title>
        </div>

        <ReviewsList>
          {reviews?.map((review) => (
            <ReviewCard key={review.id}>
              <img
                src={review.userInfo.imageurl || DefaultProfilePicture}
                alt={review.userInfo.username}
              />
              <div>
                <ReviewerName>
                  {review.userInfo.firstName + " " + review.userInfo.lastName}
                </ReviewerName>
                <ReviewText>{review.feedback}</ReviewText>
              </div>
            </ReviewCard>
          ))}
        </ReviewsList>
      </ReviewsSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  grid-area: storeOffers;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Theme.colors.secondary_dark};
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 0.5rem;
  font-family: "Delius";
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  position: relative;
`;

const OfferCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 130px;
    height: 130px;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  h3 {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-family: "Overlock", serif;
    color: ${({ theme }) => theme.colors.primary_dark};
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.secondary_dark};
    }
  }

  p {
    font-size: 1rem;
    color: #6c757d;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary_dark};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? Theme.colors.secondary : "#ccc"};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#aaa")};
  }
`;
const ReviewsSection = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
`;

const ReviewsList = styled.div`
  max-height: 350px;
  overflow-y: auto;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.primary_dark}; /* Thumb color */
    border-radius: 10px; /* Rounded corners */
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Track color */
  }
`;

const ReviewCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ReviewerName = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary_dark};
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-family: "Overlock", serif;
`;

const ReviewText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;
const ChatButton = styled.button`
  position: fixed;
  bottom: 110px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: ${Theme.colors.primary_dark};
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.2s;
  z-index: 100;

  &:hover {
    background-color: ${Theme.colors.secondary};
    transform: scale(1.1);
  }
`;
export default StoreOffersSection;
