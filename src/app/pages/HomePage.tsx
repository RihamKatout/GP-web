import { SectionIdEnum } from "../types";
import { MainLayout, SectionContainer } from "../components/Layout";
import { StoreCategoriesSection } from "../components/specificComponents/sections/StoreCategoriesSection";
import { OffersSection } from "../features";
import {
  HelpCenterSection,
  HeroSection,
} from "../components/specificComponents";
import { StoresSection } from "../components/specificComponents/sections/StoresSection";
import { useQuery } from "react-query";
import { StoreCategoryService } from "../api";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../utils/Theme";
import mess from "../../assets/Icons/3d-setting.png";

export const HomePage = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(
    location.state?.showWelcome || false
  );

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery(["categories"], StoreCategoryService.getStoreCategories);

  const sections = [
    {
      sectionId: SectionIdEnum.home,
      component: <HeroSection />,
    },
    {
      sectionId: SectionIdEnum.offers,
      component: <OffersSection />,
    },
    {
      sectionId: SectionIdEnum.categories,
      component: (
        <StoreCategoriesSection
          categories={categories}
          isLoading={isLoading}
          error={error}
        />
      ),
    },
    {
      sectionId: SectionIdEnum.shop,
      component: <StoresSection categories={categories} />,
    },
    {
      sectionId: SectionIdEnum.help,
      component: <HelpCenterSection />,
    },
  ];
  const navigate = useNavigate();
  
  const goToChat = () => {
    navigate("/chatHelper");
  };

  return (
    <MainLayout>
      {user && (
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={2000}
          onClose={() => setIsSnackbarOpen(false)}
          message={`Welcome ${user.firstName}!`}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}

        />
      )}

      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
            <ChatButton onClick={goToChat}><img src={mess} alt="Chat" style={{width: "50px", height: "45px"}} /></ChatButton>
          </SectionContainer>
        );
      })}
    </MainLayout>
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
    background-color: ${Theme.colors.secondary};
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