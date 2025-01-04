import { SectionIdEnum } from "../types";
import { MainLayout, SectionContainer } from "../components/Layout";
import { StoreCategoriesSection } from "../components/specificComponents/sections/StoreCategoriesSection";
import { OffersSection } from "../features";
import { HelpCenterSection, HeroSection } from "../components/specificComponents";

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
    component: <StoreCategoriesSection />,
  },
  {
    sectionId: SectionIdEnum.shop,
    component: <OffersSection />,
  },
  {
    sectionId: SectionIdEnum.help,
    component: <HelpCenterSection />,
  },
];

export const HomePage = () => {
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
