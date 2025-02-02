import { CardsGrid } from "../../../styles";
import { CategoryCard, Loader } from "../../common";
import { Category } from "../../../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const CategoriesSectionContainer = styled.div`
  padding-top: 4rem;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .shopImg {
    width: 28%;
    height: 28%;
  }
  h1 {
    margin: 0;
    font-family: "DynaPuff";
    font-weight: 400;
    font-size: 3.7rem;
    color: rgb(27, 26, 52);
  }
  @media (max-width: 768px) {
    padding-top: 2rem;
    flex-direction: column;
    gap: 1rem;
    .shopImg {
      width: 45%;
      height: 45%;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
`;

interface StoreCategoriesSectionProps {
  categories?: Category[];
  isLoading: boolean;
  error: any;
}
export const StoreCategoriesSection: React.FC<StoreCategoriesSectionProps> = ({
  categories,
  isLoading,
  error,
}) => {
  const navigate = useNavigate();

  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <CategoriesSectionContainer>
      <img
        className="shopImg"
        src="src/assets/store/3d_shop_building.png"
        alt="3d shop"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Shop Categories</h1>
        {isLoading ? (
          <Loader type="bouncing" />
        ) : (
          <CardsGrid style={{ padding: "0" }}>
            {categories?.map((category: Category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                id={category.id}
                imageurl={category.imageurl}
                type="STORE"
                onClick={() => {
                  navigate("/product?storeCategoryId=" + category.id);
                }}
              />
            ))}
          </CardsGrid>
        )}
      </div>
    </CategoriesSectionContainer>
  );
};
