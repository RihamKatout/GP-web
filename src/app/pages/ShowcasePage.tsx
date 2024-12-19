import React, { useEffect } from "react";
import { MainLayout, SectionContainer } from "../components/Layout";
import { SectionIdEnum } from "../types";

export const Showcase: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.showcase}>
        <h1>showcase</h1>
      </SectionContainer>
    </MainLayout>
  );
};
