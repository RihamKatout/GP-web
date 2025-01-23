import React, { useState } from "react";
import { Loader, ProductCard } from "../../components/common";
import { CardsGrid } from "../../styles";
import styled from "styled-components";
import { Pagination, useMediaQuery } from "@mui/material";
import { ProductWithStoreDto } from "../../types";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const ShowcaseBody = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
  margin: " 1rem 2rem",
  flex: "1",
});

const SortSelect = styled("select")({
  padding: "0.2rem",
  borderRadius: "15px",
  border: "2px solid rgba(74, 73, 73, 0.339)",
  boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
  fontFamily: "Delius Swash Caps",
});
const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #1b1a1a;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 15px;
  font-weight: 600;
  width: 100px;
  text-align: center;
  cursor: pointer;
  //transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.primary}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary_light}; 
  }
`;

interface ProductsShowcaseSectionProps {
  productsDto?: ProductWithStoreDto[];
  isLoading: boolean;
  setProductsDto: (products: ProductWithStoreDto[]) => void;
  handlePageChange: (newPage: number) => void;
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}

export const ProductsShowcaseSection: React.FC<
  ProductsShowcaseSectionProps
> = ({ productsDto, isLoading, setProductsDto, handlePageChange, page }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  // product sorting
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortType, setSortType] = useState<string>("default");

  const handleSortChange = (sort: string) => {
    if (sort === "default" || !productsDto?.length) return;

    setSortType(sort);
    const newProductsDto = [...productsDto].sort((a, b) => {
      if (sort === "price") {
        return sortDirection === "asc" ? a.product.basePrice - b.product.basePrice : b.product.basePrice - a.product.basePrice;
      }
      if (sort === "rating") {
        return sortDirection === "asc"
          ? (a.product.rating || 0) - (b.product.rating || 0)
          : (b.product.rating || 0) - (a.product.rating || 0);
      }
      return 0;
    });
    setProductsDto(newProductsDto);
  };

  const handleSortDirectionChange = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    if (sortType !== "default") {
      handleSortChange(sortType);
    }
  };

  return (
    <ShowcaseBody
      style={{
        width: isMobile ? "90%" : "auto",
      }}
    >
      {/* showcase header (types and sorting) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: isMobile ? "0" : "0 1.3rem",
        }}
      >
        <CardsGrid
          style={{
            padding: isMobile ? "0.5rem" : "1rem",
            gap: isMobile ? "0.2rem" : "1rem",
          }}
        >
          <Button style={{ fontSize: "0.83rem" , fontFamily: "Delius Swash Caps", }}>For you</Button>
          <Button style={{ fontSize: "0.83rem" , fontFamily: "Delius Swash Caps",}}>Top sellers</Button>
          <Button style={{ fontSize: "0.83rem",fontFamily: "Delius Swash Caps", }}>Newest</Button>
        </CardsGrid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 1rem",
            cursor: "pointer",
          }}
        >
          <SortSelect onChange={(e) => handleSortChange(e.target.value)}>
            <option value="default" hidden>
              Sort
            </option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </SortSelect>
          <SwapVertIcon onClick={handleSortDirectionChange} />
        </div>
      </div>

      {isLoading ? (
        <Loader type="bouncing" />
      ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(210px, 210px))",
              gap: "0.8rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {productsDto?.map((productDto) => (
              <ProductCard key={productDto.product.id} {...productDto} />
            ))}
          </div>
      )}
      <Pagination
        count={page.totalPages}
        page={page.number + 1}
        onChange={(_, page) => handlePageChange(page - 1)}
        sx={{ margin: "2rem 0" }}
      />
    </ShowcaseBody>
  );
};
