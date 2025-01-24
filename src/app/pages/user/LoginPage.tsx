import LoginForm from "../../features/authentication/LoginForm";
import styled from "styled-components";
import img from "../../../assets/store/login.png";
export const LoginPage = () => {
  return (
    <PageContainer>
      <LoginForm />
      <AnimatedBackground>
        <img src={img} />
      </AnimatedBackground>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  gap: 4rem;
  width: 100vw;
  display: flex;
  padding: 2rem;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const AnimatedBackground = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;
