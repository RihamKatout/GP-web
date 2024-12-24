import { useQuery } from "react-query";
import { CardsGrid } from "../../styles";
import { CategoryCard, Loader } from "../../components/common";
import { useMediaQuery, useTheme } from "@mui/material";
import { StoreCategoryService } from "../../api";
import { StoreCategory } from "../../types";

// TODO: fix 
export const StoreCategoriesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery(["categories"], StoreCategoryService.getShopCategories);
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
          {categories?.data.map((category: StoreCategory) => (
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
