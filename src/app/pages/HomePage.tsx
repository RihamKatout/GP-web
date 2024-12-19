import { SectionIdEnum } from "../types";
import { OffersSection, ShopCategoriesSection } from "../sections";
import { MainLayout, SectionContainer } from "../components/Layout";

const sections = [
  {
    sectionId: SectionIdEnum.offers,
    component: <OffersSection />,
  },
  {
    sectionId: SectionIdEnum.categories,
    component: <ShopCategoriesSection />,
  },
  {
    sectionId: SectionIdEnum.shop,
    component: <OffersSection />,
  },
  {
    sectionId: SectionIdEnum.help,
    component: <OffersSection />,
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
