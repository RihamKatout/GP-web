import { Button } from "antd";
import React, { useState } from "react";
import { Loader, ProductCard } from "../../components/common";
import { CardsGrid } from "../../styles";
import styled from "styled-components";
import { Pagination, useMediaQuery } from "@mui/material";
import { Product } from "../../types";
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
  borderRadius: "0.25rem",
  border: "1px solid #ccc",
});

interface ProductsShowcaseSectionProps {
  products?: Product[];
  isLoading: boolean;
  setProducts: (products: Product[]) => void;
  handlePageChange: (newPage: number) => void;
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}
// TODO : fix reponsive

export const ProductsShowcaseSection: React.FC<ProductsShowcaseSectionProps> = ({
  products,
  isLoading,
  setProducts,
  handlePageChange,
  page
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  // product sorting
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortType, setSortType] = useState<string>("default");

  const handleSortChange = (sort: string) => {
    if (sort === "default" || !products?.length) return;

    setSortType(sort);
    const newProducts = [...products].sort((a, b) => {
      if (sort === "price") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      }
      if (sort === "rating") {
        return sortDirection === "asc"
          ? (a.rating || 0) - (b.rating || 0)
          : (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });
    setProducts(newProducts);
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
          <Button style={{ fontSize: "0.83rem" }}>For you</Button>
          <Button style={{ fontSize: "0.83rem" }}>Top sellers</Button>
          <Button style={{ fontSize: "0.83rem" }}>Newest</Button>
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
        <CardsGrid style={{ flexWrap: "wrap" }}>
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </CardsGrid>
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
