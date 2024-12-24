import { SectionIdEnum } from "../types";
import { MainLayout, SectionContainer } from "../components/Layout";
import { HelpCenter } from "../components/specificComponents/HelpCenterSection";
import { OffersSection } from "../features/offers/OffersSection";
import { StoreCategoriesSection } from "../features/stores/StoreCategoriesSection";

//TODO : fix sections
const sections = [
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
    component: <HelpCenter />,
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
