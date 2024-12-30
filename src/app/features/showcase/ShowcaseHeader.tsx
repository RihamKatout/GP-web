import { styled } from "@mui/material";
import React from "react";
import { Category } from "../../types";
import {  useNavigate } from "react-router-dom";
import { CategoryCard } from "../../components/common";

const CategoriesContainer = styled("div")({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  width: "80vw",
});



interface ShowcaseHeaderProps {
  categories?: Category[];
  showcaseType: "store" | "product";
}


export const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({
  categories, 
  showcaseType
}) => {
  const navigate = useNavigate();
  return (
      <CategoriesContainer>
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            imageurl={category.imageurl}
            id={category.id}
            type="PRODUCT"
            onClick={() => {
              navigate(`/${showcaseType}?categoryId=${category.id}`);
              window.location.reload();
            }}
          />
        ))}
      </CategoriesContainer>
  );
};
