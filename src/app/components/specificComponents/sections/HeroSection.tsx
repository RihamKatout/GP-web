import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import room from "../../../../assets/store/room.png";
import styled from "styled-components";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContentContainer>
        <Heading>
          <span>Craftopia, </span>
          Shop Beyond Limits
        </Heading>
        <Subheading>
          Customize products effortlessly and enjoy a unique shopping experience
          made especially for you and who you love.
        </Subheading>
        <StyledButton>Explore Creative Stores</StyledButton>
        {/* <Button onClick={() => navigate("/dashboard")}>Dashboard</Button> */}
        <SocailIcons>
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </SocailIcons>
      </ContentContainer>
      <img
        src={room}
        alt="Home"
        style={{ width: "130%", height: "100%", alignSelf: "center" }}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 90vh;
  padding: 2rem 4rem;
  display: flex;
  margin: 0 auto;
  max-width: 100vw;
  img {
    width: 60% !important;
  }
`;

const ContentContainer = styled.div`
margin-top: 4rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  span {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary_dark};
  }
  font-family: "Itim";
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  width: 200px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: background-color 0.5s;
  box-shadow: 0 1rem 1rem 0 rgba(217, 217, 217, 0.5),
    0 0.6rem 0.5rem rgba(255, 255, 255, 0.52) inset,
    0 0.25rem 0.5rem 0 rgba(205, 7, 100, 0.36) inset;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.secondary_light};
  }
`;

const SocailIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 2rem;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.primary_dark};
  svg {
    width: auto;
    height: 2.5rem !important;
    cursor: pointer;
    transition: color 0.5s;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
