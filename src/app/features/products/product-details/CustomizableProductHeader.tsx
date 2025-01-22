import React from "react";
import styled from "styled-components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

// TODO: fix navigation

interface CustomizableProductProps {
  isCustomizable: boolean;
}
export const CustomizableProduct: React.FC<CustomizableProductProps> = ({
  isCustomizable,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {isCustomizable && (
        <Container>
          <DotLottieReact
            src="https://lottie.host/5ed3a060-3457-4dca-8bcd-20fd1935d6e6/murWSnXNyG.lottie"
            loop
            autoplay
            style={{ width: "140px", height: "120px" }}
          />
          <p>
            You can design this product as you want{" "}
            <span onClick={() => navigate("/cake")}>from here</span>
          </p>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: -2rem 1rem;
  margin-top: -1.5rem;
  margin-bottom: -3.2rem;
  p {
    margin: 0 0 1rem -0.8rem;
    font-size: 1.5rem;
  }
  span {
    margin-left: 0.3rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary_dark};
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 780px) {
    p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  }
`;
