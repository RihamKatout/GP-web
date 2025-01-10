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
  gap: 0.5rem;
  width: 30vw;
  display: flex;
  padding: 1.5rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
  img {
    width: 25%;
  }
  div {
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    background-color: white;
    flex-direction: column;
    text-align: center;
    h4 {
      font-family: "Delius", serif;
      font-weight: bold;
    }
    button {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      border: none;
      border-radius: 0.3rem;
      padding: 0.2rem 0.5rem;
      font-size: 1rem;
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
