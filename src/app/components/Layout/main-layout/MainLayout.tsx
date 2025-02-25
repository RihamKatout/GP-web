import React from "react";
import Box from "@mui/material/Box";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import mess from "../../../../assets/Icons/3d-setting.png";
import { Theme } from "../../../utils/Theme";
import styled from "styled-components";
export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chatHelper");
  };

  return (
    <Box component="section" height="100vh">
      <Navbar />
      <Box component="section">{children}</Box>
      <ChatButton onClick={goToChat}>
        <img src={mess} alt="Chat" style={{ width: "50px", height: "45px" }} />
      </ChatButton>
      <Footer />
    </Box>
  );
};
const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: ${Theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.2s;
  z-index: 100;

  &:hover {
    background-color: ${Theme.colors.secondary_dark};
    transform: scale(1.1);
  }

  &::after {
    content: "Help Center";
    position: absolute;
    bottom: 80px; /* Adjust based on your layout */
    right: 50%;
    transform: translateX(50%);
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;
