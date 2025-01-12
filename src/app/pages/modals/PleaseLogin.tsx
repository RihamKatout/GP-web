import React from "react";
import styled from "styled-components";
import { WhiteKidImg } from "../../../assets";
import { useNavigate } from "react-router-dom";

interface Props {
  message?: string;
  fontSize?: string;
  hasBackground?: boolean;
  darkFont?: boolean;
}
export const PleaseLoginModal: React.FC<Props> = ({
  message,
  fontSize,
  hasBackground,
  darkFont,
}) => {
  const navigate = useNavigate();
  return (
    <ModalContainer hasBackground={hasBackground} darkFont={darkFont}>
      <img src={WhiteKidImg} alt="Join Us" />
      <div>
        <h4 style={{ fontSize: fontSize }}>{message || "Please Login!"}</h4>
        <button
          onClick={() =>
            navigate("/login", {
              state: { from: window.location.pathname },
            })
          }
        >
          Login
        </button>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{
  hasBackground?: boolean;
  darkFont?: boolean;
}>`
  width: 100%;
  max-width: 30vw;
  display: flex;
  padding: 1.5rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, hasBackground }) =>
    hasBackground ? theme.colors.secondary : "transparent"};
  img {
    width: 25%;
  }
  div {
    gap: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme, darkFont }) =>
      darkFont ? theme.colors.secondary : theme.colors.white};
    h4 {
      font-family: "Delius", serif;
      font-weight: bold;
    }
    button {
      background-color: ${({ theme }) => theme.colors.primary_dark};
      color: white;
      border: none;
      border-radius: 0.3rem;
      padding: 0.2rem 1rem;
      font-size: 1.2rem;
      cursor: pointer;
      font-family: "Delius", serif;
    }
  }
  @media (max-width: 1000px) {
    width: 50vw;
  }
  @media (max-width: 780px) {
    width: 70vw;
    padding: 1rem;
  }
`;
