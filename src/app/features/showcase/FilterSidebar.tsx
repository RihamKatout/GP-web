import {  styled } from "@mui/material";
import { Category } from "../../types";
import { CategoryCard, SearchField } from "../../components/common";
import React, { useEffect } from "react";
import { StoreCategoryService } from "../../api";
import { Divider } from "antd";

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

// TODO : put productCategories in a carousel, fix mobile responsiveness, and handle searching
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
        
      >
        View stores
      </Button>
      <Divider
        style={{borderColor: '#1a1a19b3' , fontWeight: "bold"}}
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
         style={{borderColor: '#1a1a19b3' , fontWeight: "bold"}}
      >
        Product options
      </Divider>

      {/* product options  */}
      <ProductOptionsContainer>
    <OptionLabel>
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
    </OptionLabel>
    <OptionLabel>
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
    </OptionLabel>
    <OptionLabel>
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
    </OptionLabel>

    <Divider style={{ borderColor: "#d4d4d4", fontWeight: "bold" }}>
      Price Range
    </Divider>
    <PriceRangeContainer>
      <h6>Price</h6>
      <PriceInput
        type="number"
        placeholder="Min"
        value={filterOptions.minPrice || ""}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            minPrice: e.target.value ? Number(e.target.value) : undefined,
          });
        }}
      />
      <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}> - </span>
      <PriceInput
        type="number"
        placeholder="Max"
        value={filterOptions.maxPrice || ""}
        onChange={(e) => {
          setFilterOptions({
            ...filterOptions,
            maxPrice: e.target.value ? Number(e.target.value) : undefined,
          });
        }}
      />
    </PriceRangeContainer>
    <Button onClick={handleFilterButtonClick}>Apply Filters</Button>
  </ProductOptionsContainer>
    </SidebarContainer>
  );
};
const Button = styled("button")(({ theme }) => ({
  padding: "0.5rem 1rem",
  backgroundColor: "#e4bcbc",
  color: "#1b1a1a",
  border: "2px solid #131313ae",
  borderRadius: "15px",
  fontWeight: 600,
  width: "250px",
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s",

  "&:hover": {
    backgroundColor: "white",
  },
}));

const ProductOptionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  //marginTop: "1rem",
  padding: "0.5rem",
  border: "1px solid #d4d4d4",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
});

const OptionLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  fontWeight: 500,
  color: "#333",
  "& input": {
    marginRight: "0.5rem",
    accentColor: "#e4bcbc",
  },
  "&:hover": {
    color: "#1b1a1a",
  },
});

const PriceRangeContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const PriceInput = styled("input")({
  padding: "0.4rem",
  borderRadius: "0.25rem",
  border: "1px solid #ccc",
  width: "30%",
  fontSize: "0.9rem",
});
