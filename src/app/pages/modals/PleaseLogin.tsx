import React from "react";
import styled from "styled-components";
import { JoinUsImg } from "../../../assets";
import { useNavigate } from "react-router-dom";

interface Props {
  message?: string;
}
export const PleaseLoginModal: React.FC<Props> = ({ message }) => {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      <img src={JoinUsImg} alt="Join Us" />
      <div>
        <h4>{message || "Please Login!"}</h4>
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

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  padding: 1.5rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  img {
    width: 25%;
  }
  div {
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
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
