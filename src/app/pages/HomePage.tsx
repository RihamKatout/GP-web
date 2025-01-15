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

export const HomePage = () => {
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
