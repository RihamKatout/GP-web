import React from "react";
import styled from "styled-components";
import { Product } from "../types";
import { PaginatedResponse } from "../api/shop";
import { CardsGrid, ProductCardStyle } from "../styles";
import {
  PaginationContainer,
  PaginationButton,
} from "../styles/MainLayout.style/Pagination.styled";
import ProductCard from "../components/shared/ProductCard";

export interface ProductsShowcaseSectionProps {
  data?: PaginatedResponse<Product>;
  page: number | 0;
  handlePageChange: (newPage: number) => void;
}

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ProductsShowcaseSection: React.FC<
  ProductsShowcaseSectionProps
> = ({ data, page, handlePageChange }) => {
  return (
    <ShowcaseContainer>
      {data?.content.length === 0 && (
        <h1 style={{ margin: "2rem" }}>No products found</h1>
      )}
      <CardsGrid>
        {data?.content.map((product: Product) => (
          <ProductCard {...product} />
        ))}
      </CardsGrid>
      <PaginationContainer>
        <PaginationButton
          disabled={page === 0}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </PaginationButton>
        <span>
          Page {data?.page?.totalPages === 0 ? 0 : page + 1} of{" "}
          {data?.page?.totalPages}
        </span>
        <PaginationButton
          disabled={
            data?.page?.totalPages === 0 || page + 1 === data?.page?.totalPages
          }
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </ShowcaseContainer>
  );
};
