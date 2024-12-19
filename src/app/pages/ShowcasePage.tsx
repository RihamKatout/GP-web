import React from "react";
import { MainLayout, SectionContainer } from "../components/Layout";
import { SectionIdEnum } from "../types";

export const Showcase: React.FC = () => {
  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.showcase}>
        <h1>showcase</h1>
      </SectionContainer>
    </MainLayout>
  );
};
