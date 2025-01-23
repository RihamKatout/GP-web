import React, { useState } from "react";
import { Loader, ProductCard } from "../../components/common";
import { CardsGrid } from "../../styles";
import styled from "styled-components";
import { Pagination, useMediaQuery } from "@mui/material";
import { ProductWithStoreDto } from "../../types";
import SwapVertIcon from "@mui/icons-material/SwapVert";

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
        return sortDirection === "asc"
          ? a.product.basePrice - b.product.basePrice
          : b.product.basePrice - a.product.basePrice;
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
        margin: "0 1rem",
      }}
    >
      {/* showcase header (types and sorting) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "1rem 1.5rem",
        }}
      >
        <CardsGrid
          style={{
            padding: isMobile ? "0.5rem" : "0",
            gap: isMobile ? "0.2rem" : "0.5rem",
          }}
        >
          <Button
            style={{ backgroundColor: "rgba(27, 26, 52, 1)", color: "white" }}
          >
            For you
          </Button>
          <Button>Top sellers</Button>
          <Button>Newest</Button>
        </CardsGrid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0",
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

const Button = styled.button`
  width: fit-content;
  border: none;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  transition: background-color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary_dark};
  }
`;

const SortSelect = styled.select`
  padding: 0.1rem;
  border-radius: 0.5rem;
  border: 2px solid rgba(74, 73, 73, 0.339);
  font-family: Overlock;
`;

const ShowcaseBody = styled.div`
  width: 100%;
  display: flex;
  margin: 0 1rem;
  flex-direction: column;
  align-items: center;
`;
