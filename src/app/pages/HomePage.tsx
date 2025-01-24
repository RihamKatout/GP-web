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
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};
