import { useQuery } from "react-query";
import { getShopCategoriesApi } from "../api";
import { CategoryCard } from "../components/shared";
import { ShopCategory } from "../types";
import { CardsGrid } from "../styles";
import { Loader } from "../components/shared";
import { useMediaQuery, useTheme } from "@mui/material";

export const ShopCategoriesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery(["categories"], getShopCategoriesApi);
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        height: "80vh",
        justifyContent: "center",
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
            fontSize: "3.5rem",
          }}
        >
          Shop Categories
        </h1>
      )}
      {isLoading ? (
        <Loader type="bouncing" />
      ) : (
        <CardsGrid>
          {categories?.data.map((category: ShopCategory) => (
            <CategoryCard
              key={category.id}
              title={category.categoryName}
              id={category.id}
              imageURL={category.imageURL}
            />
          ))}
        </CardsGrid>
      )}
    </div>
  );
};
