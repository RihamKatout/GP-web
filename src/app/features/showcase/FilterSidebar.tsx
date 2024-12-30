import { Button, Divider, styled } from "@mui/material";
import { Category } from "../../types";
import { CategoryCard, SearchField } from "../../components/common";
import React, { useEffect } from "react";
import { StoreCategoryService } from "../../api";

const CategoriesContainer = styled("div")({
  display: "flex",
  padding: "0",
  marginBottom: "-1.5rem",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "center",
});

const SidebarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1rem",
  width: "18vw",
  height: "100%",
  overflow: "hidden",
  borderRight: "1px solid black",
  [theme.breakpoints.down("md")]: {
    width: "30vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    borderRight: "none",
    borderBottom: "1px solid black",
    padding: "0.5rem",
  },
}));

interface FilterSidebarProps {
  storeCategoryId: number;
  handleProductOptionsChange: (options: FilterOptions) => void;
}

export interface FilterOptions {
  available?: boolean;
  threeDModel?: boolean;
  customizable?: boolean;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
}

// TODO : put productCategories in a carousel and fix mobile responsiveness
export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  storeCategoryId,
  handleProductOptionsChange,
}) => {
  // product categories
  const [productCategories, setProductCategories] = React.useState<Category[]>(
    []
  );
  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    available: undefined,
    threeDModel: undefined,
    customizable: undefined,
    minPrice: undefined,
    maxPrice: undefined,
  });

  const handleCategoryClick = (categoryId?: number) => {
    const newFilterOptions = {
      available: undefined,
      threeDModel: undefined,
      customizable: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      categoryId: categoryId,
    };
    setFilterOptions(newFilterOptions);
    handleProductOptionsChange(newFilterOptions);
  };

  useEffect(() => {
    const fetchStoreCategory = async () => {
      const response = await StoreCategoryService.getStoreCategoryById(
        storeCategoryId
      );
      setProductCategories([...response.data.productCategories]);
    };
    fetchStoreCategory();
  }, []);

  // filter options
  const handleFilterButtonClick = () => {
    console.log("Filter data:", filterOptions);
    handleProductOptionsChange(filterOptions);
  };

  return (
    <SidebarContainer>
      {/* search Section */}
      <SearchField />
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
        }}
      >
        View stores
      </Button>
      <Divider
        style={{ color: "black", fontWeight: "bold", marginTop: "0.5rem" }}
      >
        Categories
      </Divider>
      <CategoriesContainer>
        <div
          key={0}
          style={{
            padding: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CategoryCard
            title="All"
            id={0}
            type="PRODUCT"
            onClick={() => handleCategoryClick()}
          />
        </div>
        {productCategories.map((category: Category) => (
          <div
            key={category.id}
            style={{
              padding: "0.55rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CategoryCard
              title={category.name}
              imageurl={category.imageurl}
              id={category.id}
              type="PRODUCT"
              onClick={() => handleCategoryClick(category.id)}
            />
          </div>
        ))}
      </CategoriesContainer>
      <Divider
        style={{ color: "black", fontWeight: "bold", marginTop: "0.5rem" }}
      >
        Product options
      </Divider>

      {/* product options  */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={!!filterOptions.available}
            onChange={(e) => {
              setFilterOptions({
                ...filterOptions,
                available: e.target.checked ? true : undefined,
              });
            }}
          />
          Available
        </label>
        <label>
          <input
            type="checkbox"
            checked={!!filterOptions.threeDModel}
            onChange={(e) => {
              setFilterOptions({
                ...filterOptions,
                threeDModel: e.target.checked ? true : undefined,
              });
            }}
          />
          3D Model
        </label>
        <label>
          <input
            type="checkbox"
            checked={!!filterOptions.customizable}
            onChange={(e) => {
              setFilterOptions({
                ...filterOptions,
                customizable: e.target.checked ? true : undefined,
              });
            }}
          />
          Customizable
        </label>
      </div>

      {/* price range */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <h6>Price</h6>
          <input
            type="number"
            placeholder="$"
            value={filterOptions.minPrice || ""}
            style={{
              padding: "0.2rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
              width: "50%",
            }}
            onChange={(e) => {
              setFilterOptions({
                ...filterOptions,
                minPrice: e.target.value ? Number(e.target.value) : undefined,
              });
            }}
          />
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}> - </span>
          <input
            type="number"
            placeholder="$"
            value={filterOptions.maxPrice || ""}
            style={{
              padding: "0.2rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
              width: "50%",
            }}
            onChange={(e) => {
              setFilterOptions({
                ...filterOptions,
                maxPrice: e.target.value ? Number(e.target.value) : undefined,
              });
            }}
          />
        </div>
        <Button
          style={{
            marginLeft: "0.1rem",
            backgroundColor: "black",
            color: "white",
            height: "4.7vh",
            width: "100%",
          }}
          onClick={handleFilterButtonClick}
        >
          OK
        </Button>
      </div>
    </SidebarContainer>
  );
};
