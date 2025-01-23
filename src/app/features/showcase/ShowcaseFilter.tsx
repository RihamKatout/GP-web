import { Category } from "../../types";
import { CategoryCard, SearchField } from "../../components/common";
import React, { useEffect } from "react";
import { StoreCategoryService } from "../../api";
import FilterListIcon from "@mui/icons-material/FilterList";
import styled from "styled-components";
import { Popover } from "@mui/material";

// TODO :  handle searching
interface FilterSidebarProps {
  storeCategoryId: number;
  handleProductOptionsChange: (options: FilterOptions) => void;
}

export interface FilterOptions {
  available?: boolean;
  threeDModel?: boolean;
  customizable?: boolean;
  is3dCustomizable?: boolean;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
}
export const ShowcaseFilter: React.FC<FilterSidebarProps> = ({
  storeCategoryId,
  handleProductOptionsChange,
}) => {
  const [productCategories, setProductCategories] = React.useState<Category[]>(
    []
  );
  const [filterOpen, setFilterOpen] = React.useState(false);
  const filterButtonRef = React.useRef<HTMLDivElement>(null);
  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    available: undefined,
    threeDModel: undefined,
    customizable: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    is3dCustomizable: undefined,
  });

  const handleCategoryClick = (categoryId?: number) => {
    const newFilterOptions = {
      available: undefined,
      threeDModel: undefined,
      customizable: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      categoryId: categoryId,
      is3dCustomizable: undefined,
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

  const handleFilterButtonClick = () => {
    handleProductOptionsChange(filterOptions);
    setFilterOpen(false);
  };

  const handleFilterIconClick = () => {
    setFilterOpen(true);
  };

  return (
    <FilterContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "0.5rem 2rem",
        }}
      >
        <SearchField />
        <div ref={filterButtonRef}>
          <FilterListIcon
            onClick={handleFilterIconClick}
            style={{ cursor: "pointer", marginRight: "1rem" }}
          />
        </div>
      </div>

      <Popover
        open={filterOpen}
        anchorEl={filterButtonRef.current}
        onClose={() => setFilterOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
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
          <OptionLabel>
            <input
              type="checkbox"
              checked={!!filterOptions.is3dCustomizable}
              onChange={(e) => {
                setFilterOptions({
                  ...filterOptions,
                  is3dCustomizable: e.target.checked ? true : undefined,
                });
              }}
            />
            3d customizable
          </OptionLabel>
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
          </PriceRangeContainer>{" "}
          <Button onClick={handleFilterButtonClick}>Apply Filters</Button>
        </ProductOptionsContainer>
      </Popover>

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
    </FilterContainer>
  );
};

const Button = styled.button`
  width: 100%;
  border: none;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-family: Overlock;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
    background-color: ${({ theme }) => theme.colors.secondary_light};
  }
`;

const ProductOptionsContainer = styled.div`
  gap: 1rem;
  width: 300px;
  padding: 1rem;
  display: flex;
  text-align: center;
  border-radius: 15px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

const OptionLabel = styled.label`
  gap: 0.3rem;
  display: flex;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: Overlock;
`;

const PriceRangeContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const PriceInput = styled("input")({
  width: "30%",
  borderRadius: 10,
  padding: "0.4rem",
  fontSize: "0.9rem",
  boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
  border: "1px solid rgba(217, 217, 217, 0.5)",
  "&:focus": {
    outline: "none",
    boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
  },
});

const CategoriesContainer = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: -1.5rem;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 960px) {
    width: 30vw;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid black;
    padding: 0.5rem;
  }
`;
