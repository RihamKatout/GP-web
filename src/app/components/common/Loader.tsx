import React from "react";
import styled, { keyframes } from "styled-components";

interface LoaderProps {
  type: "circular" | "bouncing" | "pulse" | "fading" | "twist" | "wave";
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const fade = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const wave = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const CircleLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: #3498db;
  border-radius: 50%;
  animation: ${bounce} 0.6s infinite alternate;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const PulseLoader = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  border-radius: 50%;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const FadingText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3498db;
  animation: ${fade} 2s infinite;
`;

const TwistSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
`;

const WaveLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wave = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: #3498db;
  border-radius: 50%;
  animation: ${wave} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const Loader: React.FC<LoaderProps> = ({ type }) => {
  return (
    <LoaderContainer>
      {type === "circular" && <CircleLoader />}
      {type === "bouncing" && (
        <DotsContainer>
          <Dot />
          <Dot />
          <Dot />
        </DotsContainer>
      )}
      {type === "pulse" && <PulseLoader />}
      {type === "fading" && <FadingText>Loading...</FadingText>}
      {type === "twist" && <TwistSpinner />}
      {type === "wave" && (
        <WaveLoaderContainer>
          <Wave />
          <Wave />
          <Wave />
        </WaveLoaderContainer>
      )}
    </LoaderContainer>
  );
};
