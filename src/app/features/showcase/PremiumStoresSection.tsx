import { Carousel, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PremiumStore } from "../../types";
import { Rating } from "@mui/material";
import { NavyRobotImg } from "../../../assets";

const PremiumStoresData: PremiumStore[] = [
  {
    id: 1,
    name: "Riham Store",
    logo: "https://drive.google.com/thumbnail?id=1dZkmsrJjKo8k5D6pAKtrHmiJE60AGjQo",
    rating: 4.5,
    description: "We have the best cookies ever, try it now!",
    premiumImage:
      "https://drive.google.com/thumbnail?id=1Mm5ACUtavPrKleysUDRR2dDMPJsnkWxW",
  },
  {
    id: 2,
    name: "Siwar Store",
    logo: "https://drive.google.com/thumbnail?id=1dZkmsrJjKo8k5D6pAKtrHmiJE60AGjQo",
    rating: 4.5,
    description: "We have the best cookies ever, try it now!",
    premiumImage:
      "https://drive.google.com/thumbnail?id=1TuDw7pf71jj3m9wziwC0fAA4fcPkHy1w",
  },
  {
    id: 3,
    name: "Sweet Touches",
    logo: "https://drive.google.com/thumbnail?id=1dZkmsrJjKo8k5D6pAKtrHmiJE60AGjQo",
    rating: 4.5,
    description: "We have the best cookies ever, try it now!",
    premiumImage:
      "https://drive.google.com/thumbnail?id=1ZBt7IpMZ_wK4D_cJHajUb_4vEYET1HEz",
  },
];

const sliderSettings = {
  dots: false,
  dotPosition: "left" as const,
  infinite: true,
  speed: 500,
  autoplay: true,
  vertical: true,
  verticalSwiping: true,
};

export const PremiumStoresSection = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ViewStoresContainer>
        <p>Discover the Genius Behind the Creativity!</p>
        <button>View stores</button>
      </ViewStoresContainer>
      <Divider style={{ borderColor: "black" }}>
        <Title>Top Stores</Title>
      </Divider>
      <StyledCarousel {...sliderSettings}>
        {PremiumStoresData.map((store) => (
          <div key={store.id}>
            <StoreCard>
              <div>
                <StoreName>{store.name}</StoreName>
                <Rating name="read-only" value={store.rating} readOnly />
              </div>
              <div>
                <StoreImage src={store.premiumImage} />
                <StoreDescription>{store.description}</StoreDescription>
              </div>
              <VisitButton onClick={() => navigate(`/store/${store.id}`)}>
                Visit Store
              </VisitButton>
            </StoreCard>
          </div>
        ))}
      </StyledCarousel>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  border-radius: 0.5rem;
  margin: 1.5rem 1rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.44);
`;

const ViewStoresContainer = styled.div`
  width: auto;
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  button {
    width: 100%;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.3rem 1rem;
    border-radius: 0.5rem;
    font-family: "Overlock", serif;
    transition: background-color 0.3s;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_dark};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-family: "Overlock", serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
const StyledCarousel = styled(Carousel)`
  margin: -1rem auto;
  width: 90%;
  height: 500px !important;
  display: flex !important;
  align-items: center;
  justify-content: center;

  .slick-list {
    width: 100%;
  }

  .slick-track {
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
  }

  .slick-slide {
    height: inherit !important;
    > div {
      height: 100%;
    }
  }

  .slick-dots {
    left: 10px !important;
    li button {
      background-color: ${({ theme }) => theme.colors.white} !important;
    }
    li.slick-active button {
      background-color: ${({ theme }) => theme.colors.secondary} !important;
    }
  }
`;

const StoreCard = styled.div`
  margin: 1rem !important;
  gap: 0.5rem;
  width: 90%;
  height: 450px;
  margin: 0 auto;
  padding: 1rem;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.21);
  border-radius: 15px;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StoreImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const StoreName = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Delius", serif;
  color: ${({ theme }) => theme.colors.primary_dark};
  margin-bottom: 0.5rem;
`;

const StoreDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: "Overlock", serif;
`;

const VisitButton = styled.button`
  width: 100%;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Overlock", serif;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_dark};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
