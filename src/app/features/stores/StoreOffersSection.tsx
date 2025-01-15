import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../../utils/Theme";
import img from '../../../assets/store/discount.png';
import img2 from '../../../assets/store/discount2.png';
import img1 from '../../../assets/store/discountChar.png';
import riham from '../../../assets/characters/riham.png';
import riham1 from '../../../assets/characters/loginChar.png';
const offers = [
  {
    id: 1,
    title: "50% Off on All Products",
    description: "Limited time offer!",
    image: img,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "Applicable on selected items.",
    image: img2,
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "On orders above $50.",
    image: img1,
  },
];

const reviews = [
  {
    id: 1,
    name: "Alice",
    text: "Amazing store! Great offers and fast delivery.",
    image: riham,
  },
  {
    id: 2,
    name: "John",
    text: "Loved the discounts. Will shop again for sure!",
    image: riham1,
  },
  {
    id: 3,
    name: "Sophia",
    text: "Customer service was excellent. Highly recommend!",
    image: riham,
  },
  {
    id: 4,
    name: "Sophia",
    text: "Customer service was excellent. Highly recommend!",
    image: riham1,
  },
];


export const StoreOffersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <Container>
      <Title>Exclusive Offers</Title>
      <Slider>
        <Button onClick={handlePrev}>{"<"}</Button>
        <OfferCard>
         <img src={offers[currentIndex].image} alt={offers[currentIndex].title} />
         <h3>{offers[currentIndex].title}</h3>
          <p>{offers[currentIndex].description}</p>
        </OfferCard>
        <Button onClick={handleNext}>{">"}</Button>
      </Slider>
      <Dots>
        {offers.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Dots>
      <ReviewsSection>
        <h2>Customer Reviews</h2>
        <ReviewsList>
  {reviews.map((review) => (
    <ReviewCard key={review.id}>
      <img src={review.image} alt={review.name} />
      <div>
        <ReviewerName>{review.name}</ReviewerName>
        <ReviewText>{review.text}</ReviewText>
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
  //justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  //padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
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
    width: 100%; /* Full width of the card */
    height: auto;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary_dark};
    margin-bottom: 0.5rem;
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
  background-color: ${(props) => (props.active ? Theme.colors.secondary : "#ccc")};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#aaa")};
  }
`;
const ReviewsSection = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
  

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }
`;

const ReviewsList = styled.div`
  max-height: 350px; /* Adjust the height as needed */
  overflow-y: auto; /* Enables vertical scrolling */
  padding-right: 1rem; /* Space for scrollbar */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Add styling for scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_dark};; /* Thumb color */
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
`;

const ReviewText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;
