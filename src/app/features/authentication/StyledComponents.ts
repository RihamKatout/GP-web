import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.gray_light};
  border-radius: 1rem;
  width: 100%;
  height: fit-content;
  padding: 0.8rem 1.5rem;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.2);
  border: none;
  &:focus {
    box-shadow: 0px 0px 8px #a3b8ff;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 0.9rem;
  }
`;

export const StyledButton = styled.button`
  width: 70%;
  border: none;
  border-radius: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.5rem 0;
  font-family: "Overlock", serif;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  box-shadow: -2px 10px 7px rgba(255, 255, 255, 0.3) inset,
    0 0.25rem 0.5rem 0 rgba(215, 126, 143, 0.3) inset;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    box-shadow: -2px 10px 17px rgba(255, 255, 255, 0.19) inset,
      0 0.25rem 0.2rem 0 rgba(126, 194, 215, 0.5) inset;
  }
`;

export const WelcomeText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0 1.5rem 0;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-family: "Overlock", serif;
  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const MainContainer = styled.div`
  gap: 1rem;
  width: 400px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  border-radius: 2rem;
`;

export const FormContainer = styled.form`
  gap: 1rem;
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const LinkToRegister = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
  font-family: "Overlock", serif;
`;

export const StyledLink = styled(Link)`
  color: #e1a0ac;
  text-decoration: none;
  font-weight: bold;
  font-family: "Overlock", serif;
  &:hover {
    text-decoration: underline;
  }
`;
