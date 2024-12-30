import { useQuery } from "react-query";
import { CardsGrid } from "../../../styles";
import { CategoryCard, Loader } from "../../common";
import { useMediaQuery, useTheme } from "@mui/material";
import { StoreCategoryService } from "../../../api";
import { Category } from "../../../types";
import { useNavigate } from "react-router-dom";

// TODO: fix
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
  );
};
