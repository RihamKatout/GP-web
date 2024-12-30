import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductCategoryService, ProductService } from "../../api";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { ProductsShowcaseSection } from "../../features";
import { ProductFilters, SectionIdEnum } from "../../types";
import { Loader } from "../../components/common";
import { debounce } from "@mui/material";


export const ShowcasePage: React.FC = () => {

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.products}>
        <h1></h1>
      </SectionContainer>
    </MainLayout>
  );
};
