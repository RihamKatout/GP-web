import { useQuery } from "react-query";
import { CardsGrid } from "../../../styles";
import { CategoryCard, Loader } from "../../common";
import { useMediaQuery, useTheme } from "@mui/material";
import { StoreCategoryService } from "../../../api";
import { Category } from "../../../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoriesSectionContainer = styled.div`
  padding-top: 4rem;
  gap: 2rem;
  display: flex;
  justify-content: center;
  // background-color: red;
  align-items: center;
  .shopImg {
    width: 28%;
    height: 28%;
  }
  h1{
    margin: 0;
  }
  @media (max-width: 768px) {
  padding-top: 2rem;
    flex-direction: column;
    gap: 1rem;
    .shopImg {
      width: 45%;
      height: 45%;
    }
  }
`;

export const StoreCategoriesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery(["categories"], StoreCategoryService.getStoreCategories);
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
        {isMobile ? (
          <h1
            style={{
              fontFamily: "DynaPuff",
              fontWeight: "400",
              fontSize: "2.5rem",
            }}
          >
            Shop Categories
          </h1>
        ) : (
          <h1
            style={{
              fontFamily: "DynaPuff",
              fontWeight: "400",
              fontSize: "3.7rem",
              color: "rgb(27, 26, 52)",
            }}
          >
            Shop Categories
          </h1>
        )}
        {isLoading ? (
          <Loader type="bouncing" />
        ) : (
          <CardsGrid style={{ padding: "0" }}>
            {categories?.data.map((category: Category) => (
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
