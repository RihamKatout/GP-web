import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RegisterForm from "../../features/authentication/RegisterForm";
import styled from "styled-components";
import img from "../../../assets/store/register.png";
export const RegisterPage = () => {
  return (
    <PageContainer>
      {/* Lottie Animation as Background */}
      <AnimatedBackground>
        <img
          src={img}
          
          style={{
            position: "absolute",
            top: 0,
            left: "-300px",
            width: "100%",
            height: "100%",
            zIndex: -1, // Places animation behind content
          }}
        />
      </AnimatedBackground>
      {/* Centered Register Form */}
      <CenteredContainer>
        <RegisterContainer>
          <RegisterForm />
        </RegisterContainer>
      </CenteredContainer>
    </PageContainer>
  );
};

/////// Styled Components ///////

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: center; 
  }
`;

const AnimatedBackground = styled.div`
  @media (max-width: 768px) {
    display: none; /* Hide animation on mobile devices */
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RegisterContainer = styled.div`
  margin-right: -700px; /* Default margin for larger screens */

  @media (max-width: 1024px) {
    margin-right: 0 auto; /* Remove margin for smaller screens */
    width: 70%; /* Adjust width for tablets */
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-right: 0 auto;
    width: 90%; /* Adjust width for mobile devices */
    text-align: center; /* Center-align form content */
    align-items: center;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
    width: 95%; /* Maximize width on very small screens */
    align-items: center;

  }

  /* Allow height to adapt to content */
  height: auto;
  
`;