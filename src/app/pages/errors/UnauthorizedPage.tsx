import { Button } from "antd";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import { unauthorizedImg } from "../../../assets";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { SectionIdEnum } from "../../types";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  img {
    width: 30%;
    height: 30%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    font-family: "DynaPuff";
    font-size: 3.14rem;
  }
  p {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1.5rem;
    font-family: "Delius Swash Caps";
  }
  button {
    max-width: 12.18rem;
    font-size: 1.2rem;
    font-family: "Delius Swash Caps";
    background-color: #edc483;
    border: none;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 1rem;
    img {
      width: 60%;
      height: 60%;
    }
    div {
      align-items: center;
    }
    p {
      font-size: 1.1rem;
      margin: 0;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const UnauthorizedPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.unauthorized}>
        <PageContainer>
          <img src={unauthorizedImg} alt="Unauthorized" />
          <div>
            <h1>We cought you</h1>
            <p>Oops! You are not allowed to access this page ...</p>
            {isLoggedIn ? (
              <Button onClick={() => navigate("/")}>Back to Home page</Button>
            ) : (
              <Button onClick={() => navigate("/login")}>Login</Button>
            )}
          </div>
        </PageContainer>
      </SectionContainer>
    </MainLayout>
  );
};
