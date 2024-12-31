import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LoginForm from "../../features/authentication/LoginForm";
import styled from "styled-components";

export const LoginPage = () => {
  return (
    <PageContainer>
      {/* Lottie Animation as Background */}
     <AnimatedBackground>
      <DotLottieReact
        src="https://lottie.host/1a8e801a-e220-49bf-9e42-a2a0c0a6dd3f/hwIuP7H4Bi.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          left: '350px',
          width: "100%",
          height: "100%",
          zIndex: -1, // Places animation behind content

        }}
      />
     </AnimatedBackground>
      {/* Centered Login Form */}
      <CenteredContainer>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </CenteredContainer>
    </PageContainer>
  );
};

/////// Styled Components ///////

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginContainer = styled.div`
  margin-right: 700px; /* Default margin for larger screens */

  @media (max-width: 1024px) {
    margin: 0 auto; /* Remove margin for smaller screens */
    width: 70%; /* Adjust width for tablets */
  }

  @media (max-width: 768px) {
    margin: 0 auto; 
    width: 90%; /* Adjust width for mobile devices */
    text-align: center; /* Center-align form content */
  }

  @media (max-width: 480px) {
    width: 95%; /* Maximize width on very small screens */
  }
`;
const AnimatedBackground = styled.div`

 @media (max-width: 768px) {
    display: none; /* Hide animation on mobile devices */
 }
`