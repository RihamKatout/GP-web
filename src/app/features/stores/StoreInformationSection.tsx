import React from "react";
import { Store } from "../../types";
import styled from "styled-components";
import Rating from "@mui/material/Rating"; // Import Rating component from MUI
import cover from "../../../assets/store/cover.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface StoreInformationSectionProps {
  store: Store;
}

export const StoreInformationSection: React.FC<StoreInformationSectionProps> = ({ store }) => {
  return (
    <Container>
      <CoverImage>
        <img src={store?.coverURL || cover} alt="Cover" />
      </CoverImage>
      <ProfileSection>
        <ProfileImage>
          <img src={store?.logoURL || "https://via.placeholder.com/150"} alt={`${store?.name} Logo`} />
        </ProfileImage>
        <StoreDetails>
          <h1>{store?.name || "Store Name"}</h1>
          <p>{store?.description || "The best store with amazing products!"}</p>
          <RatingContainer>
            <Rating
              name="half-rating-read"
              defaultValue={4} // store?.rating
              precision={0.5}
              readOnly
              size="small"
            />
            <ReviewCount>{store?.numberOfReviews || 4} reviews</ReviewCount>
          </RatingContainer>

          {/* Social Media Links for Store ID 3 */}
          {store?.id === 3 && (
            <SocialIcons>
              <a href="https://www.facebook.com/Sweet.Touches" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/sweet.toaches?igsh=bTl5cGgyNnh5Nmp3" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              {/* You can add a YouTube link if necessary */}
            </SocialIcons>
          )}
        </StoreDetails>
      </ProfileSection>
    </Container>
  );
};

const Container = styled.div`
  grid-area: storeInfo;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
`;

const CoverImage = styled.div`
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -60px; /* Pulls the profile image into the cover */
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StoreDetails = styled.div`
  text-align: center;
  margin-top: 15px;
  h1 {
    margin: 0;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secondary_dark};
    font-family: "Delius";
    font-weight: bold;
  }
  p {
    margin: 5px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const RatingContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #444;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
  svg {
    width: 2rem;
    height: 2.5rem !important;
    cursor: pointer;
    transition: color 0.5s;
    color: ${({ theme }) => theme.colors.primary_dark};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default StoreInformationSection;
