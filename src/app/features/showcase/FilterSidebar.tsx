import {  styled } from "@mui/material";
import { Category } from "../../types";
import { CategoryCard, SearchField } from "../../components/common";
import React, { useEffect } from "react";
import { StoreCategoryService } from "../../api";
import { Divider } from "antd";
import { Theme } from "../../utils/Theme";

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
       <h3 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '1.1rem'}}>Categories</h3> 
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
       <h3 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '1.1rem'}}>Product options</h3> 
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

    <Divider style={{ borderColor: '#1a1a19b3' , fontWeight: "bold" }}>
     <h3 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '1.1rem'}}>Price Range</h3> 
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
  color: "#1b1a1a",
  border:'none',
  borderRadius: "15px",
  fontWeight: 600,
  width: "250px",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "Overlock",
  transition: "background-color 0.3s",
  backgroundColor: Theme.colors.primary,
  boxShadow: '0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset',
  '&:hover': {
      transform: "scale(1.05);",
      boxShadow: '0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset',
      backgroundColor: Theme.colors.secondary_light,
       }
}));

const ProductOptionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "0.5rem",
  borderRadius: "15px",
  backgroundColor: "#ffffff",
  textAlign: "center",
  //boxShadow: "0rem 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.065)",
});

const OptionLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  fontWeight: 600,
  color: "#333",
  fontFamily: "Delius Swash Caps",
  textAlign: "center",
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
  borderRadius: 10,
  width: "30%",
  fontSize: "0.9rem",
  boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
  border: "1px solid rgba(217, 217, 217, 0.5)",
  "&:focus": {
        outline: "none",
        boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
      }
});
