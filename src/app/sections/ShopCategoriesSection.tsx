import { useQuery } from "react-query";
import { getShopCategoriesApi } from "../api/shop";
import { CategoryCard } from "../components/shared";
import { ShopCategory } from "../types";
import { CategoriesGrid } from "../styles";
import { Loader } from "../components/shared";
export const ShopCategoriesSection = () => {
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
        padding: "3rem",
      }}
    >
      <h1
        style={{
          fontFamily: "DynaPuff",
          fontWeight: "400",
          fontSize: "3.5rem",
        }}
      >
        Shop Categories
      </h1>
      {isLoading ? (
        <Loader type="bouncing"/>
      ) : (
        <CategoriesGrid>
          {categories?.data.map((category: ShopCategory) => (
            <CategoryCard
              key={category.id}
              title={category.categoryName}
              id={category.id}
              imageURL={category.imageURL}
            />
          ))}
        </CategoriesGrid>
      )}
    </div>
  );
};
