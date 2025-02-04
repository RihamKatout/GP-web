import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Theme } from "../../utils/Theme";
import { useNavigate } from "react-router-dom";
import { OfferDto , Offer } from "../../types/shopping/Offers.types";
import styled from "styled-components";
import { Loader } from "../../components/common";
import { OffersService } from "../../api";

interface OffersSectionProps {
  offers: OfferDto[] | undefined;
  isLoading: boolean;
  error: any;
}

export const OffersSection: React.FC<OffersSectionProps> = ({
  offers,
  isLoading,
  error,
}) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  console.log("the offer", offers);
  return (
    <Container>
      <h1>Offers</h1>
      {isLoading ? (
        <Loader type="bouncing" />
      ) : error ? (
        <h2 style={{ width: "100%", textAlign: "center", padding: "4rem" }}>
          Sorry we couldn't load offers right now
        </h2>
      ) : (
        <Slider {...settings}>
          {offers &&
            offers.map((offer) => (
              <div>
                <OfferContainer>
                  <OfferInfoContainer>
                    <p className="title">{offer.title}</p>
                    <p className="end">
                      <span className="remaining-time">
                        {(() => {
                          const timeRemaining =
                            new Date(offer.endDate).getTime() -
                            new Date().getTime();

                          const daysRemaining = Math.max(
                            0,
                            Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
                          );
                          const hoursRemaining = Math.max(
                            0,
                            Math.floor(
                              (timeRemaining % (1000 * 60 * 60 * 24)) /
                                (1000 * 60 * 60)
                            )
                          );

                          return timeRemaining > 0
                            ? `${daysRemaining} days, ${hoursRemaining} hours remaining`
                            : "Ended";
                        })()}
                      </span>
                      <span className="end-label">
                        Ends on: {new Date(offer.endDate).toLocaleString()}
                      </span>
                    </p>
                    <p className="description">{offer.description}</p>
                    <button onClick={() => navigate(`/offer/${offer.id}`)}>
                      View Offer
                    </button>
                  </OfferInfoContainer>
                  <img alt={offer.title} src={offer.imageurl} />
                </OfferContainer>
              </div>
            ))}
        </Slider>
      )}
    </Container>
  );
};

const Container = styled.div`
  gap: 1 rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0;
    font-weight: 400;
    font-size: 3.7rem;
    font-family: "DynaPuff";
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
  }

  .slick-slider {
    width: 70%;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: -40px;

    li button:before {
      font-size: 12px;
      color: #666;
    }

    li.slick-active button:before {
      color: #000;
    }
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 1;

    &:before {
      font-size: 40px;
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }

    &:hover:before {
      opacity: 1;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
  @media (max-width: 780px) {
    height: auto;
  }
`;

const OfferContainer = styled.div`
  gap: 5rem;
  margin: 1rem;
  display: flex;
  padding: 2rem;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  img {
    width: 17vw;
    height: 17vw;
    margin: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    img {
      width: 90%;
      height: auto;
    }
  }
`;

const OfferInfoContainer = styled.div`
  width: 30vw;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .title {
    font-weight: 700;
    font-size: 3.1rem;
    color: ${Theme.colors.secondary_dark};
  }
  .description {
    color: ${Theme.colors.gray};
  }
  .end {
    gap: 0.5rem;
    display: flex;
    width: fit-content;
    align-items: center;
  }

  .end-label {
    font-size: 0.9rem;
    color: ${Theme.colors.gray};
    letter-spacing: 0.5px;
  }

  .remaining-time {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${Theme.colors.secondary_dark};
    text-shadow: 1px 1px 2px rgba(205, 58, 158, 0.2);
    letter-spacing: 0.5px;
    background: linear-gradient(
      145deg,
      rgba(255, 0, 0, 0.15),
      rgba(0, 81, 255, 0.15)
    );
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: inline-block;
    box-shadow: 0 3px 5px rgba(58, 158, 205, 0.3);
  }

  button {
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    margin-top: auto;
    background-color: ${Theme.colors.primary};
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Overlock";
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(205, 58, 158, 0.36) inset;
  }
  @media (max-width: 780px) {
    width: 90%;
  }
`;
