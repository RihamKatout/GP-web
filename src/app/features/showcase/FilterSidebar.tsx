import { Button, Divider, styled, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useMediaQuery } from "@mui/material";
import { Category, ProductFilters } from "../../types";
import { CategoryCard, SearchField } from "../../components/common";
import { useState } from "react";
import React, { useEffect } from "react";
import { StoreCategoryService } from "../../api";

const SidebarSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  overflow: "hidden",
});

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
  gap: "2.2rem",
  padding: "1rem",
  width: "18vw",
  height: "100%",
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
  handleFilterChange: (name: keyof ProductFilters, value: any) => void;
}

// TODO : put productCategories in a carousel
export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  storeCategoryId,
  handleFilterChange,
}) => {
  // mobile responsive
  const isMobile = useMediaQuery("(max-width:600px)");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const toggleFilters = () => {
    setFiltersVisible((prev) => !prev);
  };

  // product categories
  const [productCategories, setProductCategories] = React.useState<Category[]>(
    []
  );
  const handleCategoryClick = (categoryId?: number) => {
    handleFilterChange("categoryId", categoryId);
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

  if (isMobile) {
    return (
      <SidebarContainer style={{ gap: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <SearchField />
          <IconButton onClick={toggleFilters}>
            <FilterListIcon />
          </IconButton>
        </div>
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100%",
            marginTop: "0.5rem",
          }}
        >
          View products
        </Button>
        {filtersVisible && (
          <div>
            {/* Mobile Filters */}
            <SidebarSection>
              <Divider style={{ color: "black", fontWeight: "bold" }}>
                Product options
              </Divider>
              {[
                "Available",
                "3d model",
                "Customizable",
                "Discounted items",
              ].map((option) => (
                <label key={option}>
                  <input type="checkbox" /> {option}
                </label>
              ))}
            </SidebarSection>

            <SidebarSection>
              <Divider style={{ color: "black", fontWeight: "bold" }}>
                Price
              </Divider>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="number"
                    placeholder="$"
                    style={{
                      padding: "0.2rem",
                      borderRadius: "0.25rem",
                      border: "1px solid #ccc",
                      width: "4rem",
                    }}
                  />
                  <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                    type="number"
                    placeholder="$"
                    style={{
                      padding: "0.2rem",
                      borderRadius: "0.25rem",
                      border: "1px solid #ccc",
                      width: "4rem",
                    }}
                  />
                </div>
                <Button
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "black",
                    color: "white",
                    height: "4.7vh",
                  }}
                >
                  OK
                </Button>
              </div>
            </SidebarSection>
          </div>
        )}
        {/* categories */}
        <CategoriesContainer>
          {productCategories.map((category: Category) => (
            <div
              key={category.id}
              style={{
                padding: "1rem",
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
                onClick={() => {
                  // navigate(`/${showcaseType}?categoryId=${category.id}`);
                  // window.location.reload();
                }}
              />
            </div>
          ))}
        </CategoriesContainer>
      </SidebarContainer>
    );
  }

  return (
    <SidebarContainer>
      {/* Category Section */}
      <SidebarSection style={{ alignItems: "center" }}>
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
      </SidebarSection>
      <SidebarSection>
        <Divider style={{ color: "black", fontWeight: "bold" }}>
          Categories
        </Divider>
        {/* categories */}
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
      </SidebarSection>

      {/* Product Options */}
      <SidebarSection>
        <Divider style={{ color: "black", fontWeight: "bold" }}>
          Product options
        </Divider>
        {["Available", "3d model", "Customizable", "Discounted items"].map(
          (option) => (
            <label key={option}>
              <input type="checkbox" /> {option}
            </label>
          )
        )}
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
              style={{
                padding: "0.2rem",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
                width: "50%",
              }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}> - </span>
            <input
              type="number"
              placeholder="$"
              style={{
                padding: "0.2rem",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
                width: "50%",
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
          >
            OK
          </Button>
        </div>
      </SidebarSection>
    </SidebarContainer>
  );
};
